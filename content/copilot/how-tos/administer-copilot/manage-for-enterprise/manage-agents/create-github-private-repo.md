---
title: Creating a `.github-private` repository
shortTitle: Create github-private repository
allowTitleToDifferFromFilename: true
intro: 'A `.github-private` repository can serve as a designated source of governance settings for agents and plugins across your enterprise.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

A `.github-private` repository can house governance settings for your enterprise's custom agent profiles, client permissions, and plugins.

A repository-based governance approach allows users to open pull request with suggestions to improve the settings, and it allows settings changes to be restricted by codeowners and rulesets.

You can create a `.github-private` repository using a template or from scratch.

## Creating a repository for your enterprise governance

1. Choose an organization in your enterprise to own the repository containing your enterprise-level {% data variables.copilot.custom_agents_short %} and governance settings.
1. Navigate to the [governance template repository](https://github.com/docs/custom-agents-template?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise).
1. In the top-right corner, click "Use this template" and create a new repository in your chosen organization named `.github-private`. Settings will apply to members regardless of whether they can access the repository, so choose the visibility based on who should be able to suggest changes:
     * To grant **read access to all members** of your enterprise, choose {% octicon "organization" aria-hidden="true" aria-label="organization" %} **Internal**.
     * To **manually grant access after creation**, choose {% octicon "lock" aria-hidden="true" aria-label="lock" %} **Private**.
1. Update the template README as needed. Consider including creation guidelines for {% data variables.copilot.custom_agents_short %} or compliance considerations specific to your enterprise.

> [!NOTE]
> Settings in this repository apply to all users on your enterprise's {% data variables.product.prodname_copilot_short %} plan who use a supported client.

## Selecting your repository as your source of governance

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. On the "Agents" tab, in the "Configuration source" section, select the **Select organization** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click the organization that contains your `.github-private` repository.

The "Configuration summary" on the settings page will display the settings taken from this repository.

## Next steps
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards)