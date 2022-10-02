---
title: Configurar la compatibilidad del ecosistema de paquetes para tu empresa
intro: 'Puedes configurar {% data variables.product.prodname_registry %} para la empresa habilitando o deshabilitando globalmente ecosistemas de paquetes individuales en la empresa, incluido {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker y npm. Aprende sobre otros requisitos de configuración para hacer compatibles algunos ecosistemas de paquetes específicos.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062550'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Habilitar o inhabilitar los ecosistemas de paquetes individuales

Para impedir que se carguen paquetes nuevos, puede configurar un ecosistema establecido previamente como de **Solo lectura**, mientras todavía se permita que se descarguen los paquetes existentes.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. En "Alternación de ecosistema", para cada tipo de paquete, selecciona **Habilitado**, **Solo lectura** o **Deshabilitado**.
   {%- ifversion ghes > 3.4 %}{% note -%} **Nota**: El aislamiento de subdominio debe estar habilitado para alternar las opciones de {% data variables.product.prodname_container_registry %}.
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![Alternaciones de ecosistema](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![Alternaciones de ecosistema](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Conectarse al registro oficial de npm

Si habilitaste los paquetes de npm en tu empresa y quieres permitir el acceso tanto al registro oficial de npm como al registro de npm del {% data variables.product.prodname_registry %}, entonces debes realizar algunas configuraciones adicionales.

En {% data variables.product.prodname_registry %} se usa un proxy transparente para el tráfico de red que se conecta al registro npm oficial en `registry.npmjs.com`. El proxy se habilita predeterminadamente y no puede inhabilitarse.

Para permitir las conexiones al registro npm, tendrá que configurar ACL de red que permitan que {% data variables.product.prodname_ghe_server %} envíe tráfico HTTPS a `registry.npmjs.com` por el puerto 443:

| Source | Destination | Port | Tipo |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Tenga en cuenta que las conexiones a `registry.npmjs.com` recorren la red de Cloudflare y, por tanto, no se conectan a una IP estática única; en su lugar, se establece una conexión a una dirección IP dentro de los rangos CIDR enumerados aquí: https://www.cloudflare.com/ips/.

Si quiere habilitar los orígenes ascendentes de npm, seleccione `Enabled` para `npm upstreaming`.

{% endif %}

## Pasos siguientes

Como paso siguiente, te recomendamos verificar si necesitas actualizar o cargar un certificado TLS para tu URL de hospedaje de paquetes. Para más información, vea "[Introducción a los paquetes de GitHub para la empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
