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

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} Para obtener más información sobre cómo se muestra el uso de licencia en {% data variables.product.prodname_dotcom_the_website %}, consulta la sección "[Ver el uso de licencia para {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Ver el uso de licencia en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Puedes ver el uso de licencia para tu empresa y descargar un archivo con los detalles de esta.

{% data reusables.billing.license-statuses %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.
    - Si tu licencia incluye la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.{% ifversion ghes %}
    - Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas así como un desglose de confirmantes por organización. Para obtener más información, consulta la sección "[Administrar la {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security)".{% endif %}

{% endif %}
