from django.urls import path, include

urlpatterns = [
    path("/plan", include("classwork.rest.urls.plan")),
]