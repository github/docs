---
title: 个人帐户存储库的权限级别
intro: 个人帐户拥有的存储库有两种权限级别：存储库所有者和协作者 。
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Repository permissions
ms.openlocfilehash: e7c7a542204c7b1ce69bc19ac326fb248bbbff12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066304'
---
## 关于个人帐户存储库的权限级别

个人帐户拥有的存储库有一个所有者。 所有权权限无法与其他个人帐户共享。

还可以{% ifversion fpt or ghec %}邀请{% else %}添加{% endif %} {% data variables.product.product_name %} 上的用户成为存储库的协作者。 有关详细信息，请参阅“[邀请协作者访问个人存储库](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)”。

{% tip %}

提示：如果需要对个人帐户拥有的存储库实施更精细的访问控制，请考虑将存储库转让给组织。 有关详细信息，请参阅“[转让存储库](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-personal-account)”。

{% endtip %}

## 所有者对个人帐户拥有的存储库的权限

仓库所有者对仓库具有完全控制权。 除了任何协作者可以执行的操作外，仓库所有者还可以执行以下操作。

| 操作 | 详细信息 |
| :- | :- |
| {% ifversion fpt or ghec %}邀请协作者{% else %}添加协作者{% endif %} | [邀请协作者加入个人存储库](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) |
| 更改仓库的可见性 | [设置存储库可见性](/github/administering-a-repository/setting-repository-visibility) |{% ifversion fpt or ghec %}
| 限制与仓库的交互 | [限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) |{% endif %}
| 重命名分支，包括默认分支 | [重命名分支](/github/administering-a-repository/renaming-a-branch) |
| 合并受保护分支上的拉取请求（即使没有批准审查） | [关于受保护分支](/github/administering-a-repository/about-protected-branches) |
| 删除仓库 | [删除存储库](/repositories/creating-and-managing-repositories/deleting-a-repository) |
| 管理仓库的主题 | [使用主题对存储库分类](/github/administering-a-repository/classifying-your-repository-with-topics) |{% ifversion fpt or ghec %}
| 管理仓库的安全性和分析设置 | [管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) |{% endif %}{% ifversion fpt or ghec %}
| 为私有仓库启用依赖项图 | [探索存储库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) |{% endif %}
| 删除和恢复包 | [删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package) |
| 自定义仓库的社交媒体预览 | [自定义存储库的社交媒体预览](/github/administering-a-repository/customizing-your-repositorys-social-media-preview) |
| 从仓库创建模板 | [创建模板存储库](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository) |
| {% data variables.product.prodname_dependabot_alerts %} 的控制访问| [管理存储库的安全性和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts) |{% ifversion fpt or ghec %}
| 忽略仓库中的 {% data variables.product.prodname_dependabot_alerts %} | [查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) |
| 管理私有仓库的数据使用 | [管理专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)|{% endif %}
| 定义仓库的代码所有者 | “[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)” |
| 存档仓库 | [存档存储库](/repositories/archiving-a-github-repository/archiving-repositories) |{% ifversion fpt or ghec %}
| 创建安全通告 | [关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories) |
| 显示赞助按钮 | [在存储库中显示赞助者按钮](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository) |{% endif %}
| 允许或禁止自动合并拉取请求 | [管理存储库中拉取请求的自动合并](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository) | 

## 协作者对个人帐户拥有的存储库的权限

个人仓库的协作者可以拉取（读取）仓库的内容并向仓库推送（写入）更改。

{% note %}

注意：在专用存储库中，存储库所有者只能为协作者授予写入权限。 协作者不能对个人帐户拥有的存储库具有只读权限。

{% endnote %}

协作者还可以执行以下操作。

| 操作 | 详细信息 |
| :- | :- |
| 为存储库创建分支 | [关于分支](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) |
| 重命名除默认分支以外的分支 | [重命名分支](/github/administering-a-repository/renaming-a-branch) |
| 在仓库中创建、编辑和删除关于提交、拉取请求和议题的评论 | <ul><li>[关于问题](/github/managing-your-work-on-github/about-issues)</li><li>[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)</li><li>[管理中断性注释](/communities/moderating-comments-and-conversations/managing-disruptive-comments)</li></ul> |
| 在仓库中创建、分配、关闭和重新打开议题 | [使用问题管理工作](/github/managing-your-work-on-github/managing-your-work-with-issues) |
| 在仓库中管理议题和拉取请求的标签 | [标记问题和拉取请求](/github/managing-your-work-on-github/labeling-issues-and-pull-requests) |
| 在仓库中管理议题和拉取请求的里程碑 | “[创建和编辑议题及拉取请求的里程碑](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)” |
| 将仓库中的议题或拉取请求标记为重复项 | [关于重复的问题和拉取请求](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests) |
| 在仓库中创建、合并和关闭拉取请求 | [通过拉取请求提议工作更改](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) |
| 启用或禁用自动合并拉取请求 | [自动合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
| 将建议的更改应用于仓库中的拉取请求 |[在拉取请求中加入反馈](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request) |
| 从仓库的复刻创建拉取请求 | “[从复刻创建拉取请求](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)” |
| 提交影响拉取请求可合并性的拉取请求审查 | [查看拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) |
| 为仓库创建和编辑 wiki | [关于 Wiki](/communities/documenting-your-project-with-wikis/about-wikis) |
| 为仓库创建和编辑发行版 | [管理存储库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository) |
| 作为仓库的代码所有者 | “[关于代码所有者](/articles/about-code-owners)” |{% ifversion fpt or ghae or ghec %}
| 发布、查看或安装包 | [发布和管理包](/github/managing-packages-with-github-packages/publishing-and-managing-packages) |{% endif %}
| 作为仓库协作者删除自己 | [从协作者的存储库中删除你自己](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository) |

## 延伸阅读

- [组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
