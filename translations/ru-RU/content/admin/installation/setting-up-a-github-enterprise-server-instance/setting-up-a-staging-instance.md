---
title: Setting up a staging instance
intro: 'You can use a *staging instance* to test modifications before they are applied to {% data variables.product.product_location %}. For example, you could use a staging instance to test new {% data variables.product.prodname_ghe_server %} updates or to practice importing migration data.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
---

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used for production.

{% endtip %}

To thoroughly test a {% data variables.product.prodname_ghe_server %} appliance you will need to consider external systems that interact with it. Some factors to consider testing are:

  - Authentication, especially if are using an external authentication provider
  - Integration with an external ticketing system
  - Integration with a continuous integration server
  - External scripts or software that use {% data variables.product.prodname_enterprise_api %}
  - External SMTP server for email notifications

1. Perform a backup of your production instance using {% data variables.product.prodname_enterprise_backup_utilities %}. For more information, see the "About {% data variables.product.prodname_enterprise_backup_utilities %}" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Set up a new instance to act as your staging environment. You can use the same guides for provisioning and installing your staging instance as you did for your production instance. For more information, see "[Setting up a {% data variables.product.prodname_ghe_server %} instance](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Restore your backup onto your staging instance. For more information, see the "Restoring a backup" section of "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Дополнительная литература

- "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
