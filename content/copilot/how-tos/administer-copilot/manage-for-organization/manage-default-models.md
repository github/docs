---
title: Managing the availability of models in an organization
shortTitle: Manage default models
intro: 'Configure which default {% data variables.product.prodname_copilot_short %} models are available to members of your organization.'
permissions: Organization owners
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage Copilot for a team
allowTitleToDifferFromFilename: true
---

> [!IMPORTANT] If your enterprise has opted in to the **enterprise teams model access** preview, your organization will not be able to access model settings. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models).

## Which models can I configure?

If your organization is part of an enterprise, the enterprise owner controls which {% data variables.product.prodname_copilot_short %} models are available and how they can be configured at the organization level.

When viewing the model settings for your organization, you may see the following statuses:

* **Enabled** or **Disabled** with a {% octicon "shield" aria-label="shield" %} icon: The enterprise owner has enforced this setting. You cannot change the availability of this model.
* **Enabled** or **Disabled** in a dropdown menu: The enterprise owner has made this model optional. You can configure the availability for your organization.
* **Delegate to Default Policy**: This model is available for you to configure, but no one has configured it in the organization. The model inherits the default set in the "Default availability" policy for your organization. See [AUTOTITLE](/copilot/concepts/models/default-availability).

## Configuring model availability for your organization

If the enterprise owner has delegated a model to organizations, you can enable or disable it for your organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Click **Models**.
1. Next to a model in the list, click the dropdown menu and select an option:
   * **Enabled**: The model is available to members of your organization.
   * **Disabled**: The model is not available to members of your organization.

On this page, you can also configure the **Default availability for released models** policy to choose the default setting for unconfigured models.

## Further reading

* [AUTOTITLE](/copilot/reference/supported-surfaces-for-policies)
