---
title: Gerenciar limites de gastos para codespaces
intro: 'Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Enterprise
  - Organizations
  - Spending limits
  - User account
  - Billing
shortTitle: Limites de gastos
---

## Sobre limites de gastos para o {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

Depois de atingir o limite de gastos, a sua organização ou repositório não poderão mais criar novos codespaces, e não será possível iniciar os codespaces existentes. Todos os codespaces que ainda estiverem em execução não serão desativados. Se você não alterar o limite de gastos, você não será cobrado pelo valor que exceder o limite.

Para obter mais informações sobre preços para o uso de {% data variables.product.prodname_codespaces %}, consulte "[Sobre cobranças para o {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)."

{% ifversion ghec %}
## Usando a sua assinatura do Azure
Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o seu ID de assinatura do Azure à sua conta corporativa para habilitar e pagar o uso de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

## Gerenciando o limite de gastos de {% data variables.product.prodname_codespaces %} para sua organização

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_codespaces %} para uma organização.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.manage-spending-limit %}
{% data reusables.dotcom_billing.monthly-spending-limit-codespaces %}
{% data reusables.dotcom_billing.update-spending-limit %}

{% ifversion ghec %}
## Gerenciando o limite de gastos de {% data variables.product.prodname_codespaces %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_codespaces %} para uma conta corporativa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Acima do uso mensal de {% data variables.product.prodname_codespaces %}", clique em **Limite de gastos**. ![Aba limite de gastos](/assets/images/help/settings/spending-limit-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
{% endif %}

## Exportar alterações quando você atingir seu limite de gastos

{% data reusables.codespaces.exporting-changes %}
## Gerenciamento de notificações por e-mail e limite de gastos

As notificações de e-mail são enviadas para os proprietários de contas e gerentes de cobrança quando os gastos chegam a 50%, 75%, 90% e 100% do limite de gastos da sua conta.

Você pode desabilitar essas notificações a qualquer momento, acessando a parte inferior da página **limite de gastos**.

![Captura de tela das configurações de notificação de e-mail](/assets/images/help/billing/codespaces-spending-limit-notifications.png)

## Leia mais

- "[Restringindo o acesso aos tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)"
- "[Gerenciando a cobrança para codespaces na sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
