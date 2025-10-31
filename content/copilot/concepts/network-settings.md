---
title: Network settings for GitHub Copilot
shortTitle: Network settings
intro: 'You can connect to {% data variables.product.prodname_copilot %} through an HTTP proxy and use custom certificates.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/network-settings-for-github-copilot
contentType: concepts
category: 
  - Manage Copilot for a team
---

The network settings for {% data variables.product.prodname_copilot %} allow you to connect to {% data variables.product.prodname_dotcom %} through an HTTP proxy and use custom certificates.

## Proxy settings for {% data variables.product.prodname_copilot_short %}

By default, {% data variables.product.prodname_copilot_short %} connects to {% data variables.product.prodname_dotcom %}'s server directly from your environment via a secure HTTPS connection. You don't necessarily need to configure any additional network settings to use {% data variables.product.prodname_copilot_short %}.

Some networks use an HTTP proxy server to intercept Internet traffic before sending it to its intended location. Companies often use an HTTP proxy to detect suspicious traffic or restrict the content entering their networks. If you're working on a corporate network, you may need to configure {% data variables.product.prodname_copilot_short %} to connect via an HTTP proxy.

> [!NOTE] The administrator of your proxy server or firewall also needs to configure network settings for {% data variables.product.prodname_copilot_short %} to work as expected. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-your-proxy-server-or-firewall-for-copilot).

{% data variables.product.prodname_copilot_short %} supports basic HTTP proxy setups. If you need to authenticate to a proxy, {% data variables.product.prodname_copilot_short %} supports basic authentication or authentication with Kerberos. If the proxy URL starts `https://`, the proxy is not currently supported.

If you don't configure a proxy directly in your editor, {% data variables.product.prodname_copilot_short %} checks if a proxy URL is set in any of the following environment variables, listed from highest to lowest priority.

* `HTTPS_PROXY`
* `https_proxy`
* `HTTP_PROXY`
* `http_proxy`

> [!NOTE] You can use any of these variables to store the URL of a standard HTTP proxy. In standard usage, the `http` and `https` portions of these variables refer to the type of request being made, not the URL of the proxy itself. {% data variables.product.prodname_copilot_short %} does not follow this convention and uses the URL stored in the variable with the highest priority as the proxy for both HTTP and HTTPS requests.

### Authentication with Kerberos

Kerberos is an authentication protocol that allows users and services to prove their identity to each other. When a user successfully authenticates, an authentication service grants the user a ticket that gives them access to a service for a period of time. Network administrators may prefer Kerberos to basic authentication because it is more secure and doesn't require sending unencrypted credentials.

{% data variables.product.prodname_copilot %} supports authentication to a proxy with Kerberos. To use Kerberos, you must have the appropriate krb5 library for your operating system installed on your machine and an active ticket for the proxy service (either created manually with the `kinit` command or by another application). You can use the `klist` command to check if you have a ticket for the proxy service.

Kerberos uses a service principal name (SPN) to uniquely identify a service instance. By default, the SPN is derived from the proxy URL. For example, if the proxy URL is `http://proxy.example.com:3128`, the SPN is `HTTP/proxy.example.com`.

If the default SPN isn't correct for your proxy, you can override the SPN in {% data variables.product.prodname_vscode_shortname %} and in JetBrains IDEs. You cannot currently override the default SPN in {% data variables.product.prodname_vs %}. However, you can use the environment variable `AGENT_KERBEROS_SERVICE_PRINCIPAL` to override the SPN for {% data variables.product.prodname_vscode_shortname %} and JetBrains IDEs.

## Custom certificates

{% data variables.product.prodname_copilot_short %} can read custom SSL certificates installed on a user's machine. This allows a proxy server to be identified as the intended recipient of {% data variables.product.prodname_copilot_short %}'s secure connection, so network traffic can be inspected. Without a custom certificate, an HTTP proxy can be used to monitor, route, and terminate {% data variables.product.prodname_copilot_short %}'s connection, but not to inspect the contents of the traffic.

{% data variables.product.prodname_copilot_short %} reads certificates from the operating system's trust store. It also reads extra certificates from the file specified by the standard Node.js environment variable `NODE_EXTRA_CA_CERTS`. For more information, see the [Node.js documentation](https://nodejs.org/docs/latest-v18.x/api/cli.html#node_extra_ca_certsfile).

{% data variables.product.prodname_copilot_short %} can read certificates regardless of whether a proxy is configured directly on a user's machine. This allows {% data variables.product.prodname_copilot_short %} to support setups such as transparent proxies or Zscaler.

## Next steps

To learn how to configure network settings in your editor, see [AUTOTITLE](/copilot/how-tos/personal-settings/configuring-network-settings-for-github-copilot).
