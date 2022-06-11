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

{% data reusables.enterprise-licensing.you-can-sync-for-a-combined-view %} Para obtener más información sobre la forma en la que se muestra el uso de licencia en {% data variables.product.prodname_dotcom_the_website %} e identificar cuándo ocurrió la última sincronización de licencia, consutla la sección "[Ver el uso de licencia para {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.

Para aprender más sobre los datos de licencia asociados con tu cuenta empresarial y de cómo se calcula la cantidad de plazas de usuario consumidas, consulta la sección "[Solucionar problemas de uso de licencia para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".

{% endif %}

## Ver el uso de licencia en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Puedes ver el uso de licencia para tu empresa y descargar un archivo con los detalles de esta. Si no estás viendo los conteos de licencia esperados en este reporte, es posible que la dirección de correo electrónico de {% data variables.product.prodname_vs %} para suscripciones que se le asignó al usuario y la de {% data variables.product.prodname_dotcom_the_website %} no sean exactamente la misma. Para obtener más información, consulta la sección "[Solucionar problemas de uso de licencia para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.
    - Para descargar el reporte de licencias consumidas como archivo de CSV, en la parte superior derecha, haz clic en {% octicon "download" aria-label="The download icon" %}. Para obtener más información sobre cómo recuperar los datos en este reporte, consulta la sección "[Solucionar problemas del uso de licencias para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Si tu licencia incluye la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas. Para obtener más información, consulta la sección "[Ver tu uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Revisa tus licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.{% ifversion ghes %}
    - Para descargar el reporte de licencias consumidas como archivo JSON, en la parte superior derecha, debajo de "Enlaces rápidos", elige **Exportar uso de licencia**. Para obtener más información sobre cómo recuperar los datos en este reporte, consulta la sección "[Solucionar problemas del uso de licencias para GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas así como un desglose de confirmantes por organización. Para obtener más información, consulta la sección "[Administrar la {% data variables.product.prodname_GH_advanced_security %} para tu empresa](/admin/advanced-security)".{% endif %}

{% endif %}
{% ifversion ghec %}
## Ver la última fecha de sincronización de licencias

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Para identificar cuándo ocurrió la última sincronización de licencias, debajo de "Instancias de Enterprise Server", busca las marcas de tiempo junto a los eventos de uso cargados o sincronizados.
   - El mensaje "Uso de servidor cargado" indica que el uso de licencia entre los ambientes se actualizó manualmente cuando se cargó un archivo de licencia de {% data variables.product.prodname_ghe_server %}.
   - El mensaje "Se sincronizó el uso de servidor de {% data variables.product.prodname_github_connect %}" indica que se actualizó un uso de licencia entre los ambientes.
   - El mensaje "Jamás se ha sincronizado el uso de servidor de {% data variables.product.prodname_github_connect %}" indica que se configuró {% data variables.product.prodname_github_connect %}, pero el uso de licencias entre los ambientes jamás se ha actualizado con éxito.

{% endif %}
