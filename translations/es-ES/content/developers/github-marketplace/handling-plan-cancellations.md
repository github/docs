---
title: Gestionar las cancelaciones de plan
intro: 'El cancelar una app de {% data variables.product.prodname_marketplace %} activa el webhook del [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) con la acción `cancelada`, lo cual inicia el flujo de cancelación.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/cancelling-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/cancelling-plans
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



Para obtener más información acerca de las cancelaciones de acuerdo a como se relaciona con la facturación, consulta la sección "[Cobrar a los usuarios en {% data variables.product.prodname_marketplace %}](/apps//marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace)".

### Paso 1. Evento de cancelación

Si un cliente decide cancelar una orden de {% data variables.product.prodname_marketplace %}, GitHub envía un webhook de [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) conla acción `cancelled` a tu app cuando tome efecto dicha cancelación. Si el cliente cancela durante un periodo de prueba gratuito, tu app recibirá el vento de inmediato. Cuando un cliente cancela un plan pagado, la cancelación tomará lugar al final del ciclo de facturación del cliente.

### Paso 2. Desactivar las cuentas de usuario

Cuando un cliente cancela un plan pagado o gratuito, tu app debe llevar a cabo estos pasos para completar la cancelación:

1. Desactivar la cuenta del cliente que canceló su plan.
1. Revocar el token de OAuth que recibió tu app para el cliente.
1. Si tu app es una App de OAuth, eliminar todos los webhooks que creó tu app para los repositorios.
1. Eliminar todos los datos del cliente en los primeros 30 días de que se recibió el evento `cancelled`.

{% note %}

**Nota:** Te recomendamos utilizar la `effective_date` del webhook [`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) para determinar cuándo ocurrirá un cambio de plan y así sincronizar a menudo el [Listar las cuentas para un plan](/rest/reference/apps#list-accounts-for-a-plan). Para obtener más informació sobre los webhooks, consulta la sección "[eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)".

{% endnote %}
