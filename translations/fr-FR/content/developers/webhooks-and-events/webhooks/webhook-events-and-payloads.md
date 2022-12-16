---
title: Événements et charges utiles du webhook
intro: Découvrez quand chaque événement de webhook se produit et ce que contient la charge utile.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165537'
---
{% data reusables.webhooks.webhooks_intro %}

Vous pouvez créer des webhooks qui s’abonnent aux événements listés dans cette page. Chaque événement de webhook comprend une description des propriétés du webhook et un exemple de charge utile. Pour plus d’informations, consultez « [Création de webhooks](/webhooks/creating/) ».

## Propriétés courantes des objets de charge utile de webhook

Chaque charge utile d’événement de webhook contient également des propriétés propres à l’événement. Les propriétés uniques sont disponibles dans les sections de chaque type d’événement.

Clé | Type | Description
----|------|-------------
`action` | `string` | La plupart des charges utiles de webhook contiennent une propriété `action` avec l’activité spécifique qui a déclenché l’événement.
{% data reusables.webhooks.sender_desc %} Cette propriété est comprise dans chaque charge utile de webhook.
{% data reusables.webhooks.repo_desc %} Les charges utiles de webhook contiennent la propriété `repository` quand l’événement se produit à partir d’une activité dans un dépôt.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Pour plus d’informations, consultez « [Création d’une {% data variables.product.prodname_github_app %}](/apps/building-github-apps/) ».

Les propriétés uniques d’un événement de webhook sont les mêmes que celles que vous trouvez dans la propriété `payload` en cas d’utilisation de l’[API Événements](/rest/reference/activity#events). L’[événement `push`](#push) est une exception. Les propriétés uniques de la charge utile du webhook d’événement `push` sont différentes de la propriété `payload` de l’API Événements. La charge utile du webhook contient des informations plus détaillées.

{% tip %}

**Remarque :** Les charges utiles sont limitées à 25 Mo. Si votre événement génère une charge utile supérieure, aucun webhook n’est déclenché. Cela peut se produire, par exemple, sur un événement `create` si de nombreuses branches ou étiquettes sont poussées à la fois. Nous vous suggérons de monitorer la taille de votre charge utile pour garantir la livraison.

{% endtip %}

### En-têtes de livraison

Les charges utiles HTTP POST livrées au point de terminaison de l’URL configurée de votre webhook contiennent plusieurs en-têtes spéciaux :

En-tête | Description
-------|-------------|
`X-GitHub-Event`| Nom de l’événement qui a déclenché la livraison.
`X-GitHub-Delivery`| [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) permettant d’identifier la livraison. {% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | Version de l’instance {% data variables.product.prodname_ghe_server %} qui a envoyé la charge utile HTTP POST.
`X-GitHub-Enterprise-Host` | Nom d’hôte de l’instance {% data variables.product.prodname_ghe_server %} qui a envoyé la charge utile HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Cet en-tête est envoyé si le webhook est configuré avec un [`secret`](/rest/reference/repos#create-hook-config-params). Il s’agit du code de hachage hexadécimal HMAC du corps de la demande, qui est généré avec la fonction de hachage SHA-1 et dont le `secret` est la `key` HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` est fourni pour la compatibilité avec les intégrations existantes, et nous vous recommandons d’utiliser plutôt l’option `X-Hub-Signature-256` plus sécurisée.{% endif %}{% endif %}
`X-Hub-Signature-256`| Cet en-tête est envoyé si le webhook est configuré avec un [`secret`](/rest/reference/repos#create-hook-config-params). Il s’agit du code de hachage hexadécimal HMAC du corps de la demande, qui est généré avec la fonction de hachage SHA-256 et dont le `secret` est la `key` HMAC.

Par ailleurs, le `User-Agent` pour les demandes a le préfixe `GitHub-Hookshot/`.

### Exemple de livraison

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
