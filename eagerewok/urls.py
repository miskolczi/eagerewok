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

urlbase = 'api'

urlpatterns = [
	path(f'{urlbase}/admin/', admin.site.urls),
	path(f'{urlbase}/', include(router.urls)),

	# retrieve token through post
	path(f'{urlbase}/rest-auth/', views.obtain_auth_token),

	# register via api
	# https://github.com/Tivix/django-rest-auth/blob/master/rest_auth/urls.py
	url(fr'{urlbase}/rest-auth/', include('rest_auth.urls')),
    url(fr'{urlbase}/rest-auth/register/', include('rest_auth.registration.urls')),
	
	# login page at auth/login
	# https://github.com/encode/django-rest-framework/blob/master/rest_framework/urls.py
	path(f'{urlbase}/auth/', include('rest_framework.urls', namespace='rest_framework')),
	
	# the 'api-root' from django rest-frameworks default router
	# http://www.django-rest-framework.org/api-guide/routers/#defaultrouter
	re_path(r'^$', RedirectView.as_view(url=reverse_lazy(f'{urlbase}'), permanent=False)),

] + static(
		f'{urlbase}/{settings.MEDIA_URL}', 
		document_root=f'{urlbase}/{settings.MEDIA_ROOT}')
