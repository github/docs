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

La configuración del nombre de host en la {% data variables.enterprise.management_console %} debe ajustarse a un nombre de dominio adecuado y que cumpla con todos los requisitos (FQDN) el cual se pueda resolver en la internet o dentro de tu red interna. Por ejemplo, tu ajuste de nombre de host podría ser `github.companyname.com.` Las solicitudes web y de la API se redireccionarán automáticamente al nombre de host que se configuró en la {% data variables.enterprise.management_console %}. Toma en cuenta que `localhost` no es un ajuste válido de nombre de host.

Después de que configuras un nombre de host, puedes habilitar el aislamiento de subdominios para incrementar la seguridad de {% data variables.product.product_location %} aún más. Para obtener más información, consulta "[Habilitar el aislamiento de subdominio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)."

Para obtener más información sobre los tipos de nombres de host compatibles, consulta la [Sección 2.1 del RFC de HTTP](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Escribe el nombre del host que quieres establecer para {% data variables.product.product_location %}. ![Campo para establecer un nombre del host](/assets/images/enterprise/management-console/hostname-field.png)
5. Para probar las configuraciones de DNS y SSL para el nombre del host nuevo, haz clic en **Configuraciones del dominio de prueba**. ![Botón Test domain settings (Probar configuraciones del dominio)](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

Para ayudarte a mitigar diversas vulnerabilidades de scripting entre sitios, te recomendamos que habilites el aislamiento de subdominios para {% data variables.product.product_location %} después de que configures un nombre de host. Para obtener más información, consulta "[Habilitar el aislamiento de subdominio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)."
