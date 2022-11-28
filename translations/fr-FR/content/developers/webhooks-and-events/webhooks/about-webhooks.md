---
title: À propos des webhooks
intro: Découvrez les principes de base du fonctionnement des webhooks pour vous aider à créer et à configurer des intégrations.
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: 08b038d5a35c4c692502545e640d04993d169b6a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102789'
---
Les webhooks vous permettent de créer ou de configurer des intégrations, par exemple, des [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) ou des [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), qui s’abonnent à certains événements sur GitHub.com. Quand un de ces événements est déclenché, nous envoyons une charge utile HTTP POST à l’URL configurée du webhook. Les webhooks peuvent être utilisés pour mettre à jour un utilitaire de suivi des problèmes externes, déclencher des builds CI, mettre à jour un miroir de sauvegarde ou même déployer sur votre serveur de production. Vous êtes limité seulement par votre imagination.

Les webhooks peuvent être installés sur{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/),{% endif %} une [organisation][org-hooks], un [dépôt][repo-hooks] spécifique ou une {% data variables.product.prodname_github_app %}. Une fois installé, le webhook est envoyé chaque fois qu’un ou plusieurs événements souscrits se produisent.

Vous pouvez créer jusqu’à {% ifversion ghes or ghae %}250{% else %}20{% endif %} webhooks pour chaque événement sur chaque cible d’installation {% ifversion ghes or ghae %}(instance {% data variables.product.prodname_ghe_server %}, organisation spécifique ou dépôt spécifique). {% else %} (organisation spécifique ou dépôt spécifique). {% endif %}

## Événements

{% data reusables.webhooks.webhooks_intro %}

Chaque événement correspond à un certain ensemble d’actions qui peuvent se produire sur votre organisation et/ou dépôt. Par exemple, si vous vous abonnez à l’événement `issues`, vous recevez des charges utiles détaillées chaque fois qu’un problème est ouvert, fermé, étiqueté, etc.

Pour obtenir la liste complète des événements de webhook disponibles et leurs charges utiles, consultez « [Événements et charges utiles de webhook](/developers/webhooks-and-events/webhook-events-and-payloads) ».

## Événement ping

{% data reusables.webhooks.ping_short_desc %}

Pour plus d’informations sur la charge utile de webhook d’événement `ping`, consultez l’événement [`ping`](/webhooks/event-payloads/#ping).

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#webhooks
