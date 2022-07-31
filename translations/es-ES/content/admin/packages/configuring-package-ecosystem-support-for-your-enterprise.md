---
title: Configurar la compatibilidad del ecosistema de paquetes para tu empresa
intro: 'Puedes configurar el {% data variables.product.prodname_registry %} para tu empresa si habilitas o inhabilitas globalmente los ecosistemas de paquetes individuales en ella, incluyendo {% ifversion ghes > 3.4 %}el {% data variables.product.prodname_container_registry %}, {% endif %} Docker y npm. Aprende sobre otros requisitos de configuración para hacer compatibles algunos ecosistemas de paquetes específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configurar los ecosistemas de paquetes
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## Habilitar o inhabilitar los ecosistemas de paquetes individuales

Para prevenir que los paquetes nuevos se carguen, puedes configurar un ecosistema que hayas habilitado previamente como **Solo lectura**, mientras aún permites que los paquetes existentes se descarguen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Debajo de "Alternación de ecosistema", para cada tipo de paquete, selecciona **Enabled**, **Read-Only**, o **Disabled**.
   {%- ifversion ghes > 3.4 %}{% note -%}
**Nota**: El aislamiento de subdominios debe estar habilitado para alternar las
   opciones del {% data variables.product.prodname_container_registry %}.
   {%- endnote %}{%- endif %}{%- ifversion ghes %}
  ![Alternación de ecosistemas](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %}
![Ecosystem toggles](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Conectarse al registro oficial de npm

Si habilitaste los paquetes de npm en tu empresa y quieres permitir el acceso tanto al registro oficial de npm como al registro de npm del {% data variables.product.prodname_registry %}, entonces debes realizar algunas configuraciones adicionales.

El {% data variables.product.prodname_registry %} utiliza un proxy transparente para el tráfico de red que se conecta al registro oficial de npm en `registry.npmjs.com`. El proxy se habilita predeterminadamente y no puede inhabilitarse.

Para permitir las conexiones al registro de npm, deberás configurar las ACLs de red que permitan que {% data variables.product.prodname_ghe_server %} envíe tráfico HTTPS a `registry.npmjs.com` por el puerto 443:

| Origen                                             | Destino              | Port (Puerto) | Tipo  |
| -------------------------------------------------- | -------------------- | ------------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443       | HTTPS |

Nota que las conexiones a `registry.npmjs.com` atraviesan por la red de Cloudflare y, subsecuentemente, no se conectan a una IP estática única; en vez de esto, se hace una conexión a una dirección IP dentro de los rangos CIDR que se listan aquí: https://www.cloudflare.com/ips/.

Si quieres habilitar las fuentes ascendentes de npm, selecciona `Enabled` para `npm upstreaming`.

{% endif %}

## Pasos siguientes

Como paso siguiente, te recomendamos verificar si necesitas actualizar o cargar un certificado TLS para tu URL de hospedaje de paquetes. Para obtener más información, consulta la sección "[Iniciar con GitHub Packages para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
