---
title: Setting up a staging instance
intro: You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
---

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.product.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- Integration with an external ticketing system
- Integration with a continuous integration server
- External scripts or software that use {% data variables.product.prodname_enterprise_api %}
- External SMTP server for email notifications

## Setting up a staging instance

1. Perform a backup of your production instance using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see the "About {% data variables.product.prodname_enterprise_backup_utilities %}" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Set up a new instance to act as your staging environment. You can use the same guides for provisioning and installing your staging instance as you did for your production instance. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Optionally, if you plan to test {% data variables.product.prodname_actions %} functionality in your test environment, review the considerations for your logs and storage. For more information, see "[Using a staging environment](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."
4. Restore your backup onto your staging instance. For more information, see the "Restoring a backup" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

## Further reading

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
