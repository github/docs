---
title: 查看仓库的部署活动
intro: 您可以查看整个仓库或特定拉取请求的部署相关信息。
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**注：**部署仪表板目前处于测试阶段，可能会发生变化。

{% endnote %}

如果仓库的部署工作流程通过 Deployments API 或来自 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) 的应用程序与 {% data variables.product.product_name %} 集成，则具有读取权限的人员可以查看所有当前部署的概览以及过去部署活动的日志。 更多信息请参阅“[部署](/rest/reference/repos#deployments)”。

您还可以在拉取请求的“Conversation（对话）”选项卡中查看部署信息。

### 查看部署仪表板

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}To the right of the list of files, click **Environments**. ![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Above the list of files, click **Environments**. ![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### 延伸阅读
 - "[关于拉取请求](/articles/about-pull-requests)"
