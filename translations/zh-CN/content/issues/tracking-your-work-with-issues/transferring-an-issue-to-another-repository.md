---
title: 将议题转让给其他仓库
intro: 要移动议题以更好地过滤仓库，您可以将开放的议题转让给其他仓库。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/transferring-an-issue-to-another-repository
  - /articles/transferring-an-issue-to-another-repository
  - /github/managing-your-work-on-github/transferring-an-issue-to-another-repository
  - /issues/tracking-your-work-with-issues/managing-issues/transferring-an-issue-to-another-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Transfer an issue
ms.openlocfilehash: 4e4892468178e7440be7e0a730a948ce2465f1dc
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '145128699'
---
要将打开的议题转让给另一个仓库，必须对议题所在的仓库以及议题要转让到的仓库都有写入权限。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

{% note %}

注意：只能在同一用户或组织帐户拥有的存储库之间转移问题。 {% ifversion fpt or ghes or ghec %}私有存储库问题无法转移到公共存储库。{% endif %}

{% endnote %}

转让议题时，评论、标签和受理人将保留。 不会保留议题的里程碑。 此议题将留在任何用户拥有或组织范围的项目板上，并从任何仓库项目板中删除。 有关详细信息，请参阅“[关于项目板](/articles/about-project-boards)”。

议题中提及的人员或团队将收到通知，告知他们该议题已转让给新仓库。 原来的 URL 会重定向到新议题的 URL。 在新仓库中没有读取权限的人员将看到一个横幅，告知他们该议题已转让给他们无法访问的新仓库。

## <a name="transferring-an-open-issue-to-another-repository"></a>将开放的议题转让给其他仓库

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 在议题列表中，单击您想要转让的议题。
4. 在右侧栏中，单击“转移问题”。
![“转移问题”按钮](/assets/images/help/repository/transfer-issue.png)
5. 使用“选择存储库”下拉菜单，并选择要将问题转移到的存储库。
![“选择存储库”选项](/assets/images/help/repository/choose-a-repository.png)
6. 单击“转移问题”。
![“转移问题”按钮](/assets/images/help/repository/transfer-issue-button.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要转移问题，请使用 `gh issue transfer` 子命令。 将 `issue` 参数替换为问题的编号或 URL。 将 `{% ifversion ghes %}hostname/{% endif %}owner/repo` 参数替换为要将问题转移到的存储库的 {% ifversion ghes %}URL{% else %} 名称{% endif %}，例如 `{% ifversion ghes %}https://ghe.io/{% endif %}octocat/octo-repo`。

```shell
gh issue transfer <em>issue</em> <em>{% ifversion ghes %}hostname/{% endif %}owner/repo</em>
```

{% endcli %}

## <a name="further-reading"></a>延伸阅读

- [关于问题](/articles/about-issues)
- [审查安全日志](/articles/reviewing-your-security-log)
- [审查组织的审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)
