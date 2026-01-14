---
title: Filtering alerts in security overview
intro: Use filters to view specific categories of alerts
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-both %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Security overview
  - Code Security
  - Secret Protection
  - Alerts
  - Organizations
  - Teams
shortTitle: Filter security alerts
redirect_from:
  - /code-security/security-overview/filtering-alerts-in-the-security-overview
  - /code-security/security-overview/filtering-alerts-in-security-overview
---

## About filtering security overview

You can use filters in a security overview to narrow your focus based on a range of factors, like alert risk level, alert type, and feature enablement. Different filters are available depending on the specific view, and whether you are viewing data at the enterprise or organization level.

> [!NOTE]
> {% data reusables.security-overview.information-varies-GHAS %}

## Filter logic for security overview

You can apply filters and use logical operators to display results that meet specific criteria on security overview. By default, if you apply several different filters, you are using AND logic, meaning you will only see results that match _every_ filter you apply. For example, if you add the filter `is:public dependabot:enabled`, you will only see results from repositories that are public _and_ have {% data variables.product.prodname_dependabot %} enabled.

Currently, there are two logical operators that you can apply to your filters on security overview:

* The `-` operator applies NOT logic, displaying all results _except_ those that match the specified filter. To use the `-` operator, add it to the beginning of a filter. For example, filtering for `-repo:REPOSITORY-NAME` will display data from all repositories _except_ `REPOSITORY-NAME`.
* The `,` operator applies OR logic, displaying results that match _any_ of the specified values for a single filter. To use the `,` operator, add it between each listed value for a filter. For example, filtering for `is:public,private` will display data from all repositories that are public _or_ private. Similarly, if you apply the same filter multiple times with different values, you are using OR logic. For example, `is:public is:private` is equivalent to `is:public,private`.

## Filter methods

All security views have features to help you define filters. These provide an easy way to set up filters and understand the options available.

* **Interactive search text box.** When you click in the search box and press the keyboard "Space" key, a pop-up text box shows the filter options available in that view. You can use the mouse or keyboard arrow keys to select the options you want in the text box before pressing the keyboard "Return" key to add the filter. Supported for all views.
* **Dropdown selectors and toggles.** Shown at the end of the "Search text box" or in the header of the data table. As you choose the data to view, the filters shown in the search text box are updated accordingly. Supported on the alert views.
* **Advanced filters dialog.** When you click the **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter** button, you can use dropdown lists to select the "Qualifier," "Operator," and "Values" for each filter. Supported on the "Overview" and metric views.

## Repository name, visibility, and status filters

In all views, there are two methods for filtering results by repository name.

* **Free text or keyword search.** Display data for all repositories with a name that contains the keyword. For example, search for `test` to show data for both the "test-repository" and "octocat-testing" repositories.
* **`repo` qualifier.** Display data only for the repository that exactly matches the value of the qualifier. For example, search for `repo:octocat-testing` to show data for only the "octocat-testing" repository.

You can also filter by repository visibility (internal, private, or public) and archive status.

| Qualifier | Description | Views |
|--------|--------|------|
| `visibility` | Display data for all repositories that are `public`, `private`, or `internal`. | "Overview" and metrics |
| `is` | Display data for all repositories that are `public`, `private`, or `internal`. | "Risk" and "Coverage" |
| `archived` | Display only data for archived (`true`) or active (`false`) repositories. | All except "Alerts" views |

## Team and topic filters

These qualifiers are available in all views.

| Qualifier | Description |
|--------|--------|
| `team` | Display data for all repositories that the specified team has write access or admin access to. For more information on repository roles, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization). |
| `topic` | Display data for all repositories that are classified with a specific topic. For more information on repository topics, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics). |

## Custom repository property filters

> [!NOTE]
> Repository properties are in {% data variables.release-phases.public_preview %} and subject to change.

Custom repository properties are metadata that organization owners can add to repositories in an organization, providing a way to group repositories by the information you are interested in. For example, you can add custom repository properties for compliance frameworks or data sensitivity. For more information on adding custom repository properties, see [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

If you add custom properties to your organization and set values for repositories, you can filter the "Overview" using those custom properties as qualifiers. These qualifiers are currently only available in the organization-level views.

* **`props.CUSTOM_PROPERTY_NAME` qualifier.** The qualifier consists of a `props.` prefix, followed by the name of the custom property. For example, `props.data_sensitivity:high` displays results for repositories with the `data_sensitivity` property set to the value `high`. |

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

{% else %}

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

| Qualifier | Description |
| -------- | -------- |
| {% ifversion ghes < 3.17 %} |
| `advanced-security` | Display data for repositories where {% data variables.product.prodname_GHAS %} is enabled or not enabled. |
| {% endif %} |
| `code-scanning-default-setup`| Display data for repositories where {% data variables.product.prodname_code_scanning %} is enabled or not enabled using {% data variables.product.prodname_codeql %} default setup. |
| `code-scanning-pull-request-alerts`| Display data for repositories where {% data variables.product.prodname_code_scanning %} is enabled or not enabled to run on pull requests. |
| `dependabot-security-updates` | Display data for repositories where {% data variables.product.prodname_dependabot_security_updates %} is enabled or not enabled.  |
| `secret-scanning-push-protection` | Display data for repositories where push protection for {% data variables.product.prodname_secret_scanning %} is enabled or not enabled. |

## Alert number filters

In the "Risk" view, you can filter repositories by the number of alerts they have of a specific type.

|Qualifier|Description|
|--------|--------|
|`code-scanning-alerts`|Display data for repositories that have exactly (`=`), more than (`>`) or fewer than (`<`) a specific number of {% data variables.product.prodname_code_scanning %} alerts. For example: `code-scanning-alerts:>100` for repositories with more than 100 alerts.|
|`dependabot-alerts`|Display data for repositories that have a specific number (`=`), more than (`>`) or fewer than (`<`) a specific number of {% data variables.product.prodname_dependabot_alerts %}. For example: `dependabot-alerts:<=10` for repositories with fewer than or equal to 10 alerts.|
|`secret-scanning-alerts`|Display data for repositories that have a specific number (`=`), more than (`>`) or fewer than (`<`) a specific number of {% data variables.secret-scanning.alerts %}. For example: `secret-scanning-alerts:=10` for repositories with exactly 10 alerts.|

## Alert type and property filters

You can filter the "Overview" view by the type and property of alerts. Use the `tool` qualifier to display only data for alerts generated by a specific tool or type of tool.

* `tool:codeql` to show data only for {% data variables.product.prodname_code_scanning %} alerts generated using {% data variables.product.prodname_codeql %}.
* `tool:dependabot` to show data only for {% data variables.product.prodname_dependabot_alerts %}.
* `tool:secret-scanning` to show data only for {% data variables.secret-scanning.alerts %}.
* `tool:github` or `tool:third-party` to show data for all types of alerts generated by {% data variables.product.prodname_dotcom %} tools or by third-party tools.
* `tool:TOOL-NAME` to show data for all alerts generated by a third-party tool for {% data variables.product.prodname_code_scanning %}.

You can also filter the "Overview" view by properties of alerts.

|Qualifier|Description|
|--------|--------|
|`codeql.rule`| Display data only for {% data variables.product.prodname_code_scanning %} identified by a specific rule for {% data variables.product.prodname_codeql %}.|
|`dependabot.ecosystem`| Display data only for {% data variables.product.prodname_dependabot_alerts %} for a specific ecosystem, for example: `npm`.|
|`dependabot.package`| Display data only for {% data variables.product.prodname_dependabot_alerts %} for a specific package, for example: `tensorflow`.|
|`dependabot.scope`| Display data only for {% data variables.product.prodname_dependabot_alerts %} with a `runtime` or `development` scope.|
|`secret-scanning.bypassed`| Display data only for {% data variables.secret-scanning.alerts %} where push protection was bypassed (`true`) or not bypassed (`false`).|
|`secret-scanning.provider`| Display data only for {% data variables.secret-scanning.alerts %} issued by a specific provider, for example: `secret-scanning.provider:adafruit`.|
|`secret-scanning.secret-type`| Display data only for {% data variables.secret-scanning.alerts %} for a specific type of secret, for example: `secret-scanning.secret-type:adafruit_io_key`.|
|`secret-scanning.validity`| Display data only for {% data variables.secret-scanning.alerts %} for a specific validity (`active`, `inactive`, or `unknown`).|
|`severity`| Display data only for alerts of a specific severity (`critical`, `high`, `medium`, or `low`).|
|`third-party.rule`| Display data only for {% data variables.product.prodname_code_scanning %} identified by a specific rule for a tool developed by a third party. For example, `third-party.rule:CVE-2021-26291-maven-artifact` shows only results for the `CVE-2021-26291-maven-artifact` rule of a third-party {% data variables.product.prodname_code_scanning %} tool.|

{% ifversion fpt or ghec %}

## Production context filters

{% data reusables.security.production-context-mdc-preview %}

You can filter views of {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_code_scanning %} alerts by production context. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/alerts-in-production-code).

| Qualifier | Description |
| -------- | -------- |
| `artifact-registry` or `artifact-registry-url` | Defines the name or location of the artifact registry used by the repository. For example: `artifact-registry:jfrog-artifactory` or `artifact-registry-url:my-registry.example.com`.<br><br>Uses metadata from the [Storage Record API](/rest/orgs/artifact-metadata?apiVersion=2022-11-28#create-artifact-metadata-storage-record). |
| `has: deployment` | Limits alerts to those reported as in deployment.<br><br>Uses metadata from the [Deployment Record API](/rest/orgs/artifact-metadata?apiVersion=2022-11-28#create-artifact-deployment-record). |
| `runtime-risk` | Limits alerts to those reported as presenting a specific type of runtime risk. For example: `runtime-risk:internet-exposed`<br><br>Uses metadata from the [Deployment Record API](/rest/orgs/artifact-metadata?apiVersion=2022-11-28#create-artifact-deployment-record). |

{% endif %}

## {% data variables.product.prodname_dependabot %} alert view filters

You can filter the view to show {% data variables.product.prodname_dependabot_alerts %} that are ready to fix or where additional information about exposure is available. You can click any result to see full details of the alert.

| Qualifier | Description |
| -------- | -------- |
|`ecosystem`|Display {% data variables.product.prodname_dependabot_alerts %} detected in a specified ecosystem, for example: `ecosystem:Maven`.|
|{% ifversion fpt or ghec or ghes > 3.15 %}|
|`epss_percentage`|Display {% data variables.product.prodname_dependabot_alerts %} whose EPSS score meets the defined criteria, for example: `epss_percentage:>=0.01`|
|{% endif %}|
|`has`|Display {% data variables.product.prodname_dependabot_alerts %} for vulnerabilities where either a secure version is already available (`patch`) or where at least one call from the repository to a vulnerable function is detected (`vulnerable-calls`). For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#about-the-detection-of-calls-to-vulnerable-functions).|
|`is`|Display {% data variables.product.prodname_dependabot_alerts %} that are open (`open`) or closed (`closed`).|
|`package`|Display {% data variables.product.prodname_dependabot_alerts %} detected in the specified package, for example: `package:semver`.|
|`props`|Display {% data variables.product.prodname_dependabot_alerts %} for repositories with a specific custom property set. For example, `props.data_sensitivity:high` displays results for repositories with the `data_sensitivity` property set to the value `high`.|
|{% ifversion fpt or ghec or ghes > 3.17 %}|
|`relationship`|Display {% data variables.product.prodname_dependabot_alerts %} of the specified relationship, for example: `relationship:indirect`.|
|{% endif %}|
|`repo`|Display {% data variables.product.prodname_dependabot_alerts %} detected in a specified repository, for example: `repo:octo-repository`.|
|`resolution`|Display {% data variables.product.prodname_dependabot_alerts %} closed as "auto-dismissed" (`auto-dismissed`), "a fix has already been started" (`fix-started`), "fixed" (`fixed`), "this alert is inaccurate or incorrect" (`inaccurate`), "no bandwidth to fix this" (`no-bandwidth`), "vulnerable code is not actually used" (`not-used`), or "risk is tolerable to this project" (`tolerable-risk`).|
|`scope`|Display {% data variables.product.prodname_dependabot_alerts %} from the development dependency (`development`) or from the runtime dependency (`runtime`).|
|`severity`|Display {% data variables.product.prodname_dependabot_alerts %} of the specified severity, for example: `severity:critical`.|
|`sort`|Groups {% data variables.product.prodname_dependabot_alerts %} by the manifest file path the alerts point to (`manifest-path`) or by the name of the package where the alert was detected (`package-name`). Alternatively, displays alerts from most important to least important, as determined by CVSS score, vulnerability impact, relevancy, and actionability (`most-important`), from newest to oldest (`newest`), from oldest to newest (`oldest`), or from most to least severe (`severity`).|
|`team`|Display {% data variables.product.prodname_dependabot_alerts %} owned by members of the specified team, for example: `team:octocat-dependabot-team`.|
|`topic`|Display {% data variables.product.prodname_dependabot_alerts %} with the matching repository topic, for example: `topic:asdf`.|

{% ifversion dependabot-metrics %}

## {% data variables.product.prodname_dependabot %} dashboard filters

You can filter the "{% data variables.product.prodname_dependabot %} dashboard" view using these filters.

{% data reusables.security-overview.filter-dependabot-metrics %}

Alternatively, you can use complex filters by clicking **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter** and build custom filters to suit your needs.

{% endif %}

## {% data variables.product.prodname_code_scanning_caps %} alert view filters

All {% data variables.product.prodname_code_scanning %} alerts have one of the categories shown below. You can click any result to see full details of the relevant query and the line of code that triggered the alert.

| Qualifier | Description |
| -------- | -------- |
|`is`|Display {% data variables.product.prodname_code_scanning %} alerts that are open (`open`) or closed (`closed`).|
|`resolution`| Display {% data variables.product.prodname_code_scanning %} alerts closed as "false positive" (`false-positive`), "fixed" (`fixed`), "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|`rule`|Display {% data variables.product.prodname_code_scanning %} alerts identified by the specified rule.|
|`severity`|Display {% data variables.product.prodname_code_scanning %} alerts categorized as `critical`, `high`, `medium`, or `low` security alerts. Alternatively, displays {% data variables.product.prodname_code_scanning %} alerts categorized as `error`, `warning`, `note` problems.|
|`sort`|Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).|
|`tool`|Display {% data variables.product.prodname_code_scanning %} alerts detected by the specified tool, for example: `tool:CodeQL` for alerts created using the {% data variables.product.prodname_codeql %} application in {% data variables.product.prodname_dotcom %}.|

## {% data variables.product.prodname_secret_scanning_caps %} alert view filters

| Qualifier | Description |
| -------- | -------- |
|`bypassed`|Display {% data variables.secret-scanning.alerts %} where push protection was bypassed (`true`) or not bypassed (`false`).|
|{% ifversion ghes < 3.16 %}|
|`confidence`|Display {% data variables.secret-scanning.alerts %} of high (`high`) or other (`other`) confidence.|
|{% endif %}|
|`is`|Display {% data variables.secret-scanning.alerts %} that are open (`open`){% ifversion ghes < 3.17 %} or closed (`closed`){% else %}, closed (`closed`), publicly leaked (`publicly-leaked`), or multi-repository (`multi-repository`){% endif %}.|
|`props`|Display alerts for repositories with a specific custom property set. For example, `props.data_sensitivity:high` displays results for repositories with the `data_sensitivity` property set to the value `high`. |
|`provider`|Display alerts for all secrets issued by a specified provider, for example: `adafruit`.  |
|`repo`|Display alerts detected in a specified repository, for example: `repo:octo-repository`.|
|`resolution`|Display {% data variables.secret-scanning.alerts %} closed as "false positive" (`false-positive`), "hidden by config" (`hidden-by-config`), "pattern deleted" (`pattern-deleted`), "pattern edited" (`pattern-edited`), "revoked" (`revoked`), "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|{% ifversion secret-scanning-generic-tab %}|
|`results`|Display default (`default`) or generic (`generic`) {% data variables.secret-scanning.alerts %}.|
|{% endif %}|
|{% ifversion ghes = 3.16 %}|
|`results`|Display default (`default`) or experimental (`experimental`) {% data variables.secret-scanning.alerts %}.|
|{% endif %}|
|`secret-type`|Display alerts for the specified secret and provider (`provider-pattern`) or custom pattern (`custom-pattern`).|
|`sort`|Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).|
|`team`|Display alerts owned by members of the specified team, for example: `team:octocat-dependabot-team`.|
|`topic`|Display alerts with the matching repository topic, for example: `topic:asdf`.|
|`validity`|Display alerts for a specific validity (`active`, `inactive`, or `unknown`).|
