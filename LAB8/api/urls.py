from django.urls import path

# Импортируем наши умные классы из __init__.py
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    # --- КАТЕГОРИИ (Categories) ---

    # Путь для получения списка категорий и создания новой
    path('categories/', CategoryListAPIView.as_view()),

    # Путь для одной категории (получить, обновить, удалить)
    # <int:category_id> значит, что тут будет число (id), например categories/1/
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),

    # Путь, чтобы получить все продукты внутри одной конкретной категории
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),

    # --- ПРОДУКТЫ (Products) ---

    # Путь для получения списка продуктов и создания нового
    path('products/', ProductListAPIView.as_view()),

    # Путь для одного продукта (получить, обновить, удалить)
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]