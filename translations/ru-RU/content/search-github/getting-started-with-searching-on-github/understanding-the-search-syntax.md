---
title: Основные сведения о синтаксисе поиска
intro: 'При поиске в {% data variables.product.product_name %} можно создавать запросы, соответствующие определенным числам и словам.'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118928'
---
## Запрос значений больше или меньше другого значения

Вы можете использовать `>`, `>=`, `<`и `<=` для поиска значений, которые больше, больше или равны, меньше, меньше или равны другому значению.

Запрос  | Пример
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** соответствует репозиториям со словом "cats", которые имеют более 1000 звезд.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** соответствует репозиториям со словом "cats", которые имеют не менее 5 тем.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** соответствует колу со словом "cats" в файлах, размер которых менее 10 КБ.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** соответствует репозиториям со словом "cats", которые имеют не более 50 звезд.

Вы также можете использовать [запросы в диапазоне](#query-for-values-between-a-range) для поиска значений, которые больше или равны либо меньше или равны другому значению.

Запрос  | Пример
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** аналогичен `stars:>=10` и соответствует репозиториям со словом "cats", которые имеют не менее 10 звезд.
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** аналогичен `stars:<=10` и соответствует репозиториям со словом "cats", которые имеют не более 10 звезд.

## Запрос значений в определенном диапазоне

Вы можете использовать синтаксис диапазона <code><em>n</em>..<em>n</em></code> для поиска значений в диапазоне, где первое число _n_ является наименьшим, а второе — наибольшим значением.

Запрос  | Пример
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** соответствует репозиториям со словом "cats", которые имеют от 10 до 50 звезд.

## Запрос дат

Вы можете искать даты до или после другой даты или даты в определенном диапазоне, используя `>`, `>=`, `<`, `<=` и [запросы в диапазоне](#query-for-values-between-a-range). {% data reusables.time_date.date_format %}

Запрос  | Пример
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** соответствует проблемам со словом "cats", которые были созданы после 29 апреля 2016 г.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** соответствует проблемам со словом "cats", которые были созданы 1 апреля 2017 г или позднее.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** соответствует коду со словом "cats" в репозиториях, которые были отправлены до 5 июля 2012 г.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** соответствует проблемам со словом "cats", которые были созданы 4 июля 2012 г или ранее.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** соответствует репозиториям со словом "cats", которые были созданы между концом апреля и 4 июля 2016 г.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** соответствует проблемам, созданным после 30 апреля 2012 г. и содержащим слово "cats".
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** соответствует проблемам, созданным до 4 июля 2012 г. и содержащим слово "cats".

{% data reusables.time_date.time_format %}

Запрос  | Пример
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** соответствует проблемам, созданным между 01:00 1 января 2017 г. со смещением от UTC `07:00` и 15:00 1 марта 2017 г. со смещением от UTC `07:00`.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** соответствует проблемам, созданным между 14:11 21 марта 2016 г. и 20:45 7 апреля 2016 г.

## Исключение определенных результатов

Вы можете исключать результаты, содержащие определенное слово, с помощью синтаксиса `NOT`. Оператор `NOT` можно использовать только для строковых ключевых слов. Для чисел или дат он не работает.

Запрос  | Пример
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** соответствует репозиториям, в которых есть слово "hello" но нет слова "world".

Другой способ сузить результаты поиска — исключить определенные подмножества. Вы можете указать префикс `-` перед любым квалификатором поиска, чтобы исключить все результаты, соответствующие этому квалификатору.

Запрос  | Пример
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** соответствует репозиториям со словом "cats", которые имеют более 10 звезд, но не написаны на JavaScript.
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** соответствует проблемам, в которых упоминается @defunkt, но которые не находятся в репозиториях организации GitHub.

## Использование кавычек для запросов с пробелами

Если поисковый запрос содержит пробелы, их необходимо заключить в кавычки. Пример:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) соответствует репозиториям со словом "cats", в которых нет слов "hello world".
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) соответствует проблемам со словом "build", которые имеют метку "bug fix".

Некоторые символы, не являющиеся буквами или цифрами, например пробелы, удаляются из запросов поиска кода в кавычках, поэтому результаты могут быть непредвиденными.

## Запросы с именами пользователей

Если поисковый запрос содержит квалификатор, для которого требуется имя пользователя, такой как `user`, `actor`или `assignee`, вы можете использовать любое имя пользователя {% data variables.product.product_name %}, указать конкретного пользователя или `@me`, чтобы указать текущего пользователя.

Запрос  | Пример
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) соответствует фиксациям, созданным @nat
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) соответствует проблемам, назначенным пользователю, просматривающему результаты

Вы можете использовать `@me` только с квалификатором, а не в качестве условия поиска, например `@me main.workflow`.
