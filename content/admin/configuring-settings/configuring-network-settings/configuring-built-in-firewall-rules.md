---
title: Configuring built-in firewall rules
intro: 'You can view default firewall rules and customize rules for {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-firewall-settings
  - /enterprise/admin/installation/configuring-built-in-firewall-rules
  - /enterprise/admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-built-in-firewall-rules
  - /admin/configuration/configuring-network-settings/configuring-built-in-firewall-rules
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure firewall rules
---
## About {% data variables.location.product_location %}'s firewall

{% data variables.product.prodname_ghe_server %} uses Ubuntu's Uncomplicated Firewall (UFW) on the virtual appliance. For more information see [UFW](https://help.ubuntu.com/community/UFW) in the Ubuntu documentation. {% data variables.product.prodname_ghe_server %} automatically updates the firewall allowlist of allowed services with each release.

After you install {% data variables.product.prodname_ghe_server %}, all required network ports are automatically opened to accept connections. Every non-required port is automatically configured as `deny`, and the default outgoing policy is configured as `allow`. Stateful tracking is enabled for any new connections; these are typically network packets with the `SYN` bit set. For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/network-ports).

The UFW firewall also opens several other ports that are required for {% data variables.product.prodname_ghe_server %} to operate properly. For more information on the UFW rule set, see [the UFW README](https://github.com/jbq/ufw/blob/master/README#L213).

We do not recommend customizing UFW as it can complicate some troubleshooting issues.

## Viewing the default firewall rules

{% data reusables.enterprise_installation.ssh-into-instance %}

1. To view the default firewall rules, use the `sudo ufw status` command. You should see output similar to this:

   ```shell
   $ sudo ufw status
   > Status: active
   > To                         Action      From
   > --                         ------      ----
   > ghe-1194                   ALLOW       Anywhere
   > ghe-122                    ALLOW       Anywhere
   > ghe-161                    ALLOW       Anywhere
   > ghe-22                     ALLOW       Anywhere
   > ghe-25                     ALLOW       Anywhere
   > ghe-443                    ALLOW       Anywhere
   > ghe-80                     ALLOW       Anywhere
   > ghe-8080                   ALLOW       Anywhere
   > ghe-8443                   ALLOW       Anywhere
   > ghe-9418                   ALLOW       Anywhere
   > ghe-1194 (v6)              ALLOW       Anywhere (v6)
   > ghe-122 (v6)               ALLOW       Anywhere (v6)
   > ghe-161 (v6)               ALLOW       Anywhere (v6)
   > ghe-22 (v6)                ALLOW       Anywhere (v6)
   > ghe-25 (v6)                ALLOW       Anywhere (v6)
   > ghe-443 (v6)               ALLOW       Anywhere (v6)
   > ghe-80 (v6)                ALLOW       Anywhere (v6)
   > ghe-8080 (v6)              ALLOW       Anywhere (v6)
   > ghe-8443 (v6)              ALLOW       Anywhere (v6)
   > ghe-9418 (v6)              ALLOW       Anywhere (v6)
   ```

## Adding custom firewall rules

> [!WARNING]
> Before you add custom firewall rules, back up your current rules in case you need to reset to a known working state. If you're locked out of your server, visit {% data variables.contact.contact_ent_support %} and contact us to reconfigure the original firewall rules. Restoring the original firewall rules involves downtime for your server.

1. Configure a custom firewall rule.
1. Check the status of each new rule with the `status numbered` command.

   ```shell
   sudo ufw status numbered
   ```

1. To back up your custom firewall rules, use the `cp`command to move the rules to a new file.

   ```shell
   sudo cp -r /etc/ufw ~/ufw.backup
   ```

After you upgrade {% data variables.location.product_location %}, you must reapply your custom firewall rules. We recommend that you create a script to reapply your firewall custom rules.

## Restoring the default firewall rules

If something goes wrong after you change the firewall rules, you can reset the rules from your original backup.

> [!WARNING]
> If you didn't back up the original rules before making changes to the firewall, visit {% data variables.contact.contact_ent_support %} and contact us for further assistance.

{% data reusables.enterprise_installation.ssh-into-instance %}

1. To restore the previous backup rules, copy them back to the firewall with the `cp` command.

   ```shell
   sudo cp -f ~/ufw.backup/*rules /etc/ufw
   ```

1. Restart the firewall with the `systemctl` command.

   ```shell
   sudo systemctl restart ufw
   ```

1. Confirm that the rules are back to their defaults with the `ufw status` command.

   ```shell
   $ sudo ufw status
   > Status: active
   > To                         Action      From
   > --                         ------      ----
   > ghe-1194                   ALLOW       Anywhere
   > ghe-122                    ALLOW       Anywhere
   > ghe-161                    ALLOW       Anywhere
   > ghe-22                     ALLOW       Anywhere
   > ghe-25                     ALLOW       Anywhere
   > ghe-443                    ALLOW       Anywhere
   > ghe-80                     ALLOW       Anywhere
   > ghe-8080                   ALLOW       Anywhere
   > ghe-8443                   ALLOW       Anywhere
   > ghe-9418                   ALLOW       Anywhere
   > ghe-1194 (v6)              ALLOW       Anywhere (v6)
   > ghe-122 (v6)               ALLOW       Anywhere (v6)
   > ghe-161 (v6)               ALLOW       Anywhere (v6)
   > ghe-22 (v6)                ALLOW       Anywhere (v6)
   > ghe-25 (v6)                ALLOW       Anywhere (v6)
   > ghe-443 (v6)               ALLOW       Anywhere (v6)
   > ghe-80 (v6)                ALLOW       Anywhere (v6)
   > ghe-8080 (v6)              ALLOW       Anywhere (v6)
   > ghe-8443 (v6)              ALLOW       Anywhere (v6)
   > ghe-9418 (v6)              ALLOW       Anywhere (v6)
   ```
