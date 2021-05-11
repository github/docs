---
title: 创建议题或拉取请求
intro: 您可以创建议题或拉取请求，以提议并协作更改仓库。
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### 关于议题和拉取请求

您可以使用议题来跟踪对项目很重要的想法、漏洞、任务和其他信息。 您可以使用 {% data variables.product.prodname_desktop %} 在项目仓库中创建议题。 有关议题的更多信息，请参阅“[关于议题](/github/managing-your-work-on-github/about-issues)”。

创建分支并更改项目中的文件后，可以创建拉取请求。 使用拉取请求，您可以在将更改合并到项目中之前对更改提出建议、进行讨论和迭代。 您可以使用 {% data variables.product.prodname_desktop %} 在项目仓库中创建拉取请求。 有关拉取请求的更多信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。

### 基本要求

在创建拉取请求之前，您需要将更改推送到 {% data variables.product.prodname_dotcom %} 的分支。
- 保存并提交本地分支上的任何更改。 更多信息请参阅“[提交和审查对项目的更改](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)”。
- 将本地提交推送到远程仓库. 更多信息请参阅“[推送更改到 GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)。”
- 推送当前分支到 {% data variables.product.prodname_dotcom %}。 更多信息请参阅“[管理分支](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)。”

### 创建议题

{% mac %}

1. 在菜单栏中，使用 **Repository（仓库）**下拉菜单，然后单击 ** **Create Issue on {% data variables.product.prodname_dotcom %}（在 Github 上创建议题）**。 ![分支菜单中的仓库值](/assets/images/help/desktop/create-issue-mac.png)</li>
2 在 {% data variables.product.prodname_dotcom %} 上，单击 **Get started（开始使用）**打开议题模板，或单击 **Open a blank issue（打开空白议题）**。 ![创建新议题选项](/assets/images/help/desktop/create-new-issue.png)</ol>

{% endmac %}

{% windows %}

1. 在菜单栏中，使用 **Repository（仓库）**下拉菜单，然后单击 ** **Create issue on {% data variables.product.prodname_dotcom %}（在 Github 上创建议题）**。 ![分支菜单中的仓库值](/assets/images/help/desktop/create-issue-windows.png)</li>
2 在 {% data variables.product.prodname_dotcom %} 上，单击 **Get started（开始使用）**打开议题模板，或单击 **Open a blank issue（打开空白议题）**。 ![创建新议题选项](/assets/images/help/desktop/create-new-issue.png)</ol>

{% endwindows %}

{% note %}

**注**：如果您当前的仓库中未启用议题模板，{% data variables.product.prodname_desktop %} 会将您指引到 {% data variables.product.prodname_dotcom %} 上的空白议题。

{% endnote %}

### 创建拉取请求

{% mac %}

1. 切换到要为其创建拉取请求的分支。 更多信息请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击 **Create pull request（创建拉取请求）**。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。 ![创建拉取请求按钮](/assets/images/help/desktop/mac-create-pull-request.png)
4. 在
{% data variables.product.prodname_dotcom %} 上，确认 **base:** 下拉菜单中的分支是要合并更改的分支。 确认 **compare:** 下拉菜单中的分支是您进行了更改的主题分支。
  ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 切换到要为其创建拉取请求的分支。 更多信息请参阅“[在分支之间切换](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”。
2. 单击 **Create pull request（创建拉取请求）**。 {% data variables.product.prodname_desktop %} 会将您的默认浏览器打开至 {% data variables.product.prodname_dotcom %}。 ![创建拉取请求按钮](/assets/images/help/desktop/windows-create-pull-request.png)
3. 在
{% data variables.product.prodname_dotcom %} 上，确认 **base:** 下拉菜单中的分支是要合并更改的分支。 确认 **compare:** 下拉菜单中的分支是您进行了更改的主题分支。
  ![用于选择基础和比较分支的下拉菜单](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

### 延伸阅读
- {% data variables.product.prodname_dotcom %} 词汇表中的“[议题](/github/getting-started-with-github/github-glossary#issue)”
- {% data variables.product.prodname_dotcom %} 词汇中的“[拉取请求](/github/getting-started-with-github/github-glossary#pull-request)”
- {% data variables.product.prodname_dotcom %} 词汇中的“[基础分支](/github/getting-started-with-github/github-glossary#base-branch)”
- {% data variables.product.prodname_dotcom %} 词汇中的“[主题分支](/github/getting-started-with-github/github-glossary#topic-branch)”
