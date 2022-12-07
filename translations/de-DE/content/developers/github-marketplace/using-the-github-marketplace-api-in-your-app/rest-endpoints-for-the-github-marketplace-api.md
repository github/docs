---
title: REST-Endpunkte für die GitHub Marketplace-API
intro: 'Um deine App in {% data variables.product.prodname_marketplace %} zu verwalten, verwende diese {% data variables.product.prodname_marketplace %}-API-Endpunkte.'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
  - /developers/github-marketplace/rest-endpoints-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: REST API
ms.openlocfilehash: aac7df5600863521c482b8a13c31abf8fd103ecf
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102843'
---
Hier sind einige nützliche Endpunkte, die für Marketplace-Einträge verfügbar sind:

* [Auflisten von Plänen](/rest/reference/apps#list-plans)
* [Auflisten von Konten für einen Plan](/rest/reference/apps#list-accounts-for-a-plan)
* [Abrufen eines Abonnementplans für ein Konto](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [Auflisten von Abonnements für den authentifizierten Benutzer](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Ausführliche Informationen zur Authentifizierung bei Verwendung der {% data variables.product.prodname_marketplace %}-API findest du auf diesen Seiten:

* [Autorisierungsoptionen für OAuth-Apps](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Authentifizierungsoptionen für GitHub-Apps](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**Hinweis:**[Begrenzungen für die REST-API](/rest/overview/resources-in-the-rest-api#rate-limiting) gelten für alle {% data variables.product.prodname_marketplace %}-API-Endpunkte.

{% endnote %}
