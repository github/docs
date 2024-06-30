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

## Uploading your license from the {% data variables.enterprise.management_console %}

{% ifversion ghes < 3.13 %}
{% warning %}

**Warning:** Updating your license causes a small amount of downtime for {% data variables.location.product_location %}.

{% endwarning %}
{% endif %}

1. Sign into {% data variables.location.product_location_enterprise %} as a site administrator.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. In the "User licenses" section, under "Quick links", click **Update license**.

   ![Screenshot of the "User licenses" section of the "License" page. A link, labeled "Update license", is outlined in dark orange.](/assets/images/enterprise/management-console/update-license-link.png)
1. To upload your license, click **License file**, or drag your license file onto **License file**.

   ![Screenshot of the "License" page of the Management Console. A link, labeled "License file", is highlighted with an orange outline.](/assets/images/enterprise/management-console/upload-license.png)
1. Click **Upload**.{% ifversion ghes > 3.12 %} Your license will be updated in the background. The change may take a few minutes before it is visible on your instance.{% endif %}

{% ifversion ghes > 3.12 %}

## Uploading your license with the REST API

You can use the REST API to upload a license to {% data variables.location.product_location %}. See "[AUTOTITLE](/rest/enterprise-admin/manage-ghes#upload-an-enterprise-license)."

## Uploading a license with the {% data variables.product.prodname_cli %}

You can import a license to {% data variables.location.product_location %} using the `gh es` extension of the {% data variables.product.prodname_cli %}. See the [usage instructions](https://github.com/github/gh-es/blob/main/USAGE.md#gh-es-config-import-license) in the `github/gh-es` repository on {% data variables.product.prodname_dotcom_the_website %}.

For more information about accessing your instance via the extension, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/administering-your-instance-using-the-github-cli)."

## Uploading a license via SSH

You can upload and interact with your license from the command line via SSH. See the documentation for the `ghe-license` command in "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-license)." For more information about accessing your instance via SSH, see "[AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)."

{% endif %}
