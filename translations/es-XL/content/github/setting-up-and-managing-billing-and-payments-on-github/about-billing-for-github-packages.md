---
title: Acerca de la facturación para GitHub Packages
intro: 'Si quieres utilizar {% data variables.product.prodname_registry %} con más almacenamiento o transferencia de datos de los que se incluyen en tu cuenta, se te cobrará por este uso adicional.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Acerca de la facturación para {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.container-registry-beta-billing-note %}

La transferencia de datos se restablece cada mes, pero no así el uso de almacenamiento.

| Producto                                                                   | Almacenamiento | Transferencia de datos (por mes) |
| -------------------------------------------------------------------------- | -------------- | -------------------------------- |
| {% data variables.product.prodname_free_user %}                     | 500MB          | 1GB                              |
| {% data variables.product.prodname_pro %}                             | 2GB            | 10GB                             |
| {% data variables.product.prodname_free_team %} para organizaciones | 500MB          | 1GB                              |
| {% data variables.product.prodname_team %}                            | 2GB            | 10GB                             |
| {% data variables.product.prodname_ghe_cloud %}                     | 50GB           | 100GB                            |

Todos los datos de transferencia saliente, cuando se desencadenan mediante {% data variables.product.prodname_actions %}, y aquellos de transferencia entrante desde cualquier origen, son gratuitos. Determinamos que estás descargando paquetes mediante el uso de {% data variables.product.prodname_actions %} cuando ingresas en {% data variables.product.prodname_registry %} utilizando un `GITHUB_TOKEN`.

|                                               | Hospedado | Auto-Hospedado |
| --------------------------------------------- | --------- | -------------- |
| Acceso utilizando un `GITHUB_TOKEN`           | Gratis    | Gratis         |
| Acceso utilizando un token de acceso personal | Gratis    | $              |

El uso de almacenamiento se comparte con los artefactos de compilación que produce {% data variables.product.prodname_actions %} para los repositorios que pertenecen a tu cuenta. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)".

{% data variables.product.prodname_dotcom %} cobra el uso a la cuenta a la que pertenece el repositorio en donde se publica el paquete. Si tu uso de cuenta sobrepasa estos límites y has configurado un límite de gastos mayor a $0, pagarás $0.25 USD por GB de almacenamiento y $0.50 USD por GB de transferencia de datos.

Por ejemplo, si tu organización utiliza {% data variables.product.prodname_team %}, permite los gastos ilimitados, utiliza 150GB de almacenamiento, y tiene 50GB de transferencia de datos durante un mes, ésta tendrá un excedente de 148GB en el almacenamiento y de 40GB en transferencia de datos para ese mes. El excedente de almacenamiento costaría $0.25 por GB, o $37. El excedente para transferencia de datos costaría $0.50 por GB, o $20.

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu transferencia de datos al número de GB más cercano.

{% data variables.product.prodname_dotcom %} calcula tu uso de almacenamiento para cada mes basándose en el uso por hora durante el mismo mes. Por ejemplo, si utilizas 3 GB de almacenamiento durante 10 días de Marzo y 12 GB durante 21 días de Marzo, tu uso de almacenamiento sería:

- 3 GB x 10 días x (24 horas por día) = 720 GB-Horas
- 12 GB x 21 días x (24 horas por día) = 6,048 GB-Horas
- 720 GB-Horas + 6,048 GB-Horas = 6,768 GB-Horas
- 6,768 GB-Horas/ (744 horas por mes) = 9.0967 GB-Meses

Al final del mes, {% data variables.product.prodname_dotcom %} redondea tu almacenamiento al número de MB más cercano. Por lo tanto, tu uso de almacenamiento para marzo sería de 9.097 GB.

Tu uso de {% data variables.product.prodname_registry %} comparte la fecha de facturación, método de pago y recibo existente en tu cuenta. {% data reusables.dotcom_billing.view-all-subscriptions %}

### Acerca de los límites de gasto

Predeterminadamente, tu cuenta tendrá un límite de gastos de $0 para el uso de {% data variables.product.prodname_registry %}. Para habilitar el uso extendido de almacenamiento y transferencia de datos para paquetes privados por encima de lo incluido en tu cuenta, puedes incrementar el límite de gastos o permitir gastos ilimitados. Para obtener más información, consulta la sección "[Administrar tu límite de gastos para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)".

{% data reusables.package_registry.spending-limit-enterprise-account %}

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
