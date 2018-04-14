# from django.shortcuts import render

from rest_framework import viewsets, mixins
from rest_framework.permissions import *
from .models import *
from .serializers import *
from eagerewok.users.permissions import *
# from rest_framework.response import Response

# http://www.django-rest-framework.org/api-guide/viewsets/
# curl -d '{"name":"'"c++"'"}' -H "Content-Type: application/json" -X POST http://localhost:8000/api/v1/skills
class SkillViewSet(
	mixins.ListModelMixin,
	mixins.RetrieveModelMixin, 
	mixins.UpdateModelMixin, 
	mixins.CreateModelMixin, 
	viewsets.GenericViewSet,
):
	"""View / Update Skills"""
	queryset = Skill.objects.all()
	serializer_class = SkillSerializer
	permission_classes = (AllowAny,)

	# def list(self, request):
	# 	queryset = Skill.objects.all()
	# 	serializer = SkillSerializer(queryset, many=True)
	# 	return Response(serializer.data)

	# def retrieve(self, request, pk=None):
	# 	queryset = Skill.objects.all()
	# 	skill = get_object_or_404(queryset, pk=pk)
	# 	serializer = SkillSerializer(skill)
	# 	return Response(serializer.data)

class CategoryViewSet(
	mixins.ListModelMixin,
	mixins.RetrieveModelMixin, 
	mixins.UpdateModelMixin, 
	mixins.CreateModelMixin, 
	viewsets.GenericViewSet,
):
	"""View / Update Skills"""
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	permission_classes = (AllowAny,)

class UserSkillViewSet(
	mixins.ListModelMixin,
	mixins.RetrieveModelMixin, 
	mixins.UpdateModelMixin, 
	mixins.CreateModelMixin, 
	viewsets.GenericViewSet,
):
	"""View / Update Skills"""
	queryset = UserSkill.objects.all()
	serializer_class = UserSkillSerializer
	permission_classes = (IsUserOrReadOnly,)

class SkillCategoryViewSet(
	mixins.ListModelMixin,
	mixins.RetrieveModelMixin, 
	mixins.UpdateModelMixin, 
	mixins.CreateModelMixin, 
	viewsets.GenericViewSet,
):
	"""View / Update Skills"""
	queryset = SkillCategory.objects.all()
	serializer_class = SkillCategorySerializer
	permission_classes = (IsAdminUser,)