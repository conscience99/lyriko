from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('', index),
    path('/<path:path>', index),
    path(r'^(?P<path>.*)/$', index)
    
]