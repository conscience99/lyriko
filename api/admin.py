from django.contrib import admin

from . import models

class UserAdmin(admin.ModelAdmin):
    list_display=('id', 'first_name', 'last_name', 'username', 'last_login',)

class LyricsAdmin(admin.ModelAdmin):
    list_display=('id', 'artist', 'title')

class SaveListAdmin(admin.ModelAdmin):
    list_display=('lyrics_id', 'owner_username')

class SHAdmin(admin.ModelAdmin):
    list_display=('searcher_username', 'title','artist')

class VerificationCodeAdmin(admin.ModelAdmin):
    list_display=('code', 'user_id')

admin.site.register(models.User, UserAdmin)
admin.site.register(models.Lyrics, LyricsAdmin)
admin.site.register(models.SaveList, SaveListAdmin)
admin.site.register(models.SearchHistory,SHAdmin)
admin.site.register(models.VerificationCode, VerificationCodeAdmin)
