from rest_framework import serializers
from .models import *


class SkillSerializer(serializers.ModelSerializer):

	class Meta:
		model = Skill
		fields = ('name', 'reviewed',)
		# read_only_fields = ('username', )

class CategorySerializer(serializers.ModelSerializer):

	class Meta:
		model = Category
		fields = ('name', 'reviewed',)

class UserSkillSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserSkill
		fields = ('user', 'skill', 'proficiency')

class SkillCategorySerializer(serializers.ModelSerializer):

	class Meta:
		model = SkillCategory
		fields = ('category', 'skill')
