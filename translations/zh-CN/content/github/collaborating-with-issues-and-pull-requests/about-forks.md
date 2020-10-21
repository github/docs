---
title: 关于复刻
intro: 复刻是您管理的仓库的副本。 复刻用于更改项目而不影响原始仓库。 您可以通过拉取请求从原始仓库提取更新，或者提交更改到原始仓库。
redirect_from:
  - /articles/about-forks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

复刻仓库类似于复制仓库，主要有两点差异：

* 您可以使用拉取请求将更改从用户拥有的复刻提交到原始仓库，也称为*上游*仓库。
* 您可以通过同步复刻与上游仓库，将更改从上游仓库提交到本地复刻。

{% data reusables.repositories.you-can-fork %}

{% data reusables.repositories.desktop-fork %}

删除复刻不会删除原始上游仓库。 You can make any changes you want to your fork—add collaborators, rename files, generate {% data variables.product.prodname_pages %}—with no effect on the original.{% if currentVersion == "free-pro-team@latest" %} You cannot restore a deleted forked repository. 更多信息请参阅“[恢复删除的仓库](/articles/restoring-a-deleted-repository)”。{% endif %}

在开源项目中，复刻常用于迭代想法或更改，然后将其提交回上游仓库。 在用户拥有的复刻中进行更改，然后打开拉取请求以比较您的工作与上游仓库，便可允许对上游仓库具有推送权限的任何推送更改到拉取请求分支。 这可加速协作，让仓库维护员在合并之前于本地从用户拥有的复刻对拉取请求进行提交或运行测试。 不可向组织拥有的复刻授予推送权限。

{% data reusables.repositories.private_forks_inherit_permissions %}

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes upstream in the future, you can duplicate the repository or, if the repository is a template, use the repository as a template. 更多信息请参阅“[复制仓库](/articles/duplicating-a-repository)" 和[从模板创建仓库](/articles/creating-a-repository-from-a-template)"。

### 延伸阅读

- "[关于协作开发模式](/articles/about-collaborative-development-models)"
- "[从复刻创建拉取请求](/articles/creating-a-pull-request-from-a-fork)"
- [Open Source Guides](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
