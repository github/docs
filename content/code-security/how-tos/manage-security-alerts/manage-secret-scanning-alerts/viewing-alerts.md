---
title: Viewing and filtering alerts from secret scanning
intro: Learn how to find and filter {% ifversion fpt or ghec %}{% data variables.secret-scanning.user_alerts %}{% else %}{% data variables.secret-scanning.user_alerts %} alerts{% endif %} for your repository.
permissions: '{% data reusables.permissions.secret-scanning-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: View alerts
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts
---

## About the {% data variables.product.prodname_secret_scanning %} alerts page

{% data reusables.secret-scanning.secret-scanning-about-alerts %} {% data reusables.secret-scanning.repository-alert-location %}

To help you triage alerts more effectively, {% data variables.product.company_short %} separates alerts into two lists:

{% ifversion secret-scanning-alert-experimental-list %}
* **Default** alerts{% ifversion secret-scanning-generic-tab %}
* **Generic** alerts{% elsif ghes = 3.16 %}
* **Experimental** alerts{% endif %}

{% ifversion ghes = 3.16 %}

{% ifversion secret-scanning-alert-experimental-list-toggle %}
![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "Default" and "Experimental" alerts is highlighted with an orange outline.](/assets/images/enterprise/3.16/help/security/secret-scanning-default-alert-view.png)
{% else %}
![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The sidebar menu items for "Default" and "Experimental" alerts are highlighted with an orange outline.](/assets/images/help/security/secret-scanning-default-alert-view.png)
{% endif %}

{% endif %}

{% else %}
* **High confidence** alerts.
* **Other** alerts.

![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "High confidence" and "Other" alerts is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-high-confidence-alert-view.png)

{% endif %}

{% ifversion secret-scanning-alert-experimental-list %}

### Default alerts list

The default alerts list displays alerts that relate to supported patterns and specified custom patterns. This is the main view for alerts.

### {% ifversion secret-scanning-generic-tab %}Generic{% elsif ghes = 3.16 %}Experimental{% endif %} alerts list

The {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts can have a higher rate of false positives or secrets used in tests. You can toggle to the {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list from the default alerts list.

{% else %}

### High confidence alerts list

The "High confidence" alerts list displays alerts that relate to supported patterns and specified custom patterns. This list is always the default view for the alerts page.

### Other alerts list

The "Other" alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts have a higher rate of false positives.

{% endif %}

In addition, alerts that fall into this category:
* Are limited in quantity to 5000 alerts per repository (this includes open and closed alerts).
* Are not shown in the summary views for security overview, only in the "{% data variables.product.prodname_secret_scanning_caps %}" view.
* Only have the first five detected locations shown on {% data variables.product.prodname_dotcom %} for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %}, and only the first detected location shown for AI-detected generic secrets{% endif %}.

For {% data variables.product.company_short %} to scan for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} and generic secrets{% endif %}, you must first enable the feature{% ifversion secret-scanning-ai-generic-secret-detection %}s{% endif %} for your repository or organization. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/non-provider-patterns/enabling-secret-scanning-for-non-provider-patterns){% ifversion secret-scanning-ai-generic-secret-detection %} and [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/enabling-ai-powered-generic-secret-detection){% endif %}.

{% ifversion secret-scanning-alert-experimental-list %}

{% data variables.product.github %} will continue to release new patterns and secret types to the {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list and will promote them to the default list when feature-complete (e.g. when they have an appropriately low volume and false positive rate).

{% endif %}

## Viewing alerts

Alerts for {% data variables.product.prodname_secret_scanning %} are displayed under the **Security** tab of the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. Optionally, toggle to {% ifversion secret-scanning-generic-tab %}"Generic"{% elsif ghes = 3.16 %}"Experimental"{% else %}"Other"{% endif %} to see alerts for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} or generic secrets detected using AI{% endif %}.
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the alert you want to view.
   {% ifversion secret-scanning-user-owned-repos %}

   > [!NOTE]
   > {% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %}

   {% endif %}
{% data reusables.security.alert-assignee-step %}

## Filtering alerts

You can apply various filters to the alerts list to help you find the alerts you're interested in. You can use the dropdown menus above the alerts list, or input the qualifiers listed in the table into the search bar.

|Qualifier|Description|
|---------|-----------|
|`bypassed`|Display alerts for secrets where push protection has been bypassed (`true`). For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).|
|{% ifversion ghes < 3.16 %}|
|`confidence`|Display alerts for high-confidence secrets which relate to supported secrets and custom patterns (`high`), or non-provider patterns such as private keys (`other`). See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).|
|{% endif %}|
|`is`|Display alerts that are open (`open`){% ifversion ghes < 3.17 %} or closed (`closed`){% else %}, closed (`closed`), found in a public repository (`publicly-leaked`), or found in more than one repository within the same organization or enterprise (`multi-repository`){% endif %}.|
|`props`|Display alerts for repositories with a specific custom property (`CUSTOM_PROPERTY_NAME`) set. For example, `props:data_sensitivity:high` display results for repositories with the `data_sensitivity` property set to the value `high`. |
|`provider`|Display alerts for a specific provider (`PROVIDER-NAME`), for example, `provider:github`. For a list of supported partners, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).|
|`repo`|Display alerts detected in a specified repository (`REPOSITORY-NAME`), for example: `repo:octo-repository`.|
|`resolution`|Display alerts closed as "false positive" (`false-positive`), "hidden by config" (`hidden-by-config`), "pattern deleted" (`pattern-deleted`), "pattern edited" (`pattern-edited`), "revoked" (`revoked`), "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|{% ifversion fpt or ghec %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or for non-provider patterns (`generic`) such as private keys, and AI-detected generic secrets such as passwords. See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns), and for more information about AI-detected generic secrets, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).|
|{% elsif ghes > 3.16 %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or non-provider patterns such as private keys (`generic`). See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).|
|{% elsif ghes = 3.16 %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or non-provider patterns such as private keys (`experimental`). See [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).|
|{% endif %}|
|`secret-type`|Display alerts for a specific secret type (`SECRET-NAME`), for example, `secret-type:github_personal_access_token`. For a list of supported secret types, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secret).|
|`sort`|Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).|
|`team`|Display alerts owned by members of the specified team, for example: `team:octocat-dependabot-team`.|
|`topic`|Display alerts with the matching repository topic, for example: `topic:asdf`.|
|`validity`|Display alerts for secrets with a specific validity (`active`, `inactive`, or `unknown`). {% ifversion fpt or ghec %}Applies only to {% data variables.product.github %} tokens unless you enable validity checks.{% endif %} For more information about validity statuses, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity).|

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts)
