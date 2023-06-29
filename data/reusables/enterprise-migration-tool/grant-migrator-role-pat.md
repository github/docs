1. On {% data variables.product.prodname_dotcom_the_website %}, create and record a {% data variables.product.pat_generic %} that meets all the requirements for granting the migrator role. For a full list of requirements, see "[AUTOTITLE](/migrations/using-github-enterprise-importer/preparing-to-migrate-with-github-enterprise-importer/managing-access-for-github-enterprise-importer#creating-a-personal-access-token-for-github-enterprise-importer)."
1. Set the {% data variables.product.pat_generic %} as an environment variable, replacing TOKEN in the commands below with the {% data variables.product.pat_generic %} you recorded above.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      ```
