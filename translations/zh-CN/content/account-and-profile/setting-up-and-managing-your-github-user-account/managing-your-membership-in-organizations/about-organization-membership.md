---
title: 关于组织成员资格
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145084749"
---
组织所有者可邀请您作为成员、帐单管理员或所有者加入其组织。 组织所有者或者对仓库具有管理员权限的成员可邀请您作为外部协作者，协作处理一个或多个仓库。 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

您可以在个人资料页面上访问您是其成员的组织。 有关详细信息，请参阅“[访问组织](/articles/accessing-an-organization)”。

当您接受加入组织的邀请后，组织所有者可能会看到：

- 您的公共资料信息
- 你的电子邮件地址
- 您是否启用双重身份验证
- 您在组织内可以访问的仓库以及您的权限级别
- 组织内的特定活动
- 申请来源国家/地区
- 您的 IP 地址

有关详细信息，请参阅 <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} 隐私声明</a>。

  {% note %}

  注意：所有者无法在组织的审核日志中查看成员 IP 地址。 在发生安全事件时，例如帐户被盗或因疏忽而共享敏感数据，组织所有者可能会申请详细访问私有仓库。 我们返回的信息可能包含您的 IP 地址。

  {% endnote %}

默认情况下，您的组织成员资格可见性会设为私密。 您可以选择在您的个人资料中公开个人组织成员资格。 有关详细信息，请参阅“[公开或隐藏组织成员身份](/articles/publicizing-or-hiding-organization-membership)”。

{% ifversion fpt or ghec %}

如果您的组织属于某个企业帐户，您会自动成为该企业帐户的成员，企业帐户所有者能够看到您。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[关于企业帐户](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}”。{% else %}."{% endif %}

{% endif %}

您可以随时离开组织。 有关详细信息，请参阅“[从组织中删除自己](/articles/removing-yourself-from-an-organization)”。

## <a name="further-reading"></a>延伸阅读

- [关于组织](/articles/about-organizations)
- [管理组织中的成员身份](/articles/managing-your-membership-in-organizations)
