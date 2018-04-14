from rest_framework import viewsets, mixins
from rest_framework.permissions import *
from .models import User
from .permissions import *
from .serializers import CreateUserSerializer, UserSerializer


class UserViewSet(
	mixins.RetrieveModelMixin,
	mixins.UpdateModelMixin,
	mixins.ListModelMixin,
	mixins.CreateModelMixin,
	viewsets.GenericViewSet
):
	"""
	Updates and retrives user accounts
	"""
	queryset = User.objects.all()
	permission_classes = (IsUserOrReadOnly,)
	# serializer_class = UserSerializer
	# permission_classes = (IsUserOrReadOnly,)

	def get_serializer_class(self):
		method = self.request.method
		
		if method == "POST":
			self.permission_classes = (IsUserOrReadOnly,)
			return CreateUserSerializer

		if method == "GET" and self.request.user.is_staff:
			self.permission_classes = (IsAdminUser,)
			return CreateUserSerializer
			
		else:
			self.permission_classes = (AllowAny,)
			return UserSerializer


# class UserCreateViewSet(mixins.CreateModelMixin,
# 						viewsets.GenericViewSet):
# 	"""
# 	Creates user accounts
# 	"""
# 	queryset = User.objects.all()
# 	serializer_class = CreateUserSerializer
# 	permission_classes = (AllowAny,)
