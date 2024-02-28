---
title: Enabling GitHub Copilot in the CLI
intro: 'You can enable or disable {% data variables.product.prodname_copilot_cli %} for your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Enabling Copilot in the CLI
---

{% note %}

**Note:**  If you have a {% data variables.product.prodname_copilot_for_individuals %} subscription, you are automatically granted access to the {% data variables.product.prodname_copilot_cli %} beta.

{% endnote %}

The {% data variables.product.prodname_copilot_cli %} public beta is available to all organizations{% ifversion ghec %} and enterprises{% endif %} that have an active {% data variables.product.prodname_copilot_for_business %} license. You can enable or disable {% data variables.product.prodname_copilot_cli_short %} for your organization{% ifversion ghec %} or enterprise{% endif %} in the {% data variables.product.prodname_copilot_short %} settings.

{% note %}

**Note:** To use {% data variables.product.prodname_copilot_cli %}, after it has been enabled, users must install the {% data variables.product.prodname_copilot_cli %} extension, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli)."

{% endnote %}

## Enabling or disabling {% data variables.product.prodname_copilot_cli_short %} at the organization level

An organization owner can enable or disable {% data variables.product.prodname_copilot_cli_short %} for the organization. {% ifversion ghec %}You may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. To the right of "{% data variables.product.prodname_copilot_cli_short %}", select the dropdown menu, then click **Enabled** or **Disabled**.

{% ifversion ghec %}

## Enabling or disabling {% data variables.product.prodname_copilot_cli_short %} at the enterprise level

An enterprise owner can choose whether to enable a feature for all organizations, disable for all organizations, or allow each organization to choose its own policy for the feature.

{% data reusables.copilot.copilot-cli-enable %}

{% endif %}
