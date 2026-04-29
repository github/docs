---
title: Using GitHub Copilot CLI
shortTitle: Overview
intro: Learn how to use {% data variables.product.prodname_copilot %} from the command line.
product: '{% data reusables.gated-features.copilot-cli %}'
redirect_from:
  - /copilot/how-tos/use-copilot-cli
  - /copilot/how-tos/use-copilot-agents/use-copilot-cli
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
  - Build with Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

The command-line interface (CLI) for {% data variables.product.prodname_copilot %} allows you to use {% data variables.product.prodname_copilot_short %} directly from your terminal. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

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

   Allow {% data variables.product.prodname_copilot_short %} to use this tool—with any options—without asking again, for the rest of the currently running session. Any pending parallel permission requests of the same type will be auto-approved. You will have to approve the command again in future sessions.

   Choosing this option is useful for many tools—such as `chmod`—as it avoids you having to approve similar commands repeatedly in the same session. However, be aware of the security implications of this option. For example, choosing this option for the command `rm` would allow {% data variables.product.prodname_copilot_short %} to delete any file in the current directory or its subdirectories without asking for your approval.

   **3. No, and tell Copilot what to do differently (Esc)**:

   {% data variables.product.prodname_copilot_short %} will not run the command. Instead, it ends the current operation and awaits your next prompt. You can tell {% data variables.product.prodname_copilot_short %} to continue the task but using a different approach.

   For example, if you ask {% data variables.product.prodname_copilot_short %} to create a bash script but you do not want to use the script {% data variables.product.prodname_copilot_short %} suggests, you can stop the current operation and enter a new prompt, such as: `Continue the previous task but include usage instructions in the script`.

   When you reject a tool permission request, you can also give {% data variables.product.prodname_copilot_short %} inline feedback about the rejection so it can adapt its approach without stopping entirely.

## Tips

Optimize your experience with {% data variables.copilot.copilot_cli_short %} with the following tips.

### Stop a currently running operation

If you enter a prompt and then decide you want to stop {% data variables.product.prodname_copilot_short %} from completing the task while it is still "Thinking," press <kbd>Esc</kbd>.

### Use plan mode

Plan mode lets you collaborate with {% data variables.product.prodname_copilot_short %} on an implementation plan before any code is written. Press <kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle in and out of plan mode.

### Include a specific file in your prompt

To add a specific file to your prompt, use `@` followed by the relative path to the file. For example: `Explain @config/ci/ci-required-checks.yml` or `Fix the bug in @src/app.js`. This adds the contents of the file to your prompt as context for {% data variables.product.prodname_copilot_short %}.

When you start typing a file path, the matching paths are displayed below the prompt box. Use the arrow keys to select a path and press <kbd>Tab</kbd> to complete the path in your prompt.

### Work with files in a different location

To complete a task, {% data variables.product.prodname_copilot_short %} may need to work with files that are outside the current working directory. If a prompt you have entered in an interactive session requires {% data variables.product.prodname_copilot_short %} to modify a file outside the current location, it will ask you to approve access to the file's directory.

You can also add a trusted directory manually at any time by using the slash command:

```shell
/add-dir /path/to/directory
```

If all of the files you want to work with are in a different location, you can switch the current working directory without starting a new {% data variables.copilot.copilot_cli_short %} session by using either the `/cwd` or `/cd` slash commands:

```shell
/cwd /path/to/directory
```

### Run shell commands

You can prepend your input with `!` to directly run shell commands, without making a call to the model.

```shell
!git clone https://github.com/github/copilot-cli
```

### Resume an interactive session

You can use the `--resume` command-line option or the `/resume` slash command to select and resume an interactive CLI session, allowing you to pick up right where you left off, with the saved context. You can kick off a {% data variables.copilot.copilot_cloud_agent %} session on {% data variables.product.github %}, and then use {% data variables.copilot.copilot_cli %} to bring that session to your local environment.

> [!TIP]
> To quickly resume the most recently closed local session, enter this in your terminal:
>
> ```shell
> copilot --continue
> ```

### Use custom instructions

You can enhance {% data variables.product.prodname_copilot_short %}’s performance, by adding custom instructions to the repository you are working in. Custom instructions are natural language descriptions saved in Markdown files in the repository. They are automatically included in prompts you enter while working in that repository. This helps {% data variables.product.prodname_copilot_short %} to better understand the context of your project and how to respond to your prompts.

{% data variables.copilot.copilot_cli_short %} supports:

* Repository-wide instructions in the `.github/copilot-instructions.md` file.
* Path-specific instructions files: `.github/instructions/**/*.instructions.md`.
* Agent files such as `AGENTS.md`.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/add-custom-instructions).

### Use {% data variables.copilot.custom_agents_short %}

A {% data variables.copilot.copilot_custom_agent_short %} is a specialized version of {% data variables.product.prodname_copilot_short %}. {% data variables.copilot.custom_agents_caps_short %} help {% data variables.product.prodname_copilot_short %} handle unique workflows, particular coding conventions, and specialist use cases.

{% data variables.copilot.copilot_cli_short %} includes a default group of {% data variables.copilot.custom_agents_short %} for common tasks:

<table>
  <thead>
    <tr>
      <th style="width:20%">Agent</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Explore</td>
      <td>Performs quick codebase analysis, allowing you to ask questions about your code without adding to your main context.</td>
    </tr>
    <tr>
      <td>Task</td>
      <td>Executes commands such as tests and builds, providing brief summaries on success and full output on failure.</td>
    </tr>
    <tr>
      <td>General-purpose</td>
      <td>Handles complex, multi-step tasks that require the full toolset and high-quality reasoning, running in a separate context to keep your main conversation clearly focused.</td>
    </tr>
    <tr>
      <td>Code-review</td>
      <td>Reviews changes with a focus on surfacing only genuine issues, minimizing noise.</td>
    </tr>
  </tbody>
</table>

The AI model being used by the CLI can choose to delegate a task to a subsidiary subagent process, that operates using a {% data variables.copilot.copilot_custom_agent_short %} with specific expertise, if it judges that this would result in the work being completed more effectively. The model may equally choose to handle the work directly in the main agent.

You can define your own {% data variables.copilot.custom_agents_short %} using Markdown files, called {% data variables.copilot.agent_profiles %}, that specify what expertise the agent should have, what tools it can use, and any specific instructions for how it should respond.

You can define {% data variables.copilot.custom_agents_short %} at the user, repository, or organization/enterprise level:

| Type | Location | Scope |
| --- | --- | --- |
| User-level {% data variables.copilot.copilot_custom_agent_short %} | local `~/.copilot/agents` directory | All projects |
| Repository-level {% data variables.copilot.copilot_custom_agent_short %} | `.github/agents` directory in your local and remote repositories | Current project |
| Organization and Enterprise-level {% data variables.copilot.copilot_custom_agent_short %} | `/agents` directory in the `.github-private` repository in an organization or enterprise | All projects under your organization and enterprise account |

In the case of naming conflicts, a system-level agent overrides a repository-level agent, and the repository-level agent would override an organization-level agent.

{% data variables.copilot.custom_agents_caps_short %} can be used in three ways:

* Using the slash command in the CLI's interactive interface to select from the list of available {% data variables.copilot.custom_agents_short %}:

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

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents).

### Use skills

You can create skills to enhance the ability of {% data variables.product.prodname_copilot_short %} to perform specialized tasks with instructions, scripts, and resources.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

### Add an MCP server

{% data variables.copilot.copilot_cli_short %} comes with the {% data variables.product.github %} MCP server already configured. This MCP server allows you to interact with resources on {% data variables.product.prodname_dotcom_the_website %}—for example, allowing you to merge pull requests from the CLI.

To extend the functionality available to you in {% data variables.copilot.copilot_cli_short %}, you can add more MCP servers:

1. Use the following slash command:

   ```shell
   /mcp add
   ```

1. Fill in the details for the MCP server you want to add, using the <kbd>Tab</kbd> key to move between fields.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the details.

Details of your configured MCP servers are stored in the `mcp-config.json` file, which is located, by default, in the `~/.copilot` directory. This location can be changed by setting the `COPILOT_HOME` environment variable. For information about the JSON structure of a server definition, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp#writing-a-json-configuration-for-mcp-servers).

### Context management

{% data variables.copilot.copilot_cli_short %} provides several slash commands to help you monitor and manage your context window:

* `/usage`: Lets you view your session statistics, including:
  * The amount of premium requests used in the current session
  * The session duration
  * The total lines of code edited
  * A breakdown of token usage per model

* `/context`: Provides a visual overview of your current token usage
* `/compact`: Manually compresses your conversation history to free up context space

{% data variables.copilot.copilot_cli %} automatically compresses your history in the background when your conversation approaches 95% of the token limit, without interrupting your workflow.

### Enable all permissions

For situations where you trust {% data variables.product.prodname_copilot_short %} to run freely, you can use the `--allow-all` or `--yolo` flags to enable all permissions at once.

### Toggle reasoning visibility

Press <kbd>Ctrl</kbd>+<kbd>T</kbd> to show or hide the model's reasoning process while it generates a response. This setting persists across sessions, allowing you to observe how {% data variables.product.prodname_copilot_short %} works through complex problems.

## Find out more

For a complete list of the command line options and slash commands that you can use with {% data variables.copilot.copilot_cli_short %}, do one of the following:

* Enter `?` in the prompt box in an interactive session.
* Enter `copilot help` in your terminal.

For additional information use one of the following commands in your terminal:

* **Configuration settings**:

  `copilot help config`

  You can adjust the configuration settings by editing the `settings.json` file, which is located, by default, in the `~/.copilot` directory. This location can be changed by setting the `COPILOT_HOME` environment variable.

* **Environment variables** that affect {% data variables.copilot.copilot_cli_short %}:

  `copilot help environment`

* **Available logging levels**:

  `copilot help logging`

* **Permissions** for allowing or denying tool use:

  `copilot help permissions`

{% data reusables.cli.feedback %}

## Next steps

{% data variables.copilot.copilot_cli_short %} can operate as a conversational assistant, answering questions and helping you write code interactively. Beyond chat, {% data variables.copilot.copilot_cli_short %} supports a range of agentic modes that allow you to delegate tasks with greater autonomy.

You can work with agents in {% data variables.copilot.copilot_cli_short %} to support a full task lifecycle, from delegating work to reviewing results:

* **Delegate tasks autonomously**: Run {% data variables.copilot.copilot_cli_short %} in autopilot mode to complete multi-step tasks without requiring approval at each step. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca).
* **Invoke custom agents**: Invoke specialized agents tailored to specific tasks, such as code review, documentation, or security audits. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents).
* **Steer agents**: Guide and refine agent behavior during task execution to keep work on track. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/steer-agents).
* **Request a code review**: Use {% data variables.copilot.copilot_cli_short %} to get an AI-powered review of your code changes. See [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/agentic-code-review).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/cli-best-practices)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/acp-server)
