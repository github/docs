---
title: 筛选安全概述中的警报
intro: 使用筛选器查看特定类别的警报
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
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
shortTitle: Filtering alerts
ms.openlocfilehash: c2ea05ce5c2e65717088324fe818cb58e7a33093
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880748'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## 关于筛选安全概述

可以使用安全概述中的筛选器来根据一系列因素缩小关注范围，例如警报风险级别、警报类型和功能启用。 根据特定视图以及是在组织、团队还是存储库级别进行分析，可以使用不同的筛选器。

{% note %} {% data reusables.security-overview.information-varies-GHAS %} {% endnote %}

## 按存储库筛选

适用于所有组织级别和团队级别的视图。

| 限定符 | 说明 |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | 显示指定存储库的警报。 |

## 按是否启用安全功能进行筛选

适用于组织级别和团队级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
| `code-scanning:enabled` | 显示启用了 {% data variables.product.prodname_code_scanning %} 警报的仓库。 |
| `code-scanning:not-enabled` | 显示未启用 {% data variables.product.prodname_code_scanning %} 警报的仓库。 |
| `secret-scanning:enabled` | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。 |
| `secret-scanning:not-enabled` | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。 |
| `dependabot:enabled` | 显示启用了 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `dependabot:not-enabled` | 显示未启用 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `not-enabled:any` | 显示至少具有一项未启用的安全功能的存储库。 |

## 按仓库类型筛选

适用于组织级别和团队级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
{%- ifversion ghes or ghec %} | `is:public` | 显示公共存储库。 | {%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | 显示内部存储库。 | {%- endif %} | `is:private` | 显示专用存储库。 | | `archived:true` | 显示存档的存储库。 | | `archived:true` | 显示存档的存储库。 |

## 按仓库的风险级别筛选

存储库的风险级别取决于安全功能警报的数量和严重程度。 如果存储库未启用一个或多个安全功能，则存储库的风险级别未知。 如果存储库没有安全功能检测到的风险，则存储库具有明显的风险级别。 适用于组织级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
| `risk:high` | 显示高风险仓库。 |
| `risk:medium` | 显示中风险仓库。 |
| `risk:low` | 显示低风险仓库。 |
| `risk:unknown` | 显示风险级别未知的仓库。 |
| `risk:clear` | 显示没有检测到的风险级别的仓库。 |

## 按警报数量筛选

适用于组织级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_code_scanning %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |
| <code>secret-scanning:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_secret_scanning %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |
| <code>dependabot:<em>n</em></code> | 显示具有 n 个 {% data variables.product.prodname_dependabot_alerts %} 警报的存储库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |


## 按团队筛选

适用于组织级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 TEAM-NAME 具有管理员权限的存储库。 |

## 按主题筛选

适用于组织级别的概述。

| 限定符 | 说明 |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示使用 TOPIC-NAME 分类的存储库。 |

{% ifversion security-overview-views %}

## 按严重性筛选

适用于代码扫描警报视图。 所有代码扫描警报都具有如下所示的类别之一。 可以单击任何结果以查看相关规则的完整详细信息以及触发警报的代码行。

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
## 按 {% data variables.product.prodname_dependabot %} 警报类型筛选

在 {% data variables.product.prodname_dependabot %} 警报视图中可用。 你可以筛选视图来显示随时可修复的 {% data variables.product.prodname_dependabot_alerts %}，或哪些位置的有关暴露的其他信息可用。 可以单击任何结果以查看警报的完整详细信息。

| 限定符 | 说明 |
| -------- | -------- |
|`has:patch`|显示针对安全版本已经可用的 {% data variables.product.prodname_dependabot %} 漏洞警报。|
|`has:vulnerable-calls`|显示 {% data variables.product.prodname_dependabot %} 警报，其中至少检测到一次从存储库到易受攻击的功能的调用。 有关详细信息，请参阅“[查看和更新 Dependabot 警报](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)”。|
{% endif %}

{% endif %}

## 按机密类型筛选

适用于机密扫描警报视图。

| 限定符 | 说明 |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | 显示指定机密和提供程序的警报。 有关详细信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。 |
| `secret-type:CUSTOM-PATTERN` | 显示与指定自定义模式匹配的机密的警报。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。 |

## 按提供程序筛选

适用于机密扫描警报视图。

| 限定符 | 说明 |
| -------- | -------- |
|`provider:PROVIDER_NAME` | 显示指定提供程序的所有机密问题的警报。 有关详细信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。 |
