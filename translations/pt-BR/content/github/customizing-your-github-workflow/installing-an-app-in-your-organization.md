---
title: Instalar aplicativos na organização
intro: 'É possível instalar aplicativos do {% data variables.product.prodname_marketplace %} para usar em sua organização.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
versions:
  free-pro-team: '*'
---

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

Se você escolheu um plano pago, a assinatura do app será paga na data de cobrança atual de sua organização e com a forma de pagamento vigente.

{% data reusables.marketplace.free-trials %}

### Instalar um {% data variables.product.prodname_github_app %} em sua organização

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. Se o app solicitar acesso a repositórios, decida se quer dar acesso a todos ou apenas determinados repositórios e selecione **All repositories** (Todos os repositórios) ou **Only select repositories** (Somente repositórios selecionados). ![Botões com opções para instalar um app em todos ou apenas determinados repositórios](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### Instalar um {% data variables.product.prodname_oauth_app %} em sua organização

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. Revise as informações sobre o acesso do app à sua conta pessoal, organização e dados, e depois clique em **Authorize application** (Autorizar aplicativo).

### Leia mais

- "[Atualizar a forma de pagamento da sua organização](/articles/updating-your-organization-s-payment-method)"
- "[Instalar um app em sua conta pessoal](/articles/installing-an-app-in-your-personal-account)"
