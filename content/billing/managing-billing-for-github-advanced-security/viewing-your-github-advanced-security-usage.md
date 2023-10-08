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
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
---

## About licenses for {% data variables.product.prodname_GH_advanced_security %}

Each license for {% data variables.product.prodname_GH_advanced_security %} specifies a maximum number of {% ifversion ghas-billing-UI-update %}licenses {% else %}accounts, or seats, {% endif %}that can use these features. Periodically you should check that your use is within your license capacity. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."

{% ifversion ghas-committers-calculator %}
You can estimate the number of licenses your enterprise would need to purchase {% data variables.product.prodname_GH_advanced_security %} or to enable {% data variables.product.prodname_GH_advanced_security %} for additional organizations and repositories. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/viewing-committer-information-for-github-advanced-security)."
{% endif %}

## Viewing {% data variables.product.prodname_GH_advanced_security %} license usage for your enterprise account

You can view the enterprise account's current {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %} limits and usage.

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   The "{% data variables.product.prodname_GH_advanced_security %}" section shows details of the current usage.

   If you run out of licenses, the section will be red and show "Limit exceeded." You should either reduce your use of {% data variables.product.prodname_GH_advanced_security %} or purchase more licenses. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security)" and "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing)."

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
   The "{% data variables.product.prodname_GH_advanced_security %}" section shows details of the current usage. You can see the total number of licenses used, as well as a table with the number of committers and unique committers for each organization.

{% endif %}
{%- ifversion ghas-billing-table-ui-update -%}
1. Optionally, to see a detailed breakdown of usage per organization, in the enterprise account sidebar, click **Billing**.

   In the “{% data variables.product.prodname_GH_advanced_security %}” section, you can see a summary of your current license usage, as well as the number of committers and unique committers for each organization. The organizations in the billing table are sorted by the highest number of unique committers in descending order.
{% endif %}
1. Optionally, display the security and analysis settings for an organization.
   - Click the name of the organization.

{% ifversion ghas-billing-table-ui-update %}
   - On the "Code security & analysis" settings page, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section to see an overview of your organization's license usage, as well as a detailed breakdown of usage by repository for this organization.

      For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% else %}
   - On the "Security & analysis" settings page, scroll to the "{% data variables.product.prodname_GH_advanced_security %} repositories" section to see a detailed breakdown of usage by repository for this organization.

  For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% endif %}

## Downloading {% data variables.product.prodname_GH_advanced_security %} license usage information

You can download a CSV file with {% data variables.product.prodname_GH_advanced_security %} license usage information at both the enterprise and organization levels. The CSV file contains information about each {% data variables.product.prodname_advanced_security %} license that is in use, including:

- The username of the person using the {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %}
- The {% data variables.product.prodname_advanced_security %}-enabled repositories where commits were made
- The organizations that people using {% ifversion ghas-billing-UI-update %}licenses{% else %}seats{% endif %} belong to
- The most recent commit dates

You can use this information for insights into your {% data variables.product.prodname_advanced_security %} usage, such as which members of your enterprise are using an {% data variables.product.prodname_advanced_security %} {% ifversion ghas-billing-UI-update %}license{% else %}seat{% endif %} or how {% data variables.product.prodname_advanced_security %} licenses are being consumed across your organizations.

You can download the {% data variables.product.prodname_advanced_security %} license usage CSV through the {% data variables.product.product_name %} user interface or the REST API.

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the UI

{% ifversion ghas-billing-table-ui-update %}

#### At the repository-level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, click {% octicon "codescan" aria-hidden="true" %} **Code security and analysis**.
1. In the "{% data variables.product.prodname_GH_advanced_security %} repositories" section, next to the repository you want usage information for, select {% octicon "kebab-horizontal" aria-label="GHAS repository actions" %}, then click **Download CSV report**.

   ![Screenshot of the committers by repository table. The horizontal kebab icon and "Download CSV report" button are highlighted with an orange outline.](/assets/images/help/billing/ghas-billing-table-repository-csv.png)

{% endif %}

{% ifversion ghec %}

#### At the organization-level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Underneath "{% data variables.product.prodname_GH_advanced_security %}," next to "Committers", click **{% octicon "download" aria-hidden="true" %} CSV report**.
{% endif %}

{% ifversion ghas-billing-table-ui-update %}

#### At the enterprise-level

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}

{%- ifversion ghec %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}," click the **Manage** dropdown and then click **Download report**.

   ![Screenshot of the "Manage" dropdown in the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "Download Report" button is highlighted with an orange outline.](/assets/images/help/enterprises/ghas-download-report.png)

{%- elsif ghes > 3.8 %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}," click {% octicon "download" aria-hidden="true" %} **CSV report** in the header of the "Committers" table.

   ![Screenshot of the {% data variables.product.prodname_GH_advanced_security %} licensing screen. The "CSV Report" button is highlighted with an orange outline.](/assets/images/enterprise/ghas/download-csv-report-ghes-3.9.png)

{%- else %}
1. Under "{% data variables.product.prodname_GH_advanced_security %}," {% octicon "download" aria-label="The download icon" %} in the header of the "Committers" table.

{%- endif %}

### Downloading {% data variables.product.prodname_advanced_security %} license usage information through the REST API

You can retrieve {% data variables.product.prodname_advanced_security %} usage information via the billing API.

{% ifversion ghec %}

For organization-level data, use the `/orgs/{org}/settings/billing/advanced-security` endpoint. For more information, see "[AUTOTITLE](/rest/billing#get-github-advanced-security-active-committers-for-an-organization)" in the {% data variables.product.prodname_dotcom %} REST API documentation.

{% endif %}

For enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/advanced-security` endpoint. For more information, see "[AUTOTITLE](/rest/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise)" in the {% data variables.product.prodname_dotcom %} REST API documentation.
