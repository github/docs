---
title: About licenses for GitHub Enterprise
intro: '{% ifversion fpt %}If you purchase {% data variables.product.prodname_enterprise %} and use {% data variables.product.prodname_ghe_server %}, each{% elsif ghes %}Each{% endif %} {% data variables.product.prodname_ghe_server %} instance requires a license file to validate and unlock the application.'
versions:
  fpt: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
---

## About license files for {% data variables.product.prodname_enterprise %}

{% ifversion fpt %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

When you purchase or renew {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} provides a license file {% ifversion fpt %}for your deployments of {% data variables.product.prodname_ghe_server %}{% elsif ghes %}for {% data variables.product.product_location_enterprise %}{% endif %}. A license file has an expiration date and controls the number of people who can use {% data variables.product.product_location_enterprise %}. After you download and install {% data variables.product.prodname_ghe_server %}, you must upload the license file to unlock the application for you to use.

For more information about downloading your license file, see "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)." For more information about uploading your license file, see {% ifversion fpt %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

If your license expires, you won't be able to access {% data variables.product.prodname_ghe_server %} via a web browser or Git. Si es necesario, podrás usar herramientas de línea de comando para hacer un respaldo de seguridad de todos tus datos. Para obtener más información, consulta "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)" Si tienes cualquier duda sobre el renovamiento de tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.

## About synchronization of license usage for {% data variables.product.prodname_enterprise %}

{% ifversion ghes %}

{% data reusables.enterprise.about-deployment-methods %}

{% endif %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulta la sección {% ifversion fpt %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %}

## Leer más

- "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- [{% data variables.product.prodname_enterprise %} Releases](https://enterprise.github.com/releases/) website
- "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/admin/installation/setting-up-a-github-enterprise-server-instance)"
