---
title: События и полезные данные веб-перехватчика
intro: 'Узнайте, когда происходит каждое событие веб-перехватчика и какие полезные данные содержатся.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Webhook events & payloads
ms.openlocfilehash: 0592f191b463354b92c3953880c7a7a435e0b07a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165541'
---
{% data reusables.webhooks.webhooks_intro %}

Вы можете создавать веб-перехватчики, которые подписываются на события, указанные на этой странице. Каждое событие веб-перехватчика включает описание свойств веб-перехватчика и пример полезных данных. Дополнительные сведения см. на странице [Создание веб-перехватчиков](/webhooks/creating/).

## Общие свойства объекта полезных данных веб-перехватчика

Все полезные данные события веб-перехватчика также содержат свойства, уникальные для события. Уникальные свойства указаны в разделах отдельных типов событий.

Ключ | Тип | Описание
----|------|-------------
`action` | `string` | Большинство полезных данных веб-перехватчика содержат свойство `action`, которое содержит конкретное действие, вызвавшее событие.
{% data reusables.webhooks.sender_desc %} Это свойство включено во все полезные данные веб-перехватчика.
{% data reusables.webhooks.repo_desc %} Полезные данные веб-перехватчика содержат свойство `repository`, когда событие происходит в результате выполнения действия в репозитории.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Дополнительные сведения см. на странице [Создание {% data variables.product.prodname_github_app %}](/apps/building-github-apps/).

Уникальные свойства для события веб-перехватчика — это те же свойства, которые можно найти в свойстве `payload` при использовании [API отчетов](/rest/reference/activity#events). Единственным исключением является [событие `push`](#push). Уникальные свойства полезных данных веб-перехватчика события `push` и свойство `payload` в API событий различаются. Полезные данные веб-перехватчика содержат более подробные сведения.

{% tip %}

**Примечание.** Размер полезных данных не должен превышать 25 МБ. Если ваше событие генерирует полезные данные большего размера, веб-перехватчик не будет запущен. Это может произойти, например, при событии `create` в случае одновременной принудительной отправки большого количества ветвей или тегов. Рекомендуем отслеживать размер полезных данных, чтобы обеспечить доставку.

{% endtip %}

### Заголовки доставки

Полезные данные HTTP POST, которые доставляются на настроенную конечную точку URL-адреса вашего веб-перехватчика, будут содержать несколько специальных заголовков:

Header | Описание
-------|-------------|
`X-GitHub-Event`| Название события, активировавшего доставку.
`X-GitHub-Delivery`| [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) для идентификации доставки.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | Версия экземпляра {% data variables.product.prodname_ghe_server %}, отправившего полезные данные HTTP POST.
`X-GitHub-Enterprise-Host` | Имя узла экземпляра {% data variables.product.prodname_ghe_server %}, отправившего полезные данные HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Этот заголовок отправляется, если веб-перехватчик настроен с [`secret`](/rest/reference/repos#create-hook-config-params). Это шестнадцатеричный дайджест HMAC текста запроса, который генерируется с использованием хеш-функции SHA-1 и `secret` в качестве HMAC `key`.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` предоставляется для совместимости с существующими интеграциями; мы рекомендуем вместо него использовать более безопасный `X-Hub-Signature-256`.{% endif %}{% endif %}
`X-Hub-Signature-256`| Этот заголовок отправляется, если веб-перехватчик настроен с [`secret`](/rest/reference/repos#create-hook-config-params). Это шестнадцатеричный дайджест HMAC текста запроса, который генерируется с использованием хэш-функции SHA-256 и `secret` в качестве HMAC `key`.

Кроме того, `User-Agent` для запросов будет иметь префикс `GitHub-Hookshot/`.

### Пример доставки

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

<!-- Content after this section is automatically generated -->
