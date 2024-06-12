---
title: Troubleshooting network errors for GitHub Copilot
intro: Resolve common errors related to proxies and custom certificates.
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Logging
  - Troubleshooting
redirect_from:
  - /copilot/troubleshooting-github-copilot/troubleshooting-certificate-errors-for-github-copilot
versions:
  feature: copilot
shortTitle: Network errors
---

If you're working on company equipment and connecting to a corporate network, you may be connecting to the Internet via a VPN or an HTTP proxy server. In some cases, these types of network setups may prevent {% data variables.product.prodname_copilot %} from connecting to {% data variables.product.prodname_dotcom %}'s server. For more information about the options for setting up proxies with {% data variables.product.prodname_copilot %}, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot)."

This article provides guidance for common issues related to HTTP proxies and custom certificates. If you use a firewall, this may also interfere with {% data variables.product.prodname_copilot %}'s connection. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot)."

## Diagnosing network issues

If you're troubleshooting network issues, it may help to make `curl` requests to test your connection. If you add the `--verbose` flag, these requests give you more information to diagnose the issue, or to share with your company's IT department or {% data variables.contact.github_support %}. You can contact {% data variables.contact.github_support %} through the {% data variables.contact.contact_support_portal %}.

To check if you can access at least some of {% data variables.product.prodname_dotcom %}'s endpoints from your environment, you can run the following command from the command line.

```shell copy
curl --verbose https://copilot-proxy.githubusercontent.com/_ping
```

If you're able to connect, you should receive an HTTP 200 response.

If you know you are connecting via an HTTP proxy, you can check if the request succeeds when made via the proxy. In the following example, replace `YOUR-PROXY-URL:PORT` with the details for your proxy.

```shell copy
curl --verbose -x http://YOUR-PROXY-URL:PORT -i -L https://copilot-proxy.githubusercontent.com/_ping
```

If you receive an error related to "revocation for the certificate," you can try the request again with the `--insecure` flag. If the request only succeeds when the `--insecure` flag is added, this may indicate that {% data variables.product.prodname_copilot %} will only connect successfully if you ignore certificate errors. For more information, see "[Troubleshooting certificate-related errors](#troubleshooting-certificate-related-errors)."

If you're specifically having difficulty with {% data variables.product.prodname_copilot_chat_short %} in your editor, run the above `curl` commands but use `https://api.githubcopilot.com/_ping` instead of `https://copilot-proxy.githubusercontent.com/_ping`.

If you're unable to connect and the `curl` requests don't help to identify the error, it may help to collect detailed diagnostic logs in your editor. If you're working with your company's IT department or {% data variables.contact.contact_support_page %}, sharing these diagnostics may help to resolve the error. Enabling debug logging in your editor will help you to share more specific information. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot/viewing-logs-for-github-copilot-in-your-environment)."

## Troubleshooting proxy errors

If there is a problem with your proxy setup, you may see the following error: `{% data variables.product.prodname_copilot %} could not connect to server. Extension activation failed: "read ETIMEDOUT" or "read ECONNRESET"`. This error can be caused by a range of network issues.

If you know you are connecting via a proxy, make sure the proxy is configured correctly in your environment. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#configuring-proxy-settings-for-github-copilot)."

{% data variables.product.prodname_copilot %} uses custom code to connect to proxies. This means a proxy setup supported by your editor is not necessarily supported by {% data variables.product.prodname_copilot %}. Some common causes for errors related to proxies are:

- If your proxy's URL starts `https://`, it is not currently supported by {% data variables.product.prodname_copilot %}.
- You may need to authenticate to the proxy. {% data variables.product.prodname_copilot %} supports basic authentication or authentication with Kerberos. If you are using Kerberos, ensure you have a valid ticket for the proxy service and that you are using the correct service principal name for the service. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#authentication-with-kerberos)."
- {% data variables.product.prodname_copilot %} may reject custom certificates. For more information, see "[Troubleshooting certificate-related errors](#troubleshooting-certificate-related-errors)."

## Troubleshooting certificate-related errors

Depending on your proxy setup, you may encounter errors like "certificate signature failure," "custom certificate," or "unable to verify the first certificate." These errors are usually caused by a corporate proxy setup that uses custom certificates to intercept and inspect secure connections.

Some possible ways to resolve certificate-related errors are:
- Configure a different proxy that does not intercept secure connections.
- If you are using a corporate proxy, contact your IT department to see if they can configure the proxy to not intercept secure connections.
- Ensure the custom certificates are properly installed in your operating system's trust store. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#allowing-github-copilot-to-use-custom-certificates)." If the certificates are installed on your machine but {% data variables.product.prodname_copilot %} isn't detecting them, it may help you to know the mechanisms that {% data variables.product.prodname_copilot %} uses to find certificates.
  - On Windows, {% data variables.product.prodname_copilot_short %} uses the [win-ca package](https://www.npmjs.com/package/win-ca).
  - On macOS, {% data variables.product.prodname_copilot_short %} uses the [mac-ca package](https://www.npmjs.com/package/mac-ca).
  - On Linux, {% data variables.product.prodname_copilot_short %} checks the standard OpenSSL files `/etc/ssl/certs/ca-certificates.crt` and `/etc/ssl/certs/ca-bundle.crt`.
- Configure {% data variables.product.prodname_copilot %} to ignore certificate errors. In your proxy settings, you can deselect **Proxy Strict SSL** in {% data variables.product.prodname_vscode %}, or select **Accept non-trusted certificates automatically** in a JetBrains IDE. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot#configuring-proxy-settings-for-github-copilot)."

  {% warning %}

  **Warning:** Ignoring certificate errors can cause security issues and is not recommended.

  {% endwarning %}

### Troubleshooting security software-related certificate errors

If you or your organization use security software that monitors secure web traffic and you receive an "unable to verify the first certificate" error, you may need to configure an exception for your IDE and/or the copilot extension.

For more information about how to configure an exception, refer to your security software vendor.
