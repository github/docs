---
title: Conectar uma assinatura do Azure à sua empresa
intro: 'Você pode usar o Contrato da Microsoft Enterprise para habilitar e pagar por {% data variables.product.prodname_actions %} e pelo uso de {% data variables.product.prodname_registry %}, além dos valores incluídos para a sua empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
versions:
  free-pro-team: '*'
---

### Sobre as assinaturas do Azure e {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, consulte "[Sobre a cobrança para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) e "[Sobre cobrança para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

Após conectar a uma assinatura do Azure, você também poderá gerenciar seu limite de gastos. Para informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar o seu limite de gastos para {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)" e "[Gerenciar o seu limite de gastos para {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)".

### Conectar a sua assinatura do Azure à sua conta corporativa

Para conectar sua assinatura do Azure, você deve ter permissões de proprietário na assinatura.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Informações de pagamento", clique em **Adicionar assinatura do Azure**.
1. Para entrar na sua conta da Microsoft, siga as instruções.
1. Revise a instrução de "Permissões solicitadas". Se você concordar com os termos, clique em **Aceitar**.
1. Em "Selecione uma assinatura", selecione o ID de Assinatura do Azure que você deseja conectar à sua empresa.
1. Clique em **Conectar**.

### Desconectar a sua assinatura do Azure da sua conta corporativa

Após desconectar a sua assinatura Azure da conta corporativa, seu uso não poderá mais exceder os valores incluídos no seu plano.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Assinatura do Azure", à direita do ID de assinatura que você deseja desconectar, clique em **{% octicon "trashcan" aria-label="The trashcan icon" %}**.
1. Revise a instrução e clique em **Remover**.
