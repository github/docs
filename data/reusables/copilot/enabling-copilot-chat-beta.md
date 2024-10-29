## Enabling or disabling {% data variables.product.prodname_copilot_chat %}

> [!NOTE] If you have a {% data variables.product.prodname_copilot_for_individuals %} subscription, you are automatically granted access to {% data variables.product.prodname_copilot_chat %}.

{% data variables.product.prodname_copilot_chat %} is available to all organizations and enterprises that have an active {% data variables.product.prodname_copilot_for_business %} license. You can enable or disable {% data variables.product.prodname_copilot_chat %} for your organization or enterprise in the {% data variables.product.prodname_copilot_for_business %} settings page.

If {% data variables.product.prodname_copilot_chat_short %} is enabled or disabled at the enterprise level, organizations within the enterprise cannot override the setting.

### Enabling or disabling {% data variables.product.prodname_copilot_chat %} at the organization level

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}**, and then click **Policies**.
1. To the right of **{% data variables.product.prodname_copilot_chat %} {% data variables.release-phases.public_preview_caps %}**, select the dropdown menu, and then click **Enabled** or **Disabled**.

### Enabling or disabling {% data variables.product.prodname_copilot_chat %} at the enterprise level

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. To the right of **{% data variables.product.prodname_copilot_chat %} {% data variables.release-phases.public_preview_caps %}**, select the dropdown menu, and then choose the appropriate option.
    * Click **Allowed** to enable the {% data variables.product.prodname_copilot_chat %} {% data variables.release-phases.public_preview %} for all organizations under your enterprise.
    * Click **Blocked** to disable the {% data variables.product.prodname_copilot_chat %} {% data variables.release-phases.public_preview %} for all organizations under your enterprise.
    * Click **No policy** to allow each organization under your enterprise to set their own policy.
