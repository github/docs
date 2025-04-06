If the command returns `Replication is not running`, the replication may still be starting. Wait about one minute before running `ghe-repl-status` again.

   {% note %}

   **Notes:**

   * While the resync is in progress `ghe-repl-status` may indicate that replication is behind. For example, you may see the following message.

     ```text
     CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
     ```

   * If {% data variables.product.prodname_actions %} is enabled on {% data variables.location.product_location %}, you may see a message like the following. This message is expected when replication is paused due to maintenance mode being set on the primary appliance. Once maintenance mode is unset, this message should be resolved.

     ```text
     CRITICAL: mssql replication is down, didn't find Token_Configuration!
     ```

   {% endnote %}

    If `ghe-repl-status` did not return `OK`, and the explanation isn't listed in the note above, contact {% data variables.contact.enterprise_support %}. For more information, see "[AUTOTITLE](/support/contacting-github-support)."
