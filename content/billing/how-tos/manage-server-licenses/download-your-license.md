---
title: Downloading your license for GitHub Enterprise
intro: 'You can download a copy of your license file for {% data variables.product.prodname_ghe_server %}.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Download your license
redirect_from:
  - /free-pro-team@latest/billing/managing-your-license-for-github-enterprise
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses
  - /enterprise/admin/articles/license-files
  - /enterprise/admin/installation/about-license-files
  - /enterprise/admin/articles/downloading-your-license
  - /enterprise/admin/installation/downloading-your-license
  - /enterprise/admin/articles/upgrading-your-license
  - /enterprise/admin/installation/updating-your-license
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
  - /billing/managing-your-license-for-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise
contentType: how-tos
---


{% data reusables.billing.usage-based-billing %}

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must download your new license file. For more information about licenses for {% data variables.product.prodname_enterprise %}, see [AUTOTITLE](/billing/concepts/enterprise-billing/ghes-license-files).

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Downloading your license file

There are two possible ways to download a license file for {% data variables.product.prodname_ghe_server %}.

1. If you are using a trial of {% data variables.product.prodname_ghe_server %}, if you do not have an enterprise account on {% data variables.product.prodname_ghe_cloud %}, or if you are not sure, you may be able to download your license file from the [{% data variables.product.prodname_enterprise %} website](https://enterprise.github.com/download).

1. If you are an existing {% data variables.product.prodname_enterprise %} customer with an enterprise account on {% data variables.product.prodname_ghe_cloud %}, you can download your license file from {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %} using the following instructions.

If you have any questions about downloading your license, contact {% data variables.contact.contact_enterprise_sales %}. For more information about enterprise accounts, see [AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% elsif ghec %}.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
1. Optionally, if a yellow banner reports "Your license usage for Enterprise Cloud has changed. Generate a new license key to update server seats.", click **Generate new license** to generate a new license key.
1. Scroll down to "Enterprise Server licenses". Next to the license you want to download, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Download**.

After you download your license file, you can upload the file to {% data variables.product.prodname_ghe_server %} to validate your application. For more information, see {% ifversion ghec %}[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% endif %}
