After you set up an AWS S3 storage bucket or Azure Blob Storage storage account, configure blob storage in the {% data variables.enterprise.management_console %} of {% data variables.location.product_location_enterprise %}. For more information about the {% data variables.enterprise.management_console %}, see "[Administering your instance from the Management Console]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/administering-your-instance-from-the-management-console)."

1. From an administrative account on {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
1. If you're not already on the "Site admin" page, in the upper-left corner, click **Site admin**.
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Log into the {% data variables.enterprise.management_console %}.
1. In the top navigation bar, click **Settings**.
1. Under **Migrations**, click **Enable {% data variables.product.company_short %} Migrations**.
1. Optionally, to import storage settings you configured for {% data variables.product.prodname_actions %}, select **Copy Storage settings from Actions**. For more information see, "[Enabling GitHub Actions with Azure Blob storage]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)" and "[Enabling GitHub Actions with Amazon S3 storage]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage)."

   {% note %}

   **Note**: After copying your storage settings, you may still need to update the configuration of your cloud storage account to work with {% data variables.product.prodname_importer_proper_name %}. In particular, you must ensure that {% data variables.product.prodname_dotcom %}'s IP addresses are allowlisted. For more information, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations)."

   {% endnote %}

1. If you do not import storage settings from {% data variables.product.prodname_actions %}, select either **Azure Blob Storage** or **Amazon S3** and fill in the required details.

   {% note %}

   **Note**: If you use Amazon S3, you must set the "AWS Service URL" to the standard endpoint for the AWS region where your bucket is located. For example, if your bucket is located in the `eu-west-1` region, the "AWS Service URL" would be `https://s3.eu-west-1.amazonaws.com`. Your {% data variables.product.prodname_ghe_server %} instance's network must allow access to this host. Gateway endpoints are not supported, such as `bucket.vpce-0e25b8cdd720f900e-argc85vg.s3.eu-west-1.vpce.amazonaws.com`. For more information about gateway endpoints, see [Gateway endpoints for Amazon S3](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html) in the AWS documentation.

   {% endnote %}
1. Click **Test storage settings**.
1. Click **Save settings**.
