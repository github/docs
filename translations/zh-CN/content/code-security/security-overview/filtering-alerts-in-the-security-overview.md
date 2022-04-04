---
title: 筛选安全性概述中的警报
intro: 使用筛选器查看特定类别的警报
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  fpt: '*'
  ghae: issue-4554
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

{% data reusables.security-center.beta %}

## 关于筛选安全性概述

You can use filters in the security overview to narrow your focus based on a range of factors, like alert risk level, alert type and feature enablement. Different filters are available depending on the specific view and whether you analysing at the organization, team or repository level.

## 按仓库过滤

Available in all organization-level and team-level views.

| 限定符                    | 描述                                            |
| ---------------------- | --------------------------------------------- |
| `repo:REPOSITORY-NAME` | Displays alerts for the specified repository. |

## Filter by whether security features are enabled

Available in the organization-level and team-level overview.

| 限定符                           | 描述                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `code-scanning:enabled`       | 显示启用了 {% data variables.product.prodname_code_scanning %} 警报的仓库。           |
| `code-scanning:not-enabled`   | 显示未启用 {% data variables.product.prodname_code_scanning %} 警报的仓库。           |
| `secret-scanning:enabled`     | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。         |
| `secret-scanning:not-enabled` | 显示启用了 {% data variables.product.prodname_secret_scanning %} 警报的仓库。         |
| `dependabot:enabled`          | 显示启用了 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。       |
| `dependabot:not-enabled`      | 显示未启用 {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。       |
| `not-enabled:any`             | Display repositories with at least one security feature that is not enabled. |

## 按仓库类型筛选

Available in the organization-level and team-level overview.

| 限定符 | 描述 |
| --- | -- |
|     |    |
{%- ifversion fpt or ghes or ghec %}
| `is:public` | Display public repositories. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Display internal repositories. |
{%- endif %}
| `is:private` | Display private repositories. | | `archived:true` | Display archived repositories. | | `archived:true` | Display archived repositories. |

## 按仓库的风险级别筛选

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk. Available in the organization-level overview.

| 限定符            | 描述               |
| -------------- | ---------------- |
| `risk:high`    | 显示高风险仓库。         |
| `risk:medium`  | 显示中风险仓库。         |
| `risk:low`     | 显示低风险仓库。         |
| `risk:unknown` | 显示风险级别未知的仓库。     |
| `risk:clear`   | 显示没有检测到的风险级别的仓库。 |

## 按警报数量筛选

Available in the organization-level overview.

| 限定符                       | 描述                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>code-scanning:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_code_scanning %} 警报的仓库。 This qualifier can use `=`, `>` and `<` comparison operators.     |
| <code>secret-scanning:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_secret_scanning %} 警报的仓库。 This qualifier can use `=`, `>` and `<` comparison operators.   |
| <code>dependabot:<em>n</em></code> | 显示具有 *n* {% data variables.product.prodname_dependabot_alerts %} 警报的仓库。 This qualifier can use `=`, `>` and `<` comparison operators. |


## 按团队筛选

Available in the organization-level overview.

| 限定符                       | 描述                         |
| ------------------------- | -------------------------- |
| <code>team:<em>TEAM-NAME</em></code> | 显示 *TEAM-NAME* 具有管理员权限的仓库。 |

## 按主题筛选

Available in the organization-level overview.

| 限定符                       | 描述                      |
| ------------------------- | ----------------------- |
| <code>topic:<em>TOPIC-NAME</em></code> | 显示分类为 *TOPIC-NAME* 的仓库。 |

{% if security-overview-views %}

## Filter by severity

Available in the code scanning alert views. All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant rule, and the line of code that triggered the alert.

| 限定符                 | 描述                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `severity:critical` | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as critical. |
| `severity:high`     | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as high.     |
| `severity:medium`   | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as medium.   |
| `severity:low`      | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as low.      |
| `severity:error`    | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as errors.   |
| `severity:warning`  | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as warnings. |
| `severity:note`     | Displays {% data variables.product.prodname_code_scanning %} alerts categorized as notes.    |

{% endif %}

## Filter by secret types

Available in the secret scanning alert views.

| 限定符                                                                                                                                                                                        | 描述                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `secret-type:SERVICE_PROVIDER`                                                                                                                                                             | Displays alerts for the specified secret and provider. For more information, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)." |
| `secret-type:CUSTOM-PATTERN`                                                                                                                                                               | Displays alerts for secrets matching the specified custom pattern.                                                                                                                                                   |
| {% ifversion not fpt %}For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %} |                                                                                                                                                                                                                      |

## Filter by provider

Available in the secret scanning alert views.

| 限定符                      | 描述                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider. For more information, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)." |
