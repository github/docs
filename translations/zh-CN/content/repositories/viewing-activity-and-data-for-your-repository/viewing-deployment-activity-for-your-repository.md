---
title: 查看仓库的部署活动
intro: 您可以查看整个仓库或特定拉取请求的部署相关信息。
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129281'
---
{% note %}

注意：部署仪表板目前为 beta 版本，可能会更改。

{% endnote %}

如果存储库的部署工作流通过部署 API 或来自 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) 的应用与 {% data variables.product.product_name %} 集成，则具有存储库读取权限的人员可以查看当前所有部署的概述以及过去部署活动的日志。 有关详细信息，请参阅“[部署](/rest/reference/repos#deployments)”。

您还可以在拉取请求的“Conversation（对话）”选项卡中查看部署信息。

## 查看部署仪表板

{% data reusables.repositories.navigate-to-repo %}
2. 在文件列表右侧，单击“环境”。
![存储库页右侧的环境](/assets/images/help/repository/environments.png)

## 延伸阅读
 - “[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”
