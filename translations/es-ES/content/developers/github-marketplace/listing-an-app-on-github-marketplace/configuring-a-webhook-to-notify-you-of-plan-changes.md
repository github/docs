---
title: Configurar un webhook para que te notifique sobre los cambios de plan
intro: 'Después de [crear un borrador de lista {% data variables.product.prodname_marketplace %} ](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), puedes configurar un webhook que te notifique cuándo se producen cambios en los planes de cuenta de cliente. Después de configurar el webhook, puedes [controlar los tipos de eventos `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) de la aplicación.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092139'
---
El webhook de evento de {% data variables.product.prodname_marketplace %} solo puede configurarse desde la página de listado de {% data variables.product.prodname_marketplace %} de tu aplicación. Puede configurar todos los demás eventos desde la [página de configuración para desarrolladores de la aplicación](https://github.com/settings/developers). Si no ha creado una oferta de {% data variables.product.prodname_marketplace %}, lea "[Creación de un borrador de oferta de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para obtener información sobre cómo hacerlo.

## Creación de un webhook

Para crear un webhook para la oferta de {% data variables.product.prodname_marketplace %}, haga clic en **Webhook** en la barra lateral izquierda de la [página de la oferta de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Verás las siguientes opciones que se necesitan para configurar tu webhook:

### Dirección URL de carga

{% data reusables.webhooks.payload_url %}

### Tipo de contenido

{% data reusables.webhooks.content_type %} GitHub recomienda usar el tipo de contenido `application/json`.

### Secreto

{% data reusables.webhooks.secret %}

### Activo

Predeterminadamente, las entregas de webhook están "Activas". También puedes elegir inhabilitar la entrega de cargas útiles de webhooks durante el desarrollo si deseleccionas "Activo". Si inhabilitaste las entregas de los webhooks, necesitarás seleccionar "Activo" antes de que emitas tu app para su revisión.

## Visualizar las entregas de los webhooks

Una vez que haya configurado el webhook de {% data variables.product.prodname_marketplace %}, podrá inspeccionar las cargas de solicitud de `POST` desde la página **Webhook** de la [oferta en {% data variables.product.prodname_marketplace %} de la aplicación](https://github.com/marketplace/manage). GitHub no reenvía los intentos fallidos de entrega. Asegúrate de que tu app pueda recibir toda la carga útil del webhook que envíe GitHub.

![Inspeccionar las entregas de webhooks de {% data variables.product.prodname_marketplace %} recientes](/assets/images/marketplace/marketplace_webhook_deliveries.png)
