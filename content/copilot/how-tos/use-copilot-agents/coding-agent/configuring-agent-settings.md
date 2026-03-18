---
title: Configuring settings for GitHub Copilot coding agent
shortTitle: Configuring agent settings
intro: 'Learn how to configure settings for {% data variables.copilot.copilot_coding_agent %}'
versions:
  feature: copilot
contentType: how-tos
category: 
  - Configure Copilot
---

## Enabling or disabling built-in code quality and security validation tools

{% data reusables.copilot.coding-agent-validation-tools-intro %}

Optionally, you can choose to disable these tools to help {% data variables.product.prodname_copilot_short %} work faster or avoid conflicts with other code quality or security products you're using.

You must be a repository administrator to configure these settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short_cap_c %}**.
1. In the "Validation tools" section, toggle the tool, or tools, you want to enable or disable.

## Allowing {% data variables.product.prodname_actions %} workflows to run automatically when {% data variables.product.prodname_copilot_short %} pushes

{% data reusables.copilot.coding-agent-workflow-run-approval-default %}

> [!WARNING] Allowing {% data variables.product.prodname_actions %} workflows to run without approval may allow unreviewed code written by {% data variables.product.prodname_copilot_short %} to gain write access to your repository or access your {% data variables.product.prodname_actions %} secrets.

You must be a repository administrator to configure these settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short %}**.
1. In the "Actions workflow approval" section, disable the **Require approval for workflow runs** setting.
