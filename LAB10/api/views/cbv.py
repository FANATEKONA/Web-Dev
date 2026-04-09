from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from api.models import Product
from api.serializers import ProductSerializer


# Класс для списка продуктов (List) и создания нового (Create)
class ProductListAPIView(APIView):

    # Если клиент делает GET-запрос, автоматически сработает этот метод
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    # Если клиент делает POST-запрос, автоматически сработает этот метод
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Класс для работы с одним конкретным продуктом (Detail)
class ProductDetailAPIView(APIView):

    # Helper method (Вспомогательный метод).
    # Мы пишем его один раз, чтобы не копировать код поиска продукта в get, put и delete.
    def get_object(self, product_id):
        try:
            return Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            # Если продукта нет в базе, выдаем ошибку 404 (Не найдено)
            raise Http404

    def get(self, request, product_id):
        # 1. Находим продукт нашим помощником get_object
        product = self.get_object(product_id)
        # 2. Переводим в JSON
        serializer = ProductSerializer(product)
        # 3. Отдаем
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        # Обновляем старый продукт новыми данными
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        # Возвращаем статус 204 (Успешно удалено, возвращать нечего)
        return Response(status=status.HTTP_204_NO_CONTENT)