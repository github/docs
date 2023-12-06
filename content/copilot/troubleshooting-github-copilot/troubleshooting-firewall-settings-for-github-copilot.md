---
title: Troubleshooting firewall settings for GitHub Copilot
intro: Troubleshooting help for firewall-related errors.
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Troubleshooting
  - Networking
versions:
  feature: copilot
shortTitle: Firewall settings
---

If you or your organization employs security measures like a firewall or proxy server, it may be beneficial to include certain domain URLs in an "allowlist" and open specific ports and protocols. Doing so will enhance your installation and usage of GitHub Copilot for an optimal experience.

## URLs to add to an allowlist

Due to GitHub Copilot's interaction with a remote machine learning model and its update checking functionality, it is recommended to include the following domain URLs in the allowlist, marking them as trusted either in the user interface or within your deployment scripts.

| Domain and/or URL                      | Purpose |
| :------------------------------------- | :--------------------------------- |
| `https://github.com/login/*`             | Authentication |
| `https://api.github.com/user`             | User Management |
| `https://api.github.com/copilot_internal/*` | User Management |
| `https://copilot-telemetry.githubusercontent.com/telemetry` | Telemetry |
| `https://default.exp-tas.com/` | Telemetry |
| `https://copilot-proxy.githubusercontent.com/` | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://origin-tracker.githubusercontent.com` | API service for {% data variables.product.prodname_copilot_short %} suggestions |
| `https://*.githubcopilot.com` | API service for {% data variables.product.prodname_copilot_short %} suggestions |

Additional domains and URLs may require allowlisting, depending on your organization's security policies and the editors in use. For more information about specific editors, see "[Further reading](#further-reading)."

## Deprecation of {% data variables.product.prodname_copilot_chat_short %} API endpoints

On February 1, 2024, we will deprecate the {% data variables.product.prodname_copilot_chat_short %} API endpoints currently being routed through `https://copilot-proxy.githubusercontent.com`. Instead, these requests will go through `https://api.githubcopilot.com`. Versions 0.8.0 and later of the {% data variables.product.prodname_copilot_chat_short %} extension for {% data variables.product.prodname_vscode_shortname %} and versions 0.1.1817.27579 and later of the {% data variables.product.prodname_copilot_chat_short %} extension for {% data variables.product.prodname_vs %} already route chat traffic through `https://api.githubcopilot.com`. All versions of the {% data variables.product.prodname_copilot_short %} plugin for JetBrains IDEs already route chat traffic through `https://api.githubcopilot.com`.

To ensure {% data variables.product.prodname_copilot_chat_short %} continues working from February 1, 2024, please update to the most recent version of the {% data variables.product.prodname_copilot_short %} extension and ensure your firewall and network settings allow communication to `https://api.githubcopilot.com`.

## Further reading

- [Network Connections in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/setup/network)
- [Install and use Visual Studio and Azure Services behind a firewall or proxy server](https://learn.microsoft.com/en-us/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server)
- "[AUTOTITLE](/get-started/using-github/troubleshooting-connectivity-problems)"
