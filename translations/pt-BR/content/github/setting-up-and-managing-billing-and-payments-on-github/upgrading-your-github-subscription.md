---
title: Atualizar sua assinatura do GitHub
intro: 'É possível atualizar a assinatura de qualquer tipo de conta do {{ site.data.variables.product.product_name }} a qualquer momento.'
redirect_from:
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
versions:
  free-pro-team: '*'
---

### Atualizar a assinatura da sua conta pessoal

Você pode atualizar sua conta pessoal do {{ site.data.variables.product.prodname_free_user }} para o {{ site.data.variables.product.prodname_pro }} para obter ferramentas de revisão de código avançadas em repositórios privados. {{ site.data.reusables.gated-features.more-info }}

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
4. Ao lado de "{{ site.data.variables.product.prodname_free_user }}", clique em **Upgrade** (Atualizar). ![Botão Upgrade (Atualizar)](/assets/images/help/billing/settings_billing_user_upgrade.png)
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### Atualizar a assinatura da organização

Você pode atualizar sua organização de {{ site.data.variables.product.prodname_free_team }} para uma organização para {{ site.data.variables.product.prodname_team }} para acessar ferramentas avançadas de gerenciamento e colaboração para equipes ou atualizar sua organização para o {{ site.data.variables.product.prodname_ghe_cloud }} para obter controles adicionais de segurança, conformidade e implantação. {{ site.data.reusables.gated-features.more-info-org-products }}

{{ site.data.reusables.dotcom_billing.org-billing-perms }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.upgrade_org }}
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.enter-payment-info }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

#### Próximas etapas para organizações que usam o {{ site.data.variables.product.prodname_ghe_cloud }}

Se você tiver atualizado sua organização para o {{ site.data.variables.product.prodname_ghe_cloud }}, você poderá configurar a identidade e a gestão de acesso para a sua organização. For more information, see "[Gerenciar logon único de SAML para sua organização](/articles/managing-saml-single-sign-on-for-your-organization)".

Caso queira usar uma conta corporativa com o {{ site.data.variables.product.prodname_ghe_cloud }}, entre em contato com {{ site.data.variables.contact.contact_enterprise_sales }}. Para obter mais informações, consulte "[Sobre contas corporativas](/articles/about-enterprise-accounts)".

### Adicionar estações à organização

Se você quiser que outros usuários tenham acesso aos repositórios privados da organização {{ site.data.variables.product.prodname_team }}, você poderá comprar mais estações a qualquer momento.

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.user_settings.subscriptions-tab }}
{{ site.data.reusables.dotcom_billing.add-seats }}
{{ site.data.reusables.dotcom_billing.number-of-seats }}
{{ site.data.reusables.dotcom_billing.confirm-add-seats }}

### Trocar o plano de cobrança da organização de preços por repositório para por usuário

{{ site.data.reusables.dotcom_billing.switch-legacy-billing }} Para obter mais informações, consulte "[Sobre preços por usuário](/articles/about-per-user-pricing)".

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
5. À direita do nome do seu plano, use o menu suspenso **Editar** e selecione **Editar plano**. ![Menu suspenso de editar](/assets/images/help/billing/per-user-upgrade-button.png)
6. À direita das "Ferramentas avançadas para equipes", clique em **Atualizar agora**. ![Botão Atualizar agora](/assets/images/help/billing/per-user-upgrade-now-button.png)
{{ site.data.reusables.dotcom_billing.choose_org_plan }}
{{ site.data.reusables.dotcom_billing.choose-monthly-or-yearly-billing }}
{{ site.data.reusables.dotcom_billing.owned_by_business }}
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### Solucionar problemas de erro 500 ao atualizar

{{ site.data.reusables.dotcom_billing.500-error }}

### Leia mais

- "[Produtos do {{ site.data.variables.product.prodname_dotcom }}](/articles/github-s-products)"
- "[Como a atualização ou o downgrade afetam o processo de cobrança?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[Sobre a cobrança no {{ site.data.variables.product.prodname_dotcom }}](/articles/about-billing-on-github)"
