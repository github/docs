1. Install {% data variables.product.prodname_cli %} on macOS, Windows, or Linux. For more information, see [Installation](https://github.com/cli/cli#installation) in the {% data variables.product.prodname_cli %} repository.
1. To authenticate to {% data variables.product.github %}, run the following command from your terminal.

   ```shell
   gh auth login
   ```

1. Select where you want to authenticate to:

   * If you access {% data variables.product.github %} at {% data variables.product.prodname_dotcom_the_website %}, select **{% data variables.product.prodname_dotcom_the_website %}**.
   * If you access {% data variables.product.github %} at a different domain, select **Other**, then enter your hostname (for example: `octocorp.ghe.com`).
1. Follow the rest of the on-screen prompts.

   {% data variables.product.prodname_cli %} automatically stores your Git credentials for you when you choose HTTPS as your preferred protocol for Git operations and answer "yes" to the prompt asking if you would like to authenticate to Git with your {% data variables.product.prodname_dotcom %} credentials. This can be useful as it allows you to use Git commands like `git push` and `git pull` without needing to set up a separate credential manager or use SSH.
