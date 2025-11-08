---
title: Preparing to use custom agents in your enterprise
intro: 'Set up your enterprise for {% data variables.copilot.custom_agents_short %} by configuring their source organization and repository, availability, and management permissions.'
permissions: Enterprise owners
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Prepare for custom agents
contentType: how-tos
---

{% data reusables.enterprise-accounts.ai-controls-preview-note %}

Enterprise-level {% data variables.copilot.custom_agents_short %} are defined in a specific repository within an organization in your enterprise. Before you can create and use {% data variables.copilot.custom_agents_short %}, you need to create this repository and configure the relevant enterprise settings.

## Creating a repository for your {% data variables.copilot.custom_agents_short %}

1. Choose an organization in your enterprise to own the repository containing your enterprise-level {% data variables.copilot.custom_agents_short %}.
1. Using the [{% data variables.copilot.custom_agents_short %} template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise&utm_source=docs-web-custom-agents&utm_medium=docs&utm_campaign=universe25post), create a new repository in your chosen organization named `.github-private`. Set the visibility of the repository as follows:
     * To grant **read access to all members** of your enterprise, choose {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal**.
     * To **manually grant access after creation**, choose {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private**.
1. Update the template README as needed. Consider including creation guidelines for {% data variables.copilot.custom_agents_short %} or compliance considerations specific to your enterprise.

## Enabling and protecting {% data variables.copilot.custom_agents_short %} in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the "{% data variables.copilot.custom_agents_caps_short %}" section, select the **Select organization** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the organization that contains your {% data variables.copilot.copilot_custom_agent_short %} repository.
1. To automatically configure a ruleset that allows only enterprise owners to edit {% data variables.copilot.agent_profiles %}, in the "Protect agent files using rulesets" section, click **Create ruleset**.

    > [!NOTE]
    > * Members of your enterprise with write access to the {% data variables.copilot.copilot_custom_agent_short %} repository can still create pull requests proposing changes to your {% data variables.copilot.agent_profiles %}. Enterprise members with bypass access to the ruleset can then merge those pull requests as they see fit.
    > * Creating this ruleset will also block organization owners in your enterprise from creating or editing organization-level {% data variables.copilot.custom_agents_short %}. To prevent this, you can edit the ruleset to target only the organization containing your enterprise-level {% data variables.copilot.custom_agents_short %}.

## Next steps

To reduce your administrative burden and empower your SMEs, you can delegate the creation and management of {% data variables.copilot.custom_agents_short %} in your enterprise by creating a team of AI managers. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/establish-ai-managers).

If you prefer to maintain full control over your enterprise's tooling to ensure security and compliance, you can create and manage {% data variables.copilot.custom_agents_short %} yourself. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents).
