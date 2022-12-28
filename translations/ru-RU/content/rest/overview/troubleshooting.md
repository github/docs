---
title: Устранение неполадок
intro: 'Узнайте, как устранить наиболее распространенные проблемы, с которыми сталкиваются пользователи в REST API.'
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: c696f18d89ffe7d9c9c7c13eda933285502132ae
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192836'
---
Если у вас в API возникли некоторые трудности, далее приведен список решений некоторых проблем, которые могут возникнуть.

{% ifversion api-date-versioning %}

## `400` ошибка для неподдерживаемой версии API

Чтобы указать версию API, `X-GitHub-Api-Version` следует использовать заголовок . Пример:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Если указать версию, которая не существует, появится сообщение об ошибке `400` .

Дополнительные сведения см. в разделе [Версии API](/rest/overview/api-versions).

{% endif %}

## Ошибка `404` существующего репозитория

Как правило, при неправильной проверке подлинности клиента отправляется сообщение об ошибке `404`.
В таких случаях может потребоваться просмотреть `403 Forbidden`. Но так как мы не хотим предоставлять _никаких_ сведений о частных репозиториях, API возвращает ошибку `404`.

Чтобы устранить неполадки, убедитесь, что [проверка подлинности выполнена правильно](/guides/getting-started/), [маркер доступа OAuth имеет необходимые области](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), [ограничения сторонних приложений][oap-guide] не блокируют доступ и что [маркер не был отозван и его срок действия не истек](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## Возвращены не все результаты

Большинство вызовов API, обращающегося к списку ресурсов (_например_, пользователей, проблем _и т. д._ ), поддерживают разбиение на страницы. Если вы создаете запросы и получаете неполный набор результатов, вероятно, вы просматриваете только первую страницу. Чтобы получить больше результатов, вам потребуется отправить запрос на оставшиеся страницы.

*Не пытайтесь* угадать формат URL-адреса разбиения на страницы. Не для каждого вызова API используется одна и та же структура. Вместо этого извлеките сведения о разбиении на страницы из заголовка ссылки, который возвращается при каждом запросе. Дополнительные сведения о разбиении на страницы см. [в разделе Использование разбиения на страницы в REST API](/rest/guides/using-pagination-in-the-rest-api).

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Ошибки обычной проверки подлинности

С 13 ноября 2020 г. не рекомендуется использовать проверку подлинности с помощью имени пользователя и пароля для REST API и API авторизации OAuth; они больше не будут работать.

### Использование `username`/`password` для обычной проверки подлинности

Если вы используете `username` и `password` для вызовов API, они больше не смогут пройти проверку подлинности. Пример:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Вместо этого используйте [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) при тестировании конечных точек или локальной разработке:

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

Для приложений OAuth следует использовать [процесс веб-приложения](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow), чтобы создать маркер OAuth для применения в заголовке вызова API:

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Истекшее время ожидания

Если {% data variables.product.product_name %} обрабатывает запрос API более 10 секунд, {% data variables.product.product_name %} завершит запрос и вы получите ответ о времени ожидания.

{% endif %}
