---
title: Using a demo agent
intro: 'Learn about how you can use a demo agent to explore how {% data variables.product.prodname_copilot_extensions_short %} work.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Using a demo agent
type: how_to
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About demo agents

If you're not ready to build your own {% data variables.product.prodname_copilot_agent_short %} from scratch, you can clone and use a demo agent to experiment with {% data variables.product.prodname_copilot_extensions %}. You can use the demo agent as a basis for your own agent, or you can use it to familiarize yourself with the {% data variables.product.prodname_copilot_extensions_short %} development and deployment process.

{% data variables.product.company_short %} provides a few different demo agents that you can use. You can find them in the [copilot-extensions](https://github.com/copilot-extensions) organization.

This article provides instructions for running the Blackbeard demo agent on your local machine, but should be similar for other demo agents.

1. Clone the repository. Run the following command in your terminal (Mac or Linux) or Git Bash (Windows):

    ```shell copy
    git clone https://github.com/copilot-extensions/blackbeard-extension.git
    ```

1. Open the agent repository locally by running the following command in your terminal (Mac or Linux) or Git Bash (Windows):

    ```shell copy
    cd blackbeard-extension
    ```

1. To install the necessary dependencies, run the following command in your terminal (Mac or Linux) or Git Bash (Windows):

    ```shell copy
    npm install
    ```

1. To start your server, run the following command in your terminal (Mac or Linux) or Git Bash (Windows):

    ```shell copy
    npm start
    ```

    > [!NOTE] Keep the terminal window open while you are using your agent.

## Next steps

* [AUTOTITLE](/copilot/building-copilot-extensions/creating-a-copilot-extension/configuring-your-server-to-deploy-your-copilot-agent)
