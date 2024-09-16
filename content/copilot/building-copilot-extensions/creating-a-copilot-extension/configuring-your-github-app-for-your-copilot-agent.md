---
title: Configuring your GitHub App for your Copilot agent
intro: 'Learn how to configure your {% data variables.product.prodname_github_app %} so that it is associated with your {% data variables.product.prodname_copilot_agent_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Configure App for agent
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

Once you have configured your server and created your {% data variables.product.prodname_github_app %}, you need to configure your {% data variables.product.prodname_github_app %} for use with your {% data variables.product.prodname_copilot_short %} agent.

## Prerequisites

* You have configured your server to deploy your {% data variables.product.prodname_copilot_agent_short %}, and you have your hostname (aka forwarding endpoint). For more information, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-server-to-deploy-your-copilot-agent).
* You have created a {% data variables.product.prodname_github_app %} for your {% data variables.product.prodname_copilot_short %} agent. For more information, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension).

## Configuring your {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. To the right of the {% data variables.product.prodname_github_app %} you want to configure for your {% data variables.product.prodname_copilot_extension_short %}, click **Edit**.
1. In the "Identifying and authorizing users" section, under "Callback URL," enter your server's hostname, then click **Save changes**.

    > [!NOTE] Your server's hostname is the forwarding endpoint that you copied from your terminal when you configured your server. For more information, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-server-to-deploy-your-copilot-agent).
    >
    > If you are using an ephemeral domain in ngrok, you will need to update this URL every time you restart your ngrok server.

1. In the left sidebar, click **{% data variables.product.prodname_copilot_short %}**.
1. Under "URL," enter your server's hostname (aka forwarding endpoint) that you copied from your terminal, then click **Save changes**.

    > [!NOTE] If you are using an ephemeral domain in ngrok, you will need to update this URL every time you restart your ngrok server.

1. Your pre-authorization URL is a link on your website that starts the authorization process for your extension. Users will be redirected to this URL when they decide to authorize your extension. If you are using a pre-authorization URL, under "Pre-authorization URL," enter the URL, then click **Save changes**.
1. In the left sidebar, click **Permissions and events**.
1. Expand the "Account permissions" section.
1. In the dropdown menu, to the right of {% data variables.product.prodname_copilot_chat %}, select **Read only**, then click **Save changes**.
1. In your {% data variables.product.prodname_github_app %} settings, in the left sidebar, click **Install App**, then, next to the account you want to install your app on, click **Install**.
{% data reusables.copilot.go-to-copilot-page %}
1. Invoke your extension by typing `@EXTENSION-NAME`, replacing any spaces in the extension name with `-`, then press `Enter`.
1. If this is your first time using the extension, you will be prompted to authenticate. Follow the steps on screen to authenticate your extension.
1. Ask your extension a question in the chat window. For example, `What is the software development lifecycle?`.
