---
title: 限制仓库中的交互
intro: 您可以临时对公共仓库中的某些用户限制活动一段时间。
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067248'
---
## 关于临时交互限制

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} 在限制期过后，用户可以在您的仓库中恢复正常活动。

{% data reusables.community.types-of-interaction-limits %}

你也可以为个人帐户或组织拥有的所有存储库启用活动限制。 如果启用了用户范围或组织范围的限制，则不能限制帐户拥有的单个仓库的活动。 有关详细信息，请参阅“[限制个人帐户的交互](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account)”和“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)”。

## 限制仓库中的交互

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在边栏中，选择“{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} 审查选项”，然后单击“交互限制” 。
{% data reusables.community.set-interaction-limit %} ![临时交互限制选项](/assets/images/help/repository/temporary-interaction-limits-options.png)

## 延伸阅读
- [报告滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [管理个人对组织存储库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)
- “[个人帐户存储库的权限级别](/articles/permission-levels-for-a-user-account-repository)”
- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [管理组织中的审查者](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)
