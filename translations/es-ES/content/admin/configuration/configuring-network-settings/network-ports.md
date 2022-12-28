---
title: Puertos de red
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Abre los puertos de red de forma selectiva en base a los servicios de red que necesitas exponer a los administradores, usuarios finales y apoyo de correo electrónico.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160660'
---
## Puertos administrativos

En algunos puertos administrativos es necesario configurar {% data variables.location.product_location %} y ejecutar determinadas funciones. No se requieren puertos administrativos para el uso de la aplicación básica por parte de los usuarios finales.

| Port | Servicio | Descripción |
|---|---|---|
| 8443 | HTTPS | {% data variables.enterprise.management_console %} segura basada en la web. Necesario para la instalación y la configuración básicas. |
| 8080 | HTTP | {% data variables.enterprise.management_console %} basada en la web de texto simple. No se requiere a menos de que el TLS se inhabilite manualmente. |
| 122 | SSH | Acceso de shell para {% data variables.location.product_location %}. Se necesita abierto a las conexiones entrantes entre todos los nodos en una configuración de disponibilidad alta. El puerto SSH predeterminado (22) está destinado al tráfico de red de la aplicación SSH y Git. |
| 1194/UDP | VPN | Túnel de red de replicación segura en la configuración de alta disponibilidad. Se requiere abierto a las comunicaciones entre todos los nodos en la configuración.|
| 123/UDP| NTP | Se requiere para operar el protocolo de tiempo. |
| 161/UDP | SNMP | Se requiere para operar el protocolo de revisión de red. |

## Puertos de la aplicación para usuarios finales

Los puertos de la aplicación permiten que los usuarios finales accedan a Git y a las aplicaciones web.

| Port | Servicio | Descripción |
|---|---|---|
| 443 | HTTPS | Acceso a la aplicación web y a Git por HTTPS. |
| 80 | HTTP | Acceso a la aplicación web. Todas las solicitudes se redirigen al puerto HTTPS si se configura el TLS. |
| 22 | SSH | Acceso a Git por SSH. Admite las operaciones clonar, extraer y subir a los repositorios privados y públicos. |
| 9418 | Git | El puerto de protocolo Git admite las operaciones clonar y extraer a los repositorios públicos con comunicación de red desencriptada. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## Puertos de correo electrónico

Los puertos de correo electrónico deben ser accesibles directamente o por medio de la retransmisión del correo electrónico entrante para los usuarios finales.

| Port | Servicio | Descripción |
|---|---|---|
| 25 | SMTP | Soporte para SMTP con encriptación (STARTTLS). |

## Puertos de las {% data variables.product.prodname_actions %}

Los puertos de las {% data variables.product.prodname_actions %} deben ser accesibles para que los ejecutores auto-hospedados se conecten a {% data variables.location.product_location %}. Para más información, consulte [Seguridad del ejecutor autohospedado con repositorios públicos](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server).

| Port | Servicio | Descripción |
|---|---|---|
| 443 | HTTPS | Los ejecutores auto-hospedados se conectan a {% data variables.location.product_location %} para recibir asignaciones de jobs y para descargar versiones nuevas de la aplicación ejecutora. Requerido si se configura TLS.
| 80 | HTTP | Los ejecutores auto-hospedados se conectan a {% data variables.location.product_location %} para recibir asignaciones de jobs y para descargar versiones nuevas de la aplicación ejecutora. Requerido si no se configura TLS.

Si habilitas el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_actions %} siempre buscará primero una acción en {% data variables.location.product_location %}, a través de estos puertos, antes de revisar en {% data variables.product.prodname_dotcom_the_website %}. Para más información, vea "[Habilitación del acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} mediante {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)".

## puertos {% data variables.product.prodname_github_connect %}

Si habilita los datos {% data variables.product.prodname_github_connect %}, la conexión entre los datos {% data variables.product.product_name %} y {% data variables.product.prodname_dotcom_the_website %} usa HTTPS a través de los puertos 443 o 80 y se requiere TLS. Para más información, vea "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

## Información adicional

- "[Configuración de TLS](/admin/configuration/configuring-network-settings/configuring-tls)"
