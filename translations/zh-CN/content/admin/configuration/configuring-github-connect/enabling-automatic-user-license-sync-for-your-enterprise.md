---
title: 为企业启用自动触发用户许可证同步
intro: '可以通过自动将用户许可证从 {% data variables.product.product_location %} 同步到 {% data variables.product.prodname_ghe_cloud %} 来管理 {% data variables.product.prodname_enterprise %} 环境中的许可证使用情况。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910557'
---
## 关于自动许可证同步

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)”。

如果为企业启用自动用户许可证同步，{% data variables.product.prodname_github_connect %} 将每周自动同步一次 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况。{% ifversion ghes > 3.4 %}还可以通过手动触发许可证同步作业，在自动每周同步之外随时同步许可证数据。 有关详细信息，请参阅“[触发许可证同步作业](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)”。{% endif %}

如果使用多个 {% data variables.product.prodname_ghe_server %} 实例，则可以在 {% data variables.product.prodname_ghe_cloud %} 上启用每个实例与同一组织或企业帐户之间的自动触发许可证同步。

{% data reusables.enterprise-licensing.view-consumed-licenses %}

您还可以手动将 {% data variables.product.prodname_ghe_server %} 用户许可信息上传到 {% data variables.product.prodname_ghe_cloud %}。 有关详细信息，请参阅“[同步 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## 启用许可同步

在 {% data variables.product.product_location %} 上启用许可证同步之前，必须启用 {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“服务器可同步用户许可证计数和使用情况”下，使用下拉菜单，然后选择“启用”。
  ![用于启用自动触发用户许可证同步的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
