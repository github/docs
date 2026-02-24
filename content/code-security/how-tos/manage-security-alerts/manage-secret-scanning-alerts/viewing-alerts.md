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

You can find and filter {% data variables.secret-scanning.user_alerts %} through your repository's **Security** tab. To learn more about alerts and the different types you may encounter, see [AUTOTITLE](/code-security/concepts/secret-security/about-alerts).

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
|`bypassed`|Display alerts for secrets where push protection has been bypassed (`true`). For more information, see [AUTOTITLE](/code-security/concepts/secret-security/about-push-protection).|
|{% ifversion ghes < 3.16 %}|
|`confidence`|Display alerts for high-confidence secrets which relate to supported secrets and custom patterns (`high`), or non-provider patterns such as private keys (`other`). See [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns).|
|{% endif %}|
|`is`|Display alerts that are open (`open`){% ifversion ghes < 3.17 %} or closed (`closed`){% else %}, closed (`closed`), found in a public repository (`publicly-leaked`), or found in more than one repository within the same organization or enterprise (`multi-repository`){% endif %}.|
|`props`|Display alerts for repositories with a specific custom property (`CUSTOM_PROPERTY_NAME`) set. For example, `props:data_sensitivity:high` display results for repositories with the `data_sensitivity` property set to the value `high`. |
|`provider`|Display alerts for a specific provider (`PROVIDER-NAME`), for example, `provider:github`. For a list of supported partners, see [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-secrets).|
|`repo`|Display alerts detected in a specified repository (`REPOSITORY-NAME`), for example: `repo:octo-repository`.|
|`resolution`|Display alerts closed as "false positive" (`false-positive`), "hidden by config" (`hidden-by-config`), "pattern deleted" (`pattern-deleted`), "pattern edited" (`pattern-edited`), "revoked" (`revoked`), "used in tests" (`used-in-tests`), or "won't fix" (`wont-fix`).|
|{% ifversion fpt or ghec %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or for non-provider patterns (`generic`) such as private keys, and AI-detected generic secrets such as passwords. See [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns), and for more information about AI-detected generic secrets, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).|
|{% elsif ghes > 3.16 %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or non-provider patterns such as private keys (`generic`). See [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns).|
|{% elsif ghes = 3.16 %}|
|`results`|Display alerts for supported secrets and custom patterns (`default`), or non-provider patterns such as private keys (`experimental`). See [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns).|
|{% endif %}|
|`secret-type`|Display alerts for a specific secret type (`SECRET-NAME`), for example, `secret-type:github_personal_access_token`. For a list of supported secret types, see [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-secrets).|
|`sort`|Display alerts from newest to oldest (`created-desc`), oldest to newest (`created-asc`), most recently updated (`updated-desc`), or least recently updated (`updated-asc`).|
|`team`|Display alerts owned by members of the specified team, for example: `team:octocat-dependabot-team`.|
|`topic`|Display alerts with the matching repository topic, for example: `topic:asdf`.|
|`validity`|Display alerts for secrets with a specific validity (`active`, `inactive`, or `unknown`). {% ifversion fpt or ghec %}Applies only to {% data variables.product.github %} tokens unless you enable validity checks.{% endif %} For more information about validity statuses, see [AUTOTITLE](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts#checking-a-secrets-validity).|

## Next steps

* [AUTOTITLE](/code-security/tutorials/remediate-leaked-secrets/evaluating-alerts)
