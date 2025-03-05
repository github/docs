---
title: Defining custom patterns for secret scanning
shortTitle: Define custom patterns
intro: 'You can define your own custom patterns to extend the capabilities of {% data variables.product.prodname_secret_scanning %} by generating one or more regular expressions.'
product: '{% data reusables.gated-features.secret-scanning-custom-patterns %}'
permissions: '{% data reusables.permissions.security-enterprise-enable %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
  - /code-security/secret-scanning/defining-custom-patterns-for-secret-scanning
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret Protection
  - Secret scanning
---

## About custom patterns for {% data variables.product.prodname_secret_scanning %}

You can define custom patterns to identify secrets that are not detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. For example, you might have a secret pattern that is internal to your organization. For details of the supported secrets and service providers, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

You can define custom patterns for your enterprise, organization, or repository. {% data variables.product.prodname_secret_scanning_caps %} supports up to 500 custom patterns for each organization or enterprise account, and up to 100 custom patterns per repository.

{% ifversion secret-scanning-push-protection-custom-patterns %}You can also enable push protection for custom patterns. For more information about push protection, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).{% endif %}

## About using regular expressions for custom patterns

You can specify custom patterns for {% data variables.product.prodname_secret_scanning %} as one or more regular expressions.

{% data variables.product.prodname_secret_scanning_caps %} uses the [Hyperscan library](https://github.com/intel/hyperscan) and only supports Hyperscan regex constructs, which are a subset of PCRE syntax. Hyperscan option modifiers are not supported. For more information on Hyperscan pattern constructs, see [Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support) in the Hyperscan documentation.

{% ifversion secret-scanning-custom-pattern-ai-generated %}Regular expressions can be entered manually or generated using {% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}.

### Regular expression syntax for manually defining custom patterns {% endif %}

The **More options {% octicon "chevron-down" aria-hidden="true" %}** section in the UI helps you write regular expressions manually.

* **Secret format:** an expression that describes the format of the secret itself.
* **Before secret:** an expression that describes the characters that come before the secret. By default, this is set to `\A|[^0-9A-Za-z]` which means that the secret must be at the start of a line or be preceded by a non-alphanumeric character.
* **After secret:** an expression that describes the characters that come after the secret. By default, this is set to `\z|[^0-9A-Za-z]` which means that the secret must be followed by a new line or a non-alphanumeric character.
* **Additional match requirements:** one or more optional expressions that the secret itself must or must not match.

For simple tokens you will usually only need to specify a secret format. The other fields provide flexibility so that you can specify more complex secrets without creating complex regular expressions. For an example of a custom pattern, see [Example of a custom pattern specified using additional requirements](#example-of-a-custom-pattern-specified-using-additional-requirements) below.

{% ifversion secret-scanning-custom-pattern-ai-generated %}

### Using {% data variables.secret-scanning.copilot-secret-scanning %}'s {% data variables.secret-scanning.custom-pattern-regular-expression-generator %}

{% data reusables.secret-scanning.regular-expression-generator-overview %} For more information, see [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-regex-generator) and [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/generating-regular-expressions-for-custom-patterns-with-copilot-secret-scanning).

{% endif %}

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% data variables.product.prodname_secret_scanning %} is enabled on your repository. For more information, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in the repository without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**.

   > [!NOTE]
   > The "Enable" button isn't available until after the dry run succeeds and you publish the pattern.

   For more information about push protection, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

{% endif %}

After your pattern is created, {% data reusables.secret-scanning.secret-scanning-process %} For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

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

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the repositories that you want to scan in your organization. {% ifversion security-configurations %} You can use {% data variables.product.prodname_security_configurations %} to enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).{% else %}
To enable {% data variables.product.prodname_secret_scanning %} on all repositories in your organization, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion security-configurations %}
1. In the "Security" section of the sidebar, select the **Code security** dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
{% else %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% endif %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern-org %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in select repositories without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-in-an-organization-for-a-custom-pattern).

{% indented_data_reference reusables.secret-scanning.push-protection-org-notes spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

## Defining a custom pattern for an enterprise account

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see [AUTOTITLE]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

> [!NOTE]
> * At the enterprise level, only the creator of a custom pattern can edit the pattern, and use it in a dry run.
> * {% data reusables.secret-scanning.dry-runs-enterprise-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. Under "{% ifversion code-security-wording-only-enterprise %}Code security{% else %}Code security and analysis{% endif %}", click **Security features**.
1. Under "Secret scanning custom patterns", click **New pattern**.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}
1. When you're ready to test your new custom pattern, to identify matches in the enterprise without creating alerts, click **Save and dry run**.
{% data reusables.advanced-security.secret-scanning-dry-run-select-enterprise-repos %}
{% data reusables.advanced-security.secret-scanning-dry-run-results %}
{% data reusables.advanced-security.secret-scanning-create-custom-pattern %}{% ifversion secret-scanning-push-protection-custom-patterns %}
1. Optionally, to enable push protection for your custom pattern, click **Enable**. For more information, see [AUTOTITLE](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{% indented_data_reference reusables.secret-scanning.push-protection-enterprise-note spaces=3 %}{% endif %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.secret-scanning.alerts %}, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/managing-custom-patterns) {% ifversion secret-scanning-custom-patterns-metrics %}
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/metrics-for-custom-patterns){% endif %}
