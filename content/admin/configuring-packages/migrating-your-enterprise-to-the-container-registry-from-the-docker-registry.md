---
title: Migrating your enterprise to the Container registry from the Docker registry
intro: 'You can migrate Docker images previously stored in the Docker registry on {% data variables.location.product_location %} to the {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
redirect_from:
  - /admin/packages/migrating-your-enterprise-to-the-container-registry-from-the-docker-registry
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## About the {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} For more information, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

For more information about configuring {% data variables.product.prodname_registry %} for {% data variables.location.product_location %}, see "[AUTOTITLE](/admin/packages/getting-started-with-github-packages-for-your-enterprise)."

## About migration from the Docker registry

{% data reusables.package_registry.container-registry-replaces-docker-registry %} If the Docker registry on {% data variables.location.product_location %} contains images, you must manually migrate the images to the {% data variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Note**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} For more information about the impact of migration to the {% data variables.product.prodname_container_registry %}, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)."

## Migrating organizations to the {% data variables.product.prodname_container_registry %}

You can start a migration of all your organizations' Docker images to the {% data variables.product.prodname_container_registry %}. The duration of the migration operation depends on the total number of images to migrate, and the overall load on your instance. After a successful migration, {% data variables.product.product_name %} will display a summary, and all future uploads of Docker images will use the {% data variables.product.prodname_container_registry %}.

If a site administrator has configured email notifications for {% data variables.location.product_location %}, you will receive an email after the migration is complete. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)."

{% note %}

**Notes**:

* During the migration, the CPU and memory usage for your instance will increase. To ensure the performance of the instance for your users, {% data variables.product.company_short %} recommends that you begin a migration during a period of reduced activity.
* During the migration, do not modify settings for your enterprise or run `ghe-config-apply` from an administrative SSH session. These actions will trigger a configuration run, which can restart services and may interrupt the migration.
* After the migration, storage pressure on your instance will increase due to the duplication of image files in the Docker registry and the {% data variables.product.prodname_container_registry %}. A future release of {% data variables.product.product_name %} will remove the duplicated files when all migrations are complete.

For more information about monitoring the performance and storage of {% data variables.location.product_location %}, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Packages**.
1. To the right of the number of packages to migrate, click **Start migration**. During the migration, {% data variables.product.product_name %} will display progress on this page.

After the migration completes, the page will display the results. If a migration fails, the page will show the organizations that own the package that caused the failure.

## Re-running a failed organization migration

Prior to migration, if a user has created a package in the {% data variables.product.prodname_container_registry %} that has an identical name to an existing package in the Docker registry, the migration will fail.

1. Delete the affected container in the {% data variables.product.prodname_container_registry %}. For more information, see "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)."
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.packages-tab %}
1. To the right of the number of packages to migrate, click **Re-run migration**. During the migration, {% data variables.product.product_name %} will display progress on this page.
1. If the migration fails again, start from step 1 and re-run the migration.
