---
title: 管理组织仓库中报告的内容
intro: 在贡献者报告仓库中的破坏性内容后，仓库维护员可以查看和管理报告。
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099305'
---
对仓库具有管理员权限的任何人都可以查看和管理仓库的报告内容。

## 关于报告内容的管理

必须先为仓库启用报告的内容，然后才可查看或管理报告的内容。 有关详细信息，请参阅“[管理贡献者如何报告组织存储库中的滥用行为](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository)”。

您可以对破坏性内容的报告进行跟踪、分类和响应。 在“Abuse reports（滥用报告）”列表中，您可以查看所有报告并直接导航到 {% data variables.product.prodname_dotcom %} 上每条报告的评论。

{% data reusables.community.tools-for-moderating %}

完成调解破坏性内容后，可以将报表标记为已解决。 如果您认为尚未完成调解，也可以将报告标记为未解决。

## 查看贡献者报告的内容

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 在要查看的报告内容的右侧，单击 {% octicon "kebab-horizontal" aria-label="The edit icon" %}，然后单击“查看内容”。
  ![已报告内容的“编辑”下拉菜单中的“查看内容”](/assets/images/help/repository/reported-content-report-view-content.png)

## 解决报告

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. 在要解决的报告右侧，单击 {% octicon "kebab-horizontal" aria-label="The edit icon" %}，然后单击“标记为已解决”。
  ![已报告内容的“编辑”下拉菜单中的“标记为已解决”](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## 取消解决报告

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. 在要取消解决的报告右侧，单击 {% octicon "kebab-horizontal" aria-label="The edit icon" %}，然后单击“标记为已取消解决”。
  ![已报告内容的“编辑”下拉菜单中的“标记为已取消解决”](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## 延伸阅读

- [关于社区管理和审查](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)
