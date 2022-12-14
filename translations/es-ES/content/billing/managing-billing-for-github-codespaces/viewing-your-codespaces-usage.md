---
title: Ver el uso de tus Codespaces
shortTitle: Viewing your usage
intro: Puedes ver los minutos de cálculo y almacenamiento que utilizan los {% data variables.product.prodname_codespaces %}.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Billing
ms.openlocfilehash: 025b93aca321b381989a55389ff93fac3cef02c2
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062038"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>Visualización del uso de {% data variables.product.prodname_codespaces %} para la organización

Los propietarios de la organización y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una organización. Para las organizaciones que administra una cuenta empresarial, los propietarios de estas pueden ver el uso de los {% data variables.product.prodname_codespaces %} en la página de facturación de la misma y los administradores empresariales pueden ver el uso de toda la empresa.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>Visualización del uso de {% data variables.product.prodname_codespaces %} para la cuenta de empresa

Los propietarios de empresas y los administradores de facturación pueden ver el uso de {% data variables.product.prodname_codespaces %} para una cuenta de empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Debajo de "{% data variables.product.prodname_codespaces %}", ve los detalles de uso de cada organización en tu cuenta empresarial.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
