---
title: 探索仓库的依赖项
intro: '可以使用依赖项关系图查看项目所依赖的包{% ifversion fpt or ghec %}以及依赖它的存储库{% endif %}。 此外，您还可以看到在其依赖项中检测到的任何漏洞。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
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
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526860'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## 查看依赖关系图

依赖项关系图显示了存储库中的依赖关系{% ifversion fpt or ghec %}和依赖项{% endif %}。 有关检测依赖项以及支持哪些生态系统的信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. 可以在“依赖项关系图”下，单击“依赖项”。
![依赖项关系图页面上的“依赖项”选项卡](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %}企业所有者可以在企业级别配置依赖项关系图。 有关详细信息，请参阅“[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”。
{% endif %}

### 依赖项视图

{% ifversion fpt or ghec %} 依赖项按生态系统分组。 您可以展开依赖项以查看其依赖项。  私有仓库、私有包或无法识别文件上的依赖项以纯文本显示。 如果依赖项的包管理器位于公共存储库中，{% data variables.product.product_name %} 将显示指向该存储库的链接。

{% ifversion dependency-submission-api %} 使用依赖项提交 API（beta 版）提交到项目的依赖项虽然也按生态系统分组，但与通过存储库中的清单或锁定文件标识的依赖项分开显示。 这些提交的依赖项在依赖项关系图中显示为“快照依赖项”，因为它们是作为依赖项的快照或集合提交的。 有关使用依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。
{% endif %}

如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问 {% data variables.product.prodname_dependabot_alerts %} 的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} 在存储库的清单或锁定文件中指定的任何直接或间接依赖项按生态系统分组列出。 如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问 {% data variables.product.prodname_dependabot_alerts %} 的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

注意：{% data variables.product.product_name %} 不会填充依赖项视图 。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### 依赖项视图

对于公共仓库，依赖项视图显示其他仓库如何使用该仓库。 要在包管理器中仅显示包含库的存储库，请单击依赖的存储库列表正上方的“编号包”。 依赖项计数是近似值，不一定与列出的依赖项匹配。

![从属者图](/assets/images/help/graphs/dependents_graph.png)

## 为私有仓库启用或禁用依赖关系图

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## 更改“Used by（使用者）”包

可能会注意到某些存储库在“代码”选项卡的边栏中有“使用者”部分。如果存在以下内容，则存储库将包含“使用者”部分：
  * 为存储库启用了依赖关系图（有关更多详细信息，请参阅上一节）。
  * 存储库包含在[受支持的包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)上发布的包。
  * 在生态系统中，你的包具有指向存储源代码的公共存储库的链接。

“Used by（使用者）”部分显示已发现对包的公开引用数量，并显示某些依赖项所有者的头像。

![“使用者”边栏部分](/assets/images/help/repository/used-by-section.png)

单击此部分的任何项都会转到依赖项关系图的“依赖项”选项卡。

“Used by（使用者）”部分表示仓库中的单个包。 如果您对包含多个包的仓库拥有管理员权限，您可以选择“Used by（使用者）”部分表示哪个包。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 在“Code security and analysis（代码安全和分析）”下，单击“Used by counter（使用者计数）”部分中的下拉菜单并选择一个包。
  ![选择“使用者”包](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 依赖关系图疑难排解

如果依赖关系图为空，则包含依赖项的文件可能有问题。 检查该文件以确保其格式对文件类型是正确的。

{% ifversion fpt or ghec %} 如果文件格式正确，请检查文件大小。 除非你是 {% data variables.product.prodname_enterprise %} 用户，否则依赖项关系图将忽略超过 1.5 Mb 的单个清单和锁定文件。 默认情况下，每个仓库最多处理 20 个清单或锁定文件，因此您可以在仓库子目录中将依赖项拆分为较小的文件。{% endif %}

如果清单或锁定文件未经处理，则其依赖项将从依赖项关系图中省略，并且无法接受不安全依赖项检查。

## 延伸阅读

- “[关于依赖项图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- “[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”{% ifversion ghec %}
- “[查看组织的见解](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)”{% endif %}{% ifversion fpt or ghec %}
- “[了解 {% data variables.product.prodname_dotcom %} 用户并保护你的数据](/get-started/privacy-on-github)”{% endif %}
