1. If you're migrating to {% data variables.enterprise.data_residency %}, for convenience, set an environment variable for the **base API URL** for your enterprise.

   * If you're using Terminal, use the `export` command.

     ```shell copy
     export TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   * If you're using PowerShell, use the `$env` command.

     ```shell copy
     $env:TARGET_API_URL="https://api.SUBDOMAIN.ghe.com"
     ```

   > [!IMPORTANT]
   > Ensure to replace `SUBDOMAIN` with your enterprise's subdomain.
   >
   > For example, if your enterprise's subdomain is `acme`, the `TARGET_API_URL` value would be `https://api.acme.ghe.com`.

   You'll use this variable with the `--target-api-url` option in commands you run with the {% data variables.product.prodname_cli %}.
