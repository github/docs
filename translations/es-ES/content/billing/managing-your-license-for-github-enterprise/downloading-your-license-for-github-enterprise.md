---
title: Descargar tu licencia de GitHub Enterprise
intro: 'Puedes descargar una copia de tu archivo de licencia para {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Descargar tu licencia
---

## Acerca de los archivos de licencia para {% data variables.product.prodname_enterprise %}

Después de comprar o mejorar una licencia de {% data variables.product.prodname_enterprise %} desde {% data variables.contact.contact_enterprise_sales %}, debes descargar tu archivo de licencia nuevo. Para obtener más información sobre las licencias para {% data variables.product.prodname_enterprise %}, consulta la sección "[Acerca de las licencias de {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)".

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Descargar tu licencia desde {% data variables.product.prodname_dotcom_the_website %}

Debes tener una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} para descargar tu licencia de {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Acerca de las cuentas empresariales](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% elsif ghec %}".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, da clic en **Licenciamiento empresarial**. ![Pestaña de "Licencias empresariales" en la barra lateral de configuración para la cuenta empresarial](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Debajo de "instancias de Enterprise Server", da clic en {% octicon "download" aria-label="The download icon" %} para descargar tu archivo de licencia. ![Descargar la licencia de GitHub Enterprise Server](/assets/images/help/business-accounts/download-ghes-license.png)

Después de que descargas tu archivo de licencia, puedes cargar el archivo a {% data variables.product.product_location_enterprise %} para validar tu aplicación. Para obtener más información, consulta la sección {% ifversion ghec %}"[Cargar una licencia nueva a {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Cargar una licencia nueva a {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

## Descargar tu licencia si no tienes una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}

Si no tienes una cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %} o si no estás seguro de ello, podrías descarar tu licencia de {% data variables.product.prodname_ghe_server %} desde el [sitio web de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/download).

Si tienes cualquier pregunta sobre cómo descargar tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.
