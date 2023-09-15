1. Set environment variables for the {% data variables.product.pat_generic %}s, replacing TOKEN in the commands below with the {% data variables.product.pat_generic %}s you recorded above. Use `GH_PAT` for the destination organization and `GH_SOURCE_PAT` for the source organization.

   - If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
     export GH_SOURCE_PAT="TOKEN"
      ```

   - If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
     $env:GH_SOURCE_PAT="TOKEN"
      ```
