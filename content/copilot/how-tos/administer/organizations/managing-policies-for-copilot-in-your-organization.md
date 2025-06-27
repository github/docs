---
title: Managing policies for Copilot in your organization
intro: 'Learn how to manage policies for {% data variables.product.prodname_copilot %} in your organization.'
permissions: Organization owners
product: 'Organizations with a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} plan'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization
  - /copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-business-in-your-organization
  - /copilot/managing-copilot-for-business/managing-policies-for-copilot-for-business-in-your-organization
  - /copilot/managing-copilot-business/managing-policies-for-copilot-business-in-your-organization
  - /copilot/managing-github-copilot-in-your-organization/managing-policies-and-features-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-and-features-for-copilot-in-your-organization
  - /copilot/github-copilot-chat/copilot-chat-in-github-mobile/enabling-github-copilot-chat-for-github-mobile
  - /copilot/github-copilot-chat/github-copilot-extensions/managing-github-copilot-extensions
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization
topics:
  - Copilot
shortTitle: Manage policies
---

## About policies for {% data variables.product.prodname_copilot %}

Organization owners can set policies to govern how {% data variables.product.prodname_copilot %} can be used within the organization. For example, an organization owner can enable or disable the following {% data variables.product.prodname_copilot_short %} features{% ifversion ghec %} (unless an enterprise owner has blocked access to these features at the enterprise level){% endif %}:

* {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.copilot.copilot_chat_short %} in the IDE
* Editor preview Copilot features, such as:
  * Image support in {% data variables.copilot.copilot_chat_short %} (available in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %})
    >[!NOTE] This setting only applies to preview features within {% data variables.product.prodname_copilot_short %} and does not control all preview-related settings in {% data variables.product.prodname_vscode_shortname %}.
* {% data variables.copilot.copilot_coding_agent %} ({% data variables.release-phases.public_preview %})
* {% data variables.copilot.copilot_spaces %} (public preview)
* MCP servers on {% data variables.product.prodname_dotcom_the_website %} ({% data variables.release-phases.public_preview %})
* {% data variables.copilot.copilot_mobile_short %}
* {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_windows_terminal %}
* {% data variables.copilot.copilot_desktop_short %} ({% data variables.release-phases.public_preview %})
* Suggestions matching public code
* Access to alternative models for {% data variables.product.prodname_copilot_short %}
  * Anthropic {% data variables.copilot.copilot_claude %} in {% data variables.product.prodname_copilot_short %}
  * Google {% data variables.copilot.copilot_gemini %} in {% data variables.product.prodname_copilot_short %}
  * OpenAI models in {% data variables.product.prodname_copilot_short %}

The policy settings selected by an organization owner determine the behavior of {% data variables.product.prodname_copilot_short %} for all organization members that have been granted access to {% data variables.product.prodname_copilot_short %} through the organization.

### Policies for suggestion matching

Organization settings include an option to either allow or block code suggestions that match publicly available code. If you choose to block suggestions matching public code, {% data variables.product.prodname_copilot_short %} will check potential code suggestions and the surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match, or a near match, the suggestion is not shown.

{% ifversion ghec %}If your enterprise admin has selected **No policy** for suggestion matching at the enterprise level, you can set a suggestion matching policy for your organization.

If an organization member is assigned a seat by multiple organizations with different suggestion matching policies under the same enterprise, {% data variables.product.prodname_copilot_short %} will use the most restrictive policy.{% endif %}

## Enabling {% data variables.product.prodname_copilot_short %} features in your organization

{% data reusables.organizations.copilot-policy-ent-overrides-org %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. Use the dropdown options to the right of each feature to enable or disable that feature for your organization.

   For example, to enable or disable suggestion matching, in the "Suggestions matching public code" dropdown, select **Allowed** or **Blocked**.

1. If your organization has a {% data variables.copilot.copilot_business_short %}{% ifversion ghec %} or {% data variables.copilot.copilot_enterprise_short %}{% endif %} plan and you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}", two additional options are displayed:

    {% data reusables.copilot.policies-for-dotcom %}

> [!TIP]
> If you choose to enable {% data variables.copilot.copilot_coding_agent %} for users, you also need to define which repositories the agent is available in, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).

## Setting a policy for {% data variables.copilot.copilot_extensions %} in your organization

{% data variables.copilot.copilot_extensions %} integrate external tools with {% data variables.copilot.copilot_chat %}. See [AUTOTITLE](/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat).

Before you install {% data variables.copilot.copilot_extensions_short %} in your organization, you should set a usage policy for your organization. Setting a usage policy allows you to enable or disable {% data variables.copilot.copilot_extensions_short %} for all members of your organization, limiting your security risk.

{% ifversion ghec %}
If {% data variables.copilot.copilot_extensions_short %} have not been enabled or disabled at the enterprise level, you can set a {% data variables.copilot.copilot_extensions_short %} policy for your organization.
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.policy-settings %}
1. In the "{% data variables.copilot.copilot_extensions_short %}" section, select the dropdown menu, then enable or disable {% data variables.copilot.copilot_extensions_short %} for your organization.

### Managing permissions for a {% data variables.copilot.copilot_extension %} in your organization

After you have installed a {% data variables.copilot.copilot_extension_short %} in your organization, you can view the permissions the extension has in your organization, and why those permissions are necessary. If you do not want the {% data variables.copilot.copilot_extension_short %} to have the listed permissions, you can suspend or uninstall the extension.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.apps.access-org-app-settings %}
1. Optionally, to filter your installed {% data variables.product.prodname_github_apps %} for {% data variables.copilot.copilot_extensions_short %}, select the **Filter:** dropdown menu, then click **{% data variables.copilot.copilot_extensions_short %}**.
1. Next to the {% data variables.copilot.copilot_extension_short %} you want to review or modify, click **Configure**.
1. In the "Permissions" section, review the permissions listed for the {% data variables.copilot.copilot_extension_short %}. Optionally, you can block the {% data variables.copilot.copilot_extension_short %}'s access to your organization in one of two ways:
    * To indefinitely suspend the {% data variables.copilot.copilot_extension_short %}'s access to resources in your organization while keeping the extension installed, in the "Danger zone" section, click **Suspend**.
    * To uninstall a {% data variables.copilot.copilot_extension_short %} completely, in the "Danger zone" section, click **Uninstall**.

## Further reading

* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page)
* [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions){% ifversion ghec %}
* [AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/making-copilot-coding-agent-available-to-enterprise){% else %}
* [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization){% endif %}
