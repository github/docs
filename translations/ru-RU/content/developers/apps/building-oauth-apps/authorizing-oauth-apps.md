---
title: Авторизация приложений OAuth
intro: '{% data reusables.shortdesc.authorizing_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/directing-users-to-review-their-access
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/creating-multiple-tokens-for-oauth-apps
  - /v3/oauth
  - /apps/building-oauth-apps/authorization-options-for-oauth-apps
  - /apps/building-oauth-apps/authorizing-oauth-apps
  - /developers/apps/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: d35b65add4259df72d9ae8b179829a148abd7174
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106713'
---
Реализация OAuth в {% data variables.product.product_name %} поддерживает стандартный [тип предоставления кода авторизации](https://tools.ietf.org/html/rfc6749#section-4.1) и [предоставление авторизации устройствам](https://tools.ietf.org/html/rfc8628) OAuth 2.0 для приложений, у которых нет доступа к веб-браузеру.

Если вы хотите пропустить стандартную авторизацию приложения, например при его тестировании, можно воспользоваться [процессом не для веб-приложения](#non-web-application-flow).

Решите, какой процесс авторизации лучше всего подходит вашему приложению OAuth.

- [Процесс для веб-приложения](#web-application-flow): служит для авторизации пользователей для стандартных приложений OAuth, работающих в браузере. ([Тип неявного предоставления разрешений](https://tools.ietf.org/html/rfc6749#section-4.2) не поддерживается.)
- [Процесс для устройства](#device-flow): используется для автономных приложений, таких как средства CLI.

## Процесс для веб-приложения

{% note %}

**Примечание**. Если вы создаете приложение GitHub, то также можете использовать процесс для веб-приложения OAuth, но в процедуре настройки есть ряд важных отличий. Дополнительные сведения см. в разделе [Идентификация и авторизация пользователей для приложений GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).

{% endnote %}

Процесс для веб-приложения, позволяющий авторизовать пользователей для использования приложения, состоит из следующих шагов:

1. Пользователи перенаправляются для запроса удостоверения GitHub.
2. Пользователи перенаправляются из GitHub обратно на сайт.
3. Приложение обращается к API с маркером доступа пользователя.

### 1. Запрос удостоверения GitHub пользователя

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

Когда приложение GitHub указывает параметр `login`, оно предлагает пользователям определенную учетную запись для входа и авторизации приложения.

#### Параметры

Имя | Тип | Описание
-----|------|--------------
`client_id`|`string` | **Обязательно**. Идентификатор клиента, полученный от GitHub при {% ifversion fpt or ghec %}[регистрации](https://github.com/settings/applications/new){% else %}регистрации{% endif %}.
`redirect_uri`|`string` | URL-адрес в приложении, на который пользователи будут направляться после авторизации. См. дополнительные сведения ниже о [URL-адресах перенаправления](#redirect-urls).
`login` | `string` | Предлагает определенную учетную запись для входа и авторизации приложения.
`scope`|`string` | Разделенный пробелами список [областей](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Если значение не указано, по умолчанию `scope` представляет собой пустой список пользователей, которые не авторизовали ни одну область для приложения. Пользователям, авторизовавшим области для приложения, не будет отображаться страница авторизации OAuth со списком областей. Вместо этого данный шаг процесса будет автоматически завершен с набором областей, которые пользователь авторизовал для приложения. Например, если пользователь уже дважды выполнил веб-процесс и авторизовал один токен с областью `user`, а другой — с областью `repo`, третий веб-процесс без указания `scope` получит токен с областью `user` и `repo`.
`state` | `string` | {% data reusables.apps.state_description %}
`allow_signup`|`string` | Предоставляется ли пользователям, не прошедшим проверку подлинности, возможность регистрации на GitHub во время процесса OAuth. Значение по умолчанию — `true`. Используйте значение `false`, когда политика запрещает регистрацию.

### 2. Перенаправление пользователей из GitHub обратно на ваш сайт

Если пользователь принимает запрос, {% data variables.product.product_name %} перенаправляет его обратно на ваш сайт с временным кодом в параметре `code`, а также с состоянием, указанным на предыдущем шаге в параметре `state`. Срок действия временного кода истекает через 10 минут. Если состояния не совпадают, значит запрос создала третья сторона и следует прервать процесс.

Код в параметре `code` обменивается на маркер доступа:

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

#### Параметры

Имя | Тип | Описание
-----|------|--------------
`client_id` | `string` | **Обязательный.** Идентификатор клиента, полученный из {% data variables.product.product_name %} для {% data variables.product.prodname_oauth_app %}.
`client_secret` | `string` | **Обязательный.** Секрет клиента, полученный из {% data variables.product.product_name %} для {% data variables.product.prodname_oauth_app %}.
`code` | `string` | **Обязательный.** Код, полученный в качестве ответа на шаге 1.
`redirect_uri` | `string` | URL-адрес в приложении, на который пользователи будут направляться после авторизации.

#### Ответ

По умолчанию ответ имеет следующую форму:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "access_token":"gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "scope":"repo,gist",
  "token_type":"bearer"
}
```

```xml
Accept: application/xml
<OAuth>
  <token_type>bearer</token_type>
  <scope>repo,gist</scope>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
</OAuth>
```

### 3. Использование маркера доступа для доступа к API

Маркер доступа позволяет выполнять запросы к API от имени пользователя.

    Authorization: Bearer OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

Например, в curl можно задать заголовок авторизации следующим образом:

```shell
curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

## Процесс для устройства

{% note %}

**Примечание**. Процесс для устройства находится в стадии общедоступной бета-версии и может быть изменен.

{% endnote %}

Процесс для устройства позволяет авторизовать пользователей для автономного приложения, например средства CLI или диспетчера учетных данных GIT.

{% ifversion device-flow-is-opt-in %}

Прежде чем использовать процесс для устройства с целью авторизации и идентификации пользователей, необходимо сначала включить его в параметрах приложения. Дополнительные сведения о включении процесса для устройства в приложении см. в разделе [Изменение приложения OAuth](/developers/apps/managing-oauth-apps/modifying-an-oauth-app) для приложений OAuth или [Изменение приложения GitHub](/developers/apps/managing-github-apps/modifying-a-github-app) для приложений GitHub.

{% endif %}

### Общая схема процесса для устройства

1. Приложение запрашивает коды проверки устройства и пользователя и получает URL-адрес авторизации, по которому пользователь должен будет ввести код проверки пользователя.
2. Приложение предлагает пользователю ввести код проверки пользователя на странице {% data variables.product.device_authorization_url %}.
3.  Приложение опрашивает состояние проверки подлинности пользователя. После того как пользователь авторизует устройство, приложение сможет выполнять вызовы API с новым маркером доступа.

### Шаг 1. Приложение запрашивает коды проверки устройства и пользователя на GitHub

    POST {% data variables.product.oauth_host_code %}/login/device/code

Приложение должно запросить код проверки пользователя и URL-адрес проверки, который приложение будет использовать для запроса проверки подлинности пользователя на следующем шаге. Запрос также возвращает код проверки устройства, который приложение должно использовать для получения маркера доступа и проверки состояния проверки подлинности пользователя.

#### Входные параметры

Имя | Тип | Описание
-----|------|--------------
`client_id` | `string` | **Обязательный.** Идентификатор клиента, полученный из {% data variables.product.product_name %} для приложения.
`scope` | `string` | Область, к которой приложение запрашивает доступ.

#### Ответ

По умолчанию ответ имеет следующую форму:

```
device_code=3584d83530557fdd1f46af8289938c8ef79f9dc5&expires_in=900&interval=5&user_code=WDJB-MJHT&verification_uri=https%3A%2F%{% data variables.product.product_url %}%2Flogin%2Fdevice
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
  "device_code": "3584d83530557fdd1f46af8289938c8ef79f9dc5",
  "user_code": "WDJB-MJHT",
  "verification_uri": "{% data variables.product.oauth_host_code %}/login/device",
  "expires_in": 900,
  "interval": 5
}
```

```xml
Accept: application/xml
<OAuth>
  <device_code>3584d83530557fdd1f46af8289938c8ef79f9dc5</device_code>
  <user_code>WDJB-MJHT</user_code>
  <verification_uri>{% data variables.product.oauth_host_code %}/login/device</verification_uri>
  <expires_in>900</expires_in>
  <interval>5</interval>
</OAuth>
```

#### Параметры ответа

Имя | Тип | Описание
-----|------|--------------
`device_code` | `string` | Код проверки устройства состоит из 40 символов и служит для проверки устройства.
`user_code` | `string` | Код проверки пользователя отображается на устройстве, чтобы пользователь мог ввести его в браузере. Он состоит из восьми символов с дефисом в середине.
`verification_uri` | `string` | URL-адрес проверки, по которому пользователи должны ввести `user_code`: {% data variables.product.device_authorization_url %}.
`expires_in` | `integer`| Количество секунд до окончания срока действия `device_code` и `user_code`. Значение по умолчанию равно 900 секундам или 15 минутам.
`interval` | `integer` | Минимальное количество секунд, которое должно пройти, прежде чем можно будет выполнить новый запрос маркера доступа (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) для завершения авторизации устройства. Например, если интервал равен пяти, вы не сможете выполнить новый запрос, пока не пройдут пять секунд. Если вы выполните более одного запроса в течение пяти секунд, то достигнете предела частоты запросов и получите ошибку `slow_down`.

### Шаг 2. Запрос на ввод кода проверки пользователя в браузере

Устройство отобразит код проверки пользователя и предложит пользователю ввести его на странице {% data variables.product.device_authorization_url %}.

  ![Поле для ввода кода проверки пользователя, отображаемого на устройстве](/assets/images/github-apps/device_authorization_page_for_user_code.png)

### Шаг 3. Опрос GitHub приложением с целью проверки авторизации устройства пользователем

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

Приложение будет выполнять запросы на авторизацию устройства `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`, пока не истечет срок действия кода проверки устройства или пользователя либо пока пользователь не авторизует приложение успешно с помощью допустимого кода проверки пользователя. Чтобы избежать ошибок ограничения частоты запросов, приложение должно использовать минимальный интервал (`interval`) опроса, полученный на шаге 1. Дополнительные сведения см. в разделе [Ограничения частоты запросов для процесса для устройства](#rate-limits-for-the-device-flow).

Пользователь должен ввести действительный код в течение 15 минут (900 секунд). По истечении 15 минут вам потребуется запросить новый код авторизации устройства с помощью `POST {% data variables.product.oauth_host_code %}/login/device/code`.

После авторизации пользователем приложение получит маркер доступа, с помощью которого можно выполнять запросы к API от имени пользователя.

#### Входные параметры

Имя | Тип | Описание
-----|------|--------------
`client_id` | `string` | **Обязательный.** Идентификатор клиента, полученный из {% data variables.product.product_name %} для {% data variables.product.prodname_oauth_app %}.
`device_code` | `string` | **Обязательный.** Код проверки устройства, полученный в ответ на запрос `POST {% data variables.product.oauth_host_code %}/login/device/code`.
`grant_type` | `string` | **Обязательный.** Тип предоставления разрешения должен быть `urn:ietf:params:oauth:grant-type:device_code`.

#### Ответ

По умолчанию ответ имеет следующую форму:

```
access_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&token_type=bearer&scope=repo%2Cgist
```

{% data reusables.apps.oauth-auth-vary-response %}

```json
Accept: application/json
{
 "access_token": "gho_16C7e42F292c6912E7710c838347Ae178B4a",
  "token_type": "bearer",
  "scope": "repo,gist"
}
```

```xml
Accept: application/xml
<OAuth>
  <access_token>gho_16C7e42F292c6912E7710c838347Ae178B4a</access_token>
  <token_type>bearer</token_type>
  <scope>gist,repo</scope>
</OAuth>
```

### Ограничения частоты вызовов для процесса для устройства

Пользователь может отправлять код проверки в браузере не чаще чем 50 раз в час для каждого приложения.

При выполнении еще одного запроса маркера доступа (`POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`) до истечения минимального интервала времени между запросами (или `interval`) будет достигнут предел частоты запросов и получен ответ с ошибкой `slow_down`. Ответ об ошибке `slow_down` добавляет пять секунд к последнему интервалу `interval`. Дополнительные сведения см. в разделе [Коды ошибок процесса для устройства](#errors-for-the-device-flow).

### Коды ошибок процесса для устройства

| Код ошибки | Описание |
|----|----|
| `authorization_pending`| Эта ошибка возникает, если запрос авторизации ожидает завершения и пользователь еще не ввел код проверки пользователя. Приложение должно продолжать выполнять запрос `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` без превышения интервала [`interval`](#response-parameters), то есть перед следующим запросом должно пройти минимальное количество секунд. |
| `slow_down` | При получении ошибки `slow_down` к минимальному интервалу времени `interval` между запросами `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token` добавляются пять дополнительных секунд. Например, если начальный требуемый интервал между запросами составлял пять секунд и вы получили ответ с ошибкой `slow_down`, необходимо подождать не менее 10 секунд, прежде чем выполнять новый запрос маркера доступа OAuth. В ответе с ошибкой указывается новый интервал `interval`, который необходимо выждать.
| `expired_token` | Если истек срок действия кода устройства, возникнет ошибка `token_expired`. Необходимо запросить новый код устройства.
| `unsupported_grant_type` | Тип предоставления разрешения должен быть `urn:ietf:params:oauth:grant-type:device_code` и включен в качестве входного параметра при запросе маркера OAuth `POST {% data variables.product.oauth_host_code %}/login/oauth/access_token`.
| `incorrect_client_credentials` | Для процесса для устройства необходимо передать идентификатор клиента приложения, который можно найти на странице параметров приложения. `client_secret` не требуется для процесса для устройства.
| `incorrect_device_code` | Указанный код проверки устройства недействителен.
| `access_denied` | Если пользователь нажимает кнопку "Отмена" в процессе авторизации, вы получаете ошибку `access_denied` и пользователь больше не сможет использовать код проверки.{% ifversion device-flow-is-opt-in %}
| `device_flow_disabled` | Процесс для устройства не включен в параметрах приложения. Дополнительные сведения см. в разделе [Процесс для устройства](#device-flow).{% endif %}

Дополнительные сведения см. в разделе [Предоставление разрешения на авторизацию устройства OAuth 2.0](https://tools.ietf.org/html/rfc8628#section-3.5).

## Процесс не для веб-приложения

Проверка подлинности не для веб-приложения доступна в некоторых ситуациях, таких как тестирование. При необходимости можно использовать [обычную проверку подлинности](/rest/overview/other-authentication-methods#basic-authentication) для создания {% данных variables.product.pat_generic %} с помощью [страницы параметров {% данных variables.product.pat_generic %}s](/articles/creating-an-access-token-for-command-line-use). Этот метод позволяет пользователю отозвать доступ в любое время.

{% ifversion fpt or ghes or ghec %} {% note %}

**Примечание**. При использовании процесса не для веб-приложения с целью создания токена OAuth2 необходимо понимать [принципы работы двухфакторной проверки подлинности](/rest/overview/other-authentication-methods#working-with-two-factor-authentication), если она включена у вас или у ваших пользователей.

{% endnote %} {% endif %}

## URL-адреса перенаправления

Параметр `redirect_uri` не обязателен. Если он не задан, GitHub будет перенаправлять пользователей на URL-адрес обратного вызова, настроенный в параметрах приложения OAuth. Если он указан, узел URL-адреса перенаправления (за исключением вложенных доменов) и порт должны точно соответствовать URL-адресу обратного вызова. Путь URL-адреса перенаправления должен вести в подкаталог URL-адреса обратного вызова.

    CALLBACK: http://example.com/path

    GOOD: http://example.com/path
    GOOD: http://example.com/path/subdir/other
    GOOD: http://oauth.example.com/path
    GOOD: http://oauth.example.com/path/subdir/other
    BAD:  http://example.com/bar
    BAD:  http://example.com/
    BAD:  http://example.com:8080/path
    BAD:  http://oauth.example.com:8080/path
    BAD:  http://example.org

### URL-адреса перенаправления замыкания на себя

Необязательный `redirect_uri` параметр также можно использовать для URL-адресов замыкания на себя. Если приложение указывает URL-адрес замыкания на себя и порт, после авторизации пользователей приложения будет перенаправлено на указанный URL-адрес и порт. Не `redirect_uri` нужно совпадать с портом, указанным в URL-адресе обратного вызова для приложения.

Для URL-адреса обратного вызова `http://127.0.0.1/path` можно использовать следующий `redirect_uri`:

```
http://127.0.0.1:1234/path
```

Обратите внимание, что OAuth RFC [рекомендует не использовать `localhost`](https://datatracker.ietf.org/doc/html/rfc8252#section-7.3), а использовать литерал `127.0.0.1` замыкания на себя или IPv6 `::1`.

## Создание нескольких токенов для приложений OAuth

Вы можете создать несколько токенов для определенных сочетаний пользователя, приложения и области, которые будут предназначены для конкретных вариантов использования.

Это полезно, если один из рабочих процессов, поддерживаемых приложением OAuth, использует GitHub для входа и требует только базовых сведений о пользователе. Другой рабочий процесс может требовать доступа к частным репозиториям пользователя. Используя несколько токенов, приложение OAuth может выполнять веб-процесс для каждого варианта использования, запрашивая только необходимые области. Если пользователь использует приложение только для входа, ему никогда не требуется предоставлять приложению OAuth доступ к частным репозиториям.

{% data reusables.apps.oauth-token-limit %}

{% data reusables.apps.deletes_ssh_keys %}

## Перенаправление пользователей для проверки доступа

Вы можете предоставлять ссылку на сведения об авторизации для приложения OAuth, чтобы пользователи могли просматривать и отзывать авторизации.

Чтобы создать эту ссылку, вам потребуется идентификатор `client_id` приложения OAuth, полученный от GitHub при регистрации приложения.

```
{% data variables.product.oauth_host_code %}/settings/connections/applications/:client_id
```

{% tip %}

**Совет**. Дополнительные сведения о ресурсах, к которым приложение OAuth может получать доступ от имени пользователя, см. в разделе [Обнаружение ресурсов для пользователя](/rest/guides/discovering-resources-for-a-user).

{% endtip %}

## Устранение неполадок

* [Устранение ошибок запросов на авторизацию](/apps/managing-oauth-apps/troubleshooting-authorization-request-errors)
* [Устранение ошибок при запросе маркеров доступа для приложения OAuth](/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors)
* "[Ошибки потока устройств](#error-codes-for-the-device-flow)"
* "[Срок действия маркера и отзыв](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"

## Дополнительные материалы

- [Сведения о проверке подлинности для {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github)
