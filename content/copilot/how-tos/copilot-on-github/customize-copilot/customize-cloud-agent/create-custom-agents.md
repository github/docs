---
title: Creating custom agents for {% data variables.copilot.copilot_cloud_agent %}
shortTitle: Create custom agents
intro: You can create specialized agents with tailored expertise for specific development tasks.
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents
  - /copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents
---

{% data variables.copilot.custom_agents_caps_short %} allow you to tailor {% data variables.product.prodname_copilot_short %}'s expertise for specific tasks. For a conceptual overview of {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

{% data reusables.copilot.custom-agents-ide-preview %}

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in a repository on {% data variables.product.github %}

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).

1. Using the dropdown menu in the prompt box, select the repository you want to create the {% data variables.copilot.copilot_custom_agent_short %} profile in.

   > [!NOTE]
   > Organization and enterprise owners can create organization and enterprise-level {% data variables.copilot.custom_agents_short %} in a `.github-private` repository that are available across all repositories within their organization or enterprise. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents).

1. Optionally, select the branch you want to create the {% data variables.copilot.agent_profile %} in. The default is the main branch.
1. Click {% octicon "copilot" aria-label="Select a custom agent" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create an agent**. This will open a template agent profile called `my-agent.agent.md` in the `.github/agents` directory of your target repository.
1. If you are creating an organization or enterprise-level {% data variables.copilot.copilot_custom_agent_short %}, delete the `.github/` portion of the file path to move your template to the root `agents` directory.
1. Edit the filename (the text before `.agent.md`), selecting a unique, descriptive name that identifies the agent's purpose. Note that the filename may only contain the following characters: `.`, `-`, `_`, `a-z`, `A-Z`, `0-9`.
1. Configure the {% data variables.copilot.agent_profile %}, including the name, description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
1. Commit the file to the repository and merge it into the default branch. Go back to the agents tab and refresh the page if needed. Your {% data variables.copilot.copilot_custom_agent_short %} will now appear in the dropdown when you click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} in the prompt box.

## Configuring an {% data variables.copilot.agent_profile %}

{% data reusables.copilot.custom-agents-configuring-profile %}

## Example {% data variables.copilot.agent_profiles %}

{% data reusables.copilot.custom-agents-example-profiles %}

## Using {% data variables.copilot.custom_agents_short %}

{% data reusables.copilot.custom-agents-using %}

## Next steps

{% data reusables.copilot.custom-agents-next-steps %}
