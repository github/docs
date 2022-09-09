---
title: Como visualizar o uso do GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Você pode visualizar os minutos computados e o armazenamento usado pelo {% data variables.product.prodname_github_codespaces %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147421976'
---
## Como ver o uso do {% data variables.product.prodname_github_codespaces %} para sua organização

Os proprietários da organização e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_github_codespaces %} para uma organização. Para organizações gerenciadas por uma conta corporativa, os proprietários da organização podem ver o uso de {% data variables.product.prodname_codespaces %} na página de cobrança da organização, e os administradores de empresas podem ver o uso para toda a empresa.

{% data reusables.organizations.billing-settings %} {% data reusables.dotcom_billing.codespaces-minutes %} {% data reusables.dotcom_billing.actions-packages-report-download-org-account %}
1. Filtre o relatório para mostrar apenas as linhas que mencionam "Codespaces" no campo `Product`.

   ![Um relatório de uso filtrado para Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Como ver o uso do {% data variables.product.prodname_codespaces %} para sua conta corporativa

Os proprietários da empresa e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Em "{% data variables.product.prodname_codespaces %}, veja as informações de uso de cada organização na sua conta corporativa.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}
