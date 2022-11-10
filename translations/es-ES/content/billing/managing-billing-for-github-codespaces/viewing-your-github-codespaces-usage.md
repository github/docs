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
ms.openlocfilehash: c3024840f48bda68470b9ab12693f4a79daddb48
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107153'
---
## Visualización del uso de {% data variables.product.prodname_github_codespaces %} para la organización

Los propietarios de la organización y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} en una organización. Para las organizaciones que administra una cuenta empresarial, los propietarios de estas pueden ver el uso de los {% data variables.product.prodname_github_codespaces %} en la página de facturación de la misma y los administradores empresariales pueden ver el uso de toda la empresa.

{% data reusables.organizations.billing-settings %}
1. En "{% data variables.product.prodname_codespaces %}", consulta los detalles de las horas de proceso y el almacenamiento usados hasta ahora.

   ![Detalles de los minutos de uso](/assets/images/help/billing/codespaces-compute-storage.png)

   También puedes ver y actualizar el límite de gasto actual. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

   {% note %}

   **Notas**: 
   * Los costos que se muestran aquí son los costos acumulados en el periodo de facturación mensual actual. Los costos medidos de {% data variables.product.prodname_github_codespaces %} que se muestran en esta página se restablecen a cero al principio de cada periodo de facturación mensual. Los costos pendientes de los meses anteriores no se muestran.
   * Las cifras de esta página se actualizan cada hora.

   {% endnote %}

{% data reusables.dotcom_billing.actions-packages-report-download-org-account %} Los datos usados para este informe se actualizan diariamente. 
1. Filtra el informe para mostrar solo las filas que mencionan "Codespaces" en el campo `Product`.

   ![Un informe de uso filtrado por Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Visualización del uso de {% data variables.product.prodname_codespaces %} para la cuenta de empresa

Los propietarios de empresas y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_github_codespaces %} para una cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. En "Uso mensual de {% data variables.product.prodname_codespaces %}", puedes ver los detalles de uso de cada organización en tu cuenta empresarial.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

## Información adicional

- "[Enumeración de codespaces en la organización](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
