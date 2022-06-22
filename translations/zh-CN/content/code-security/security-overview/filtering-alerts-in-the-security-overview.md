---
title: 筛选安全性概述中的警报
intro: 使用筛选器查看特定类别的警报
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
versions:
  ghae: '*'
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: 筛选警报
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## 关于筛选安全性概述

可以使用安全概述中的筛选器，根据一系列因素（如警报风险级别、警报类型和功能启用）缩小关注范围。 Different filters are available depending on the specific view and whether your analysis is at the organization, team or repository level.

## 按仓库过滤

在所有组织级别和团队级别视图中可用。

| 限定符                    | 描述          |
| ---------------------- | ----------- |
| `repo:REPOSITORY-NAME` | 显示指定存储库的警报。 |

## 按是否启用安全功能进行筛选

在组织级别和团队级别概述中可用。

| 限定符                           | 描述                                                                     |
| ----------------------------- | ---------------------------------------------------------------------- |
| `code-scanning:enabled`       | 显示启用了 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `code-scanning:not-enabled`   | 显示未启用 {% data variables.product.prodname_code_scanning %} 警报的仓库。     |
| `secret-scanning:enabled`     | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `secret-scanning:not-enabled` | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。   |
| `dependabot:enabled`          | 显示启用了 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `dependabot:not-enabled`      | 显示未启用 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 |
| `not-enabled:any`             | 显示至少具有一个未启用的安全功能的存储库。                                                  |

## 按仓库类型筛选

在组织级别和团队级别概述中可用。

| 限定符 | 描述 |
| --- | -- |
|     |    |
{%- ifversion ghes or ghec %}
| `is:public` | 显示公共存储库。 |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | 显示内部存储库。 |
{%- endif %}
| | `is:private` | 显示私有仓库。 | | `archived:true` | 显示存档的存储库。 | | `archived:true` | 显示存档的存储库。 |

## 按仓库的风险级别筛选

存储库的风险级别取决于来自安全功能的警报的数量和严重性。 如果未为存储库启用一个或多个安全功能，则该存储库将具有未知的风险级别。 如果存储库没有安全功能检测到的风险，则该存储库将具有明确的风险级别。 在组织级别概述中可用。

| 限定符            | 描述               |
| -------------- | ---------------- |
| `risk:high`    | 显示高风险仓库。         |
| `risk:medium`  | 显示中风险仓库。         |
| `risk:low`     | 显示低风险仓库。         |
| `risk:unknown` | 显示风险级别未知的仓库。     |
| `risk:clear`   | 显示没有检测到的风险级别的仓库。 |

## 按警报数量筛选

在组织级别概述中可用。

| 限定符                       | 描述                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_code_scanning %} 警报的仓库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。     |
| <code>secret-scanning:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_secret_scanning %} 警报的仓库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。   |
| <code>dependabot:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 此限定符可以使用 `=`、`>` 和 `<` 比较运算符。 |


## 按团队筛选

在组织级别概述中可用。

| 限定符                       | 描述                         |
| ------------------------- | -------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 *TEAM-NAME* 具有管理员权限的仓库。 |

## 按主题筛选

在组织级别概述中可用。

| 限定符                       | 描述                      |
| ------------------------- | ----------------------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示分类为 *TOPIC-NAME* 的仓库。 |

{% ifversion security-overview-views %}

## 按严重程度筛选

在代码扫描警报视图中可用。 所有代码扫描警报都有如下所示的类别之一。 可以单击任何结果以查看相关规则的完整详细信息，以及触发警报的代码行。

| 限定符                 | 描述                                                                 |
| ------------------- | ------------------------------------------------------------------ |
| `severity:critical` | 显示分类为严重的 {% data variables.product.prodname_code_scanning %} 警报。 |
| `severity:high`     | 显示分类为高的 {% data variables.product.prodname_code_scanning %} 警报。  |
| `severity:medium`   | 显示分类为中的 {% data variables.product.prodname_code_scanning %} 警报。  |
| `severity:low`      | 显示分类为低的 {% data variables.product.prodname_code_scanning %} 警报。  |
| `severity:error`    | 显示分类为错误的 {% data variables.product.prodname_code_scanning %} 警报。 |
| `severity:warning`  | 显示分类为警告的 {% data variables.product.prodname_code_scanning %} 警报。 |
| `severity:note`     | 显示分类为注释的 {% data variables.product.prodname_code_scanning %} 警报。 |

{% ifversion dependabot-alerts-vulnerable-calls %}
## 按 {% data variables.product.prodname_dependabot %} 警报类型筛选

在 {% data variables.product.prodname_dependabot %} 警报视图中可用。 您可以筛选视图以显示可以修复的 {% data variables.product.prodname_dependabot_alerts %}，或有关曝光的其他信息可用的位置。 可以单击任何结果以查看警报的完整详细信息。

| 限定符                    | 描述                                                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `has:patch`            | 显示 {% data variables.product.prodname_dependabot %} 警报，以显示已提供安全版本的漏洞。                                                                                                                                                                                     |
| `has:vulnerable-calls` | 显示 {% data variables.product.prodname_dependabot %} 警报，其中至少检测到从存储库到易受攻击的函数的一次调用。 更多信息请参阅“[查看和更新 Dependabot 警报](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)。” |
{% endif %}

{% endif %}

## 按机密类型筛选

在机密扫描警报视图中可用。

| 限定符                            | 描述                                                                                                                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER` | 显示指定机密和提供程序的警报。 更多信息请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。 |
| `secret-type:CUSTOM-PATTERN`   | 显示与指定自定义模式匹配的机密的警报。 更多信息请参阅“[定义机密扫描的自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。                            |

## 按提供商筛选

在机密扫描警报视图中可用。

| 限定符                      | 描述                                                                                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider:PROVIDER_NAME` | 按指定的提供商显示所有机密问题的警报。 更多信息请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns)”。 |
