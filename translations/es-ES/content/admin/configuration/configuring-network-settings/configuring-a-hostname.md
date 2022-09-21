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
ms.openlocfilehash: a12955707c3ebcfbb65e5be8053ea0b62bc82072
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147723237'
---
Si configura un nombre del host en lugar de una dirección IP codificada de forma rígida, podrá cambiar el hardware físico que ejecuta {% data variables.product.product_location %} sin que los usuarios ni el software cliente se vean afectados.

La configuración del nombre de host en la {% data variables.enterprise.management_console %} debe ajustarse a un nombre de dominio adecuado y que cumpla con todos los requisitos (FQDN) el cual se pueda resolver en la internet o dentro de tu red interna. Por ejemplo, el valor de nombre de host podría ser `github.companyname.com.`. Las solicitudes web y de API se redirigirán automáticamente al nombre de host configurado en la {% data variables.enterprise.management_console %}. Ten en cuenta que `localhost` no es una configuración válida de nombre de host. 

Los nombres de host deben tener menos de 63 caracteres según la [Sección 2.3.4 de la RFC de especificación de nombres](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) de dominio.

Después de que configuras un nombre de host, puedes habilitar el aislamiento de subdominios para incrementar la seguridad de {% data variables.product.product_location %} aún más. Para más información, vea "[Habilitación del aislamiento de subdominios](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".

Para más información sobre los tipos de nombre de host admitidos, vea la [Sección 2.1 de HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Escriba el nombre del host que quiera establecer para {% data variables.product.product_location %}.
  ![Campo para establecer un nombre del host](/assets/images/enterprise/management-console/hostname-field.png)
5. A fin de probar las configuraciones de DNS y SSL para el nuevo nombre de host, haga clic en **Probar configuraciones del dominio**.
  ![Botón para probar la configuración del dominio](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

Para ayudarte a mitigar diversas vulnerabilidades de scripting entre sitios, te recomendamos que habilites el aislamiento de subdominios para {% data variables.product.product_location %} después de que configures un nombre de host. Para más información, vea "[Habilitación del aislamiento de subdominios](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".
