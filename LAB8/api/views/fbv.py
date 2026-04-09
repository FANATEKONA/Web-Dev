from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Product
from api.serializers import ProductSerializer

# Волшебная шляпа, которая говорит: "Эта функция понимает только GET (дай данные) и POST (создай данные)"
@api_view(['GET', 'POST'])
def products_list(request):
    if request.method == 'GET':
        # 1. Достаем все продукты из базы данных
        products = Product.objects.all()
        # 2. Переводим их на язык JSON с помощью Serializer (Сериализатора)
        serializer = ProductSerializer(products, many=True)
        # 3. Отдаем клиенту Response (Ответ)
        return Response(serializer.data)

    elif request.method == 'POST':
        # 1. Берем готовые данные от клиента из request.data
        serializer = ProductSerializer(data=request.data)
        # 2. Проверяем, правильные ли данные (например, есть ли имя и цена)
        if serializer.is_valid():
            # 3. Сохраняем в базу данных
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Если данные плохие, говорим об ошибке
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Тут шляпа понимает GET (получить один), PUT (обновить), DELETE (удалить)
@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, product_id):
    # Сначала пытаемся найти продукт по его ID
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        # Если такого продукта нет, возвращаем ошибку 404 (Не найдено)
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        # Просто отдаем один найденный продукт
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # Обновляем продукт новыми данными из request.data
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # Удаляем продукт из базы
        product.delete()
        # Возвращаем статус 204 (Успешно, но нет текста для ответа)
        return Response(status=status.HTTP_204_NO_CONTENT)