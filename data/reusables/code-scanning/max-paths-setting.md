* {% data variables.product.prodname_codeql %} advanced setup for {% data variables.product.prodname_code_scanning %}: update the `analyze` step to limit the number of paths to a maximum of one or zero.

  ```yaml
  - name: Perform CodeQL Analysis
    uses: {% data reusables.actions.action-codeql-action-analyze %}
    env: 
      CODEQL_ACTION_EXTRA_OPTIONS: '{"database":{"interpret-results":["--max-paths", 1]}}'
  ```

* {% data variables.product.prodname_codeql_cli %} `database analyze`: update the database analysis command to include the `--max-paths=1` flag. For more information, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-analyze#--max-pathsmaxpaths)."

{% note %}

**Note:** The `max-paths` setting affects the results of all dataflow queries.

{% endnote %}
