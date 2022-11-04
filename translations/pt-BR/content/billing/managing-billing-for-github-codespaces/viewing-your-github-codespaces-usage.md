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
ms.openlocfilehash: c3024840f48bda68470b9ab12693f4a79daddb48
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107146'
---
## Como ver o uso do {% data variables.product.prodname_github_codespaces %} para sua organização

Os proprietários da organização e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_github_codespaces %} para uma organização. Para organizações gerenciadas por uma conta corporativa, os proprietários da organização podem ver o uso dos {% data variables.product.prodname_github_codespaces %} na página de cobrança da organização, e os administradores corporativos podem ver o uso em toda a empresa.

{% data reusables.organizations.billing-settings %}
1. Em "{% data variables.product.prodname_codespaces %}", exiba os detalhes das horas de computação e o armazenamento usados até agora neste mês.

   ![Detalhes de uso por minuto](/assets/images/help/billing/codespaces-compute-storage.png)

   Você também pode ver e atualizar o limite de gastos atual. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)".

   {% note %}

   **Observações**: 
   * Os custos mostrados aqui são os custos cumulativos no período de cobrança mensal atual. Os custos limitados dos {% data variables.product.prodname_github_codespaces %} mostrados nesta página são redefinidos para zero no início de cada período de cobrança mensal. Os custos pendentes dos meses anteriores não são mostrados.
   * Os números nesta página são atualizados por hora.

   {% endnote %}

{% data reusables.dotcom_billing.actions-packages-report-download-org-account %} Os dados usados neste relatório são atualizados diariamente. 
1. Filtre o relatório para mostrar apenas as linhas que mencionam "Codespaces" no campo `Product`.

   ![Um relatório de uso filtrado para Codespaces](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Como ver o uso do {% data variables.product.prodname_codespaces %} para sua conta corporativa

Os proprietários corporativos e os gerentes de cobrança podem ver o uso dos {% data variables.product.prodname_github_codespaces %} de uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Em "Uso mensal dos {% data variables.product.prodname_codespaces %}, veja os detalhes de uso de cada organização na conta corporativa.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

## Leitura adicional

- "[Como listar os codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
