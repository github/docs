---
title: Eventos de webhook para la API de GitHub Marketplace
intro: 'Una app de {% data variables.product.prodname_marketplace %} recibe información acerca de los cambios a un plan de usuario desde el webhook del evento de compra en Marketplace. Un evento de compra de marketplace se activa cuando un usuario compra, cancela o cambia su plan de pago.'
redirect_from:
  - /apps/marketplace/setting-up-github-marketplace-webhooks/about-webhook-payloads-for-a-github-marketplace-listing
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events
  - /developers/github-marketplace/webhook-events-for-the-github-marketplace-api
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhook events
ms.openlocfilehash: 63b99005c5b0da23c59794d8fd7ad724f5afd13a
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710407'
---
## Carga útil del webhook de compras en {% data variables.product.prodname_marketplace %}

Las solicitudes `POST` de webhooks tienen encabezados especiales. Vea "[Encabezados de entrega de webhook](/webhooks/event-payloads/#delivery-headers)" para más información. GitHub no reenvía los intentos fallidos de entrega. Asegúrate de que tu app pueda recibir toda la carga útil del webhook que envíe GitHub.

Las cancelaciones y disminuciones de categoría toman efecto el primer día del siguiente ciclo de facturación. Los eventos para las cancelaciones y disminuciones de categoría se envían cuando el nuevo plan entre en vigor al inicio del siguiente ciclo de facturación. Los eventos para las nuevas compras y mejoras de categoría comienzan inmediatamente. Use `effective_date` en la carga de webhook para determinar cuándo se iniciará un cambio.

{% data reusables.marketplace.marketplace-malicious-behavior %}

Cada carga de webhook `marketplace_purchase` tendrá la siguiente información:


Clave | Tipo | Descripción
----|------|-------------
`action` | `string` | La acción realizada para generar el webhook. Puede ser `purchased`, `cancelled`, `pending_change`, `pending_change_cancelled` o `changed`. Para obtener más información, consulta los ejemplos de cargas útiles de webhook a continuación. **Nota:** Las cargas `pending_change` y `pending_change_cancelled` contienen las mismas claves que se muestran en el [ejemplo de carga `changed`](#example-webhook-payload-for-a-changed-event).
`effective_date` | `string` | Fecha en la que `action` entra en vigor.
`sender` | `object` | Persona que ha tomado el elemento `action` que ha desencadenado el webhook.
`marketplace_purchase` | `object` | La información de compra de {% data variables.product.prodname_marketplace %}.

El objeto `marketplace_purchase` tiene las claves siguientes:

Clave | Tipo | Descripción
----|------|-------------
`account` | `object` | La cuenta de `organization` o `user` asociada a la suscripción. Las cuentas de organización incluirán `organization_billing_email`, que es la dirección de correo electrónico administrativa de la organización. A fin de buscar direcciones de correo electrónico para cuentas personales, puede usar el punto de conexión [Obtener el usuario autenticado](/rest/reference/users#get-the-authenticated-user).
`billing_cycle` | `string` | Puede ser `yearly` o `monthly`. Cuando el propietario de `account` tiene un plan gratuito de GitHub y ha comprado un plan de {% data variables.product.prodname_marketplace %} gratuito, `billing_cycle` será `nil`.
`unit_count`  | `integer` | Cantidad de unidades compradas.
`on_free_trial` | `boolean` | `true` cuando `account` está en una evaluación gratuita.
`free_trial_ends_on` | `string` | La fecha en la que caduca el periodo de prueba gratuito.
`next_billing_date` | `string` | La fecha en la que comenzará el siguiente ciclo de facturación. Cuando el propietario de `account` tiene un plan gratuito de GitHub.com y ha comprado un plan de {% data variables.product.prodname_marketplace %} gratuito, `next_billing_date` será `nil`.
`plan` | `object` | Plan comprado por `user` o `organization`.

El objeto `plan` tiene las claves siguientes:

Clave | Tipo | Descripción
----|------|-------------
`id` | `integer` | El identificador único para este plan.
`name` | `string` | El nombre del plan.
`description` | `string` | La descripción de este plan.
`monthly_price_in_cents` | `integer` | El precio mensual de este plan en centavos (Divisa de los EEUU). Por ejemplo, un listado que cuesta 10 dólares de EEUU por mes sería de 1000 centavos.
`yearly_price_in_cents` | `integer` | El precio anual para este plan en centavos (Divisa de los EEUU). Por ejemplo, un listado que cuesta 100 USD al mes sería 120 000 centavos.
`price_model` | `string` | El modelo de precios para este listado. Puede ser `flat-rate`, `per-unit` o `free`.
`has_free_trial` | `boolean` | `true` cuando esta oferta ofrece una evaluación gratuita.
`unit_name` | `string` | El nombre de la unidad. Si el modelo de precios no es `per-unit`, será `nil`.
`bullet` | `array of strings` | Los nombres de los puntos configurados en el plan de precios.

<br/>

### Ejemplo de carga de webhook para un evento `purchased`
En este ejemplo se proporciona la carga del evento `purchased`.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

### Ejemplo de carga de webhook para un evento `changed`

Los cambios en un plan incluyen mejoras y degradaciones. En este ejemplo se representan las cargas de los eventos `changed`, `pending_change` y `pending_change_cancelled`. La acción identifica cuál de estos tres eventos ha ocurrido.

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.changed }}

### Ejemplo de carga de webhook para un evento `cancelled`

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.cancelled }}
