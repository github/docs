---
title: Git LFS
intro: '可以为存储库启用或禁用 {% data variables.large_files.product_name_long %} (LFS)。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108758'
---
## 关于 {% data variables.large_files.product_name_short %} API

可以使用 {% data variables.large_files.product_name_short %} 将大文件存储在 Git 存储库中。 {% data variables.large_files.product_name_short %} API 允许为单个存储库启用或禁用该功能。 有关 {% data variables.large_files.product_name_short %} 的详细信息，请参阅“[关于 {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)”。

对存储库具有管理员访问权限的人可以使用 {% data variables.large_files.product_name_short %} API。

{% ifversion fpt or ghec %}

{% data variables.large_files.product_name_short %} 的使用需付费。 有关详细信息，请参阅“[关于 {% data variables.large_files.product_name_long %} 的计费](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)”。

如果想要将 {% data variables.large_files.product_name_short %} API 用于属于组织的存储库，则你的角色必须提供对组织{% ifversion ghec %}或企业{% endif %}计费的访问权限。{% ifversion fpt %}有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)”。{% endif %}

{% ifversion ghec %}

| 存储库所有权 | 所需的存储库访问权限 | 所需角色 | 详细信息 |
| :- | :- | :- | :- |
| 个人帐户 | 管理员 | 空值 | 空值 |
| <ul><li>{% data variables.product.prodname_team %} 上的组织</li><li>{% data variables.product.product_name %} 上的组织，但不在企业中</li></ul> | 管理员，如果你是组织所有者，则会继承 | 组织所有者或计费管理员 | [组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| 企业中的组织 | 管理员，如果你是组织所有者，则可以继承 | 企业所有者或计费管理员 | [企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) |

{% endif %}

{% endif %}
