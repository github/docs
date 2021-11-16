---
title: Sincornizar el uso de licencias entre GitHub Enterprise Server y GitHub Enterprise Cloud
intro: 'Puedes sincronizar el uso de licencias desde {% data variables.product.prodname_ghe_server %} hacia {% data variables.product.prodname_ghe_cloud %} para ver el uso de licencias a lo largo de tu empresa en un solo lugar y garantizar que las personas con cuentas en ambos ambientes solo consuman una licencia.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sincronizar el uso de licencia
---

## Acerca de la sincronización del uso de licencias

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location_enterprise %} to connect to your enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between the environments automatically. La sincronización automática garantiza que veas los detalles actualizados de la licencia en {% data variables.product.prodname_dotcom_the_website %}. Si no quieres permitir que {% data variables.product.product_location %} se conecte con {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar la licencia manualmente cargando un archivo de {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}.

Para obtener más información sobre las licencias y el uso de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Acerca de las licencias de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

## Sincronizar el uso de licencias automáticamente

Puedes utilizar {% data variables.product.prodname_github_connect %} para sincronizar de forma automática el conteo y el uso de la licencia de usuario entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Enabling automatic user license sync between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud){% ifversion ghec %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}."{% endif %}

## Sincronizar el uso de licencias manualmente

Puedes descargar un archivo JSON desde {% data variables.product.prodname_ghe_server %} y subir el archivo a {% data variables.product.prodname_ghe_cloud %} para sincronizar de forma manual el uso de la licencia de usuario entre dos implementaciones.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Dentro de "Quick links (Vínculos rápidos)", para descargar un archivo que contiene tu uso de licencia actual en {% data variables.product.prodname_ghe_server %}, haz clic en **Export license usage (Exportar uso de licencia)**. ![Exporta el vínculo de uso de la licencia](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Debajo de "Instancias de Enterprise Server", da clic en **Agregar uso del servidor**. ![Sube el vínculo de uso de los servidores de GitHub Enterprise](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Sube el archivo JSON que descargaste de {% data variables.product.prodname_ghe_server %}. ![Arrastra y suelta o selecciona un archivo para cargar](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
