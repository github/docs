---
title: Terminales de REST para la API de GitHub Marketplace
intro: 'Para ayudarte a adminsitrar tu app en {% data variables.product.prodname_marketplace %}, utiliza estas terminales de la API de {% data variables.product.prodname_marketplace %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112497'
---
Aquí te mostramos algunas terminales útiles que están disponibles para los listados de Marketplace:

* [Enumerar planes](/rest/reference/apps#list-plans)
* [Enumerar cuentas de un plan](/rest/reference/apps#list-accounts-for-a-plan)
* [Obtener un plan de suscripción para una cuenta](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [Enumerar las suscripciones del usuario autenticado](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

Consulta estas páginas para encontrar más detalles sobre cómo autenticarte cuando utilices la API de {% data variables.product.prodname_marketplace %}:

* [Opciones de autorización para las aplicaciones de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [Opciones de autenticación para las aplicaciones de GitHub](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**Nota:** [Los límites de velocidad de la API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) se aplican a todos los puntos de conexión de API de {% data variables.product.prodname_marketplace %}.

{% endnote %}
