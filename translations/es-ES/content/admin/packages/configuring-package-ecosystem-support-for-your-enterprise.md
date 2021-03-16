---
title: Configurar la compatibilidad del ecosistema de paquetes para tu empresa
intro: 'Puedes configurar el {% data variables.product.prodname_registry %} para tu empresa si habilitas o inhabilitas globalmente los ecosistemas de paquetes individuales en tu empresa, incluyendo Docker, RubyGems, npm, Apache Maven, Gradle o NuGet. Aprende sobre otros requisitos de configuración para hacer compatibles algunos ecosistemas de paquetes específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Habilitar o inhabilitar los ecosistemas de paquetes individuales

Para prevenir que los paquetes nuevos se carguen, puedes configurar un ecosistema que hayas habilitado previamente como **Solo lectura**, mientras aún permites que los paquetes existentes se descarguen.

{% if currentVersion == "enterprise-server@2.22" %}
Para utilizar
el {% data variables.product.prodname_registry %} con Docker, debes tener habilitado el aislamiento de subdominios para tu instancia. Para obtener más información, consulta la sección "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)".
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Debajo de "Alternación de ecosistema", para cada tipo de paquete, selecciona **Enabled**, **Read-Only**, o **Disabled**. ![Alternación de ecosistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png)
{% data reusables.enterprise_management_console.save-settings %}

{% if currentVersion == "enterprise-server@3.0" or currentVersion ver_gt "enterprise-server@3.0" %}
### Conectarse al registro oficial de NPM

Si habilitaste los paquetes de npm en tu empresa y quieres permitir el acceso al registro oficial de NPM así como al registro de npm del {% data variables.product.prodname_registry %}, entonces debes realizar algunos ajustes adicionales.

El {% data variables.product.prodname_registry %} utiliza un proxy transparente para el tráfico de red que conecta el registro oficial de NPM en `registry.npmjs.com`. El proxy se habilita predeterminadamente y no puede inhabilitarse.

Para permitir las conexiones de red en el registro de NPM, necesitarás configurar las ACL de red que permitan a {% data variables.product.prodname_ghe_server %} enviar el tráfico de HTTPS a `registry.npmjs.com` por el puerto 443:

| Origen                                             | Destino              | Port (Puerto) | Tipo  |
| -------------------------------------------------- | -------------------- | ------------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443       | HTTPS |

Nota que las conexiones a `registry.npmjs.com` atraviesan por la red de Cloudflare y, subsecuentemente, no se conectan a una IP estática única; en vez de esto, se hace una conexión a una dirección IP dentro de los rangos CIDR que se listan aquí: https://www.cloudflare.com/ips/.

{% endif %}

### Pasos siguientes

Como paso siguiente, te recomendamos verificar si necesitas actualizar o cargar un certificado TLS para tu URL de hospedaje de paquetes. Para obtener más información, consulta la sección "[Iniciar con GitHub Packages para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
