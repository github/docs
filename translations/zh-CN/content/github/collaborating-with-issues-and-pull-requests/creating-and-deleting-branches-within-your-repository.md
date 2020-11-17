---
title: 创建和删除仓库中的分支
intro: '您可以直接在 {% data variables.product.product_name %} 上创建或删除分支。'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 创建分支

{% data reusables.repositories.navigate-to-repo %}

1. （可选）如果要从仓库的默认分支以外的分支创建新分支，请单击 {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> 分支**，然后选择另一个分支： ![概述页面上的分支链接](/assets/images/help/branches/branches-link.png)
1. 单击分支选择器菜单。 ![分支选择器菜单](/assets/images/help/branch/branch-selection-dropdown.png)
1. 为新分支键入唯一名称，然后选择 **Create branch（创建分支）**。 ![分支创建文本框](/assets/images/help/branch/branch-creation-text-box.png)

### 删除分支

{% data reusables.pull_requests.automatically-delete-branches %}

如果要删除的分支是仓库的默认分支，则在删除该分支之前必须选择新的默认分支。 更多信息请参阅“[更改默认分支](/github/administering-a-repository/changing-the-default-branch)”。

如果要删除的分支与打开的拉取请求关联，则在删除该分支之前必须合并或关闭拉取请求。 更多信息请参阅“[合并拉取请求](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)”和“[关闭拉取请求](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. 滚动到要删除的分支，然后单击 {% octicon "trashcan" aria-label="The trashcan icon to delete the branch" %}。 ![删除分支](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
更多信息请参阅“[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)”。

### 延伸阅读

- "[关于分支](/github/collaborating-with-issues-and-pull-requests/about-branches)"
- “[查看仓库中的分支](/github/administering-a-repository/viewing-branches-in-your-repository)”
- "[删除和恢复拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
