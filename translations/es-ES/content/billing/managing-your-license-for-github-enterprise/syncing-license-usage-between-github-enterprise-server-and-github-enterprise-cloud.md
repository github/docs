---
title: Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud
intro: 'You can sync license usage from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} to view all license usage across your enterprise in one place and ensure that people with accounts in both environments only consume one user license.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
---

## About synchronization of license usage

{% data reusables.enterprise-licensing.about-license-sync %}

If you allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can sync license usage between your enterprise accounts automatically. Automatic synchronization ensures that you see up-to-date license details on {% data variables.product.prodname_dotcom_the_website %}. If you don't want to allow {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}, you can manually sync license usage by uploading a file from {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}.

For more information about licenses and usage for {% data variables.product.prodname_ghe_server %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

## Automatically syncing license usage

Puedes utilizar {% data variables.product.prodname_github_connect %} para sincronizar de forma automática el conteo y el uso de la licencia de usuario entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta "[Habilitar la sincronización de licencia de usuario entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)."

## Manually syncing license usage

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
