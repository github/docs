---
title: 创建议题或拉取请求
intro: 您可以创建议题或拉取请求，以提议并协作更改仓库。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-pull-request
versions:
  free-pro-team: '*'
---

### 打开新议题
当您在本地处理 {% data variables.product.prodname_desktop %} 时发现漏洞或想要建议增强时，可以打开仓库中的新议题（如果议题已启用）。 有关处理议题的更多信息，请参阅“[关于议题](/github/managing-your-work-on-github/about-issues)。”

{% mac %}

1. 在屏幕的左上角，选择 **Repository（仓库）**菜单。 ![Mac 菜单栏中的 GitHub Desktop 菜单](/assets/images/help/desktop/select-repository-menu-mac.png)
2. 单击**在 {% data variables.product.prodname_dotcom %} 上创建议题**。 ![分支菜单中的仓库值](/assets/images/help/desktop/create-issue-mac.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，单击 **Get started（开始使用）**打开议题模板，或单击 **Open a blank issue（打开空白议题）**。 ![创建新议题选项](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. 在窗口的左上角，选择 **Repository（仓库）**菜单。 ![Mac 菜单栏中的 GitHub Desktop 菜单](/assets/images/help/desktop/select-repository-menu-windows.png)
2. 单击**在 {% data variables.product.prodname_dotcom %} 上创建议题**。 ![分支菜单中的仓库值](/assets/images/help/desktop/create-issue-windows.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，单击 **Get started（开始使用）**打开议题模板，或单击 **Open a blank issue（打开空白议题）**。 ![创建新议题选项](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**注**：如果您当前的仓库中未启用议题模板，{% data variables.product.prodname_desktop %} 会将您指引到 {% data variables.product.prodname_dotcom %} 上的空白议题。

{% endnote %}

### 创建新拉取请求
在[创建分支](/desktop/guides/contributing-to-projects/managing-branches)和[提交一些更改](/desktop/guides/contributing-to-projects/committing-and-reviewing-changes-to-your-project)后，您可以打开拉取请求以获取对提议的更改的反馈。

{% mac %}

1. 在屏幕的左上角，选择 **Branch（分支）**菜单。 ![Mac 菜单栏中的 GitHub Desktop 菜单](/assets/images/help/desktop/mac-select-branch-menu.png)
2. 单击 **Create pull request（创建拉取请求）**。 ![“分支”菜单中的“创建拉取请求”值](/assets/images/help/desktop/create-pull-request-mac.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，验证下拉菜单中的默认_基_分支和_比较_分支，并在必要时进行更改。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 在窗口的左上角，选择 **Branch（分支）**菜单。 ![Windows 菜单栏中的 GitHub Desktop 菜单](/assets/images/help/desktop/windows-select-branch-menu.png)
2. 单击 **Create pull request（创建拉取请求）**。 ![“分支”菜单中的“创建拉取请求”值](/assets/images/help/desktop/create-pull-request-win.png)
3. 在 {% data variables.product.prodname_dotcom %} 上，验证下拉菜单中的默认_基_分支和_比较_分支，并在必要时进行更改。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}
