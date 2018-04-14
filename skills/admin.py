from django.contrib import admin

from .models import Skill, Category, UserSkill, SkillCategory

admin.site.register(Skill)
admin.site.register(Category)
admin.site.register(UserSkill)
admin.site.register(SkillCategory)