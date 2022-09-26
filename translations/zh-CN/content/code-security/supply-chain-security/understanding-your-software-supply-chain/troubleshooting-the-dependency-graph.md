---
title: 依赖关系图疑难排解
intro: 如果依赖项关系图报告的依赖项信息不符合你的预期，则需要考虑许多因素，你可以检查各种问题。
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 51a1da4eff062263aeca52de02b764385e7e1184
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '146458242'
---
{% data reusables.dependabot.result-discrepancy %}

## 依赖项图是否只查找清单和锁文件中的依赖项？

依赖项关系图{% ifversion dependency-submission-api %}自动{% endif %}包含在环境中明确声明的依赖项的信息。 也就是说，在清单或锁定文件中指定的依赖项。 依赖项图通常还包括过渡依赖项，即使它们没有在锁定文件中指定，也可以通过查看清单文件中的依赖项来实现。

依赖项关系图不会{% ifversion dependency-submission-api %}自动{% endif %}包含“松散”依赖项。 “宽松”依赖项是指从另一个来源复制并直接或在存档文件（例如 ZIP 或 JAR 文件）中检入仓库的单个文件，而不是在包管理器的清单或锁定文件中引用的文件。 

{% ifversion dependency-submission-api %}但是，可以使用依赖项提交 API（测试版）将依赖项添加到项目的依赖项关系图中，即使依赖项未在清单或锁定文件中声明，例如在生成项目时解析的依赖项。 依赖项关系图将显示按生态系统分组的提交依赖项，但与从清单或锁定文件解析的依赖项是分开的。 有关依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。{% endif %}

检查：是否在存储库清单或锁定文件中未指定组件的依赖项？

## 依赖项图是否检测使用变量指定的依赖项？

依赖项图在清单被推送到 {% data variables.product.prodname_dotcom %} 时分析它们。 因此，依赖项图无法访问项目的构建环境，从而无法解析清单中使用的变量。 如果在清单中使用变量指定名称，或指定依赖项的版本（更常见），则该依赖项不会{% ifversion dependency-submission-api %}自动{% endif %}包括在依赖项关系图中。

{% ifversion dependency-submission-api %}但是，可以使用依赖项提交 API（测试版）将依赖项添加到项目的依赖项关系图中，即使仅当生成项目时才解析依赖项。 有关依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。{% endif %}

检查：在清单中缺少的依赖项是否使用变量声明其名称或版本？

## 是否存在影响依赖项图数据的限制？

是的，依赖项图有两个限制类别：

1. 处理限制

    这会影响 {% data variables.product.prodname_dotcom %} 中显示的依赖项图，还会阻止 {% data variables.product.prodname_dependabot_alerts %} 的创建。

    仅为企业帐户处理大小超过 0.5 MB 的清单。 对于其他帐户，将忽略超过 0.5 MB 的清单，并且不会创建 {% data variables.product.prodname_dependabot_alerts %}。

    默认情况下， {% data variables.product.prodname_dotcom %} 对每个仓库处理的清单不会超过 20 个。 对于超出此限制的清单，不会创建 {% data variables.product.prodname_dependabot_alerts %}。 如果您需要提高限值，请联系 {% data variables.contact.contact_support %}。 

2. 可视化限制

    这会影响 {% data variables.product.prodname_dotcom %} 中依赖项图的显示内容。 但是，它们不会影响 {% data variables.product.prodname_dependabot_alerts %} 的创建。

    仓库依赖项图的依赖项视图只显示 100 个清单。 通常这就足够了，因为它明显高于上述处理限制。 处理限制超过 100 的情况下，对于任何未在 {% data variables.product.prodname_dotcom %} 中显示的任何清单，仍会创建 {% data variables.product.prodname_dependabot_alerts %}。

检查：在超过 0.5 MB 的清单文件或包含大量清单的存储库中是否存在缺少的依赖项？

## 延伸阅读

- “[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”
- “[管理存储库的安全性和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”
- “[漏洞依赖项检测疑难解答](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)”{% ifversion fpt or ghec or ghes > 3.2 %}
- “[排查 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”{% endif %}
