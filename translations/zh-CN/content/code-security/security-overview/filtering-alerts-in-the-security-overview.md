---
title: Filtering alerts in the security overview
intro: Use filters to view specific categories of alerts
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
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

## About filtering the security overview

You can use filters in a security overview to narrow your focus based on a range of factors, like alert risk level, alert type, and feature enablement. Different filters are available depending on the specific view{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} and whether you are viewing data at the enterpise or organization level{% endif %}.

{% ifversion security-overview-displayed-alerts %}
{% note %}
{% data reusables.security-overview.information-varies-GHAS %}
{% endnote %}
{% endif %}

## Filter by repository

| Qualifier | Description |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Displays data for the specified repository. |

## Filter by whether security features are enabled

In the examples below, replace `:enabled` with `:not-enabled` to see repositories where security features are not enabled. These qualifiers are available in the main summary views.

| Qualifier | Description |
| -------- | -------- |
| `code-scanning:enabled` | Display repositories that have set up {% data variables.product.prodname_code_scanning %}. | 
| `dependabot:enabled` | Display repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}. |
| `secret-scanning:enabled` | Display repositories that have enabled {% data variables.product.prodname_secret_scanning %} alerts. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Display repositories where at least one security feature is enabled. |{% else %}
| `not-enabled:any` | Display repositories with at least one security feature that is not enabled. |{% endif %}

{% ifversion security-overview-org-risk-coverage %}
The organization-level Security Coverage view includes extra filters.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualifier | Description |
| -------- | -------- |
| `code-scanning-pull-request-alerts:enabled`| Display repositories that have configured {% data variables.product.prodname_code_scanning %} to run on pull requests. |
| `dependabot-security-updates:enabled` | Display repositories that have enabled {% data variables.product.prodname_dependabot %} security updates.  |
| `secret-scanning-push-protection:enabled` | Display repositories that have set up push protection for {% data variables.product.prodname_secret_scanning %}. |
{% endif %}

## Filter by repository type

These qualifiers are available in the main summary views.

| Qualifier | Description |
| -------- | -------- |
{%- ifversion ghes or ghec %}
| `is:public` | Display public repositories. |
{%- endif %}
| `is:internal` | Display internal repositories. |
| `is:private` | Display private repositories. |
| `archived:true` | Display archived repositories. |
| `archived:false` | Omit archived repositories. |

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Filter by level of risk for repositories

The level of risk for a repository is determined by the number and severity of alerts from security features. If one or more security features are not enabled for a repository, the repository will have an unknown level of risk. If a repository has no risks that are detected by security features, the repository will have a clear level of risk. 

{% ifversion security-overview-org-risk-coverage %}
These qualifiers are available in the enterprise-level view.
{% endif %}

| Qualifier | Description |
| -------- | -------- |
| `risk:high` | Display repositories that are at high risk. |
| `risk:medium` | Display repositories that are at medium risk. |
| `risk:low` | Display repositories that are at low risk. |
| `risk:unknown` | Display repositories that are at an unknown level of risk. |
| `risk:clear` | Display repositories that have no detected level of risk. |
{% endif %}

## Filter by number of alerts

{% ifversion security-overview-org-risk-coverage %}These qualifiers are available in the enterprise-level Overview and in the organization-level Security Risk view.{% else %}These qualifiers are available in the main summary views.{% endif %}

| Qualifier | Description |
| -------- | -------- |
| <code>code-scanning:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_code_scanning %} alerts. This qualifier can use `=`, `>` and `<` comparison operators. |
| <code>secret-scanning:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_secret_scanning %} alerts. This qualifier can use `=`, `>` and `<` comparison operators. |
| <code>dependabot:<em>n</em></code> | Display repositories that have *n* {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use `=`, `>` and `<` comparison operators. |


## Filter by team

These qualifiers are available in the main summary views.

| Qualifier | Description |
| -------- | -------- |
| <code>team:<em>TEAM-NAME</em></code> | Displays repositories that *TEAM-NAME* has admin privileges for. |

## Filter by topic

These qualifiers are available in the main summary views.

| Qualifier | Description |
| -------- | -------- |
| <code>topic:<em>TOPIC-NAME</em></code> | Displays repositories that are classified with *TOPIC-NAME*. |

{% ifversion security-overview-alert-views %}

## Additional filters for {% data variables.product.prodname_code_scanning %} alert views

All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant query and the line of code that triggered the alert.

| Qualifier | Description |
| -------- | -------- |
|`severity:critical`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as critical.|
|`severity:high`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as high.|
|`severity:medium`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as medium.|
|`severity:low`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as low.|
|`severity:error`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as errors.|
|`severity:warning`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as warnings.|
|`severity:note`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as notes.|

{% ifversion dependabot-alerts-vulnerable-calls %}
## Additional filters for {% data variables.product.prodname_dependabot %} alert views

You can filter the view to show {% data variables.product.prodname_dependabot_alerts %} that are ready to fix or where additional information about exposure is available. You can click any result to see full details of the alert.

| Qualifier | Description |
| -------- | -------- |
|`has:patch`|Displays {% data variables.product.prodname_dependabot %} alerts for vulnerabilities where a secure version is already available.|
|`has:vulnerable-calls`|Displays {% data variables.product.prodname_dependabot %} alerts where at least one call from the repository to a vulnerable function is detected. For more information, see "[Viewing and updating Dependabot alerts](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)."|
{% endif %}

{% endif %}

## Additional filters for {% data variables.product.prodname_secret_scanning %} alert views

| Qualifier | Description |
| -------- | -------- |
|`provider:PROVIDER_NAME` | Displays alerts for all secrets issues by the specified provider.  |
| `secret-type:SERVICE_PROVIDER` | Displays alerts for the specified secret and provider. |
| `secret-type:CUSTOM-PATTERN` | Displays alerts for secrets matching the specified custom pattern.  |

For more information, see "[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns)."

