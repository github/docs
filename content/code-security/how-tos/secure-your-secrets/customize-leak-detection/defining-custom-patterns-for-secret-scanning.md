---
title: Defining custom patterns for secret scanning
shortTitle: Define custom patterns
intro: Protect your unique secret types by defining custom patterns with regular expressions.
product: '{% data reusables.gated-features.secret-scanning-custom-patterns %}'
permissions: '{% data reusables.permissions.security-enterprise-enable %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
  - /code-security/secret-scanning/defining-custom-patterns-for-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Secret Protection
  - Secret scanning
---

{% ifversion secret-scanning-custom-pattern-ai-generated %}

## Defining a custom pattern with {% data variables.product.prodname_copilot_short %}

You can use {% data variables.secret-scanning.copilot-secret-scanning %} to generate regular expressions based on a text description of the type of pattern you would like to detect, including optional example strings that should be detected. See [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-copilot-secret-scanning).

{% endif %}

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% ifversion ghas-products %}{% data variables.product.prodname_secret_protection %}{% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} is enabled on your repository. For more information, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Custom patterns", click **New pattern**.{% else %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}{% endif %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

   > [!NOTE]
   > The "Enable" button isn't available until after the dry run succeeds and you publish the pattern.

After your pattern is created, {% data reusables.secret-scanning.secret-scanning-process %} For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

## Defining a custom pattern for an organization

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. {% ifversion security-configurations %} You can use {% data variables.product.prodname_security_configurations %} to enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).{% else %}
To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, select the **{% data variables.product.UI_advanced_security %}** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% endif %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern-org %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in select repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-in-an-organization-for-a-custom-pattern).

{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

## Defining a custom pattern for an enterprise account

{% ifversion ghes %}

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see [AUTOTITLE](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

> [!NOTE]
> * At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run.
> * {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% data variables.product.UI_advanced_security_ent %}", click **Security features**.
1. Under "Secret scanning custom patterns", click **New pattern**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in the enterprise without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{% indented_data_reference reusables.secret-scanning.push-protection-enterprise-note spaces=3 %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories within your organizations with {% data variables.product.prodname_GH_secret_protection %} enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/managing-custom-patterns)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/metrics-for-custom-patterns)
