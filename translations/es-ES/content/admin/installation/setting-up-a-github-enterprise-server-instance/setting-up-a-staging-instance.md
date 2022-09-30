---
title: Configurar una instancia de preparación
intro: 'Se puede configurar una instancia {% data variables.product.product_name %} en un entorno independiente y aislado, y usar la instancia para validar y probar los cambios.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
ms.openlocfilehash: 86006b3dd1fcdd7a7139f35934cafce1f208c8bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065366'
---
## Acerca de las instancias de ensayo

{% data variables.product.company_short %} recomienda configurar un entorno independiente para probar copias de seguridad, actualizaciones o cambios en la configuración de {% data variables.product.product_location %}. Este entorno, que debes aislar de los sistemas de producción, se llama entorno de ensayo.

Por ejemplo, para protegerte contra la pérdida de datos, puedes validar periódicamente la copia de seguridad de la instancia de producción. Puedes restaurar periódicamente la copia de seguridad de los datos de producción en una instancia independiente de {% data variables.product.product_name %} en un entorno de ensayo. En esta instancia de ensayo también puedes probar la actualización a la versión más reciente de características de {% data variables.product.product_name %}.

{% tip %}

**Sugerencia:** puedes reutilizar el archivo de licencia existente {% data variables.product.prodname_enterprise %} siempre que la instancia de ensayo no se use en una capacidad de producción.

{% endtip %}

## Consideraciones para un entorno de ensayo

Para probar exhaustivamente {% data variables.product.product_name %} y volver a crear un entorno que sea lo más parecido posible al entorno de producción, ten en cuenta los sistemas externos que interactúan con la instancia. Por ejemplo, puedes probar lo siguiente en el entorno de ensayo.

- Autenticación, especialmente si usas un proveedor de autenticación externo como SAML
- La integración con un sistema externo de vales
- La integración con un servidor de integración continua
- Los scripts externos o el software que usan {% data variables.product.prodname_enterprise_api %}
- El servidor externo SMTP para notificaciones por correo electrónico

## Configurar una instancia de preparación

1. Realiza una copia de seguridad de tu instancia de producción utilizando {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, vea la sección "Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}" en "[Configuración de copias de seguridad en el dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)".
2. Configura una nueva instancia para que actúe como tu entorno de preparación. Puedes utilizar las mismas guías para aprovisionar e instalar tu instancia de preparación como hiciste para tu instancia de producción. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".
3. Opcionalmente, si tienes previsto probar la funcionalidad {% data variables.product.prodname_actions %} en el entorno de prueba, revisa las consideraciones para los registros y el almacenamiento. Para obtener más información, consulta «[Uso de un entorno de ensayo](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)».
4. Restaura tu copia de seguridad a tu instancia de preparación. Para obtener más información, vea la sección "Restauración de una copia de seguridad" en "[Configuración de copias de seguridad en el dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)".

## Información adicional

- «[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)»
