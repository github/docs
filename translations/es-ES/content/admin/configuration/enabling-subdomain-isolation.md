---
title: Habilitar el aislamiento de subdominio
intro: 'Puedes configurar el aislamiento de subdominio para separar en forma segura el contenido suministrado por el usuario de las demás partes de tu aparato {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation/
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
versions:
  enterprise-server: '*'
topics:
  - empresa
---

### Acerca del aislamiento de subdominio

El aislamiento de subdominio mitiga las vulnerabilidades del estilo cross-site scripting y otras vulnerabilidades relacionadas. Para obtener más información, consulta "[Cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting)" en Wikipedia. Es altamente recomendable que habilites el aislamiento de subdominio en {% data variables.product.product_location %}.

Cuando el aislamiento de subdominio está habilitado, {% data variables.product.prodname_ghe_server %} reemplaza varias rutas con subdominios.

{% if currentVersion == "enterprise-server@2.22" %}
Para utilizar docker con
el {% data variables.product.prodname_registry %}, también debes habilitar el aislamiento de subdominios. Para obtener más información, consulta la sección "[Configurar Docker para utilizarlo con {% data variables.product.prodname_registry %}](/enterprise/{{ currentVersion }}/user/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)".

{% data reusables.package_registry.packages-ghes-release-stage %}
|
{% endif %}
| Ruta sin aislamiento de subdominio                                                                                                                                                                              | Ruta con aislamiento de subdominio                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `http(s)://HOSTNAME/assets/`                                                                                                                                                                                    | `http(s)://assets.HOSTNAME/`                                                                   |
| `http(s)://HOSTNAME/avatars/`                                                                                                                                                                                   | `http(s)://avatars.HOSTNAME/`                                                                  |
| `http(s)://HOSTNAME/codeload/`                                                                                                                                                                                  | `http(s)://codeload.HOSTNAME/`                                                                 |
| `http(s)://HOSTNAME/gist/`                                                                                                                                                                                      | `http(s)://gist.HOSTNAME/`                                                                     |
| `http(s)://HOSTNAME/media/`                                                                                                                                                                                     | `http(s)://media.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/pages/`                                                                                                                                                                                     | `http(s)://pages.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/raw/`                                                                                                                                                                                       | `http(s)://raw.HOSTNAME/`                                                                      |
| `http(s)://HOSTNAME/render/`                                                                                                                                                                                    | `http(s)://render.HOSTNAME/`                                                                   |
| `http(s)://HOSTNAME/reply/`                                                                                                                                                                                     | `http(s)://reply.HOSTNAME/`                                                                    |
| `http(s)://HOSTNAME/uploads/`                                                                                                                                                                                   | `http(s)://uploads.HOSTNAME/`     |{% if currentVersion == "enterprise-server@2.22" %}
| N/A, Docker, en conjunto con el {% data variables.product.prodname_registry %} no funcionará con el aislamiento de subdominios inhabilitado para el {% data variables.product.prodname_registry %} 2.22 beta. | `http(s)://docker.HOSTNAME/` |{% endif %}                                                      |{% if currentVersion ver_gt "enterprise-server@2.22" %}
| `https://HOSTNAME/_registry/docker/`                                                                                                                                                                            | `http(s)://docker.HOSTNAME/`{% endif %}{% if currentVersion ver_gt "enterprise-server@2.22" %}
| `https://HOSTNAME/_registry/npm/`                                                                                                                                                                               | `https://npm.HOSTNAME/`                                                                        |
| `https://HOSTNAME/_registry/rubygems/`                                                                                                                                                                          | `https://rubygems.HOSTNAME/`                                                                   |
| `https://HOSTNAME/_registry/maven/`                                                                                                                                                                             | `https://maven.HOSTNAME/`                                                                      |
| `https://HOSTNAME/_registry/nuget/`                                                                                                                                                                             | `https://nuget.HOSTNAME/`{% endif %}

### Prerrequisitos

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Antes de que habilites el aislamiento de subdominio, debes configurar tus ajustes de red para el nuevo dominio.

- Especifica un nombre de dominio válido como tu nombre del host, en lugar de una dirección IP. Para obtener más información, consulta "[Configurar un nombre del host](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-a-hostname)."

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Configura un registro de Sistema de nombres de dominio (DNS) de carácter comodín o registros DNS individuales para los subdominios detallados más arriba. Recomendamos crear un registro A para `*.HOSTNAME` que apunte a la dirección IP de tu servidor así no tienes que crear múltiples registros para cada subdominio.
- Obtén un certificado de Seguridad de la capa de transporte (TLS) de carácter comodín para `*.HOSTNAME` con un Nombre alternativo del firmante (SAN) para el `HOSTNAME` y para el `*.HOSTNAME` de dominio de carácter comodín. Por ejemplo, si tu nombre del host es `*.github.octoinc.com` obtén un certificado con el valor del nombre común configurado en `*.github.octoinc.com` y un valor SAN configurado en `github.octoinc.com` y `*.github.octoinc.com`.
- Habilita TLS en tu aparato. Para obtener más información, consulta "[Configurar TLS](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls/)."

### Habilitar el aislamiento de subdominio

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Selecciona **Subdomain isolation (recommended)** (Aislamiento de subdominio [recomendado]). ![Casilla de verificación para habilitar el aislamiento de subdominio](/assets/images/enterprise/management-console/subdomain-isolation.png)
{% data reusables.enterprise_management_console.save-settings %}
