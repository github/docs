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

{% ifversion metered-ghe-ghas %}

{% data reusables.billing.usage-based-billing %}

{% endif %}

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must download your new license file. For more information about licenses for {% data variables.product.prodname_enterprise %}, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Downloading your license file

There are two possible ways to download a license file for {% data variables.product.prodname_ghe_server %}.

1. If you are using a trial of {% data variables.product.prodname_ghe_server %}, if you do not have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, or if you are not sure, you may be able to download your license file from the [{% data variables.product.prodname_enterprise %} website](https://enterprise.github.com/download).

1. If you are an existing {% data variables.product.prodname_enterprise %} customer with an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, you can download your license file from {% data variables.product.prodname_dotcom_the_website %} using the following instructions.

If you have any questions about downloading your license, contact {% data variables.contact.contact_enterprise_sales %}. For more information about enterprise accounts, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "Enterprise Server licenses", next to the license you want to download, click **{% octicon "download" aria-hidden="true" %} Download**.

After you download your license file, you can upload the file to {% data variables.location.product_location_enterprise %} to validate your application. For more information, see {% ifversion ghec %}"[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)" in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}"[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}
