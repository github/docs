---
title: Managing the Replication Controller
shortTitle: Manage Replication Controller
intro: 'Check whether the Replication Controller is enabled on {% data variables.location.product_location %}, and disable it only when {% data variables.contact.github_support %} recommends it during troubleshooting.'
versions:
  feature: ghes-replication-controller
contentType: how-tos
category:
  - Scale your instance
---

## About the Replication Controller

The Replication Controller is a service that manages replication configuration on {% data variables.location.product_location %}. The `app.replication-controller.enabled` setting controls the service, which is enabled by default.

{% ifversion ghes-replication-controller-expanded-services %}
The Replication Controller manages replication for Git repositories, storage (such as {% data variables.large_files.product_name_short %} objects and file attachments), {% data variables.product.prodname_pages %}, pre-receive hooks, MySQL, Redis, and Elasticsearch. The services it manages on your instance depend on your topology and enabled features.
{% else %}
The Replication Controller manages replication for Git repositories, storage (such as {% data variables.large_files.product_name_short %} objects and file attachments), and {% data variables.product.prodname_pages %}.
{% endif %}

## Checking whether the Replication Controller is enabled

On the primary node, run the following command.

```shell
ghe-config app.replication-controller.enabled
```

If the command returns `true` or no value, the Replication Controller is enabled. If the command returns `false`, the Replication Controller is disabled.

## Disabling the Replication Controller

> [!WARNING]
> Only disable the Replication Controller if {% data variables.contact.github_support %} recommends it during troubleshooting. Applying this change stops the Replication Controller and can interrupt an operation that's in progress. If you're unsure whether it's safe to proceed, contact {% data variables.contact.contact_ent_support %}.

{% ifversion ghes-replication-controller-expanded-services %}
1. On each node that hosts a MySQL replica, such as a high availability replica, confirm that the Replication Controller isn't cloning or reseeding MySQL.

   ```shell
   ghe-rc-ctl status mysql
   ```

   Continue only when the output on every node shows `"running": false`. If the output shows `"running": true`, wait and run the command again.
{% endif %}
1. On the primary node, set `app.replication-controller.enabled` to `false`.

   ```shell
   ghe-config app.replication-controller.enabled false
   ```

1. Apply the configuration.

   ```shell
   ghe-config-apply
   ```

## Re-enabling the Replication Controller

1. On the primary node, set `app.replication-controller.enabled` to `true`.

   ```shell
   ghe-config app.replication-controller.enabled true
   ```

1. Apply the configuration.

   ```shell
   ghe-config-apply
   ```
