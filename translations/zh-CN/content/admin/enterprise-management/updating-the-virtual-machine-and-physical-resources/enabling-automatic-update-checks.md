---
title: 启用自动更新检查
intro: '你可以启用自动更新检查，使 {% data variables.product.product_location %} 检查和下载最新的 {% data variables.product.prodname_ghe_server %} 版本。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-update-checks
  - /enterprise/admin/enterprise-management/enabling-automatic-update-checks
  - /admin/enterprise-management/enabling-automatic-update-checks
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Enable automatic update checks
ms.openlocfilehash: c566dc54958cc7d4f26a9279ea3bf8a76aafa636
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331886'
---
在 {% data variables.product.product_location %} 的升级包自动下载后，你会收到一条消息，通知你可以升级 {% data variables.product.prodname_ghe_server %}。 包会下载到 {% data variables.product.product_location %} 上的 `/var/lib/ghe-updates` 目录中。 有关详细信息，请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server)”。

如果升级有可用的热补丁，将自动下载 `.hpkg`。 在 Management Console 中，您可以选择立即安装热补丁或排定稍后安装。 有关详细信息，请参阅“[使用热补丁进行升级](/enterprise/admin/guides/installation/upgrading-github-enterprise-server#upgrading-with-a-hotpatch)”。

{% tip %}

提示：若要启用自动更新检查，{% data variables.product.product_location %} 必须能够连接到 `https://github-enterprise.s3.amazonaws.com`。

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. 单击“是，自动检查更新”。
![用于启用自动更新的按钮](/assets/images/enterprise/management-console/enable_updates_button.png){% data reusables.enterprise_management_console.save-settings %}

要查看您的实例是否处于最新状态，请检查 Updates 选项卡上的横幅。

![指示您的 GitHub Enterprise Server 版本的横幅](/assets/images/enterprise/management-console/up-to-date-banner.png)

在“日志”下，可看到最近的更新检查的状态。

![更新日志](/assets/images/enterprise/management-console/update-log.png)
