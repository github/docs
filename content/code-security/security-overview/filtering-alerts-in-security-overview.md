---
title: Filtering alerts in security overview
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
shortTitle: Filter security overview
redirect_from:
  - /code-security/security-overview/filtering-alerts-in-the-security-overview
---

{% ifversion ghae %}
{% data reusables.security-overview.beta %}
{% endif %}

## About filtering security overview

You can use filters in a security overview to narrow your focus based on a range of factors, like alert risk level, alert type, and feature enablement. Different filters are available depending on the specific view{% ifversion ghec or ghes or ghae %} and whether you are viewing data at the enterprise or organization level{% endif %}.

{% ifversion security-overview-displayed-alerts %}
{% note %}
{% data reusables.security-overview.information-varies-GHAS %}
{% endnote %}
{% endif %}

## Filter by repository

Security overview supports free text search for repositories. With free text search, you can search for a keyword, and repositories with names containing that keyword will be displayed. For example, if you search for "test", your search results would include both "test-repository" and "octocat-testing".

To perform an exact search for a single repository, use the `repo` qualifier. If you do not type the name of the repository exactly as it appears, the repository will not be found.

| Qualifier | Description |
| -------- | -------- |
| `repo:REPOSITORY-NAME` | Displays data for the specified repository. |

{% ifversion security-overview-org-risk-coverage-enterprise %}

## Filter by organization

In the enterprise-level views, you can filter the data by organization.

| Qualifier | Description |
| -------- | -------- |
| `org:ORGANIZATION-NAME` | Displays data for the specified organization. |

{% endif %}

## Filter by whether security features are enabled

In the examples below, replace `:enabled` with `:not-enabled` to see repositories where security features are not enabled. These qualifiers are available in the main summary views.

| Qualifier | Description |
| -------- | -------- |
| `code-scanning:enabled` | Display repositories that have configured {% data variables.product.prodname_code_scanning %}. |
| `dependabot:enabled` | Display repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}. |
| `secret-scanning:enabled` | Display repositories that have enabled {% data variables.secret-scanning.alerts %}. {% ifversion security-overview-org-risk-coverage %} |
| `any-feature:enabled` | Display repositories where at least one security feature is enabled. |{% else %}
| `not-enabled:any` | Display repositories with at least one security feature that is not enabled. |{% endif %}

{% ifversion security-overview-org-risk-coverage %}
The organization-level "Security coverage" view includes extra filters.

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualifier | Description |
| -------- | -------- | {% ifversion ghec or ghes > 3.8 %}
| `advanced-security:enabled` | Display repositories that have enabled {% data variables.product.prodname_GH_advanced_security %}. | {% endif %}
| `code-scanning-pull-request-alerts:enabled`| Display repositories that have configured {% data variables.product.prodname_code_scanning %} to run on pull requests. |
| `dependabot-security-updates:enabled` | Display repositories that have enabled {% data variables.product.prodname_dependabot %} security updates.  |
| `secret-scanning-push-protection:enabled` | Display repositories that have enabled push protection for {% data variables.product.prodname_secret_scanning %}. |
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

{% ifversion security-overview-org-risk-coverage-enterprise %}{% else %}

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

{% ifversion security-overview-org-risk-coverage %}

These qualifiers are available in the{% ifversion security-overview-org-risk-coverage-enterprise %}{% else %} enterprise-level "Overview" and in the organization-level{% endif %} "Security risk" view.

{% else %}

These qualifiers are available in the main summary views.

{% endif %}

| Qualifier | Description |
| -------- | -------- |
| `code-scanning-alerts:NUMBER` | Display repositories that have NUMBER {% data variables.product.prodname_code_scanning %} alerts. This qualifier can use `=`, `>` and `<` comparison operators. |
| `secret-scanning-alerts:NUMBER` | Display repositories that have NUMBER {% data variables.secret-scanning.alerts %}. This qualifier can use `=`, `>` and `<` comparison operators. |
| `dependabot-alerts:NUMBER` | Display repositories that have NUMBER {% data variables.product.prodname_dependabot_alerts %}. This qualifier can use `=`, `>` and `<` comparison operators. |

## Filter by team

These qualifiers are available in the main summary views{% ifversion security-overview-acv-filters %} and the alert-centric views for {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_code_scanning %}, and {% data variables.product.prodname_secret_scanning %}{% endif %}.

| Qualifier | Description |
| -------- | -------- |
| `team:TEAM-NAME` | Displays repositories that TEAM-NAME has {% ifversion security-overview-team-write-access -%} write access or {% endif -%} admin access to. |

## Filter by topic

These qualifiers are available in the main summary views{% ifversion security-overview-acv-filters %} and the alert-centric views for {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_code_scanning %}, and {% data variables.product.prodname_secret_scanning %}{% endif %}.

| Qualifier | Description |
| -------- | -------- |
| `topic:TOPIC-NAME` | Displays repositories that are classified with TOPIC-NAME. For more information on repository topics, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)." |

{% ifversion security-overview-dependabot-acv %}

## Additional filters for {% data variables.product.prodname_dependabot %} alert views

You can filter the view to show {% data variables.product.prodname_dependabot_alerts %} that are ready to fix or where additional information about exposure is available. You can click any result to see full details of the alert.

| Qualifier | Description |
| -------- | -------- |
{% ifversion dependabot-alerts-vulnerable-calls or ghes or ghae -%}
|`has:patch`|Displays {% data variables.product.prodname_dependabot %} alerts for vulnerabilities where a secure version is already available.|
|`has:vulnerable-calls`|Displays {% data variables.product.prodname_dependabot %} alerts where at least one call from the repository to a vulnerable function is detected. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)."|
{% endif -%}
|`ecosystem:ECOSYSTEM-NAME`|Displays {% data variables.product.prodname_dependabot_alerts %} detected in the specified ecosystem.|
|`is:open`|Displays open {% data variables.product.prodname_dependabot_alerts %}.|
|`is:closed`|Displays closed {% data variables.product.prodname_dependabot_alerts %}.|
|`package:PACKAGE-NAME`|Displays {% data variables.product.prodname_dependabot_alerts %} detected in the specified package.|
{% ifversion security-overview-alert-views -%}
|`resolution:auto-dismissed`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "auto-dismissed."|
|`resolution:fix-started`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "a fix has already been started."|
|`resolution:fixed`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "fixed."|
|`resolution:inaccurate`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "this alert is inaccurate or incorrect."|
|`resolution:no-bandwidth`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "no bandwidth to fix this."|
|`resolution:not-used`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "vulnerable code is not actually used."|
|`resolution:tolerable-risk`|Displays {% data variables.product.prodname_dependabot_alerts %} closed as "risk is tolerable to this project."|
|`scope:development`|Displays {% data variables.product.prodname_dependabot_alerts %} from the development dependency.|
|`scope:runtime`|Displays {% data variables.product.prodname_dependabot_alerts %} from the runtime dependency.|
{% endif -%}
|`sort:manifest-path`|Displays {% data variables.product.prodname_dependabot_alerts %} grouped by the manifest file path the alerts point to.|
|`sort:most-important`|Displays {% data variables.product.prodname_dependabot_alerts %} from most important to least important, as determined by CVSS score, vulnerability impact, relevancy, and actionability.|
|`sort:newest`|Displays {% data variables.product.prodname_dependabot_alerts %} from newest to oldest.|
|`sort:oldest`|Displays {% data variables.product.prodname_dependabot_alerts %} from oldest to newest.|
|`sort:package-name`|Displays {% data variables.product.prodname_dependabot_alerts %} grouped by the package in which the alert was detected.|
|`sort:severity`|Displays {% data variables.product.prodname_dependabot_alerts %} from most to least severe.
{% endif %}

{% ifversion security-overview-alert-views %}

## Additional filters for {% data variables.product.prodname_code_scanning %} alert views

All code scanning alerts have one of the categories shown below. You can click any result to see full details of the relevant query and the line of code that triggered the alert.

| Qualifier | Description |
| -------- | -------- |
|`is:open`|Displays open {% data variables.product.prodname_code_scanning %} alerts.|
|`is:closed`|Displays closed {% data variables.product.prodname_code_scanning %} alerts.|
|`resolution:false-positive`|Displays {% data variables.product.prodname_code_scanning %} alerts closed as "false positive."|
|`resolution:fixed`|Displays {% data variables.product.prodname_code_scanning %} alerts closed as "fixed."|
|`resolution:used-in-tests`|Displays {% data variables.product.prodname_code_scanning %} alerts closed as "used in tests."|
|`resolution:wont-fix`|Displays {% data variables.product.prodname_code_scanning %} alerts closed as "won't fix."|
|`rule:RULE-NAME`|Displays {% data variables.product.prodname_code_scanning %} alerts opened for the specified rule.|
|`severity:critical`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as critical.|
|`severity:high`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as high.|
|`severity:medium`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as medium.|
|`severity:low`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as low.|
|`severity:error`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as errors.|
|`severity:warning`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as warnings.|
|`severity:note`|Displays {% data variables.product.prodname_code_scanning %} alerts categorized as notes.|
|`sort:created-desc`|Displays {% data variables.product.prodname_code_scanning %} alerts from newest to oldest.|
|`sort:created-asc`|Displays {% data variables.product.prodname_code_scanning %} alerts from oldest to newest.|
|`sort:updated-desc`|Displays {% data variables.product.prodname_code_scanning %} alerts from most recently updated to least recently updated.|
|`sort:updated-asc`|Displays {% data variables.product.prodname_code_scanning %} alerts from least recently updated to most recently updated.|
|`tool:TOOL-NAME`|Displays {% data variables.product.prodname_code_scanning %} alerts detected by the specified tool.|

## Additional filters for {% data variables.product.prodname_secret_scanning %} alert views

| Qualifier | Description |
| -------- | -------- |
|`provider:PROVIDER-NAME` | Displays alerts for all secrets issues by the specified provider.  |
| `secret-type:PROVIDER-PATTERN` | Displays alerts for the specified secret and provider. |
| `secret-type:CUSTOM-PATTERN` | Displays alerts for secrets matching the specified custom pattern.  |
|`is:open`|Displays open {% data variables.product.prodname_secret_scanning %} alerts.|
|`is:closed`|Displays closed {% data variables.product.prodname_secret_scanning %} alerts.|
|`resolution:false-positive`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "false positive."|
|`resolution:pattern-deleted`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "pattern deleted."|
|`resolution:pattern-edited`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "pattern edited."|
|`resolution:revoked`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "revoked."|
|`resolution:used-in-tests`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "used in tests."|
|`resolution:wont-fix`|Displays {% data variables.product.prodname_secret_scanning %} alerts closed as "won't fix."|
|`sort:created-desc`|Displays {% data variables.product.prodname_secret_scanning %} alerts from newest to oldest.|
|`sort:created-asc`|Displays {% data variables.product.prodname_secret_scanning %} alerts from oldest to newest.|
|`sort:updated-desc`|Displays {% data variables.product.prodname_secret_scanning %} alerts from most recently updated to least recently updated.|
|`sort:updated-asc`|Displays {% data variables.product.prodname_secret_scanning %} alerts from least recently updated to most recently updated.|

For more information, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns)."
{% endif %}
