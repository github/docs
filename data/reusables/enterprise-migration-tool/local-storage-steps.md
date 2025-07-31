When you run a migration with local storage, archive data is written to the disk on {% data variables.location.product_location_enterprise %}, without the need for a cloud storage provider. {% data variables.product.prodname_importer_proper_name %} will automatically retrieve the stored archive from {% data variables.product.prodname_ghe_server %}, unless you have blocked egress traffic from {% data variables.product.prodname_ghe_server %}.

1. From an administrative account on {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click {% octicon "rocket" aria-label="Site admin" %}.
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Sign in to the {% data variables.enterprise.management_console %}.
1. In the left sidebar, click **Migrations**.
1. Click **Enable {% data variables.product.company_short %} Migrations**.
1. Under "Migrations Storage", click **Local Storage**.
1. Click **Save settings**.

When you perform the migration, monitor your disk space on {% data variables.product.prodname_ghe_server %}. Migration archives are automatically deleted after 7 days. To free up space, you can delete an archive using the [AUTOTITLE](/rest/migrations/orgs#delete-an-organization-migration-archive).
