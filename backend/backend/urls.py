from django.contrib import admin
from django.urls import path, include


api_urls = [
    path('auth/', include('core.auth.urls'), name='auth'),
    path('tasks/', include('tasks.urls'), name='tasks')
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_urls), name='api')
]
