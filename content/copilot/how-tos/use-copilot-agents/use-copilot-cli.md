---
title: Using GitHub Copilot CLI
shortTitle: Use Copilot CLI
intro: Learn how to use {% data variables.product.prodname_copilot %} from the command line.
product: '{% data reusables.gated-features.copilot-cli %}'
redirect_from:
  - /copilot/how-tos/use-copilot-cli
versions:
  feature: copilot
topics:
  - Copilot
  - CLI
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

The command-line interface (CLI) for {% data variables.product.prodname_copilot %} allows you to use {% data variables.product.prodname_copilot_short %} directly from your terminal. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

{% data reusables.cli.preview-note-cli %}

## Prerequisite

Install {% data variables.copilot.copilot_cli_short %}. See [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli).

## Using {% data variables.copilot.copilot_cli_short %}

1. In your terminal, navigate to a folder that contains code you want to work with.
1. Enter `copilot` to start {% data variables.copilot.copilot_cli_short %}.

   {% data variables.product.prodname_copilot_short %} will ask you to confirm that you trust the files in this folder.

   > [!IMPORTANT]
   > During this {% data variables.copilot.copilot_cli %} session, {% data variables.product.prodname_copilot_short %} may attempt to read, modify, and execute files in and below this folder. You should only proceed if you trust the files in this location. For more information about trusted directories, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli#trusted-directories).

1. Choose one of the options:

   **1. Yes, proceed**:

   {% data variables.product.prodname_copilot_short %} can work with the files in this location for this session only.

   **2. Yes, and remember this folder for future sessions**:

   You trust the files in this folder for this and future sessions. You won't be asked again when you start {% data variables.copilot.copilot_cli_short %} from this folder. Only choose this option if you are sure that it will always be safe for {% data variables.product.prodname_copilot_short %} to work with files in this location.

   **3. No, exit (Esc)**:

   End your {% data variables.copilot.copilot_cli_short %} session.

1. If you are not currently logged in to {% data variables.product.github %}, you'll be prompted to use the `/login` slash command. Enter this command and follow the on-screen instructions to authenticate.
1. Enter a prompt in the CLI.

   This can be a simple chat question, or a request for {% data variables.product.prodname_copilot_short %} to perform a specific task, such as fixing a bug, adding a feature to an existing application, or creating a new application.

   For some examples of prompts, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

1. When {% data variables.product.prodname_copilot_short %} wants to use a tool that could modify or execute files—{% data reusables.cli.tools-needing-approval %}—it will ask you to approve the use of the tool.

   Choose one of the options:

   **1. Yes**:

   Allow {% data variables.product.prodname_copilot_short %} to use this tool. The next time {% data variables.product.prodname_copilot_short %} wants to use this tool, it will ask you to approve it again.

   **2. Yes, and approve TOOL for the rest of the running session**:

   Allow {% data variables.product.prodname_copilot_short %} to use this tool—with any options—without asking again, for the rest of the currently running session. You will have to approve the command again in future sessions.

   Choosing this option is useful for a many tools—such as `chmod`—as it avoids you having to approve similar commands repeatedly in the same session. However, you should be aware of the security implications of this option. Choosing this option for the command `rm`, for example, would allow {% data variables.product.prodname_copilot_short %} to delete any file in or below the current folder without asking for your approval.

   **3. No, and tell Copilot what to do differently (Esc)**:

   {% data variables.product.prodname_copilot_short %} will not run the command. Instead, it ends the current operation and awaits your next prompt. You can tell {% data variables.product.prodname_copilot_short %} to continue the task but using a different approach.

   For example, if you ask {% data variables.product.prodname_copilot_short %} to create a bash script but you do not want to use the script {% data variables.product.prodname_copilot_short %} suggests, you can stop the current operation and enter a new prompt, such as: `Continue the previous task but include usage instructions in the script`.

## Tips

Optimize your experience with {% data variables.copilot.copilot_cli_short %} with the following tips.

### Stop a currently running operation

If you enter a prompt and then decide you want to stop {% data variables.product.prodname_copilot_short %} from completing the task while it is still "Thinking," press <kbd>Esc</kbd>.

### Include a specific file in your prompt

To add a specific file to your prompt, use `@` followed by the relative path to the file. For example: `Explain @config/ci/ci-required-checks.yml` or `Fix the bug in @src/app.js`. This adds the contents of the file to your prompt as context for {% data variables.product.prodname_copilot_short %}.

When you start typing a file path, the matching paths are displayed below the prompt box. Use the arrow keys to select a path and press <kbd>Tab</kbd> to complete the path in your prompt.

### Work with files in a different location

To complete a task, {% data variables.product.prodname_copilot_short %} may need to work with files that are outside the current working directory. If a prompt you have entered in an interactive session requires {% data variables.product.prodname_copilot_short %} to modify a file outside the current location, it will ask you to approve access to the file's directory.

You can also add a trusted directory manually at any time by using the slash command:

```shell
/add-dir /path/to/directory
```

If all of the files you want to work with are in a different location, you can switch the current working directory without starting a new {% data variables.copilot.copilot_cli_short %} session by using the slash command:

```shell
/cwd /path/to/directory
```

### Run shell commands

You can prepend your input with `!` to directly run shell commands, without making a call to the model.

```shell
!git clone https://github.com/github/copilot-cli
```

### Delegate tasks to {% data variables.copilot.copilot_coding_agent %}

The delegate command lets you push your current session to {% data variables.copilot.copilot_coding_agent %} on {% data variables.product.github %}. This lets you hand off work while preserving all the context {% data variables.product.prodname_copilot_short %} needs to complete your task.

You can delegate a task using the slash command, followed by a prompt:

```shell
/delegate complete the API integration tests and fix any failing edge cases
```

{% data variables.product.prodname_copilot_short %} will ask to commit any of your unstaged changes as a checkpoint in a new branch it creates. {% data variables.copilot.copilot_coding_agent %} will open a draft pull request, make changes in the background, and request a review from you.

{% data variables.product.prodname_copilot_short %} will provide a link to the pull request and agent session on {% data variables.product.github %} once the session begins.

### Resume an interactive session

You can return to a previous interactive session, and continue your conversation with {% data variables.product.prodname_copilot_short %}, by using the `--resume` command line option, then choosing the session you want to resume from the list that's displayed. You can quickly resume the most recently closed session by using the `--continue` command line option.

### Use custom instructions

You can enhance {% data variables.product.prodname_copilot_short %}’s performance, by adding custom instructions to the repository you are working in. Custom instructions are natural language descriptions saved in Markdown files in the repository. They are automatically included in prompts you enter while working in that repository. This helps {% data variables.product.prodname_copilot_short %} to better understand the context of your project and how to respond to your prompts.

{% data variables.copilot.copilot_cli_short %} supports:

* Repository-wide instructions in the `.github/copilot-instructions.md` file.
* Path-specific instructions files: `.github/copilot-instructions/**/*.instructions.md`.
* Agent files such as `AGENTS.md`.

For more information, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).

### Use custom agents

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_coding_agent %} that you can tailor to your unique workflows, coding conventions, and use cases. {% data variables.copilot.custom_agents_caps_short %} are defined using Markdown files, called {% data variables.copilot.agent_profiles %}, that specify prompts, tools, and MCP servers.

{% data variables.copilot.copilot_cli_short %} supports loading {% data variables.copilot.custom_agents_short %} from the following locations:

| Type | Location | Scope |
| --- | --- | --- |
| User-level {% data variables.copilot.copilot_custom_agent_short %} | local `~/.copilot/agents` directory | All projects |
| Repository-level {% data variables.copilot.copilot_custom_agent_short %} | `.github/agents` directory in your local and remote repositories | Current project |
| Organization and Enterprise-level {% data variables.copilot.copilot_custom_agent_short %} | `/agents` directory in the `.github-private` repository in an organization or enterprise | All projects under your organization and enterprise account |

In the case of naming conflicts, a system-level agent overrides a repository-level agent, and the repository-level agent would override an organization-level agent.

{% data variables.copilot.custom_agents_caps_short %} can be used in three ways:

* Using the slash command in interactive mode to select from the list of available {% data variables.copilot.custom_agents_short %}:

  ```shell
  /agent
  ```

* Calling out to {% data variables.copilot.copilot_custom_agent_short %} directly in a prompt:

  ```shell
  Use the refactoring agent to refactor this code block 
  ```

  {% data variables.product.prodname_copilot_short %} will automatically infer the agent you want to use.
  
* Specifying the {% data variables.copilot.copilot_custom_agent_short %} you want to use with the command-line option. For example:

  ```shell
  copilot --agent=refactor-agent --prompt "Refactor this code block"
  ```

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

### Add an MCP server

{% data variables.copilot.copilot_cli_short %} comes with the {% data variables.product.github %} MCP server already configured. This MCP server allows you to interact with resources on {% data variables.product.prodname_dotcom_the_website %}—for example, allowing you to merge pull requests from the CLI.

To extend the functionality available to you in {% data variables.copilot.copilot_cli_short %}, you can add more MCP servers:

1. Use the following slash command:

   ```shell
   /mcp add
   ```

1. Fill in the details for the MCP server you want to add, using the <kbd>Tab</kbd> key to move between fields.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the details.

Details of your configured MCP servers are stored in the `mcp-config.json` file, which is located, by default, in the `~/.config` directory. This location can be changed by setting the `XDG_CONFIG_HOME` environment variable. For information about the JSON structure of a server definition, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp#writing-a-json-configuration-for-mcp-servers).

### View context and usage statistics for the current session

You can use the `/usage` slash command to view how many premium requests you've used in the current session, the duration of the session, how many lines of code have been edited, and the breakdown of token usage per model. When you have less than 20% of a model's token limit remaining, {% data variables.copilot.copilot_cli_short %} will display a warning that the context will be truncated when the token limit is reached.

## Find out more

For a complete list of the command line options and slash commands that you can use with {% data variables.copilot.copilot_cli_short %}, do one of the following:

* Enter `?` in the prompt box in an interactive session.
* Enter `copilot help` in your terminal.

For additional information use one of the following commands in your terminal:

* **Configuration settings**:

  `copilot help config`

  You can adjust the configuration settings by editing the `config.json` file, which is located, by default, in the `~/.config` directory. This location can be changed by setting the `XDG_CONFIG_HOME` environment variable.

* **Environment variables** that affect {% data variables.copilot.copilot_cli_short %}:

  `copilot help environment`

* **Available logging levels**:

  `copilot help logging`

* **Permissions** for allowing or denying tool use:

  `copilot help permissions`

{% data reusables.cli.feedback %}
