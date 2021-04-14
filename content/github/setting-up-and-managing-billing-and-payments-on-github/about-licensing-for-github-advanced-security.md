---
title: About licensing for GitHub Advanced Security
intro: 'If you want to use {% data variables.product.prodname_GH_advanced_security %} features in a private or internal repository, you need a license. These features are available free of charge for public repositories.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
---

### About licensing for {% data variables.product.prodname_GH_advanced_security %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a license. For more information about {% data variables.product.prodname_GH_advanced_security %}, see "[About {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)."

{% data reusables.advanced-security.license-overview %}

To discuss licensing {% data variables.product.prodname_GH_advanced_security %} for your enterprise account, contact {% data variables.contact.contact_enterprise_sales %}.

### About committer numbers for {% data variables.product.prodname_GH_advanced_security %}

We record and display two numbers of committers for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.product.prodname_dotcom_the_website %}:

- **Committers** is the number of committers who contributed to at least one private repository in an organization and who use a seat in your license. That is, they are also an organization member, an external collaborator, or have a pending invitation to join an organization in your enterprise.
- **Unique to this repository/organization** is the number of committers who contributed only to this repository, or to repositories in this organization. This number shows how many license seats you can free up by disabling {% data variables.product.prodname_GH_advanced_security %} for that repository or organization.

If there are no unique committers, this means that all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Disabling the feature for that repository or organization would not free any seats on your license.

{% note %}

**Note:** The total number of seats used in your license is not the sum of either the committers or the unique committers to each repository or organization. This is because there are people who contribute to multiple repositories or organizations. The number of seats used is measured across the whole enterprise account to ensure that each person is counted only once regardless of how many repositories or organizations they contribute to.

{% endnote %}

### Managing your license usage for {% data variables.product.prodname_GH_advanced_security %}

When you enable {% data variables.product.prodname_GH_advanced_security %} for a single repository, or for all repositories in an organization, {% data variables.product.company_short %} shows how many extra seats this will use and prompts you for confirmation. If you disable access to {% data variables.product.prodname_GH_advanced_security %}, any seats used by "unique" committers are freed up. This makes it easy to understand the impact of your changes on the use of your license.

If you are over your license limit, {% data variables.product.prodname_GH_advanced_security %} continues to work on all repositories where it is already enabled. However, in organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled for new repositories, repositories will be created with the feature disabled. In addition, the option to enable {% data variables.product.prodname_GH_advanced_security %} for existing repositories will not be available. If you change the visibility of a public repository to private then {% data variables.product.prodname_GH_advanced_security %} will be disabled for that repository.

As soon as you free up some seats, by disabling {% data variables.product.prodname_GH_advanced_security %} for some repositories or by increasing your license size, the options for enabling {% data variables.product.prodname_GH_advanced_security %} will work again as normal.

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)."

For more information on viewing license usage, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)."

### Getting the most out of your {% data variables.product.prodname_GH_advanced_security %} license

When you decide which repositories and organizations to prioritize for {% data variables.product.prodname_GH_advanced_security %}, you should review them and identify:

- Codebases that are the most critical to your company's success. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or vulnerable dependencies would have the greatest impact on your company.
- Codebases with the highest commit frequency. These are the most actively developed projects, consequently there is a higher risk that security problems could be introduced.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, you should assess which other codebases you could add without adding any extra unique committers and using up more seats on your license. After this, review the next most important and busy codebases. If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.
