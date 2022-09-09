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
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145087316'
---
您可以通过 {% data variables.product.prodname_actions %} 和环境或使用 REST API 和第三方应用交付部署。 {% ifversion fpt or ghae ghes > 3.0 or ghec %} 有关使用 {% data variables.product.prodname_actions %} 通过环境进行部署的详细信息，请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。 {% endif %} 有关使用 REST API 进行部署的详细信息，请参阅“[存储库](/rest/reference/repos#deployments)”。

要查看当前和过去的部署，请在存储库的主页上单击“环境”。
{% ifversion ghae %} ![环境](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![环境](/assets/images/environments-sidebar.png){% endif %}

部署页显示仓库中每个环境的最新活动部署。 如果部署包含环境 URL，则部署旁边将显示链接到 URL 的“查看部署”按钮。

活动日志显示环境的部署历史记录。 默认情况下，只有环境的最新部署为 `Active` 状态；所有先前的活动部署为 `Inactive` 状态。 有关自动失活部署的更多信息，请参阅“[非活动部署](/rest/reference/deployments#inactive-deployments)”。

您也可以使用 REST API 来获取有关部署的信息。 有关详细信息，请参阅“[存储库](/rest/reference/repos#deployments)”。
