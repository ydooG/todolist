from rest_framework.routers import DefaultRouter

from .views import TaskViewSet

router = DefaultRouter()
router.register('', TaskViewSet, basename='task')

urlpatterns = router.urls
