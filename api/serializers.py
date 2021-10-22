from rest_framework import serializers

from . import models

class LyricsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Lyrics
        extra_kwargs={'title':{'required':True}, 'artist':{'required':True}, 'body':{'required':True},'title_slug':{'required':True}, 'artist_slug':{'required':True}}
        fields=('id','title', 'artist', 'body', 'artist_slug', 'title_slug','views')

class SaveListSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.SaveList
        extra_kwargs={'owner_username':{'required':True}, 'lyrics_id':{'required':True},}
        fields=('id', 'owner_username', 'lyrics_id')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.User
        extra_kwargs={'username':{'required':True},'email_username':{'required':True},  'password':{'required':True, 'write_only':True,}, 'email':{'required':True,},'is_verified':{'write_only':False}}
        fields=('username', 'email', 'first_name', 'last_name','password', 'email_username', 'is_verified')

class SearchHistorySerializer(serializers.ModelSerializer):
    moment=serializers.DateTimeField(format='%b %d, %I:%M %P')
    class Meta:
        model=models.SearchHistory
        fields=('id','title', 'artist', 'moment')