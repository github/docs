---
title: Establishing AI managers in your enterprise
intro: 'Reduce your administrative burden and empower your SMEs by creating a team of AI managers.'
permissions: Enterprise owners
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Establish AI managers
contentType: tutorials
---

> [!NOTE]
> Enterprise custom roles, enterprise teams, and the AI Controls view are in public preview and subject to change.

## Overview

You can use custom roles and enterprise teams to delegate AI administration permissions without granting enterprise ownership. AI managers can view and manage **nearly all AI features in your enterprise's AI Controls**, including agentic AI features, {% data variables.product.prodname_copilot_short %} features, and Model Context Protocol (MCP) features.

Unless you grant additional permissions beyond those listed in this article, AI managers **cannot access** the following:
* Access management settings for {% data variables.product.prodname_copilot_short %}
* Settings in the "Billing" section of the {% data variables.product.prodname_copilot_short %} page
* Settings in the "Metrics" section of the {% data variables.product.prodname_copilot_short %} page

## 1. Create a custom role for AI management

To get started, you need to create a custom role with the necessary permissions for AI management.

{% data reusables.enterprise-accounts.start-creating-custom-role %}
1. To clarify the purpose of the role, give it a name and description.
1. In the "Add permissions" section, use the search bar to find and select the following permissions:

    * **Manage enterprise AI controls**: Allows this role to view and manage all settings in the "AI Controls" tab for your enterprise
    * **Read enterprise audit logs**: Allows this role to view **all** audit log events for your enterprise, helping your AI managers monitor agentic activity

1. Click **Create role**.

## 2. Create an enterprise team for AI management

Now that you have created your AI manager role, you need to set up an enterprise team and add your future AI managers as members.

1. In the sidebar of the "People" tab, click {% octicon "people" aria-hidden="true" aria-label="people" %} **Enterprise teams**.
1. Click **Create Enterprise team**.
1. Give your team a name, then click **Create Enterprise team**.
1. On the team page, select the **Add members** dropdown menu, then click the members of your enterprise you want to grant AI management permissions to.
1. To confirm your selections, click **Add**.

## 3. Assign the AI management role to your team

With both your AI management role and team created, you can now assign the role to your team, granting management permissions to your team members.

1. In the sidebar of the "People" tab, select {% octicon "globe" aria-hidden="true" aria-label="globe" %} **Enterprise roles**, then click **Role assignments**.
1. On the "Enterprise role assignments" page, click **Assign role**.
1. In the "Assign role to" section, select the **Select user or team** dropdown menu, then click your AI management team.
1. In the "Select role" section, click your AI management role.
1. At the bottom of the page, click **Assign role**.

## 4. Grant your AI managers bypass permissions for {% data variables.copilot.agent_profiles %}

If you have created a ruleset targeting {% data variables.copilot.agent_profiles %} in your enterprise, you can grant bypass access to allow your AI managers to create and edit those profiles. This access also lets your AI managers merge pull requests modifying those files, allowing your developers to propose {% data variables.copilot.custom_agents_short %} while maintaining your enterprise's security standards.

{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the "Only enterprise admins can edit agent files" field, click **Edit ruleset** {% octicon "chevron-right" aria-hidden="true" aria-label="chevron-right" %}.

   ![Screenshot of the "Installed agents" section of the agent settings page. A button labeled "Edit ruleset" is outlined in dark orange.](/assets/images/help/enterprises/edit-agent-profile-ruleset.png)

1. In the "Bypass list" section, select the {% octicon "plus" aria-hidden="true" aria-label="plus" %} **Add bypass** dropdown menu, then click your AI management team.
1. At the bottom of the page, click **Save changes**.

## Next steps

Now that you have established AI managers for your enterprise, help them customize and manage your enterprise's AI experience by sharing the following resources:
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents)
