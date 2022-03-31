---
title: Acerca de las licencias para GitHub Enterprise
intro: '{% ifversion ghec %}Si despliegas {% data variables.product.prodname_ghe_server %} adicionalmente a utilizar {% data variables.product.prodname_ghe_cloud %}, cada{% elsif ghes %}Cada{% endif %} instancia de {% data variables.product.prodname_ghe_server %} requerirá un archivo de licencia para validar y desbloquear la aplicación.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Acerca de las licencias
---

## Acerca de los archivos de licencia para {% data variables.product.prodname_enterprise %}

{% ifversion ghec %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

Cuando compras o renuevas tu suscripción de {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} te proporciona un archivo de licencia {% ifversion ghec %}para tus despliegues de {% data variables.product.prodname_ghe_server %}{% elsif ghes %} para {% data variables.product.product_location_enterprise %}{% endif %}. Un archivo de licencia tiene una fecha de vencimiento y controla la cantidad de personas que pueden utilizar {% data variables.product.product_location_enterprise %}. Después de que descargas e instalas {% data variables.product.prodname_ghe_server %}, debes cargar un archivo de licencia para desbloquear la aplicación para tu uso.

Para obtener más información sobre cómo descargar tu archivo de licencia, consulta la sección "[Descargar tu licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)". Para obtener más información acerca de subir tu archivo de licencias, consulta la sección {% ifversion ghec %}"[Cargar una licencia nueva en {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Cargar una licencia nueva en {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

Si tu licencia vence, no podrás acceder a {% data variables.product.prodname_ghe_server %} a través del buscador web o de Git. Si es necesario, podrás usar herramientas de línea de comando para hacer un respaldo de seguridad de todos tus datos. Para obtener más información, consulta la sección {% ifversion ghec %}"[Configurar respaldos en tu aplicativo]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" en la documentación de {% data variables.product.prodname_ghe_server %} {% elsif ghes %}"[Configurar respaldos en tu aplicativo](/admin/guides/installation/configuring-backups-on-your-appliance)". {% endif %}

Si tienes cualquier duda sobre el renovamiento de tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.

## Acerca de la sincronización de uso de licencias para {% data variables.product.prodname_enterprise %}

{% ifversion ghes %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulta la sección {% ifversion ghec %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

## Leer más

- "[Acerca de la facturación para tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Sitio web de [Lanzamientos de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- "[Configurar una instancia de {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)"
