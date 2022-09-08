---
title: Visualización del uso de GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Puedes ver los minutos de proceso y almacenamiento que utilizan los {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: f3adfbfcd2d0ae41dc2158a2e7e030aac7db5e4d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147421983'
---
## Visualización del uso de {% data variables.product.prodname_github_codespaces %} para la organización

Los propietarios de la organización y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} en una organización. Para las organizaciones que administra una cuenta empresarial, los propietarios de estas pueden ver el uso de los {% data variables.product.prodname_codespaces %} en la página de facturación de la misma y los administradores empresariales pueden ver el uso de toda la empresa.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. Filtra el informe para mostrar solo las filas que mencionan "Codespaces" en el campo `Product`.

   ![Un informe de uso filtrado por Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Visualización del uso de {% data variables.product.prodname_codespaces %} para la cuenta de empresa

Los propietarios de empresas y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_codespaces %}", ve los detalles de uso de cada organización en tu cuenta empresarial.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
