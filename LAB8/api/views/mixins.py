from rest_framework import generics
from rest_framework import mixins
from api.models import Product
from api.serializers import ProductSerializer


# Собираем класс из 3 частей: Примесь Списка, Примесь Создания и Базовая Коробка
class ProductListAPIView(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         generics.GenericAPIView):
    # 1. Говорим коробке, ГДЕ брать данные (наш Queryset)
    queryset = Product.objects.all()
    # 2. Говорим коробке, КАК переводить данные в JSON (наш Serializer)
    serializer_class = ProductSerializer

    # Связываем запросы с нашими суперспособностями
    def get(self, request, *args, **kwargs):
        # Деталька ListModelMixin дала нам готовую команду self.list()
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Деталька CreateModelMixin дала нам команду self.create()
        return self.create(request, *args, **kwargs)


# Собираем класс для одного продукта из 4 частей
class ProductDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # Очень важно! В urls.py у нас написано <int:product_id>.
    # Мы должны сказать коробке, как называется наша переменная в ссылке,
    # чтобы она сама смогла найти продукт в базе (вместо нашего старого помощника get_object).
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        # Деталька Retrieve дала команду self.retrieve()
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        # Деталька Update дала команду self.update()
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        # Деталька Destroy дала команду self.destroy()
        return self.destroy(request, *args, **kwargs)