1. If you're migrating to {% data variables.enterprise.data_residency %}, for convenience, set an environment variable for the **base API URL** for your enterprise. For example:

   ```shell copy
   export TARGET_API_URL="https://api.{% data variables.enterprise.data_residency_example_domain %}"
   ```

   You'll use this variable with the `--target-api-url` option in commands you run with the {% data variables.product.prodname_cli %}.
