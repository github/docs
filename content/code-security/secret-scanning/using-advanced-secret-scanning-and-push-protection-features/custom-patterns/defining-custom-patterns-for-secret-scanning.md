---
title: Defining custom patterns for secret scanning
shortTitle: Define custom patterns
intro: 'You can define your own custom patterns to extend the capabilities of {% data variables.product.prodname_secret_scanning %} by generating one or more regular expressions.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
  - /code-security/secret-scanning/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Secret scanning
---

## About custom patterns for {% data variables.product.prodname_secret_scanning %}

You can define custom patterns to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. For example, you might have a secret pattern that is internal to your organization. For details of the supported secrets and service providers, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)."

You can define custom patterns for your enterprise, organization, or repository. {% data variables.product.prodname_secret_scanning_caps %} supports up to 500 custom patterns for each organization or enterprise account, and up to 100 custom patterns per repository.

{% ifversion secret-scanning-push-protection-custom-patterns %}You can also enable push protection for custom patterns. For more information about push protection, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."{% endif %}

## About using regular expressions for custom patterns

You can specify custom patterns for {% data variables.product.prodname_secret_scanning %} as one or more regular expressions.

{% data variables.product.prodname_secret_scanning_caps %} uses the [Hyperscan library](https://github.com/intel/hyperscan) and only supports Hyperscan regex constructs, which are a subset of PCRE syntax. Hyperscan option modifiers are not supported.  For more information on Hyperscan pattern constructs, see "[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" in the Hyperscan documentation.

{% ifversion secret-scanning-custom-pattern-ai-generated %}Regular expressions can be entered manually or generated using the regular expression generator.

### Regular expression syntax for manually defining custom patterns {% endif %}

The **More options {% octicon "chevron-down" aria-label="down" %}** section in the UI helps you write regular expressions manually.

* **Secret format:** an expression that describes the format of the secret itself.
* **Before secret:** an expression that describes the characters that come before the secret. By default, this is set to `\A|[^0-9A-Za-z]` which means that the secret must be at the start of a line or be preceded by a non-alphanumeric character.
* **After secret:** an expression that describes the characters that come after the secret. By default, this is set to `\z|[^0-9A-Za-z]` which means that the secret must be followed by a new line or a non-alphanumeric character.
* **Additional match requirements:** one or more optional expressions that the secret itself must or must not match.

For simple tokens you will usually only need to specify a secret format. The other fields provide flexibility so that you can specify more complex secrets without creating complex regular expressions.  For an example of a custom pattern, see "[Example of a custom pattern specified using additional requirements](#example-of-a-custom-pattern-specified-using-additional-requirements)" below.

{% ifversion secret-scanning-custom-pattern-ai-generated %}

### Using the regular expression generator

{% data reusables.secret-scanning.regular-expression-generator-overview %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/about-generating-regular-expressions-with-ai)" and "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/generating-regular-expressions-for-custom-patterns-with-ai)."

{% endif %}

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% data variables.product.prodname_secret_scanning %} is enabled on your repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}{% ifversion custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
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

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. {% ifversion security-configurations-ga %} You can use {% data variables.product.prodname_security_configurations %} to enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization using the {% data variables.product.prodname_github_security_configuration %}, or you can create a {% data variables.product.prodname_custom_security_configuration %}. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)" and "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."{% else %}
To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations-beta-and-pre-beta %}
{% data reusables.organizations.security-and-analysis %}
{% else %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
{% endif %}

{% ifversion security-configurations-beta-only %}
    {% data reusables.security-configurations.changed-org-settings-global-settings-callout %} For next steps on defining a custom pattern for your organization with {% data variables.product.prodname_global_settings %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#defining-custom-patterns)."
{% endif %}

{% ifversion security-configurations-beta-and-pre-beta %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% else %}
1. Find "{% data variables.product.prodname_GH_advanced_security %}."
{% endif %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern-org %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
{%- ifversion custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in select repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-in-an-organization-for-a-custom-pattern)."

{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% note %}

{% ifversion custom-pattern-dry-run-ga %}
**Notes:**
* At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run.
* {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}
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
{%- ifversion custom-pattern-dry-run-ga %}
1. When you're ready to test your new custom pattern, to identify matches in the enterprise without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{%- endif %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see "[AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
{% indented_data_reference reusables.secret-scanning.push-protection-enterprise-note spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/managing-custom-patterns)" {% ifversion secret-scanning-custom-patterns-metrics %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/metrics-for-custom-patterns)"{% endif %}
