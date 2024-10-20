---
title: Creating a GitHub App for your Copilot Extension
intro: 'Learn how to create a {% data variables.product.prodname_github_app %} for your {% data variables.product.prodname_copilot_extension_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Create GitHub App
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

A {% data variables.product.prodname_copilot_extension_short %} is a {% data variables.product.prodname_github_app %} that is associated with a {% data variables.product.prodname_copilot_agent_short %}. The {% data variables.product.prodname_github_app %} you associate your {% data variables.product.prodname_copilot_agent_short %} with is used to authenticate the {% data variables.product.prodname_copilot_agent_short %} with {% data variables.product.prodname_dotcom %} and to authorize the {% data variables.product.prodname_copilot_agent_short %} to access the {% data variables.product.prodname_copilot_chat_short %} API. Each {% data variables.product.prodname_copilot_agent_short %} must be associated with a unique {% data variables.product.prodname_github_app %}.

## Prerequisites

* You have created a {% data variables.product.prodname_copilot_agent_short %}. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension)." Alternatively, you can use a demo agent. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/using-a-demo-agent)."
* You have configured your server to deploy your {% data variables.product.prodname_copilot_agent_short %}, and you have your hostname (aka forwarding endpoint). For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-server-to-deploy-your-copilot-agent)."

## Creating a {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Click **New {% data variables.product.prodname_github_app %}**.
1. Under "{% data variables.product.prodname_github_app %} name," enter a name for your app.

    > [!NOTE] The name cannot be longer than 34 characters.
    >
    >Your app's name will be shown in the user interface when your app takes an action. Uppercase letters will be converted to lowercase, with spaces replaced by `-`, and accents ignored. For example, `My APp Näme` would display as `my-app-name`.
    >
    > The name must be unique across {% data variables.product.company_short %}. You cannot use the same name as an existing {% data variables.product.company_short %} account, unless it is your own user or organization name.

1. Optionally, under "Description," type a description of your app. Users and organizations will see this description when they install your app.
1. Under "Homepage URL," enter a URL for your app. You can use:
    * Your app's website URL.
    * The URL of the organization or user that owns the app.
    * The URL of the repository where your app's code is stored, if it is a public repository.
1. Under "Webhook," deselect **Active**.
1. Click **Create {% data variables.product.prodname_github_app %}**.

## Next steps

* [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-agent)
