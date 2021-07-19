from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import SignUpView, TokenObtainView

urlpatterns = [
    path('login/', TokenObtainView.as_view(), name='login'),
    path('login/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('signup/', SignUpView.as_view(), name='signup')
]
