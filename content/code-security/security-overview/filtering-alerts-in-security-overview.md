---
title: Filtering alerts in security overview
intro: Use filters to view specific categories of alerts
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
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

## About filtering security overview

You can use filters in a security overview to narrow your focus based on a range of factors, like alert risk level, alert type, and feature enablement. Different filters are available depending on the specific view, and whether you are viewing data at the enterprise or organization level.

{% note %}

{% data reusables.security-overview.information-varies-GHAS %}

{% endnote %}

## Filter logic for security overview

You can apply filters and use logical operators to display results that meet specific criteria on security overview. By default, if you apply several different filters, you are using AND logic, meaning you will only see results that match _every_ filter you apply. For example, if you add the filter `is:public dependabot:enabled`, you will only see results from repositories that are public _and_ have {% data variables.product.prodname_dependabot %} enabled.

Currently, there are two logical operators that you can apply to your filters on security overview:

* The `-` operator applies NOT logic, displaying all results _except_ those that match the specified filter. To use the `-` operator, add it to the beginning of a filter. For example, filtering for `-repo:REPOSITORY-NAME` will display data from all repositories _except_ `REPOSITORY-NAME`.
* The `,` operator applies OR logic, displaying results that match _any_ of the specified values for a single filter. To use the `,` operator, add it between each listed value for a filter. For example, filtering for `is:public,private` will display data from all repositories that are public _or_ private. Similarly, if you apply the same filter multiple times with different values, you are using OR logic. For example, `is:public is:private` is equivalent to `is:public,private`.

## Filter methods

All security views have features to help you define filters. These provide an easy way to set up filters and understand the options available.

* **Interactive search text box.** When you click in the search box and press the keyboard "Space" key, a pop-up text box shows the filter options available in that view. You can use the mouse or keyboard arrow keys to select the options you want in the text box before pressing the keyboard "Return" key to add the filter. Supported for all views.
* **Dropdown selectors and toggles.** Shown at the end of the "Search text box" or in the header of the data table. As you choose the data to view, the filters shown in the search text box are updated accordingly. Supported on the alert views.{% ifversion security-overview-3-13-overview %}
* **Advanced filters dialog.** When you click the **{% octicon "filter" aria-label="Advanced filter dialog" %} Filter** button, you can use dropdown lists to select the "Qualifier", "Operator", and "Values" for each filter. Supported on the "Overview" and metric views.{% endif %}

## Repository name, visibility, and status filters

In all views, there are two methods for filtering results by repository name.

* **Free text or keyword search.** Display data for all repositories with a name that contains the keyword. For example, search for `test` to show data for both the "test-repository" and "octocat-testing" repositories.
* **`repo` qualifier.** Display data only for the repository that exactly matches the value of the qualifier. For example, search for `repo:octocat-testing` to show data for only the "octocat-testing" repository.

You can also filter by repository visibility (internal, private, or public) and archive status.

| Qualifier | Description | Views |
|--------|--------|------|
| {% ifversion security-overview-dashboard %} |
| `visibility` | Display data for all repositories that are `public`, `private`, or `internal`. | "Overview" and metrics |
| {% endif %} |
| `is` | Display data for all repositories that are `public`, `private`, or `internal`. | "Risk" and "Coverage" |
| `archived` | Display only data for archived (`true`) or active (`false`) repositories. | All except "Alerts" views |

## Team and topic filters

These qualifiers are available in all views.

| Qualifier | Description |
|--------|--------|
| `team` | Display data for all repositories that the specified team has {% ifversion security-overview-team-write-access -%} write access or {% endif -%} admin access to. For more information on repository roles, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization)". |
| `topic` | Display data for all repositories that are classified with a specific topic. For more information on repository topics, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)." |

{% ifversion security-overview-repository-properties %}

## Custom repository property filters

{% note %}

**Note:** Repository properties are in public beta and subject to change.

{% endnote %}

Custom repository properties are metadata that organization owners can add to repositories in an organization, providing a way to group repositories by the information you are interested in. For example, you can add custom repository properties for compliance frameworks or data sensitivity. For more information on adding custom repository properties, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)."

If you add custom properties to your organization and set values for repositories, you can filter the "Overview" using those custom properties as qualifiers. These qualifiers are available in both the organization-level and enterprise-level views.

* **`props.CUSTOM_PROPERTY_NAME` qualifier.** The qualifier consists of a `props.` prefix, followed by the name of the custom property. For example, `props.data_sensitivity:high` displays results for repositories with the `data_sensitivity` property set to the value `high`. |

{% endif %}

{% ifversion security-overview-dashboard-enterprise %}

## Repository owner name and type filters

In enterprise-level views, you can limit the data to repositories owned by a single organization in your enterprise{% ifversion ghec %} or an {% data variables.product.prodname_emu %} (EMU) account. If you are an owner of an {% data variables.enterprise.prodname_emu_enterprise %}, you can also filter by repository owner type{% endif %}.

| Qualifier | Description | Views |
| -------- | -------- | ------ |
| `owner` | Display data for all repositories owned by one account owner. | Most views |
|  {% ifversion ghec %} |
| `owner-type` | Display data for all repositories owned by an organization or a user account in your enterprise. | Most views, but only if you are an owner of an {% data variables.enterprise.prodname_emu_enterprise %} |
|  {% endif %} |
| `org` | Display data for repositories owned by one organization. | {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_code_scanning %} alerts |

{% elsif security-overview-org-risk-coverage-enterprise %}

In enterprise-level views, you can limit the data to repositories owned by a single organization in your enterprise. Use the `org` qualifier to display data for repositories owned by one organization.

{% endif %}

## Security feature enablement filters

In the "Risk" and "Coverage" views, you can show data only for repositories where security features are enabled (`enabled`), or not enabled (`not-enabled`).

| Qualifier | Description |
| -------- | -------- |
| `code-scanning-alerts` | Display repositories that have configured {% data variables.product.prodname_code_scanning %}. |
| `dependabot-alerts` | Display repositories that have enabled {% data variables.product.prodname_dependabot_alerts %}. |
| `secret-scanning-alerts` | Display repositories that have enabled {% data variables.secret-scanning.alerts %}. |
| `any-feature` | Display repositories where at least one security feature is enabled. |

### Extra filters for the "Coverage" view

{% data reusables.security-overview.beta-org-risk-coverage %}

| Qualifier | Description |
| -------- | -------- |
| `advanced-security` | Display data for repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled or not enabled. |
| `code-scanning-default-setup`| Display data for repositories where {% data variables.product.prodname_code_scanning %} is enabled or not enabled using {% data variables.product.prodname_codeql %} default setup. |
| `code-scanning-pull-request-alerts`| Display data for repositories where {% data variables.product.prodname_code_scanning %} is enabled or not enabled to run on pull requests. |
| `dependabot-security-updates` | Display data for repositories where {% data variables.product.prodname_dependabot_security_updates %} is enabled or not enabled.  |
| `secret-scanning-push-protection` | Display data for repositories where push protection for {% data variables.product.prodname_secret_scanning %} is enabled or not enabled. |

{% ifversion security-overview-org-risk-coverage-enterprise %}{% else %}

## Repository risk-level filtering

The level of risk for a repository is determined by the number and severity of alerts from security features. You can filter on the level of risk using the `risk` qualifier.

* The level of risk can be one of `high`, `medium`, or `low`.
* If one or more security features are not enabled for a repository, the repository has an `unknown` level of risk.
* If all security features are enabled and no alerts are report, the repository has a `clear` level of risk.

{% endif %}

## Alert number filters

{% ifversion security-overview-org-risk-coverage-enterprise %}In the "Risk" view, you can filter repositories by the number of alerts they have of a specific type.{% else %}These qualifiers are available in the enterprise-level "Overview" and in the organization-level "Security risk" view.{% endif %}

| Qualifier | Description |
| -------- | -------- |
| `code-scanning-alerts` | Display data for repositories that have exactly (`=`), more than (`>`) or fewer than (`<`) a specific number of {% data variables.product.prodname_code_scanning %} alerts. For example: `code-scanning-alerts:>100` for repositories with more than 100 alerts. |
| `dependabot-alerts` | Display data for repositories that have a specific number (`=`), more than (`>`) or fewer than (`<`) a specific number of  {% data variables.product.prodname_dependabot_alerts %}. For example: `dependabot-alerts:<=10` for repositories with fewer than or equal to 10 alerts.|
| `secret-scanning-alerts` | Display data for repositories that have a specific number (`=`), more than (`>`) or fewer than (`<`) a specific number of  {% data variables.secret-scanning.alerts %}. For example: `secret-scanning-alerts:=10` for repositories with exactly 10 alerts.|

{% ifversion security-overview-dashboard %}

## Alert type and property filters

You can filter the "Overview" view by the type{% ifversion security-overview-3-14-overview %} and property{% endif %} of alerts. Use the `tool` qualifier to display only data for alerts generated by a specific tool{% ifversion security-overview-3-14-overview %} or type of tool{% endif %}.

* `tool:codeql` to show data only for {% data variables.product.prodname_code_scanning %} alerts generated using {% data variables.product.prodname_codeql%}.
* `tool:dependabot` to show data only for {% data variables.product.prodname_dependabot_alerts %}.
* `tool:secret-scanning` to show data only for {% data variables.secret-scanning.alerts %}.{% ifversion security-overview-3-14-overview %}
* `tool:github` or `tool:third-party` to show data for all types of alerts generated by {% data variables.product.prodname_dotcom %} tools or by third-party tools.
* `tool:TOOL-NAME` to show data for all alerts generated by a third-party tool for {% data variables.product.prodname_code_scanning %}.{% endif %}

{% ifversion security-overview-3-14-overview %}

You can also filter the "Overview" view by properties of alerts.

| Qualifier | Description |
| -------- | -------- |
| `codeql.rule` | Display data only for {% data variables.product.prodname_code_scanning %} identified by a specific rule for {% data variables.product.prodname_codeql %}.
| `dependabot.ecosystem` | Display data only for {% data variables.product.prodname_dependabot_alerts %} for a specific ecosystem, for example: `npm`.
| `dependabot.package` | Display data only for {% data variables.product.prodname_dependabot_alerts %} for a specific package, for example: `tensorflow`.
| `dependabot.scope` | Display data only for {% data variables.product.prodname_dependabot_alerts %} with a `runtime` or `development` scope.
| `secret-scanning.bypassed` | Display data only for {% data variables.secret-scanning.alerts %} where push protection was bypassed (`true`) or not bypassed (`false`).
| `secret-scanning.provider` | Display data only for {% data variables.secret-scanning.alerts %} issued by a specific provider, for example: `secret-scanning.provider:adafruit`.
| `secret-scanning.secret-type` | Display data only for {% data variables.secret-scanning.alerts %} for a specific type of secret, for example: `secret-scanning.secret-type:adafruit_io_key`.
| `secret-scanning.validity` | Display data only for {% data variables.secret-scanning.alerts %} for a specific validity (`active`, `inactive`, or `unknown`).
| `severity` | Display data only for alerts of a specific severity (`critical`, `high`, `medium`, or `low`).
| `third-party.rule`| Display data only for {% data variables.product.prodname_code_scanning %} identified by a specific rule for a tool developed by a third party. For example, `third-party.rule:CVE-2021-26291-maven-artifact` shows only results for the `CVE-2021-26291-maven-artifact` rule of a third-party {% data variables.product.prodname_code_scanning %} tool.

{% endif %}

{% endif %}

## {% data variables.product.prodname_dependabot %} alert view filters

You can filter the view to show {% data variables.product.prodname_dependabot_alerts %} that are ready to fix or where additional information about exposure is available. You can click any result to see full details of the alert.

| Qualifier | Description |
| -------- | -------- |
|`ecosystem`|Display {% data variables.product.prodname_dependabot_alerts %} detected in a specified ecosystem, for example: `ecosystem:Maven`.|
|`has`| Display {% data variables.product.prodname_dependabot_alerts %} for vulnerabilities where either a secure version is already available (`patch`) or where at least one call from the repository to a vulnerable function is detected (`vulnerable-calls`). For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions)."|
|`is`|Display {% data variables.product.prodname_dependabot_alerts %} that are open (`open`) or closed (`closed`).|
|`package`|Display {% data variables.product.prodname_dependabot_alerts %} detected in the specified package, for example: `package:semver`.|
|`resolution`| Display {% data variables.product.prodname_dependabot_alerts %} closed as "auto-dismissed" (`auto-dismissed`), "a fix has already been started" (`fix-started`), "fixed" (`fixed`), "this alert is inaccurate or incorrect" (`inaccurate`), "no bandwidth to fix this" (`no-bandwidth`), "vulnerable code is not actually used" (`not-used`), or "risk is tolerable to this project" (`tolerable-risk`).|
|`scope`|Display {% data variables.product.prodname_dependabot_alerts %} from the development dependency (`development`) or from the runtime dependency (`runtime`).|
|`sort`| Groups {% data variables.product.prodname_dependabot_alerts %} by the manifest file path the alerts point to (`manifest-path`) or by the name of the package where the alert was detected (`package-name`). Alternatively, displays alerts from most important to least important, as determined by CVSS score, vulnerability impact, relevancy, and actionability (`most-important`), from newest to oldest (`newest`), from oldest to newest (`oldest`), or from most to least severe (`severity`).

## {% data variables.product.prodname_code_scanning_caps %} alert view filters

All {% data variables.product.prodname_code_scanning %} alerts have one of the categories shown below. You can click any result to see full details of the relevant query and the line of code that triggered the alert.

| Qualifier | Description |
| -------- | -------- |
|`is`|Display {% data variables.product.prodname_code_scanning %} alerts that are open (`open`) or closed (`closed`).|
|`resolution`| Display {% data variables.product.prodname_code_scanning %} alerts closed as "false positive" (`false-postive`), "fixed" (`fixed`), "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|`rule`|Display {% data variables.product.prodname_code_scanning %} alerts identified by the specified rule.|
|`severity`|Display {% data variables.product.prodname_code_scanning %} alerts categorized as `critical`, `high`, `medium`, or `low` security alerts. Alternatively, displays {% data variables.product.prodname_code_scanning %} alerts categorized as `error`, `warning`, `note` problems.|
|`sort`| Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).
|`tool`|Display {% data variables.product.prodname_code_scanning %} alerts detected by the specified tool, for example: `tool:CodeQL` for alerts created using the {% data variables.product.prodname_codeql %} application in {% data variables.product.prodname_dotcom %}.|

## {% data variables.product.prodname_secret_scanning_caps %} alert view filters

| Qualifier | Description |
| -------- | -------- |
|`bypassed` | Display {% data variables.secret-scanning.alerts %} where push protection was bypassed (`true`) or not bypassed (`false`).
|`confidence`|Display {% data variables.secret-scanning.alerts %} of high (`high`) or other (`other`) confidence.|
|`is`|Display {% data variables.secret-scanning.alerts %} that are open (`open`) or closed (`closed`).|
|`provider` | Display alerts for all secrets issued by a specified provider, for example: `adafruit`.  |
|`resolution`| Display {% data variables.secret-scanning.alerts %} closed as "false positive" (`false-positive`), "pattern deleted" (`pattern-deleted`), "pattern edited' (`pattern-edited`), "revoked" (`revoked`) "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|`sort`| Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).|
|`secret-type` | Display alerts for the specified secret and provider (`provider-pattern`) or custom pattern (`custom-pattern`). |
