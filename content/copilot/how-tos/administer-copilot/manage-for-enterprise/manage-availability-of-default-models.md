---
title: Managing availability of models in your enterprise
shortTitle: Manage model availability
intro: 'Control which {% data variables.product.prodname_copilot_short %} models are available to users.'
versions:
  feature: copilot
contentType: how-tos
permissions: Enterprise owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
allowTitleToDifferFromFilename: true
---

As an enterprise owner, you can manage which {% data variables.product.prodname_copilot_short %} models are available to people in your enterprise.

An enterprise owner can enable or disable models for everyone in the enterprise. Alternatively, there are two different modes for controlling granular access to models: organizations and enterprise teams.

By default, models that are set to "optional" at the enterprise level are available for organizations to set to enabled or disabled. Enterprise owners can also create model rules to enable or disable models in organizations directly.

> [!IMPORTANT] {% data reusables.copilot.model-autoenablement %}

## About the enterprise teams model access preview

As an opt-in preview, enterprises can switch to controlling granular model access exclusively through enterprise teams. This gives you more control over model access based on business needs, roles, or levels of training.

## Setting a baseline for model access

Regardless of whether you are opted in to the preview, you should explicitly configure all models that should be either enabled or disabled for everyone. For example, everyone in your company might get access to vetted, low-cost models, whereas some models might be disabled everywhere for compliance reasons.

This sets a baseline that you can add to with more granular controls. For models that only some people should get access to, set them to "optional." Then, you will be able to grant access to specific organizations or enterprise teams, depending on your settings.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
{% data reusables.enterprise-accounts.copilot-sidebar %}
{% data reusables.enterprise-accounts.configure-allowed-models %}
1. Above the list of models, click **Add models**.
1. In the modal, select or deselect the checkboxes next to the models you want to make available or remove.
1. Click **Save**.
1. Select a status for each model in the list:

   * **Enabled**: Enabled for everyone.
   * **Disabled**: Explicitly disabled for everyone.
   * **Optional**: You can choose whether to enable the model for specific organizations or enterprise teams.

## Granting access to specific organizations (default)

This section applies if you are **not** opted in to the enterprise teams model access preview.

To allow each organization to make its own decision about a model, set it to **Optional** in your enterprise's model list. Organization owners can then choose whether to enable or disable the model. If left unconfigured by an organization, the model will follow the organization's **Default availability for released models** policy setting.

As an alternative to delegating control to organizations, targeted model rules let you control exactly which models are available to specific organizations, giving you more granular control than the enterprise-wide availability settings.

### Creating a model policy

1. In the "Targeted model rules" section, click **Create access rule**.
1. Next to "Target organizations", click **Add organizations**, then select the organizations you want the rule to apply to.
1. Under "Allowed models", click **Add models**, then select the models you want to make available to the selected organizations and click **Save**.
1. Click **Create rule**.

## Granting access to enterprise teams (opt-in preview)

Once you are opted in to the preview, organization-level model settings will be deactivated. Organization owners can no longer manage model policies. Instead, individual models can be enabled for specific enterprise teams.

You can roll back from enterprise teams mode while the feature is in preview. This returns your enterprise to its previous policy state before you opted in. Any changes to enterprise-level model policies made after switching to enterprise teams mode will not be preserved after rollback.

Model settings for enterprise teams are additive to your enterprise's model settings:

* If the enterprise has disabled a model, it cannot be enabled for a team.
* If the enterprise has enabled a model, it is always enabled for teams.
* A team can receive access to additional models on top of the enterprise baseline.
* If a user belongs to multiple enterprise teams, they receive access to all models enabled by the enterprise and across all of their enterprise teams. As long as one of their enterprise teams enables a model, the user gets access to it.
* There is no option to explicitly set a model to "disabled" for a team in the team's settings. "Optional" in the team's settings means the model is not currently enabled for the team.

### Preparing to migrate

Before opting in to the preview, we recommend you create enterprise teams and begin recreating and enhancing your existing organization-based setup. With teams, you have more scope to map model access to business needs. For example, higher-cost models might be enabled for development teams or people who have received specific training.

For each team, you can use the **default models** tab to configure the model access that the team will receive. These settings do not apply until you opt in to the preview.

Make sure your new setup will not cause regressions for users. Although models that are explicitly "enabled" or "disabled" at the enterprise level will keep those settings once you opt in to the preview, models that are "optional" or unconfigured will be unavailable by default until they are enabled for specific teams. Identify these models and choose which teams will receive access to them.

For information on creating teams, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### Opting in to the preview

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.ai-controls-tab %}
1. In the sidebar, click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} **{% data variables.product.prodname_copilot_short %}**.
1. Next to **Enterprise teams mode**, click the toggle.

### Granting access to teams

To grant access to an enterprise team:

1. Ensure models you want to enable for the team are set to "optional" in your enterprise's model policies.
1. Access the settings for the team. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).
1. Click the **Default models** tab.
1. For each model that the team should receive access to beyond the enterprise baseline, set the dropdown to **Enabled**.

## Further reading

* [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies)
