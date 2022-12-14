---
title: Ресурсы в REST API
intro: 'Сведения о том, как просматривать ресурсы API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192852'
---
{% ifversion api-date-versioning %}
## Версия API

Доступные ресурсы могут отличаться в зависимости от версий REST API. Для указания версии API следует использовать `X-GitHub-Api-Version` заголовок . Дополнительные сведения см. в разделе [Версии API](/rest/overview/api-versions).

{% endif %}

## схема

{% ifversion fpt or ghec %}Все операции доступа к API осуществляются по протоколу HTTPS{% else %}Доступ к API осуществляется{% endif %} с `{% data variables.product.api_url_code %}`.  Все данные отправляются и получаются в формате JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Пустые поля включаются как `null`, а не пропускаются.

Все метки времени возвращаются в формате UTC ISO 8601:

    YYYY-MM-DDTHH:MM:SSZ

Дополнительные сведения о часовых поясах в метках времени см. в [этом разделе](#timezones).

### Сводные представления

При получении списка ресурсов в ответ включается _подмножество_ атрибутов ресурса. Это "сводное" представление ресурса. (Предоставление некоторых атрибутов интерфейсом API требует больших вычислительных затрат.
По соображениям производительности такие атрибуты исключаются из сводного представления.
Чтобы получить эти атрибуты, запросите "подробное" представление.)

**Пример**. При запросе списка репозиториев вы получаете сводное представление каждого репозитория. Здесь мы получаем список репозиториев, принадлежащих организации [octokit](https://github.com/octokit):

    GET /orgs/octokit/repos

### Подробные представления

При получении отдельного ресурса в ответ обычно включаются _все_ его атрибуты. Это "подробное" представление ресурса. (Обратите внимание, что авторизация иногда влияет на объем сведений, включаемых в представление.)

**Пример**. При получении отдельного репозитория вы получаете его подробное представление. Здесь мы получаем репозиторий [octokit/octokit.rb](https://github.com/octokit/octokit.rb):

    GET /repos/octokit/octokit.rb

В документации приводится пример ответа для каждого метода API. В примере ответа показаны все атрибуты, возвращаемые этим методом.

## Аутентификация

{% ifversion ghae %} Для проверки подлинности в REST API {% data variables.product.product_name %} рекомендуется создать токен OAuth2 через [поток веб-приложения](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} Существует два способа проверки подлинности с помощью REST API {% data variables.product.product_name %}.{% endif %} Иногда запросы, требующие проверки подлинности, возвращают `404 Not Found` вместо `403 Forbidden`.  Это позволяет предотвратить случайную утечку частных репозиториев в руки неавторизованных пользователей.

### обычная проверка подлинности

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### Токен OAuth2 (отправляемый в заголовке)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

Примечание. GitHub рекомендует отправлять токены OAuth в заголовке авторизации.

{% endnote %}

{% note %}

**Примечание.** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Узнайте [больше об OAuth2](/apps/building-oauth-apps/).  Обратите внимание, что для рабочих приложений токены OAuth2 можно получать с помощью [потока веб-приложения](/developers/apps/authorizing-oauth-apps#web-application-flow).

{% ifversion fpt or ghes or ghec %}
### Ключ и секрет OAuth2

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

Предоставляя `client_id` и `client_secret`, пользователь _не_ проходит проверку подлинности. Он лишь идентифицирует приложение OAuth, чтобы увеличить ограничение скорости. Разрешения предоставляются только пользователям, а не приложениям, и вы сможете получить только те данные, которые доступны пользователю, не прошедшему проверку подлинности. По этой причине ключ и секрет OAuth2 следует использовать только в сценариях "сервер — сервер". Не разглашайте секрет клиента приложения OAuth пользователям.

{% ifversion ghes %} Вы не сможете пройти проверку подлинности с помощью ключа и секрета OAuth2 в закрытом режиме. При попытке сделать это будет возвращена ошибка `401 Unauthorized`. Дополнительные сведения см. в разделе [Включение закрытого режима](/admin/configuration/configuring-your-enterprise/enabling-private-mode).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

Узнайте больше об [ограничении скорости для пользователей, не прошедших проверку подлинности](#increasing-the-unauthenticated-rate-limit-for-oauth-apps).

{% endif %}

### Максимальное количество неудачных попыток входа

При попытке пройти проверку подлинности с недействительными учетными данными возвращается ошибка `401 Unauthorized`.

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

Если за небольшой промежуток времени было обнаружено несколько запросов с недействительными учетными данными, API станет временно отклонять все попытки проверки подлинности со стороны данного пользователя (в том числе с действительными учетными данными) с ошибкой `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Параметры

Многие методы API принимают необязательные параметры. Для запросов `GET` любые параметры, не указанные в виде сегмента пути, можно передать в качестве параметра строки HTTP-запроса:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

В этом примере значения vmg и redcarpet предоставляются для параметров `:owner` и `:repo` в пути, а `:state` передается в строке запроса.

Для запросов `POST`, `PATCH`, `PUT` и `DELETE` параметры, не включенные в URL-адрес, должны быть закодированы как JSON, причем заголовок Content-Type должен иметь значение application/json:

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Корневая конечная точка

Вы можете отправить запрос `GET` к корневой конечной точке, чтобы получить все категории конечных точек, поддерживаемые REST API:

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## Идентификаторы глобальных узлов GraphQL

Подробные сведения о том, как найти идентификаторы [ с помощью REST API и использовать их в операциях GraphQL, см. в руководстве по ](/graphql/guides/using-global-node-ids)использованию идентификаторов глобальных узлов`node_id`.

## Ошибки клиента

Существует три возможных типа ошибок клиента при вызовах API, которые получают тело запроса:

1. Отправка недопустимого кода JSON приведет к ответу `400 Bad Request`.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. Отправка значений JSON неправильного типа приведет к ответу `400 Bad
   Request`.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. Отправка недопустимых полей приведет к ответу `422 Unprocessable Entity`.

        HTTP/2 422
        Content-Length: 149

        {
          "message": "Validation Failed",
          "errors": [
            {
              "resource": "Issue",
              "field": "title",
              "code": "missing_field"
            }
          ]
        }

Все объекты ошибок имеют свойства ресурса и поля, по которым клиент может определить проблему.  Кроме того, есть код ошибки, который позволяет узнать, что не так с полем.  Ниже приведены возможные коды ошибок проверки.

Имя кода ошибки | Описание
-----------|-----------|
`missing` | Ресурс не существует.
`missing_field` | Не задано обязательное поле ресурса.
`invalid` | Недопустимое форматирование поля.  Более подробные сведения см. в документации.
`already_exists` | Другой ресурс имеет то же значение, что и это поле.  Это может произойти с ресурсами, которые должны иметь уникальные ключи (например, имена меток).
`unprocessable` | Предоставлены недопустимые входные данные.

Ресурсы также могут отправлять пользовательские ошибки проверки (`code` имеет значение `custom`). Пользовательские ошибки всегда имеют поле `message` с описанием ошибки, а большинство ошибок также имеют поле `documentation_url`, указывающее на содержимое, которое может помочь устранить ошибку.

## Перенаправления HTTP

REST API {% data variables.product.product_name %} использует перенаправление HTTP, насколько это возможно. Клиент должен допускать, что любой запрос может привести к перенаправлению. Перенаправление HTTP *не* является ошибкой, и клиент должен следовать ему. Ответы с перенаправлением имеют поле заголовка `Location`, содержащее универсальный код ресурса (URI), на который клиент должен повторить запрос.

Код состояния | Описание
-----------|-----------|
`301` | Постоянное перенаправление. Универсальный код ресурса (URI), который использовался для выполнения запроса, заменен указанным в поле заголовка `Location`. Этот и все последующие запросы к данному ресурсу должны направляться на новый URI.
`302`, `307` | Временное перенаправление. Запрос должен быть отправлен повторно без изменений на URI, указанный в поле заголовка `Location`, но клиенты должны продолжать использовать исходный код URI для будущих запросов.

Другие коды состояния перенаправления могут использоваться в соответствии со спецификацией HTTP 1.1.

## Команды HTTP

Везде, где это возможно, REST API {% data variables.product.product_name %} использует специальные HTTP-команды для каждого действия. Обратите внимание, что HTTP-команды указываются с учетом регистра.

Команда | Описание
-----|-----------
`HEAD` | Может быть выполнена для любого ресурса с целью получить только данные заголовка HTTP.
`GET` | Используется для получения ресурсов.
`POST` | Используется для создания ресурсов.
`PATCH` | Используется для обновления ресурсов с частичными данными JSON. Например, ресурс Issue имеет атрибуты `title` и `body`. Запрос `PATCH` может принимать один или несколько атрибутов для обновления ресурса.
`PUT` | Используется для замены ресурсов или коллекций. Для запросов `PUT` без атрибута `body` обязательно установите для заголовка `Content-Length` нулевое значение.
`DELETE` |Используется для удаления ресурсов.

## Гиперсреда

Любой ресурс может иметь одно или несколько свойств `*_url`, содержащих ссылки на другие ресурсы.  Они предназначены для предоставления явных URL-адресов, чтобы соответствующим клиентам API не приходилось формировать URL-адреса самостоятельно.  Настоятельно рекомендуется, чтобы клиенты API использовали эти свойства.  Так разработчикам будет проще обновлять API в будущем.  Все URL-адреса должны соответствовать шаблонам URI [RFC 6570][rfc].

Затем можно расширить эти шаблоны, например, с помощью пакета [uri_template][uri]:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Разбиение на страницы

Если ответ от REST API будет содержать много результатов, {% data variables.product.company_short %} будет размножевать результаты на страницы и возвращать подмножество результатов. Вы можете использовать заголовок ссылки из ответа, чтобы запросить дополнительные страницы данных. Если конечная точка поддерживает `per_page` параметр запроса, можно управлять количеством результатов, возвращаемых на странице. Дополнительные сведения о разбиении на страницы см. [в разделе Использование разбиения на страницы в REST API](/rest/guides/using-pagination-in-the-rest-api).

## Истекшее время ожидания

Если {% data variables.product.prodname_dotcom %} обрабатывает запрос API более 10 секунд, {% data variables.product.prodname_dotcom %} завершит запрос и вы получите ответ о времени ожидания примерно следующего вида:

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} оставляет за собой право изменить окно времени ожидания для гарантии скорости и надежности работы API.

## Ограничение частоты

На различные типы запросов API к {% data variables.location.product_location %} применяются разные ограничения скорости. 

Кроме того, особые ограничения налагаются на API поиска. Дополнительные сведения см. в разделе [Поиск](/rest/reference/search#rate-limit) в документации по REST API.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### Запросы из личных учетных записей

Прямые запросы API, которые проходят проверку подлинности с помощью {% data variables.product.pat_generic %}, являются запросами от пользователя к серверу. Приложение OAuth или GitHub также может выполнять запросы пользователя к серверу от вашего имени после авторизации приложения. Дополнительные сведения см. в [разделах Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), [Авторизация приложений OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps) и [Авторизация приложений GitHub](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps).

{% data variables.product.product_name %} связывает все запросы пользователей к серверу с пользователем, прошедшим проверку подлинности. Для приложений OAuth и GitHub Apps это пользователь, который авторизовал приложение. Все запросы пользователей к серверу включаются в ограничение скорости для пользователя, прошедшего проверку подлинности.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

Согласно ограничению скорости допускается до 60 запросов без проверки подлинности в час. Запросы без проверки подлинности связаны с исходным IP-адресом, а не с выполняющим их пользователем.

{% endif %}

{% endif %}

### Запросы из приложений GitHub

Запросы из приложения GitHub могут быть запросами типа "пользователь — сервер" или "сервер — сервер". Дополнительные сведения об ограничениях скорости для приложений GitHub см. в разделе [Ограничения скорости для приложений GitHub](/developers/apps/building-github-apps/rate-limits-for-github-apps). 

### Запросы из GitHub Actions

Для проверки подлинности запросов в рабочих процессах GitHub Actions можно использовать встроенный токен `GITHUB_TOKEN`. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication).

При использовании `GITHUB_TOKEN`ограничение скорости составляет 1000 запросов в час на репозиторий.{ % ifversion fpt or ghec %} Для запросов к ресурсам, принадлежащим корпоративной учетной записи в {% data variables.location.product_location %}, применяется ограничение скорости {% data variables.product.prodname_ghe_cloud %}, которое составляет 15 000 запросов в час на репозиторий. {% endif %}

### Проверка состояния ограничения скорости

API ограничения скорости и HTTP-заголовки ответа являются заслуживающими доверия источниками сведений о текущем количестве вызовов API, доступных вам или вашему приложению в любой момент времени.

#### API ограничения скорости

Для проверки состояния ограничения скорости без расходования лимита можно использовать API ограничения скорости. Дополнительные сведения см. в разделе [Ограничение скорости](/rest/reference/rate-limit).

#### HTTP-заголовки ограничения скорости

Возвращенные заголовки HTTP любого запроса API показывают текущее состояние ограничения скорости.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

Имя заголовка | Описание
-----------|-----------|
`x-ratelimit-limit` | Максимальное количество запросов, которые вы можете выполнять в час.
`x-ratelimit-remaining` | Оставшееся количество запросов в текущем интервале ограничения скорости.
`x-ratelimit-used` | Количество запросов, которые вы сделали в текущем интервале ограничения скорости.
`x-ratelimit-reset` | Время сброса текущего интервала ограничения скорости в [секундах с эпохи UTC](http://en.wikipedia.org/wiki/Unix_time).

Если вам нужно время в другом формате, можно воспользоваться любым современным языком программирования. Например, если открыть консоль в веб-браузере, можно легко получить время сброса в виде объекта даты JavaScript.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

При превышении ограничения скорости возвращается ответ об ошибке:

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### Увеличение ограничения скорости без проверки подлинности для приложений OAuth

Если приложению OAuth необходимо выполнять вызовы без проверки подлинности с более высоким ограничением скорости, можно передать идентификатор клиента и секрет приложения перед маршрутом конечной точки.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**Примечание**. Не делитесь ни с кем секретом клиента и не включайте его в код браузера на стороне клиента. Используйте приведенный здесь метод только для вызовов между серверами.

{% endnote %}

### Соблюдение ограничения скорости

Если вы превысили ограничение скорости, используя обычную проверку подлинности или OAuth, скорее всего, проблему можно устранить путем кэширования ответов API и использования [условных запросов](#conditional-requests).

### Дополнительные ограничения скорости

С целью обеспечения качества обслуживания в {% data variables.product.product_name %} к некоторым действиям при использовании API могут применяться дополнительные ограничения скорости. Например, это могут быть такие действия, как использование API для быстрого создания содержимого, агрессивный опрос вместо использования веб-перехватчиков, выполнение нескольких запросов параллельно или многократный запрос данных с высокими вычислительными затратами.

Дополнительные ограничения скорости не препятствуют допустимому использованию API. Соблюдать следует только стандартные ограничения скорости. Чтобы убедиться в том, что вы добросовестно используете API, ознакомьтесь с [нашими рекомендациями](/guides/best-practices-for-integrators/).

Если приложение достигает такого ограничения скорости, возвращается ответ с информацией:

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## Требуется агент пользователя

Все запросы API должны содержать допустимый заголовок `User-Agent`. Запросы без заголовка `User-Agent` отклоняются. Согласно нашим требованиям в качестве значения заголовка `User-Agent` следует указывать имя пользователя {% data variables.product.product_name %} или имя приложения. Это позволит нам связаться с вами в случае проблем.

Ниже приведен пример:

```shell
User-Agent: Awesome-Octocat-App
```

cURL по умолчанию отправляет допустимый заголовок `User-Agent`. Если вы предоставите недопустимый заголовок `User-Agent` через cURL (или альтернативный клиент), то получите ответ `403 Forbidden`:

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## Условные запросы

В большинстве ответов возвращается заголовок `ETag`. Во многих ответах также возвращается заголовок `Last-Modified`. Значения этих заголовков можно использовать для выполнения последующих запросов к тем же ресурсам с применением заголовков `If-None-Match` и `If-Modified-Since` соответственно. Если ресурс не изменился, сервер вернет сообщение `304 Not Modified`.

{% ifversion fpt or ghec %}

{% tip %}

**Примечание**. Условный запрос, на который получен ответ 304, не учитывается при подсчете [ограничения скорости](#rate-limiting), поэтому мы рекомендуем использовать его при каждой возможности.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## Предоставление общего доступа к ресурсам независимо от источника

API поддерживает общий доступ к ресурсам независимо от источника (CORS) для запросов AJAX из любого источника.
Вы можете ознакомиться с [рекомендацией консорциума W3C в отношении CORS ](http://www.w3.org/TR/cors/) или [этим введением](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) из руководства по безопасности HTML 5.

Вот пример запроса, отправляемого из браузера на `http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

Вот как выглядит предварительный запрос CORS:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## Обратные вызовы JSON-P

Вы можете передать параметр `?callback` в любой вызов GET, чтобы результаты были заключены в функцию JSON.  Обычно такой способ применяется, когда содержимое {% data variables.product.product_name %} должно внедряться на веб-страницы в браузерах путем обхода проблем с доступом между доменами.  Ответ включает те же выходные данные, что и при обычном вызове API, а также соответствующие сведения о заголовках HTTP.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

Вы можете написать обработчик JavaScript для обработки обратного вызова. Вот минимальный пример, который можно опробовать:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }

    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';

    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>

    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

Все заголовки имеют те же строковые значения, что и заголовки HTTP, с одним существенным исключением: Link.  Заголовки Link предварительно анализируются и передаются в виде массива кортежей `[url, options]`.

Следующая ссылка:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

...будет выглядеть следующим образом в выходных данных обратного вызова:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

## Часовые пояса

Некоторые запросы, создающие данные, например новую фиксацию, позволяют предоставлять сведения о часовом поясе при указании или создании меток времени. С целью определения часового пояса для таких вызовов API мы применяем следующие правила в порядке приоритета:

* [Явное предоставление метки времени ISO 8601 со сведениями о часовом поясе](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Использование заголовка `Time-Zone`](#using-the-time-zone-header)
* [Использование последнего известного часового пояса для пользователя](#using-the-last-known-timezone-for-the-user)
* [Использование UTC по умолчанию при отсутствии других сведений о часовом поясе](#defaulting-to-utc-without-other-timezone-information)

Обратите внимание, что эти правила применяются только к данным, передаваемым в API, а не к данным, возвращаемым API. Как упоминалось в разделе [Схема](#schema), метки времени, возвращаемые API, имеют формат UTC ISO 8601.

### Явное предоставление метки времени ISO 8601 со сведениями о часовом поясе

Для вызовов API, позволяющих указать метку времени, мы используем такую метку времени. Примером является [API фиксаций](/rest/reference/git#commits).

Метки времени выглядят примерно так: `2014-02-27T15:05:06+01:00`. Пример указания меток времени также см. [здесь](/rest/reference/git#example-input).

### Использование заголовка `Time-Zone`

Можно указать заголовок `Time-Zone`, который определяет часовой пояс в соответствии со [списком имен из базы данных Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Это означает, что мы создаем метку времени для момента времени, когда выполняется вызов API, в часовом поясе, определенном в этом заголовке. Например, [API содержимого](/rest/reference/repos#contents) создает фиксацию Git для каждого добавления или изменения и использует текущее время в качестве метки времени. В этом заголовке определяется часовой пояс, используемый для создания текущей метки времени.

### Использование последнего известного часового пояса для пользователя

Если заголовок `Time-Zone` не указан и вы выполняете вызов API с проверкой подлинности, мы используем последний известный часовой пояс для пользователя, прошедшего проверку подлинности. Последний известный часовой пояс обновляется при каждом посещении веб-сайта {% data variables.product.product_name %}.

### Использование UTC по умолчанию при отсутствии других сведений о часовом поясе

Если получить сведения о часовом поясе указанными выше способами не удалось, мы используем UTC в качестве часового пояса для создания фиксации Git.
