---
title: Preparing to use custom agents in your organization
intro: 'Configure the repository that stores {% data variables.copilot.custom_agents_short %} for your organization.'
permissions: Organization owners
versions:
  feature: copilot
shortTitle: Prepare for custom agents
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

{% data reusables.copilot.custom-agents-preview-note %}

## Prerequisites

You should understand what {% data variables.copilot.copilot_custom_agents %} are and how they work. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

> [!NOTE]
> If your organization is part of an enterprise, enterprise owners can configure a ruleset that restricts {% data variables.copilot.custom_agents_short %}. Contact your enterprise owners to check whether you can create and manage organization-level {% data variables.copilot.custom_agents_short %}.

## Preparing your organization for {% data variables.copilot.custom_agents_short %}

Organization-level {% data variables.copilot.custom_agents_short %} are stored in the `/agents` directory of your organization's `.github` or `.github-private` repository. Both work the same way and make the {% data variables.copilot.custom_agents_short %} available to all members of the organization, regardless of whether they have access to the repository itself.

For more information on `.github` and `.github-private` repositories, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile).

If you don't already have a suitable repository, follow the steps below to create one. These steps describe creating a `.github-private` repository, but you can also create a `.github` repository by naming it `.github` instead.

1. Create your {% data variables.copilot.copilot_custom_agent_short %} repository using [{% data variables.product.github %}'s template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text). The template includes a README and the file structure you need.
1. In the **Choose an owner** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, choose your organization.
1. Name the repository `.github-private` and write a brief description.
1. In the visibility dropdown menu, click {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private**.
     * Organization members will still be able to use {% data variables.copilot.custom_agents_short %} stored in this repository, regardless of whether they have direct access to the repository itself. Keeping the repository private also avoids conflicts with other features that require `.github-private` to be private, such as the organization member-only profile README.
    * If you want organization members to view and collaborate on the {% data variables.copilot.agent_profiles %} directly, consider using a `.github` repository with {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal** visibility. If you are an open source organization and want to share the {% data variables.copilot.custom_agents_short %} publicly, select {% octicon "globe" aria-hidden="true" aria-label="globe" %} **Public** visibility.

{% data reusables.repositories.create-repo %}
1. Update the template README. Include any creation guidelines for {% data variables.copilot.custom_agents_short %} or compliance considerations specific to your organization.

## Next steps

To trial {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/test-custom-agents).
