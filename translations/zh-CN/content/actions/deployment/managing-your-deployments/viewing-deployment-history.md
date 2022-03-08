---
title: 查看部署历史记录
intro: 查看仓库的当前和先前部署。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: 查看部署历史记录
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---


You can deliver deployments through {% data variables.product.prodname_actions %} and environments or with the REST API and third party apps. {% ifversion fpt or ghae ghes > 3.0 or ghec %}For more information about using environments to deploy with {% data variables.product.prodname_actions %}, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)." {% endif %}有关使用 REST API 进行部署的更多信息，请参阅“[仓库](/rest/reference/repos#deployments)”。

要查看当前和过去的部署，请在仓库的主页上单击 **Environments（环境）**。
{% ifversion ghae %}
![环境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

部署页显示仓库中每个环境的最新活动部署。 If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

活动日志显示环境的部署历史记录。 默认情况下，只有环境的最新部署具有 `Active` 状态；所有先前的活动部署具有 `Inactive` 状态。 有关自动失活部署的更多信息，请参阅“[非活动部署](/rest/reference/deployments#inactive-deployments)”。

您也可以使用 REST API 来获取有关部署的信息。 更多信息请参阅“[仓库](/rest/reference/repos#deployments)”。
