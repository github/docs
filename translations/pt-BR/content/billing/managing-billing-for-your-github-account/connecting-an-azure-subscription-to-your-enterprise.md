---
title: Conectar uma assinatura do Azure à sua empresa
intro: 'Use o seu Contrato da Microsoft Enterprise para habilitar e pagar {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} e pelo uso de {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Conectar uma assinatura do Azure
---

## Sobre as assinaturas do Azure e {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Para obter mais informações, consulte "[Sobre a cobrança para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) e "[Sobre cobrança para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

{% note %}

**Obserrvação:** Se a conta corporativa estiver em um Contrato da Microsoft Enterprise, conectar a uma assinatura do Azure é a única maneira de usar {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %} além do valor incluído ou usar {% data variables.product.prodname_codespaces %}.

{% endnote %}

Após conectar uma assinatura do Azure, você também pode gerenciar seus limites de gastos.

- "[Gerenciando seu limite de gastos para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)"
- "[Gerenciando seu limite de gastos para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)"
- "[Gerenciando seu limite de gastos para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)"

## Conectar a sua assinatura do Azure à sua conta corporativa

Para conectar sua assinatura do Azure, você deve ter permissões de proprietário na assinatura.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Informações de pagamento", clique em **Adicionar assinatura do Azure**.
1. Para entrar na sua conta da Microsoft, siga as instruções.
1. Revise a instrução de "Permissões solicitadas". Se você concordar com os termos, clique em **Aceitar**.
1. Em "Selecione uma assinatura", selecione o ID de Assinatura do Azure que você deseja conectar à sua empresa.

   {% note %}

   **Observação:** A validação de permissão da assinatura de {% data variables.product.company_short %} solicita acesso somente leitura para exibir a lista de assinaturas disponíveis. Para selecionar uma assinatura do Azure, você deve ter permissões de proprietário na assinatura. Se o inquilino padrão não tiver as permissões corretas, você deverá especificar o ID de um inquilino diferente. Para obter mais informações, consulte [Plataforma de identidade da Microsoft e o fluxo do código de autorização do OAuth 2.0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) na documentação da Microsoft.

   {% endnote %}
1. Clique em **Conectar**.

## Desconectar a sua assinatura do Azure da sua conta corporativa

Após desconectar a sua assinatura Azure da conta corporativa, seu uso não poderá mais exceder os valores incluídos no seu plano.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
{% data reusables.enterprise-accounts.payment-information-tab %}
1. Em "Assinatura do Azure", à direita do ID de assinatura que você deseja desconectar, clique em **{% octicon "trash" aria-label="The trash icon" %}**.
1. Revise a instrução e clique em **Remover**.
