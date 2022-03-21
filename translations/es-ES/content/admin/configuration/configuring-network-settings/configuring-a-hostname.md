---
title: Configurar un nombre del host
intro: Recomendamos establecer un nombre del host para tu aparato en lugar de utilizar una dirección IP codificada de forma rígida.
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---

Si configuras un nombre del host en lugar de una dirección IP codificada de forma rígida, podrás cambiar el hardware físico que ejecuta {% data variables.product.product_location %} sin afectar a los usuarios o al software del cliente.

La configuración del nombre de host en la {% data variables.enterprise.management_console %} debe ajustarse a un nombre de dominio adecuado y que cumpla con todos los requisitos (FQDN) el cual se pueda resolver en la internet o dentro de tu red interna. For example, your hostname setting could be `github.companyname.com.` Web and API requests will automatically redirect to the hostname configured in the {% data variables.enterprise.management_console %}.

After you configure a hostname, you can enable subdomain isolation to further increase the security of {% data variables.product.product_location %}. Para obtener más información, consulta "[Habilitar el aislamiento de subdominio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)."

For more information on the supported hostname types, see [Section 2.1 of the HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Escribe el nombre del host que quieres establecer para {% data variables.product.product_location %}. ![Campo para establecer un nombre del host](/assets/images/enterprise/management-console/hostname-field.png)
5. Para probar las configuraciones de DNS y SSL para el nombre del host nuevo, haz clic en **Configuraciones del dominio de prueba**. ![Botón Test domain settings (Probar configuraciones del dominio)](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

To help mitigate various cross-site scripting vulnerabilities, we recommend that you enable subdomain isolation for {% data variables.product.product_location %} after you configure a hostname. Para obtener más información, consulta "[Habilitar el aislamiento de subdominio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation/)."
