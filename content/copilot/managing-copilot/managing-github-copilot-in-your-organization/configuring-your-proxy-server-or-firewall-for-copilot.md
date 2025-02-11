---
title: Configuring your proxy server or firewall for Copilot
intro: 'You should allow certain traffic through your firewall or proxy server for {% data variables.product.prodname_copilot_short %} to work as intended.'
permissions: 'Proxy server maintainers or firewall maintainers'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Allow Copilot traffic
---

If your company employs security measures like a firewall or proxy server, you should add the following URLs, ports, and protocols to an allowlist to ensure {% data variables.product.prodname_copilot_short %} works as expected:

| Domain and/or URL                      | Purpose |
| :------------------------------------- | :--------------------------------- |
| `https://github.com/login/*`             | Authentication |
| `https://github.com/enterprises/YOUR-ENTERPRISE/*` | Authentication for {% data variables.enterprise.prodname_managed_users %}, only required with {% data variables.product.prodname_emus %} |
| `https://api.github.com/user`             | User Management |
| `https://api.github.com/copilot_internal/*` | User Management |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Telemetry |
| `https://default.exp-tas.com` | Telemetry |
| `https://copilot-proxy.githubusercontent.com` | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://origin-tracker.githubusercontent.com` | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.githubcopilot.com`[^1] | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.individual.githubcopilot.com`[^2] | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.business.githubcopilot.com`[^3] | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.enterprise.githubcopilot.com`[^4] | API service for {% data variables.product.prodname_copilot_short %} suggestions |

Depending on the security policies and editors your organization uses, you may need to allowlist additional domains and URLs. For more information on specific editors, see [Further reading](#further-reading).

Every user of the proxy server or firewall also needs to configure their own environment to connect to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/configuring-github-copilot/configuring-network-settings-for-github-copilot).

## Further reading

* [Network Connections in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/setup/network) in the {% data variables.product.prodname_vs %} documentation
* [Install and use {% data variables.product.prodname_vs %} and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server) in the Microsoft documentation

[^1]: Allows access to authorized users regardless of {% data variables.product.prodname_copilot_short %} subscription. Do not add this URL to your allowlist if you are using subscription-based network routing. For more information on subscription-based network routing, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/managing-github-copilot-access-to-your-enterprises-network).
[^2]: Allows access to authorized users via a {% data variables.product.prodname_copilot_individuals_short %} subscription. Do not add this URL to your allowlist if you are using subscription-based network routing.
[^3]: Allows access to authorized users via a {% data variables.product.prodname_copilot_business_short %} subscription. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using {% data variables.product.prodname_copilot_business_short %} on your network.
[^4]: Allows access to authorized users via a {% data variables.product.prodname_copilot_enterprise_short %} subscription. Do not add this URL to your allowlist if you want to use subscription-based network routing to block users from using {% data variables.product.prodname_copilot_enterprise_short %} on your network.
