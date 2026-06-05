---
title: Managing access to GitHub Copilot cloud agent
shortTitle: Access management
allowTitleToDifferFromFilename: true
intro: Find out about {% data variables.copilot.copilot_cloud_agent %} policies available for {% data variables.copilot.copilot_enterprise %} and {% data variables.copilot.copilot_for_business %}, and about disabling the agent for specific repositories.
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/coding-agent/access-management
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/enabling-copilot-coding-agent-for-your-personal-repositories
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent-for-your-personal-repositories
  - /copilot/using-github-copilot/coding-agent/enabling-copilot-coding-agent
  - /copilot/concepts/coding-agent/about-enabling-coding-agent
  - /copilot/concepts/coding-agent/enable-coding-agent
  - /copilot/concepts/agents/coding-agent/enable-coding-agent
  - /copilot/how-tos/agents/copilot-coding-agent/enabling-copilot-coding-agent
  - /copilot/concepts/agents/coding-agent/coding-agent-for-business-and-enterprise
  - /copilot/concepts/agents/coding-agent/managing-access
contentType: concepts
category:
  - Manage Copilot for a team
---

> [!NOTE]
> For an introduction to {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent).

## Overview

{% data reusables.copilot.cloud-agent.what-is %}

If you are a {% data variables.copilot.copilot_enterprise %} or {% data variables.copilot.copilot_for_business %} subscriber, {% data variables.copilot.copilot_cloud_agent %} is disabled by default and must be enabled by an administrator before it is available for use.

If you are a {% data variables.copilot.copilot_pro %} or Pro+ subscriber, {% data variables.copilot.copilot_cloud_agent %} is enabled by default.

Once enabled, you can use {% data variables.copilot.copilot_cloud_agent %} in any repository, provided that an administrator hasn't opted the repository out.

## {% data variables.copilot.copilot_cloud_agent %} policies for {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}

{% data reusables.copilot.cloud-agent.enabling-for-orgs-and-enterprises %}

## Opting repositories out of {% data variables.copilot.copilot_cloud_agent %}

By default, users with {% data variables.copilot.copilot_cloud_agent %} enabled can use it in all repositories.

Enterprise administrators and organization owners (for organization-owned repositories) and users (for user-owned repositories) can opt out repositories and prevent {% data variables.copilot.copilot_cloud_agent %} from being used in those repositories.

For information on disabling {% data variables.copilot.copilot_cloud_agent %} in some or all repositories owned by an organization, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

For information on disabling {% data variables.copilot.copilot_cloud_agent %} in all repositories owned by an enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/block-copilot-cloud-agent).

For information on disabling {% data variables.copilot.copilot_cloud_agent %} in repositories owned by your personal user account, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-copilot-cloud-agent).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/pilot-cloud-agent)
