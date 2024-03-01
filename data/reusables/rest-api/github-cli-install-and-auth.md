1. Install {% data variables.product.prodname_cli %} on macOS, Windows, or Linux. For more information, see [Installation](https://github.com/cli/cli#installation) in the {% data variables.product.prodname_cli %} repository.
1. Authenticate with {% data variables.product.company_short %} by running this command from your terminal.{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}. For example, `octo-inc.ghe.com`.{% endif %}

   {%- ifversion fpt or ghec %}

   ```shell
   gh auth login
   ```

   {%- else %}

   ```shell
   gh auth login --hostname HOSTNAME
   ```

   {%- endif %}

1. Follow the on-screen prompts.

   {% data variables.product.prodname_cli %} automatically stores your Git credentials for you when you choose HTTPS as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your {% data variables.product.prodname_dotcom %} credentials. This can be useful as it allows you to use Git commands like `git push` and `git pull` without needing to set up a separate credential manager or use SSH.
