---
title: License files for GitHub Enterprise Server
intro: 'To use {% data variables.product.prodname_ghe_server %}, you must upload a license file.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: GHES license files
contentType: concepts
---

## About license files

In order to use a {% data variables.product.prodname_ghe_server %} instance, you must upload a license file that {% data variables.product.company_short %} provides when you purchase, renew, or add user licenses to {% data variables.product.prodname_enterprise %}.

A license file has an expiration date and controls the number of people who can use {% data variables.location.product_location_enterprise %}. After you download and install {% data variables.product.prodname_ghe_server %}, you must upload the license file to unlock the application for you to use.

If your license expires, you won't be able to access {% data variables.product.prodname_ghe_server %} via a web browser or Git. If needed, you will be able to use command-line utilities to back up all your data.

## Next steps

* To download your license file, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise).
* To upload your license file to {% data variables.product.prodname_ghe_server %}, see {% ifversion fpt or ghec %}[AUTOTITLE](/enterprise-server@latest/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server) in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).{% endif %}
* To back up your {% data variables.product.prodname_ghe_server %} instance, see {% ifversion fpt or ghec %}[Configuring backups on your appliance](/enterprise-server@latest/admin/guides/installation/configuring-backups-on-your-appliance) in the {% data variables.product.prodname_ghe_server %} documentation.{% elsif ghes %}[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).{% endif %}
* If you have questions about renewing your license, contact {% data variables.contact.contact_enterprise_sales %}.
