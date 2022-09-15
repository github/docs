---
title: 配置依赖项关系图
intro: 通过启用依赖项关系图，用户可识别其项目的依赖项。
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684075'
---
## 关于依赖关系图

{% data reusables.dependabot.about-the-dependency-graph %}  

有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。

{% ifversion fpt or ghec %}
## 关于配置依赖项关系图 
要生成依赖项关系图，{% data variables.product.product_name %} 需要对存储库的依赖项清单和锁定文件具有只读访问权限。 依赖关系图自动为所有公共仓库生成，您可以选择为私有仓库启用它。 若要详细了解如何查看依赖项关系图，请参阅“[探索存储库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ##启用依赖项关系图{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### 为私有仓库启用或禁用依赖关系图

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

首次启用依赖关系图时，将立即剖析受支持的生态系统的任何清单和锁定文件。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 启用后，该关系图将在每次推送到存储库{% ifversion fpt or ghec %}以及每次推送到该关系图中的其他存储库时自动更新{% endif %}。

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## 延伸阅读

{% ifversion ghec %}- [查看组织的见解](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization){% endif %}
- “[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”
- [漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
