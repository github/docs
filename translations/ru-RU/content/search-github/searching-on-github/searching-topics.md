---
title: Поиск тем
intro: 'Вы можете выполнять поиск тем, относящихся к репозиториям в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118859'
---
## Поиск тем в {% data variables.product.product_name %}

Вы можете искать темы в {% data variables.product.product_name %}, изучать связанные темы и просматривать, сколько репозиториев связано с определенной темой.

1. Перейдите к https://github.com/search.
2. Введите ключевое слово "тема".
  ![Поле поиска](/assets/images/help/search/search-field.png)
3. На левой боковой панели, чтобы сузить область поиска до тем, выберите **Topics** (Темы).
{% ifversion fpt or ghec %} ![Страница результатов поиска в репозитории Jekyll с выделенным параметром тем бокового меню](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![Страница результатов поиска репозитория Jekyll в dotcom с выделенным параметром тем бокового меню](/assets/images/help/search/topic-left-side-navigation.png) {% endif %}

## Сужение поиска с помощью квалификаторов поиска

Если вы хотите изучить репозитории по определенной теме, найти проекты для участия или узнать, какие темы наиболее популярны в {% data variables.product.product_name %}, можно искать темы с помощью следующих квалификаторов поиска: `is:featured`, `is:curated`, `repositories:n` и `created:YYYY-MM-DD`.

Квалификатор поиска `is:featured` сузит результаты поиска до тем с наибольшими репозиториями в {% data variables.product.product_name %}. Эти темы также являются рекомендуемыми на странице https://github.com/topics/.

Квалификатор поиска `is:curated` сужает результаты поиска до тем, в которые участники сообщества добавили дополнительную информацию. Дополнительные сведения см. в [репозитории explore](https://github.com/github/explore).

Темы можно фильтровать по времени их создания с помощью параметра даты и `created:` или по количеству репозиториев, связанных с этой темой, используя `repositories:n`. Оба этих [квалификатора могут использовать квалификаторы диапазона: "больше" и "меньше"](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор  | Пример |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) соответствует темам, которые курируются и содержат слово javascript.
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) соответствует темам, которые являются рекомендуемыми на странице https://github.com/topics/ и содержат слово javascript.
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) соответствует темам, которые не содержат дополнительной информации, такой как описание или логотип, а содержат слово javascript.
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) соответствует темам, которые не являются рекомендуемыми на странице https://github.com/topics/ и содержат слово javascript.
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) соответствует темам, у которых больше чем 5000 репозиториев.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Бессерверный created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) соответствует темам со словом "Бессерверный", созданным после 2018 г.

## Поиск репозиториев по темам

Квалификатор `topic:` можно использовать для поиска каждого репозитория, связанного с определенной темой. Дополнительные сведения см. в статье "[Поиск репозиториев](/search-github/searching-on-github/searching-for-repositories/#search-by-topic)".

## Дополнительные материалы
- [Классификация репозитория с помощью тем](/articles/classifying-your-repository-with-topics)
