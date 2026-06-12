---
title: Managing Copilot Memory for an organization or enterprise
shortTitle: Manage as administrator
intro: Manage {% data variables.copilot.copilot_memory %} settings and stored memories for an organization or enterprise.
product: 'Enterprises and organizations with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan.'
permissions: Enterprise, organization, or repository administrators.
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage Copilot for a team
---

{% data reusables.copilot.memory-how-to-intro %}

## Enabling {% data variables.copilot.copilot_memory %}

For enterprise- and organization-managed {% data variables.product.prodname_copilot_short %} subscriptions, {% data variables.copilot.copilot_memory %} is off by default and must be enabled in the enterprise or organization settings.

Once {% data variables.copilot.copilot_memory %} is enabled, the feature is on for users by default. {% data variables.copilot.copilot_memory %} will be used in any repository in which users use supported {% data variables.product.prodname_copilot_short %} features, and it will save both repository-level facts and user-level preferences. Individual users can opt out of {% data variables.copilot.copilot_memory %} in their account settings.

> [!NOTE]
> If a user is assigned a {% data variables.product.prodname_copilot_short %} subscription by more than one organization, the most restrictive setting applies—that is, {% data variables.copilot.copilot_memory %} will not be used unless all of those organizations have enabled this feature.

### Enabling {% data variables.copilot.copilot_memory %} for an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Under "Features", scroll down to the **{% data variables.copilot.copilot_memory %}** setting and select a policy from the dropdown.

### Enabling {% data variables.copilot.copilot_memory %} for an organization

Organization owners can enable or disable {% data variables.copilot.copilot_memory %} for all members of the organization with a {% data variables.product.prodname_copilot_short %} license.

If the organization belongs to an enterprise, the ability for organization owners to enable or disable {% data variables.copilot.copilot_memory %} may be controlled by the enterprise-level policy.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Policies**.
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and select **Enabled**.

   {% data variables.copilot.copilot_memory %} is enabled for all members of the organization who have a {% data variables.product.prodname_copilot_short %} license.

## Managing repository-level facts

As an administrator of a repository in which {% data variables.copilot.copilot_memory %} is in use, you can review the currently stored repository-level facts. If you think any are inappropriate, misleading, or incorrect, you can delete them.

{% data reusables.copilot.manage-repo-memories %}

## Managing user-level preferences for an organization

As an administrator, you can export or delete all user-level preferences that were generated with your organization as the active billing entity. For more information on the ownership model, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory#user-level-preferences).

### Exporting user-level preferences

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Access**.
1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Download user memories**.

{% data reusables.copilot.memory-export %}

### Deleting user-level preferences

You can delete user-level preferences in bulk or for individual users.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the sidebar, under "Code, planning, and automation", click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then click **Access**.
1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Delete user memories**.

## Managing user-level preferences for an enterprise

As an administrator, you can export or delete all user-level preferences that were generated with your enterprise as the active billing entity. For more information on the ownership model, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory#user-level-preferences).

### Exporting user-level preferences

You can export user-level preferences in JSONL format. You can do this for everyone at once or for individual users.

{% data reusables.enterprise-accounts.copilot-licensing %}
1. From here, you can export preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Export Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Download user memories**.

{% data reusables.copilot.memory-export %}

### Deleting user-level preferences

You can delete user-level preferences in bulk or for individual users.

{% data reusables.enterprise-accounts.copilot-licensing %}
1. From here, you can delete preferences for everyone or for an individual user.

   * For an individual user: Next to the user's name, click **{% octicon "kebab-horizontal" aria-label="Open seat options" %}**, then click **Delete Copilot memories**.
   * For everyone: Click the **Get usage report** dropdown, then click **Delete user memories**.

## Auditing {% data variables.copilot.copilot_memory %}

Events appear in your organization or enterprise's audit log when an administrator exports or deletes memories, and when a user opts out of {% data variables.copilot.copilot_memory %}. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself)