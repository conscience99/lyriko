from django.db import models
from django.contrib.auth.models import AbstractUser
import django.contrib.auth.validators
from datetime import datetime
now=datetime.now()



class User(AbstractUser):
    email_username=models.CharField(max_length=50, unique=True, blank=True, null=True)
    is_verified=models.BooleanField(default=False)
    
    
     
    

class VerificationCode(models.Model):
    user_id=models.IntegerField(blank=True, null=True) 
    code=models.CharField(max_length=150, blank=True, null=True)
    _year = models.IntegerField()
    _month = models.IntegerField()
    _day = models.IntegerField()
    _hour = models.IntegerField()
    _minute = models.IntegerField()
    
            
    

    
class Lyrics(models.Model):
    artist=models.CharField(max_length=50, )
    artist_slug=models.SlugField(null=True)
    title=models.CharField(max_length=50, )
    title_slug=(models.SlugField(null=True))
    body=models.TextField()
    views=models.IntegerField(default=0)
     
    def __str__(self):
         return self.title
     
class SaveList(models.Model):
    lyrics_id=models.IntegerField()
    owner_username=models.CharField(max_length=50)

class SearchHistory(models.Model):
    artist=models.CharField(max_length=50,blank=True, null=True )
    title=models.CharField(max_length=50,blank=True, null=True )
    searcher_username=models.CharField(max_length=50, blank=True, null=True)
    moment=models.DateTimeField(auto_now_add=True)

