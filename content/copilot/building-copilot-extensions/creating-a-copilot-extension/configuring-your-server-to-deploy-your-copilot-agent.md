---
title: Configuring your server to deploy your Copilot agent
intro: 'Learn how to deploy your {% data variables.product.prodname_copilot_short %} agent to a server that is accessible to the internet.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Deploy your agent
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

Your {% data variables.product.prodname_copilot_agent_short %} must be hosted on a server that is accessible to the internet. This guide will help you set up a server to run your {% data variables.product.prodname_copilot_agent_short %}. In this guide, we will use [ngrok](https://ngrok.com/) to create a tunnel to your local server, but you could also use a service like [localtunnel](https://localtunnel.github.io/www/) or [serveo](https://serveo.net/).

Alternatively, if you are a {% data variables.product.prodname_codespaces %} user, you can use the built-in {% data variables.product.prodname_codespaces %} port forwarding. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)."

## Prerequisites

* You have created a {% data variables.product.prodname_copilot_agent_short %}. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension)." Alternatively, you can use a demo agent. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/using-a-demo-agent)."

## Configuring your server

1. Visit the [ngrok setup & installation  page](https://dashboard.ngrok.com/get-started/setup/).
1. If you do not yet have an account, follow the instructions on screen to sign up.
1. Under "Agents," ensure the correct operating system is selected.
1. Under "Installation," follow the instructions for your operating system to download and install ngrok.
1. Under "Deploy your app online," selection **Ephemeral domain** or **Static domain**.
1. Run the command provided in your terminal, replacing the port number with the port your agent is configured to run on. For example:

    * For an ephemeral domain:

        ```shell copy
        ngrok http http://localhost:3000
        ```

    * For a static domain:

        ```shell copy
        ngrok http --domain=YOUR-STATIC-DOMAIN.ngrok-free.app 3000
        ```

      > [!NOTE]  The Blackbeard demo extension is configured to run on port 3000 by default.

1. In your terminal, next to "Forwarding," copy the URL that ngrok has assigned to your server. You will need this forwarding endpoint when you are configuring your {% data variables.product.prodname_github_app %}.

    > [!NOTE] Do not copy the `-> http://localhost:XXXX` part of the URL.
    >
    > Keep the terminal window open while you are using your agent.

## Next steps

* [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension)
