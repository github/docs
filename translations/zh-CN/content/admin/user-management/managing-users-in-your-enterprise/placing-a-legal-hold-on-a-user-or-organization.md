---
title: 合法保留用户或组织
intro: 您可以合法保留用户或组织，以便确保他们拥有的仓库不会从企业中永久移除。
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199943'
---
通常情况下，如果有人删除仓库，它将在磁盘上保留 90 天并且可以通过站点管理员仪表板进行恢复。 90 天后，仓库将被永久删除。 如果您合法保留用户或组织，可以随时恢复他们拥有的仓库。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 单击“合法保留”。
![合法保留按钮](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
