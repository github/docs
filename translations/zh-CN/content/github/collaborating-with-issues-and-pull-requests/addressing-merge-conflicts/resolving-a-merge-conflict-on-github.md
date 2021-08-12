---
title: 在 GitHub 上解决合并冲突
intro: 您可以使用冲突编辑器在 GitHub 上解决涉及竞争行更改的简单合并冲突。
redirect_from:
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
您只能在 {% data variables.product.product_name %} 上解决由竞争行更改引起的合并冲突，例如当人们对 Git 仓库中不同分支上同一文件的同一行进行不同的更改时。 对于所有其他类型的合并冲突，您必须在命令行上本地解决冲突。 更多信息请参阅“[使用命令行解决合并冲突](/articles/resolving-a-merge-conflict-using-the-command-line/)”。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
如果站点管理员对仓库之间的拉取请求禁用合并冲突编辑器，则无法在
{% data variables.product.product_name %} 上使用冲突编辑器，并且必须在命令行上解决合并冲突。 例如，如果禁用合并冲突编辑器，则无法在复刻和上游仓库之间的拉取请求中使用它。
{% endif %}

{% warning %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}
**警告：**在
{% data variables.product.product_name %} 上解决合并冲突时，拉取请求的整个[基本分支](/github/getting-started-with-github/github-glossary#base-branch)都会合并到[头部分支](/github/getting-started-with-github/github-glossary#head-branch)中，即使头部分支是仓库的默认分支或受保护分支。 确保您确实想要提交到此分支。
{% else %}
**警告：**在
{% data variables.product.product_name %} 上解决合并冲突时，拉取请求的整个[基本分支](/github/getting-started-with-github/github-glossary#base-branch)都会合并到[头部分支](/github/getting-started-with-github/github-glossary#head-branch)中。 确保您确实想要提交到此分支。 如果头部分支是仓库的默认分支，您可以选择创建一个新分支作为拉取请求的头部分支。 如果头部分支是受保护分支，则无法将冲突解决合并到其中，因此系统会提示您创建一个新的头部分支。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。
{% endif %}

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. 在“Pull Requests（拉取请求）”列表中，单击含有您想要解决的合并冲突的拉取请求。
1. 在拉取请求底部附近，单击 **Resolve conflicts（解决冲突）**。 ![解决合并冲突按钮](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **提示：**如果停用 **Resolve conflicts（解决冲突）**按钮，则拉取请求的合并冲突过于复杂而无法在 {% data variables.product.product_name %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} 上解决，或站点管理员已禁用仓库之间拉取请求的冲突编辑器{% endif %}。 必须使用备用 Git 客户端或在命令行上使用 Git 解决合并冲突。 更多信息请参阅“[使用命令行解决合并冲突](/articles/resolving-a-merge-conflict-using-the-command-line)”。

 {% endtip %}
{% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %}
 ![查看带有冲突标记的合并冲突示例](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. 如果文件中有多个合并冲突，请向下滚动到下一组冲突标记，然后重复步骤 4 和步骤 5 以解决合并冲突。
1. 解决文件中的所有冲突后，单击 **Mark as resolved（标记为已解决）**。 ![单击“标记为已解决”按钮](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. 如果您有多个冲突文件，请在“冲突文件”下的页面左侧选择您要编辑的下一个文件，并重复步骤 4 到 7，直到您解决所有拉取请求的合并冲突。 ![适用时选择下一个冲突文件](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. 解决所有合并冲突后，单击 **Commit merge（提交合并）**。 这会将整个基本分支合并到头部分支。 ![Resolve merge conflicts button](/assets/images/help/pull_requests/merge-conflict-commit-changes.png){% if currentVersion ver_lt "enterprise-server@2.22" %}
1. 如果出现提示，请审查您要提交的分支。 如果要提交到此分支，请单击 **I understand, update _BRANCH_（我已了解，请更新 BRANCH）**。 ![合并冲突确认窗口](/assets/images/help/pull_requests/merge-conflict-confirmation.png){% else %}
1. 如果出现提示，请审查您要提交的分支。

   如果头部分支是仓库的默认分支，您可以选择使用为解决冲突所做的更改来更新此分支，或者选择创建一个新分支并将其用作拉取请求的头部分支。 ![提示审查将要更新的分支](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   如果您选择创建一个新分支，请输入该分支的名称。

   如果拉取请求的头部分支是受保护分支，则必须创建新分支。 您将无法选择更新受保护分支。

   单击 **Create branch and update my pull request（创建分支并更新我的拉取请求**或 **I understand, continue updating（我了解，继续更新）_BRANCH（分支）_**。 按钮文本对应于您正在执行的操作。
{% endif %}
1. 要合并拉取请求，请单击 **Merge pull request（合并拉取请求）**。 有关其他拉取请求合并选项的更多信息，请参阅“[合并拉取请求](/articles/merging-a-pull-request/)”。

### 延伸阅读

- "[关于拉取请求合并](/articles/about-pull-request-merges)"
