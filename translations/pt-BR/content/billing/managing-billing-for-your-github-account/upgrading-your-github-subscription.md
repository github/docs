---
title: Atualizar sua assinatura do GitHub
intro: 'É possível atualizar a assinatura de qualquer tipo de conta do {% data variables.product.product_name %} a qualquer momento.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /articles/upgrading-your-personal-account-s-billing-plan/
  - /articles/upgrading-your-personal-account/
  - /articles/upgrading-your-personal-account-from-free-to-a-paid-account/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-personal-account-from-free-to-paid-with-paypal/
  - /articles/500-error-while-upgrading/
  - /articles/upgrading-your-organization-s-billing-plan/
  - /articles/changing-your-organization-billing-plan/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-a-credit-card/
  - /articles/upgrading-your-organization-account-from-free-to-paid-with-paypal/
  - /articles/upgrading-your-organization-account/
  - /articles/switching-from-per-repository-to-per-user-pricing/
  - /articles/adding-seats-to-your-organization/
  - /articles/upgrading-your-github-billing-plan/
  - /articles/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/upgrading-your-github-subscription
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Troubleshooting
  - Upgrades
  - User account
---

### Atualizar a assinatura da sua conta pessoal

Você pode atualizar sua conta pessoal do {% data variables.product.prodname_free_user %} para o {% data variables.product.prodname_pro %} para obter ferramentas de revisão de código avançadas em repositórios privados. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
1. Ao lado de "Plano atual", clique em **Atualizar**. ![Botão Upgrade (Atualizar)](/assets/images/help/billing/settings_billing_user_upgrade.png)
2. Em "Pro" na página "Comparar planos", clique em **Fazer atualização para Pro**.
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Atualizar a assinatura da organização

Você pode atualizar sua organização de {% data variables.product.prodname_free_team %} para uma organização para {% data variables.product.prodname_team %} para acessar ferramentas avançadas de gerenciamento e colaboração para equipes ou atualizar sua organização para o {% data variables.product.prodname_ghe_cloud %} para obter controles adicionais de segurança, conformidade e implantação. {% data reusables.gated-features.more-info-org-products %}

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.enter-payment-info %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

#### Próximas etapas para organizações que usam o {% data variables.product.prodname_ghe_cloud %}

Se você tiver atualizado sua organização para o {% data variables.product.prodname_ghe_cloud %}, você poderá configurar a identidade e a gestão de acesso para a sua organização. For more information, see "[Gerenciar logon único de SAML para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization)".

Caso queira usar uma conta corporativa com o {% data variables.product.prodname_ghe_cloud %}, entre em contato com {% data variables.contact.contact_enterprise_sales %}. Para obter mais informações, consulte "[Sobre contas corporativas](/articles/about-enterprise-accounts)".

### Adicionar estações à organização

Se você quiser que outros usuários tenham acesso aos repositórios privados da organização {% data variables.product.prodname_team %}, você poderá comprar mais estações a qualquer momento.

{% data reusables.organizations.billing-settings %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Trocar o plano de cobrança da organização de preços por repositório para por usuário

{% data reusables.dotcom_billing.switch-legacy-billing %} Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)".

{% data reusables.organizations.billing-settings %}
5. À direita do nome do seu plano, use o menu suspenso **Editar** e selecione **Editar plano**. ![Menu suspenso de editar](/assets/images/help/billing/per-user-upgrade-button.png)
6. À direita das "Ferramentas avançadas para equipes", clique em **Atualizar agora**. ![Botão Atualizar agora](/assets/images/help/billing/per-user-upgrade-now-button.png)
{% data reusables.dotcom_billing.choose_org_plan %}
{% data reusables.dotcom_billing.choose-monthly-or-yearly-billing %}
{% data reusables.dotcom_billing.owned_by_business %}
{% data reusables.dotcom_billing.finish_upgrade %}

### Solucionar problemas de erro 500 ao atualizar

{% data reusables.dotcom_billing.500-error %}

### Leia mais

- "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)"
- "[Como a atualização ou o downgrade afetam o processo de cobrança?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Sobre a cobrança no {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)"
