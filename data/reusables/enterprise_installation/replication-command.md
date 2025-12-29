1. To start replication of the datastores, use the `ghe-repl-start` command.

   ```shell
   ghe-repl-start
   ```

   > [!WARNING]
   > `ghe-repl-start` causes a brief outage on the primary server, during which users may see internal server errors. To provide a friendlier message, run `ghe-maintenance -s` on the primary node before running `ghe-repl-start` on the replica node to put the appliance in maintenance mode. Once replication starts, disable maintenance mode with `ghe-maintenance -u`. Git replication will not progress while the primary node is in maintenance mode.
   > If you are running version 3.14.20, 3.15.15, 3.16.11, 3.17.8, 3.18.2, or a later version including future releases like 3.19, you no longer need to put the primary in maintenance mode prior to running `ghe-repl-start`. This command is no longer expected to cause an outage on the primary server. However, when setting up a new replica, `ghe-repl-start` won't cause an outage as long as you run `ghe-config-apply` between `ghe-repl-setup` and `ghe-repl-start`. Skipping `ghe-config-apply` and going straight from `ghe-repl-setup` to `ghe-repl-start` will still result in an outage.
