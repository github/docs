---
title: Facturar a los clientes
intro: 'Las apps en {% data variables.product.prodname_marketplace %} deben apegarse a los lineamientos de facturación de GitHub y apoyar a los servicios recomendados. El seguir nuestros lineamientos ayuda a los clientes a navegar en el proceso de facturación sin ninguna sorpresa.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace/
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace/
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
versions:
  free-pro-team: '*'
---



### Entender el ciclo de facturación

Los clientes pueden escoger un ciclo mensual o anual cuando compran tu app. Todos los cambios que los clientes hagan a los ciclos de facturación y a la selección de plan activaran un evento de `marketplace_purchase`. Puedes referirte a la carga útil del webhook de `marketplace_purchase` para ver qué ciclo de facturación selecciona un usuario y cuándo comienza la siguiente fecha de facturación (`effective_date`). Para obtener más información acerca de las cargas útiles de los webhooks, consulta la sección "[eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)".

### Proporcionar servicios de facturación en la IU de tu app

Los clientes deben poder realizar las siguientes acciones desde el sitio web de tu app:
- Los clientes deben poder modificar o cancelar sus planes de {% data variables.product.prodname_marketplace %} para las cuentas de organización y personales por separado.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

### Servicios de facturación para mejoras, decrementos y cancelaciones

Sigue estos lineamientos para las mejoras, decrementos y cancelaciones para mantener un proceso de facturación limpio y consistente. Para obtener instrucciones más detalladas acerca de los eventos de compra de {% data variables.product.prodname_marketplace %}, consulta la sección "[Flujos de facturación](/marketplace/integrating-with-the-github-marketplace-api/#billing-flows)".

Puedes utilizar la llave de `effective_date` del webhook de `marketplace_purchase` para determinar cuando ocurrirá un cambio de plan y sincronizar la [Lista de cuentas para un plan](/v3/apps/marketplace/#list-accounts-for-a-plan) de vez en cuando.

#### Mejoras

Cuando un cliente mejora su plan de precios o cambia su ciclo de facturación de mensual a anual, deberás hacerles el cambio efectivo inmediatamente. Tienes que aplicar un descuento prorrateado para el plan nuevo y cambiar el ciclo de facturación.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Para obtener información acerca de los flujos de trabajo de mejora y decremento en tu app, consulta la sección "[Mejorar y decrementar los planes](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/)".

#### Decrementos y cancelaciones

Los decrementos ocurren cuando un cliente se cambia de un plan pagado a uno gratuito, selecciona un plan con un costo menor al actual, o cambia su ciclo de facturación de anual a mensual. Cuando suceden los decrementos o cancelaciones, no necesitas proporcionar un reembolso. En vez de esto, el plan actual se mantendrá activo hasta el último día del ciclo de facturación actual. El evento `marketplace_purchase` se enviará cuando el nuevo plan entre en vigor al inicio del siguiente ciclo de facturación del cliente.

Cuando un cliente cancela un plan, debes:
- Degradarlos automáticamente al plan gratuito, si es que existe.

  {% data reusables.marketplace.cancellation-clarification %}
- Habilitarlos para mejorar el plan a través de GitHub si es que quisieran continuar con él más adelante.

Para obtener información acerca de construir flujos de trabajo de cancelación en tu app, consulta la sección "[Planes de cancelación](/marketplace/integrating-with-the-github-marketplace-api/cancelling-plans/)".
