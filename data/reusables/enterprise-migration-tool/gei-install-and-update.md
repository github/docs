1. Install the {% data variables.product.prodname_cli %}.
   * {% data reusables.cli.cli-installation %}
   * If you already have {% data variables.product.prodname_cli %} installed, run `gh --version` to ensure you're running version 2.4.0 or newer. If you have an older version, visit the [{% data variables.product.prodname_cli %} repository](https://github.com/cli/cli#installation) for upgrade instructions.
1. Install the {% data variables.product.prodname_ado2gh_cli_short %}.

   ```shell copy
   gh extension install github/gh-ado2gh
   ```

1. The {% data variables.product.prodname_ado2gh_cli %} is updated weekly. {% data reusables.enterprise-migration-tool.update-your-extension %}

    ```shell copy
    gh extension upgrade github/gh-ado2gh
    ```
