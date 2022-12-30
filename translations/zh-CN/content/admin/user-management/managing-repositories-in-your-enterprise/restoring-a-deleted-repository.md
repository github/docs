---
title: 恢复已删除的仓库
intro: 可以还原已删除的存储库来恢复其内容。
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199784'
---
## 关于仓库恢复

通常情况下，如果有人删除仓库，它将在磁盘上保留 90 天并且可以通过站点管理员仪表板进行恢复。 有关详细信息，请参阅“[站点管理仪表板](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)”。

除非法定保留对用户或组织有效，否则 90 天后，存储库将被清除并永久删除。

如果存储库在被删除时是复刻网络的一部分，则还原的存储库将与原始复刻网络分离。

仓库被删除后，可能需要一个小时才能恢复。

恢复仓库不会恢复发行版附件或团队权限。 已恢复的议题不会被标记。

## 恢复已删除的仓库

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. 在“{% octicon "repo" aria-label="The repo icon" %} 存储库”部分，单击“{% octicon "trash" aria-label="The trash icon" %} 已删除的存储库”链接 。
1. 在已删除的存储库列表中找到要还原的存储库，然后在存储库名称右侧单击“还原”。
1. 要确认是否要还原指定的存储库，请单击“还原”。

## 延伸阅读

- [合法保留用户或组织](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)
