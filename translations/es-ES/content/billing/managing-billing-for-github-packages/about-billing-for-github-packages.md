---
title: Acerca de la facturación para GitHub Packages
intro: 'Si quieres utilizar {% data variables.product.prodname_registry %} con más almacenamiento o transferencia de datos de los que se incluyen en tu cuenta, se te cobrará por este uso adicional.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180222'
---
## Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} Para más información, vea "[Acerca de los límites de gasto](#about-spending-limits)".

{% note %}

**Actualización de facturación para el almacenamiento de imágenes de contenedor:** se ha ampliado el periodo de uso gratuito para el ancho de banda y almacenamiento de imágenes de contenedor para {% data variables.product.prodname_container_registry %}. Si estás utilizando el {% data variables.product.prodname_container_registry %}, se te informará por lo menos con un mes de anticipación sobre el inicio de la facturación y se te dará un estimado de cuánto es lo que debes pagar. Para más información sobre {% data variables.product.prodname_container_registry %}, vea "[Trabajo con el registro de contenedores](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% endnote %}

{% ifversion ghec %} Si ha comprado {% data variables.product.prodname_enterprise %} mediante un Contrato Enterprise de Microsoft, puede conectar el id. de la suscripción de Azure a la cuenta de empresa para habilitar y pagar por el uso de {% data variables.product.prodname_registry %} más allá de las cantidades que se incluyen en la cuenta. Para más información, vea "[Conexión de una suscripción de Azure a la empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

La transferencia de datos se restablece cada mes, pero no así el uso de almacenamiento.

Producto | Storage | Transferencia de datos (por mes)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500MB | 1 GB
{% data variables.product.prodname_pro %} | 2 GB | 10 GB
{% data variables.product.prodname_free_team %} para organizaciones | 500MB | 1 GB |
{% data variables.product.prodname_team %} | 2 GB | 10 GB
{% data variables.product.prodname_ghe_cloud %} | 50GB | 100GB

Todos los datos de transferencia saliente, cuando se desencadenan mediante {% data variables.product.prodname_actions %}, y aquellos de transferencia entrante desde cualquier origen, son gratuitos. Determinamos que va a descargar paquetes mediante {% data variables.product.prodname_actions %} cuando inicia sesión en {% data variables.product.prodname_registry %} con un `GITHUB_TOKEN`.

||Hospedada|Auto-Hospedado|
|-|-|-|
|Acceso mediante un `GITHUB_TOKEN`|Gratuito|Gratuito|
|Accede con un {% data variables.product.pat_generic %}|Gratuito|$|

El uso de almacenamiento se comparte con los artefactos de compilación que produce {% data variables.product.prodname_actions %} para los repositorios que pertenecen a tu cuenta. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

{% data variables.product.prodname_dotcom %} cobra el uso a la cuenta a la que pertenece el repositorio en donde se publica el paquete. Si el uso de tu cuenta sobrepasa estos límites y has configurado un límite de gasto superior a 0 USD, pagarás 0,008 USD por GB de almacenamiento por día y 0,50 USD por GB de datos transferidos.

Por ejemplo, si tu organización utiliza {% data variables.product.prodname_team %}, permite los gastos ilimitados, utiliza 150GB de almacenamiento, y tiene 50GB de transferencia de datos durante un mes, ésta tendrá un excedente de 148GB en el almacenamiento y de 40GB en transferencia de datos para ese mes. Un uso por encima del límite de almacenamiento cuesta 0,008 USD por GB por día, o aproximadamente 37 USD para un mes de 31 días. El excedente para transferencia de datos costaría $0.50 USD por GB, o $20 USD.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

Al final de mes, {% data variables.product.prodname_dotcom %} redondea tus datos de transferencia al GB entero más cercano.

{% data variables.product.prodname_dotcom %} calcula tu uso de almacenamiento para cada mes basándose en el uso por hora de GB durante el mismo mes. Por ejemplo, si usa 3 GB de almacenamiento durante 10 días de marzo y 12 GB durante 21 días de marzo, el uso del almacenamiento sería:

- 3 GB x 10 días x (24 horas por día) = 720 GB-Horas
- 12 GB x 21 días x (24 horas por día) = 6,048 GB-Horas
- 720 GB-Horas + 6,048 GB-Horas = 6,768 GB-Horas totales
- 6,768 GB-Horas/ (744 horas por mes) = 9.0967 GB-Meses

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Por lo tanto, el uso del almacenamiento para marzo sería de 9097 GB.

También puedes usar este cálculo en medio de un ciclo de facturación para calcular cuál podría ser el uso total del mes. Por ejemplo, si tienes una organización que usa {% data variables.product.prodname_team %}, que proporciona 2 GB de almacenamiento gratuito y usas 0 GB para los primeros 5 días de abril, 1,5 GB durante los 10 días siguientes y tienes previsto usar 3 GB durante los últimos 15 días del ciclo de facturación, el uso del almacenamiento proyectado para el mes sería:

- 0 GB x 5 días x (24 horas por día) = 0 GB-Horas
- 0,5 GB x 10 días x (24 horas por día) = 120 GB-Horas
- 3 GB x 15 días x (24 horas por día) = 1080 GB-Horas
- 0 GB-Horas + 120 GB-Horas + 1080 GB-Horas = 1200 GB-Horas totales
- 1200 GB-Horas/ (744 horas por mes) = 1,6 GB-Meses

El uso de almacenamiento proyectado de 1,6 GB durante el mes no superaría el límite de 2 GB, aunque la cantidad de almacenamiento real superara brevemente 2 GB.

Tu uso de {% data variables.product.prodname_registry %} comparte la fecha de facturación, método de pago y recibo existente en tu cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## Acerca de los límites de gasto

{% data reusables.package_registry.packages-spending-limit-detailed %}

Para evitar superar el límite de gasto, {% data variables.product.prodname_dotcom %} comprueba el consumo de almacenamiento continuamente a lo largo del mes examinando el uso actual y calculando cuál será el uso previsto al final del mes si no se realizan cambios antes de ese momento. Si en cualquier momento durante el ciclo de facturación, el uso mensual proyectado supera el límite de gasto, tanto {% data variables.product.prodname_registry %} como {% data variables.product.prodname_actions %} se deshabilitarán para evitar el uso por encima del límite.

Debes establecer un límite de gasto que cubra el uso máximo del almacenamiento proyectado en cualquier punto determinado del ciclo de facturación. Por ejemplo, imagina que tienes una organización que usa {% data variables.product.prodname_team %} y estableces un límite de gasto de 50 USD. {% data variables.product.prodname_team %} proporciona 2 GB de almacenamiento gratuito. Para cualquier almacenamiento que use durante esa cantidad, {% data variables.product.prodname_dotcom %} cobrará 0,008 USD por GB al día o aproximadamente 0,25 USD por GB durante un mes de 31 días. Esto significa que el límite de gasto de 50 USD establecido pagará por un almacenamiento adicional de 200 GB en ese período. Si el día diez del ciclo de facturación alcanzas 202 GB de almacenamiento, se producirá un error en la siguiente inserción de un paquete o artefacto de {% data variables.product.prodname_actions %}, ya que has alcanzado la cantidad de almacenamiento máxima que puede pagar el límite de gasto en este ciclo de facturación, incluso si el consumo medio del período es inferior a 202 GB.

Para evitar alcanzar el límite de gasto en el ciclo de facturación actual, puedes eliminar parte del uso actual del almacenamiento para liberar el uso previsto durante el resto del mes. Este método es más eficaz hacia el principio de un ciclo de facturación. Cuanto más se acerque al final de un ciclo de facturación, menos impacto tendrá este método en el uso mensual previsto.

Para obtener más información sobre cómo administrar y cambiar el límite de gasto de la cuenta, consulta "[Administración del límite de gasto para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
