---
title: Visualizar o seu uso do GitHub Advanced Security
intro: 'You can view usage of {% data variables.product.prodname_GH_advanced_security %} for your enterprise.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '>=3.1'
  fpt: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Visualizar o uso avançado de segurança
---

## About licenses for {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".

## Visualizando a licença de uso de {% data variables.product.prodname_GH_advanced_security %} para a sua conta corporativa

Você pode verificar quantas estações a sua licença inclui e quantas delas são usadas atualmente.

{% ifversion fpt %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   A seção "{% data variables.product.prodname_GH_advanced_security %}" mostra os detalhes do uso atual. ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) If you run out of seats, the section will be red and show "Limit exceeded". Você deve quer reduzir o seu uso de {% data variables.product.prodname_GH_advanced_security %} ou comprar mais estações. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)". ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings showing "Limit exceeded"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Opcionalmente, para ver uma análise detalhada do uso por organização, clique em **Cobrança**. ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png) Na seção "{% data variables.product.prodname_GH_advanced_security %}", você pode ver o número de committers e committers únicos para cada organização. ![{% data variables.product.prodname_GH_advanced_security %} em configurações de cobrança corporativa](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Opcionalmente, clique no nome de uma organização em que você é um proprietário para exibir as configurações de segurança e análise para a organização. ![Organização proprietária na seção de {% data variables.product.prodname_GH_advanced_security %} das configurações de cobrança corporativa](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Na página de configurações "Análise de & segurança" desça até a seção "repositórios de {% data variables.product.prodname_GH_advanced_security %}" para ver uma descrição detalhada do uso por repositório para esta organização. ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   A seção "{% data variables.product.prodname_GH_advanced_security %}" mostra os detalhes do uso atual. Você pode ver o número total de estações usadas, bem como uma tabela com o número de committers e committers únicos para cada organização. ![Seção de {% data variables.product.prodname_GH_advanced_security %} de licença empresarial](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Opcionalmente, clique no nome de uma organização em que você é um proprietário para exibir as configurações de segurança e análise para a organização. ![Organização proprietária na seção de {% data variables.product.prodname_GH_advanced_security %} das configurações de cobrança corporativa](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Na página de configurações "Análise de & segurança" desça até a seção "repositórios de {% data variables.product.prodname_GH_advanced_security %}" para ver uma descrição detalhada do uso por repositório para esta organização. ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% endif %}
