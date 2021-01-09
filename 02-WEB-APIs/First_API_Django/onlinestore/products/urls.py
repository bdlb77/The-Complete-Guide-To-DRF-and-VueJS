from django.urls import path
from .views import (manufacturer_detail, manufacturer_list,
                    product_detail, product_list)

urlpatterns = [
    path("products/", product_list, name="product-list"),
    path("products/<int:pk>/", product_detail, name="product-detail"),
]