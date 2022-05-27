---
title: Ver el uso de licencia para GitHub Enterprise
intro: 'Puedes ver el uso de licencia de tu empresa en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Ver el uso de licencia
---

## Acerca del uso de licencia para {% data variables.product.prodname_enterprise %}

{% ifversion ghec %}

Puedes ver el uso de licencia de tu cuenta empresarial de {% data variables.product.prodname_ghe_cloud %} en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %}

{% elsif ghes %}

Puedes ver el uso de licencia de {% data variables.product.prodname_ghe_server %} en {% data variables.product.product_location %}.

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} For more information about the display of license usage on {% data variables.product.prodname_dotcom_the_website %} and identifying when the last license sync occurred, see "[Viewing license usage for {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To learn more about the license data associated with your enterprise account and how the number of consumed user seats are calculated, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

{% endif %}

## Ver el uso de licencia en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Puedes ver el uso de licencia para tu empresa y descargar un archivo con los detalles de esta. If you're not seeing expected license counts in this report, it's possible that the subscriber’s assigned {% data variables.product.prodname_vs %} subscription email address and {% data variables.product.prodname_dotcom_the_website %} email address aren't exactly the same. For further information, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.
    - To download the consumed license report as a CSV file, in the top right, click {% octicon "download" aria-label="The download icon" %}. For more information about reviewing the data in this report, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."
    - Si tu licencia incluye la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas. For more information, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.{% ifversion ghes %}
    - To download the consumed license report as a JSON file, in the top right under "Quick links", choose **Export license usage**. For more information about reviewing the data in this report, see "[Troubleshooting license usage for GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)."
    - Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas así como un desglose de confirmantes por organización. Para obtener más información, consulta la sección "[Administrar la {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security)".{% endif %}

{% endif %}
{% ifversion ghec %}
## Viewing the last license sync date

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. To identify when the last license sync occurred, under "Enterprise Server instances", look for timestamps next to usage uploaded or synced events.
   - "Server usage uploaded" indicates license usage between environments was manually updated when a {% data variables.product.prodname_ghe_server %} license file was uploaded.
   - "{% data variables.product.prodname_github_connect %} server usage synced" indicates license usage between environments was automatically updated.
   - "{% data variables.product.prodname_github_connect %} server usage never synced" indicates that {% data variables.product.prodname_github_connect %} is configured, but license usage between environments has never updated successfully.

{% endif %}
