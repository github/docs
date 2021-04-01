---
title: 创建拉取请求
intro: '创建拉取请求以提议和协作处理对仓库的更改。 这些更改在*分支*中提议，以确保默认分支只包含已完成和已批准的工作。'
redirect_from:
  - /articles/creating-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

对仓库具有读取权限的任何人都可以创建拉取请求，但要创建分支，必须具有写入权限。 如果要为拉取请求创建新分支，又没有仓库的写入权限，可以先对仓库复刻。 更多信息请参阅“[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)”和“[关于复刻](/articles/about-forks)”。

您可以在创建拉取请求时指定要将更改合并到哪个分支。 拉取请求只能在不同的两个分支之间打开。

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

### 更改分支范围和目标仓库

默认情况下，拉取请求基于父仓库的默认分支。 更多信息请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”。

如果默认父仓库不正确，您可以使用下拉列表更改父仓库和分支， 还可以使用下拉列表交换头部分支和基本分支，以确定引用点之间的差异。 这里的引用必须是 GitHub 仓库中的分支名称。

![拉取请求编辑分支](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

考虑分支时，请记住，*基础分支*是应该应用更改的**位置**，*头部分支*包含要应用的**内容**。

更改基本仓库时，也会更改关于拉取请求的通知。 每个对基本仓库有推送权限的人都会收到电子邮件通知，他们下次登录时会在仪表板上看到新的拉取请求。

更改分支范围中的任何信息时，提交和文件更改预览区将更新以显示您的新范围。

{% tip %}

**提示**：
- 使用比较视图可设置跨任何时间范围的比较。 更多信息请参阅“[比较提交](/github/committing-changes-to-your-project/comparing-commits)”。
- 项目维护员可以为仓库添加拉取请求模板。 模板包括拉取请求正文中的信息提示。 更多信息请参阅“[关于议题和拉取请求模板](/articles/about-issue-and-pull-request-templates)”。

{% endtip %}

### 创建拉取请求

{% tip %}

**提示**：您也可以使用 {% data variables.product.prodname_desktop %} 创建拉取请求。 更多信息请参阅 {% data variables.product.prodname_desktop %} 文档中的“[创建议题或拉取请求](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 在“Branch（分支）”菜单中，选择包含提交的分支。 ![分支下拉菜单](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. 使用 _base（基础）_分支下拉菜单选择要向其合并更改的分支，然后使用 _compare（比较）_分支下拉菜单选择进行了更改的主题分支。 ![用于选择基础和比较分支的下拉菜单](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

在拉取请求通过审查后，可将其[合并到仓库中](/articles/merging-a-pull-request)。

### 延伸阅读

- "[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)"
- “[更改拉取请求的基本分支](/articles/changing-the-base-branch-of-a-pull-request)”
- “[从侧边栏向项目板添加议题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)”
