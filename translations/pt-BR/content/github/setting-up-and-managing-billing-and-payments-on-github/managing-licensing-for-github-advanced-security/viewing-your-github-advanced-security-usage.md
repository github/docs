---
title: Visualizar o seu uso do GitHub Advanced Security
intro: 'Você pode visualizar o uso de sua licença do {% data variables.product.prodname_GH_advanced_security %}.'
permissions: 'Enterprise owners can manage access to {% data variables.product.prodname_GH_advanced_security %} for their organization or enterprise organizations.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from: /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---
{% data reusables.advanced-security.about-ghas-license-seats %} For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)."

### Viewing {% data variables.product.prodname_GH_advanced_security %} license usage for your enterprise account

You can check how many seats your license includes and how many of them are currently used.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   A seção "{% data variables.product.prodname_GH_advanced_security %}" mostra os detalhes do uso atual. ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) Se você ficar sem estações, a seção ficará vermelha. Você deve quer reduzir o seu uso de {% data variables.product.prodname_GH_advanced_security %} ou comprar mais estações. Para obter mais informações, consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security#getting-the-most-out-of-your-github-advanced-security-enterprise-license)". ![{% data variables.product.prodname_GH_advanced_security %} em configurações de licenciamento corporativo](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Opcionalmente, para ver uma análise detalhada do uso por organização, clique em **Cobrança**. ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png) Na seção "{% data variables.product.prodname_GH_advanced_security %}", você pode ver o número de committers e committers únicos para cada organização. ![{% data variables.product.prodname_GH_advanced_security %} em configurações de cobrança corporativa](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Opcionalmente, clique no nome de uma organização em que você é um proprietário para exibir as configurações de segurança e análise para a organização. ![Organização proprietária na seção de {% data variables.product.prodname_GH_advanced_security %} das configurações de cobrança corporativa](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Na página de configurações "Análise de & segurança" desça até a seção "repositórios de {% data variables.product.prodname_GH_advanced_security %}" para ver uma descrição detalhada do uso por repositório para esta organização. ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise para a sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".
