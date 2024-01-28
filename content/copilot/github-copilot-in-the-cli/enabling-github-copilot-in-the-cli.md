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
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, and then click **Policies and features**.
1. To the right of "{% data variables.product.prodname_copilot_cli %}", select the dropdown menu, then click **Enabled** or **Disabled**.

{% ifversion ghec %}

## Enabling or disabling {% data variables.product.prodname_copilot_cli_short %} at the enterprise level

An enterprise owner can choose whether to enable a feature for all organizations, disable for all organizations, or allow each organization to choose its own policy for the feature.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Click the **Technical preview features** tab.
1. To the right of "{% data variables.product.prodname_copilot_cli %}", select the dropdown menu, then choose the appropriate option.

    - Click **Allowed** to enable the {% data variables.product.prodname_copilot_cli_short %} beta for all organizations under your enterprise.
    - Click **Blocked** to disable the {% data variables.product.prodname_copilot_cli_short %} beta for all organizations under your enterprise.
    - Click **No policy** to allow each organization under your enterprise to set its own policy.

{% endif %}
