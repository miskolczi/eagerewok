from django.db import models

# Create your models here.
class Skill(models.Model):
	name = models.CharField(max_length=255)
	reviewed = models.DateTimeField(blank=True)
	created = models.DateTimeField(auto_now_add=True)

class Category(models.Model):
	name = models.CharField(max_length=255)
	reviewed = models.DateTimeField(blank=True)
	created = models.DateTimeField(auto_now_add=True)

class UserSkill(models.Model):
	user = models.ForeignKey('users.User', on_delete=models.CASCADE)
	skill = models.ForeignKey('Skill', on_delete=models.CASCADE)
	proficiency = models.PositiveSmallIntegerField()

class SkillCategory(models.Model):
	category = models.ForeignKey('Category', on_delete=models.CASCADE)
	skill = models.ForeignKey('Skill', on_delete=models.CASCADE)
