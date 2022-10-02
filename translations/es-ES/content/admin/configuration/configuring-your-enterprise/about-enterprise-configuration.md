---
title: Acerca de la configuración empresarial
intro: 'Puedes usar el panel de administración del sitio {% ifversion ghes %}, {% data variables.enterprise.management_console %}, y el shell administrativo (SSH) {% elsif ghae %} y la configuración de la empresa o ponerse en contacto con el soporte{% endif %} para administrar la empresa.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112890'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Para más información, vea "[Panel de administración del sitio](/admin/configuration/site-admin-dashboard)".

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Para más información, vea "[Acceso a la consola de administración](/admin/configuration/accessing-the-management-console)".

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Para más información, vea "[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
{% endif %}

{% ifversion ghae %} Para empezar a trabajar con {% data variables.product.product_name %}, primero debe implementar {% data variables.product.product_name %}. Para más información, vea "[Implementación de {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae)".

La primera vez que accedes a tu empresa, completarás una configuración inicial para obtener {% data variables.product.product_name %} listo para utilizarse. La configuración inicial incluye la conexión de tu empresa con un proveedor de identidad (IdP), autenticarte con el SSO de SAML, configurar políticas para repositorios y organizaciones en tu empresa y configurar el SMTP para el correo electrónico externo. Para más información, vea "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Posteriormente, puedes utilizar el panel de administrador de sitio y la configuración empresarial para seguir configurando tu empresa, administrar usuarios, organizaciones y repositorios, y para configurar políticas que reducen los riesgos e incrementan la calidad. 

Todas las empresas se configuran con aislamiento de subdominios y compatibilidad con TLS 1.2 y superior únicamente para el tráfico cifrado.
{% endif %}

## Información adicional

- "[Administración de usuarios, organizaciones y repositorios](/admin/user-management)"
- "[Configuración de directivas para la empresa](/admin/policies)"
