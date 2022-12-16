---
title: Результаты с разбиением на страницы
intro: Узнайте, как использовать разбиение на страницы для управления ответами с использованием некоторых примеров с помощью API поиска.
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179532"
---
API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} предоставляет разработчикам огромное количество сведений.
Зачастую оказывается, что вы запрашиваете _слишком много_ информации, и чтобы не перегружать наши серверы, API автоматически [разбивает запрошенные элементы на страницы](/rest/overview/resources-in-the-rest-api#pagination).

В этом руководстве мы совершим ряд вызовов API поиска и выполним обход результатов с помощью разбиения на страницы. Полный исходный код этого проекта можно найти в репозитории [platform-samples][platform samples].

{% data reusables.rest-api.dotcom-only-guide-note %}



## Основы разбиения на страницы

Для начала важно знать несколько фактов о получении элементов с разбиением на страницы.


1. При вызове разных интерфейсов API действуют разные значения по умолчанию. Например, при вызове [списка общедоступных репозиториев](/rest/reference/repos#list-public-repositories) результаты возвращаются с разбиением на страницы по 30 элементов, в при вызове API поиска GitHub — по 100 элементов.
2. Можно указать количество получаемых элементов (не более 100), однако учтите указанное ниже ограничение.
3. По техническим причинам не все конечные точки работают одинаково. Например, конечная точка [events](/rest/reference/activity#events) не позволяет задать максимальное количество получаемых элементов.
Обязательно ознакомьтесь с документацией по конкретной конечной точке, чтобы узнать, как обрабатываются ее результаты с разбиением на страницы.

{% note %}

**Примечание**. Всегда следует полагаться на URL-адреса, включенные в заголовок ссылки. Не пытайтесь угадать или создать собственные URL-адреса.

{% endnote %}


### Заголовок Link

Заголовок ответа содержит сведения о разбиении на страницы. Дополнительные сведения о заголовках см. в разделе [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers). Чтобы получить заголовок ответа, включите `-I` флаг в запрос. Например:

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

Флаг `-I` возвращает только заголовок ответа. Если ответ разбиен на страницы, заголовок ответа будет содержать `link` заголовок . Заголовок будет выглядеть примерно так:

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

или

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### Типы разбиения на страницы

API {% data variables.product.company_short %} использует два метода разбиения на страницы: разбиение на страницы и разбиение на страницы на основе курсора. Если заголовок `link` содержит `page`, операция использует разбиение на страницы. Если заголовок `link` содержит `before` и `after`, операция использует разбиение на страницы на основе курсора.


#### Разбиение на страницы на основе страниц

Заголовок ссылки для разбиения на страницы содержит сведения о предыдущей, следующей, первой и последней страницах. Если вы не запросили определенную страницу, ответ по умолчанию будет отображаться на первой странице, а сведения о первой и предыдущей страницах будут опущены.

Например, для запроса, который не указал страницу, этот заголовок указывает, что следующая страница — , `2` а последняя — `511`.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

Например, для запроса, указывающего страницу 5, этот заголовок указывает, что предыдущая страница — `4`, следующая страница — `6`, последняя страница — `511`, а первая страница — `1`.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### Разбиение на страницы на основе курсора

Разбиение курсора на страницы использует термины `before` и `after` для навигации по страницам. `rel="next"` и `rel="prev"` помечает курсорную точку в наборе данных и предоставляет ссылку для перемещения на страницу `before` и `after` текущую страницу.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

В этом примере указывается, `rel=next` что следующая страница находится по адресу:

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### Использование разбиения на страницы

#### Разбиение на страницы на основе курсора

При использовании разбиения на основе курсора необходимо использовать термины `before` и `after`. Чтобы перейти с помощью `before` и `after`, скопируйте заголовок ссылки, созданный выше, в запрос curl:

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

В приведенном выше примере создается страница результатов и новые сведения о заголовке, которые можно использовать для выполнения следующего запроса. `rel="next"` предоставляет следующую страницу результатов. `rel="prev"` предоставляет предыдущую страницу результатов. Важной частью выходных данных здесь является заголовок ссылки должен быть создан, а не вменяться вручную. Скопируйте всю ссылку из следующих выходных данных.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

В отличие от разбиения на страницы, результаты не возвращают номер последней страницы в ответе.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
Так как разбиение на основе курсора создает опорную точку в наборе данных, она не может вычислить общее количество результатов.


#### Разбиение на страницы на основе страниц

Для навигации с помощью разбиения на страницы передайте `page` параметр . По умолчанию `page` всегда начинается с `1`. В следующем примере мы выполнили запрос curl в проектах API поиска Mozilla с использованием фразы `addClass`. Вместо того, чтобы начать с 1, давайте перейдем к странице 14. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Ниже приведен заголовок ссылки в HTTP-запросе.

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

В этом примере `rel="next"` имеет значение 15, а `rel="last"` — 34. Но теперь у нас есть дополнительные сведения: `rel="first"` указывает URL-адрес _первой_ страницы, и, что более важно, `rel="prev"` позволяет узнать номер предыдущей страницы. Используя эти сведения, можно создать пользовательский интерфейс, позволяющий пользователям переходить между первым, предыдущим, следующим и последним списками результатов вызова API.


### Изменение количества получаемых элементов

#### Разбиение на страницы на основе страниц

Передав параметр `per_page`, можно указать, сколько элементов должно быть на каждой возвращаемой странице (не более 100). Давайте попробуем запросить 50 элементов, связанных с `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Обратите внимание, что происходит с ответом заголовка:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Как можно было предположить, `rel="last"` указывает, что последней страницей теперь является страница 20. Это связано с тем, что мы запрашиваем больше результатов на страницу.

#### Разбиение на страницы на основе курсора

Вы также можете передать `per_page` параметр для разбиения на страницы на основе курсора. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## Использование сведений

Чтобы иметь возможность работать с разбиением на страницы, нежелательно выполнять низкоуровневые вызовы curl, поэтому давайте напишем небольшой скрипт Ruby, который делает все, что мы только что описали выше.

Как всегда, сначала потребуется библиотека [Ruby Octokit.rb GitHub][octokit.rb] и мы передадим [{% data variables.product.pat_generic %}][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Затем мы выполним поиск с помощью метода Octokit `search_code`. В отличие от использования `curl` мы также можем немедленно получить количество результатов, так что давайте сделаем это:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Теперь давайте получим номер последней страницы, как в случае с `page=34>; rel="last"` в заголовке Link. Octokit.rb поддерживает сведения о разбиении на страницы посредством реализации, которая называется [Ссылочные связи в гиперсреде][hypermedia-relations].
Мы не будем вдаваться в подробности. Достаточно сказать, что каждый элемент в переменной `results` имеет хэш, который называется `rels`. Он может содержать сведения о том, на какой странице находится результат: `:next` (следующая), `:last` (последняя), `:first` (первая) или `:prev` (предыдущая). Эти связи также позволяют получить сведения об итоговом URL-адресе путем вызова `rels[:last].href`.

Зная это, давайте получим номер страницы последнего результата и предоставим пользователю всю эту информацию:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Наконец, давайте выполним перебор результатов. Это можно сделать с помощью цикла `for i in 1..number_of_pages.to_i`, но давайте пройдем по заголовкам `rels[:next]`, чтобы получить сведения с каждой страницы. Для простоты давайте просто получим путь к файлу первого результата с каждой страницы. Для этого нам потребуется цикл. В конце каждого цикла мы получим набор данных для следующей страницы, используя `rels[:next]`.
Цикл завершится, когда больше не останется сведений `rels[:next]` (иными словами, когда будет достигнут элемент `rels[:last]`). Оно должно выглядеть примерно следующим образом:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Изменить количество элементов на странице с помощью Octokit.rb очень просто. Просто передайте хэш параметров `per_page` в исходную конструкцию клиента. После этого код должен оставаться неизменным:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Формирование ссылок на страницы

Как правило, при использовании разбиения на страницы ваша цель заключается не в сцеплении всех возможных результатов, а в создании набора элементов навигации, например такого:

![Пример ссылок на страницы](/assets/images/pagination_sample.png)

Давайте вкратце рассмотрим, как этого можно достичь.

Из приведенного выше кода мы уже знаем, что можем получить `number_of_pages` в результатах первого вызова с разбиением на страницы:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Исходя из этого, можно создать аккуратное представление ASCII для полей с числами:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Давайте сымитируем нажатие пользователем одного из этих полей, сгенерировав случайное число:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Теперь, когда у нас есть номер страницы, мы можем с помощью Octokit явным образом получить эту страницу, передав параметр `:page`:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Если бы мы хотели усложнить задачу, то могли бы также получить предыдущую и следующую страницы, чтобы создать ссылки для элементов "Назад" (`<<`) и "Вперед" (`>>`):

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
