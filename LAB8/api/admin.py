from django.contrib import admin
from .models import Category, Product

# Регистрируем наши модели
admin.site.register(Category)
admin.site.register(Product)