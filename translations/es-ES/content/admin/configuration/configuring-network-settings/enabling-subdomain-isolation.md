---
title: Habilitar el aislamiento de subdominio
intro: 'Puedes configurar el aislamiento de subdominio para separar en forma segura el contenido suministrado por el usuario de las demás partes de tu aparato {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193101'
---
## Acerca del aislamiento de subdominio

El aislamiento de subdominio mitiga las vulnerabilidades del estilo cross-site scripting y otras vulnerabilidades relacionadas. Para más información, vea "[Scripting entre sitios](http://en.wikipedia.org/wiki/Cross-site_scripting)" en Wikipedia. Se recomienda encarecidamente habilitar el aislamiento de subdominios en {% data variables.location.product_location %}.

Cuando el aislamiento de subdominio está habilitado, {% data variables.product.prodname_ghe_server %} reemplaza varias rutas con subdominios. Después de habilitar el aislamiento de subdominios, los intentos para acceder a las rutas anteriores para encontrar algo del contenido proporcionado por los usuarios, como `http(s)://HOSTNAME/raw/`, podría devolver errores de tipo `404`.

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| Ruta sin aislamiento de subdominio  | Ruta con aislamiento de subdominio   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | Not supported | `https://containers.HOSTNAME/` | {%- endif %}

## Prerrequisitos

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Antes de que habilites el aislamiento de subdominio, debes configurar tus ajustes de red para el nuevo dominio.

- Especifica un nombre de dominio válido como tu nombre del host, en lugar de una dirección IP. Para más información, vea "[Configuración de un nombre de host](/enterprise/admin/guides/installation/configuring-a-hostname)".

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Configura un registro de Sistema de nombres de dominio (DNS) de carácter comodín o registros DNS individuales para los subdominios detallados más arriba. Se recomienda crear un registro A para `*.HOSTNAME`que apunte a la dirección IP del servidor, para no tener que crear varios registros para cada subdominio.
- Obtenga un certificado de seguridad de la capa de transporte (TLS) comodín para `*.HOSTNAME` con un nombre alternativo del firmante (SAN) para `HOSTNAME` y el dominio comodín `*.HOSTNAME`. Por ejemplo, si el nombre de host es `github.octoinc.com`, obtenga un certificado con el valor Nombre común establecido en `*.github.octoinc.com` y un valor SAN establecido en `github.octoinc.com` y `*.github.octoinc.com`.
- Habilita TLS en tu aparato. Para más información, vea "[Configuración de TLS](/enterprise/admin/guides/installation/configuring-tls/)".

## Habilitar el aislamiento de subdominio

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Seleccione **Aislamiento de subdominios (recomendado)** .
  ![Casilla para habilitar el aislamiento de subdominios](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
