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

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

Para garantizar que ves los detalles actualizados de la licencia en {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar el uso de licencias entre los ambientes automáticamente, utilizando {% data variables.product.prodname_github_connect %}. Para obtener más información sobre {% data variables.product.prodname_github_connect %}, consulta la sección "[Acerca de {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}".{% endif %}

Si no quieres habilitar {% data variables.product.prodname_github_connect %}, puedes sincronizar el uso de licencia manualmente si subes un archivo desde {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Sincronizar el uso de licencias automáticamente

Puedes utilizar {% data variables.product.prodname_github_connect %} para sincronizar automáticamente el conteo de licencias de usuario y el uso entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %} semanalmente. Para obtener más información, consulta la sección "[Habilitar la sincronización automática de licencias de usuario para tu empresa]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}{% elsif ghes %}".{% endif %}

{% ifversion ghec or ghes > 3.4 %}
Después de que habilites {% data variables.product.prodname_github_connect %}, los datos de licencia se sincronizarán automáticamente cada semana. También puedes sincronizar tus datos de licencia manualmente en cualquier momento si activas un job de sincronización de licencia.

### Activar un job de sincronización de licencia

1. Inicia sesión en tu instancia de {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Debajo de "Sincronización de licencia", haz clic en {% octicon "sync" aria-label="The Sync icon" %} **Sincronizar ahora**. ![Captura de pantalla del botón "Sincronizar ahora" en la sección de sincronización de licencia](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Cargar el uso de licencia de GitHub Enterprise Server manualmente

Puedes descargar un archivo JSON desde {% data variables.product.prodname_ghe_server %} y subir el archivo a {% data variables.product.prodname_ghe_cloud %} para sincronizar de forma manual el uso de la licencia de usuario entre dos implementaciones.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Dentro de "Quick links (Vínculos rápidos)", para descargar un archivo que contiene tu uso de licencia actual en {% data variables.product.prodname_ghe_server %}, haz clic en **Export license usage (Exportar uso de licencia)**. ![Exporta el vínculo de uso de la licencia](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
10. Debajo de "Instancias de Enterprise Server", da clic en **Agregar uso del servidor**. ![Sube el vínculo de uso de los servidores de GitHub Enterprise](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Sube el archivo JSON que descargaste de {% data variables.product.prodname_ghe_server %}. ![Arrastra y suelta o selecciona un archivo para cargar](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
