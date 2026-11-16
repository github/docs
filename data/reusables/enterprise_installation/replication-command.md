1. To start replication of the datastores, use the `ghe-repl-start` command.

   ```shell
   ghe-repl-start
   ```

   > [!WARNING]
   > To ensure uninterrupted service when setting up a new replica, run `ghe-config-apply` between `ghe-repl-setup` and `ghe-repl-start`. This allows the primary server to remain available throughout the replication setup process.
