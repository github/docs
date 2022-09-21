---
title: Habilitar la sincronización de licencias de usuario automática para tu empresa
intro: 'Puedes administrar el uso de licencias en todos tus ambientes de {% data variables.product.prodname_enterprise %} sincronizando automáticamente las licencias de usuario de {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: eb0216dcdb629e96ef83de2eea8a7d7b6660a171
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910563'
---
## Acerca de la sincronización de licencias automática

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} Para obtener más información, consulte "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)".

Si habilitas la sincronización automática de licencias de usuario para tu empresa, {% data variables.product.prodname_github_connect %} sincronizará automáticamente el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %} semanalmente. {% ifversion ghes > 3.4 %} También puedes sincronizar los datos de licencia en cualquier momento fuera de la sincronización semanal automática desencadenando manualmente un trabajo de sincronización de licencias. Para obtener más información, consulta "[Desencadenamiento de un trabajo de sincronización de licencias](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)".{% endif %}

Si utilizas instancias múltiples de {% data variables.product.prodname_ghe_server %}, puedes habilitar la sincronización automática de licencias entre cada una de tus instancias y la misma cuenta de empresa u organización en {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.enterprise-licensing.view-consumed-licenses %}

También puedes cargar en forma manual información de licencias de usuario {% data variables.product.prodname_ghe_server %} en {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulte "[Sincronizar el uso de licencias de usuario manualmente entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## Habilitar la sincronización de licencias

Antes de habilitar la sincronización de licencias en {% data variables.product.product_location %}, debes habilitar {% data variables.product.prodname_github_connect %}. Para obtener más información, consulte "[Administración de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. En "Server can sync user license count and usage", use el menú desplegable y seleccione **Enabled**.
  ![Menú desplegable para habilitar la sincronización automática de licencias de usuario](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
