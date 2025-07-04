---
title: Customizing or disabling the firewall for Copilot coding agent
shortTitle: Customize the agent firewall
intro: 'Learn how to control the domains and URLs that {% data variables.copilot.copilot_coding_agent %} can access.'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For an introduction to {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Overview

By default, {% data variables.product.prodname_copilot_short %}'s access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from {% data variables.product.prodname_copilot_short %}, or malicious instructions given to it, could lead to code or other sensitive information being leaked to remote locations.

The default firewall rules allow access to a number of hosts that {% data variables.product.prodname_copilot_short %} uses to interact with {% data variables.product.github %} or to download dependencies.

If {% data variables.product.prodname_copilot_short %} tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if {% data variables.product.prodname_copilot_short %} is creating a pull request for the first time) or to a comment (if {% data variables.product.prodname_copilot_short %} is responding to a pull request comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from {% data variables.product.prodname_copilot_short %} about being blocked by the firewall.](/assets/images/help/copilot/coding-agent/firewall-warning.png)

## Allowlisting additional hosts in the agent's firewall

You can allowlist additional addresses in the agent's firewall by setting the `COPILOT_AGENT_FIREWALL_ALLOW_LIST_ADDITIONS` {% data variables.product.prodname_actions %} variable to a comma-separated list. In that list, you can include:

* **Domains** (for example, `packages.contoso.corp`), in which case traffic will be allowed to that domain and any subdomains.

  **Example**: `packages.contoso.corp` would allow traffic to `packages.contoso.corp` and `prod.packages.contoso.corp`, but not `artifacts.contoso.corp`.

* **URLs** (for example, `https://packages.contoso.corp/project-1/`), in which case traffic will only be allowed on the specified scheme (`https`) and host (`packages.contoso.corp`), and limited to the specified path and descendant paths.

  **Example**: `https://packages.contoso.corp/project-1/` would allow traffic to `https://packages.contoso.corp/project-1/` and `https://packages.contoso.corp/project-1/tags/latest`, but not `https://packages.consoto.corp/project-2`, `ftp://packages.contoso.corp` or `https://artifacts.contoso.corp`.

## Overwriting the firewall allowlist

By default, the firewall allows access to a number of hosts that are commonly used to download dependencies or that {% data variables.product.prodname_copilot_short %} uses to interact with {% data variables.product.github %}.

To completely clear this default allowlist and start again from scratch, set the `COPILOT_AGENT_FIREWALL_ALLOW_LIST` {% data variables.product.prodname_actions %} variable to a comma-separated list of hosts.

For example, to _only_ allow access to `packages.contoso.corp` and `artifacts.contoso.corp`, set the `COPILOT_AGENT_FIREWALL_ALLOW_LIST` variable to `packages.contoso.corp,artifacts.contoso.corp`.

### Disabling the firewall

> [!WARNING]
> Disabling the firewall will allow {% data variables.product.prodname_copilot_short %} to connect to any host, increasing risks of exfiltration of code or other sensitive information.

The firewall is enabled by default. To disable the firewall, set the `COPILOT_AGENT_FIREWALL_ENABLED` {% data variables.product.prodname_actions %} variable to `false`.

## Further reading

* [AUTOTITLE](/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
