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

Los clientes pueden escoger un ciclo mensual o anual cuando compran tu app. Todos los cambios que los clientes hagan a los ciclos de facturación y a la selección de plan activaran un evento de `marketplace_purchase`. Puedes referirte a la carga útil del webhook de `marketplace_purchase` para ver qué ciclo de facturación selecciona un usuario y cuándo comienza la siguiente fecha de facturación (`effective_date`). Para obtener más información sobre las cargas útiles de los webhooks, consulta la sección "[Eventos de webhook para la API de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)".

### Proporcionar servicios de facturación en la IU de tu app

Los clientes deberán ser capaces de realizar las siguientes acciones desde el sitio web de tu app:
- Los clientes podrán modificar o cancelar sus planes de {% data variables.product.prodname_marketplace %} para sus cuentas de organización y personales por separado.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

### Servicios de facturación para mejoras, decrementos y cancelaciones

Sigue estos lineamientos para las mejoras, decrementos y cancelaciones para mantener un proceso de facturación limpio y consistente. Para obtener instrucciones más detalladas sobre los eventos de compra de {% data variables.product.prodname_marketplace %}, consulta la sección "[Utilizar la API de {% data variables.product.prodname_marketplace %} en tu app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Puedes utilizar la llave de `effective_date` del webhook de `marketplace_purchase` para determinar cuando ocurrirá un cambio de plan y sincronizar la [Lista de cuentas para un plan](/rest/reference/apps#list-accounts-for-a-plan) de vez en cuando.

#### Actualizaciones

Cuando un cliente mejora su plan de precios o cambia su ciclo de facturación de mensual a anual, deberás hacerles el cambio efectivo inmediatamente. Tienes que aplicar un descuento prorrateado para el plan nuevo y cambiar el ciclo de facturación.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Para obtener más información sobre cómo crear flujos de trabajo para mejoras y retrocesos en tu app, consulta la sección "[Administrar los cambios de planes](/developers/github-marketplace/handling-plan-changes)".

#### Decrementos y cancelaciones

Los decrementos ocurren cuando un cliente se cambia de un plan pagado a uno gratuito, selecciona un plan con un costo menor al actual, o cambia su ciclo de facturación de anual a mensual. Cuando suceden los decrementos o cancelaciones, no necesitas proporcionar un reembolso. En vez de esto, el plan actual se mantendrá activo hasta el último día del ciclo de facturación actual. El evento `marketplace_purchase` se enviará cuando el nuevo plan entre en vigor al inicio del siguiente ciclo de facturación del cliente.

Cuando un cliente cancela un plan, debes:
- Degradarlos automáticamente al plan gratuito, si es que existe.

  {% data reusables.marketplace.cancellation-clarification %}
- Habilitarlos para mejorar el plan a través de GitHub si es que quisieran continuar con él más adelante.

Para obtener más información sobre cómo crear flujos de trabajo de cancelaciones en tu app, consulta la sección "[Administrar cancelaciones de planes](/developers/github-marketplace/handling-plan-cancellations)".
