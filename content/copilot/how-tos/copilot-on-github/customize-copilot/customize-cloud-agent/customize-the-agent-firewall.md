---
title: Customizing or disabling the firewall for GitHub Copilot cloud agent
shortTitle: Customize the agent firewall
allowTitleToDifferFromFilename: true
intro: 'Learn how to control the domains and URLs that {% data variables.copilot.copilot_cloud_agent %} can access.'
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall
  - /copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customizing-or-disabling-the-firewall-for-copilot-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/customize-the-agent-firewall
  - /copilot/how-tos/agents/coding-agent/customize-the-agent-firewall
  - /copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall
contentType: how-tos
category:
  - Configure Copilot
---

> [!NOTE]
> Firewall configuration has moved to the {% data variables.copilot.copilot_cloud_agent %} settings page. Previous configurations saved as Actions variables will be maintained on that page.

## Overview

By default, {% data variables.product.prodname_copilot_short %}'s access to the internet is limited by a firewall.

Limiting internet access helps manage data exfiltration risks. Unexpected behavior from {% data variables.product.prodname_copilot_short %}, or malicious instructions, could lead to code or other sensitive information being leaked to remote locations.

The firewall always allows access to a number of hosts that {% data variables.product.prodname_copilot_short %} uses to interact with {% data variables.product.github %}. By default, a recommended allowlist is also enabled to allow the agent to download dependencies.

If {% data variables.product.prodname_copilot_short %} tries to make a request which is blocked by the firewall, a warning is added to the pull request body (for new pull requests) or to a comment (for existing pull requests). The warning shows the blocked address and the command that tried to make the request.

![Screenshot of a warning from {% data variables.product.prodname_copilot_short %} about being blocked by the firewall.](/assets/images/help/copilot/cloud-agent/firewall-warning.png)

## Limitations

The agent firewall has important limitations that affect its security coverage.

* **Only applies to processes started by the agent**: The firewall only applies to processes started by the agent via its Bash tool. It does not apply to Model Context Protocol (MCP) servers or processes started in configured {% data variables.product.prodname_copilot_short %} setup steps.
* **Only applies within the {% data variables.product.prodname_actions %} appliance**: The firewall only operates within the {% data variables.product.prodname_actions %} appliance environment. It does not apply to processes running outside of this environment.
* **Bypass potential**: Sophisticated attacks may bypass the firewall, potentially allowing unauthorized network access and data exfiltration.

These limitations mean that the firewall provides protection for common scenarios, but should not be considered a comprehensive security solution.

## Understanding the recommended firewall allowlist

The recommended allowlist, enabled by default, allows access to:

* Common operating system package repositories (for example, Debian, Ubuntu, Red Hat).
* Common container registries (for example, Docker Hub, Azure Container Registry, AWS Elastic Container Registry).
* Packages registries used by popular programming languages (C#, Dart, Go, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, Rust, Swift).
* Common certificate authorities (to allow SSL certificates to be validated).
* Hosts used to download web browsers for the Playwright MCP server.

For the complete list of hosts included in the recommended allowlist, see [AUTOTITLE](/copilot/reference/copilot-allowlist-reference#copilot-cloud-agent-recommended-allowlist).

## Configuring the firewall at the organization level

Organization owners can configure all firewall settings at the organization level. To access the firewall settings:

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}

### Enabling or disabling the firewall

> [!WARNING]
> Disabling the firewall will allow {% data variables.product.prodname_copilot_short %} to connect to any host, increasing risks of exfiltration of code or other sensitive information.

1. Under "Internet access", set the **Enable firewall** setting to **Enabled**, **Disabled**, or **Let repositories decide** (default).

### Enabling or disabling the recommended allowlist

1. Under "Internet access", set the **Recommended allowlist** setting to **Enabled**, **Disabled**, or **Let repositories decide** (default).

### Controlling whether repositories can add custom allowlist rules

By default, repository administrators can add their own entries to the firewall allowlist. Organization owners can disable this to prevent repositories from adding custom rules.

1. Under "Internet access", set the **Allow repository custom rules** setting to **Enabled** (default) or **Disabled**.

### Managing the organization custom allowlist

Items added to the organization custom allowlist apply to all repositories in the organization. These items cannot be deleted at the repository level. Organization-level and repository-level rules are combined.

1. Under "Internet access", click **Organization custom allowlist**.
{% data reusables.copilot.cloud-agent.custom-allowlist-add-entries %}

## Configuring the firewall at the repository level

Repository administrators can configure firewall settings at the repository level, including enabling or disabling the firewall, enabling or disabling the recommended allowlist, and managing a custom allowlist. Depending on the organization-level configuration, some of these settings may be locked.

To access the firewall settings:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_cloud_agent_short %}**.

### Enabling or disabling the firewall

> [!NOTE]
> You can only change this setting at the repository level if the organization-level **Enable firewall** setting is set to **Let repositories decide**. If the organization-level setting is **Enabled** or **Disabled**, you can't change this setting for individual repositories.

1. Toggle the **Enable firewall** setting on or off.

### Enabling or disabling the recommended allowlist

> [!NOTE]
> You can only change this setting at the repository level if the organization-level **Recommended allowlist** setting is set to **Let repositories decide**. If the organization-level setting is **Enabled** or **Disabled**, you can't change this setting for individual repositories.

1. Toggle the **Recommended allowlist** setting on or off.

### Managing the custom allowlist

> [!NOTE]
> You can only add custom allowlist rules at the repository level if the organization-level **Allow repository custom rules** setting is set to **Enabled**. For more information, see [Controlling whether repositories can add custom allowlist rules](#controlling-whether-repositories-can-add-custom-allowlist-rules).

1. Click **Custom allowlist**.
{% data reusables.copilot.cloud-agent.custom-allowlist-add-entries %}

## Further reading

* [AUTOTITLE](/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables#creating-configuration-variables-for-a-repository)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
