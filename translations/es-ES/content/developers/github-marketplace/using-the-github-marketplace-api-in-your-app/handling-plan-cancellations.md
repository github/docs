---
title: Gestionar las cancelaciones de plan
intro: 'La cancelación de una aplicación de {% data variables.product.prodname_marketplace %} desencadena el webhook del [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) con la acción `cancelled`, que inicia el flujo de cancelación.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
  - /developers/github-marketplace/handling-plan-cancellations
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Plan cancellations
ms.openlocfilehash: 253506f1ac32f55649dd533559a7a16508cca98f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092117'
---
Para más información sobre la cancelación en relación con la facturación, vea "[Facturación de clientes en {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)".

## Paso 1. Evento de cancelación

Si un cliente decide cancelar un pedido de {% data variables.product.prodname_marketplace %}, GitHub envía un webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) con la acción `cancelled` a la aplicación cuando la cancelación surte efecto. Si el cliente cancela durante un periodo de prueba gratuito, tu app recibirá el vento de inmediato. Cuando un cliente cancela un plan pagado, la cancelación tomará lugar al final del ciclo de facturación del cliente.

## Paso 2. Desactivar las cuentas de usuario

Cuando un cliente cancela un plan pagado o gratuito, tu app debe llevar a cabo estos pasos para completar la cancelación:

1. Desactivar la cuenta del cliente que canceló su plan.
1. Revocar el token de OAuth que recibió tu app para el cliente.
1. Si tu app es una App de OAuth, eliminar todos los webhooks que creó tu app para los repositorios.
1. Quite todos los datos del cliente en un plazo de 30 días después de recibir el evento `cancelled`.

{% note %}

**Nota:** Se recomienda usar el valor `effective_date` del webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) para determinar cuándo se producirá un cambio de plan y sincronizar periódicamente las [cuentas de lista de un plan](/rest/reference/apps#list-accounts-for-a-plan). Para más información sobre los webhooks, vea "[Eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)".

{% endnote %}
