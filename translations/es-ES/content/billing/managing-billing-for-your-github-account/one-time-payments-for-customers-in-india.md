---
title: Pagos únicos para clientes en la India
intro: Los clientes de la India que se han visto afectados por la regulación de pagos recurrentes del Banco de Reservas de la India ahora pueden realizar pagos únicos por sus suscripciones y servicios de GitHub.
redirect_from:
  - /early-access/billing/india-rbi-regulation
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Sponsors
  - Policy
shortTitle: India one-time payments
ms.openlocfilehash: 802aadbed65cf4fcb133d82e3ba417c8582be1af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111326'
---
## Acerca de la regulación de pagos periódicos del Banco de Reservas de la India

Recientemente ha entrado en vigor un nuevo reglamento de pagos del Banco de Reservas de la India (RBI). Este reglamento impone requisitos adicionales sobre las transacciones periódicas en línea y ha impedido que algunos clientes de {% data variables.product.company_short %} en la India realicen pagos periódicos. Es posible que los clientes que usan métodos de pago emitidos en la India para cualquier transacción periódica en {% data variables.product.product_name %} vean que sus pagos son rechazados por sus bancos o emisores de tarjetas. Para más información, vea el [comunicado de prensa de RBI](https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=51353).

El reglamento se aplica a todas las transacciones periódicas, incluidas las siguientes:
- Suscripciones a planes de {% data variables.product.prodname_dotcom %} (Pro, Team, Enterprise)
- Compras de {% data variables.product.prodname_marketplace %}
- Transacciones de {% data variables.product.prodname_sponsors %}
- Compras de Git Large File Storage
- Consumo de {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} y {% data variables.product.prodname_github_codespaces %}

Para minimizar las interrupciones, los pagos periódicos de nuestros clientes afectados se pausaron el 29 de octubre de 2021. Las características y servicios de pago se han mantenido disponibles para los clientes afectados por el reglamento del RBI.

## Acerca de los pagos únicos en {% data variables.product.company_short %}

A medida que trabajamos con nuestro proveedor de puerta de enlace de pagos para cumplir los nuevos requisitos, proporcionamos una opción de pago única temporal para los clientes afectados en la India. A partir del 15 de febrero de 2022, los clientes de {% data variables.product.company_short %} en la India que se hayan visto afectados por el nuevo reglamento del RBI podrán realizar pagos únicos en su cadencia de ciclo de facturación regular.

### Para clientes con facturación mensual

Los clientes con planes de facturación mensual podrán realizar un pago único en el mismo día en que normalmente se renueva su ciclo de facturación. Por ejemplo, si normalmente se le factura el día 7 de cada mes, ahora podrá realizar un pago único desde su cuenta a partir del día 7 de cada mes. El primer pago único también incluirá cualquier uso acumulado a partir de octubre de 2021.

Si actualmente se le factura mensualmente y quiere cambiar a la facturación anual, puede reducir la frecuencia de los pagos únicos. Para más información, vea "[Cambio de la duración del ciclo de facturación](/en/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)".

### Para clientes con facturación anual

Si se le factura anualmente y la fecha de renovación estaba comprendida entre el 1 de octubre de 2021 y el 14 de febrero de 2022, podrá realizar un pago único para las suscripciones anuales a partir del 15 de febrero. Este pago inicial incluirá el costo prorrateado pendiente de la suscripción durante el período desde que haya finalizado el ciclo de facturación anterior.

Si el ciclo de facturación se debe renovar después del 15 de febrero, intentaremos realizar el pago periódico. Si se rechaza el intento de pago, podrá realizar un pago único desde la página de facturación de la cuenta.

Mientras tanto, estamos trabajando activamente con nuestros socios de pago a fin de restaurar los pagos periódicos para los clientes afectados. Para más información o realizar preguntas, puede ponerse en contacto con el [soporte técnico de GitHub](https://support.github.com/contact).

### Impacto en {% data variables.product.prodname_sponsors %}

Los patrocinios existentes permanecerán en vigor durante este período y los mantenedores seguirán recibiendo pagos según lo previsto. Los pagos por los importes de patrocinio acumulados de la cuenta de financiación se recopilarán al mismo tiempo que otros cargos acumulados.

## Realización de un pago único para una suscripción de GitHub

{% note %}

**Nota**: Los clientes afectados recibirán una notificación por correo electrónico con un vínculo a la configuración de facturación cuando se produzca el vencimiento del pago. Si no se ha realizado el pago, 7 y 14 días después se enviarán dos correos electrónicos de recordatorio adicionales. Después de 14 días, las características de pago y los servicios se bloquearán hasta que se realice el pago.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
3. En la parte superior de la página, haga clic en **Pagar ahora**.
  ![Botón de pago único Pagar ahora](/assets/images/help/billing/pay-now-button.png)
4. Revise la información de facturación y pago. Si tiene que realizar cambios, haga clic en **Editar** junto a la sección correspondiente. De lo contrario, haga clic en **Enviar pago**.
  ![Resumen del pago único](/assets/images/help/billing/payment-summary.png)
5. Opcionalmente, si ha hecho clic en **Editar**, realice los cambios necesarios y, después, haga clic en **Enviar pago**.
  ![Resumen de la edición del pago único](/assets/images/help/billing/payment-summary-edit.png)
6. Una vez que el pago del ciclo de facturación actual se haya realizado correctamente, el botón **Pagar ahora** de la página "Facturación y planes" se deshabilitará hasta el vencimiento del siguiente pago.
  ![Botón de pago único Pagar ahora deshabilitado](/assets/images/help/billing/pay-now-button-disabled.png)
  
