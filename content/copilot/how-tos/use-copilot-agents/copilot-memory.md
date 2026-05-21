---
title: Managing and curating Copilot Memory
shortTitle: Copilot Memory
intro: Learn how to manage {% data variables.copilot.copilot_memory %} settings, and how to view and delete stored repository-level facts and user-level preferences.
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> * This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.
> * User-level preferences are currently only available for users on a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan.

{% data variables.copilot.copilot_memory %} lets {% data variables.product.prodname_copilot_short %} learn about your codebase and your personal preferences, helping {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_cli_short %} work more effectively.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## Enabling {% data variables.copilot.copilot_memory %}

For users with an individual {% data variables.product.prodname_copilot_short %} subscription to {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_memory %} is enabled by default. These users can manage the setting in their personal {% data variables.product.prodname_copilot_short %} settings.

For enterprise and organization-managed {% data variables.product.prodname_copilot_short %} subscriptions, {% data variables.copilot.copilot_memory %} is off by default and must be enabled in the enterprise or organization settings.

Users who receive {% data variables.product.prodname_copilot_short %} from an organization must have {% data variables.copilot.copilot_memory %} enabled in the organization or enterprise settings.

> [!NOTE]
> If a user is assigned a {% data variables.product.prodname_copilot_short %} subscription by more than one organization, the most restrictive setting applies—that is, {% data variables.copilot.copilot_memory %} will not be used unless all of those organizations have enabled this feature.

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

### Managing {% data variables.copilot.copilot_memory %} for an individual user

If you have an individual {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} subscription, {% data variables.copilot.copilot_memory %} is enabled by default.

Regardless of your plan, you can disable or re-enable it at any time in your personal {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.github %}.

When enabled, {% data variables.copilot.copilot_memory %} will be used in any repository in which you use {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, or {% data variables.copilot.copilot_cli_short %}.

{% data reusables.user-settings.copilot-settings %}
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and select **Enabled** or **Disabled**.

## Viewing and deleting repository-level facts and user-level preferences

As an owner of a repository in which {% data variables.copilot.copilot_memory %} is in use, you can review the currently stored repository-level facts. If you think any are inappropriate, misleading, or incorrect you can delete them.

### Viewing {% data variables.product.prodname_copilot_short %}'s repository-level facts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click {% data variables.product.prodname_copilot_short %} then **Memory**.

   A list of the repository-level facts currently stored for this repository is displayed.

   ![Screenshot of the "{% data variables.copilot.copilot_memory %}" list showing an example set of repository-level facts.](/assets/images/help/copilot/copilot-repo-memory-list.png)

### Viewing {% data variables.product.prodname_copilot_short %}'s user-level preferences

{% data reusables.user-settings.copilot-settings %}
1. In the {% data variables.product.prodname_copilot_short %}, click **Memory**.

   A list of your stored user-level preferences is displayed.

   ![Screenshot of the "{% data variables.copilot.copilot_memory %}" list showing an example set of user-level preferences.](/assets/images/help/copilot/copilot-user-memory-list.png)

### Deleting a repository-level fact or user-level preference

You can delete a repository-level fact or user-level preference at any time. Note that {% data variables.product.prodname_copilot_short %} already validates facts and preferences before using them, so an entry is only applied if the code that produced it still exists in the codebase.

1. View the repository-level facts or user-level preferences.
1. Click the trashcan icon to the right of a fact or preference you want to delete.

   Alternatively, use the checkboxes to select multiple entries, then click **Delete**.

> [!NOTE]
> Repository-level facts and user-level preferences are automatically deleted after 28 days to prevent stale information from influencing {% data variables.product.prodname_copilot_short %}'s decisions.
