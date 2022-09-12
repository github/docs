---
title: Gestionar cambios de plan
intro: 'La actualización o degradación de una aplicación {% data variables.product.prodname_marketplace %} desencadena el webhook del [evento `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) con la acción `changed`, que inicia el flujo de actualización o degradación.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135864'
---
Para más información sobre los cambios a una versión posterior y anterior en relación con la facturación, vea "[Integración con la API {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/)".

## Paso 1. Evento de cambio en el plan de precios

GitHub envía el webhook `marketplace_purchase` con la acción `changed` a la aplicación, cuando un cliente realiza cualquiera de estos cambios en su pedido en {% data variables.product.prodname_marketplace %}:
* Mejorar a un plan de precios más caro o degradarlo a uno más barato.
* Agregar o eliminar plazas a su plan existente.
* Cambiar el ciclo de facturación.

GitHub enviará el webhook cuando el cambio entre en vigor. Por ejemplo, cuando un cliente degrada un plan, GitHub envía el webhook al final del ciclo de facturación del cliente. GitHub envía un webhook a tu app inmediatamente cuando un cliente mejora su plan para permitirle el acceso al servicio nuevo de inmediato. Si un cliente cambia de un ciclo mensual a uno anual, esto se considera como una mejora. Vea "[Facturación de clientes en {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/)" para más información sobre las acciones que se consideran un cambio a una versión posterior o anterior.

Lea `effective_date`, `marketplace_purchase` y `previous_marketplace_purchase` del webhook `marketplace_purchase` para actualizar la fecha de inicio del plan y realizar cambios en el período de facturación y el plan de precios del cliente. Vea "[Eventos de webhook de {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)" para obtener un ejemplo de la carga del evento `marketplace_purchase`.

Si la aplicación ofrece evaluaciones gratuitas, recibirá el webhook `marketplace_purchase` con la acción `changed` cuando expire la evaluación gratuita. Si el periodo de prueba gratuito del cliente caduca, mejora al cliente a la versión pagada del plan de prueba gratuito.

## Paso 2. Actualizar las cuentas de usuario

Necesitarás actualizar la información de las cuentas de usuario para que se reflejen los cambios en el ciclo de facturación y en el plan de precios que el cliente hizo en su orden de {% data variables.product.prodname_marketplace %}. Muestra las actualizaciones del plan de precios `seat_count` (para los planes de precios por unidad) y el período de facturación en el sitio web de la aplicación en Marketplace o en su interfaz de usuario cuando reciba el webhook de acción `changed`.

Cuando un cliente degrada un plan, se recomienda revisar si éste excedió los límites del mismo y contactarlos directamente en tu IU o por teléfono o correo electrónico.

Para motivar a las personas a mejorar el plan, puedes mostrar una URL de mejora en la IU de tu app. Vea "[Acerca de las direcciones URL de actualización](#about-upgrade-urls)" para más información.

{% note %}

**Nota:** Se recomienda realizar una sincronización periódica mediante `GET /marketplace_listing/plans/:id/accounts` para asegurarse de que la aplicación tiene el plan correcto, la información del período de facturación y el recuento de unidades (para los precios por unidad) de cada cuenta.

{% endnote %}

## Pagos de mejora fallidos

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## Acerca de las URL de mejora

Puedes redirigir a los usuarios desde la IU de tu app para que mejoren su plan en GitHub a través de una URL de mejora:

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Por ejemplo, si notas que el cliente tiene un plan de 5 personas y necesita cambiar a uno de 10, puedes mostrar un boton en la IU de tu app, el cual diga "Te mostramos como mejorar tu plan", o bien, mostrar un letrero con un enlace a la URL de mejora. La URL de mejora llevará al cliente a la página de confirmación de mejora para el plan de tu listado.

Use `LISTING_PLAN_NUMBER` para el plan que el cliente quiera comprar. Al crear planes de precios, reciben un valor `LISTING_PLAN_NUMBER`, que es único para cada plan de la oferta, y un valor `LISTING_PLAN_ID`, que es único para cada plan de {% data variables.product.prodname_marketplace %}. Puede encontrar estos números al [enumerar planes](/rest/reference/apps#list-plans), que identifica los planes de precios de la oferta. Use `LISTING_PLAN_ID` y el punto de conexión "[Enumerar cuentas de un plan](/rest/reference/apps#list-accounts-for-a-plan)" para obtener el valor `CUSTOMER_ACCOUNT_ID`.


{% note %}

**Nota:** Si el cliente realiza la actualización a unidades adicionales (como puestos), todavía puede enviarlo al plan adecuado para que lo compre, pero en este momento no podemos admitir parámetros `unit_count`.

{% endnote %}
