---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.product.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.product.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.product.product_location_enterprise %}

1. Inicia sesión en {% data variables.product.product_location_enterprise %} como administrador de sitio.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Dentro de "Quick links (Vínculos rápidos)", haz clic en **Update license (Actualizar licencia)**. ![Actualizar enlace de la licencia](/assets/images/enterprise/business-accounts/update-license-link.png)
1. Para seleccionar tu licencia, da clic en **Archivo de licencia**, o arrastra tu archivo de licencia a **Archivo de licencia**. ![Sube el archivo de licencia](/assets/images/enterprise/management-console/upload-license.png)
1. Da clic en **Cargar**. ![Comenzar carga](/assets/images/enterprise/management-console/begin-upload.png)

{% ifversion ghes < 3.0 %}

If the web UI for {% data variables.product.prodname_ghe_server %} doesn't reflect your updated license immediately, see "[Troubleshooting](#troubleshooting)."

## Solución de problemas

En algunos casos, la IU web de {% data variables.product.prodname_ghe_server %} podría no reflejar tu licencia nueva de inmediato. Puedes forzar al sistema para que detecte la licencia si restableces dos servicios de sistema.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Restablece los servicios para la autenticación de Git y el servidor HTTP.

    {% warning %}

    **Advertencia**: El ejecutar el siguiente comando dará como resultado algunos minutos de inactividad del servicio de cara al usuario en {% data variables.product.prodname_ghe_server %}. Ten cuidado al ejecutar el comando.

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. Después de que {% data variables.product.prodname_ghe_server %} te regrese al prompt, intenta acceder a {% data variables.product.prodname_ghe_server %} nuevamente a través de la línea de comandos o IU.

{% endif %}
