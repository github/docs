---
title: GitHub Copilot CLI programmatic reference
shortTitle: CLI programmatic reference
intro: 'Find options for running {% data variables.copilot.copilot_cli_short %} programmatically.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
docsTeamMetrics:
  - copilot-cli
---

In addition to running {% data variables.copilot.copilot_cli_short %} interactively, you can also pass a prompt directly to the CLI in a single command, without entering an interactive session. This allows you to use {% data variables.product.prodname_copilot_short %} programmatically in scripts, CI/CD pipelines, and automation workflows. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/run-cli-programmatically).

This article describes command-line options and environment variables that are particularly relevant when running {% data variables.copilot.copilot_cli_short %} programmatically.

To see a complete list of the available options, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#command-line-options) or enter the following command in your terminal:

```shell copy
copilot help
```

## Command line options

There are a number of command-line options that are particularly useful when running {% data variables.copilot.copilot_cli_short %} programmatically.

| Option | Description |
|--------|-------------|
| `-p PROMPT`                   | Execute a prompt in non-interactive mode. The CLI runs the prompt and exits when done. |
| `-s`                          | Suppress stats and decoration, outputting only the agent's response. Ideal for piping output in scripts. |
| `--add-dir=DIRECTORY`         | Add a directory to the allowed-paths list. This can be used multiple times to add multiple directories. Useful when the agent needs to read/write outside the current working directory. |
| `--agent=AGENT`               | Specify a {% data variables.copilot.copilot_custom_agent_short %} to use. |
| `--allow-all` (or `--yolo`)   | Allow the CLI all permissions. Equivalent to `--allow-all-tools --allow-all-paths --allow-all-urls`. |
| `--allow-all-paths`           | Disable file-path verification entirely. Simpler alternative to `--add-dir` when path restrictions aren't needed. |
| `--allow-all-tools`           | Allow every tool to run without explicit permission for each tool. |
| `--allow-all-urls`            | Allow access to all URLs without explicit permission for each URL. |
| `--allow-tool=TOOL ...`       | Selectively grant permission for a specific tool. For multiple tools, use a quoted, comma-separated list. |
| `--allow-url=URL ...`         | Allow the agent to fetch a specific URL or domain. Useful when a workflow needs web access to known endpoints. For multiple URLs, use a quoted, comma-separated list. |
| `--deny-tool=TOOL ...`        | Deny a specific tool. Useful for restricting what the agent can do in a locked-down workflow. For multiple tools, use a quoted, comma-separated list. |
| `--model=MODEL`               | Choose the AI model (for example, `gpt-5.2` or `claude-sonnet-4.6`). Useful for pinning a model in reproducible workflows. See [Choosing a model](#choosing-a-model) below. |
| `--no-ask-user`               | Prevent the agent from pausing to seek additional user input. |
| `--secret-env-vars=VAR ...`   | An environment variable whose value you want redacted in output. For multiple variables, use a quoted, comma-separated list. Essential for preventing secrets being exposed in logs. The values in the `GITHUB_TOKEN` and `COPILOT_GITHUB_TOKEN` environment variables are redacted by default. |
| `--share=PATH`                | Export the session transcript to a markdown file after non-interactive completion (defaults to `./copilot-session-<ID>.md`). Useful for auditing or archiving what the agent did. Note that session transcripts may contain sensitive information. |
| `--share-gist`                | Publish the session transcript as a secret GitHub gist after completion. Convenient for sharing results from CI. Note that session transcripts may contain sensitive information. |

## Tools for the `--allow-tool` option

You can specify various kinds of tools with the `--allow-tool` option.

| Kind of tool  | What it controls |
|---------------|------------------|
| shell  | Executing shell commands. |
| write  | Creating or modifying files. |
| read   | Reading files or directories. |
| url    | Fetching content from a URL. |
| memory | Storing new facts to the agent's persistent memory. This does not affect using existing memories. See [AUTOTITLE](/copilot/concepts/agents/copilot-memory). |
| MCP-SERVER | Invoking tools from a specific MCP server. Use the server's configured name as the identifier—for example, `github`. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers). |

### Tool filters

The `shell`, `write`, `url`, and MCP server tool kinds allow you to specify a filter, in parentheses, to control which specific tools are allowed.

<!-- markdownlint-disable -->
| Kind of tool | Example | Explanation of the example |
|------|---------|---------|
| **shell** | `shell(git:*)` | Allow all Git subcommands (`git push`, `git status`, etc.). |
| | `shell(npm test)` | Allow the exact command `npm test`. |
| **write** | `write(.github/copilot-instructions.md)` | Allow the CLI to write to this specific path. |
| | `write(README.md)` | Allow the CLI to write to any file whose path ends with `/README.md`. |
| **url** | `url(github.com)` | Allow the CLI to access HTTPS URLs on github.com. |
| | `url(http://localhost:3000)` | Allow the CLI to access the local dev server with explicit protocol and port. |
| | `url(https://*.github.com)` | Allow the CLI to access any {% data variables.product.github %} subdomain (for example, `api.github.com`). |
| | `url(https://docs.github.com/copilot/*)` | Allow access to {% data variables.product.prodname_copilot_short %} documentation at this site. |
| **MCP-SERVER** | `github(create_issue)` | Allow only the `create_issue` tool from the `github` MCP server. |
<!-- markdownlint-enable -->

> [!NOTE]
> Wildcards are only supported for `shell` to match all subcommands of a specified tool, and for `url` at the start of the host name to match any subdomain, or at the end of a path to match any path suffix—as shown in the preceding table.

## Environment variables

You can use environment variables to configure various aspects of the CLI's behavior when running programmatically. This is particularly useful for setting configuration in CI/CD workflows or other automated environments where you may not want to specify certain options directly in the command line.

| Variable              | Description   |
| --------------------- | ------------- |
| `COPILOT_ALLOW_ALL`   | Set to `true` for full permissions |
| `COPILOT_MODEL`       | Set the model (for example, `gpt-5.2`, `claude-sonnet-4.5`) |
| `COPILOT_HOME`        | Set the directory for the CLI configuration file (`~/.copilot` by default) |
| `COPILOT_GITHUB_TOKEN`| Authentication token (highest precedence) |
| `GH_TOKEN`            | Authentication token (second precedence) |
| `GITHUB_TOKEN`        | Authentication token (third precedence) |

For full details of environment variables for {% data variables.copilot.copilot_cli_short %}, use the command `copilot help environment` in your terminal.

## Choosing a model

When you send a prompt to {% data variables.copilot.copilot_cli_short %} in non-interactive mode, the model that the CLI uses to generate a response is shown in the response output (if the `-s`, or `--silent`, option is not used).

You can use the `--model` option to specify which AI model the CLI should use. This allows you to choose a model that is best suited to your prompt, balancing factors like speed, cost, and capability.

For example, for straightforward tasks, such as explaining some code or generating a summary, you might choose a fast, lower cost model such as a Claude Haiku model:

```bash copy
copilot -p "What does this project do?" -s --model claude-haiku-4.5
```

For more complex tasks that require deeper reasoning—such as debugging or refactoring code—you might choose a more powerful model, such as a GPT Codex model:

```bash copy
copilot -p "Fix the race condition in the worker pool" \
  --model gpt-5.3-codex \
  --allow-tool='write, shell'
```

> [!NOTE]
> You can find the model strings for all available models in the description of the `--model` option when you enter `copilot help` in your terminal.

Alternatively, you can set the `COPILOT_MODEL` environment variable to specify a model for the duration of the shell session.

To persist a model selection across shell sessions, you can set the `model` key in the CLI configuration file. This file is located at `~/.copilot/settings.json` (or `$COPILOT_HOME/settings.json` if you have set the `COPILOT_HOME` environment variable). Some models also allow you to set a reasoning effort level, which controls how much time the model spends thinking before responding.

```json copy
{
  "model": "gpt-5.3-codex",
  "effortLevel": "low"
}
```

> [!TIP]
> The easiest way to set a model persistently in the configuration file is with the `/model` slash command in an interactive session. The choice you make with this command is written to the configuration file.

### Model precedence

When determining which model to use for a given prompt, the CLI checks for model specifications in the following order of precedence (from highest to lowest):

* Where a custom agent is used: the model specified in the custom agent definition (if any).
* The `--model` command line option.
* The `COPILOT_MODEL` environment variable.
* The `model` key in the configuration file (`~/.copilot/settings.json` or `$COPILOT_HOME/settings.json`).
* The CLI's default model.

## Using custom agents

You can delegate work to a specialized agent by using the `--agent` option. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

In this example, the `code-review` agent is used. This requires that a custom agent has been created with this name.

```bash
copilot -p "Review the latest commit" \
  --allow-tool='shell' \
  --agent code-review
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
