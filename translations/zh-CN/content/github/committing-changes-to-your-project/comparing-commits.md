---
title: 比较提交
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以在分支、标记、提交和日期之间比较仓库的状态。 要比较仓库的不同版本，请在仓库路径中附加 `/compare`。

我们将通过查看 [Linguist 仓库复刻](https://github.com/octocat/linguist)的比较页面来展示比较视图的强大功能，该页面位于 [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master)。

每个仓库的比较视图包含两个下拉菜单：`base` 和 `compare`。

`base` 应被视为比较的起点，而 `compare` 被视为终点。 在比较期间，可随时通过单击 **Edit（编辑）**来更改 `base` 和 `compare` 点。

### 比较分支

最常用的比较是比较分支，例如在启动新的拉取请求时。 启动[新的拉取请求](/articles/creating-a-pull-request)时总是会进入分支比较视图。

要比较分支，您可以从页面顶部的 `compare（比较）`下拉菜单中选择分支名称。

此处是[在两个分支之间进行比较](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs)的示例。

### 比较标记

比较发行版标记将显示自上次发布以来您对仓库的更改。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} For more information, see "[Comparing releases](/github/administering-a-repository/comparing-releases)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}To compare tags, you can select a tag name from the `compare` drop-down menu at the top of the page.{% else %} Instead of typing a branch name, type the name of your tag in the `compare` drop down menu.{% endif %}

此处是[在两个标记之间进行比较](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3)的示例。

### 比较提交

您还可以在 {% data variables.product.prodname_dotcom %} 上通过两点差异比较来比较仓库或其复刻中的任意两个提交。

要在 {% data variables.product.prodname_dotcom %} 上通过两点差异比较来快速比较两个提交或直接比较 Git 对象 ID (OID)，请编辑仓库“Comparing changes（比较更改）”页面的 URL。

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

有关其他比较选项的更多信息，请参阅“[三点和两点差异比较](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)”。

### 跨复刻比较

您可以比较基础仓库与任何复刻的仓库。 这是用户对项目执行拉取请求时显示的视图。

要比较不同仓库上的分支，请在分支名称前加上用户名。 例如，通过为 `base` 指定 `octocat:master`，为 `compare` 指定 `octo-org:master`，您可以比较分别由 `octocat` 和 `octo-org` 拥有的仓库上的 `master` 分支。

此处是[在两个仓库之间进行比较](https://github.com/octocat/linguist/compare/master...octo-org:master)的示例。

### 跨提交比较

作为一种快捷方法，Git 使用 `^` 表示法表示“前一次提交”。

您可以使用此表示法对某个提交或分支的现状与前身进行比较。 例如，`96d29b7^^^^^` 表示 `96d29b7` 之前的五次提交，因为有五个 `^` 标记。 在 `base` 分支中键入 `96d29b7^^^^^`，并在 `compare` 分支中键入 `96d29b7`， 可将 `96d29b7` 之前的五次提交与 `96d29b7` 提交进行比较。

以下是[使用 `^` 表示法进行比较](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7)的示例。

### 延伸阅读

- “[更改拉取请求的基本分支](/articles/changing-the-base-branch-of-a-pull-request)”
