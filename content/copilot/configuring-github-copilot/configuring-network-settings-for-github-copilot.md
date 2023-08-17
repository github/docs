---
title: Configuring network settings for GitHub Copilot
shortTitle: Network settings
intro: 'You can connect to {% data variables.product.prodname_copilot_short %} through an HTTP proxy and use custom certificates.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
---

{% visualstudio %}

{% data reusables.copilot.vs-for-mac-note %}

{% endvisualstudio %}

## Introduction

By default, {% data variables.product.prodname_copilot %} connects to {% data variables.product.prodname_dotcom %}'s server directly from your environment, via a secure HTTPS connection. You don't necessarily need to configure any additional network settings to use {% data variables.product.prodname_copilot_short %}.

Some networks use an HTTP proxy server to intercept Internet traffic before sending it to its intended location. Companies often use an HTTP proxy to detect suspicious traffic or restrict the content entering their networks. If you're working on a corporate network, you may need to configure {% data variables.product.prodname_copilot_short %} to connect via an HTTP proxy.

If you have a license for {% data variables.product.prodname_copilot_business_short %}, {% data variables.product.prodname_copilot_short %} can read custom SSL certificates installed on a user's machine. This allows a proxy server to be identified as the intended recipient of {% data variables.product.prodname_copilot_short %}'s secure connection so network traffic can be inspected. Without a custom certificate, a company can use an HTTP proxy to monitor, route, and terminate {% data variables.product.prodname_copilot_short %}'s connection, but cannot inspect the contents of the traffic.

## Configuring proxy settings for {% data variables.product.prodname_copilot %}

{% data variables.product.prodname_copilot %} supports basic HTTP proxy setups, with or without basic authentication. If the proxy URL starts `https://`, the proxy is not currently supported.

You can configure an HTTP proxy for {% data variables.product.prodname_copilot %} in your chosen editor. To view instructions for your editor, use the tabs at the top of this article.

If you don't configure a proxy directly in your editor, {% data variables.product.prodname_copilot %} checks if a proxy URL is set in any of the following environment variables, listed from highest to lowest priority.

- `HTTPS_PROXY`
- `https_proxy`
- `HTTP_PROXY`
- `http_proxy`

{% note %}

**Note:** You can use any of these variables to store the URL of a standard HTTP proxy. In standard usage, the `http` and `https` portions of these variables refer to the type of request being made, not the URL of the proxy itself. {% data variables.product.prodname_copilot %} does not follow this convention, and uses the URL stored in the variable with the highest priority as the proxy for both HTTP and HTTPS requests.

{% endnote %}

If you have configured a proxy but are still encountering connection errors, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-proxy-errors)."

{% jetbrains %}

### Configuring a proxy in a JetBrains IDE

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Appearance & Behavior**, click **System Settings** and then click **HTTP Proxy**.
1. Select **Manual proxy configuration**, and then select **HTTP**.
1. In the "Host name" field, enter the hostname of your proxy server, and in the "Port number" field, enter the port number of your proxy server.
1. Optionally, to configure {% data variables.product.prodname_copilot_short %} to ignore certificate errors, in the left sidebar, click **Tools**, click **Server Certificates**, then select or deselect **Accept non-trusted certificates automatically**.

   {% warning %}

   **Warning:** Ignoring certificate errors can cause security issues and is not recommended.

   {% endwarning %}

### Authentication

{% data variables.product.prodname_copilot %} for JetBrains supports basic authentication. To authenticate, you can select **Proxy authentication** on the "Manual proxy configuration" page, then enter your credentials.

This stores your credentials as plaintext in your editor's settings. Alternatively, you may prefer to include your credentials in the proxy URL (for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`), and then set this URL as one of the supported environment variables listed in "[Configuring proxy settings for {% data variables.product.prodname_copilot %}](#configuring-proxy-settings-for-github-copilot)."

{% endjetbrains %}

{% vscode %}

### Configuring a proxy in {% data variables.product.prodname_vscode %}

{% data reusables.copilot.vscode-settings %}
1. In the left-side panel of the settings tab, click **Application** and then select **Proxy**.
1. In the text box under "Proxy", type the address of your proxy server, for example `http://localhost:3128`.
1. Optionally, to configure {% data variables.product.prodname_copilot_short %} to ignore certificate errors, under "Proxy Strict SSL", select or deselect the checkbox.

   {% warning %}

   **Warning:** Ignoring certificate errors can cause security issues and is not recommended.

   {% endwarning %}

### Authentication

{% data variables.product.prodname_copilot %} for {% data variables.product.prodname_vscode_shortname %} supports basic authentication. To authenticate, you can include your credentials in the proxy URL, for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`. You can store this URL in your {% data variables.product.prodname_vscode_shortname %} settings or in one of the environment variables listed in "[Configuring proxy settings for {% data variables.product.prodname_copilot %}](#configuring-proxy-settings-for-github-copilot)."

{% endvscode %}

{% visualstudio %}

### Configuring a proxy in {% data variables.product.prodname_vs %}

{% data variables.product.prodname_copilot %} for {% data variables.product.prodname_vs %} reads the proxy settings from Windows. For information about configuring proxy settings on Windows, see the instructions under "To set up a proxy server connection manually" in [Use a proxy server in Windows](https://support.microsoft.com/en-us/windows/use-a-proxy-server-in-windows-03096c53-0554-4ffe-b6ab-8b1deee8dae1) in the Microsoft documentation.

### Authentication

{% data variables.product.prodname_copilot %} for {% data variables.product.prodname_vs %} does not retrieve authentication credentials from the Windows settings. If you need to authenticate to a proxy, you can include your credentials in the proxy URL (for example: `http://USERNAME:PASSWORD@10.203.0.1:5187/`), then set this URL as one of the supported environment variables listed in "[Configuring proxy settings for {% data variables.product.prodname_copilot %}](#configuring-proxy-settings-for-github-copilot)."

{% endvisualstudio %}

## Allowing {% data variables.product.prodname_copilot %} to use custom certificates

If your organization uses {% data variables.product.prodname_copilot_business_short %}, {% data variables.product.prodname_copilot_short %} can read custom SSL certificates installed on a user's machine.

{% data variables.product.prodname_copilot_short %} reads certificates from the operating system's trust store. It also reads extra certificates from the file specified by the standard Node.js environment variable `NODE_EXTRA_CA_CERTS`. For more information, see the [Node.js documentation](https://nodejs.org/docs/latest-v18.x/api/cli.html#node_extra_ca_certsfile).

{% data variables.product.prodname_copilot_short %} can read certificates regardless of whether a proxy is configured directly on a user's machine. This allows {% data variables.product.prodname_copilot_short %} to support setups such as transparent proxies or Zscaler.

### Installing custom certificates

Generally, if you're using company equipment, your company's IT department should have already installed any required certificates on your machine. If you need to install a certificate, see the following instructions.

{% warning %}

**Warning:** Installing a custom certificate is an instruction for your computer to trust the creator of the certificate, potentially allowing the creator to intercept all Internet traffic from your machine. You should be very careful to verify that you are installing the correct certificate.

{% endwarning %}

- For Windows, see [Installing the trusted root certificate](https://learn.microsoft.com/en-us/skype-sdk/sdn/articles/installing-the-trusted-root-certificate) in the Microsoft documentation.
- For macOS, see [Add certificates to a keychain using Keychain Access on Mac](https://support.apple.com/en-gb/guide/keychain-access/kyca2431/mac) in the Keychain Access User Guide.
- For Linux, see [Installing a root CA certificate in the trust store](https://ubuntu.com/server/docs/security-trust-store) in the Ubuntu documentation. Similar instructions should apply to most Linux distributions.

If you have installed a certificate but {% data variables.product.prodname_copilot_short %} isn't detecting it, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-network-errors-for-github-copilot#troubleshooting-certificate-related-errors)."