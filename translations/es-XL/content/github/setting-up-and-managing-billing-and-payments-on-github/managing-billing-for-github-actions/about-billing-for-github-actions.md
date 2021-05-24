---
title: Acerca de la facturación para GitHub Actions
intro: 'Si quieres utilizar {% data variables.product.prodname_actions %} con más almacenamiento o minutos de los que se incluyen en tu cuenta, se te cobrará por estos recursos adicionales.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
---
### Acerca de la facturación para {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %} {% data reusables.github-actions.actions-spending-limit %}

Los minutos se restablecen cada mes, pero no es el caso para el uso de almacenamiento.

| Producto                                                                   | Almacenamiento | Minutos (por mes) |
| -------------------------------------------------------------------------- | -------------- | ----------------- |
| {% data variables.product.prodname_free_user %}                     | 500 MB         | 2,000             |
| {% data variables.product.prodname_pro %}                             | 1 GB           | 3,000             |
| {% data variables.product.prodname_free_team %} para organizaciones | 500 MB         | 2,000             |
| {% data variables.product.prodname_team %}                            | 2 GB           | 3,000             |
| {% data variables.product.prodname_ghe_cloud %}                     | 50 GB          | 50,000            |

Los jobs que se ejecutan en Windows y macOS y que se hospedan en {% data variables.product.prodname_dotcom %} consumen minutos en una proporción de 2 a 10 veces mayor que aquellos que se ejecutan en Linux. Por ejemplo, utilizar 1,000 minutos en Windows consumirá 2,000 de los minutos incluidos en tu cuenta. Utilizar 1,000 minutos en macOS consumiría 10,000 de los minutos incluidos en tu cuenta.

| Sistema operativo | Multiplicador de minutos |
| ----------------- | ------------------------ |
| Linux             | 1                        |
| macOS             | 10                       |
| Windows           | 2                        |

El almacenamiento que utilza un repositorio es el total del almacenamiento utilizado por los artefactos de {% data variables.product.prodname_actions %} y por {% data variables.product.prodname_registry %}. Tu costo de almacenamiento es el uso total para todos los repositorios que pertenezcan a tu cuenta. Para obtener más información sobre los costos de {% data variables.product.prodname_registry %}, consulta la sección "[Acerca de la facturación para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)".

 Si tu uso de cuenta sobrepasa estos límites y habías configurado un límite de gastos mayor a $0, pagarás $0.25 USD por GB de almacenamiento por mes y por minuto de uso dependiendo en el sistema operativo que utilice el ejecutor hospedado en {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %} redondea hacia arriba los minutos que utiliza cada job.

{% note %}

**Nota:**Los multiplicadores de minutos no se aplican a las tasas por minuto que se muestran a continuación.

{% endnote %}

| Sistema operativo | Tasa por minuto |
| ----------------- | --------------- |
| Linux             | $0.008          |
| macOS             | $0.08           |
| Windows           | $0.016          |

La cantidad de jobs que puedes ejecutar simultáneamente a través de todos los repositorios que pertenezcan a tu cuenta de usuario u organización dependerá de tu plan de GitHub. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/about-github-actions/#usage-limits)".

### Calcular los gastos por minuto y por almacenamiento

Al final de cada mes, {% data variables.product.prodname_dotcom %} calcula el costo de los minutos y almacenamiento utilizados en comparación con lo que se incluye en tu cuenta. Por ejemplo, si tu organización utiliza {% data variables.product.prodname_team %} y permite gastos ilimitados, utilizar 15,000 minutos podría tener un costo extra de almacenamiento y minutos de $56 (USD) dependiendo de los sistemas operativos que se utilizan para ejecutar jobs.

- 5,000 minutos (3,000 de Linux y 2,000 de Windows) = $56 ($24 + $32) (USD).
  - 3,000 minutos de Linux a $0.008 por minuto = $24 (USD).
  - 2,000 minutos de Windows a $0.016 por minuto = $32 (USD).

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu transferencia de datos al número de GB más cercano.

{% data variables.product.prodname_dotcom %} calcula tu uso de almacenamiento para cada mes basándose en el uso por hora durante el mismo mes. Por ejemplo, si utilizas 3 GB de almacenamiento durante 10 días de Marzo y 12 GB durante 21 días de Marzo, tu uso de almacenamiento sería:

- 3 GB x 10 días x (24 horas por día) = 720 GB-Horas
- 12 GB x 21 días x (24 horas por día) = 6,048 GB-Horas
- 720 GB-Horas + 6,048 GB-Horas = 6,768 GB-Horas
- 6,768 GB-Horas/ (744 horas por mes) = 9.0967 GB-Meses

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Por lo tanto, tu uso de almacenamiento para marzo sería de 9.097 GB.

Tu uso de {% data variables.product.prodname_actions %} comparte la fecha de facturación, método de pago y recibo existente en tu cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

### Acerca de los límites de gasto

Predeterminadamente, tu cuenta tendrá un límite de gastos de $0 para el uso de {% data variables.product.prodname_actions %}. Para habilitar el uso extendido de minutos y almacenamiento para repositorios privados por encima de lo incluido en tu cuenta, puedes incrementar el límite de gastos o permitir gastos ilimitados. Para obtener más información, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)".

{% data reusables.github-actions.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
