from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path('lyrics/',views.LyricsView.as_view()),
    path('lyrics/add',views.AddLyricsView.as_view()),
    path('lyrics/<str:artist_slug>/<str:title_slug>',views.SingleLyricsView.as_view()),
    path('lyrics/savelist/',views.SaveListView.as_view()),
    path('lyrics/savelist/add/',views.AddSaveListView.as_view()),
    path('lyrics/savelist/remove/',views.RemoveSaveListView.as_view()),
    path('signin',views.SigninView.as_view()),
    path('signup',views.SignupView.as_view()),
    path('user', views.UserDataView.as_view()),
    path('checkusername/', views.CheckUserView.as_view()),
    path("checksavelist/", views.CheckSaveList.as_view()),
    path("trending", views.TrendingView.as_view()),
    path('search-history/', views.SearchHistoryView.as_view()),
    path("remove-history/", views.DeleteHistory.as_view()),
    path("random/", views.RandomView.as_view()),
    path("recent/", views.RecentView.as_view()),
    path("suggest", views.SuggestionView.as_view()),
    path('sendcode', views.SendCode.as_view()),
    path('activate/', views.AccountActivation.as_view(),name='activate'),
    path('verifycode', views.AccountActivation.as_view()),
    path("user/change-password/", views.ChangePassword.as_view()),
    path("user/acct/verify/", views.VerifyUser.as_view()),
    path("user/acct/modify/", views.modifyUser.as_view()),
    path("/lyrics/related", views.RelatedView.as_view())


]

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json'])