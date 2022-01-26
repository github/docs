---
title: Defining custom patterns for secret scanning
shortTitle: Define custom patterns
intro: 'You can define custom patterns for {% data variables.product.prodname_secret_scanning %} in organizations and private repositories.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /code-security/secret-security/defining-custom-patterns-for-secret-scanning
versions:
  fpt: '*'
  ghes: '>=3.2'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Note:** Custom patterns for {% data variables.product.prodname_secret_scanning %} is currently in beta and is subject to change.

{% endnote %}
{% endif %}

## About custom patterns for {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} performs {% data variables.product.prodname_secret_scanning %} on {% ifversion fpt or ghec %}public and private{% endif %} repositories for secret patterns provided by {% data variables.product.company_short %} and {% data variables.product.company_short %} partners. For more information on the {% data variables.product.prodname_secret_scanning %} partner program, see "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Secret scanning partner program</a>."

However, there can be situations where you want to scan for other secret patterns in your {% ifversion fpt or ghec %}private{% endif %} repositories. For example, you might have a secret pattern that is internal to your organization. For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in your enterprise, organization, or {% ifversion fpt or ghec %}private{% endif %} repository on {% data variables.product.product_name %}. You can define up to 
{%- ifversion fpt or ghec or ghes > 3.3 %} 500 custom patterns for each organization or enterprise account, and up to 100 custom patterns per {% ifversion fpt or ghec %}private{% endif %} repository.
{%- elsif ghes = 3.3 %} 100 custom patterns for each organization or enterprise account, and per repository.
{%- else %} 20 custom patterns for each organization or enterprise account, and per repository.
{%- endif %}

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Note:** During the beta, there are some limitations when using custom patterns for {% data variables.product.prodname_secret_scanning %}:

* There is no dry-run functionality.
* You cannot edit custom patterns after they're created. To change a pattern, you must delete it and recreate it.
* There is no API for creating, editing, or deleting custom patterns. However, results for custom patterns are returned in the [secret scanning alerts API](/rest/reference/secret-scanning).

{% endnote %}
{% endif %}

## Regular expression syntax for custom patterns

Custom patterns for {% data variables.product.prodname_secret_scanning %} are specified as one or more regular expressions.

- **Secret format:** an expression that describes the format of the secret itself.
- **Before secret:** an expression that describes the characters that come before the secret. By default, this is set to `\A|[^0-9A-Za-z]` which means that the secret must be at the start of a line or be preceded by a non-alphanumeric character.
- **After secret:** an expression that describes the characters that come after the secret. By default, this is set to `\z|[^0-9A-Za-z]` which means that the secret must be followed by a new line or a non-alphanumeric character.
- **Additional match requirements:** one or more optional expressions that the secret itself must or must not match.

For simple tokens you will usually only need to specify a secret format. The other fields provide flexibility so that you can specify more complex secrets without creating complex regular expressions.  For an example of a custom pattern, see "[Example of a custom pattern specified using additional requirements](#example-of-a-custom-pattern-specified-using-additional-requirements)" below.

{% data variables.product.prodname_secret_scanning_caps %} uses the [Hyperscan library](https://github.com/intel/hyperscan) and only supports Hyperscan regex constructs, which are a subset of PCRE syntax. Hyperscan option modifiers are not supported.  For more information on Hyperscan pattern constructs, see "[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" in the Hyperscan documentation.

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% data variables.product.prodname_secret_scanning %} is enabled on your repository. For more information, see "[Configuring {% data variables.product.prodname_secret_scanning %} for your repositories](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data reusables.secret-scanning.secret-scanning-process %} For more information on viewing {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

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

```
a9@AAfT!         # Secret string match: a9@AAfT
ee95GG@ZA942@aa  # Secret string match: @ZA942@a
a9@AA!ee9        # Secret string match: a9@AA
```

These strings would not match the custom pattern described above:

```
a9@AA.!
a@AAAAA
aa9@AA!ee9
aAAAe9
```

## Defining a custom pattern for an organization

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the {% ifversion fpt or ghec %}private{% endif %} repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all {% ifversion fpt or ghec %}private{% endif %} repositories in your organization, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire organization. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.advanced-security.secret-scanning-new-custom-pattern %}
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt or ghec %}private{% endif %} repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

## Defining a custom pattern for an enterprise account

{% ifversion fpt or ghec or ghes %}

Before defining a custom pattern, you must ensure that you enable secret scanning for your enterprise account. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise]({% ifversion fpt or ghec %}/enterprise-server@latest/{% endif %}/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

{% note %}

**Note:** As there is no dry-run functionality, we recommend that you test your custom patterns in a repository before defining them for your entire enterprise. That way, you can avoid creating excess false-positive {% data variables.product.prodname_secret_scanning %} alerts.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-security-features %}
1. Under "Secret scanning custom patterns", click {% ifversion ghes = 3.2 %}**New custom pattern**{% else %}**New pattern**{% endif %}.
{% data reusables.advanced-security.secret-scanning-add-custom-pattern-details %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% ifversion fpt or ghec %}private{% endif %} repositories within your enterprise's organizations with {% data variables.product.prodname_GH_advanced_security %} enabled, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}
## Editing a custom pattern

When you save a change to a custom pattern, this closes all the {% data variables.product.prodname_secret_scanning %} alerts that were created using the previous version of the pattern.
1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.
   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. For more information, see "[Defining a custom pattern for a repository](#defining-a-custom-pattern-for-a-repository)" or "[Defining a custom pattern for an organization](#defining-a-custom-pattern-for-an-organization)" above.
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**. For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
2. Under "{% data variables.product.prodname_secret_scanning_caps %}", to the right of the custom pattern you want to edit, click {% octicon "pencil" aria-label="The edit icon" %}.
3. When you have reviewed and tested your changes, click **Save changes**.
{% endif %}

## Removing a custom pattern

1. Navigate to where the custom pattern was created. A custom pattern can be created in a repository, organization, or enterprise account.

   * For a repository or organization, display the "Security & analysis" settings for the repository or organization where the custom pattern was created. For more information, see "[Defining a custom pattern for a repository](#defining-a-custom-pattern-for-a-repository)" or "[Defining a custom pattern for an organization](#defining-a-custom-pattern-for-an-organization)" above.
   * For an enterprise, under "Policies" display the "Advanced Security" area, and then click **Security features**.  For more information, see "[Defining a custom pattern for an enterprise account](#defining-a-custom-pattern-for-an-enterprise-account)" above.
{%- ifversion fpt or ghes > 3.2 or ghae %}
1. To the right of the custom pattern you want to remove, click {% octicon "trash" aria-label="The trash icon" %}.
1. Review the confirmation, and select a method for dealing with any open alerts relating to the custom pattern.
1. Click **Yes, delete this pattern**.

   ![Confirming deletion of a custom {% data variables.product.prodname_secret_scanning %} pattern ](/assets/images/help/repository/secret-scanning-confirm-deletion-custom-pattern.png)
{%- elsif ghes = 3.2 %}
1. To the right of the custom pattern you want to remove, click **Remove**.
1. Review the confirmation, and click **Remove custom pattern**.
{%- endif %}
