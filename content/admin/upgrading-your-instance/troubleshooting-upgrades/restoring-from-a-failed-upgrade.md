---
  title: Restoring from a failed upgrade
  intro: 'Learn how to roll back from a failed upgrade.'
  redirect_from:
    - /admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#restoring-from-a-failed-upgrade
  versions:
    ghes: '*'
  type: how_to
  topics:
    - Enterprise
    - Upgrades
    - Troubleshooting
  shortTitle: Restore from a failed upgrade
---

If an upgrade fails or is interrupted, you should revert your instance back to its previous state. The process for completing this depends on the type of upgrade.

If your instance is configured for high availability and your primary node upgrade fails, you can promote the (not upgraded) replica to be the primary. You will also need to update your DNS to point to the new primary node. Once you have a working primary node, you can then consider creating a new replica node. See "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/about-high-availability-configuration#network-traffic-failover-strategies)" and "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-high-availability/recovering-a-high-availability-configuration)."

## Rolling back a patch release

To roll back a patch release, use the `ghe-upgrade` command with the `--allow-patch-rollback` switch. Before rolling back, replication must be temporarily stopped by running `ghe-repl-stop` on all replica nodes{% ifversion ghes > 3.13 %}, or `ghe-repl-stop-all` on the primary node{% endif %}. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

After the rollback is complete, restart replication by running `ghe-repl-start` on all nodes{% ifversion ghes > 3.13 %}, or `ghe-repl-start-all` on the primary node{% endif %}. See "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-upgrade)."

## Rolling back a feature release

To roll back from a feature release, restore from a virtual machine snapshot to ensure that root and data partitions are in a consistent state. See "[AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/taking-a-snapshot)."
