from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

# --- ПРОДУКТЫ (Products) ---

# Это класс для GET (список) и POST (создание). Всё! Никаких методов писать не надо.
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Это класс для GET (один), PUT (обновить), DELETE (удалить).
class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id' # Говорим, как называется ID в ссылке


# --- КАТЕГОРИИ (Categories) ---

class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


# --- КАСТОМНЫЙ ПУТЬ (Custom View) ---
# Для ссылки /categories/<id>/products/
class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        # 1. Ищем в базе только те продукты, у которых category_id совпадает с тем, что в ссылке
        products = Product.objects.filter(category_id=category_id)
        # 2. Переводим их в JSON
        serializer = ProductSerializer(products, many=True)
        # 3. Отдаем клиенту
        return Response(serializer.data)