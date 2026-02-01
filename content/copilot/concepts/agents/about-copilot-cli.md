---
title: About GitHub Copilot CLI
shortTitle: Copilot CLI
allowTitleToDifferFromFilename: true
intro: 'Find out about using {% data variables.product.prodname_copilot_short %} from the command line.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category: 
  - Learn about Copilot
---

## Introduction

The command-line interface (CLI) for {% data variables.product.prodname_copilot %} allows you to use {% data variables.product.prodname_copilot_short %} directly from your terminal. You can use it to answer questions, write and debug code, and interact with {% data variables.product.prodname_dotcom_the_website %}. For example, you can ask {% data variables.product.prodname_copilot_short %} to make some changes to a project and create a pull request.

{% data variables.copilot.copilot_cli %} gives you quick access to a powerful AI agent, without having to leave your terminal. It can help you complete tasks more quickly by working on your behalf, and you can work iteratively with {% data variables.copilot.copilot_cli %} to build the code you need.

{% data reusables.cli.preview-note-cli %}

## Supported operating systems

* Linux
* macOS
* Windows from within Powershell and [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/about)

For installation instructions, see [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli).

## Modes of use

{% data variables.copilot.copilot_cli %} can be used in three modes:
* **Interactive mode**: Start an interactive session by using the `copilot` command. This is the default mode for working with the CLI.

  In this mode, you can prompt {% data variables.product.prodname_copilot_short %} to answer a question, or perform a task. You can react to {% data variables.product.prodname_copilot_short %}'s responses in the same session.

  ![Screenshot of the Welcome message in the interactive mode of {% data variables.product.prodname_copilot_short %}.](/assets/images/help/copilot/copilot-cli-welcome.png)

* **Plan mode**: Press <kbd>Shift</kbd>+<kbd>Tab</kbd> to cycle in and out of plan mode. In plan mode, {% data variables.product.prodname_copilot_short %} analyzes your request, asks clarifying questions to understand scope and requirements, and builds a structured implementation plan before writing any code. This helps you catch misunderstandings before any code is written, and stay in control of complex, multi-step tasks.

* **Programmatic mode**: You can also pass the CLI a single prompt directly on the command line. You do this by using the `-p` or `--prompt` command-line option. To allow {% data variables.product.prodname_copilot_short %} to modify and execute files you should also use one of the approval options (see [Allowing tools to be used without manual approval](#allowing-tools-to-be-used-without-manual-approval) later in this article). For example:

  ```bash copy
  copilot -p "Show me this week's commits and summarize them" --allow-tool 'shell(git)'
  ```

  Alternatively, you can use a script to output command-line options and pipe this to `copilot`. For example:

  ```bash copy
  ./script-outputting-options.sh | copilot
  ```

> [!CAUTION]
> If you use an automatic approval option such as `--allow-all-tools`, {% data variables.product.prodname_copilot_short %} has the same access as you do to files on your computer, and can run any shell commands that you can run, without getting your prior approval. See [Security considerations](#security-considerations), later in this article.

## Use cases for {% data variables.copilot.copilot_cli %}

The following sections provide examples of tasks you can complete with {% data variables.copilot.copilot_cli %}.

### Local tasks

* From within a project directory you can ask {% data variables.product.prodname_copilot_short %} to make a change to the code in the project. For example:

  `Change the background-color of H1 headings to dark blue`

  {% data variables.product.prodname_copilot_short %} finds the CSS file where H1 headings are defined and changes the color value.

* Ask {% data variables.product.prodname_copilot_short %} to tell you about changes to a file:

  `Show me the last 5 changes made to the CHANGELOG.md file. Who changed the file, when, and give a brief summary of the changes they made`

* Use {% data variables.product.prodname_copilot_short %} to help you improve the code, or documentation, in your project.

  * `Suggest improvements to content.js`

  * `Rewrite the readme in this project to make it more accessible to newcomers`

* Use {% data variables.product.prodname_copilot_short %} to help you perform Git operations.

  * `Commit the changes to this repo`

  * `Revert the last commit, leaving the changes unstaged`

* Ask {% data variables.product.prodname_copilot_short %} to create an application from scratch—for example, as a proof of concept.

  `Use the create-next-app kit and tailwind CSS to create a next.js app. The app should be a dashboard built with data from the GitHub API. It should track this project's build success rate, average build duration, number of failed builds, and automated test pass rate. After creating the app, give me easy to follow instructions on how to build, run, and view the app in my browser.`

* Ask {% data variables.product.prodname_copilot_short %} to explain why a change it made is not working as expected, or tell {% data variables.product.prodname_copilot_short %} to fix a problem with the last change it made. For example:

  `You said: "The application is now running on http://localhost:3002 and is fully functional!" but when I browse to that URL I get "This site can't be reached"`

### Tasks involving {% data variables.product.prodname_dotcom_the_website %}

* Fetch and display details about your work from {% data variables.product.prodname_dotcom_the_website %}.

  * `List my open PRs`

    This lists your open pull requests from any repository on {% data variables.product.github %}. For more specific results, include the repository name in your prompt:

  * `List all open issues assigned to me in OWNER/REPO`

* Ask {% data variables.product.prodname_copilot_short %} to work on an issue:

  `I've been assigned this issue: https://github.com/octo-org/octo-repo/issues/1234. Start working on this for me in a suitably named branch.`

* Ask {% data variables.product.prodname_copilot_short %} to make file changes and raise a pull request on {% data variables.product.prodname_dotcom_the_website %}.

  * `In the root of this repo, add a Node script called user-info.js that outputs information about the user who ran the script. Create a pull request to add this file to the repo on {% data variables.product.github %}.`

  * `Create a PR that updates the README at https://github.com/octo-org/octo-repo, changing the subheading "How to run" to "Example usage"`

  Copilot creates a pull request on {% data variables.product.prodname_dotcom_the_website %}, on your behalf. You are marked as the pull request author.

* Ask {% data variables.product.prodname_copilot_short %} to create an issue for you on {% data variables.product.prodname_dotcom_the_website %}.

  ``Raise an improvement issue in octo-org/octo-repo. In src/someapp/somefile.py the `file = open('data.txt', 'r')` block opens a file but never closes it.``

* Ask {% data variables.product.prodname_copilot_short %} to check the code changes in a pull request.

  `Check the changes made in PR https://github.com/octo-org/octo-repo/pull/57575. Report any serious errors you find in these changes.`

   Copilot responds in the CLI with a summary of any problems it finds.

* Manage pull requests from {% data variables.copilot.copilot_cli %}.

  * `Merge all of the open PRs that I've created in octo-org/octo-repo`

  * `Close PR #11 on octo-org/octo-repo`

* Find specific types of issues.

  `Use the {% data variables.product.github %} MCP server to find good first issues for a new team member to work on from octo-org/octo-repo`

  > [!NOTE]
  > If you know that a specific MCP server can achieve a particular task, then specifying it in your prompt can help {% data variables.product.prodname_copilot_short %} to deliver the results you want.

* Find specific {% data variables.product.prodname_actions %} workflows.

  `List any Actions workflows in this repo that add comments to PRs`

* Create a {% data variables.product.prodname_actions %} workflow.

  `Branch off from main and create a {% data variables.product.prodname_actions %} workflow that will run on pull requests, or can be run manually. The workflow should run eslint to check for problems in the changes made in the PR. If warnings or errors are found these should be shown as messages in the diff view of the PR. I want to prevent code with errors from being merged into main so, if any errors are found, the workflow should cause the PR check to fail. Push the new branch and create a pull request.`

## Steering the conversation

You can interact with {% data variables.product.prodname_copilot_short %} while it's thinking to steer the conversation:

* **Enqueue additional messages**: Send follow-up messages to steer the conversation in a different direction, or queue additional instructions for {% data variables.product.prodname_copilot_short %} to process after it finishes its current response. This makes conversations feel more natural and keeps you in control.
* **Inline feedback on rejection**: When you reject a tool permission request, you can give {% data variables.product.prodname_copilot_short %} inline feedback about the rejection so it can adapt its approach without stopping entirely. This makes the conversation flow more naturally when you want to guide {% data variables.product.prodname_copilot_short %} away from certain actions.

## Automatic context management

{% data variables.copilot.copilot_cli %} automatically manages your conversation context:

* **Auto-compaction**: When your conversation approaches 95% of the token limit, {% data variables.product.prodname_copilot_short %} automatically compresses your history in the background without interrupting your workflow. This enables virtually infinite sessions.
* **Manual control**: Use `/compact` to manually compress context anytime. Press <kbd>Escape</kbd> to cancel if you change your mind.
* **Visualize usage**: The `/context` command shows a detailed token usage breakdown so you can understand how your context window is being used.

## Customizing {% data variables.copilot.copilot_cli %}

You can customize {% data variables.copilot.copilot_cli %} in a number of ways:

* **Custom instructions**: Custom instructions allow you to give {% data variables.product.prodname_copilot_short %} additional context on your project and how to build, test and validate its changes. All custom instruction files now combine instead of using priority-based fallbacks. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-instructions).
* **Model Context Protocol (MCP) servers**: MCP servers allow you to give {% data variables.product.prodname_copilot_short %} access to different data sources and tools. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli#add-an-mcp-server).
* **{% data variables.copilot.custom_agents_caps_short %}**: {% data variables.copilot.custom_agents_caps_short %} allow you to create different specialized versions of {% data variables.product.prodname_copilot_short %} for different tasks. For example, you could customize {% data variables.product.prodname_copilot_short %} to be an expert frontend engineer following your team's guidelines. {% data variables.copilot.copilot_cli %} includes specialized {% data variables.copilot.custom_agents_short %} that it automatically delegates common tasks to. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents).
* **Hooks**: Hooks allow you to execute custom shell commands at key points during agent execution, enabling you to add validation, logging, security scanning, or workflow automation. See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-hooks).
* **Skills**: Skills allow you to enhance the ability of {% data variables.product.prodname_copilot_short %} to perform specialized tasks with instructions, scripts, and resources. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).
* **{% data variables.copilot.copilot_memory %}**: {% data variables.copilot.copilot_memory %} allows {% data variables.product.prodname_copilot_short %} to build a persistent understanding of your repository by storing "memories", which are pieces of information about coding conventions, patterns, and preferences that {% data variables.product.prodname_copilot_short %} deduces as it works. This reduces the need to repeatedly explain context in your prompts and makes future sessions more productive. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## Security considerations

When you use {% data variables.copilot.copilot_cli_short %}, {% data variables.product.prodname_copilot_short %} can perform tasks on your behalf, such as executing or modifying files, or running shell commands.

You should therefore always keep security considerations in mind when using {% data variables.copilot.copilot_cli_short %}, just as you would when working directly with files yourself, or running commands directly in your terminal. You should always review suggested commands carefully when {% data variables.copilot.copilot_cli_short %} requests your approval.

### Trusted directories

When you start a {% data variables.copilot.copilot_cli %} session, you'll be asked to confirm that you trust the files in, and below, the directory from which you launched the CLI.

> [!WARNING]
> * You should only launch {% data variables.copilot.copilot_cli_short %} from directories that you trust. You should not use {% data variables.copilot.copilot_cli_short %} in directories that may contain executable files you can't be sure you trust. Similarly, if you launch the CLI from a directory that contains sensitive or confidential data, or files that you don't want to be changed, you could inadvertently expose those files to risk. Typically, you should not launch {% data variables.copilot.copilot_cli_short %} from your home directory.
> * Scoping of permissions is heuristic and {% data variables.product.company_short %} does not guarantee that all files outside trusted directories will be protected. See [Risk mitigation](#risk-mitigation) later in this article.

You can choose to trust the current directory for:

* The currently running session only
* This and future sessions

If you choose to trust the directory for future sessions, the trusted directory prompt will not be displayed again. You should only choose this second option if you are sure that this location will always be a safe place for {% data variables.product.prodname_copilot_short %} to operate.

You can edit the list of permanently trusted directories by amending the contents of the `trusted_folders` array in the CLI's `config.json` file. This is located, by default, in the `~/.copilot` directory. You can change this location by setting the `XDG_CONFIG_HOME` environment variable.

### Allowed tools

The first time that {% data variables.product.prodname_copilot_short %} needs to use a tool that could be used to modify or execute a file—{% data reusables.cli.tools-needing-approval %}—it will ask you whether you want to allow it to use that tool.

Typically, you can choose from three options:

```text
1. Yes
2. Yes, and approve TOOL for the rest of the running session
3. No, and tell Copilot what to do differently (Esc)
```

**Option 1** allows {% data variables.product.prodname_copilot_short %} to run this particular command, this time only. The next time it needs to use this tool, it will ask you again.

**Option 2** allows {% data variables.product.prodname_copilot_short %} to use this tool again, without asking you for permission, for the duration of the currently running session. It will ask for your approval again in new sessions, or if you resume the current session in the future. If you choose this option, you are allowing {% data variables.product.prodname_copilot_short %} to use this tool in any way it thinks is appropriate. For example, if {% data variables.product.prodname_copilot_short %} asks you to allow it to run the command `rm ./this-file.txt`, and you choose option 2, then {% data variables.product.prodname_copilot_short %} can run any `rm` command (for example, `rm -rf ./*`) during the current run of this session, without asking for your approval.

**Option 3** cancels the proposed command and allows you to tell {% data variables.product.prodname_copilot_short %} to try a different approach.

#### Allowing tools to be used without manual approval

There are three command-line options that you can use for either interactive or programmatic mode to determine tools that {% data variables.product.prodname_copilot_short %} can use without asking for your approval:

* **`--allow-all-tools`**

  Allows {% data variables.product.prodname_copilot_short %} to use any tool without asking for your approval.

  For example, you can use this option with programmatic mode to allow the CLI to run any command. For example:

  ```shell
  copilot -p "Revert the last commit" --allow-all-tools
  ```

* **`--deny-tool`**

  Prevents {% data variables.product.prodname_copilot_short %} from using a specific tool.

  This option takes precedence over the `--allow-all-tools` and `--allow-tool` options.

* **`--allow-tool`**

  Allows {% data variables.product.prodname_copilot_short %} to use a specific tool without asking for your approval.

#### Using the approval options

The `--deny-tool` and `--allow-tool` options require one of the following arguments:

* `'shell(COMMAND)'`

  For example, `copilot --deny-tool 'shell(rm)'` prevents {% data variables.product.prodname_copilot_short %} from using any `rm` command.

  For `git` and `gh` commands, you can specify a particular first-level subcommand to allow or deny. For example:

  ```shell
  copilot --deny-tool 'shell(git push)'
  ```

  The tool specification is optional. For example, `copilot --allow-tool 'shell'` allows {% data variables.product.prodname_copilot_short %} to use any shell command without individual approval.

* `'write'`

  This argument allows or denies tools—other than shell commands—permission to modify files.

  For example, `copilot --allow-tool 'write'` allows {% data variables.product.prodname_copilot_short %} to edit files without your individual approval.

* `'MCP_SERVER_NAME'`

  This argument allows or denies tools from the specified MCP server, where `MCP_SERVER_NAME` is the name of an MCP server that you have configured. Tools from the server are specified in parentheses, using the tool name that is registered with the MCP server. Using the server name without specifying a tool allows or denies all tools from that server.

  For example, `copilot --deny-tool 'My-MCP-Server(tool_name)'` prevents {% data variables.product.prodname_copilot_short %} from using the tool called `tool_name` from the MCP server called `My-MCP-Server`.

  You can find an MCP server's name by entering `/mcp` in the interactive mode of {% data variables.copilot.copilot_cli_short %} and selecting the server from the list that's displayed.

#### Combining approval options

You can use a combination of approval options to determine exactly which tools {% data variables.product.prodname_copilot_short %} can use without asking for your approval.

For example, to prevent {% data variables.product.prodname_copilot_short %} from using the `rm` and `git push` commands, but automatically allow all other tools, use:

```shell
copilot --allow-all-tools --deny-tool 'shell(rm)' --deny-tool 'shell(git push)'
```

To prevent {% data variables.product.prodname_copilot_short %} from using the tool `tool_name` from the MCP server named `My-MCP-Server`, but allow all other tools from that server to be used without individual approval, use:

```shell
copilot --allow-tool 'My-MCP-Server' --deny-tool 'My-MCP-Server(tool_name)'
```

#### Security implications of automatic tool approval

It's important to be aware of the security implications of using the approval command-line options. These options allow {% data variables.product.prodname_copilot_short %} to execute commands needed to complete your request, without giving you the opportunity to review and approve those commands before they are run. While this streamlines workflows, and allows headless operation of the CLI, it increases the risk of unintended actions being taken that might result in data loss or corruption, or other security issues.

### Risk mitigation

You can mitigate the risks associated with using the automatic approval options by using {% data variables.copilot.copilot_cli_short %} in a restricted environment, such as a virtual machine, container, or dedicated system, without internet access. This confines any potential damage that could occur when allowing {% data variables.product.prodname_copilot_short %} to execute commands that you have not reviewed and verified.

## Model usage

The default model used by {% data variables.copilot.copilot_cli %} is {% data variables.copilot.copilot_claude_sonnet_45 %}. {% data variables.product.github %} reserves the right to change this model.

You can change the model used by {% data variables.copilot.copilot_cli %} by using the `/model` slash command or the `--model` command-line option. Enter this command, then select a model from the list.

Each time you submit a prompt to {% data variables.product.prodname_copilot_short %} in {% data variables.copilot.copilot_cli_short %}'s interactive mode, and each time you use {% data variables.copilot.copilot_cli_short %} in programmatic mode, your monthly quota of {% data variables.product.prodname_copilot_short %} premium requests is reduced by one, multiplied by the multiplier shown in parentheses in the model list. For example, `Claude Sonnet 4.5 (1x)` indicates that with this model each time you submit a prompt your quota of premium requests is reduced by one. For information about premium requests, see [AUTOTITLE](/copilot/concepts/billing/copilot-requests).

{% data reusables.cli.feedback %}

## Further reading

* [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli)
* [AUTOTITLE](/enterprise-cloud@latest/copilot/responsible-use/copilot-cli)
