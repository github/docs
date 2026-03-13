---
title: Enabling and curating Copilot Memory
shortTitle: Copilot Memory
intro: Learn how to enable agentic memory, and how to view and delete stored memories.
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

{% data variables.copilot.copilot_memory %} allows {% data variables.product.prodname_copilot_short %} to learn about your codebase, helping {% data variables.copilot.copilot_coding_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_cli_short %} to work more effectively in a repository.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## Enabling {% data variables.copilot.copilot_memory %}

{% data variables.copilot.copilot_memory %} is turned off by default and must be enabled for users in either the enterprise, organization, or personal settings.

Users who receive {% data variables.product.prodname_copilot_short %} from an organization must have {% data variables.copilot.copilot_memory %} enabled in the organization or enterprise settings.

> [!NOTE]
> If a user is assigned a {% data variables.product.prodname_copilot_short %} subscription by more than one organization, the most restrictive setting applies—that is, {% data variables.copilot.copilot_memory %} will not be used unless all of those organizations have enabled this feature.

Users who receive {% data variables.product.prodname_copilot_short %} from an individual subscription to {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} must have {% data variables.copilot.copilot_memory %} enabled in their personal {% data variables.product.prodname_copilot_short %} settings.

### Enabling {% data variables.copilot.copilot_memory %} for an enterprise

Enterprise owners can define an enablement policy for the whole enterprise, or delegate the decision to individual organization owners.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Under "Features", scroll down to the **{% data variables.copilot.copilot_memory %}** setting and select a policy from the dropdown.

   * **Let organizations decide** devolves the decision of whether to enable {% data variables.copilot.copilot_memory %} to organization owners.
   * **Enabled everywhere** enables {% data variables.copilot.copilot_memory %} for all members of organizations in this enterprise who have a {% data variables.product.prodname_copilot_short %} license.
   * **Disabled everywhere** disables {% data variables.copilot.copilot_memory %} and prevents it being enabled by organizations in this enterprise.

### Enabling {% data variables.copilot.copilot_memory %} for an organization

Organization owners can enable or disable {% data variables.copilot.copilot_memory %} for all members of the organization with a {% data variables.product.prodname_copilot_short %} license.

If the organization belongs to an enterprise, the ability for organization owners to enable or disable {% data variables.copilot.copilot_memory %} may be controlled by the enterprise-level policy.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies**.
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and select **Enabled**.

   {% data variables.copilot.copilot_memory %} is enabled for all members of the organization who have a {% data variables.product.prodname_copilot_short %} license.

### Enabling {% data variables.copilot.copilot_memory %} for an individual user

If you have an individual {% data variables.product.prodname_copilot_short %} subscription, from a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, you can enable {% data variables.copilot.copilot_memory %} in your personal {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.github %}.

Once enabled, {% data variables.copilot.copilot_memory %} will be used in any repository in which you use {% data variables.copilot.copilot_coding_agent %}, {% data variables.copilot.copilot_code-review_short %}, or {% data variables.copilot.copilot_cli_short %}.

{% data reusables.user-settings.copilot-settings %}
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and select **Enabled**.

## Viewing and deleting memories

As an owner of a repository in which {% data variables.copilot.copilot_memory %} is in use, you can review the currently stored memories. If you think any are inappropriate, misleading, or incorrect you can delete them.

### Viewing {% data variables.product.prodname_copilot_short %}'s memories for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click {% data variables.product.prodname_copilot_short %} then **Memory**.

   A list of stored memories is displayed in chronological order, with the most recently stored memory at the top of the list.

   ![Screenshot of the "Memories" list showing an example set of memories.](/assets/images/help/copilot/copilot-memory-list.png)

### Deleting a memory

You can delete a memory if you don't want it to be used by {% data variables.product.prodname_copilot_short %}. It's worth noting, however, that {% data variables.product.prodname_copilot_short %} validates memories before they are used, which ensures that a memory is only used if the code that caused it to be generated still exists in the codebase.

1. View the memories for a repository.
1. Click the trashcan icon to the right of a memory you want to delete.

   Alternatively, use the checkboxes to select multiple memories, then click **Delete**.

> [!NOTE]
> Memories are automatically deleted after 28 days to avoid stale information adversely affecting agentic decision making.
