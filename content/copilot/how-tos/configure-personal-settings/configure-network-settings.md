---
title: Configuring network settings for GitHub Copilot
shortTitle: Configure network settings
intro: 'You can connect to {% data variables.product.prodname_copilot %} through an HTTP proxy and use custom certificates.'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot
  - /copilot/managing-copilot/configure-personal-settings/configuring-network-settings-for-github-copilot
  - /copilot/how-tos/personal-settings/configuring-network-settings-for-github-copilot
  - /copilot/how-tos/personal-settings/configure-network-settings
contentType: how-tos
category: 
  - Configure Copilot
---

{% visualstudio %}

{% data reusables.copilot.vs-for-mac-note %}

{% endvisualstudio %}

You can connect to {% data variables.product.prodname_copilot_short %} through an HTTP proxy and use custom certificates. This is useful if you're working on a corporate network that requires a proxy server or if you need to inspect the contents of {% data variables.product.prodname_copilot_short %}'s secure connection. See [AUTOTITLE](/copilot/concepts/network-settings-for-github-copilot).

## Configuring proxy settings for {% data variables.product.prodname_copilot_short %}

You can configure an HTTP proxy for {% data variables.product.prodname_copilot_short %} in your chosen editor. To view instructions for your editor, use the tabs at the top of this article.

{% jetbrains %}

1. In your JetBrains IDE, click the **File** menu (Windows) or the name of the application in the menu bar (macOS), then click **Settings**.
1. Under **Appearance & Behavior**, click **System Settings** and then click **HTTP Proxy**.
1. Select **Manual proxy configuration**, and then select **HTTP**.
1. In the "Host name" field, enter the hostname of your proxy server, and in the "Port number" field, enter the port number of your proxy server.
1. Optionally, to configure {% data variables.product.prodname_copilot_short %} to ignore certificate errors, in the left sidebar, click **Tools**, click **Server Certificates**, then select or deselect **Accept non-trusted certificates automatically**.

   > [!WARNING] Ignoring certificate errors can cause security issues and is not recommended.

If you have configured a proxy but are still encountering connection errors, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-proxy-errors).

### Basic authentication

{% data variables.product.prodname_copilot_short %} for JetBrains supports basic authentication. To authenticate, you can select **Proxy authentication** on the "Manual proxy configuration" page, then enter your credentials.

This stores your credentials as plaintext in your editor's settings. Alternatively, you may prefer to include your credentials in the proxy URL (for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`), and then set this URL as one of the supported environment variables listed in [Proxy settings for {% data variables.product.prodname_copilot_short %}](/copilot/concepts/network-settings-for-github-copilot#proxy-settings-for-copilot).

{% endjetbrains %}

{% vscode %}

{% data reusables.copilot.vscode-settings %}
1. In the left-side panel of the settings tab, click **Application** and then select **Proxy**.
1. In the text box under "Proxy," type the address of your proxy server, for example `http://localhost:3128`.
1. Optionally, to configure {% data variables.product.prodname_copilot_short %} to ignore certificate errors, under "Proxy Strict SSL," select or deselect the checkbox.

   > [!WARNING] Ignoring certificate errors can cause security issues and is not recommended.

If you have configured a proxy but are still encountering connection errors, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-proxy-errors).

### Basic authentication

{% data variables.product.prodname_copilot_short %} for {% data variables.product.prodname_vscode_shortname %} supports basic authentication. To authenticate, you can include your credentials in the proxy URL, for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`. You can store this URL in your {% data variables.product.prodname_vscode_shortname %} settings or in one of the environment variables listed in [Proxy settings for {% data variables.product.prodname_copilot_short %}](/copilot/concepts/network-settings-for-github-copilot#proxy-settings-for-copilot).

{% endvscode %}

{% visualstudio %}

{% data variables.product.prodname_copilot_short %} for {% data variables.product.prodname_vs %} reads the proxy settings from Windows. For information about configuring proxy settings on Windows, see the instructions under "To set up a proxy server connection manually" in [Use a proxy server in Windows](https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1) in the Microsoft documentation.

If you have configured a proxy but are still encountering connection errors, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-proxy-errors).

### Basic authentication

While {% data variables.product.prodname_copilot_short %} for {% data variables.product.prodname_vs %} reads the proxy settings from Windows, it does not retrieve authentication credentials from those Windows settings.

If you need to authenticate to a proxy, you can try one of the below:
1. Enable passing default proxy credentials by setting the environment variable `COPILOT_USE_DEFAULTPROXY` to `true`.
   * **Windows example**: Open the Command Prompt and run the following command:

     ```bash
     setx COPILOT_USE_DEFAULTPROXY true
     ```

     This sets the variable permanently for your user account. Restart any applications that need to use this variable.
1. You can include your credentials in the proxy URL (for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`), then set this URL as one of the supported environment variables listed in [Proxy settings for {% data variables.product.prodname_copilot_short %}](/copilot/concepts/network-settings-for-github-copilot#proxy-settings-for-copilot).

{% endvisualstudio %}

{% vscode %}

### Overriding the default SPN in {% data variables.product.prodname_vscode_shortname %}

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type `settings`, then click **Preferences: Open User Settings (JSON)**.
1. In the JSON object, add the following top-level property, replacing `YOUR-SPN` with the correct SPN for your proxy service.

   ```json copy
   "http.proxyKerberosServicePrincipal": "YOUR-SPN",
   ```

{% endvscode %}

{% jetbrains %}

### Overriding the default SPN in JetBrains IDEs

1. In your JetBrains IDE, click the **File** menu (Windows) or the name of the application in the menu bar (macOS), then click **Settings**.
1. In the left sidebar, click **Languages & Frameworks**, then click **{% data variables.product.prodname_copilot %}**.
1. In the "Advanced" section, in the "Override Kerberos Proxy Service Principal Name" field, type the SPN for your proxy service.

{% endjetbrains %}

## Installing custom certificates

Generally, if you're using company equipment, your company's IT department should have already installed any required certificates on your machine. If you need to install a certificate, see the following instructions.

> [!WARNING] Installing a custom certificate is an instruction for your computer to trust the creator of the certificate, potentially allowing the creator to intercept all Internet traffic from your machine. You should be very careful to verify that you are installing the correct certificate.

* For Windows, see [Installing the trusted root certificate](https://learn.microsoft.com/en-us/skype-sdk/sdn/articles/installing-the-trusted-root-certificate) in the Microsoft documentation.
* For macOS, see [Add certificates to a keychain using Keychain Access on Mac](https://support.apple.com/en-gb/guide/keychain-access/kyca2431/mac) in the Keychain Access User Guide.
* For Linux, see [Installing a root CA certificate in the trust store](https://ubuntu.com/server/docs/security-trust-store) in the Ubuntu documentation. Similar instructions should apply to most Linux distributions.

If you have installed a certificate but {% data variables.product.prodname_copilot_short %} isn't detecting it, see [AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-certificate-related-errors).
