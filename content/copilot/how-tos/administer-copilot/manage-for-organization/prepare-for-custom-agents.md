---
title: Preparing to use custom agents in your organization
intro: 'Configure the repository that will contain {% data variables.copilot.custom_agents_short %} for your organization.'
permissions: Organization owners
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Prepare for custom agents
contentType: how-tos
---

{% data reusables.copilot.custom-agents-preview-note %}

## Prerequisites

Before following this article, you should understand what {% data variables.copilot.copilot_custom_agents %} are and how they work. See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Preparing your organization for {% data variables.copilot.custom_agents_short %}

> [!NOTE]
> If your organization is part of an enterprise, your enterprise owners can configure a ruleset that restricts the creation and management of organization-level {% data variables.copilot.custom_agents_short %}. To understand the availability of {% data variables.copilot.custom_agents_short %} in your organization, contact your enterprise owners.

1. Start creating your {% data variables.copilot.copilot_custom_agent_short %} repository using [{% data variables.product.github %}'s template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-web-custom-agents&utm_medium=docs&utm_campaign=universe25post). The template repository contains a starter README and the necessary file structure to speed up your configuration.
1. Select the **Choose an owner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click your organization.
1. Name the repository `.github-private`, then write a brief description.
1. Select the visibility dropdown menu, then choose one of the following options:
     * To grant **read access to all members** of your organization or enterprise, click {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal**.
     * To **manually grant access after creation**, or if internal visibility is not an option, click {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private**.
{% data reusables.repositories.create-repo %}
1. Update the template README as needed. Consider including creation guidelines for {% data variables.copilot.custom_agents_short %} or compliance considerations specific to your organization.

## Next steps

To implement {% data variables.copilot.custom_agents_short %} in your organization, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/test-custom-agents).
