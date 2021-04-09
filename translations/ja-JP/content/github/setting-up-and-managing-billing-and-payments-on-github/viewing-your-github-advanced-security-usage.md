---
title: Viewing your GitHub Advanced Security usage
intro: 'You can view and manage usage of your {% data variables.product.prodname_GH_advanced_security %} license.'
permissions: Organization and enterprise owners can manage access to {% data variables.product.prodname_GH_advanced_security %} for their organization or enterprise organizations.
product: '{% data reusables.gated-features.ghas %}'
redirect_from: /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_GH_advanced_security %}の各ライセンスは、それらの機能を使用できるアカウントもしくはシートの最大数を指定します。 Periodically you should check that your use is within your license capacity. For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %} enterprise license](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)."

### Viewing and managing {% data variables.product.prodname_GH_advanced_security %} license usage for your enterprise account

You can check how many seats your license includes and how many of them are currently used on the "Enterprise licensing" page.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   The "{% data variables.product.prodname_GH_advanced_security %}" section shows details of the current usage. ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) If you run out of seats, the section will be red. You should either reduce your use of {% data variables.product.prodname_GH_advanced_security %} or purchase more seats. For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %} enterprise license](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security#getting-the-most-out-of-your-github-advanced-security-enterprise-license)." ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Optionally, to see a detailed breakdown of usage per organization, in the left sidebar, click **Billing**. ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png) In the "{% data variables.product.prodname_GH_advanced_security %}" section you can see the number of committers and unique committers for each organization. ![{% data variables.product.prodname_GH_advanced_security %} in enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise.png)
5. Optionally, click the name of an organization where you are an owner to display the security and analysis settings for the organization. ![Owned organization in {% data variables.product.prodname_GH_advanced_security %} section of enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. On the "Security & analysis" settings page, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section to see a detailed breakdown of usage by repository for this organization. ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

