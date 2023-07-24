---
title: Defining custom patterns for secret scanning
shortTitle: Define custom patterns
intro: 'You can extend {% data variables.product.prodname_secret_scanning %} to detect secrets beyond the default patterns.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
---

## About custom patterns for {% data variables.product.prodname_secret_scanning %}

You can define custom patterns to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. For example, you might have a secret pattern that is internal to your organization. For details of the supported secrets and service providers, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns)."

You can define custom patterns for your enterprise, organization, or repository. {% data variables.product.prodname_secret_scanning_caps %} supports up to 500 custom patterns for each organization or enterprise account, and up to 100 custom patterns per repository.

{% ifversion secret-scanning-push-protection-custom-patterns %}You can also enable push protection for custom patterns. For more information about push protection, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."{% endif %}

## Regular expression syntax for custom patterns

You can specify custom patterns for {% data variables.product.prodname_secret_scanning %} as one or more regular expressions.

- **Secret format:** an expression that describes the format of the secret itself.
- **Before secret:** an expression that describes the characters that come before the secret. By default, this is set to `\A|[^0-9A-Za-z]` which means that the secret must be at the start of a line or be preceded by a non-alphanumeric character.
- **After secret:** an expression that describes the characters that come after the secret. By default, this is set to `\z|[^0-9A-Za-z]` which means that the secret must be followed by a new line or a non-alphanumeric character.
- **Additional match requirements:** one or more optional expressions that the secret itself must or must not match.

For simple tokens you will usually only need to specify a secret format. The other fields provide flexibility so that you can specify more complex secrets without creating complex regular expressions.  For an example of a custom pattern, see "[Example of a custom pattern specified using additional requirements](#example-of-a-custom-pattern-specified-using-additional-requirements)" below.

{% data variables.product.prodname_secret_scanning_caps %} uses the [Hyperscan library](https://github.com/intel/hyperscan) and only supports Hyperscan regex constructs, which are a subset of PCRE syntax. Hyperscan option modifiers are not supported.  For more information on Hyperscan pattern constructs, see "[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" in the Hyperscan documentation.

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% data variables.product.prodname_secret_scanning %} is enabled on your repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %}
{% endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**.  
   {% note %}

   **Note**: The "Enable" button isn't available until after the dry run succeeds and you publish the pattern.

   {% endnote %}

   For more information about push protection, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."

{% endif %}

After your pattern is created, {% data reusables.secret-scanning.secret-scanning-process %} For more information on viewing {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

### Example of a custom pattern specified using additional requirements

A company has an internal token with five characteristics. They use the different fields to specify how to identify tokens as follows:

| **Characteristic** | **Field and regular expression** |
|----------------|------------------------------|
| Length between 5 and 10 characters | Secret format: `[$#%@AA-Za-z0-9]{5,10}` |
| Does not end in a `.` | After secret: `[^\.]` |
| Contains numbers and uppercase letters | Additional requirements: secret must match `[A-Z]` and `[0-9]` |
| Does not include more than one lowercase letter in a row | Additional requirements: secret must not match `[a-z]{2,}` |
| Contains one of `$%@!` | Additional requirements: secret must match `[$%@!]` |

These tokens would match the custom pattern described above:

```shell
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

These strings would not match the custom pattern described above:

```shell
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Defining a custom pattern for an organization

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion ghae %}
{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.secret-scanning.alerts %}.

{% endnote %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-35 or custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in select repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- ifversion secret-scanning-custom-enterprise-35 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-in-an-organization-for-a-custom-pattern)."

{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Defining a custom pattern for an enterprise account

{% ifversion fpt or ghec or ghes %}

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

{% note %}

{% ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
**Notes:**
- At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run.
- {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}
{% else %}
**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.secret-scanning.alerts %}.

{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}{% ifversion security-feature-enablement-policies %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "Code security and analysis", click **Security features**.{% else %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}{% endif %}
1. Under "Secret scanning custom patterns", click **New pattern**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in the enterprise without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- ifversion secret-scanning-custom-enterprise-36 %}{% indented_data_reference reusables.secret-scanning.beta-dry-runs spaces=3 %}{% endif %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
{% indented_data_reference reusables.secret-scanning.push-protection-enterprise-note spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.secret-scanning.alerts %} that were created using the previous version of the pattern.
{% data reusables.secret-scanning.view-custom-pattern %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="Edit pattern" %}.
{%- ifversion secret-scanning-custom-enterprise-36 or custom-pattern-dry-run-ga  %}
1. When you're ready to test your edited custom pattern, to identify matches without creating alerts, click **Save and dry run**.
{%- endif %}
1. When you have reviewed and tested your changes, click **Publish changes**.{% ifversion secret-scanning-push-protection-custom-patterns %}
{% data reusables.advanced-security.secret-scanning-enable-push-protection-custom-pattern %}
1. Optionally, to disable push protection for your custom pattern, click **Disable**.

   ![Screenshot of the custom pattern page with the button to disable push protection highlighted with a dark orange outline.](/assets/images/help/repository/secret-scanning-disable-push-protection-custom-pattern.png){% endif %}

## Removing a custom pattern

{% data reusables.secret-scanning.view-custom-pattern %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="Remove pattern" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

{% ifversion secret-scanning-custom-patterns-metrics %}

## Metrics for custom patterns

Organization owners and people with admin permissions can see an overview of the activity for custom patterns. The overview includes alert and push protection activity for the custom pattern during the last 30 days.

{% note %}

**Note:** Metrics for custom patterns are in public beta and subject to change.

{% endnote %}

### Viewing metrics for custom patterns

{% data reusables.secret-scanning.view-custom-pattern %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the custom pattern you want to view.

The metrics are displayed under the custom pattern's name.

{% endif %}
