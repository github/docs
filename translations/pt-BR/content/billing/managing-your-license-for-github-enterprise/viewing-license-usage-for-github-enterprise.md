---
title: Visualizando o uso da licença para o GitHub Enterprise
intro: 'Você pode visualizar o uso da licença da sua empresa em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Visualizar o uso da licença
---

## Sobre o uso da licença para {% data variables.product.prodname_enterprise %}

{% ifversion ghec %}

Você pode visualizar o uso da licença para a sua conta corporativa em {% data variables.product.prodname_ghe_cloud %} em {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %}

{% elsif ghes %}

Você pode visualizar o uso da licença para {% data variables.product.prodname_ghe_server %} em {% data variables.product.product_location %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} Para mais informações sobre a exibição do uso da licença em {% data variables.product.prodname_dotcom_the_website %}, consulte "[Visualizando o uso da licença para {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" na documentação de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Visualizando uso da licença em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Você pode visualizar o uso da licença para a sua empresa e fazer o download de um arquivo com detalhes da licença.

{% data reusables.billing.license-statuses %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revise sua licença atual de {% data variables.product.prodname_enterprise %}, bem como licenças de usuário consumidas e disponíveis.
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações. Para obter mais informações, consulte "[Visualizar o uso do seu {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revise a sua licença atual de {% data variables.product.prodname_enterprise %}, bem como as licenças de usuário usadas e disponíveis.{% ifversion ghes %}
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações, bem como o detalhamento por organização dos committers. Para obter mais informações, consulte "[Gerenciar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security)".{% endif %}

{% endif %}
