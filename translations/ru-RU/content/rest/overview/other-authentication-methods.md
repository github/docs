---
title: Другие методы проверки подлинности
intro: Базовую проверку подлинности можно использовать для тестирования в нерабочей среде.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172720'
---
{% ifversion fpt or ghes or ghec %} Хотя API предоставляет несколько методов проверки подлинности, для рабочих приложений настоятельно рекомендуется использовать [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/). Другие методы предназначены для скриптов или тестирования (т. е. для случаев, когда возможности OAuth избыточны). Сторонние приложения, использующие {% data variables.product.product_name %} для проверки подлинности, не должны запрашивать или собирать учетные данные {% data variables.product.product_name %}.
Вместо этого они должны использовать [веб-поток OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

Для проверки подлинности рекомендуется использовать маркеры [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) , такие как {% data variables.product.pat_generic %} через [веб-поток OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Обычная проверка подлинности

API поддерживает обычную проверку подлинности согласно [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) с небольшими отличиями.
Основное отличие заключается в том, что согласно требованиям RFC на запросы, не прошедшие проверку подлинности, должен предоставляться ответ `401 Unauthorized`. Во многих случаях это позволяет узнать о существовании пользовательских данных. Вместо этого API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} возвращает ответ `404 Not Found`.
Это может привести к проблемам при использовании библиотек HTTP, предполагающих ответ `401 Unauthorized`. Решением может быть формирование заголовка `Authorization` вручную.

### Через {% data variables.product.pat_generic %}s

Для проверки подлинности в API GitHub рекомендуется использовать {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %}.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

Этот подход полезен, если ваши средства поддерживают только обычную проверку подлинности, но вы хотите воспользоваться преимуществами функций безопасности {% data variables.product.pat_generic %}.

{% ifversion not ghae %}
### Имя пользователя и пароль

{% ifversion fpt or ghec %} {% note %}

**Примечание**. На {% data variables.product.prodname_dotcom %} поддержка проверки пароля в API прекращена с 13 ноября 2020 г. для всех учетных записей {% data variables.product.prodname_dotcom_the_website %}, включая планы {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} и {% data variables.product.prodname_ghe_cloud %}. Теперь необходимо пройти проверку подлинности в API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} с помощью маркера API, например маркера доступа OAuth, маркера доступа для установки приложения GitHub или {% data variables.product.pat_generic %}, в зависимости от того, что необходимо сделать с маркером. Дополнительные сведения см. в разделе [Устранение неполадок](/rest/overview/troubleshooting#basic-authentication-errors).
 
{% endnote %} {% else %}

Чтобы использовать обычную проверку подлинности с API {% data variables.product.product_name %}, просто отправьте имя пользователя и пароль, связанные с учетной записью.

Например, если вы обращаетесь к API через [cURL][curl], приведенная ниже команда выполнит проверку подлинности, если вы замените `<username>` на свое имя пользователя {% data variables.product.product_name %}.
(cURL предложит ввести пароль.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
Если у вас включена двухфакторная проверка подлинности, убедитесь в том, что вы знаете [принципы ее работы](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### Проверка подлинности для единого входа SAML

{% note %}

**Примечание**. Интеграции и приложения OAuth, которые создают токены от чьего-то имени, авторизуются автоматически.

{% endnote %}

{% note %}

**Примечание.** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Если вы используете API для доступа к организации, которая применяет единый [вход SAML][saml-sso] для проверки подлинности, необходимо создать {% data variables.product.pat_generic %} и [авторизовать маркер][allowlist] для этой организации. Перейдите по URL-адресу, указанному в `X-GitHub-SSO`, чтобы авторизовать токен для организации.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

При запросе данных, которые могут поступать из нескольких организаций (например, [запрос списка проблем, созданных пользователем][user-issues]), `X-GitHub-SSO` заголовок указывает, какие организации требуют авторизовать {% data variables.product.pat_generic %}:

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

Значение `organizations` представляет собой разделенный запятыми список идентификаторов организаций для организаций, требующих авторизации {% data variables.product.pat_generic %}.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Работа с двухфакторной проверкой подлинности

Если включена двухфакторная проверка [подлинности, обычная проверка подлинности](#basic-authentication) для _большинства_ конечных точек в REST API требует использования {% data variables.product.pat_generic %}{% ifversion ghes %} или маркера OAuth вместо имени пользователя и пароля{% endif %}.

Вы можете создать новый {% data variables.product.pat_generic %} {% ifversion fpt or ghec %}с помощью [параметров разработчика {% data variables.product.product_name %}](https://github.com/settings/tokens/new) {% endif %}{% ifversion ghes %} или с помощью Конечная точка "[Создать новую авторизацию][/rest/reference/oauth-authorizations#create-a-new-authorization]" в API авторизации OAuth для создания нового маркера OAuth{% endif %}. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %} для командной строки](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). Затем эти токены используются для [проверки подлинности с помощью токена OAuth][oauth-auth] в API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.{% ifversion ghes %} Пройти проверку подлинности с помощью имени пользователя и пароля нужно всего один раз — при создании токена OAuth или использовании API авторизации OAuth.{% endif %}

{% endif %}

{% ifversion ghes %}
### Использование API авторизации OAuth с двухфакторной проверкой подлинности

При вызове API авторизации OAuth обычная проверка подлинности требует использования одноразовых паролей (OTP) и имени пользователя и пароля вместо токенов. При попытке пройти проверку подлинности с помощью API авторизации OAuth сервер вернет ответ `401 Unauthorized` и один из следующих заголовков, чтобы сообщить вам о том, что нужен код двухфакторной проверки подлинности:

`X-GitHub-OTP: required; SMS` или `X-GitHub-OTP: required; app`.  

В этом заголовке указано, как ваша учетная запись получает коды двухфакторной проверки подлинности. В зависимости от того, как настроена учетная запись, вы получаете коды OTP через SMS или используете специальное приложение, например Google Authenticator или 1Password. Подробнее: [Настройка двухфакторной проверки подлинности](/articles/configuring-two-factor-authentication). Передайте одноразовый пароль в заголовке:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
