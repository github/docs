---
title: Defining custom patterns for secret scanning
shortTitle: 'Defining custom patterns'
intro: 'You can define custom patterns for {% data variables.product.prodname_secret_scanning %} in organizations and private repositories.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
  github-ae: 'next'
topics:
  - Repositories
---

{% note %}

**Note:** Custom patterns for {% data variables.product.prodname_secret_scanning %} is currently in beta and is subject to change.

{% endnote %}

## About custom patterns for {% data variables.product.prodname_secret_scanning %}

{% data variables.product.company_short %} performs {% data variables.product.prodname_secret_scanning %} on {% if currentVersion == "free-pro-team@latest" %}public and private{% endif %} repositories for secret patterns provided by {% data variables.product.company_short %} and {% data variables.product.company_short %} partners. For more information on the {% data variables.product.prodname_secret_scanning %} partner program, see "<a href="/developers/overview/secret-scanning-partner-program" class="dotcom-only">Secret scanning partner program</a>."

However, there can be situations where you want to scan for other secret patterns in your {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repositories. For example, you might have a secret pattern that is internal to your organization. For these situations, you can define custom {% data variables.product.prodname_secret_scanning %} patterns in organizations and {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repositories on {% data variables.product.product_name %}. You can define up to 20 custom patterns for each {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repository or organization.

{% note %}

**Note:** During the beta, there are some limitations when using custom patterns for {% data variables.product.prodname_secret_scanning %}:

* There is no dry-run functionality.
* You cannot edit custom patterns after they're created. To change a pattern, you must delete it and recreate it.
* There is no API for creating, editing, or deleting custom patterns. However, results for custom patterns are returned in the [secret scanning alerts API](/rest/reference/secret-scanning).

{% endnote %}

## Regular expression syntax for custom patterns

Custom patterns for {% data variables.product.prodname_secret_scanning %} are specified as regular expressions. {% data variables.product.prodname_secret_scanning_caps %} uses the [Hyperscan library](https://github.com/intel/hyperscan) and only supports Hyperscan regex constructs, which are a subset of PCRE syntax. Hyperscan option modifiers are not supported.  For more information on Hyperscan pattern constructs, see "[Pattern support](http://intel.github.io/hyperscan/dev-reference/compilation.html#pattern-support)" in the Hyperscan documentation.

## Defining a custom pattern for a repository

Before defining a custom pattern, you must ensure that {% data variables.product.prodname_secret_scanning %} is enabled on your repository. For more information, see "[Configuring {% data variables.product.prodname_secret_scanning %} for your repositories](/code-security/secret-security/configuring-secret-scanning-for-your-repositories)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.repositories.secret-scanning-add-custom-pattern %}

After your pattern is created, {% data reusables.secret-scanning.secret-scanning-process %} For more information on viewing {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

## Defining a custom pattern for an organization

Before defining a custom pattern, you must ensure that you enable {% data variables.product.prodname_secret_scanning %} for the {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repositories that you want to scan in your organization. To enable {% data variables.product.prodname_secret_scanning %} on all {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repositories in your organization, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% note %}

**Note:** There is no dry-run functionality during the custom patterns beta. To avoid excess false-positive {% data variables.product.prodname_secret_scanning %} alerts, we recommend that you test your custom patterns in a repository before defining them for your entire organization.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
{% data reusables.repositories.secret-scanning-add-custom-pattern %}

After your pattern is created, {% data variables.product.prodname_secret_scanning %} scans for any secrets in {% if currentVersion == "free-pro-team@latest" %}private{% endif %} repositories in your organization, including their entire Git history on all branches. Organization owners and repository administrators will be alerted to any secrets found, and can review the alert in the repository where the secret is found. For more information on viewing {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

## Removing a custom pattern

Removing a custom pattern also closes all the {% data variables.product.prodname_secret_scanning %} alerts that the pattern created.

1. Navigate to the **Security & analysis** settings for the repository or organization where the custom pattern was created. For more information, see "[Defining a custom pattern for a repository](#defining-a-custom-pattern-for-a-repository)" or "[Defining a custom pattern for an organization](#defining-a-custom-pattern-for-an-organization)" above.
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", find the custom pattern you want to remove and click **Remove**.

   ![Remove a custom {% data variables.product.prodname_secret_scanning %}  pattern](/assets/images/help/repository/secret-scanning-remove-custom-pattern.png)
1. Review the confirmation and click **Remove custom pattern**.
