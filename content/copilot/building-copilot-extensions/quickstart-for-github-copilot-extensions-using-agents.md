---
title: Quickstart for GitHub Copilot Extensions using agents
defaultTool: vscode
intro: 'Build and try out {% data variables.product.github %}''s Blackbeard extension to learn about the development process for {% data variables.product.prodname_copilot_extensions %}.'
versions:
  feature: copilot-extensions
redirect_from:
  - /copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/using-a-demo-agent
  - /copilot/building-copilot-extensions/quickstart-for-github-copilot-extensions
topics:
  - Copilot
shortTitle: Extensions quickstart
---

The [Blackbeard extension](https://github.com/copilot-extensions/blackbeard-extension) is a {% data variables.product.prodname_copilot_extension %} built with a simple agent that responds to requests like a pirate using {% data variables.product.prodname_copilot_short %}'s large language model (LLM) API and special system prompts. This guide uses a simple agent implementation, but the process is similar for skillsets.

This quickstart is designed to help you build and chat with the Blackbeard extension as quickly as possible, so you can develop and test your extension without deploying infrastructure. For production, you'll need to host the application for your agent or skillset's endpoints on a publicly accessible server. To instead learn how to create a new {% data variables.product.prodname_copilot_extension %}, see [AUTOTITLE](/copilot/building-copilot-extensions/setting-up-copilot-extensions).

## 1. Create and install a {% data variables.product.prodname_github_app %}

In the developer settings for your {% data variables.product.github %} account, create a {% data variables.product.prodname_github_app %}. Your {% data variables.product.prodname_github_app %} must have:
* A name
* A homepage URL
* Webhooks deselected

After you create your app, click **Install App** in the sidebar, then install your app on your account.

For detailed instructions, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension#creating-a-github-app).

{% vscode %}

## 2. Clone and host the Blackbeard agent locally

Rather than deploying the Blackbeard agent as a web app, you can host your agent locally for a significantly faster build process.

1. Using the Terminal built into {% data variables.product.prodname_vscode_shortname %}, clone the [`copilot-extensions/blackbeard-extension`](https://github.com/copilot-extensions/blackbeard-extension) repository.
1. In the same Terminal, run `npm install` to install the necessary dependencies, then run `npm start` to start the Blackbeard agent on port 3000.
1. In the "Ports" tab of the {% data variables.product.prodname_vscode_shortname %} panel, click **Forward a port** or **Add port**, then add port 3000.
1. Right-click the port and set the visibility to "Public," then copy the local address.

## 3. Integrate and test the Blackbeard extension

After you set up your {% data variables.product.prodname_github_app %} and Blackbeard agent, you can integrate the agent with your app and test the Blackbeard extension. You need to make the following changes to your {% data variables.product.prodname_github_app %} settings:
* In the "General" settings, in the "Callback URL" field, paste the local address for your agent.
* In the "Permissions & events" settings, grant read-only permissions to {% data variables.product.prodname_copilot_chat_short %}.
* In the "{% data variables.product.prodname_copilot_short %}" settings, set your app type to "Agent," then fill out the remaining fields.

After you update your {% data variables.product.prodname_github_app %} settings, you can start chatting with your extension by typing `@YOUR-EXTENSION-NAME` in the {% data variables.product.prodname_copilot_chat_short %} window, then sending a prompt as normal.

For more detailed instructions, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-agent#configuring-your-github-app).

{% endvscode %}

{% codespaces %}

## 2. Clone and host the Blackbeard agent in a codespace

Rather than deploying the Blackbeard agent as a web app, you can host your agent in a codespace for a significantly faster build process.

1. Navigate to the [`copilot-extensions/blackbeard-extension`](https://github.com/copilot-extensions/blackbeard-extension) repository. Select the **{% octicon "code" aria-hidden="true" %} Code** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Create codespace on main**.
1. To find your new codespace, select the **{% octicon "code" aria-hidden="true" %} Code** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu. Next to your new codespace, select {% octicon "kebab-horizontal" aria-label="Show more actions for codespace" %}, then click **{% octicon "globe" aria-hidden="true" %} Open in Browser**.
1. In the integrated Terminal, run `npm start` to start the Blackbeard agent on port 3000.
1. In the "Ports" tab of the {% data variables.product.prodname_vscode_shortname %} panel, click **Forward a port**, then add port 3000.
1. Right-click the port and set the visibility to "Public," then copy the local address.

## 3. Integrate and test the Blackbeard extension

After you set up your {% data variables.product.prodname_github_app %} and Blackbeard agent, you can integrate the agent with your app and test the Blackbeard extension. You need to make the following changes to your {% data variables.product.prodname_github_app %} settings:
* In the "General" settings, in the "Callback URL" field, paste the forwarded address for your agent.
* In the "Permissions & events" settings, grant read-only permissions to {% data variables.product.prodname_copilot_chat_short %}.
* In the "{% data variables.product.prodname_copilot_short %}" settings, set your app type to "Agent," then fill out the remaining fields.

After you update your {% data variables.product.prodname_github_app %} settings, you can start chatting with your extension by typing `@YOUR-EXTENSION-NAME` in the {% data variables.product.prodname_copilot_chat_short %} window of a supported client or IDE, then sending a prompt as normal. For a list of supported clients and IDEs, see [AUTOTITLE](/copilot/building-copilot-extensions/about-building-copilot-extensions#supported-clients-and-ides).

> [!NOTE] Chatting with {% data variables.product.prodname_copilot_extensions %} in {% data variables.product.prodname_github_codespaces %} is not supported.

For more detailed instructions, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-agent#configuring-your-github-app).

{% endcodespaces %}

{% bash %}

## 2. Clone and start the Blackbeard agent locally

Rather than deploying the Blackbeard agent as a web app, you can host your agent locally for a significantly faster build process.

1. Using your command line application, clone the [`copilot-extensions/blackbeard-extension`](https://github.com/copilot-extensions/blackbeard-extension) repository.
1. Run `npm install` to install the necessary dependencies, then run `npm start` to start the Blackbeard agent on port 3000.

## 3. Expose your local server

To make the Blackbeard agent accessible to the {% data variables.product.prodname_copilot_short %} platform and {% data variables.product.github %}, you need to expose your local server so it's reachable by HTTP requests. You can use any port forwarding or tunneling service to achieve this. For the following steps, we'll use ngrok.

1. Navigate to [ngrok's download page](https://ngrok.com/downloads/), then install the appropriate version of ngrok for your operating system.
1. Navigate to the [ngrok setup and installation page](https://dashboard.ngrok.com/get-started/setup/), then log in or sign up for an ngrok account.
1. To expose your local server, in a new window of your command line application, run the following command:

    ```shell copy
    ngrok http http://localhost:3000
    ```

1. In your command line application, next to "Forwarding," copy the URL that ngrok assigned to your server.

## 4. Integrate and test the Blackbeard extension

To integrate your {% data variables.product.prodname_github_app %} with the Blackbeard agent, you need to make the following changes to your app settings:
* In the "General" settings, in the "Callback URL" field, paste the URL for your exposed server.
* In the "Permissions & events" settings, grant read-only permissions to {% data variables.product.prodname_copilot_chat_short %}.
* In the "{% data variables.product.prodname_copilot_short %}" settings, set your app type to "Agent," then fill out the remaining fields.

After you update your {% data variables.product.prodname_github_app %} settings, you can start chatting with your extension by typing `@YOUR-EXTENSION-NAME` in the {% data variables.product.prodname_copilot_chat_short %} window, then sending a prompt as normal.

For more detailed instructions, see [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-github-app-for-your-copilot-agent#configuring-your-github-app).

{% endbash %}

## Next steps

Now that you have a working {% data variables.product.prodname_copilot_extension %}, you can try building on the Blackbeard agent to experiment with agent development.

To learn about more complex agent implementations, you can also review the following example agents and software development kit (SDK), all of which are available in the [`copilot-extensions`](https://github.com/copilot-extensions) organization:

* [{% data variables.product.prodname_github_models %}](https://github.com/copilot-extensions/github-models-extension): A more complex agent that lets you ask about and interact with various LLMs listed on the {% data variables.product.prodname_marketplace %} through {% data variables.product.prodname_copilot_chat_short %}. The {% data variables.product.prodname_github_models %} agent makes use of function calling.
* [Function Calling](https://github.com/copilot-extensions/function-calling-extension): An example agent written in Go that demonstrates function calling and confirmation dialogs.
* [RAG Extension](https://github.com/copilot-extensions/rag-extension): An example agent written in Go that demonstrates a simple implementation of retrieval augmented generation.
* [Preview SDK](https://github.com/copilot-extensions/preview-sdk.js/tree/main): An SDK that streamlines the development of {% data variables.product.prodname_copilot_extensions_short %} by handling request verification, payload parsing, and response formatting automatically. This SDK allows extension builders to focus more on creating core functionality and less on boilerplate code.
