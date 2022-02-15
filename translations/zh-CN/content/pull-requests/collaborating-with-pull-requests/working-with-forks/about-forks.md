---
title: 关于复刻
intro: 复刻是您管理的仓库的副本。 复刻用于更改项目而不影响原始仓库。 您可以通过拉取请求从原始仓库提取更新，或者提交更改到原始仓库。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

复刻仓库类似于复制仓库，主要有两点差异：

* You can use a pull request to suggest changes from your user-owned fork to the original repository in its GitHub instance, also known as the *upstream* repository.
* 您可以通过同步复刻与上游仓库，将更改从上游仓库提交到本地复刻。

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

If you're a member of a {% data variables.product.prodname_emu_enterprise %}, there are further restrictions on the repositories you can fork. {% data reusables.enterprise-accounts.emu-forks %} For more information, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

删除复刻不会删除原始上游仓库。 您可以对复刻执行所需的任何更改—添加协作者、重命名文件、生成 {% data variables.product.prodname_pages %}—不会影响原始仓库。{% ifversion fpt or ghec %} 复刻的仓库在删除后无法恢复。 更多信息请参阅“[恢复删除的仓库](/articles/restoring-a-deleted-repository)”。{% endif %}

在开源项目中，复刻常用于迭代想法或更改，然后将其提交回上游仓库。 When you make changes in your user-owned fork and open a pull request that compares your work to the upstream repository, you can give anyone with push access to the upstream repository permission to push changes to your pull request branch (including deleting the branch). 这可加速协作，让仓库维护员在合并之前于本地从用户拥有的复刻对拉取请求进行提交或运行测试。 不可向组织拥有的复刻授予推送权限。

{% data reusables.repositories.private_forks_inherit_permissions %}

If you want to create a new repository from the contents of an existing repository but don't want to merge your changes to the upstream in the future, you can duplicate the repository or, if the repository is a template, you can use the repository as a template. 更多信息请参阅“[复制仓库](/articles/duplicating-a-repository)”和“[从模板创建仓库](/articles/creating-a-repository-from-a-template)”。

## 延伸阅读

- "[关于协作开发模式](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)"
- "[从复刻创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- [开源指南](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
