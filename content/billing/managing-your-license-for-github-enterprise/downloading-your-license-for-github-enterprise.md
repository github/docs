---
title: Downloading your license for GitHub Enterprise
intro: 'You can download a copy of your license file for {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must download your new license file. For more information about licenses for {% data variables.product.prodname_enterprise %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Downloading your license file

There are two possible ways to download a license file for {% data variables.product.prodname_ghe_server %}.

1. If you are using a trial of {% data variables.product.prodname_ghe_server %}, if you do not have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, or if you are not sure, you may be able to download your license file from the [{% data variables.product.prodname_enterprise %} website](https://enterprise.github.com/download).

2. If you are an existing {% data variables.product.prodname_enterprise %} customer with an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you can download your license file from {% data variables.product.prodname_dotcom_the_website %} using the following instructions.

If you have any questions about downloading your license, contact {% data variables.contact.contact_enterprise_sales %}. For more information about enterprise accounts, see "[About enterprise accounts](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. Under "Enterprise Server Instances", click {% octicon "download" aria-label="The download icon" %} to download your license file.
  ![Download GitHub Enterprise Server license](/assets/images/help/business-accounts/download-ghes-license.png)

After you download your license file, you can upload the file to {% data variables.location.product_location_enterprise %} to validate your application. For more information, see {% ifversion ghec %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[Uploading a new license to {% data variables.product.prodname_ghe_server %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}
