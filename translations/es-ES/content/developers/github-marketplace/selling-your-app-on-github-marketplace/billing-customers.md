---
title: Facturar a los clientes
intro: 'Las apps en {% data variables.product.prodname_marketplace %} deben apegarse a los lineamientos de facturación de GitHub y apoyar a los servicios recomendados. El seguir nuestros lineamientos ayuda a los clientes a navegar en el proceso de facturación sin ninguna sorpresa.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/billing-customers-in-github-marketplace
  - /apps/marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /marketplace/selling-your-app/billing-customers-in-github-marketplace
  - /developers/github-marketplace/billing-customers
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: 86f012c4a74d010ddaed9ec495ae2f5d8a8dd9eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092125'
---
## Entender el ciclo de facturación

Los clientes pueden escoger un ciclo mensual o anual cuando compran tu app. Todos los cambios que realicen los clientes en el ciclo de facturación y la selección del plan desencadenarán un evento `marketplace_purchase`. Puede consultar la carga del webhook `marketplace_purchase` para ver qué ciclo de facturación selecciona un cliente y cuándo comienza la siguiente fecha de facturación (`effective_date`). Para obtener más información sobre las cargas de webhook, consulte "[Eventos de webhook para la API de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/webhook-events-for-the-github-marketplace-api)".

## Proporcionar servicios de facturación en la IU de tu app

Los clientes deberán ser capaces de realizar las siguientes acciones desde el sitio web de tu app:
- Los clientes podrán modificar o cancelar sus planes de {% data variables.product.prodname_marketplace %} para sus cuentas de organización y personales por separado.
{% data reusables.marketplace.marketplace-billing-ui-requirements %}

## Servicios de facturación para mejoras, decrementos y cancelaciones

Sigue estos lineamientos para las mejoras, decrementos y cancelaciones para mantener un proceso de facturación limpio y consistente. Para obtener más información sobre los eventos de compra de {% data variables.product.prodname_marketplace %}, los eventos de webhook y las solicitudes de facturación, consulte "[Uso de la API de {% data variables.product.prodname_marketplace %} en la aplicación](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)".

Puede usar el valor la clave del `marketplace_purchase`webhook `effective_date` para determinar cuándo se producirá un cambio de plan y sincronizar periódicamente las [cuentas de lista de un plan](/rest/reference/apps#list-accounts-for-a-plan).

### Actualizaciones

Cuando un cliente mejora su plan de precios o cambia su ciclo de facturación de mensual a anual, deberás hacerles el cambio efectivo inmediatamente. Tienes que aplicar un descuento prorrateado para el plan nuevo y cambiar el ciclo de facturación.

{% data reusables.marketplace.marketplace-failed-purchase-event %}

Para obtener información sobre cómo compilar flujos de trabajo de actualización y reducción de categoría en la aplicación, consulte "[Control de cambios de plan](/developers/github-marketplace/handling-plan-changes)".

### Decrementos y cancelaciones

Los decrementos ocurren cuando un cliente se cambia de un plan pagado a uno gratuito, selecciona un plan con un costo menor al actual, o cambia su ciclo de facturación de anual a mensual. Cuando suceden los decrementos o cancelaciones, no necesitas proporcionar un reembolso. En vez de esto, el plan actual se mantendrá activo hasta el último día del ciclo de facturación actual. El evento `marketplace_purchase` se enviará cuando el nuevo plan surta efecto al principio del siguiente ciclo de facturación del cliente.

Cuando un cliente cancela un plan, debes:
- Degradarlos automáticamente al plan gratuito, si es que existe.
  
  {% data reusables.marketplace.cancellation-clarification %}
- Habilitarlos para mejorar el plan a través de GitHub si es que quisieran continuar con él más adelante.

Para obtener información sobre cómo crear flujos de trabajo de cancelación en la aplicación, consulta "[Control de cancelaciones del plan](/developers/github-marketplace/handling-plan-cancellations)".
