---
title: Como visualizar o uso do GitHub Codespaces
shortTitle: Viewing your usage
intro: 'Você pode visualizar as horas de computação e o armazenamento usado pelo {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: 67e29ee71b1881ee2ae6e9ca872fd7969f86afca
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158738'
---
## Como ver o uso do {% data variables.product.prodname_github_codespaces %} para sua conta pessoal

Você pode ver quanto do uso incluído em sua conta pessoal você usou até agora no ciclo de cobrança mensal atual. Se você tiver configurado uma forma de pagamento, definido um limite de gastos e usado todo o seu uso incluído, também poderá verificar sua fatura para o mês atual.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. Em "{% data variables.product.prodname_codespaces %}", você pode ver quantas horas de núcleo de uso de computação e GB/mês de armazenamento de {% data variables.product.prodname_github_codespaces %} você usou até agora no mês de cobrança atual.

   ![Captura de tela da exibição inicial do uso pessoal](/assets/images/help/codespaces/view-personal-usage-collapsed.png)

   Para obter informações sobre "horas de núcleo" e "GB/mês", confira "[Sobre a cobrança de {% data variables.product.prodname_github_codespaces %}](/enterprise-cloud@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

1. Opcionalmente, clique em **Horas de uso** e **Armazenamento** para ver mais detalhes.

   ![Captura de tela da exibição expandida do uso pessoal](/assets/images/help/codespaces/view-personal-usage-expanded.png)

   A coluna **Incluído** mostra quantas das horas de núcleo de uso da computação ou GB/mês de armazenamento, incluídas gratuitamente com sua conta, você usou até agora este mês. A coluna **Pago** mostra quantas horas principais de uso ou GB/mês de armazenamento você usou. Os números são atualizados a cada hora.

   Na captura de tela acima, toda a cota de armazenamento incluída para o mês foi usada. Ao usar todo o uso de computação ou armazenamento incluído (o que for atingido primeiro), você precisa configurar uma forma de pagamento e um limite de gastos para continuar usando {% data variables.product.prodname_github_codespaces %} durante o mês de cobrança atual. Para obter mais informações, confira "[Como adicionar ou editar uma forma de pagamento](/enterprise-cloud@latest/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)" e "[Como gerenciar limites de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-the-github-codespaces-spending-limit-for-your-personal-account)".

{% data reusables.codespaces.usage-report-download %}

## Como ver o uso de {% data variables.product.prodname_github_codespaces %} para a conta da sua organização

Os proprietários da organização e os gerentes de cobrança podem ver o uso do {% data variables.product.prodname_github_codespaces %} para a organização.

{% data reusables.organizations.billing-settings %}
1. Em "{% data variables.product.prodname_codespaces %}", exiba os detalhes das horas de computação e o armazenamento usados até agora neste mês.

   ![Captura de tela dos detalhes de uso de computação e armazenamento](/assets/images/help/billing/codespaces-compute-storage.png)

   Você também pode ver e atualizar o limite de gastos atual. Para obter mais informações, confira "[Como gerenciar limites de gastos do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)".

   {% note %}

   **Observações**: 
   * Os custos mostrados aqui são os custos cumulativos no período de cobrança mensal atual. Os custos limitados dos {% data variables.product.prodname_github_codespaces %} mostrados nesta página são redefinidos para zero no início de cada período de cobrança mensal. Os custos pendentes dos meses anteriores não são mostrados.
   * Os números nesta página são atualizados por hora.

   {% endnote %}

{% data reusables.codespaces.usage-report-download %}

{% ifversion ghec %}
## Como ver o uso do {% data variables.product.prodname_codespaces %} para sua conta corporativa

Os proprietários corporativos e os gerentes de cobrança podem ver o uso dos {% data variables.product.prodname_github_codespaces %} de uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Em "Uso mensal dos {% data variables.product.prodname_codespaces %}, veja os detalhes de uso de cada organização na conta corporativa.
{% data reusables.codespaces.usage-report-download %} {% endif %}

## Leitura adicional

- "[Como listar os codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)"
