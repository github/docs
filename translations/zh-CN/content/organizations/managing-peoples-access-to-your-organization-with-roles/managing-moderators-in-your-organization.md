---
title: 管理组织中的审查者
intro: 你可以通过将组织中的个人或团队分配给审查者角色来授予他们阻止和限制访问的能力。
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Managing moderators
ms.openlocfilehash: 9f4d3cc70560f3cd48f5ee9e1a31a452ae71b6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076703'
---
## 关于组织审查者

有时，需要阻止参与者，或者为组织或单个存储库设置交互限制。 作为组织所有者，你可以执行这些任务，但你可能希望将这些任务委托给组织的其他成员。 为此，可以将组织成员或团队分配为审查者角色。

组织审查者可以执行以下操作：
* 阻止和取消阻止用户访问组织。 有关详细信息，请参阅“[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)。”
* 管理组织交互限制。 有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)。”
* 管理存储库交互限制。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
* 在组织拥有的公共存储库中隐藏评论。 有关详细信息，请参阅“[管理破坏性评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments)。”

使某人成为组织审查者不会赋予他们除上述之外的其他能力。 例如，对存储库只有读取访问权限的人不会通过成为审查者而获得写入访问权限。

最多可以添加 10 个人或团队作为审查者。 如果已将 10 个个人和/或团队分配为用户，并且想要添加更多人员，则可以将审查者团队中的人员分组，然后使用此方法替换一个或多个现有分配。 有关详细信息，请参阅“[创建团队](/organizations/organizing-members-into-teams/creating-a-team)。”

## 添加组织审查者

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“访问”部分中，选择“{% octicon "report" aria-label="The report icon" %} 审查”，然后单击“审查者” 。
1. 在“审查者”下，搜索并选择要向其分配审查者角色的人员或团队。 选择的每个人员或团队都将显示在搜索栏下方的列表中。 
  ![审查者搜索字段和列表](/assets/images/help/organizations/add-moderators.png)


## 删除组织审查者

按照上面的步骤 1-3 操作，然后单击要删除其审查者角色的人员或团队旁边的“删除审查者”。
