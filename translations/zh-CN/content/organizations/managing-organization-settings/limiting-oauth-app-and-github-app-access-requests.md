---
title: 限制 OAuth 应用和 GitHub 应用访问请求
intro: '作为组织所有者，你可以选择是否允许外部协作者请求对 {% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %} 的组织访问。'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 6c991ecfbdac75f1bb3bb4fdb5ea3a0692f1d040
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186433'
---
## 关于集成访问请求

启用集成访问请求后，外部协作者可以请求对未经组织批准的 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 的组织访问。 如果禁用集成访问请求，则只有组织成员才能请求对未批准的 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 的组织访问。 外部协作者将仍能同意经预先批准的 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 访问请求外部协作者有权访问的相同资源。

默认启动集成访问请求。 如果组织有大量外部协作者，你可能需要通过禁用集成访问请求减少必须审查的请求数。 

## 启用或禁用集成访问请求

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. 选择或取消选择“集成访问请求”下的“允许来自外部协作者的集成请求”，然后单击“保存” 。
    ![“集成访问请求”设置的屏幕截图](/assets/images/help/organizations/integration-access-requests.png)
