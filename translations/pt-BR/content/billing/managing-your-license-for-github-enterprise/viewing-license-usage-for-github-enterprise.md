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

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} For more information about the display of license usage on {% data variables.product.prodname_dotcom_the_website %} and identifying when the last license sync occurred, see "[Viewing license usage for {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To learn more about the license data associated with your enterprise account and how the number of consumed user seats are calculated, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

{% endif %}

## Visualizando uso da licença em {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Você pode visualizar o uso da licença para a sua empresa e fazer o download de um arquivo com detalhes da licença. If you're not seeing expected license counts in this report, it's possible that the subscriber’s assigned {% data variables.product.prodname_vs %} subscription email address and {% data variables.product.prodname_dotcom_the_website %} email address aren't exactly the same. For further information, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revise sua licença atual de {% data variables.product.prodname_enterprise %}, bem como licenças de usuário consumidas e disponíveis.
    - To download the consumed license report as a CSV file, in the top right, click {% octicon "download" aria-label="The download icon" %}. For more information about reviewing the data in this report, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações. For more information, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revise a sua licença atual de {% data variables.product.prodname_enterprise %}, bem como as licenças de usuário usadas e disponíveis.{% ifversion ghes %}
    - To download the consumed license report as a JSON file, in the top right under "Quick links", choose **Export license usage**. For more information about reviewing the data in this report, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."
    - Se sua licença incluir {% data variables.product.prodname_GH_advanced_security %}, você poderá revisar o uso total de estações, bem como o detalhamento por organização dos committers. Para obter mais informações, consulte "[Gerenciar {% data variables.product.prodname_GH_advanced_security %} para a sua empresa](/admin/advanced-security)".{% endif %}

{% endif %}
{% ifversion ghec %}
## Viewing the last license sync date

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Enterprise licensing** (Licenciamento Empresarial). ![Aba "Licenciamento empresarial" na barra lateral de configurações da conta corporativa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. To identify when the last license sync occurred, under "Enterprise Server instances", look for timestamps next to usage uploaded or synced events.
   - "Server usage uploaded" indicates license usage between environments was manually updated when a {% data variables.product.prodname_ghe_server %} license file was uploaded.
   - "{% data variables.product.prodname_github_connect %} server usage synced" indicates license usage between environments was automatically updated.
   - "{% data variables.product.prodname_github_connect %} server usage never synced" indicates that {% data variables.product.prodname_github_connect %} is configured, but license usage between environments has never updated successfully.

{% endif %}
