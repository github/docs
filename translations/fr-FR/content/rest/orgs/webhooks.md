---
title: Webhooks d’organisation
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 68b043b92589bf1c1b3a6b543168d5b5b8c85118
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066841'
---
## À propos de l’API Webhooks d’organisation

Les webhooks d’organisation vous permettent de recevoir des charges utiles HTTP `POST` chaque fois que certains événements se produisent dans une organisation. {% data reusables.webhooks.webhooks-rest-api-links %}

Pour plus d’informations sur les actions auxquelles vous pouvez vous abonner, consultez « [{% data variables.product.prodname_dotcom %} types d’événements](/developers/webhooks-and-events/github-event-types) ».

### Étendues et restrictions

Toutes les actions contre les webhooks d’organisation nécessitent que l’utilisateur authentifié soit administrateur de l’organisation en cours de gestion. En outre, les jetons OAuth requièrent l’étendue `admin:org_hook`. Pour plus d’informations, consultez « [Étendues pour les applications OAuth](/developers/apps/scopes-for-oauth-apps) ».

Pour protéger les données sensibles qui peuvent être présentes dans des configurations de webhook, nous appliquons également les règles de contrôle d’accès suivantes :

- Les applications OAuth ne peuvent pas répertorier, afficher ou modifier des webhooks qu’elles n’ont pas créés.
- Les utilisateurs ne peuvent pas répertorier, afficher ou modifier des webhooks créés par des applications OAuth.

### Réception de webhooks

Pour que {% data variables.product.product_name %} envoie des charges utiles de webhook, votre serveur doit être accessible à partir d’Internet. Nous vous suggérons également vivement d’utiliser SSL afin que nous puissions envoyer des charges utiles chiffrées via HTTPS.

Pour d’autres meilleures pratiques, [consultez notre guide](/guides/best-practices-for-integrators/).

#### En-têtes de webhook

{% data variables.product.product_name %} envoie plusieurs en-têtes HTTP pour différencier les types d’événements et les identificateurs de charge utile. Consultez [En-têtes de webhook](/webhooks/event-payloads/#delivery-headers) pour plus de détails.
