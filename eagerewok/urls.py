from django.conf import settings
from django.urls import path, re_path, include, reverse_lazy
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic.base import RedirectView
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from .users.views import *
from skills.views import *
from django.conf.urls import url

router = DefaultRouter(trailing_slash=False)
router.register(r'users', UserViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'userskill', UserSkillViewSet)
router.register(r'skillcategory', SkillCategoryViewSet)

urlpatterns = [
	path('admin/', admin.site.urls),
	path('api/', include(router.urls)),

	# retrieve token through post
	path('api-token-auth/', views.obtain_auth_token),

	# login page at api-auth/login
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	
	# url(r'^rest-auth/', include('rest_auth.urls')),
    # url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
	
	# the 'api-root' from django rest-frameworks default router
	# http://www.django-rest-framework.org/api-guide/routers/#defaultrouter
	re_path(r'^$', RedirectView.as_view(url=reverse_lazy('api-root'), permanent=False)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
