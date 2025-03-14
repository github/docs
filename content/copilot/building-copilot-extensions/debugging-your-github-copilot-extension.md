---
title: Debugging your GitHub Copilot Extension
intro: 'Learn how to debug your {% data variables.product.prodname_copilot_extension %} from the command line before you publish it.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Debug Copilot Extension
---

With the debug tool for {% data variables.product.prodname_copilot_extensions_short %}, you can chat with your {% data variables.product.prodname_copilot_agent_short %} from the command line, then view detailed logs as your agent generates a response. You can pass several flags to the tool, with the most important flags being:
* The `url` flag, which contains the URL to access your {% data variables.product.prodname_copilot_agent_short %}. This is the only required flag to start the tool.
* The `log-level` flag, which determines the level of visibility you have into your {% data variables.product.prodname_copilot_agent_short %}'s process for generating a response. The available log levels are `DEBUG`, `NONE`, and `TRACE`, and the tool uses `DEBUG` by default.
* The `token` flag, which must contain a {% data variables.product.pat_v2 %} with read access to {% data variables.product.prodname_copilot_chat_short %} if your {% data variables.product.prodname_copilot_agent_short %} calls the {% data variables.product.prodname_copilot_short %} LLM. If your agent calls a different LLM, you don't need to use this flag.

## Prerequisites

To use the debug tool, you need to have the {% data variables.product.prodname_cli %} installed on your machine. You can install the {% data variables.product.prodname_cli %} in one of two ways:
* From the command line using a package manager. For example, to install the {% data variables.product.prodname_cli %} with Homebrew, paste the following command to the command line, then follow the prompts:

    ```bash copy
    brew install gh
    ```

* From the [{% data variables.product.prodname_cli %} releases page](https://github.com/cli/cli/releases/tag/v2.56.0)

## Debugging your {% data variables.product.prodname_copilot_extension_short %} with the CLI

1. Optionally, to prepare to debug a specific server-sent event (SSE), add some code to your {% data variables.product.prodname_copilot_agent_short %} that sends an SSE when a prompt contains a certain keyword.

    > [!NOTE] The debug tool does not handle the payload verification process. To validate your SSEs, you need to temporarily disable payload verification for local testing, then re-enable it after you have successfully tested your extension.

1. On the command line, start your {% data variables.product.prodname_copilot_agent_short %}.
1. To authenticate with the {% data variables.product.prodname_cli %} {% data variables.product.prodname_oauth_app %}, in a new window of your command line application, paste the following command and follow the prompts:

    ```bash copy
    gh auth login --web -h github.com
    ```

1. In the same window, to install the debug tool, paste the following command:

    ```bash copy
    gh extension install github.com/copilot-extensions/gh-debug-cli
    ```

1. Optionally, for a list of available flags and their descriptions, paste the following command to the command line:

    ```bash copy
    gh debug-cli -h
    ```

1. Optionally, set environment variables for each flag you want to use. Environment variables allow you to set a constant value for a flag rather than passing a value in each time you run the debug tool. For example, if you are using the Blackbeard extension to test the debug tool, you can create an environment variable for the agent URL as follows:

    ```bash copy
    export URL="http://localhost:3000"
    ```

    > [!NOTE] To set an environment variable for a flag, you must use the name of the flag in all caps.

1. To start the debug tool, paste the following command to the command line, adding any flags you want to use:

    ```bash copy
    gh debug-cli
    ```

    The only required flag is the `url` flag, but you will likely want to use additional flags like `log-level` and `token`.

    Once the debug tool is running, you should see a message that reads "Start typing to chat with your assistant...".

1. To interact with your agent, enter a prompt on the command line. The output will vary based on the log level you chose in the previous step, with the `DEBUG` and `TRACE` log levels providing more detailed information.

    > [!TIP] If you are debugging an SSE, send a prompt containing the keyword you specified in your {% data variables.product.prodname_copilot_agent_short %} to trigger the SSE, then analyze the output in your command line application.
