---
title: Gestionar cambios de plan
intro: 'El mejorar y degradar una app de {% data variables.product.prodname_marketplace %} activa el webhook del [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) con la acción `cambiada`, lo cual inicia el flujo de mejora o degradación.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
versions:
  free-pro-team: '*'
---



Para obtener más información acerca de mejorar y degradar los planes de acuerdo a como se relaciona con la facturación, consulta la sección "[Integrarse con la API de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/)".

### Paso 1. Evento de cambio en el plan de precios

GitHub envía el webhook `marketplace_purchase` con la acción `changed` a tu app cuando el cliente hace cualquiera de estos cambios a su orden de {% data variables.product.prodname_marketplace %}:
* Mejorar a un plan de precios más caro o degradarlo a uno más barato.
* Agregar o eliminar plazas a su plan existente.
* Cambiar el ciclo de facturación.

GitHub enviará el webhook cuando el cambio entre en vigor. Por ejemplo, cuando un cliente degrada un plan, GitHub envía el webhook al final del ciclo de facturación del cliente. GitHub envía un webhook a tu app inmediatamente cuando un cliente mejora su plan para permitirle el acceso al servicio nuevo de inmediato. Si un cliente cambia de un ciclo mensual a uno anual, esto se considera como una mejora. Consulta la sección "[Cobrar a los clientes en {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)" para aprender más acerca de las acciones que se consideran una mejora o una degradación.

Lee `effective_date`, `marketplace_purchase`, y `previous_marketplace_purchase` del webhook de `marketplace_purchase` para actualizar la fecha de inicio del plan y hacer cambios al ciclo de facturació y plan de precios del cliente. Consulta la sección "[eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para encontrar un ejemplo de la carga últil del evento `marketplace_purchase`.

Si tu app ofrece periodos de prueba gratuitos, recibirás el webhook de `marketplace_purchase` con la acción `changed` cuando caduque este periodo de prueba. Si el periodo de prueba gratuito del cliente caduca, mejora al cliente a la versión pagada del plan de prueba gratuito.

### Paso 2. Actualizar las cuentas de usuario

Necesitarás actualizar la información de las cuentas de usuario para que se reflejen los cambios en el ciclo de facturación y en el plan de precios que el cliente hizo en su orden de {% data variables.product.prodname_marketplace %}. Muestra las mejoras al plan de precios, `seat_count` (para planes de precios por unidad), y ciclo de facturación en el sitio web de tu app de Marketplace en la IU de la misma cuando recibas el webhook de la acción `changed`.

Cuando un cliente degrada un plan, se recomienda revisar si éste excedió los límites del mismo y contactarlos directamente en tu IU o por teléfono o correo electrónico.

Para motivar a las personas a mejorar el plan, puedes mostrar una URL de mejora en la IU de tu app. Consulta la sección "[Acerca de las URL de mejora](#about-upgrade-urls)" para obtener más detalles.

{% note %}

**Nota:** Te recomendamos llevar a cabo una sincronización frecuente utilizando `GET /marketplace_listing/plans/:id/accounts` para asegurarte de que tu app tiene el plan, información de ciclo de facturación y conteo de unidades (para los precios por unidad) correctos para cada cuenta.

{% endnote %}

### Pagos de mejora fallidos

{% data reusables.marketplace.marketplace-failed-purchase-event %}

### Acerca de las URL de mejora

Puedes redirigir a los usuarios desde la IU de tu app para que mejoren su plan en GitHub a través de una URL de mejora:

```
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Por ejemplo, si notas que el cliente tiene un plan de 5 personas y necesita cambiar a uno de 10, puedes mostrar un boton en la IU de tu app, el cual diga "Te mostramos como mejorar tu plan", o bien, mostrar un letrero con un enlace a la URL de mejora. La URL de mejora llevará al cliente a la página de confirmación de mejora para el plan de tu listado.

Utiliza el `LISTING_PLAN_NUMBER` para el plan que el cliente quisiera comprar. Cuando creas planes de precios nuevos, estos reciben un `LISTING_PLAN_NUMBER`, lo cual es específico para cada plan en tu listado, y también reciben una `LISTING_PLAN_ID`, que es específica para cada plan en {% data variables.product.prodname_marketplace %}. Puedes encontrar estos números cuando [Listas los planes](/rest/reference/apps#list-plans), los cuales identifican a los planes de precios en tus listados. Utiliza la `LISTING_PLAN_ID` y la terminal "[Listar cuentas para un plan](/rest/reference/apps#list-accounts-for-a-plan)" para obtener la `CUSTOMER_ACCOUNT_ID`.


{% note %}

**Nota:** Si un cliente mejora su cantidad adicional de unidades (como las plazas), aún puedes enviarlos al plan adecuado para su compra, pero no podemos dar soporte para los parámetros de `unit_count` en este momento.

{% endnote %}
