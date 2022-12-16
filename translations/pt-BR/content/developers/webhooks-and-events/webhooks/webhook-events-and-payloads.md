---
title: Eventos e cargas de webhook
intro: Saiba mais sobre quando cada evento de webhook ocorre e o que contém o payload.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165535'
---
{% data reusables.webhooks.webhooks_intro %}

Você pode criar webhooks que assinam os eventos listados nesta página. Cada evento de webhook inclui uma descrição das propriedades do webhook e uma carga de exemplo. Para obter mais informações, confira "[Como criar webhooks](/webhooks/creating/)".

## Propriedades comuns do objeto da carga do webhook

Cada carga do evento do webhook também contém propriedades únicas para o evento. Você pode encontrar as propriedades únicas nas seções individuais de tipos de evento.

Chave | Type | Descrição
----|------|-------------
`action` | `string` | A maior parte da carga do webhook contém uma propriedade `action` que inclui a atividade específica que disparou o evento.
{% data reusables.webhooks.sender_desc %} Esta propriedade está incluída em todas as cargas do webhook.
{% data reusables.webhooks.repo_desc %} A carga do webhook contêm a propriedade `repository` quando o evento ocorre com base na atividade de um repositório.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Para obter mais informações, confira "[Como criar um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)".

As propriedades exclusivas de um evento de webhook são as mesmas propriedades que você encontrará na propriedade `payload` ao usar a [API de Eventos](/rest/reference/activity#events). Uma exceção disso é o [ evento `push`](#push). As propriedades exclusivas da carga do webhook de evento `push` e da propriedade `payload`na API de Eventos são diferentes. A carga do webhook contém informações mais detalhadas.

{% tip %}

**Observação:** a carga é limitada a 25 MB. Se o seu evento gerar uma carga maior, um webhook não será disparado. Isso pode acontecer, por exemplo, em um evento `create`, caso muitos branches ou muitas marcas sejam enviados por push de uma só vez. Sugerimos monitorar o tamanho da sua carga para garantir a entrega.

{% endtip %}

### Cabeçalhos de entrega

As cargas de HTTP POST que são entregues no ponto de extremidade da URL configurado do seu webhook conterão vários cabeçalhos especiais:

parâmetro | Descrição
-------|-------------|
`X-GitHub-Event`| Nome do evento que ativou a entrega.
`X-GitHub-Delivery`| Um [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar a entrega.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | A versão da instância do {% data variables.product.prodname_ghe_server %} que enviou a carga do HTTP POST.
`X-GitHub-Enterprise-Host` | O nome do host da instância do {% data variables.product.prodname_ghe_server %} que enviou o conteúdo HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Esse cabeçalho será enviado se o webhook estiver configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do corpo da solicitação, e é gerado por meio da função hash SHA-1 e do `secret` como a `key` do HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` é fornecido para compatibilidade com as integrações existentes, e recomendamos que você use o `X-Hub-Signature-256` mais seguro.{% endif %}{% endif %}
`X-Hub-Signature-256`| Esse cabeçalho será enviado se o webhook estiver configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do corpo da solicitação, e é gerado por meio da função hash SHA-256 e do `secret` como a `key` do HMAC.

Além disso, o `User-Agent` para as solicitações terão o prefixo `GitHub-Hookshot/`.

### Exemplo de entrega

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
