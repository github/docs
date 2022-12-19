---
title: 筛选安全概述中的警报
intro: 使用筛选器查看特定类别的警报
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Filtering the security overview
ms.openlocfilehash: 60ff823ab0303dfb8fce788e708cb1cd61a9f8e2
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163193'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## 关于筛选安全概述

可以使用安全概述中的筛选器来根据一系列因素缩小关注范围，例如警报风险级别、警报类型和功能启用。 根据特定视图{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} 以及是在企业级还是组织级查看数据{% endif %}，可以使用不同的筛选器。

{% ifversion security-overview-displayed-alerts %} {% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %} {% endif %}

## 按存储库筛选

| 限定符 | 说明 |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | 显示指定存储库的数据。 |

## 按是否启用安全功能进行筛选

在下面的示例中，将 `:enabled` 替换为 `:not-enabled` 以查看未启用安全功能的存储库。 这些限定符在主要的摘要视图中可用。

| 限定符 | 说明 |
| -------- | -------- |
| `code-scanning:enabled` | 显示已设置 {% data variables.product.prodname_code_scanning %} 的存储库。 | 
| `dependabot:enabled` | 显示已启用 {% data variables.product.prodname_dependabot_alerts %} 的存储库。 |
| `secret-scanning:enabled` | 显示已启用 {% data variables.product.prodname_secret_scanning %} 警报的存储库。 {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | 显示至少启用了一项安全功能的存储库。 |{% else %}
| `not-enabled:any` | 显示至少具有一项未启用的安全功能的存储库。 |{% endif %}

{% ifversion security-overview-org-risk-coverage %} 组织级“安全覆盖范围”视图包括额外的筛选器。

{% data reusables.security-overview.beta-org-risk-coverage %}

| 限定符 | 说明 |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| 显示已将 {% data variables.product.prodname_code_scanning %} 配置为在拉取请求上运行的存储库。 |
| `dependabot-security-updates:enabled` | 显示已启用 {% data variables.product.prodname_dependabot %} 安全更新的存储库。  |
| `secret-scanning-push-protection:enabled` | 显示已为 {% data variables.product.prodname_secret_scanning %} 设置推送保护的存储库。 |
{% endif %}

## 按仓库类型筛选

这些限定符在主要的摘要视图中可用。

| 限定符 | 说明 |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | 显示公共存储库。 | {%- endif %} | `is:internal` | 显示内部存储库。 | | `is:private` | 显示专用存储库。 | | `archived:true` | 显示存档的存储库。 | | `archived:false` | 省略存档的存储库。 |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## 按仓库的风险级别筛选

存储库的风险级别取决于安全功能警报的数量和严重程度。 如果存储库未启用一个或多个安全功能，则存储库的风险级别未知。 如果存储库没有安全功能检测到的风险，则存储库具有明显的风险级别。 

{% ifversion security-overview-org-risk-coverage %} 这些限定符在企业级视图中可用。
{% endif %}

| 限定符 | 说明 |
| -------- | -------- |
| `risk:high` | 显示高风险仓库。 |
| `risk:medium` | 显示中风险仓库。 |
| `risk:low` | 显示低风险仓库。 |
| `risk:unknown` | 显示风险级别未知的仓库。 |
| `risk:clear` | 显示没有检测到的风险级别的仓库。 |
{% endif %}

## 按警报数量筛选

{% ifversion security-overview-org-risk-coverage %}这些限定符在企业级“概述”和组织级“安全风险”视图中可用。{% else %}这些限定符在主要的摘要视图中可用。{% endif %}

| 限定符 | 说明 |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_code_scanning %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |
| <code>secret-scanning:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_secret_scanning %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |
| <code>dependabot:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_dependabot_alerts %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |


## 按团队筛选

这些限定符在主要的摘要视图中可用。

| 限定符 | 说明 |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 TEAM-NAME 具有管理员权限的存储库。 |

## 按主题筛选

这些限定符在主要的摘要视图中可用。

| 限定符 | 说明 |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示使用 TOPIC-NAME 分类的存储库。 |

{% ifversion security-overview-alert-views %}

## {% data variables.product.prodname_code_scanning %} 警报视图的其他筛选器

所有代码扫描警报都具有如下所示的类别之一。 可以单击任何结果，以查看相关查询的完整详细信息以及触发警报的代码行。

| 限定符 | 说明 |
| -------- | -------- |
|`severity:critical`|显示分类为“严重”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:high`|显示分类为“高”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:medium`|显示分类为“中等”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:low`|显示分类为“低”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:error`|显示分类为“错误”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:warning`|显示分类为“警告”的 {% data variables.product.prodname_code_scanning %} 警报。|
|`severity:note`|显示分类为“备注”的 {% data variables.product.prodname_code_scanning %} 警报。|

{% ifversion dependabot-alerts-vulnerable-calls %}
## {% data variables.product.prodname_dependabot %} 警报视图的其他筛选器

你可以筛选视图来显示随时可修复的 {% data variables.product.prodname_dependabot_alerts %}，或哪些位置的有关暴露的其他信息可用。 可以单击任何结果以查看警报的完整详细信息。

| 限定符 | 说明 |
| -------- | -------- |
|`has:patch`|显示针对安全版本已经可用的 {% data variables.product.prodname_dependabot %} 漏洞警报。|
|`has:vulnerable-calls`|显示 {% data variables.product.prodname_dependabot %} 警报，其中至少检测到一次从存储库到易受攻击的功能的调用。 有关详细信息，请参阅“[查看和更新 Dependabot 警报](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)”。|
{% endif %}

{% endif %}

## {% data variables.product.prodname_secret_scanning %} 警报视图的其他筛选器

| 限定符 | 说明 |
| -------- | -------- |
|`provider:PROVIDER_NAME` | 显示指定提供程序的所有机密问题的警报。  |
| `secret-type:SERVICE_PROVIDER` | 显示指定机密和提供程序的警报。 |
| `secret-type:CUSTOM-PATTERN` | 显示与指定自定义模式匹配的机密的警报。  |

有关详细信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。

