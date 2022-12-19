---
title: Acerca de las licencias para GitHub Enterprise
intro: '{% ifversion ghec %}Si implementas {% data variables.product.prodname_ghe_server %} además de utilizar {% data variables.product.prodname_ghe_cloud %}, {% else %}puedes{% endif %} sincronizar el uso de licencias entre{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} implementaciones, y utilizar un archivo de licencia para desbloquear cada instancia de {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910515'
---
## Acerca de la licencia para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

A fin de asegurarte de que el mismo usuario no consume más de una licencia para varias implementaciones empresariales, puedes sincronizar el uso de licencias entre las implementaciones de {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}.

Para usar una instancia de {% data variables.product.prodname_ghe_server %}, debes cargar un archivo de licencia que {% data variables.product.company_short %} proporciona al comprar, renovar o agregar licencias de usuario a {% data variables.product.prodname_enterprise %}.

## Acerca de la sincronización de uso de licencias para {% data variables.product.prodname_enterprise %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulta "[Sincronizar el uso de licencias de usuario manualmente entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".

## Acerca de los archivos de licencia para {% data variables.product.prodname_enterprise %}

Cuando compra o renueva su suscripción de {% data variables.product.prodname_enterprise %}, {% data variables.product.company_short %} le proporciona un archivo de licencia {% ifversion ghec %}para las implementaciones de {% data variables.product.prodname_ghe_server %}{% elsif ghes %} para {% data variables.product.product_location_enterprise %}{% endif %}. Un archivo de licencia tiene una fecha de vencimiento y controla la cantidad de personas que pueden utilizar {% data variables.product.product_location_enterprise %}. Después de que descargas e instalas {% data variables.product.prodname_ghe_server %}, debes cargar un archivo de licencia para desbloquear la aplicación para tu uso.

Para obtener más información sobre la descarga del archivo de licencia, consulte "[Descarga de la licencia para {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)". 

Para obtener más información sobre la carga del archivo de licencia, consulte {% ifversion ghec %}"[Carga de una nueva licencia a {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Carga de una nueva licencia a {% data variables.product.prodname_ghe_server %}](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)".{% endif %}

Si tu licencia vence, no podrás acceder a {% data variables.product.prodname_ghe_server %} a través del buscador web o de Git. Si es necesario, podrás usar herramientas de línea de comando para hacer un respaldo de seguridad de todos tus datos. Para obtener más información, consulte {% ifversion ghec %}"[Configuración de copias de seguridad en el datos]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}"[Configuración de copias de seguridad en el dispositivo](/admin/guides/installation/configuring-backups-on-your-appliance)." {% endif %}

Si tienes cualquier duda sobre el renovamiento de tu licencia, contacta a {% data variables.contact.contact_enterprise_sales %}.

## Información adicional

- "[Acerca de la facturación para la empresa](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)"
- Sitio de [versiones de {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/releases/)
- "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)"
