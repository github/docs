1. {% data reusables.codespaces.recovery-mode %}

   ![Screenshot of a message saying that the codespace is running in recovery mode. Below the message are buttons labeled "Cancel" and "View creation log."](/assets/images/help/codespaces/recovery-mode-error-message.png)

   * To diagnose the error by reviewing the creation logs, click **View creation log**.
   * To fix the errors identified in the logs, update your `devcontainer.json` file.
   * To apply the changes, rebuild your container.

### Using {% data variables.product.prodname_cli %} to rebuild a dev container

If you've changed a dev container configuration outside of {% data variables.product.prodname_vscode_shortname %} (for example, on {% data variables.product.prodname_dotcom_the_website %} or in a JetBrains IDE), you can use {% data variables.product.prodname_cli %} to rebuild the dev container for an existing codespace.

1. In a terminal, enter the following command.

   ```shell
   gh codespace rebuild
   ```

   Your codespaces are listed.

1. Use the arrow keys on your keyboard to highlight the required codespace, then press <kbd>Enter</kbd>.
