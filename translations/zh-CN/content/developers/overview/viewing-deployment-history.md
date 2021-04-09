---
title: 查看部署历史记录
intro: 查看仓库的当前和先前部署。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

{% data reusables.actions.environments-beta %}

您可以通过 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_actions %} 和环境或使用 {% endif %} REST API 和第三方应用程序来交付部署。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}有关 {% data variables.product.prodname_actions %} 的更多信息，请参阅“[{% data variables.product.prodname_actions %}](/actions)”。 {% endif %}有关使用 REST API 进行部署的更多信息，请参阅“[仓库](/rest/reference/repos#deployments)”。

要查看当前和过去的部署，请在仓库的主页上单击 **Environments（环境）**。
{% if currentVersion == "github-ae@latest" or currentVersion ver_lt "enterprise-server@3.0" %}
![环境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

部署页显示仓库中每个环境的最新活动部署。 如果部署包含环境 URL，则部署旁边将显示链接到 URL 的“View deployment（查看部署）”按钮。

活动日志显示环境的部署历史记录。 默认情况下，只有环境的最新部署具有 `Active` 状态；所有先前的活动部署具有 `Inactive` 状态。 有关自动失活部署的更多信息，请参阅“[非活动部署](/rest/reference/repos#inactive-deployments)”。

您也可以使用 REST API 来获取有关部署的信息。 更多信息请参阅“[仓库](/rest/reference/repos#deployments)”。
