---
title: Managing custom patterns
shortTitle: Manage custom patterns
intro: 'You can view, edit, and remove custom patterns, as well as enable push protection for custom patterns.'
permissions: '{% data reusables.permissions.security-enterprise-enable %}'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret Protection
  - Secret scanning
---

Custom patterns are user-defined patterns that you can use to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run. There are no similar restrictions for editing custom patterns at repository and organization level.

## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.secret-scanning.alerts %} that were created using the previous version of the pattern.

{% data reusables.secret-scanning.view-custom-pattern %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="Edit pattern" %}.
1. When you're ready to test your edited custom pattern, to identify matches without creating alerts, click **Save and dry run**.
1. When you have reviewed and tested your changes, click **Publish changes**.{% ifversion secret-scanning-push-protection-custom-patterns %}
{% data reusables.advanced-security.secret-scanning-enable-push-protection-custom-pattern %}
1. Optionally, to disable push protection for your custom pattern, click **Disable**.

   ![Screenshot of the custom pattern page with the button to disable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-disable-push-protection-custom-pattern.png){% endif %}

## Removing a custom pattern

When you remove a custom pattern, {% data variables.product.prodname_dotcom %} gives you the option to close the {% data variables.secret-scanning.alerts %} relating to the pattern, or keep these alerts.

{% data reusables.secret-scanning.view-custom-pattern %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="Remove pattern" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

{% ifversion secret-scanning-push-protection-custom-patterns %}

## Enabling push protection for a custom pattern

You can enable {% data variables.product.prodname_secret_scanning %} as a push protection for custom patterns stored at the enterprise, organization, or repository level.

### Enabling push protection for a custom pattern stored in an enterprise

{% data reusables.secret-scanning.push-protection-enterprise-note %}

Before enabling push protection for a custom pattern at enterprise level, you must also test your custom patterns using dry runs. {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% ifversion code-security-wording-only-enterprise %}Code security{% else %}Code security and analysis{% endif %}", click **Security features**.
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}

   >[!NOTE] At the enterprise level, you can only edit and enable push protection for custom patterns that you created.

1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   {% data reusables.secret-scanning.custom-pattern-push-protection-enable-button %}

   ![Screenshot of the custom pattern page with the button to enable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection in an organization for a custom pattern

Before enabling push protection for a custom pattern at organization level, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, select the **Code security** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
1. Under "Custom patterns", click {% octicon "pencil" aria-label="Edit custom pattern" %} for the pattern of interest.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}
{% endif %}
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.
{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

### Enabling {% data variables.product.prodname_secret_scanning %} as a push protection in a repository for a custom pattern

Before enabling push protection for a custom pattern at repository level, you must define the custom pattern for the repository, and test it in the repository. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-edit-custom-pattern %}
1. To enable push protection for your custom pattern, scroll down to "Push Protection", and click **Enable**.

   {% data reusables.secret-scanning.custom-pattern-push-protection-enable-button %}

   ![Screenshot of the "Push protection" section of the custom pattern page. A button, labeled "Enable", is outlined in dark orange.](/assets/images/help/repository/secret-scanning-custom-pattern-enable-push-protection.png)

{% endif %}
