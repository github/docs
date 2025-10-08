When you run a migration with local storage, archive data is written to the disk on {% data variables.location.product_location_enterprise %}, without the need for a cloud storage provider.

* If you do not have firewall rules blocking egress traffic from {% data variables.product.prodname_ghe_server %}, {% data variables.product.prodname_importer_proper_name %} can automatically retrieve the stored archive from {% data variables.product.prodname_ghe_server %}.
* If you do have firewall rules in place and don't want to allow access to {% data variables.product.prodname_importer_proper_name %}, you can upload your archive data to {% data variables.product.prodname_ghos %} for {% data variables.product.prodname_importer_proper_name %} to access. To do so manually, see [Uploading your migration archives to GitHub-owned blob storage](/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud?tool=api#uploading-your-migration-archives-to-github-owned-blob-storage) in the API version of this article.

1. From an administrative account on {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Sign in to the {% data variables.enterprise.management_console %}.
1. In the left sidebar, click **Migrations**.
1. Click **Enable {% data variables.product.company_short %} Migrations**.
1. Under "Migrations Storage", click **Local Storage**.
1. Click **Save settings**.

When you perform the migration, monitor your disk space on {% data variables.product.prodname_ghe_server %}. Migration archives are automatically deleted after 7 days. To free up space, you can delete an archive using the [AUTOTITLE](/rest/migrations/orgs#delete-an-organization-migration-archive).
