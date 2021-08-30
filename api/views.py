from django.shortcuts import render
from . import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from django.views import View
from rest_framework import status
from . models import SaveList, User, Lyrics, SearchHistory, VerificationCode
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.authtoken.models import Token
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import login, authenticate
import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import random
from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.conf import settings
from django.template.loader import get_template
from django.urls import reverse
import jwt

from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util
from rest_framework_simplejwt.tokens import RefreshToken
from django.template import Context
from django.http import HttpResponse, HttpResponseNotFound
import os


from datetime import datetime
import random
import time
now = datetime.now()


class IndexView(View):
    def get(self, request):
        template = get_template('index.html')
        return render(request,'/index.html')


class SignupView(APIView):
    now = datetime.now()
    def post(self, request, *args,**kwargs):
        user=User()
        serializer=serializers.UserSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            password=make_password(request.data['password'])
            username=request.data['username']
            user.username=username
            user.first_name=request.data['first_name']
            user.last_name=request.data['last_name']
            user.email=request.data['email']
            user.email_username=request.data['email']
            user.password=password
            user.is_verified = False
            user.save()
            new_user=User.objects.get(id=user.id)
            token=Token.objects.create(user=new_user)
            verification = VerificationCode()
            code = random.randint(199999,999999)
            verification.code=code
            verification.user_id=new_user.id
            verification._year = now.year
            verification._month = now.month
            verification._day = now.day
            verification._hour = now.hour
            verification._minute = now.minute
            verification.save()
            from_e = settings.EMAIL_HOST_USER
            to=request.data['email']
            html = get_template('api/code.html')
            html_content = html.render({'username':new_user.username, 'code':code})
            text = 'Hi {username}, \n Please use {code} to continue with Lyriko.'
            subject = 'Confirm your email'
            email = EmailMultiAlternatives(
                subject,
                text,
                from_e,
                [to]

            )
            email.attach_alternative(html_content, 'text/html')
            try:
                email.send()
            except:
                pass
            token=Token.objects.get(user=user)
            response={'token':token.key, 'user':serializer.data}
            return Response(response)
        else:
            return Response(serializer.errors)


class SendCode(APIView):
    def post(self, request, *args, **kwargs):
        try:
            user = User.objects.get(email=request.data['email'])
            
        except:
            return Response({"error":"User not found."})
        try:
            v = VerificationCode.objects.get(user_id=user.id)
            v.delete()
        except:
            pass
        print(user.username)
        verification = VerificationCode()
        code = random.randint(199999,999999)
        verification.code=code
        verification.user_id=user.id
        verification._year = now.year
        verification._month = now.month
        verification._day = now.day
        verification._hour = now.hour
        verification._minute = now.minute
        verification.save()
        from_e = settings.EMAIL_HOST_USER
        to=request.data['email']
        html = get_template('api/code.html')
        html_content = html.render({'username':user.username, 'code':code})
        text = 'Hi {username}, \n Please use {code} to continue with Lyriko.'
        subject = 'Action Required'
        email = EmailMultiAlternatives(
            subject,
            text,
            from_e,
            [to]

        )
        email.attach_alternative(html_content, 'text/html')
        try:
            email.send()
        except:
            return Response({"error":"Error occured"})
        return Response({"success":"Success"})



class AccountActivation(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, *args, **kwargs):
        user=User.objects.get(username=request.user.username)
        code=request.data['code']
        try:
            verification = VerificationCode.objects.get(user_id=user.id, code=int(code))
            user.is_verified=True
            user.save()
            verification.delete()
            return Response({'msg':'success'})
        except:
            return Response({'error':'Invalid code.'})

            
class VerifyUser(APIView):
    def post(self, request, *args, **kwargs):
        user = User.objects.get(email=request.data['email'])
        code = request.data['code']
        try:
            _code = VerificationCode.objects.get(code=int(code), user_id=user.id)
            _code.delete()
            return Response({"msg":"success"})
        except:
            return Response({"error":"invalid code"})
            

class CheckSaveList(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, *args, **kwargs):
        try:
            if SaveList.objects.get(owner_username=request.user.username, lyrics_id=request.data['lyrics_id']):
                return Response({"watchlisted":'true'})
        except:
           return Response({"watchlisted":'false'}) 


class LyricsView(APIView):
    
    def get(self, request, *args, **kwargs):
        if request.method=='GET':
            lyrics_items=Lyrics.objects.all()
            serializer = serializers.LyricsSerializer(lyrics_items,many=True)
            response={'lyrics':serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response={'error':'Forbidden'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)


class AddLyricsView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, *args, **kwargs):
        if request.method=='POST':
            data=request.data
            lyrics=Lyrics()
            serializer=serializers.LyricsSerializer(data=data)
            if serializer.is_valid():
                lyrics.title=request.POST['title']
                lyrics.artist=request.POST['artist']
                lyrics.body=request.POST['body']
                lyrics.title_slug=request.POST['title'].replace(' ', '-').lower()
                lyrics.artist_slug=request.POST['artist'].replace(' ', '-').lower()
                response={'lyrics':serializer.data}
                return Response(response,status=status.HTTP_200_OK )
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleLyricsView(APIView):
    def post(self, request,artist_slug,title_slug, *args, **kwargs ):
        artist=request.data['title']
        title = request.data['artist']
        print(f'{artist} {title}')
        
        lyrics=Lyrics()
        search_history=SearchHistory()
        now=datetime.now()

        ### Record activities ###
        if title != "" or artist != "":
            
            search_history.searcher_username = request.data['username']
            search_history.artist=artist.replace('-',' ')
            search_history.title=title.replace('-',' ')
            #search_history.moment=now.strftime("%B %d, %Y, %I:%M %p")
            search_history.save()
            
        try:
            lyrics_item=Lyrics.objects.get(artist_slug=artist_slug, title_slug=title_slug)
            views = lyrics_item.views
            updt_views=views+1
            lyrics_item.views = updt_views
            lyrics_item.save()
            serializer=serializers.LyricsSerializer(lyrics_item, many=False)
            
            response={'lyrics':serializer.data}
            return Response(response,status=status.HTTP_200_OK )
        except Lyrics.DoesNotExist:
            flatTitle=title_slug.replace('-', '')
            flatArtist= artist_slug.replace('-', '')
            try:
                page = requests.get(f"https://www.azlyrics.com/lyrics/{flatArtist}/{flatTitle}.html")

            
                if (page.status_code == 200):
                    soup = BeautifulSoup(page.content, 'html.parser')
                    lyrics_text = soup.find_all('div')[20].get_text()
                    lyrics.title=title
                    lyrics.artist=artist
                    lyrics.title_slug=title_slug
                    lyrics.artist_slug=artist_slug
                    lyrics.body=str(lyrics_text)
                    lyrics.save()
                    lyrics_item=Lyrics.objects.get(title_slug=title_slug, artist_slug=artist_slug)
                    serializer=serializers.LyricsSerializer(lyrics_item, many=False)
                    response={'lyrics':serializer.data}
                    return Response(response,status=status.HTTP_200_OK )
                else:
                    return Response({'error':'Not Found'})
            except:
                return Response({'error':'Not Found'})

               

class SearchHistoryView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, *args, **kwargs ):
        search_history_items=SearchHistory.objects.filter(searcher_username=request.user.username).order_by('-moment').all()
        serializer=serializers.SearchHistorySerializer(search_history_items, many=True)
        response={"search_history":serializer.data}
        return Response(response,status=status.HTTP_200_OK)

class TrendingView(APIView):
    def get(self, request, *args, **kwargs):
        lyrics=Lyrics.objects.order_by('-views').all()
        serializer=serializers.LyricsSerializer(lyrics, many=True)
        response={"top":serializer.data}
        return Response(response)


class RandomView(APIView):
    def get(self, request,*args, **kwargs, ):
        lyrics=Lyrics.objects.all()
        lyrics_items=[]
        for lyric in lyrics:
            lyrics_items.append(lyric)
        random_lyrics=random.choice(lyrics_items)
        serializer=serializers.LyricsSerializer(random_lyrics)
        resp={"lyrics":serializer.data}
        return Response(resp)

class RecentView(APIView):
    def get(self, request, *args, **kwargs):
        recent_items=SearchHistory.objects.order_by('-moment').all()[:20]
        recent = []
        for i in recent_items:
            recent.append(i)
        serializer=serializers.SearchHistorySerializer(recent, many=True)
        resp={"recent":serializer.data}
        return Response(resp)

class SuggestionView(APIView):
    def post(self, request, *args, **kwargs):
        _type=request.data['type']
        if _type=="title":
            lyrics=Lyrics.objects.filter(title__contains=request.data['title'])
            serializer=serializers.LyricsSerializer(lyrics, many=True)
            resp={'suggestions':serializer.data}
            return Response(resp)
        else:
            lyrics=Lyrics.objects.filter(artist__contains=request.data['artist'])
            serializer=serializers.LyricsSerializer(lyrics, many=True)
            resp={'suggestions':serializer.data}
            return Response(resp)


class ChangePassword(APIView):
    def post(self, request, *args, **kwargs):
        if request.data['access'] == "code":
            try:
                user = User.objects.get(email=request.data['email'])
            except:
                pass
            user.password = make_password(request.data['new_password'])
            user.save()
            return Response({"msg":"success"})
        else:
            user = User.objects.get(username=request.user.username)
            current_password  = request.data['current_password']
            if check_password(current_password, user.password):
                user.password = make_password(request.data['new_password'])
                user.save()
                return Response({"success":"Password changed"})
            else:
                return Response({"error":"Incorrect password"})


class modifyUser(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, *args, **kwargs):
        user = User.objects.get(pk=request.user.id)
        new_email = request.data['email']
        old_email = user.email
        if new_email != old_email:
            user.is_verified = False
        user.username = request.data['username']
        user.email = new_email
        user.first_name = request.data['first_name']
        user.last_name = request.data['last_name']
        user.save()
        n_user = User.objects.get(id=request.user.id)
        serializer=serializers.UserSerializer(user, many=False)
        response={'user':serializer.data}
        return Response(response)



        



        


            
                    
''' class EditLyricsView(APIView):
    def post(self, request, pk, *args, **kwargs ):
        data=request.data
        lyrics=Lyrics.objects.get(pk=pk)
        lyrics.title=request.POST['title']
        lyrics.artist=request.POST['artist']
        lyrics.body=request.POST['body']
        Lyrics.objects.get(pk=pk)
        lyrics.save()
        lyrics_item=Lyrics.objects.get(pk=pk)
        serializer=serializers.LyricsSerializer(lyrics_item,many=False)
        response={'lyrics':serializer.data}
        return Response(response,status=status.HTTP_200_OK ) '''

class SaveListView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, *args, **kwargs):
        save_list_items=SaveList.objects.filter(owner_username=request.user.username)
        save_list=[]
        for i in save_list_items:
            lyrics = Lyrics.objects.get(pk=i.lyrics_id)
            save_list.append(lyrics)
        serializer = serializers.LyricsSerializer(save_list, many=True)
        
        return Response({'lyrics':serializer.data}, status=status.HTTP_200_OK)

class AddSaveListView(APIView):
    permission_classes=[IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        items=SaveList.objects.filter(owner_username=request.user.username)
        data=request.data
        username=request.user.username
        savelist=SaveList()
        try:
            if SaveList.objects.get(owner_username=request.user.username, lyrics_id=request.data['lyrics_id']):
                return Response({"Error":"Cannot add lyrics to Save List twice or more."})
        except:

            savelist.lyrics_id=request.data['lyrics_id']
            savelist.owner_username=username
            savelist.save()
            save_list_items=SaveList.objects.filter(owner_username=request.user.username)
            save_list = []
            for save_list_item in save_list_items:
                sl = Lyrics.objects.get(pk=save_list_item.lyrics_id)
                save_list.append(sl)

            serializer = serializers.LyricsSerializer(save_list, many=True)
            response={'save_list':serializer.data}
            return Response(response, status=status.HTTP_200_OK)


class RemoveSaveListView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request, *args, **kwargs):
        owner_username=request.user.username
        lyrics_id=request.data['lyrics_id']
        save_list_item=SaveList.objects.get(owner_username=owner_username, lyrics_id=lyrics_id)
        save_list_item.delete()
        save_list_items=SaveList.objects.filter(owner_username=request.user.username)
        save_list = []
        for save_list_item in save_list_items:
            sl = Lyrics.objects.get(pk=save_list_item.lyrics_id)
            save_list.append(sl)

        serializer = serializers.LyricsSerializer(save_list, many=True)
        response={'save_list':serializer.data}
        return Response(response, status=status.HTTP_200_OK)

class CheckUserView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            User.objects.get(username=request.data['username'])
            return Response({'true'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'false'})



""" class SignupView(APIView):
    def post(self, request, *args, **kwargs):
        user=User()
        serializer=serializers.UserSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            password=make_password(request.data['password'])
            username=request.data['username']
            user.username=username
            user.first_name=request.data['first_name']
            user.last_name=request.data['last_name']
            user.email=request.data['email']
            user.email_username=request.data['email']
            user.password=password
            user.save()
            new_user=User.objects.get(username=username)
            print(new_user)
            token=Token.objects.create(user=new_user)
            response={'token':token.key, 'user':serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors) """

class UserDataView(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, *args, **kwargs):
        user=User.objects.get(username=request.user.username)
        serializer=serializers.UserSerializer(user, many=False)
        response={'user':serializer.data}
        return Response(response, status=status.HTTP_200_OK)

class SigninView(APIView):
    def post(self, request, *args, **kwargs):
        password=request.data['password']
        username=request.data['username']
        print(password, username)
        try:
            if '@' not in username:
                user=User.objects.get(username=username)
            elif '@' in username:
                user=User.objects.get(email_username=username)
        except:
               return Response({'error':'User not found.'}) 
        if check_password(password, user.password):
            login(self.request, user)
            token=Token.objects.get(user=user)
            serializer=serializers.UserSerializer(user, many=False)
            response={'user':serializer.data, 'token':token.key}
            return Response(response, status=status.HTTP_200_OK)
        else:
            return Response({'error':'Incorrect password'})



        

        
   
""" data = requests.get(f"https://api.lyrics.ovh/v1/{artistSlug}/{titleSlug}/")
                lyric =  data.json()
                if data.status_code == 200:
                    lyrics.title=title
                    lyrics.artist=artist
                    lyrics.title_slug=titleSlug
                    lyrics.artist_slug=artistSlug
                    lyrics.body=lyric['lyrics']
                    lyrics.save()
                    lyrics_item=Lyrics.objects.get(title_slug=title_slug, artist_slug=artist_slug)
                
                    searchHistory.lyrics_id = lyrics_item.id
                    searchHistory.searcher_username = request.user.username
                    searchHistory.moment=now.strftime('%Y-%m-%d %H:%M:%S')
                    searchHistory.save()

                    serializer=serializers.LyricsSerializer(lyrics_item, many=False)
                    response={'lyrics':serializer.data}
                    return Response(response,status=status.HTTP_200_OK ) """