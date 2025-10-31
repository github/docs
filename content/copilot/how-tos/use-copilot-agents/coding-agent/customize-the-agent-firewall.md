---
title: Customizing or disabling the firewall for GitHub Copilot coding agent
shortTitle: Customize the agent firewall
intro: 'Learn how to control the domains and URLs that {% data variables.copilot.copilot_coding_agent %} can access.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customizing-or-disabling-the-firewall-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customize-the-agent-firewall
  - /copilot/how-tos/agents/coding-agent/customize-the-agent-firewall
contentType: how-tos
category: 
  - Configure Copilot
---

> [!NOTE]
> Firewall configuration has moved to the {% data variables.copilot.copilot_coding_agent %} settings page. Previous configurations saved as Actions variables will be maintained on that page.

## Overview

By default, {% data variables.product.prodname_copilot_short %}'s access to the internet is limited by a firewall.

Limiting access to the internet helps to manage data exfiltration risks, where surprising behavior from {% data variables.product.prodname_copilot_short %}, or malicious instructions given to it, could lead to code or other sensitive information being leaked to remote locations.

The firewall always allows access to a number of hosts that {% data variables.product.prodname_copilot_short %} uses to interact with {% data variables.product.github %}. By default, a recommended allowlist is also enabled to allow the agent to download dependencies.

If {% data variables.product.prodname_copilot_short %} tries to make a request which is blocked by the firewall, a warning is added to the pull request body (if {% data variables.product.prodname_copilot_short %} is creating a pull request for the first time) or to a comment (if {% data variables.product.prodname_copilot_short %} is responding to a pull request comment). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from {% data variables.product.prodname_copilot_short %} about being blocked by the firewall.](/assets/images/help/copilot/coding-agent/firewall-warning.png)

## Limitations

The agent firewall has important limitations that affect its security coverage.

* **Only applies to processes started by the agent**: The firewall only applies to processes started by the agent via its Bash tool. It does not apply to Model Context Protocol (MCP) servers or processes started in configured {% data variables.product.prodname_copilot_short %} setup steps.
* **Only applies within the {% data variables.product.prodname_actions %} appliance**: The firewall only operates within the {% data variables.product.prodname_actions %} appliance environment. It does not apply to processes running outside of this environment.
* **Bypass potential**: Sophisticated attacks may bypass the firewall, potentially allowing unauthorized network access and data exfiltration.

These limitations mean that the firewall provides a layer of protection for common scenarios, but should not be considered a comprehensive security solution.

## Managing the recommended firewall allowlist

The recommended allowlist, enabled by default, allows access to:

* Common operating system package repositories (for example, Debian, Ubuntu, Red Hat).
* Common container registries (for example, Docker Hub, Azure Container Registry, AWS Elastic Container Registry).
* Packages registries used by popular programming languages (C#, Dart, Go, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, Rust, Swift).
* Common certificate authorities (to allow SSL certificates to be validated).
* Hosts used to download web browsers for the Playwright MCP server.

You can choose to turn off the recommended allowlist.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short %}**.
1. Toggle the **Recommended allowlist** setting **off**.

To use the recommended allowlist in addition to your own allowlist, keep the **Recommended allowlist** setting **on**, and add your additional addresses in the **Custom allowlist** page.

## Allowlisting additional hosts in the agent's firewall

You can allowlist additional addresses in the agent's firewall.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short %}**.
1. Click **Custom allowlist**
1. Add the addresses you want to include in the allowlist. You can include:

   * **Domains** (for example, `packages.contoso.corp`). Traffic will be allowed to the specified domain and any subdomains.

     **Example**: `packages.contoso.corp` will allow traffic to `packages.contoso.corp` and `prod.packages.contoso.corp`, but not `artifacts.contoso.corp`.

   * **URLs** (for example, `https://packages.contoso.corp/project-1/`). Traffic will only be allowed on the specified scheme (`https`) and host (`packages.contoso.corp`), and limited to the specified path and descendant paths.

     **Example**: `https://packages.contoso.corp/project-1/` will allow traffic to `https://packages.contoso.corp/project-1/` and `https://packages.contoso.corp/project-1/tags/latest`, but not `https://packages.consoto.corp/project-2`, `ftp://packages.contoso.corp` or `https://artifacts.contoso.corp`.

1. Click **Add Rule**.
1. After validating your list, click **Save changes**.

### Disabling the firewall

> [!WARNING]
> Disabling the firewall will allow {% data variables.product.prodname_copilot_short %} to connect to any host, increasing risks of exfiltration of code or other sensitive information.

The firewall is enabled by default. To disable the firewall, toggle the **Enable firewall** setting to **off**.

## Further reading

* [AUTOTITLE](/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
