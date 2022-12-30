---
title: Acerca de la facturación para las Acciones de GitHub
intro: 'Si quieres utilizar {% data variables.product.prodname_actions %} con más almacenamiento o minutos de los que se incluyen en tu cuenta, se te cobrará por estos recursos adicionales.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191890'
---
## Acerca de la facturación para {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} Para más información, vea "[Acerca de los límites de gasto](#about-spending-limits)".

{% ifversion ghec %} Si ha comprado {% data variables.product.prodname_enterprise %} mediante un Acuerdo de Microsoft Enterprise, puede conectar el id. de la suscripción de Azure a la cuenta empresarial para habilitar y pagar por el uso de {% data variables.product.prodname_actions %} más allá de las cantidades que se incluyen en la cuenta. Para más información, vea "[Conexión de una suscripción de Azure a la empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

Los minutos se restablecen cada mes, mientras que el uso del almacenamiento no.

### Minutos y almacenamiento incluídos

{% ifversion actions-hosted-runners %} {% note %}

**Nota**: Los minutos de derechos no se pueden usar para los ejecutores de Windows y Ubuntu de más de 2 núcleos. Estos ejecutores siempre se cobrarán, incluidos en repositorios públicos. Para obtener más información, consulta "[Tarifas por minuto para los ejecutores](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)".

{% endnote %} {% endif %}

|Producto | Storage | Minutos (por mes)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2\.000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} para organizaciones | 500 MB | 2\.000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50.000 |

Los jobs que se ejecutan en Windows y macOS y que se hospedan en {% data variables.product.prodname_dotcom %} consumen minutos en una proporción de 2 a 10 veces mayor que aquellos que se ejecutan en Linux. Por ejemplo, el uso de 1000 minutos de Windows consumirá 2000 de los minutos incluidos en su cuenta. El uso de 1000 minutos de macOS, consumirá 10 000 minutos incluidos en su cuenta.

### Multiplicadores de minutos

| Sistema operativo | Multiplicador de minutos |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

El almacenamiento que utilza un repositorio es el total del almacenamiento utilizado por los artefactos de {% data variables.product.prodname_actions %} y por {% data variables.product.prodname_registry %}. El costo de almacenamiento es el uso total de todos los repositorios que pertenecen a su cuenta. Para más información sobre los precios de {% data variables.product.prodname_registry %}, vea "[Acerca de la facturación de {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

 Si tu uso de la cuenta sobrepasa estos límites y has establecido un límite de gasto superior a 0 USD, pagarás 0,008 USD por GB de almacenamiento por día y por minuto de uso, en función del sistema operativo que utilice el ejecutor hospedado en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %} redondea al alza los minutos y minutos parciales que cada trabajo utiliza al siguiente minuto completo.

{% note %}

**Nota:** Los multiplicadores de minutos no se aplican a las tasas por minuto que se muestran a continuación.

{% endnote %}

### Tasas por minuto

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- La cantidad de jobs que puedes ejecutar simultáneamente a través de todos los repositorios que pertenezcan a tu cuenta de usuario u organización dependerá de tu plan de GitHub. Para más información, vea "[Límites de uso y facturación](/actions/reference/usage-limits-billing-and-administration)" para ejecutores hospedados en {% data variables.product.prodname_dotcom %} y "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" para los límites de uso de los ejecutores autohospedados.
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- Para {% data variables.actions.hosted_runner %}, no hay ningún costo adicional para las configuraciones que asignan direcciones IP estáticas públicas a un {% data variables.actions.hosted_runner %}. Para obtener más información sobre {% data variables.actions.hosted_runner %}, consulta "[Usar {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners)".
- No se pueden usar minutos de derechos para {% data variables.actions.hosted_runner %}.
- Un {% data variables.actions.hosted_runner %} no es gratis para los repositorios públicos.
{% endif %}

## Calcular los gastos por minuto y por almacenamiento

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

Al final de cada mes, {% data variables.product.prodname_dotcom %} calcula el costo de los minutos y almacenamiento utilizados en comparación con lo que se incluye en tu cuenta.

### Ejemplo de cálculos de costo por minuto

Por ejemplo, si en la organización se usa {% data variables.product.prodname_team %} y permite gastos ilimitados, el uso de 5000 minutos podría tener un costo de uso por encima del límite de almacenamiento y minutos total de 56 USD, en función de los sistemas operativos que se usen para ejecutar los trabajos.

- 5,000 minutos (3,000 de Linux y 2,000 de Windows) = $56 USD ($24 USD + $32 USD).
  - 3,000 minutos de Linux a $0.008 USD por minuto = $24 USD.
  - 2,000 minutos de Windows a $0.016 USD por minuto = $32 USD.

{% data variables.product.prodname_dotcom %} calcula tu uso de almacenamiento para cada mes basándose en el uso por hora durante el mismo mes.

### Muestra de cálculo de costos de almacenamiento

Por ejemplo, si usa 3 GB de almacenamiento durante 10 días de marzo y 12 GB durante 21 días de marzo, el uso del almacenamiento sería:

- 3 GB x 10 días x (24 horas por día) = 720 GB-Horas
- 12 GB x 21 días x (24 horas por día) = 6,048 GB-Horas
- 720 GB-Horas + 6,048 GB-Horas = 6,768 GB-Horas
- 6,768 GB-Horas/ (744 horas por mes) = 9.0967 GB-Meses

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Por lo tanto, el uso del almacenamiento para marzo sería de 9097 GB.

Tu uso de {% data variables.product.prodname_actions %} comparte la fecha de facturación, método de pago y recibo existente en tu cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Acerca de los límites de gasto

{% data reusables.actions.actions-spending-limit-detailed %}

Para obtener información sobre cómo administrar y cambiar el límite de gasto de la cuenta, vea "[Administración del límite de gasto para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
