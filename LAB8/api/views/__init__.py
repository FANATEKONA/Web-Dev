# Если мы захотим протестировать старые уровни, мы просто раскомментируем их здесь,
# а Level 5 закомментируем.

# --- Level 2 (FBV) ---
# from .fbv import products_list, product_detail

# --- Level 3 (CBV) ---
# from .cbv import ProductListAPIView, ProductDetailAPIView

# --- Level 4 (Mixins) ---
# from .mixins import ProductListAPIView, ProductDetailAPIView

# --- Level 5 (Generics) - Сейчас активен этот уровень! ---
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)