---
title: Webhook-Ereignisse und -Nutzlasten
intro: 'Hier erfährst du, wann jedes Webhookereignis auftritt und was die Nutzlast enthält.'
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165538'
---
{% data reusables.webhooks.webhooks_intro %}

Du kannst Webhooks erstellen, die die auf dieser Seite aufgeführten Ereignisse abonnieren. Jedes Webhookereignis enthält eine Beschreibung der Webhookeigenschaften und eine Beispielnutzlast. Weitere Informationen findest du unter [Erstellen von Webhooks](/webhooks/creating/).

## Allgemeine Eigenschaften des Webhook-Nutzlastobjekts

Jede Webhook-Ereignisnutzlast enthält auch Eigenschaften, die für das Ereignis eindeutig sind. Du kannst die eindeutigen Eigenschaften in den einzelnen Ereignistypabschnitten finden.

Schlüssel | Typ | BESCHREIBUNG
----|------|-------------
`action` | `string` | Die meisten Webhooknutzlasten enthalten eine Eigenschaft `action`, die die spezifische Aktivität enthält, die das Ereignis ausgelöst hat.
{% data reusables.webhooks.sender_desc %} Diese Eigenschaft ist in jeder Webhooknutzlast enthalten.
{% data reusables.webhooks.repo_desc %} Webhooknutzlasten enthalten die Eigenschaft `repository`, wenn sich das Ereignis aus Aktivitäten in einem Repository ergibt.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Weitere Informationen findest du unter [Erstellen von {% data variables.product.prodname_github_app %}](/apps/building-github-apps/).

Die eindeutigen Eigenschaften für ein Webhookereignis sind die gleichen Eigenschaften, die du in der Eigenschaft `payload` findest, wenn du die [Ereignis-API](/rest/reference/activity#events) verwendest. Eine Ausnahme ist das [`push` Ereignis](#push). Die eindeutigen Eigenschaften der Nutzlast des Webhookereignisses `push` und die Eigenschaft `payload` in der Ereignis-API unterscheiden sich. Die Webhooknutzlast enthält ausführlichere Informationen.

{% tip %}

**Hinweis:** Nutzlasten sind auf 25 MB begrenzt. Wenn dein Ereignis eine größere Nutzlast generiert, wird kein Webhook ausgelöst. Dies kann beispielsweise bei einem `create`-Ereignis geschehen, wenn viele Branches oder Tags gleichzeitig verschoben werden. Es wird empfohlen, die Nutzlastgröße zu überwachen, um die Übermittlung sicherzustellen.

{% endtip %}

### Übermittlungsheader

HTTP-POST-Nutzlasten, die an den konfigurierten URL-Endpunkt deines Webhook übermittelt werden, enthalten mehrere spezielle Header:

Header | BESCHREIBUNG
-------|-------------|
`X-GitHub-Event`| Name des Ereignisses, das die Übermittlung ausgelöst hat.
`X-GitHub-Delivery`| Eine [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier), um die Übermittlung zu identifizieren. {% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | Die Version der {% data variables.product.prodname_ghe_server %}-Instanz, die die HTTP-POST-Nutzlast gesendet hat.
`X-GitHub-Enterprise-Host` | Der Hostname der {% data variables.product.prodname_ghe_server %}-Instanz, die die HTTP-POST-Nutzlast gesendet hat. {% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Dieser Header wird gesendet, wenn der Webhook mit einem [`secret`](/rest/reference/repos#create-hook-config-params) konfiguriert ist. Dies ist der HMAC-Hex-Digest des Anforderungstexts und wird mithilfe der SHA-1-Hashfunktion und dem `secret` als HMAC `key` generiert.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` wird für die Kompatibilität mit vorhandenen Integrationen bereitgestellt. Es wird empfohlen, stattdessen die sicherere `X-Hub-Signature-256` zu verwenden.{% endif %}{% endif %}
`X-Hub-Signature-256`| Dieser Header wird gesendet, wenn der Webhook mit einem [`secret`](/rest/reference/repos#create-hook-config-params) konfiguriert ist. Dies ist der HMAC-Hex-Digest des Anforderungstexts und wird mithilfe der SHA-256-Hashfunktion und des `secret` als HMAC `key` generiert.

Außerdem weist `User-Agent` für die Anforderungen das Präfix `GitHub-Hookshot/` auf.

### Beispielübermittlung

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
