---
title: 管理分支
intro: 您可以在仓库的默认分支之外创建分支，以便安全地试验更改。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
versions:
  free-pro-team: '*'
---

### 关于管理分支
您可以使用分支安全地试验对项目的更改。 分支可将您的开发工作与仓库中的其他分支隔开。 例如，您可以使用分支来开发新功能或修复漏洞。

始终可以从现有分支创建分支。 通常，您可能会从仓库的默认分支创建分支。 然后，您可以单独处理这个新分支，不受其他人对仓库所做更改的影响。

对您的工作满意后，您可以创建拉取请求，以将当前分支中的更改合并到另一个分支。 更多信息请参阅“[创建议题或拉取请求](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)”和“[关于拉取请求](/articles/about-pull-requests)”。

如果您对仓库具有读取权限，可随时在 {% data variables.product.prodname_desktop %} 中创建分支， 但如果您对仓库具有写入权限，则只能将分支推送到 {% data variables.product.prodname_dotcom %}。

{% data reusables.desktop.protected-branches %}

### 创建分支

{% tip %}

**提示：**您创建的第一个新分支将基于默认分支。 如果有多个分支，您可以选择新分支是基于当前检出的分支还是默认分支。

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.create-new-branch %}
  ![Branch（分支）菜单中的 New Branch（新分支）选项](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![用于创建新分支名称的字段](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![创建分支按钮](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![用于切换当前分支的下拉菜单](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![Branch（分支）菜单中的 New Branch（新分支）选项](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![用于创建新分支名称的字段](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![基础分支选项](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![创建分支按钮](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### 发布分支

如果您在 {% data variables.product.product_name %} 上创建一个分支，您需要发布分支以便其可用于在 {% data variables.product.prodname_dotcom %} 上进行协作。

1. 在应用顶部，单击 {% octicon "git-branch" aria-label="The branch icon" %} **当前分支**，然后单击要发布的分支。 ![用于选择要发布的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. 单击 **Publish branch（发布分支）**。 ![发布分支按钮](/assets/images/help/desktop/publish-branch-button.png)

### 在分支间切换
您可以查看并提交到任何仓库的分支。 如有未提交但已保存的更改，您需要决定如何处理更改，然后才可切换分支。 您可以在当前分支上提交更改、隐藏更改以临时将它们保存在当前分支上，或者将更改传送到新分支。 如果要在切换分支之前提交更改，请参阅“[提交和审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)”。
{% tip %}

**提示**：您可以在 **Advanced（高级）**设置中设置切换分支的默认行为。 更多信息请参阅“[配置基本设置](/desktop/getting-started-with-github-desktop/configuring-basic-settings)”。

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![仓库中的分支列表](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. 如有已保存但未提交的更改，请选择 **Leave my changes（留下我的更改）**或 **Bring my changes（带上我的更改）**，然后单击 **Switch Branch（切换分支）**。 ![通过更改选项切换分支](/assets/images/help/desktop/stash-changes-options.png)

### 删除分支

无法删除目前与打开的拉取请求关联的分支。 您不能撤消对分支的删除。

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![用于选择要删除的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Branch（分支）菜单中的 Delete...（删除...）选项](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![用于选择要删除的分支的下拉菜单](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-win %}
  ![Branch（分支）菜单中的 Delete...（删除...）选项](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### 延伸阅读

- "[从 {% data variables.product.prodname_desktop %} 克隆仓库](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- {% data variables.product.prodname_dotcom %} 词汇中的“[分支](/articles/github-glossary/#branch)”
- "[关于分支](/articles/about-branches)"
- Git 文档中的“[Nutshell 中的分支](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)”
- “[隐藏更改](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)”
