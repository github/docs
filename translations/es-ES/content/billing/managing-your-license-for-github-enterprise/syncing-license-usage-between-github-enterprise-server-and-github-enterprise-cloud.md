---
title: Sincornizar el uso de licencias entre GitHub Enterprise Server y GitHub Enterprise Cloud
intro: 'Puedes sincronizar el uso de licencias desde {% data variables.product.prodname_ghe_server %} hacia {% data variables.product.prodname_ghe_cloud %} para ver el uso de licencias a lo largo de tu empresa en un solo lugar y garantizar que las personas con cuentas en ambos ambientes solo consuman una licencia.'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572596'
---
## Acerca de la sincronización del uso de licencias

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

Para garantizar que ves los detalles actualizados de la licencia en {% data variables.product.prodname_dotcom_the_website %}, puedes sincronizar el uso de licencias entre los ambientes automáticamente, utilizando {% data variables.product.prodname_github_connect %}. Para obtener más información sobre {% data variables.product.prodname_github_connect %}, vea "[Acerca de {% data variables.product.prodname_github_connect %}]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}."{% endif %}

Si no quieres habilitar {% data variables.product.prodname_github_connect %}, puedes sincronizar el uso de licencia manualmente si subes un archivo desde {% data variables.product.prodname_ghe_server %} a {% data variables.product.prodname_dotcom_the_website %}.

Cuando sincronizas el uso de licencia, solo el correo electrónico y el Id. de usuario de cada cuenta de usuario de {% data variables.product.prodname_ghe_server %} se transmitirán a {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Sincronizar el uso de licencias automáticamente

Puedes usar {% data variables.product.prodname_github_connect %} para sincronizar semanalmente y de forma automática el recuento de licencias de usuario y el uso entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, vea "[Habilitar la sincronización automática de licencias de usuario para su empresa]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% ifversion ghec %}" en la documentación de {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}."{% endif %}

{% ifversion ghec or ghes > 3.4 %} Después de habilitar {% data variables.product.prodname_github_connect %}, los datos de licencia se sincronizarán automáticamente cada semana. También puedes sincronizar manualmente los datos de licencia en cualquier momento mediante el desencadenamiento de un trabajo de sincronización de licencias.

### Desencadenamiento de un trabajo de sincronización de licencias

1. Inicia sesión en la instancia de {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. En «Sincronización de licencias», haz clic en {% octicon "sync" aria-label="The Sync icon" %} **Sincronizar ahora**.
  ![Captura de pantalla del botón «Sincronizar ahora» en la sección de sincronización de licencias](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Carga manual del uso de licencias de GitHub Enterprise Server

Puedes descargar un archivo JSON desde {% data variables.product.prodname_ghe_server %} y subir el archivo a {% data variables.product.prodname_ghe_cloud %} para sincronizar el uso de la licencia de usuario entre dos implementaciones de forma manual.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. En "Quick links" (Vínculos rápidos), para descargar un archivo que contiene su uso de licencia actual en {% data variables.product.prodname_ghe_server %}, haga clic en **Export license usage** (Exportar uso de licencia).
  ![Exportar vínculo de uso de licencia](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. En "Enterprise Server Instances" (Instancias del servidor de Enterprise), haga clic en **Add server usage** (Agregar uso del servidor).
  ![Cargar el vínculo de uso de los servidores de GitHub Enterprise](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Sube el archivo JSON que descargaste de {% data variables.product.prodname_ghe_server %}.
  ![Arrastrar y soltar, o seleccionar un archivo para cargar](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
