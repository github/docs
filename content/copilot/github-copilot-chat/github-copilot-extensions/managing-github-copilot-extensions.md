---
title: Managing GitHub Copilot Extensions
intro: 'You can manage {% data variables.product.prodname_copilot_extension %} policies and permissions in your organization{% ifversion ghec %} or enterprise{% endif %}.'
product: 'Organization owners {% ifversion ghec %}and enterprise administrators {% endif %}can manage {% data variables.product.prodname_copilot_extensions_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Manage Copilot Extensions
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About managing {% data variables.product.prodname_copilot_extensions %}

Before you install {% data variables.product.prodname_copilot_extensions_short %} in your organization, you should set a usage policy for your {% ifversion ghec %}enterprise or {% endif %}organization. Setting a usage policy allows you to enable or disable {% data variables.product.prodname_copilot_extensions_short %} for all members of your {% ifversion ghec %}enterprise or {% endif %}organization, limiting your security risk. See {% ifversion ghec %}"[Setting a policy for {% data variables.product.prodname_copilot_extensions %} in your enterprise](#setting-a-policy-for-github-copilot-extensions-in-your-enterprise)" and {% endif %}"[Setting a policy for {% data variables.product.prodname_copilot_extensions %} in your organization](#setting-a-policy-for-github-copilot-extensions-in-your-organization)."

Additionally, after you install a {% data variables.product.prodname_copilot_extension_short %} in your organization, you can view and manage the permissions for that extension. See "[Managing permissions for a {% data variables.product.prodname_copilot_extension %} in your organization](#managing-permissions-for-a-github-copilot-extension-in-your-organization)."

{% ifversion ghec %}

## Setting a policy for {% data variables.product.prodname_copilot_extensions %} in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. In the "{% data variables.product.prodname_copilot_extensions_short %}" section, select the dropdown menu, then click one of the following options:
    - **No policy**: organizations within your enterprise can set their own policies for {% data variables.product.prodname_copilot_extensions_short %}.
    - **Enabled**: {% data variables.product.prodname_copilot_extensions_short %} are enabled for all organizations in your enterprise.
    - **Disabled**: {% data variables.product.prodname_copilot_extensions_short %} are disabled for all organizations in your enterprise.

{% endif %}

## Setting a policy for {% data variables.product.prodname_copilot_extensions %} in your organization

{% ifversion ghec %}
If {% data variables.product.prodname_copilot_extensions_short %} have not been enabled or disabled at the enterprise level, you can set a {% data variables.product.prodname_copilot_extensions_short %} policy for your organization.
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. In the "{% data variables.product.prodname_copilot_extensions_short %}" section, select the dropdown menu, then enable or disable {% data variables.product.prodname_copilot_extensions_short %} for your organization.

## Managing permissions for a {% data variables.product.prodname_copilot_extension %} in your organization

After you have installed a {% data variables.product.prodname_copilot_extension_short %} in your organization, you can view the permissions the extension has in your organization, and why those permissions are necessary. If you do not want the {% data variables.product.prodname_copilot_extension_short %} to have the listed permissions, you can suspend or uninstall the extension.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.apps.access-org-app-settings %}
1. Optionally, to filter your installed {% data variables.product.prodname_github_apps %} for {% data variables.product.prodname_copilot_extensions_short %}, select the **Filter:** dropdown menu, then click **{% data variables.product.prodname_copilot_extensions_short %}**.
1. Next to the {% data variables.product.prodname_copilot_extension_short %} you want to review or modify, click **Configure**.
1. In the "Permissions" section, review the permissions listed for the {% data variables.product.prodname_copilot_extension_short %}. Optionally, you can block the {% data variables.product.prodname_copilot_extension_short %}'s access to your organization in one of two ways:
    - To indefinitely suspend the {% data variables.product.prodname_copilot_extension_short %}'s access to resources in your organization while keeping the extension installed, in the "Danger zone" section, click **Suspend**.
    - To uninstall a {% data variables.product.prodname_copilot_extension_short %} completely, in the "Danger zone" section, click **Uninstall**.

## Next steps

After you have set a {% data variables.product.prodname_copilot_extensions_short %} policy, you can install {% data variables.product.prodname_copilot_extensions_short %} for your organization. See "[AUTOTITLE](/copilot/github-copilot-chat/github-copilot-extensions/installing-github-copilot-extensions-for-your-organization)."
