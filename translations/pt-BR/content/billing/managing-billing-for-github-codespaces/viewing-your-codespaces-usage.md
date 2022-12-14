---
title: Visualizando seu uso dos seus codespaces
shortTitle: Viewing your usage
intro: Você pode visualizar os minutos computados e o armazenamento usado pelo {% data variables.product.prodname_codespaces %}.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147062031"
---
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-organization"></a>Como ver o uso do {% data variables.product.prodname_codespaces %} para sua organização

Os proprietários da organização e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_codespaces %} para uma organização. Para organizações gerenciadas por uma conta corporativa, os proprietários da organização podem ver o uso de {% data variables.product.prodname_codespaces %} na página de cobrança da organização, e os administradores de empresas podem ver o uso para toda a empresa.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}

{% ifversion ghec %}
## <a name="viewing--data-variablesproductprodname_codespaces--usage-for-your-enterprise-account"></a>Como ver o uso do {% data variables.product.prodname_codespaces %} para sua conta corporativa

Os proprietários da empresa e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_codespaces %}, veja as informações de uso de cada organização na sua conta corporativa.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
