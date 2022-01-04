---
title: Filtering alerts in the security overview
intro: 'Use filters to view specific categories of alerts'
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
versions:
  fpt: '*'
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

## Filtering the list of alerts

### Filter by level of risk for repositories

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk.

| Qualifier | Description |
| -------- | -------- |
| `risk:high` | Display repositories that are at high risk. |
| `risk:medium` | Display repositories that are at medium risk. |
| `risk:low` | Display repositories that are at low risk. |
| `risk:unknown` | Display repositories that are at an unknown level of risk. |
| `risk:clear` | Display repositories that have no detected level of risk. |

### Filter by number of alerts

| Qualifier | Description |
| -------- | -------- |
| <code>code-scanning-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_code_scanning %} alerts. This qualifier can use &gt and &lt comparison operators. |
| <code>secret-scanning-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_secret_scanning %} alerts. This qualifier can use &gt and &lt comparison operators. |
| <code>dependabot-alerts:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use &gt and &lt comparison operators. |

### Filter by whether security features are enabled

| Qualifier | Description |
| -------- | -------- |
| `enabled:code-scanning` | Display repositories that have {% data variables.product.prodname_code_scanning %} enabled. |
| `not-enabled:code-scanning` | Display repositories that do not have {% data variables.product.prodname_code_scanning %} enabled. |
| `enabled:secret-scanning` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `not-enabled:secret-scanning` | Display repositories that have {% data variables.product.prodname_secret_scanning %} enabled. |
| `enabled:dependabot-alerts` | Display repositories that have {% data variables.product.prodname_dependabot_alerts %} enabled. |
| `not-enabled:dependabot-alerts` | Display repositories that do not have {% data variables.product.prodname_dependabot_alerts %} enabled. |

### Filter by repository type

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

### Filter by team

| Qualifier | Description |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Displays repositories that *TEAM-NAME* has admin privileges for. |

### Filter by topic

| Qualifier | Description |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Displays repositories that are classified with *TOPIC-NAME*. |

### Sort the list of alerts

| Qualifier | Description |
| -------- | -------- |
| `sort:risk` | Sorts the repositories in your security overview by risk. |
| `sort:repos` | Sorts the repositories in your security overview alphabetically by name. |
| `sort:code-scanning-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_code_scanning %} alerts. |
| `sort:secret-scanning-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_secret_scanning %} alerts. |
| `sort:dependabot-alerts` | Sorts the repositories in your security overview by number of {% data variables.product.prodname_dependabot_alerts %}. |

### Filter by repository

| Qualifier | Description |
| -------- | -------- |
| `repository:REPOSITORY-NAME` | Displays alerts for the specified repository. |

### Filter by secret types

| Qualifier | Description |
| -------- | -------- |
| `secret-type:SERVICE_PROVIDER` | Displays alerts for the specified secret and provider. |
| `secret-type:CUSTOM-PATTERN` | Displays alerts for secrets matching the specified custom pattern. For more information, see "[Defining custom patterns for secret scanning](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)." |

### Filter by provider

| Qualifier | Description |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider. |
