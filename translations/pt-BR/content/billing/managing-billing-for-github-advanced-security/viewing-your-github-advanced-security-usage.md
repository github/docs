---
title: Visualizar o seu uso do GitHub Advanced Security
intro: 'Você pode ver o uso de {% data variables.product.prodname_GH_advanced_security %} para a sua empresa.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
  ghae: issue-5378
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Visualizar o uso avançado de segurança
---

## Sobre as licenças para {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".

{% ifversion ghas-committers-calculator %}
Você pode calcular quantas estações adicionais serão usadas se você habilitar o {% data variables.product.prodname_GH_advanced_security %} para mais organizações e repositórios com o painel de administração do site. Para obter mais informações, consulte "[Painel de administração do site](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers)".
{% endif %}

## Visualizando a licença de uso de {% data variables.product.prodname_GH_advanced_security %} para a sua conta corporativa

Você pode verificar quantas estações a sua licença inclui e quantas delas são usadas atualmente.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   A seção "{% data variables.product.prodname_GH_advanced_security %}" mostra os detalhes do uso atual. ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) If you run out of seats, the section will be red and show "Limit exceeded." Você deve quer reduzir o seu uso de {% data variables.product.prodname_GH_advanced_security %} ou comprar mais estações. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)". ![{% data variables.product.prodname_GH_advanced_security %} em configurações de licenciamento corporativo, que mostra o "limite excedido"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
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

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## Fazendo o download das informações do uso da licença de {% data variables.product.prodname_GH_advanced_security %}

Você pode fazer o download de um arquivo CSV com informações de uso da licença de {% data variables.product.prodname_GH_advanced_security %} nos níveis da empresa e organização. O arquivo CSV contém informações sobre cada estação de {% data variables.product.prodname_advanced_security %} em uso, incluindo:

- O nome de usuário da pessoa que usa a estação
- Os repositórios de {% data variables.product.prodname_advanced_security %} habilitados onde commits foram criados
- As organizações às quais as pessoas que usam estações pertencem
- As datas de commit mais recentes

Você pode usar essas informações para obter insights sobre como suas licenças de {% data variables.product.prodname_advanced_security %} estão sendo usadas, como, por exemplo, quais integrantes da sua empresa estão usando uma estação de {% data variables.product.prodname_advanced_security %} ou como as licenças de {% data variables.product.prodname_advanced_security %} são consumidas em todas as suas organizações.

Você pode fazer o download do CSV de uso da licença de {% data variables.product.prodname_advanced_security %} por meio da interface de usuário de {% data variables.product.product_name %} ou da API REST.

### Fazendo o download das informações do uso da licença de {% data variables.product.prodname_advanced_security %} por meio da interface do usuário

#### No nível da organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Abaixo de "{% data variables.product.prodname_GH_advanced_security %}", clique em {% octicon "download" aria-label="The download icon" %} próximo a "Committers." ![Botão de download para dados no nível da organização](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### No nível da empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Em "{% data variables.product.prodname_GH_advanced_security %}", clique em {% octicon "download" aria-label="The download icon" %} ao lado de "Commiters." ![Botão de download para dados no nível da empresa](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Fazendo o download das informações do uso da licença de {% data variables.product.prodname_advanced_security %} por meio da API REST

Você pode recuperar as informações de uso de {% data variables.product.prodname_advanced_security %} por meio da API de cobrança.

{% ifversion ghec %}

Para dados de nível da organização, use o ponto final `/orgs/{org}/settings/billing/seguraning-advanced-`. Para obter mais informações, consulte "[Cobrança](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)" na documentação da API REST de {% data variables.product.prodname_dotcom %}.

{% endif %}

Para dados no nível corporativo, use o ponto de extremidade `/enterprises/{enterprise}/settings/billing/advanced-security`. Para obter mais informações, consulte "[Administração de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)" na documentação de API REST de {% data variables.product.prodname_dotcom %}.

{% endif %}
