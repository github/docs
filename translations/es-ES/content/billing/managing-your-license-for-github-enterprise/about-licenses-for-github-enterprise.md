---
title: Acerca de las licencias para GitHub Enterprise
intro: '{% ifversion ghec %}If you deploy {% data variables.product.prodname_ghe_server %} in addition to using {% data variables.product.prodname_ghe_cloud %}, you{% else %}You{% endif %} can synchronize your license usage between{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} deployments, and use a license file to unlock each {% data variables.product.prodname_ghe_server %} instance.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: Acerca de las licencias
---

## Acerca del licenciamiento para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you can synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} deployments.

In order to use a {% data variables.product.prodname_ghe_server %} instance, you must upload a license file that {% data variables.product.company_short %} provides when you purchase, renew, or add user licenses to {% data variables.product.prodname_enterprise %}.

## Acerca de la sincronización de uso de licencias para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} For more information, see "[Syncing license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## Acerca de los archivos de licencia para {% data variables.product.prodname_enterprise %}

Cuando compras o renuevas tu suscripción de {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} te proporciona un archivo de licencia {% ifversion ghec %}para tus despliegues de {% data variables.product.prodname_ghe_server %}{% elsif ghes %} para {% data variables.product.product_location_enterprise %}{% endif %}. Un archivo de licencia tiene una fecha de vencimiento y controla la cantidad de personas que pueden utilizar {% data variables.product.product_location_enterprise %}. Después de que descargas e instalas {% data variables.product.prodname_ghe_server %}, debes cargar un archivo de licencia para desbloquear la aplicación para tu uso.

Para obtener más información sobre cómo descargar tu archivo de licencia, consulta la sección "[Descargar tu licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)".

Para obtener más información acerca de subir tu archivo de licencias, consulta la sección {% ifversion ghec %}"[Cargar una licencia nueva en {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Cargar una licencia nueva en {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

Si tu licencia vence, no podrás acceder a {% data variables.product.prodname_ghe_server %} a través del buscador web o de Git. Si es necesario, podrás usar herramientas de línea de comando para hacer un respaldo de seguridad de todos tus datos. Para obtener más información, consulta la sección {% ifversion ghec %}"[Configurar respaldos en tu aplicativo]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" en la documentación de {% data variables.product.prodname_ghe_server %} {% elsif ghes %}"[Configurar respaldos en tu aplicativo](/admin/guides/installation/configuring-backups-on-your-appliance)". {% endif %}

Si tienes cualquier duda sobre el renovamiento de tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.

## Leer más

- "[Acerca de la facturación para tu empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Sitio web de [Lanzamientos de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- "[Configurar una instancia de {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)"
