---
title: Filtering alerts in the security overview
intro: Use filters to view specific categories of alerts
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
shortTitle: Filtering alerts
---

{% data reusables.security-center.beta %}

## About filtering the security overview

You can use filters in the security overview to narrow your focus based on a range of factors, like alert risk level, alert type and feature enablement. Different filters are available depending on the specific view and whether you analysing at the organization, team or repository level.

## Filter by repository

Available in all organization-level and team-level views.

| Qualifier | Description |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Displays alerts for the specified repository. |

## Filter by whether security features are enabled

Available in the organization-level and team-level overview.

| Qualifier | Description |
| -------- | -------- |
| `code-scanning:enabled` | Display repositories that have {% data variables.product.prodname_code_scanning %} enabled. |
| `code-scanning:not-enabled` | Display repositories that do not have {% data variables.product.prodname_code_scanning %} enabled. |
| `secret-scanning:enabled` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `secret-scanning:not-enabled` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `dependabot:enabled` | Display repositories that have {% data variables.product.prodname_dependabot_alerts %} enabled. |
| `dependabot:not-enabled` | Display repositories that do not have {% data variables.product.prodname_dependabot_alerts %} enabled. |
| `not-enabled:any` | Display repositories with at least one security feature that is not enabled. |

## Filter by repository type

Available in the organization-level and team-level overview.

| Qualifier | Description |
| -------- | -------- |
{%- ifversion fpt or ghes or ghec %}
| `is:public` | Display public repositories. |
{%- endif %}
{%- ifversion ghes or ghec or ghae %}
| `is:internal` | Display internal repositories. |
{%- endif %}
| `is:private` | Display private repositories. |
| `archived:true` | Display archived repositories. |
| `archived:true` | Display archived repositories. |

## Filter by level of risk for repositories

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk. Available in the organization-level overview.

| Qualifier | Description |
| -------- | -------- |
| `risk:high` | Display repositories that are at high risk. |
| `risk:medium` | Display repositories that are at medium risk. |
| `risk:low` | Display repositories that are at low risk. |
| `risk:unknown` | Display repositories that are at an unknown level of risk. |
| `risk:clear` | Display repositories that have no detected level of risk. |

## Filter by number of alerts

Available in the organization-level overview.

| Qualifier | Description |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_code_scanning %} alerts. This qualifier can use `=`, `>` and `<` comparison operators. |
| <code>secret-scanning:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_secret_scanning %} alerts. This qualifier can use `=`, `>` and `<` comparison operators. |
| <code>dependabot:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use `=`, `>` and `<` comparison operators. |


## Filter by team

Available in the organization-level overview.

| Qualifier | Description |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Displays repositories that *TEAM-NAME* has admin privileges for. |

## Filter by topic

Available in the organization-level overview.

| Qualifier | Description |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Displays repositories that are classified with *TOPIC-NAME*. |

{% if security-overview-views %}

## Filter by severity

Available in the code scanning alert views. All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant rule, and the line of code that triggered the alert.

| Qualifier | Description |
| -------- | -------- |
|`severity:critical`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as critical.|
|`severity:high`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as high.|
|`severity:medium`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as medium.|
|`severity:low`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as low.|
|`severity:error`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as errors.|
|`severity:warning`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as warnings.|
|`severity:note`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as notes.|

{% endif %}

## Filter by secret types

Available in the secret scanning alert views.

| Qualifier | Description |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | Displays alerts for the specified secret and provider. For more information, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)." |
| `secret-type:CUSTOM-PATTERN` | Displays alerts for secrets matching the specified custom pattern. {% ifversion not fpt %}For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."{% endif %} |

## Filter by provider

Available in the secret scanning alert views.

| Qualifier | Description |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider. For more information, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)." |
