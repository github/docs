---
title: Viewing your GitHub Advanced Security usage
intro: 'You can view usage of {% data variables.product.prodname_GH_advanced_security %} for your enterprise.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  fpt: '*'
  ghec: '*'
  ghae: issue-5378
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
---

## About licenses for {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} For more information, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."

## Viewing {% data variables.product.prodname_GH_advanced_security %} license usage for your enterprise account

You can check how many seats your license includes and how many of them are currently used.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   The "{% data variables.product.prodname_GH_advanced_security %}" section shows details of the current usage.
  ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png)
  If you run out of seats, the section will be red and show "Limit exceeded." You should either reduce your use of {% data variables.product.prodname_GH_advanced_security %} or purchase more seats. For more information, see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)."
  ![{% data variables.product.prodname_GH_advanced_security %} in enterprise licensing settings showing "Limit exceeded"](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Optionally, to see a detailed breakdown of usage per organization, in the left sidebar, click **Billing**.
  ![Billing tab in the enterprise account settings sidebar](/assets/images/help/business-accounts/settings-billing-tab.png)
  In the "{% data variables.product.prodname_GH_advanced_security %}" section you can see the number of committers and unique committers for each organization.
  ![{% data variables.product.prodname_GH_advanced_security %} in enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Optionally, click the name of an organization where you are an owner to display the security and analysis settings for the organization.
  ![Owned organization in {% data variables.product.prodname_GH_advanced_security %} section of enterprise billing settings](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. On the "Security & analysis" settings page, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section to see a detailed breakdown of usage by repository for this organization.
  ![{% data variables.product.prodname_GH_advanced_security %} repositories section](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png)
  For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% elsif ghes %}

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

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## Downloading {% data variables.product.prodname_GH_advanced_security %} license usage information

You can download a CSV file with {% data variables.product.prodname_GH_advanced_security %} license usage information at both the enterprise and organization levels. The CSV file contains information about each {% data variables.product.prodname_advanced_security %} seat that is in use, including:

- The username of the person using the seat
- The {% data variables.product.prodname_advanced_security %}-enabled repositories where commits were made
- The organizations that people using seats belong to
- The most recent commit dates

You can use this information for insights into how your {% data variables.product.prodname_advanced_security %} licenses are being used, such as which members of your enterprise are using an {% data variables.product.prodname_advanced_security %} seat or how {% data variables.product.prodname_advanced_security %} licenses are being consumed across your organizations.

You can download the {% data variables.product.prodname_advanced_security %} license usage CSV through the {% data variables.product.product_name %} user interface or the REST API.

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the UI

#### At the organization-level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Underneath "{% data variables.product.prodname_GH_advanced_security %}," click {% octicon "download" aria-label="The download icon" %} next to "Committers."
  ![Download button for organization-level data](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### At the enterprise-level

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}," click {% octicon "download" aria-label="The download icon" %} next to "Commiters."
  ![Download button for enterprise-level data](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the REST API

You can retrieve {% data variables.product.prodname_advanced_security %} usage information via the billing API.

{% ifversion ghec %}

For organization-level data, use the `/orgs/{org}/settings/billing/advanced-security` endpoint. For more information, see "[Billing](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

{% endif %}

For enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/advanced-security` endpoint. For more information, see "[{% data variables.product.prodname_enterprise %} administration](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

{% endif %}
