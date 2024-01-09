from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

schema_view = get_schema_view(
    openapi.Info(
        title="Kindergarten API",
        default_version="v1",
        description="Kindergarten description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="rakibulislam8226@gmail.com"),
        license=openapi.License(name="Kindergarten License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

# Admin Customization
admin.site.site_header = settings.APP_SITE_HEADER
admin.site.index_title = settings.APP_INDEX_TITLE


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    # Swagger
    path(
        "api/docx",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    # JWT Token
    path(
        "api/v1/token",
        TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "api/v1/token/refresh",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path(
        "api/v1/token/verify",
        TokenVerifyView.as_view(),
        name="token_verify",
    ),
    # core
    path("api/v1", include("core.rest.urls")),
    # classwork
    path("api/v1/classwork", include("classwork.rest.urls")),
    # account
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
