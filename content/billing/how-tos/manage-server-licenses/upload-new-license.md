---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.location.product_location_enterprise %} to validate your application.'
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Upload new license
redirect_from:
  - /billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server
contentType: how-tos
---

## About license files for {% data variables.product.prodname_ghe_server %}

When you purchase or download a new license for {% data variables.product.prodname_ghe_server %} you must upload the new license file to {% data variables.product.prodname_ghe_server %} to unlock your new user licenses.

If you use {% data variables.product.prodname_ghe_cloud %}, you can download a license from your enterprise. For more information, see [AUTOTITLE](/billing/concepts/enterprise-billing/ghes-license-files) and [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise).

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license from the {% data variables.enterprise.management_console %}

1. Sign into {% data variables.product.prodname_ghe_server %} as a site administrator.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab-ghes %}
1. In the "User licenses" section, under "Quick links", click **Update license**. If prompted, enter the root password for your instance.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Update license", is outlined in dark orange.](/assets/images/enterprise/management-console/update-license-link.png)
1. To upload your license, click **License file** and select your license file. Alternatively, drag your license file onto the **License file** upload area.

   ![Screenshot of the "License" page of the Management Console. The "License file" upload area is highlighted with an orange outline.](/assets/images/enterprise/management-console/upload-license.png)
1. Click **Upload**. Your license will be updated in the background. The change may take a few minutes before it is visible on your instance.

## Uploading your license with the REST API

You can use the REST API to upload a license to {% data variables.location.product_location %}. {% ifversion ghec %}See [AUTOTITLE](/enterprise-server@latest/rest/enterprise-admin/manage-ghes#upload-an-enterprise-license) in the documentation for {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}See [AUTOTITLE](/rest/enterprise-admin/manage-ghes#upload-an-enterprise-license).{% endif %}

## Uploading a license with the {% data variables.product.prodname_cli %}

You can import a license to {% data variables.location.product_location %} using the `gh es` extension of the {% data variables.product.prodname_cli %}. See the [usage instructions](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-config-import-license) in the `github/gh-es` repository on {% data variables.product.prodname_dotcom_the_website %}.

For more information about accessing your instance via the extension, {% ifversion ghec %}see [AUTOTITLE](/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli) in the documentation for {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli).{% endif %}

## Uploading a license via SSH

You can upload and interact with your license from the command line via SSH. See the documentation for the `ghe-license` command in {% ifversion ghec %}[AUTOTITLE](/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-license) in the documentation for {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-license).{% endif %}

For more information about accessing your instance via SSH, see {% ifversion ghec %}[AUTOTITLE](/enterprise-server@latest/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh) in the documentation for {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).{% endif %}
