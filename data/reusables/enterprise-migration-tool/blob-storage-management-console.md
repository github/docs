After you set up an AWS S3 storage bucket or Azure Blob Storage storage account, configure blob storage in the {% data variables.enterprise.management_console %} of {% data variables.location.product_location_enterprise %}. For more information about the {% data variables.enterprise.management_console %}, see "[Administering your instance from the Management Console]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/administering-your-instance-from-the-management-console)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Log into the {% data variables.enterprise.management_console %}.
1. In the top navigation bar, click **Settings**.
1. Under **Migrations**, click **Enable {% data variables.product.company_short %} Migrations**.
1. Optionally, to import storage settings you configured for {% data variables.product.prodname_actions %}, select **Copy Storage settings from Actions**. For more information see, "[Enabling GitHub Actions with Azure Blob storage]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)" and "[Enabling GitHub Actions with Amazon S3 storage]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage)."
1. If you do not import storage settings from {% data variables.product.prodname_actions %}, select either **Azure Blob Storage** or **Amazon S3** and fill in the required details.
1. Click **Test storage settings**.
1. Click **Save settings**.