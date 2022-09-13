---
title: 重构贡献数据
intro: 您可以重构贡献数据，将现有提交链接到用户帐户。
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145098947'
---
将提交推送到 {% data variables.product.prodname_enterprise %} 时，如果新提交和现有提交关联到同一个电子邮件地址，此提交会链接到用户帐户。 不过，在用户注册新电子邮件地址或创建新帐户时，不会追溯性地链接现有提交。

1. 访问用户的个人资料页面。
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在页面左侧，单击“管理员”。![“管理”选项卡](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. 在“贡献数据”下，单击“重构” 。
![“重构”按钮](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} 现在会开始后台作业，将提交与用户帐户重新关联。
  ![已排队的重构作业](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
