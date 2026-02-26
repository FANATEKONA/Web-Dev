import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import * as https from 'node:https';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private categories: Category[] = [
    {id: 1, name: 'Smartphones',},
    {id: 2, name: 'Laptops',},
    {id: 3, name: 'Headphones',},
    {id: 4, name: 'Tablets',}
  ];

  // @ts-ignore
  private products: Product[] = [
    {
      id: 101,
      categoryId: 1,
      name: "iPhone 15 Black",
      description: "Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. " +
        "Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.",
      price: 399684,
      rating: 4.9,
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000"
    },
    {
      id: 102,
      categoryId: 1,
      name: "iPhone 13 Black",
      description:"Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. " +
        "А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
      price: 318424,
      rating: 4.9,
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    },
    {
      id: 103,
      categoryId: 1,
      name: "iPhone 14 Black",
      description: "Apple iPhone 14 – компактная модель с безрамочным дисплеем OLED 6.1 дюйма. Стеклянный корпус мобильного устройства соответствует стандарту защищенности IP68 – он устойчив к воздействию влаги и пыли. " +
        "Передняя панель обладает покрытием Ceramic Shield для защиты экрана от появления царапин и различных дефектов" ,
      price: 420806,
      rating: 4.9,
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hce/h03/86042950271006.png?format=gallery-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-14-512gb-chernyi-106363115/?c=750000000",
    },
    {
      id: 104,
      categoryId: 1,
      name: "iPhone Air",
      description: "Apple iPhone Air Cyan",
      price: 569767,
      rating: 4.8,
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=gallery-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-air-256gb-goluboi-145468599/?c=750000000",
    },
    {
      id: 105,
      categoryId: 1,
      name: "iPhone Air",
      description: "Apple iPhone Air Cyan",
      price: 569767,
      rating: 4.8,
      likes: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pb8/p40/64171189.png?format=gallery-large",
      link: "https://kaspi.kz/shop/p/apple-iphone-air-256gb-goluboi-145468599/?c=750000000",
    },
    {
      id: 201,
      categoryId: 2,
      name: "Apple MacBook Air 13",
      description: "Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и " +
        "объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов",
      price: 439767,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000"
    },
    {
      id: 202,
      categoryId: 2,
      name: "Apple MacBook Air 13 2025",
      description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. " +
        "Этот ноутбук станет идеальным спутником для работы и развлечений.",
      price: 523767,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 203,
      categoryId: 2,
      name: "Apple MacBook Air 13 2025",
      description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. " +
        "Этот ноутбук станет идеальным спутником для работы и развлечений.",
      price: 523767,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 204,
      categoryId: 2,
      name: "Apple MacBook Air 13 2025",
      description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. " +
        "Этот ноутбук станет идеальным спутником для работы и развлечений.",
      price: 523767,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 205,
      categoryId: 2,
      name: "Apple MacBook Air 13 2025",
      description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. " +
        "Этот ноутбук станет идеальным спутником для работы и развлечений.",
      price: 523767,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 301,
      categoryId: 3,
      name: "Xiaomi Redmi Buds 6 Lite черный",
      description:"Наушники TWS Xiaomi Buds 6 lite представлены в черном цвете." +
        " Благодаря эргономичной форме и силиконовым эластичным вкладышам они удобны в использовании. Динамические излучатели с диаметром мембраны 12.4 мм формируют четкий и насыщенный звук в диапазоне 20-20000 Гц. " +
        "Два микрофона в каждом наушнике без искажений передают голос при общении.",
      price: 8167,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/pb9/pfe/88596781.jpg?format=gallery-large",
      link:"https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-lite-chernyi-123229664/?c=750000000",
    },
    {
      id: 302,
      categoryId: 3,
      name: "Xiaomi Redmi Buds 6 Pro",
      description:"Xiaomi Redmi AirDots S (черный) — это стильные и компактные беспроводные наушники, " +
        "которые предлагают отличное качество звука, удобство и функциональность за доступную цену. Эти наушники идеально подходят для повседневного использования, " +
        "занятий спортом и прослушивания музыки или общения по телефону.",
      price: 104067,
      rating: 5,
      likes: 0,
      image:"https://resources.cdn-kaspi.kz/img/m/p/p6f/p6b/107077755.jpg?format=gallery-large",
      link:'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-6-pro-chernyi-133094627/?c=750000000',
    },
    {
      id: 303,
      categoryId: 3,
      name: "Xiaomi Redmi Airdots S",
      description:"Xiaomi Redmi AirDots S (черный) — это стильные и компактные беспроводные наушники, которые предлагают отличное качество звука, удобство и функциональность за доступную цену. " +
        "Эти наушники идеально подходят для повседневного использования, занятий спортом и прослушивания музыки или общения по телефону.",
      price: 2907,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha4/63971413032990.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000',
    },
    {
      id: 304,
      categoryId: 3,
      name: "Xiaomi Redmi Airdots S",
      description:"Xiaomi Redmi AirDots S (черный) — это стильные и компактные беспроводные наушники, которые предлагают отличное качество звука, удобство и функциональность за доступную цену. " +
        "Эти наушники идеально подходят для повседневного использования, занятий спортом и прослушивания музыки или общения по телефону.",
      price: 2907,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha4/63971413032990.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000',
    },
    {
      id: 305,
      categoryId: 3,
      name: "Xiaomi Redmi Airdots S",
      description:"Xiaomi Redmi AirDots S (черный) — это стильные и компактные беспроводные наушники, которые предлагают отличное качество звука, удобство и функциональность за доступную цену. " +
        "Эти наушники идеально подходят для повседневного использования, занятий спортом и прослушивания музыки или общения по телефону.",
      price: 2907,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha4/63971413032990.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000',
    },
    {
      id:401,
      categoryId: 4,
      name: "NUTRAXIN Nutraxin Collagen таблетки 30 шт",
      description:'Для улучшения состояния кожи, волос и ногтей, ' +
        'разглаживания мелких морщин, повышения упругости и эластичности кожи, замедления процессов старения;',
      price: 3640,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pae/p8a/16000092.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/nutraxin-nutraxin-collagen-tabletki-30-sht-104186090/?c=750000000'
    },
    {
      id:402,
      categoryId: 4,
      name:"ТераФлю саше 325 мг 10 шт",
      description:'kратковременное симптоматическое лечение гриппа и простуды у взрослых (заложенность носа и носовых пазух, насморк, чихание, боль в горле, ' +
        'головная боль, мышечная боль и боль в области придаточных пазух носа, повышенная температура) ',
      price: 2190,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000'
    },
    {
      id:403,
      categoryId: 4,
      name:"ТераФлю саше 325 мг 10 шт",
      description:'kратковременное симптоматическое лечение гриппа и простуды у взрослых (заложенность носа и носовых пазух, насморк, чихание, боль в горле, ' +
        'головная боль, мышечная боль и боль в области придаточных пазух носа, повышенная температура) ',
      price: 2190,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/hc9/hcf/87293798088734.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/teraflju-sashe-325-mg-10-sht-124283396/?c=750000000'
    },
    {
      id:404,
      categoryId: 4,
      name: "NUTRAXIN Nutraxin Collagen таблетки 30 шт",
      description:'Для улучшения состояния кожи, волос и ногтей, ' +
        'разглаживания мелких морщин, повышения упругости и эластичности кожи, замедления процессов старения;',
      price: 3640,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pae/p8a/16000092.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/nutraxin-nutraxin-collagen-tabletki-30-sht-104186090/?c=750000000'
    },
    {
      id:405,
      categoryId: 4,
      name: "NUTRAXIN Nutraxin Collagen таблетки 30 шт",
      description:'Для улучшения состояния кожи, волос и ногтей, ' +
        'разглаживания мелких морщин, повышения упругости и эластичности кожи, замедления процессов старения;',
      price: 3640,
      rating: 5,
      likes: 0,
      image:'https://resources.cdn-kaspi.kz/img/m/p/pae/p8a/16000092.jpg?format=gallery-large',
      link:'https://kaspi.kz/shop/p/nutraxin-nutraxin-collagen-tabletki-30-sht-104186090/?c=750000000'
    }
  ];
  getCategories(): Category[] {
    return this.categories;
  }
  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
