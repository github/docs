---
title: Ver el uso de licencia para GitHub Enterprise
intro: 'Puedes ver el uso de licencia de tu empresa en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147572620'
---
## Acerca del uso de licencia para {% data variables.product.prodname_enterprise %}

Puedes ver el uso de licencia para {% data variables.product.product_name %} en {% data variables.product.product_location %}.

Si utilizas tanto {% data variables.product.prodname_ghe_cloud %} como {% data variables.product.prodname_ghe_server %} y sincronizas el uso de licencias entre los productos, puedes ver el uso de licencias de ambos en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información sobre la sincronización de licencias, consulta «[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)».

{% ifversion ghes %}

Para obtener más información sobre la visualización del uso de licencias en {% data variables.product.prodname_dotcom_the_website %} e identificar cuándo se ha producido la última sincronización de licencias, consulta «[Visualización del uso de licencias para {% data variables.product.prodname_enterprise %}](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)» en la documentación de {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

También puedes usar la API de REST para devolver datos de licencias consumidas y el estado del trabajo de sincronización de las licencias. Para obtener más información, consulta «[Administración de GitHub Enterprise](/enterprise-cloud@latest/rest/enterprise-admin/license)» en la documentación de la API de REST.

Para obtener más información sobre los datos de licencia asociados a tu cuenta empresarial y cómo se calcula el número de puestos de usuario consumidos, consulta "[Solución de problemas del uso de licencias de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".


## Visualización del uso de licencias en {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}

Puedes ver el uso de licencia para tu empresa y descargar un archivo con los detalles de esta. Si no ves los recuentos de licencias esperados en este informe, es posible que la dirección de correo electrónico de la suscripción de {% data variables.product.prodname_vs %} asignada al suscriptor y la dirección de correo electrónico de {% data variables.product.prodname_dotcom_the_website %} no sean exactamente iguales. Para obtener más información, consulta "[Solución de problemas del uso de licencias de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, haga clic en **Licencias de empresa**.
  ![Pestaña "Licencias de empresa" en la barra lateral de configuración de la cuenta de empresa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Revisa tu licencia actual de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario utilizadas y disponibles.
    - Para descargar el informe de licencia consumido como un archivo CSV, en la parte superior derecha, haz clic en {% octicon "download" aria-label="The download icon" %}. Para obtener más información sobre cómo revisar los datos de este informe, consulta "[Solución de problemas del uso de licencias de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Si tu licencia incluye la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas. Para más información, vea "[Visualización del uso de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)".

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Revise las licencias actuales de {% data variables.product.prodname_enterprise %}, así como las licencias de usuario disponibles y consumidas.{% ifversion ghes %}
    - Para descargar el informe de licencias consumidas como un archivo JSON, en la parte superior derecha, en "Vínculos rápidos", selecciona **Exportar uso de licencias**. Para obtener más información sobre cómo revisar los datos de este informe, consulta "[Solución de problemas del uso de licencias de GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)".
    - Si tu licencia incluye a la {% data variables.product.prodname_GH_advanced_security %}, puedes revisar tu uso total de plazas así como un desglose de confirmantes por organización. Para más información, vea "[Administración de {% data variables.product.prodname_GH_advanced_security %} para la empresa](/admin/advanced-security)".{% endif %}

{% endif %} {% ifversion ghec %}
## Visualización de la fecha de la última sincronización de licencias

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. En la barra lateral izquierda, haga clic en **Licencias de empresa**.
  ![Pestaña "Licencias de empresa" en la barra lateral de configuración de la cuenta de empresa](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Para identificar cuándo se produjo la última sincronización de licencias, en "Instancias de Enterprise Server", busca las marcas de tiempo que aparecen junto a eventos de uso cargados o sincronizados.
   - "Uso del servidor cargado" indica que el uso de licencias entre entornos se actualizó manualmente cuando se cargó un archivo de licencia de {% data variables.product.prodname_ghe_server %}.
   - "Uso del servidor de {% data variables.product.prodname_github_connect %} sincronizado" indica que el uso de licencias entre entornos se actualizó automáticamente.
   - "El uso del servidor de {% data variables.product.prodname_github_connect %} nunca se ha sincronizado" indica que {% data variables.product.prodname_github_connect %} está configurado, pero el uso de licencias entre entornos no se ha actualizado correctamente en ningún momento.

{% endif %}
