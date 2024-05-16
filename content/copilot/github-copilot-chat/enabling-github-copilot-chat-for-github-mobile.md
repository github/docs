---
title: Enabling GitHub Copilot Chat for GitHub Mobile
intro: 'You can enable or disable {% data variables.product.prodname_copilot_chat %} for your organization{% ifversion ghec %} or enterprise{% endif %}.'
topics:
  - Copilot
  - Mobile
versions:
  feature: copilot-chat-for-mobile
shortTitle: Enabling Copilot Chat (Mobile)
---

If you have a {% data variables.product.prodname_copilot_for_individuals %} subscription, {% data variables.product.prodname_copilot_mobile %} is already enabled.

If you are part of an organization{% ifversion ghec %} or enterprise{% endif %} with a {% data variables.product.prodname_copilot_for_business %}{% ifversion ghec %} or {% data variables.product.prodname_copilot_enterprise %}{% endif %} subscription, the organization{% ifversion ghec %} or enterprise{% endif %} owner will need to enable {% data variables.product.prodname_copilot_chat %} in the {% data variables.product.prodname_copilot_short %} settings.

## Enabling or disabling {% data variables.product.prodname_copilot_mobile_short %} at the organization level

An organization owner can enable or disable {% data variables.product.prodname_copilot_mobile_short %} for the organization. {% ifversion ghec %}You may not be able to configure this setting for your organization, if an enterprise owner has set a policy at the enterprise level.{% endif %} If your organization has a {% data variables.product.prodname_copilot_for_business %} subscription, {% data variables.product.prodname_copilot_mobile_short %} is disabled by default.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. To the right of "{% data variables.product.prodname_copilot_mobile_short %}", select the dropdown menu, then click **Enabled** or **Disabled**.

{% ifversion ghec %}

## Enabling or disabling {% data variables.product.prodname_copilot_mobile_short %} at the enterprise level

An enterprise owner can choose whether to enable a feature for all organizations, disable for all organizations, or allow each organization to choose its own policy for the feature.

{% data reusables.copilot.copilot-chat-mobile-enable %}

{% endif %}

## Next steps

You successfully enabled {% data variables.product.prodname_copilot_mobile_short %} for your organization{% ifversion ghec %} or enterprise{% endif %}. To learn more about how to use it, see "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-github-mobile)."
