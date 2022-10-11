---
title: Configurar un webhook para que te notifique sobre los cambios de plan
intro: 'Después de [crear un listado de {% data variables.product.prodname_marketplace %} en borrador] (/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), puedes configurar un webhook que te notifique cuando sucedan cambios en los planes de la cuenta de los clientes. Después de que configures el webhook, puedes [gestionar los tipos de evento de `marketplace_purchase`] (/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) en tu app.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing/
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing/
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---

El webhook de evento de {% data variables.product.prodname_marketplace %} solo puede configurarse desde la página de listado de {% data variables.product.prodname_marketplace %} de tu aplicación. Puedes configurar el resto de los eventos desde la [página de configuración del desarrollador de la aplicación](https://github.com/settings/developers). Si no has creado un listado de {% data variables.product.prodname_marketplace %}, lee la sección "[Crear un borrador de listado de {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)" para aprender cómo hacerlo.

### Crear un webhook

Para crear un webhook para tu listado de {% data variables.product.prodname_marketplace %}, da clic en **Webhooks** en la barra lateral de tu [página de listado de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Verás las siguientes opciones que se necesitan para configurar tu webhook:

#### URL de la carga útil

{% data reusables.webhooks.payload_url %}

#### Tipo de contenido

{% data reusables.webhooks.content_type %} GitHub te recomienda utilizar el tipo de contenido `application/json`.

#### Secreto

{% data reusables.webhooks.secret %}

#### Activo

Predeterminadamente, las entregas de webhook están "Activas". También puedes elegir inhabilitar la entrega de cargas útiles de webhooks durante el desarrollo si deseleccionas "Activo". Si inhabilitaste las entregas de los webhooks, necesitarás seleccionar "Activo" antes de que emitas tu app para su revisión.

### Visualizar las entregas de los webhooks

Una vez que hayas configurado tu webhook de {% data variables.product.prodname_marketplace %}, podrás inspecionar las cargas útiles de las solicitudes de tipo `POST` desde la página del **Webhooks** del [listado de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage) de tu aplicación. GitHub no reenvía los intentos fallidos de entrega. Asegúrate de que tu app pueda recibir toda la carga útil del webhook que envíe GitHub.

![Inspeccionar las entregas de webhooks de {% data variables.product.prodname_marketplace %} recientes](/assets/images/marketplace/marketplace_webhook_deliveries.png)
