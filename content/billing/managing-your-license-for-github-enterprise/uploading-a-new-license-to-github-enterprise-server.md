---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.location.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.location.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.location.product_location_enterprise %}

{% warning %}

**Warning:** Updating your license causes a small amount of downtime for {% data variables.location.product_location %}.

{% endwarning %}

1. Sign into {% data variables.location.product_location_enterprise %} as a site administrator.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. In the "User licenses" section, under "Quick links", click **Update license**.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Update license", is outlined in dark orange.](/assets/images/enterprise/management-console/update-license-link.png)
1. To upload your license, click **License file**, or drag your license file onto **License file**.

   ![Screenshot of the "License" page of the Management Console. A link, labeled "License file", is highlighted with an orange outline.](/assets/images/enterprise/management-console/upload-license.png)
1. Click **Upload**.
