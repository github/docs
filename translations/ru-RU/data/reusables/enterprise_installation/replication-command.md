1. To start replication of the datastores, use the `ghe-repl-start` command.
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    **Warning:** `ghe-repl-start` causes a brief outage on the primary server, during which users may see internal server errors. To provide a friendlier message, run `ghe-maintenance -s` on the primary node before running `ghe-repl-start` on the replica node to put the appliance in maintenance mode. Once replication starts, disable maintenance mode with `ghe-maintenance -u`. Git replication will not progress while the primary node is in maintenance mode.

    {% endwarning %}
