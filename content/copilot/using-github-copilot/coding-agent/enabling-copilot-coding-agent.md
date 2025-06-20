---
title: Enabling Copilot coding agent
intro: 'You can allow {% data variables.product.prodname_copilot_short %} to work on code and raise pull requests.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=enabling+copilot+coding+agent&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/enabling-copilot-coding-agent-for-your-personal-repositories
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/enabling-copilot-coding-agent-for-your-personal-repositories
---

{% data reusables.copilot.coding-agent.preview-note %}

## Overview

{% data reusables.copilot.coding-agent.what-is %}

If you are a {% data variables.copilot.copilot_enterprise %} subscriber, {% data variables.copilot.copilot_coding_agent %} is disabled by default and must be enabled by an administrator before it is available for use.

If you are a {% data variables.copilot.copilot_pro_plus %} subscriber, {% data variables.copilot.copilot_coding_agent %} is enabled by default.

Once enabled, you can use {% data variables.copilot.copilot_coding_agent %} in any repository, provided that an administrator hasn't opted the repository out.

## Enabling {% data variables.copilot.copilot_coding_agent %} for {% data variables.copilot.copilot_enterprise %} subscribers

{% data reusables.copilot.coding-agent.enabling-for-orgs-and-enterprises %}

## Opting repositories out of {% data variables.copilot.copilot_coding_agent %}

By default, users with {% data variables.copilot.copilot_coding_agent %} enabled can use it in all repositories.

Enterprise administrators and organization owners (for organization-owned repositories) and users (for user-owned repositories) can opt out repositories and prevent {% data variables.copilot.copilot_coding_agent %} from being used in those repositories.

For information on disabling {% data variables.copilot.copilot_coding_agent %} in repositories owned by your personal user account, see [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-plan/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-copilot-coding-agent).

For information on disabling {% data variables.copilot.copilot_coding_agent %} in all repositories owned by an enterprise, see [AUTOTITLE](/enterprise-cloud@latest/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-copilot-coding-agent-in-your-enterprise).

For information on disabling {% data variables.copilot.copilot_coding_agent %} in some or all repositories owned by an organization, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp)
* [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/using-copilot-coding-agent-in-org)
