---
title: 锁定对话
intro: 仓库所有者和协作者以及对仓库具有写入权限的人员，能够永久或临时锁定关于议题、拉取请求和提交的对话，以缓和激烈的交互。
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 986d23cb4fe9850cb6c6824e9a3f2c256b6fd4e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086552'
---
如果整个对话没有建设性或者违反了社区的行为准则 {% ifversion fpt or ghec %} 或 GitHub 的[社区指南](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}，则锁定对话是恰当的。 在锁定对话时，也可公开说明锁定的原因。

锁定对话会创建对仓库具有读取权限的所有人可见的时间表事件。 但对话锁定者的用户名只有能够写入仓库的人可见。 对于没有写入权限的任何人，时间表事件会匿名化。

![已锁定对话的匿名化时间表事件](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

当对话被锁定时，仅[具有写入权限的人](/articles/repository-permission-levels-for-an-organization/)以及[存储库所有者和协作者](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)才可以添加、隐藏和删除注释。

若要在未存档的存储库中搜索锁定的对话，可以使用搜索限定符 `is:locked` 和 `archived:false`。 对话在存档的仓库中会自动锁定。 有关详细信息，请参阅“[搜索问题和拉取请求](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)”。

1. 也可选择撰写注释，解释您锁定对话的原因。
2. 在问题或拉取请求的右边，或者提交页面中注释框的上方，单击“锁定对话”。
![锁定对话链接](/assets/images/help/repository/lock-conversation.png)
3. 可以选择锁定对话的原因。
![锁定对话的原因菜单](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 阅读有关锁定对话的信息，然后单击“锁定关于此问题的对话”、“锁定关于此拉取请求的对话”或“锁定关于此提交的对话”  。
![“确认锁定并说明原因”对话框](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 准备好解锁对话后，单击“解锁对话”。
![“解锁对话”链接](/assets/images/help/repository/unlock-conversation.png)

## 延伸阅读

- “[为运行状况参与设置项目](/communities/setting-up-your-project-for-healthy-contributions)”
- “[使用模板鼓励创建有用的问题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”
- “[管理破坏性注释](/communities/moderating-comments-and-conversations/managing-disruptive-comments)”{% ifversion fpt or ghec %}
- “[维护 {% data variables.product.prodname_dotcom %} 上的安全](/communities/maintaining-your-safety-on-github)”
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”{% endif %}
