---
title: Viewing your GitHub Advanced Security usage
intro: 'You can view usage of your {% data variables.product.prodname_GH_advanced_security %} license.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghes: '>=3.1'
topics:
  - Enterprise
shortTitle: View Advanced Security usage
---

{% data reusables.advanced-security.about-ghas-license-seats %} For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)."

## Viewing license usage for {% data variables.product.prodname_GH_advanced_security %}

You can check how many seats your license includes and how many seats are currently in use.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   The "{% data variables.product.prodname_GH_advanced_security %}" section shows details of the current usage. You can see the total number of seats used, as well as a table with the number of committers and unique committers for each organization.
  ![{% data variables.product.prodname_GH_advanced_security %} section of Enterprise license](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Optionally, click the name of an organization where you are an owner to display the security and analysis settings for the organization.
  ![Owned organization in {% data variables.product.prodname_GH_advanced_security %} section of enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. On the "Security & analysis" settings page, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section to see a detailed breakdown of usage by repository for this organization.
  ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png)
  For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."
