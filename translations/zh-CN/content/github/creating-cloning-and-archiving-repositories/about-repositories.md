---
title: 关于仓库
intro: 仓库包含项目的所有文件，并存储每个文件的修订记录。 您可以在仓库中讨论并管理项目的工作。
redirect_from:
  - /articles/about-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

您可以个人拥有仓库，也可以与组织中的其他人共享仓库的所有权。

您可以通过选择仓库的可见性来限制谁可以访问仓库。 更多信息请参阅“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)”。

对于用户拥有的仓库，您可以向其他人授予协作者访问权限，以便他们可以协作处理您的项目。 如果仓库归组织所有，您可以向组织成员授予访问权限，以便协作处理您的仓库。 更多信息请参阅“[用户帐户仓库的权限级别](/articles/permission-levels-for-a-user-account-repository/)”和“[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization/)”。

{% if currentVersion == "free-pro-team@latest" %}
通过
用户帐户和组织的 {% data variables.product.prodname_free_team %}，可与无限的协作者合作处理设置了完全功能的无限公共仓库，或者是设置了有限功能的无限私有仓库， 要获取对私有仓库的高级处理，您可以升级到 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.gated-features.more-info %}
{% else %}
每个人和组织都可拥有无限的仓库，并且可以邀请无限的协作者参与所有仓库。
{% endif %}

您可以使用仓库管理您的工作并与他人合作。
- 您可以使用议题来收集用户反馈，报告软件缺陷，并组织您想要完成的任务。 更多信息请参阅“[关于议题](/github/managing-your-work-on-github/about-issues)”。{% if currentVersion == "free-pro-team@latest" %}
- {% data reusables.discussions.you-can-use-discussions %}{% endif %}
- 您可以使用拉取请求来建议对仓库的更改。 更多信息请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”。
- 您可以使用项目板来组织议题和拉取请求并排定优先级。 更多信息请参阅“[关于项目板](/github/managing-your-work-on-github/about-project-boards)”。

{% data reusables.repositories.repo-size-limit %}

### 延伸阅读

- "[创建新仓库](/articles/creating-a-new-repository)"
- "[通过议题和拉取请求进行协作](/categories/collaborating-with-issues-and-pull-requests)"
- "[在 {% data variables.product.prodname_dotcom %} 上管理您的工作](/categories/managing-your-work-on-github/)"
- "[管理仓库](/categories/administering-a-repository)"
- "[使用图表可视化仓库数据](/categories/visualizing-repository-data-with-graphs/)"
- "[关于 wikis](/articles/about-wikis)"
- "[{% data variables.product.prodname_dotcom %} 词汇](/articles/github-glossary)"
