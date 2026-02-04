---
title: Preparing to use custom agents in your organization
intro: 'Configure the repository that stores {% data variables.copilot.custom_agents_short %} for your organization.'
permissions: Organization owners
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Prepare for custom agents
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

{% data reusables.copilot.custom-agents-preview-note %}

## Prerequisites

You should understand what {% data variables.copilot.copilot_custom_agents %} are and how they work. See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

> [!NOTE]
> If your organization is part of an enterprise, enterprise owners can configure a ruleset that restricts {% data variables.copilot.custom_agents_short %}. Contact your enterprise owners to check whether you can create and manage organization-level {% data variables.copilot.custom_agents_short %}.

## Preparing your organization for {% data variables.copilot.custom_agents_short %}

1. Create your {% data variables.copilot.copilot_custom_agent_short %} repository using [{% data variables.product.github %}'s template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text). The template includes a README and the file structure you need.
1. In the **Choose an owner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, choose your organization.
1. Name the repository `.github-private` and write a brief description.
1. In the visibility dropdown menu, choose one of the following options:
     * Click {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal** to grant read access to all members of your organization or enterprise.
     * Click {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private** to manually grant access after creation or if internal visibility is not an option.
{% data reusables.repositories.create-repo %}
1. Update the template README. Include any creation guidelines for {% data variables.copilot.custom_agents_short %} or compliance considerations specific to your organization.

## Next steps

To trial {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents).
