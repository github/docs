---
title: 创建拉取请求
intro: 创建拉取请求以提议和协作处理对存储库的更改。 这些更改在分支中提议，以确保默认分支只包含已完成和已批准的工作。
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110989'
---
如果要为拉取请求创建新分支，又没有仓库的写入权限，可以先对仓库复刻。 有关详细信息，请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”和“[关于复刻](/articles/about-forks)”。

您可以在创建拉取请求时指定要将更改合并到哪个分支。 拉取请求只能在不同的两个分支之间打开。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## 更改分支范围和目标仓库

默认情况下，拉取请求基于父仓库的默认分支。 有关详细信息，请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

如果默认父仓库不正确，您可以使用下拉列表更改父仓库和分支， 还可以使用下拉列表交换头部分支和基本分支，以确定引用点之间的差异。 这里的引用必须是 GitHub 仓库中的分支名称。

![拉取请求编辑分支](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

考虑分支时，请记住，“基础分支”是应应用更改的位置，“头部分支”包含要应用的内容。

更改基本仓库时，也会更改关于拉取请求的通知。 每个对基本仓库有推送权限的人都会收到电子邮件通知，他们下次登录时会在仪表板上看到新的拉取请求。

更改分支范围中的任何信息时，提交和文件更改预览区将更新以显示您的新范围。

{% tip %}

**提示**：
- 使用比较视图可设置跨任何时间范围的比较。 有关详细信息，请参阅“[比较提交](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)”。
- 项目维护员可以为仓库添加拉取请求模板。 模板包括拉取请求正文中的信息提示。 有关详细信息，请参阅“[关于问题和拉取请求模板](/articles/about-issue-and-pull-request-templates)”。

{% endtip %}

## 创建拉取请求

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. 在“Branch（分支）”菜单中，选择包含提交的分支。
  ![分支下拉菜单](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. 使用基础分支下拉菜单选择要向其合并更改的分支，然后使用比较分支下拉菜单选择进行了更改的主题分支 。
  ![用于选择基础和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

审查拉取请求后，可以将其[合并到存储库中](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

若要创建拉取请求，请使用 `gh pr create` 子命令。

```shell
gh pr create
```

若要将拉取请求分配给个人，请使用 `--assignee` 或 `-a` 标志。 可以使用 `@me` 自行分配拉取请求。

```shell
gh pr create --assignee "@octocat"
```

若要指定要将拉取请求合并到的分支，请使用 `--base` 或 `-B` 标志。 若要指定包含你的拉取请求提交的分支，请使用 `--head` 或 `-H` 标志。

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

若要包含新拉取请求的标题和正文，请使用 `--title` 和 `--body` 标志。

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

若要将拉取请求标记为草稿，请使用 `--draft` 标志。

```shell
gh pr create --draft
```

若要在新的拉取请求中添加标签或里程碑，请使用 `--label` 和 `--milestone` 标志。

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

若要将新的拉取请求添加到特定项目，请使用 `--project` 标志。

```shell
gh pr create --project octocat-project
```

若要将个人或团队指定为审阅者，请使用 `--reviewer` 标志。

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

若要在默认 Web 浏览器中创建拉取请求，请使用 `--web` 标志。

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. 切换到要为其创建拉取请求的分支。 有关详细信息，请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击“创建拉取请求”。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。
  ![“创建拉取请求”按钮](/assets/images/help/desktop/mac-create-pull-request.png)
4. 在 {% data variables.product.prodname_dotcom %} 上，确认“基础:”下拉菜单中的分支是要合并更改的分支。 确认“比较:”下拉菜单中的分支是进行了更改的主题分支。
  ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 切换到要为其创建拉取请求的分支。 有关详细信息，请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击“创建拉取请求”。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。
  ![“创建拉取请求”按钮](/assets/images/help/desktop/windows-create-pull-request.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，确认“基础:”下拉菜单中的分支是要合并更改的分支。 确认“比较:”下拉菜单中的分支是进行了更改的主题分支。
  ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. 提交存储库本地副本的更改后，单击“创建拉取请求”图标。
![突出显示暂存按钮的源代码控制侧边栏](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. 检查作为合并来源的本地分支和仓库以及作为合并目标的远程分支和仓库是否正确。 然后为拉取请求提供标题和描述。
![GitHub 拉取请求侧边栏](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. 单击“创建”。

有关在 {% data variables.product.prodname_github_codespaces %} 中创建拉取请求的详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 用于拉取请求](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)”。

{% endcodespaces %}

{% endif %}
## 延伸阅读

- “[从复刻创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”
- “[使拉取请求与基础分支保持同步](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)”
- “[更改拉取请求的基础分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)”
- “[从侧边栏向项目板添加议题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)”
- “[关于使用查询参数自动处理议题和拉取请求](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)”
- “[向其他 GitHub 用户分配议题和拉取请求](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)”
- “[在 GitHub 上编写](/github/writing-on-github)”
