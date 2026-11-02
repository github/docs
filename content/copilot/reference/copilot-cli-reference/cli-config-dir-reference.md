---
title: GitHub Copilot CLI configuration directory
shortTitle: CLI configuration directory
allowTitleToDifferFromFilename: true
intro: 'Find information about the `~/.copilot` directory, where {% data variables.copilot.copilot_cli_short %} stores configuration, session data, and customizations.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
docsTeamMetrics:
  - copilot-cli
---

{% data variables.copilot.copilot_cli_short %} stores its configuration, session history, logs, and customizations in a single directory on your machine. By default, this directory is `~/.copilot` (that is, `$HOME/.copilot`).

This article describes the contents of this directory and how you can use them.

## Directory overview

The `~/.copilot` directory contains the following top-level items.

| Path | Type | Description |
|------|------|-------------|
| `agents/` | Directory | Personal custom agent definitions |
| `config.json` | File | Automatically managed application state (authentication, installed plugins, and other internal data) |
| `copilot-instructions.md` | File | Personal custom instructions (applied to all sessions) |
| `extensions/` | Directory | Personal extensions loaded by the CLI |
| `hooks/` | Directory | User-level hook scripts |
| `ide/` | Directory | IDE integration state |
| `installed-plugins/` | Directory | Installed plugin files |
| `instructions/` | Directory | Additional personal `*.instructions.md` files |
| `logs/` | Directory | Session log files |
| `lsp-config.json` | File | User-level LSP server definitions |
| `mcp-config.json` | File | User-level MCP server definitions |
| `mcp-oauth-config/` | Directory | MCP OAuth token and registration fallback storage |
| `mcp-secrets/` | Directory | Local fallback storage and index for MCP secret placeholders |
| `permissions-config.json` | File | Saved tool and directory permissions per project |
| `plugin-data/` | Directory | Persistent data for installed plugins |
| `providers.json` | File | User-level bring-your-own-key (BYOK) provider and model registry |
| `session-state/` | Directory | Session history and workspace data |
| `command-history-state/` | Directory | Command history data |
| `session-store.db` | File | SQLite database for cross-session data |
| `settings.json` | File | Your personal configuration settings |
| `skills/` | Directory | Personal custom skill definitions |

> [!NOTE]
> Not all of these items appear immediately. Some are created on demand the first time you use a particular feature—for example, `installed-plugins/` appears only after you install your first plugin.

## User-editable files

The following files are designed to be edited by you directly, or managed through CLI commands.

### `settings.json`

This is the primary configuration file for {% data variables.copilot.copilot_cli_short %}. Within a session, you can use the interactive `/settings` command to change specific values, or run `/settings KEY VALUE` to set a single value. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/change-settings). Alternatively, you can edit the `settings.json` file directly in a text editor. The file supports JSON with comments (JSONC).

By default, this file is located in the `~/.copilot` directory, which is the user-level configuration directory. It contains global user-level defaults for all repositories. You can change the location of this directory by setting the `COPILOT_HOME` environment variable to a different path.

> [!NOTE]
> User-editable settings are stored in `settings.json`. These settings were originally stored in `config.json`. Any user settings in `config.json` are ignored. That file is used to store internal state, such as installed plugins and trusted folders.

If `settings.json` fails to read, parse, or validate, {% data variables.copilot.copilot_cli_short %} ignores the invalid values and shows a startup warning on the timeline directing you to the **Problems** tab of the `/settings` command. Open that tab to see the specific error, then fix the reported issue to restore the affected settings.

If `settings.json` contains a top-level key that isn't a recognized setting (for example, a typo), {% data variables.copilot.copilot_cli_short %} lists it in the **Problems** tab of the `/settings` command instead of on the timeline or in stderr. The tab's label shows a count (for example, `Problems (2)`) when any configuration scope has an issue. `$schema` is tolerated and never reported.

If `~/.copilot/settings.json` is a symlink—for example, to sync settings through a dotfiles repository—writes from the `/settings` command follow the symlink and update its target instead of replacing the symlink with a regular file.

For the full list of settings and how they interact with repository-level configuration, see [Configuration file settings](#configuration-file-settings) later in this article.

> [!TIP]
> Run `copilot help config` in your terminal for a quick reference.

Use `copilot config` from your shell, outside a session, to read or change settings non-interactively—the scripting counterpart to the `/settings` slash command. Add `--repo` or `--local` to target `.github/copilot/settings.json` or `.github/copilot/settings.local.json` instead of your user settings file; only [repo-overridable keys](#repository-settings-githubcopilotsettingsjson) can be written there. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#using-copilot-config) for the full command reference.

### `copilot-instructions.md`

Personal custom instructions that apply to all your sessions, regardless of which project you're working in. This file works the same way as a repository-level `copilot-instructions.md` but applies globally.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).

### `instructions/`

Store additional personal instruction files here as `*.instructions.md` files. These are loaded alongside `copilot-instructions.md` and apply to all your sessions. You can organize instructions by topic—for example, `~/.copilot/instructions/code-style.instructions.md`.

### `mcp-config.json`

Defines MCP (Model Context Protocol) servers available at the user level. These servers are available in all your sessions, regardless of which project directory you're in. Project-level MCP configurations (in `.mcp.json` or `.github/mcp.json`) take precedence over user-level definitions when server names conflict.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

### `lsp-config.json`

Defines Language Server Protocol (LSP) servers available at the user level. These servers provide language intelligence (diagnostics, completions, etc.) to the agent. Manage this file using the `/lsp` slash command, or edit it directly.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/add-lsp-servers).

### `providers.json`

Defines a registry of bring-your-own-key (BYOK) providers and models, as a JSON object with `providers` and `models` keys. When this file declares any provider or model, it takes precedence over the legacy `COPILOT_PROVIDER_*` environment variables.

By default, this file is located at `~/.copilot/providers.json`. Override its location with the `COPILOT_PROVIDERS_CONFIG` environment variable.

Models in this file are available alongside the models provided by your {% data variables.product.prodname_copilot_short %} subscription. After editing the file manually, restart {% data variables.copilot.copilot_cli_short %} to load your changes. For setup instructions, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models).

> [!WARNING]
> API keys, bearer tokens, and header values in this file are stored as plain text. Do not commit the file to a repository or share it without removing credentials. Values such as `$MY_API_KEY` are literal strings, not references to environment variables.

#### Provider configuration structure

Use a JSON object, without comments or trailing commas. The file contains two arrays. Each provider defines a connection, and each model refers to one of those providers by name. In the tables below, `[]` means an entry in an array. For example, `models[].capabilities.supports.vision` is the `vision` setting inside `supports`, inside `capabilities`, inside a model entry.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `providers` | Array of objects | No | `[]` | Provider connections. See [Provider settings](#provider-settings). |
| `models` | Array of objects | No | `[]` | Models available through those connections. See [Model settings](#model-settings). |

An absent or empty file, or a file with no provider or model entries, allows the CLI to fall back to `COPILOT_PROVIDER_*` environment variables. A `null` value for either array is treated as an empty array. A file with invalid JSON or invalid provider or model entries produces a configuration error instead.

To use a configured model when starting the CLI, pass `PROVIDER-NAME/MODEL-ID` to the `--model` option. `PROVIDER-NAME` is the provider's `name` value, and `MODEL-ID` is the model's `id` value. For example, run `copilot --model local/qwen3:8b`. Alternatively, during an interactive session, you can enter `/model` and choose the model from the picker.

This file configures connections, model capabilities, and model instructions for use in {% data variables.copilot.copilot_cli_short %}. The JSON in this file is not a provider API request body. Settings are not passed through to the provider when you add them to this file.

#### Provider settings

Each entry in `providers` accepts the following fields. Only `name` and `baseUrl` are always required. Authentication requirements depend on the provider.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `providers[].name` | String | Yes | None | A unique name for this connection, such as `"local"` or `"my-anthropic"`. Must not contain `/`. Models refer to this name using their `provider` field. |
| `providers[].type` | String | No | `"openai"` | The connection type: `"openai"` for OpenAI-compatible APIs, `"azure"` for Azure OpenAI, `"anthropic"` for Anthropic's Messages API, or `"local_model"` for a local model served by `llama-server`. |
| `providers[].baseUrl` | String containing a URL or file path | Yes | None | The provider's API base URL. For OpenAI-compatible APIs, include the required API prefix, such as `https://api.openai.com/v1` or `http://127.0.0.1:11434/v1` for Ollama. For direct Anthropic access, use `https://api.anthropic.com`. For Azure, use your resource endpoint. With `"type": "local_model"`, this can instead be a path to a `.gguf` model file. |
| `providers[].wireApi` | String | No | `"completions"` | The API format for OpenAI and Azure connections: `"completions"` for Chat Completions or `"responses"` for the Responses API. Ignored for Anthropic. |
| `providers[].transport` | String | No | `"http"` | Accepts `"http"` or `"websockets"`. WebSockets require `"type": "openai"` and `"wireApi": "responses"`, and the provider must support that transport. |
| `providers[].apiKey` | String | Provider-dependent | Unset | The provider's API key. Can be omitted for an unauthenticated local server. |
| `providers[].bearerToken` | String | Provider-dependent | Unset | A bearer token, without the `Bearer ` prefix. Takes precedence over `apiKey` when both are set. This is a static token, not a token-refresh command. |
| `providers[].headers` | Object | No | Unset | Additional HTTP headers, with header names as keys and strings as values. |
| `providers[].headers.<header-name>` | String | No | Unset | The value of a header, for example `"X-Project": "my-project"`. Use `apiKey` or `bearerToken` for standard provider authentication. |
| `providers[].azure` | Object | No | Unset | Azure-specific options. Contains the `apiVersion` field described below. |
| `providers[].azure.apiVersion` | String | No | Unset | The Azure API version to request. When set to a non-empty version string supported by your endpoint, the CLI uses the versioned deployment API. When omitted, the CLI uses the versionless `/openai/v1` API. |
| `providers[].localModel` | Object | No | Unset | Server options for a CLI-managed `.gguf` model. See [Local model server settings](#local-model-server-settings). |
| `providers[].modelProvider` | String | No | Inferred from the connection | A provider label used only for telemetry. Recognized values are `"openai"`, `"anthropic"`, `"azure_openai"`, `"ollama"`, `"lm_studio"`, `"foundry_local"`, and `"llama_cpp"`. Does not change the connection protocol or model behavior. |
| `providers[].hasBearerTokenProvider` | Boolean | No | `false` | Indicates that an application using the SDK supplies tokens through a callback. Omit this when configuring the CLI manually. Setting it to `true` in this file does not register a token provider. |

The named-provider file does not support `apiKeyCommand`. Do not put credentials or token-refresh commands in `metadata` or `localModel.args`.

#### Local model server settings

These settings apply only when `providers[].type` is `"local_model"` and `baseUrl` is a path to a `.gguf` file. The CLI starts `llama-server` when the model is first used. The executable must be installed and available on `PATH`. Use an absolute model path to avoid depending on the directory from which you start the CLI.

If `baseUrl` is an HTTP or HTTPS URL, the CLI connects to that existing server and does not use these startup settings. They also do not configure Ollama or other OpenAI-compatible servers.

All fields inside `providers[].localModel` are optional.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `providers[].localModel.ctxSize` | Non-negative integer | `llama-server` default | Requested context size in tokens, passed as `--ctx-size`. The actual allocation can be smaller than requested. |
| `providers[].localModel.nGpuLayers` | Non-negative integer | `llama-server` default | Number of model layers to offload to the GPU, passed as `--n-gpu-layers`. |
| `providers[].localModel.parallel` | Non-negative integer | `1` | Number of server slots, passed as `--parallel`. Multiple slots can divide the available context between requests. |
| `providers[].localModel.args` | Array of strings | `[]` | Additional `llama-server` arguments. Each argument is a separate string, such as `["--threads", "8"]`. These follow the arguments generated from the fields above. |
| `providers[].localModel.persist` | Boolean | `false` | Requests that the managed server remain running after a clean CLI exit so a later CLI process can reuse it. Otherwise, the CLI cleans up the server on exit. |
| `providers[].localModel.logs` | String containing a file path or `"inherit"` | Output discarded | Appends the server's standard output and error output to the specified file. Use an absolute path. `"inherit"` sends output to the terminal and can interfere with the CLI display. |

The CLI manages the server's model path, host, and port. You cannot pass `--model`, `-m`, `--host`, or `--port` through `args`, including forms such as `--port=8080`.

#### Model settings

Each entry in `models` accepts the following fields. Only `id` and `provider` are required.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `models[].id` | String | Yes | None | The model identifier used in the CLI. Must be unique within its provider. Also used as the provider's model name unless `wireModel` is set. |
| `models[].provider` | String | Yes | None | Must match the `name` of an entry in `providers`. |
| `models[].wireModel` | String | No | Value of `id` | The model or deployment name sent to the provider. Use this when the provider expects a different name from the ID you want to select in the CLI. |
| `models[].modelId` | String | No | Value of `id` | The model identity used to look up the CLI's model-specific behavior and defaults. For an alias or deployment name, set this to the underlying model's recognized ID. This does not change the model name sent to the provider. |
| `models[].name` | String | No | `PROVIDER-NAME/MODEL-ID` | A display name for the model. Does not change its selection ID. |
| `models[].maxPromptTokens` | Integer | No | Model-dependent, otherwise `128000` | The input token budget. Use a positive whole number that matches your model and deployment. |
| `models[].maxContextWindowTokens` | Integer | No | Known model limit, otherwise unset | The total context-window limit, including input and output tokens. Set this for models whose limit the CLI does not know. |
| `models[].maxOutputTokens` | Integer | No | Model- and provider-dependent | The output token budget. The provider and the model's reasoning requirements can further constrain the output. |
| `models[].capabilities` | Object | No | Model defaults | Describes supported features and limits. See [Model capabilities](#model-capabilities). |
| `models[].systemMessage` | Object | No | Standard CLI instructions | Adds to, replaces, or customizes the system instructions for this model. See [Model system messages](#model-system-messages). |
| `models[].metadata` | Object | No | Unset | Additional descriptive data, including information saved when a model is discovered. See [Model metadata](#model-metadata). |

The three token-limit fields accept whole numbers from `0` to `4294967295`. Use positive values appropriate for your deployment rather than relying on `0` as a way to disable a limit. These settings tell the CLI what limits to use, but do not increase the model's actual capacity.

#### Model capabilities

The `models[].capabilities` object describes the model. Setting a feature to `true` does not add that feature to a model that does not support it.

| Field | Type | Description |
|-------|------|-------------|
| `models[].capabilities.family` | String | Descriptive model-family identifier. Use `modelId`, not this field, to choose the CLI's model-specific behavior. |
| `models[].capabilities.supports` | Object | Supported features. See [Supported model features](#supported-model-features). |
| `models[].capabilities.limits` | Object | Token and image limits. See [Model capability limits](#model-capability-limits). |

All capability fields are optional. Objects are merged with the model's defaults, and arrays replace the corresponding default arrays.

#### Supported model features

The following fields belong inside `models[].capabilities.supports`.

| Field | Type | Description |
|-------|------|-------------|
| `models[].capabilities.supports.vision` | Boolean | Whether the model accepts images. Defaults to `false` when no other capability information is available. |
| `models[].capabilities.supports.toolCalls` | Boolean | Whether the model supports tool calls. The spelling `tool_calls` is also accepted and takes precedence if both are present. This describes support, not permission to run tools. |
| `models[].capabilities.supports.streaming` | Boolean | Whether the model supports streamed responses. This is capability information, not a setting to turn response streaming on or off. |
| `models[].capabilities.supports.adaptive_thinking` | String or boolean | The model's support for Anthropic adaptive thinking. Prefer one of the string values described below. For compatibility, `true` means `"optional"` and `false` means `"unsupported"`. |
| `models[].capabilities.supports.reasoning_effort` | Array of strings | Reasoning-effort levels the model supports. This advertises available levels, not the level to use for a request. The CLI also applies model-specific restrictions. |
| `models[].capabilities.supports.thinking` | Boolean | Descriptive support information that model discovery can save. Does not by itself configure thinking or enable reasoning-effort controls. |
| `models[].capabilities.supports.reasoningEffort` | Boolean or array of strings | Compatibility field. A boolean does not enable reasoning-effort controls, and an array is not used consistently across CLI features. Use `reasoning_effort` for a supported-level list. |

The `adaptive_thinking` values have the following meanings.

| Value | Meaning |
|-------|---------|
| `"unsupported"` | The model does not support adaptive thinking. This does not rule out other forms of reasoning. |
| `"optional"` | The model supports adaptive thinking, but does not require it. |
| `"required"` | When thinking is enabled, the model requires adaptive thinking instead of a manual thinking budget. Thinking can still be disabled. |
| `"adaptive_only"` | The model requires adaptive thinking and does not allow thinking to be disabled. |

For `reasoning_effort`, the CLI recognizes `"none"`, `"minimal"`, `"low"`, `"medium"`, `"high"`, `"xhigh"`, and `"max"`. List only the levels your model supports, for example `["low", "medium", "high"]`. An omitted or empty list leaves the CLI to use its model-specific defaults. Select a level with `--reasoning-effort` or the model picker where available.

#### Model capability limits

The following fields belong inside `models[].capabilities.limits`. All are optional.

| Field | Type | Description |
|-------|------|-------------|
| `models[].capabilities.limits.max_prompt_tokens` | Integer | Input token budget. Corresponds to `maxPromptTokens`. |
| `models[].capabilities.limits.max_context_window_tokens` | Integer | Total context-window limit. Corresponds to `maxContextWindowTokens`. |
| `models[].capabilities.limits.max_output_tokens` | Integer | Output token budget. Corresponds to `maxOutputTokens`. |
| `models[].capabilities.limits.vision` | Object | Image limits, containing the fields below. |
| `models[].capabilities.limits.vision.supported_media_types` | Array of strings | Accepted image MIME types, such as `"image/jpeg"`, `"image/png"`, and `"image/webp"`. These three types are the default. |
| `models[].capabilities.limits.vision.max_prompt_images` | Integer | Maximum number of images per prompt. The default is `1`. |
| `models[].capabilities.limits.vision.max_prompt_image_size` | Integer | Maximum size of each image in bytes. The default is `3145728` (3 MiB). |

Prefer the model's `maxPromptTokens`, `maxContextWindowTokens`, and `maxOutputTokens` fields when setting token budgets manually. Discovery can save limits in both places. Keep duplicate values consistent, because different CLI operations read the two representations. For CLI-managed local servers, a measured context limit can take precedence over a configured value.

Use non-negative whole numbers for token counts and image sizes, and a positive whole number for the image count. Token counts and image counts must fit within `0` to `4294967295`. Image sizes are measured in bytes, not tokens.

#### Model system messages

`models[].systemMessage` controls the system instructions used when the CLI builds a standard prompt for this model, including for general-purpose subagents. It takes precedence over session-wide system-message configuration on those paths. It does not replace the instructions of a selected custom agent or a specialized subagent.

Prefer `"mode": "append"` when you only need additional instructions. Replacing or removing built-in instructions can change the CLI's tool use and other expected behavior. Omit `systemMessage` to keep the standard instructions, rather than setting it to `null`.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `models[].systemMessage.mode` | String | No | `"append"` (the default), `"replace"`, or `"customize"`. See the mode table below. |
| `models[].systemMessage.content` | String | In `replace` mode | Text to append or use as replacement instructions. In `customize` mode, this is appended after the section changes. |
| `models[].systemMessage.sections` | Object | No | Section changes, available only in `customize` mode. See [System-message sections](#system-message-sections). |
| `models[].systemMessage.contentBlocks` | Array of objects | No | Replacement instructions split into blocks, available only in `replace` mode. See [System-message content blocks](#system-message-content-blocks). |

Only the fields listed for a mode are accepted. For example, adding `sections` without setting `"mode": "customize"` causes a configuration error.

| Mode | Accepted fields | Effect |
|------|-----------------|--------|
| `"append"` | `mode`, `content` | Keeps the standard prompt and appends `content`. Omitting `mode` selects this mode. |
| `"replace"` | `mode`, `content`, `contentBlocks` | Replaces the standard instructions. `content` must be present as a string, even when you supply `contentBlocks`. The CLI can still add applicable environment and agent context. |
| `"customize"` | `mode`, `sections`, `content` | Changes named sections of the standard prompt and optionally appends `content`. Sections you do not change retain their defaults. |

In replacement content, `{% raw %}{{copilot:memories}}{% endraw %}` inserts the CLI's memory instructions and context when available.

#### System-message sections

In `customize` mode, `models[].systemMessage.sections` maps section names to objects. Each object specifies an `action` and, where needed, `content`. For example, `models[].systemMessage.sections.tone` changes the tone section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `models[].systemMessage.sections.<section-name>` | Object | No | A change to one of the sections or groups listed below. |
| `models[].systemMessage.sections.<section-name>.action` | String | Yes, for each entry | `"replace"`, `"remove"`, `"append"`, `"prepend"`, or `"preserve"`. |
| `models[].systemMessage.sections.<section-name>.content` | String | No | Text used by `replace`, `append`, or `prepend`. Omitted content is treated as empty. Not needed for `remove` or `preserve`. |

The available actions are:

| Action | Effect |
|--------|--------|
| `"replace"` | Replaces the section or group with `content`. |
| `"remove"` | Removes the section or group. A group removal keeps sections that have their own entries in `sections`. |
| `"append"` | Adds `content` after the section or group. Include any required spaces or newlines in `content`. |
| `"prepend"` | Adds `content` before the section or group. Include any required spaces or newlines in `content`. |
| `"preserve"` | Leaves the section unchanged and protects it from removal through a group. Does not protect it from group replacement. |

The `transform` action is not supported in `providers.json` because it requires an application callback, not saved JSON configuration.

Use the following section or group names as keys in `sections`.

| Name | Kind | Content covered |
|------|------|-----------------|
| `preamble` | Section | The assistant's introductory identity instructions. |
| `tone` | Section | Tone and response style. |
| `tool_efficiency` | Section | Guidance on efficient tool use. |
| `environment_context` | Section | Information about the working environment. |
| `code_change_rules` | Section | Guidance for making code changes. |
| `guidelines` | Section | Additional agent behavior guidelines. |
| `safety` | Section | Safety guidance and environment limitations. |
| `custom_instructions` | Section | Loaded custom instructions. |
| `runtime_instructions` | Section | Additional instructions assembled for the session. |
| `last_instructions` | Section | Instructions placed at the end of the prompt. |
| `identity` | Group | Identity, interaction, tone, delegation, tool-efficiency, version, model, and task instructions. Does not include `environment_context`. |
| `tool_instructions` | Group | The tool introduction and tool-use instructions. |

Individual section changes are applied before group changes. A group replacement replaces all its member sections, including sections you have customized separately.

#### System-message content blocks

In `replace` mode, `models[].systemMessage.contentBlocks` provides the replacement instructions instead of the plain `content` string. Keep `content` present because it is required by the configuration format. All blocks must have a `content` string.

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `models[].systemMessage.contentBlocks[].content` | String | Yes | None | The text for this block, in array order. |
| `models[].systemMessage.contentBlocks[].isStatic` | Boolean | No | Not marked static | Marks content that can be cached independently of changing prompt content. |
| `models[].systemMessage.contentBlocks[].cacheBreakpoint` | Boolean | No | No explicit breakpoint | Requests a cache boundary after this block for providers that support explicit prompt caching. Does not guarantee provider caching. |

#### Model metadata

`models[].metadata` is an object whose values can be any valid JSON value. It is descriptive data, not a way to supply API request parameters or credentials. You do not need to add metadata manually.

Model discovery can save the following string fields. Leave existing discovery values intact.

| Field | Type | Description |
|-------|------|-------------|
| `models[].metadata.adapterId` | String | Identifies the discovery integration, such as `"ollama"`. |
| `models[].metadata.providerKind` | String | The discovered provider's kind, such as `"ollama"`. |
| `models[].metadata.providerInstanceId` | String | Identifies the provider instance, such as `"ollama:http://127.0.0.1:11434"`. |
| `models[].metadata.providerDigest` | String | A model digest supplied by the provider, when available. |

#### Provider configuration example

This example connects to an existing Ollama server and shows how model capabilities and system instructions are nested. It assumes that `qwen3:8b` is installed. The token limits are example budgets, not a statement of the model's maximum capacity. Adjust them to match the context configured on your server.

```json copy
{
  "providers": [
    {
      "name": "local",
      "type": "openai",
      "baseUrl": "http://127.0.0.1:11434/v1",
      "modelProvider": "ollama"
    }
  ],
  "models": [
    {
      "id": "qwen3:8b",
      "provider": "local",
      "name": "Qwen 3 8B",
      "maxPromptTokens": 6144,
      "maxContextWindowTokens": 8192,
      "maxOutputTokens": 2048,
      "capabilities": {
        "supports": {
          "vision": false,
          "toolCalls": true
        }
      },
      "systemMessage": {
        "mode": "customize",
        "sections": {
          "tone": {
            "action": "append",
            "content": "\nUse concise explanations."
          }
        }
      }
    }
  ]
}
```

After restarting the CLI, select this model with `copilot --model local/qwen3:8b` or the `/model` picker. Add more objects to either array to configure additional providers and models.

### `agents/`

Store personal custom agent definitions here as `.agent.md` files. Agents placed in this directory are available in all your sessions. If a personal agent and a project-level agent have the same ID—for example, if both top-level files are named `reviewer.agent.md`—the personal agent takes precedence. The optional `name` frontmatter field does not control deduplication, so agents with the same `name` but different IDs both load.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

### `skills/`

Store personal custom skill definitions here. Each skill lives in a subdirectory containing a `SKILL.md` file—for example, `~/.copilot/skills/my-skill/SKILL.md`. Personal skills are available in all your sessions. Project-level skills take precedence over personal skills if they share the same name.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

### `hooks/`

Store user-level hook scripts here. These hooks apply to all your sessions. You can also define hooks inline in your user configuration file (`~/.copilot/settings.json`) using the `hooks` key. Repository-level hooks (in `.github/hooks/`) are loaded alongside user-level hooks.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks).

### `extensions/`

Store user-level extension files here. Extensions in this directory are available across sessions.

You can create files in this directory manually, or scaffold an extension and then edit the generated file.

## Automatically managed files

The following items are managed by the CLI. You generally should not edit them manually.

### `config.json`

Stores internal application state that is managed automatically by the CLI, including authentication data, installed plugin metadata, and other runtime information. You should not normally need to edit this file.

> [!NOTE]
> Earlier versions of {% data variables.copilot.copilot_cli_short %} stored both user settings and application state in `config.json`. User-editable settings are now located in `settings.json`. Settings left in `config.json` are ignored. This file only holds internal state such as installed plugins and trusted folders.

### `permissions-config.json`

Stores your saved tool and directory permission decisions, organized by project location. When you approve a tool or grant access to a directory for the current location, the CLI records the decision here so you aren't prompted again in the same repository or directory.

> [!NOTE]
> If you want to reset permissions for a project, you can delete the relevant entry from this file. However, editing the file while a session is running may cause unexpected behavior. The CLI automatically removes entries whose location path no longer exists on disk.

#### File location

{% data variables.copilot.copilot_cli_short %} resolves the file from the configuration directory.

| Priority | Source | File used |
|----------|--------|-----------|
| 1 | `--config-dir=DIRECTORY` | `DIRECTORY/permissions-config.json` |
| 2 | `COPILOT_HOME` | `$COPILOT_HOME/permissions-config.json` |
| 3 | Default | `~/.copilot/permissions-config.json` |

The CLI uses only the first applicable configuration directory in this order. It doesn't also load `permissions-config.json` from the lower-priority locations.

The `--config-dir` option is a legacy option. Prefer `COPILOT_HOME` when you need to change the configuration directory.

On Windows, the default file is typically:

```text
C:\Users\YOUR-USER\.copilot\permissions-config.json
```

Older builds used an extensionless file named `permissions-config`. If `permissions-config.json` doesn't exist but the extensionless file does, the CLI still honors the legacy file. Use `permissions-config.json` for new edits.

Previous XDG-based configuration locations are migrated to `~/.copilot` at startup when `COPILOT_HOME` isn't set.

#### Location keys

The top-level `locations` object is keyed by an absolute path.

* For a Git repository, use the Git root used for permission scoping.
* Linked worktrees resolve to the main repository root, so they share permissions with the main worktree.
* Submodules use their own working directory.
* For a directory that isn't in a Git repository, use the normalized current working directory.

The key must match the location where {% data variables.copilot.copilot_cli_short %} is running. If the key doesn't match, the saved approvals won't apply.

The CLI loads the matching location's approvals when a session starts and when the active working directory changes.

#### Schema

The file must contain a JSON object.

| Field | Type | Required | Default | Allowed values | Description |
|-------|------|----------|---------|----------------|-------------|
| `locations` | Object | No | `{}` | Absolute path keys | Map of location keys to saved approvals. |
| `locations.<key>` | Object | No | `{}` | Any absolute location key | Saved approvals for one repository or directory. |
| `locations.<key>.tool_approvals` | Array | No | `[]` | Approval objects | Tools approved for this location. |
| `locations.<key>.allowed_directories` | Array of strings | No | `[]` | Absolute directory paths | Extra directories that the path gate can access for this location. Each directory must exist when the CLI applies the configuration. |
| `locations.<key>.tool_approvals[].kind` | String | Yes | None | `commands`, `read`, `write`, `mcp`, `mcp-sampling`, `memory`, `custom-tool`, `extension-management`, `extension-permission-access` | Selects the approval type. |
| `commandIdentifiers` | Array of strings | Yes, for `commands` | None | Command identifiers | Shell command identifiers to approve. |
| `serverName` | String | Yes, for `mcp` and `mcp-sampling` | None | MCP server name | MCP server to approve. |
| `toolName` | String or `null` | Yes, for `mcp` | None | MCP tool name, or `null` | MCP tool to approve. Use `null` to approve every tool on the server. |
| `toolName` | String | Yes, for `custom-tool` | None | Custom tool name | Custom tool to approve by exact name. |
| `operation` | String | No, for `extension-management` | Omitted | Extension operation name | Extension-management operation to approve. Omit this field to approve all extension-management operations. |
| `extensionName` | String | Yes, for `extension-permission-access` | None | Extension name | Extension whose access to permission-gated capabilities is approved. |

`permissions-config.json` doesn't support deny rules, "ask" rules, default modes, URL rules, tool filtering, or repository-local shared policy. For those behaviors, use command-line options such as `--deny-tool`, `--available-tools`, `--excluded-tools`, `--allow-url`, and `--deny-url`. Saved URL rules are stored in `settings.json`, not in `permissions-config.json`.

Unknown fields aren't part of the schema. The CLI may ignore them, and later writes may remove them.

#### Approval kinds

Each item in `tool_approvals` must be one of the following objects.

| `kind` | Required fields | Optional fields | Meaning |
|--------|-----------------|-----------------|---------|
| `commands` | `commandIdentifiers` | None | Approves matching shell command identifiers. |
| `read` | None | None | Approves read tool requests. Interactive CLI sessions already approve reads automatically, so this is usually unnecessary. |
| `write` | None | None | Approves file creation and modification tool requests. A path prompt can still apply for paths outside the allowed directories. |
| `mcp` | `serverName`, `toolName` | None | Approves one MCP tool, or every tool on the server when `toolName` is `null`. |
| `mcp-sampling` | `serverName` | None | Approves MCP sampling requests for one server. |
| `memory` | None | None | Approves memory write and vote requests. |
| `custom-tool` | `toolName` | None | Approves a custom tool by exact name. |
| `extension-management` | None | `operation` | Approves extension management. If `operation` is omitted, all extension-management operations match. |
| `extension-permission-access` | `extensionName` | None | Approves an extension's access to permission-gated capabilities. |

For MCP approvals, `serverName` must match the configured MCP server name exactly. Use the raw server name from your MCP configuration, not a sanitized tool-name prefix.

#### Shell command matching

`permissions-config.json` doesn't support regular expressions or general glob patterns. String values are matched literally, except that a trailing `:*` in a shell `commandIdentifiers` value matches the text before `:*`, either by itself or followed by a space and more text. A plain `*` has no special meaning, so `git*` doesn't match `git status`.

| Pattern | Matches | Doesn't match |
|---------|---------|---------------|
| `git status` | `git status` | `git status --short` |
| `git:*` | `git`, `git status`, `git push` | `gitea` |
| `gh pr:*` | `gh pr`, `gh pr view`, `gh pr create` | `gh repo view` |

#### Directory matching

`allowed_directories` entries allow {% data variables.copilot.copilot_cli_short %} to access paths inside those directories without a separate path prompt. They don't approve the tool operation itself. For example, editing a file in an allowed directory can still require a `write` approval.

Each `allowed_directories` entry must be an absolute, non-empty, accessible directory. The CLI resolves symlinks before comparing paths, blocks UNC network paths unless they are extended-length local paths, compares paths case-insensitively on Windows, and compares paths case-sensitively on other platforms. If an entry can't be applied, the CLI logs a warning and skips that entry.

#### Examples

Allow all Git subcommands and access an extra local directory:

```json copy
{
  "locations": {
    "C:\\src\\my-repo": {
      "tool_approvals": [
        {
          "kind": "commands",
          "commandIdentifiers": ["git:*"]
        }
      ],
      "allowed_directories": ["C:\\src\\shared-docs"]
    }
  }
}
```

Allow selected commands while still asking before file writes:

```json copy
{
  "locations": {
    "/Users/YOUR-USER/src/my-repo": {
      "tool_approvals": [
        {
          "kind": "commands",
          "commandIdentifiers": [
            "git status",
            "git diff",
            "git log",
            "npm test",
            "npm run build"
          ]
        }
      ]
    }
  }
}
```

Approve file writes and one MCP server for a repository:

```json copy
{
  "locations": {
    "/home/YOUR-USER/src/my-repo": {
      "tool_approvals": [
        {
          "kind": "write"
        },
        {
          "kind": "mcp",
          "serverName": "github-mcp-server",
          "toolName": null
        }
      ]
    }
  }
}
```

Approve one MCP tool, memory writes, and extension permission access:

```json copy
{
  "locations": {
    "C:\\src\\my-repo": {
      "tool_approvals": [
        {
          "kind": "mcp",
          "serverName": "github-mcp-server",
          "toolName": "search_code"
        },
        {
          "kind": "memory"
        },
        {
          "kind": "extension-permission-access",
          "extensionName": "my-extension"
        }
      ]
    }
  }
}
```

### `session-state/`

Contains session history data, organized by session ID in subdirectories. Each session directory stores an event log (`events.jsonl`) and workspace artifacts (plans, checkpoints, tracked files). This data enables session resume (`--resume` or `--continue`).

Deleting files from this directory only removes local copies. If you have synced sessions to your {% data variables.product.github %} account, the synced data is stored separately and is not affected by local file deletion. You can delete or hide synced sessions from {% data variables.product.prodname_dotcom_the_website %}. For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/session-data#deleting-session-data).

### `command-history-state/`

Contains command history data used for reverse search (<kbd>Ctrl</kbd>+<kbd>R</kbd>) and history navigation in the interactive interface. This directory is managed automatically and should not be edited.

### `session-store.db`

A SQLite database used by the CLI for cross-session data such as checkpoint indexing and search. This file is automatically managed and should not be edited.

If you delete this file, you can rebuild it using the `/chronicle reindex` command. Reindexing also syncs your session data to your account.

### `logs/`

Contains log files for CLI sessions. Each session creates a log file named `process-{timestamp}-{pid}.log`. These files are useful for debugging issues.

The CLI may also create extension-specific logs under `logs/extensions/`.

This is separate from `~/.copilot/extensions/`, which stores user-authored extension code.

> [!TIP]
> To find the log file for your current session, enter `/session` in an interactive session. The output includes the full path to the log file, along with other session details such as the session ID, duration, and working directory.

### `installed-plugins/`

Contains the files for plugins you have installed. Plugins installed from a marketplace are stored under `installed-plugins/{marketplace-name}/{plugin-name}/`. Directly installed plugins are stored under `installed-plugins/_direct/`. Manage plugins using the `copilot plugin` commands rather than editing this directory directly.

For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference).

### `plugin-data/`

Contains persistent data for installed plugins, organized by marketplace and plugin name. This data is managed by the plugins themselves and should not be edited manually.

### `ide/`

Contains lock files and state for IDE integrations (for example, when {% data variables.copilot.copilot_cli_short %} connects to {% data variables.product.prodname_vscode %}). This directory is automatically managed.

### `mcp-oauth-config/`

Contains MCP OAuth token, registration, and PKCE fallback files when keychain-backed storage is unavailable. This directory is automatically managed.

### `mcp-secrets/`

Contains fallback file storage and an index for MCP secret placeholders when keychain-backed storage is unavailable. This directory is automatically managed.

## Changing the location of the configuration directory

To override the default `~/.copilot` location, set the `COPILOT_HOME` environment variable to the path of the directory you want to use.

  ```bash copy
  export COPILOT_HOME=/path/to/my/copilot-config
  ```

### Things to be aware of

* `COPILOT_HOME` replaces the entire `~/.copilot` path. The value you set should be the complete path to the directory you want to use for the configuration files and subdirectories.
* Changing the directory means your existing configuration, session history, installed plugins, and saved permissions will not be found in the new location. Copy or move the contents of `~/.copilot` to the new location if you want to preserve them.
* The **cache directory** (used for marketplace caches, auto-update packages, and other ephemeral data) follows platform conventions and is not affected by `COPILOT_HOME`. It is located at:
  * **macOS**: `~/Library/Caches/copilot`
  * **Linux**: `$XDG_CACHE_HOME/copilot` or `~/.cache/copilot`
  * **Windows**: `%LOCALAPPDATA%/copilot`

  To override the cache directory separately, set `COPILOT_CACHE_HOME`.

## What you can safely delete

| Item | Safe to delete? | Effect |
|------|-----------------|--------|
| `agents/`, `skills/`, `hooks/` | Not recommended | You will lose your personal customizations. Back up first. |
| `config.json` | With caution | Resets application state including authentication. You will need to re-authenticate and the CLI will re-detect internal state on next launch. |
| `copilot-instructions.md`, `instructions/` | Not recommended | You will lose your personal custom instructions. Back up first. |
| `extensions/` | Not recommended | You will lose your personal extensions. Back up first. |
| `installed-plugins/` | Not recommended | Use `copilot plugin uninstall` instead, to ensure plugin metadata in `config.json` remains accurate. |
| `logs/` | Yes | Log files are re-created each session. Deleting them has no functional impact. |
| `lsp-config.json` | Not recommended | You will lose your user-level LSP server definitions. Back up first. |
| `mcp-config.json` | Not recommended | You will lose your user-level MCP server definitions. Back up first. |
| `mcp-oauth-config/` | With caution | Clears local MCP OAuth fallback state. You may need to re-authenticate MCP servers. |
| `mcp-secrets/` | With caution | Clears local MCP secret fallback state and mappings. Secret-backed MCP servers may need reconfiguration. |
| `permissions-config.json` | With caution | Resets all saved permissions. The CLI will prompt you again for tool and directory approvals. |
| `plugin-data/` | Yes | Plugin persistent data is re-created as needed. |
| `providers.json` | Not recommended | You will lose your BYOK provider and model configuration. Back up first. |
| `session-state/` | With caution | Deleting removes session history. You will no longer be able to resume past sessions. |
| `command-history-state/` | With caution | Deleting removes command history. You will no longer be able to search previous commands with <kbd>Ctrl</kbd>+<kbd>R</kbd>. |
| `session-store.db` | With caution | Deleting removes cross-session data. The file is re-created automatically. |
| `settings.json` | With caution | Resets all user preferences to defaults. You will need to reconfigure your settings. |

## Configuration file settings

Settings are applied in this order (later overrides earlier):

<!-- markdownlint-disable MD029 -->
1. Built-in defaults
2. Mobile Device Management (MDM) managed settings
3. User settings (`~/.copilot/settings.json`)
4. Repository settings (`.github/copilot/settings.json`)
5. Local settings (`.github/copilot/settings.local.json`)
6. Environment variables
7. Command-line flags
<!-- markdownlint-enable MD029 -->

MDM managed settings load at startup and merge with user settings as a policy baseline. For most keys, user settings can override that baseline. For `permissions.disableBypassPermissionsMode`, an MDM value of `"disable"` always wins. Managed `sandbox` settings are another exception. Instead of being overridable, each managed `sandbox` value sets a floor that you cannot relax. If your own setting is more permissive, the managed value wins. The `sandbox.failIfUnavailable` setting can only be set by an administrator. For more information, see [MDM managed settings](#mdm-managed-settings).

| Scope | Location | Purpose |
|-------|----------|---------|
| User | `~/.copilot/settings.json` | Global defaults for all repositories. Use the `COPILOT_HOME` environment variable to specify an alternative path. |
| Repository | `.github/copilot/settings.json` | Shared repository configuration (committed to the repository). |
| Local | `.github/copilot/settings.local.json` | Personal overrides (add this to `.gitignore`). |

The CLI also reads `.claude/settings.json` and `.claude/settings.local.json` for the shared cross-tool subset of repository settings (such as `companyAnnouncements`, `disableAllHooks`, `enabledPlugins`, `extraKnownMarketplaces`, and `hooks`).

Repository defaults are optional: set `enabledPlugins` entries to `false` in repository-local settings to override repository defaults. Managed required or blocked plugin entries always win. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing#turn-off-a-repository-default).

### User settings (`~/.copilot/settings.json`)

These settings apply across all your sessions and repositories. You can use the `/settings` slash command to run an interactive dialog, or use specific slash commands to update individual values, or edit this file directly.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `allowedUrls` | `string[]` | `[]` | URLs or domains allowed without prompting. Supports exact URLs, domain patterns, and wildcard subdomains (for example, `"*.github.com"`). |
| `askUser` | `boolean` | `true` | Allow the agent to ask clarifying questions. Set to `false` for fully autonomous operation. Can also be set with `--no-ask-user`. |
| `autoTier` | `"efficiency"` \| `"balance"` \| `"intelligence"` | unset | Default Auto routing tier for new conversations when the selected model is `auto`. See the `/model` slash command. `"fast"` is no longer selectable and falls back to `"balance"` with a warning if set. |
| `autoUpdate` | `boolean` | `true` | Automatically download CLI updates and update first-party plugins at the start of each session. |
| `autoUpdatesChannel` | `"stable"` \| `"prerelease"` | `"stable"` | Update channel. Set to `"prerelease"` to receive pre-release updates. |
| `banner` | `"always"` \| `"once"` \| `"never"` | `"once"` | Animated banner display frequency. |
| `bashEnv` | `boolean` | `false` | Enable `BASH_ENV` support for bash shells. Can also be set with `--bash-env` or `--no-bash-env`. |
| `beep` | `boolean` | `true` | Play an audible beep when attention is required. |
| `beepOnSchedule` | `boolean` | `true` | Play an audible beep when a scheduled `/every` or `/after` run finishes. |
| `colorMode` | `"default"` \| `"github"` \| `"dim"` \| `"high-contrast"` \| `"colorblind"` | `"github"` | Deprecated alias for `theme`. Prefer `theme`. | <!-- markdownlint-disable-line GHD046 -->
| `commandHistoryMaxSize` | `number` | `50` | Maximum number of recent commands retained for input history and reverse search. Must be an integer between `1` and `1000`. |
| `compactPaste` | `boolean` | `true` | Collapse large pastes (more than 10 lines) into compact tokens. |
| `companyAnnouncements` | `string[]` | `[]` | Custom messages shown randomly on startup. One message is randomly selected each time the CLI starts. Useful for team announcements or reminders. |
| `connectors` | `boolean` | `true` | Enable {% data variables.product.prodname_copilot_short %} Connectors when available. Set to `false` to disable. |
| `continueOnAutoMode` | `boolean` | `false` | Automatically switch to auto mode when rate-limited. When `true`, eligible rate limit errors trigger an automatic switch to auto mode and retry. Does not apply to global rate limits or BYOK providers. |
| `copyOnSelect` | `boolean` | `true` (macOS), `false` (other) | Automatically copy mouse-selected text to the system clipboard. |
| `customAgents.defaultLocalOnly` | `boolean` | `false` | Only use local custom agents (no remote organization or enterprise agents). |
| `defaultMode` | `"interactive"` \| `"plan"` \| `"autopilot"` | `"interactive"` | The agent mode that new interactive sessions start in. The `--mode`, `--autopilot`, and `--plan` options take precedence. Resumed sessions keep their own mode, and the setting is ignored for `-p`/`--prompt`, `--server`, and `--acp` runs. |
| `defaultPermissionMode` | `"manual"` \| `"assisted"` \| `"allow-all"` | Varies | Your preferred permission mode for new interactive sessions. A managed `permissions.defaultMode` takes precedence over this preference. If neither default is set, sessions can start in manual or assisted mode. Set `"manual"` to prompt for requests that aren't already allowed, `"assisted"` to use model review for eligible requests, or `"allow-all"` to grant broad permissions equivalent to `--allow-all`. Deny rules and enterprise restrictions still apply. See [AUTOTITLE](/copilot/concepts/customizations/allowing-safe-commands). Resumed sessions keep their own mode. The setting does not apply to non-interactive runs, and `--allow-all` or `--yolo` takes precedence. An assisted startup default does not apply to remote sessions. If a configured mode is unavailable or blocked by enterprise policy, the CLI starts with manual approval and tells you why. Pair `"assisted"` or `"allow-all"` with `defaultMode: "autopilot"` to skip the autopilot permission confirmation when the configured permission mode can be applied. |
| `deniedUrls` | `string[]` | `[]` | URLs or domains that are always denied. Denial rules take precedence over allow rules. |
| `disableAllHooks` | `boolean` | `false` | Disable all hooks (both repository-level and user-level). |
| `disabledMcpServers` | `string[]` | `[]` | MCP server names to disable. Listed servers are configured but not started. |
| `disabledSkills` | `string[]` | `[]` | Skill names to disable. Listed skills are discovered but not loaded. |
| `dynamicRetrieval` | `{ skills?: boolean }` | unset | Per-category control of embeddings-based dynamic instruction retrieval. Set `skills` to `false` to disable retrieval for skills. |
| `editorMode` | `"normal"` \| `"vim"` | `"normal"` | Input composer editing mode. Set by toggling the `/vim` slash command. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface). |
| `effortLevel` | `string` | `"medium"` | Reasoning effort level for extended thinking: `"low"`, `"medium"`, `"high"`, or `"xhigh"`. Higher levels use more compute. |
| `enabledMcpServers` | `string[]` | `[]` | Enable built-in MCP servers that are disabled by default. |
| `enabledPlugins` | `Record<string, boolean>` | `{}` | Declarative plugin auto-install. Keys are plugin specs; values are `true` (enabled) or `false` (disabled). |
| `experimental` | `boolean` | `false` | Enable experimental features. Can also be enabled with the `--experimental` command-line option or the `/experimental` slash command. |
| `extraKnownMarketplaces` | `Record<string, {...}>` | `{}` | Additional plugin marketplaces. Each key is a marketplace name; the value specifies the required `source` (`"directory"`, `"git"`, or `"github"`). Set `autoUpdate: true` on an entry to opt that marketplace's installed plugins into session-start auto-update, the same as first-party plugins. This opt-in applies only to interactive and `-p` sessions—SDK and server sessions don't auto-update. The opt-in is honored when set in your own user settings, or in managed (MDM/server) settings. On a same-name collision, a built-in first-party marketplace wins, then a managed entry (which replaces the whole same-named user entry, so a managed entry without `"autoUpdate": true` removes the user's opt-in), then the user's own entry. |
| `footer` | `object` | — | Controls which items appear in the status line. Sub-keys include `showModelEffort`, `showDirectory`, `showBranch`, `showContextWindow`, `showQuota`, `showAgent`, `showAiUsed`, `showCodeChanges`, `showUsername`, `showSandbox`, `showYolo`, and `showCustom` (all `boolean`). Managed by the `/statusline` slash command. |
| `hooks` | `object` | — | Inline user-level hook definitions, keyed by event name. Uses the same schema as `.github/hooks/*.json` files. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks). |
| `ide.autoConnect` | `boolean` | `true` | Automatically connect to an IDE workspace on startup. When `false`, you can still connect manually using the `/ide` command. |
| `ide.openDiffOnEdit` | `boolean` | `true` | Open file edit diffs in the connected IDE for approval. When `false`, file edit approvals are shown only in the terminal. |
| `ignoredSkillsLocations` | `string[]` | `[]` | Skill directories (and their descendants) excluded from discovery, regardless of which location would otherwise surface them. Supports `~`-relative paths. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#skill-locations). |
| `includeCoAuthoredBy` | `boolean` | `true` | Add a `Co-authored-by` trailer to git commits made by the agent. |
| `inlineImages` | `boolean` | `true` | Render images inline using the Kitty graphics protocol. Requires a supported terminal (Ghostty, kitty, or WezTerm). When disabled, image attachments show a text placeholder. |
| `keepAlive` | `"on"` \| `"off"` \| `"busy"` | `"off"` | Keep-alive mode applied at CLI startup. `"on"` always prevents the system from sleeping, `"busy"` prevents sleeping only while the agent is running, and `"off"` disables keep-alive. Also configurable with the `/keep-alive` slash command. |
| `logLevel` | `"none"` \| `"error"` \| `"warning"` \| `"info"` \| `"debug"` \| `"all"` \| `"default"` | `"default"` | Logging verbosity. |
| `mergeStrategy` | `"rebase"` \| `"merge"` | — | Conflict resolution strategy for `/pr fix conflicts`. When set to `"rebase"`, conflicts are resolved by rebasing onto the base branch. When set to `"merge"`, the base branch is merged into the feature branch. If not configured, a picker dialog is shown. |
| `model` | `string` | varies | AI model to use. Set to `"auto"` to let {% data variables.product.prodname_copilot_short %} pick the best available model automatically. Managed by the `/model` slash command. |
| `mouse` | `boolean` | `true` | Enable mouse support. Can also be set with `--mouse` or `--no-mouse`. |
| `permissions.disableBypassPermissionsMode` | `string` | — | Set to `"disable"` to block all allow-all options (`--allow-all-tools`, `--allow-all-paths`, `--allow-all-urls`, `--allow-all`, `--yolo`). This setting does not block {% data variables.copilot.assisted_permissions %}, which are controlled separately. Other values are treated as an alias of `"disable"` and a warning is written to the log. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#restricting-the-allow-all-options). |
| `pinnedPrompts` | `boolean` | `true` | Pin the current section's user prompt just below the top bar while scrolling the timeline, so it stays clear which request the visible output belongs to. CLI UI only—has no effect on prompts sent to the model. |
| `powershellFlags` | `string[]` | `["-NoProfile", "-NoLogo"]` | Flags passed to PowerShell on startup. On Windows, the CLI prefers PowerShell 7+ (`pwsh`) and falls back to Windows PowerShell (`powershell.exe`) when `pwsh` is unavailable. Windows only. |
| `proxyKerberosServicePrincipal` | `string` | unset | Service principal name (SPN) for Kerberos/Negotiate proxy authentication, overriding the derived `HTTP/<proxy-host>`. |
| `proxyUrl` | `string` | unset | Proxy URL for HTTP(S) requests (for example, `http://proxy.corp.example:3128`). Overridden by the `HTTP_PROXY` or `HTTPS_PROXY` environment variables (any casing). |
| `remoteSessions` | `boolean` | `false` | Enable remote control by default for interactive sessions when remote control is available. Use `/remote on` or `/remote off` to change remote control for the current session. This is separate from the `remoteExport` setting for session syncing. |
| `renderHexColors` | `boolean` | `true` | Show six-digit hex color codes written as inline code (for example, `` `#FF0000` ``) as color swatches. |
| `renderMarkdown` | `boolean` | `true` | Render Markdown in terminal output. |
| `remoteExport` | `boolean` | `true` | Sync session history to your account when session sync is available. Set to `false` to opt out by default. Enabling remote control with `remoteSessions: true` also enables export, regardless of this setting. Syncing history does not itself enable remote control. Use `--sync-session=on` or `--sync-session=off` to override history syncing for a run. |
| `respectGitignore` | `boolean` | `true` | Exclude gitignored files from the `@` file mention picker. When `false`, the picker includes files normally excluded by `.gitignore`. |
| `sandbox.allowBypass` | `boolean` | `true` | Allow sandboxed commands to request a bypass for specific operations (displays a permission prompt), so tools like `grep` and `glob` keep working when the sandbox would otherwise block them. The prompt also lets you disable sandboxing for the rest of the current session if the effective policy permits bypass. Set to `false` to opt out. |
| `sandbox.enabled` | `boolean` | `false` | Restrict shell commands, MCP/LSP servers, and built-in file/web tools to a sandboxed environment with limited file system and network access. Enable it from the `/sandbox` dialog or with `/sandbox enable`. |
| `sandbox.auth.git` | `boolean` | `true` | Inject Git credentials into the sandbox so commands running inside it can authenticate with Git. Set to `false` to opt out. Renamed from `sandbox.gitAuth`; the old key has no migration and is ignored wherever it still appears. |
| `sandbox.auth.gh` | `boolean` | `true` | Inject {% data variables.product.prodname_cli %} (`gh`) credentials into the sandbox so commands running inside it can authenticate with the {% data variables.product.prodname_cli %}. Set to `false` to opt out. Renamed from `sandbox.ghAuth`; the old key has no migration and is ignored wherever it still appears. |
| `sandbox.credentials` | `object` | unset | Mask selected environment variables in sandboxed processes. Contains an `envVars` object keyed by variable name, with a non-empty `injectHosts` array for each entry. Processes receive placeholders, and the local proxy supplies the real values only in HTTPS request headers to those hosts. Stores variable names and host rules, not secret values. Requires sandboxing to be enabled. Configure from the `/sandbox` dialog's **Credentials** tab under **Masked environment variables**. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#masking-environment-variables). |
| `sandbox.userPolicy.network.allowLocalNetwork` | `boolean` | `false` | Control local network access, such as connections to local development servers. The effect on sandboxed commands depends on the operating system. On supported Windows hosts, enabling this setting also allows connections to the host's localhost. Older Windows versions keep localhost blocked even with this setting enabled. Windows proxying and host rules require this to be `true`. |
| `sandbox.userPolicy.network.proxy` | `object` | unset | Route sandboxed network traffic through an HTTP(S) proxy. Fields: `url` (required), `username` (optional), `password` (optional). The URL must not contain credentials. Configure credentials in the `/sandbox` dialog's **Network** tab, which masks the password field. Literal passwords use the OS credential store when available, with a local file fallback. `settings.json` holds a secret reference. The password can instead be a whole-field `${VAR}` or `$VAR` environment-variable reference. Proxy enforcement differs by platform, as described below. |
| `sandbox.userPolicy.network.allowedHosts` | `string[]` | `[]` | Hosts a sandboxed command is allowed to reach. Entries are exact hostnames, IP addresses, or `*.example.com` for subdomains but not the root domain (`*` matches every host). CIDR blocks are not supported. Do not include URLs or ports. A non-empty list blocks unmatched hosts, except for `localhost`, `127.0.0.1`, and `::1` when outbound and local network access are both enabled. These automatic entries do not change your saved list. Explicit deny rules and enterprise allowlists still apply. Configure from the `/sandbox` dialog's **Network** tab under **Host rules**. |
| `sandbox.userPolicy.network.blockedHosts` | `string[]` | `[]` | Hosts a sandboxed command is denied from reaching, matched the same way as `allowedHosts`. `blockedHosts` always takes precedence over a matching `allowedHosts` entry, and denying a domain also denies its subdomains. Configure from the `/sandbox` dialog's **Network** tab under **Host rules**. |
| `sandbox.userPolicy.filesystem.deniedPaths` | `string[]` | `[]` | Paths that sandboxed commands are denied access to. Windows requires a version that supports denied paths. If the host cannot enforce them, the command fails rather than running with weaker restrictions. Missing denied paths and their parents are created as directories before launch and are not automatically removed, even for a name such as `.env`. Preparation errors stop launch. The read-only `/sandbox policy` preview creates nothing and omits missing denied paths on Linux. |
| `sandbox.userPolicy.seatbelt.keychainAccess` | `boolean` | `false` | macOS only. Grant sandboxed commands access to the system keychain. Configurable only in `settings.json`, not through `/sandbox` or `/settings`. |
| `screenReader` | `boolean` | `false` | Enable screen reader optimizations. |
| `scrollbar` | `boolean` | `true` | Show the scrollbar in scrollable views. Set to `false` to hide it and use the full terminal width. |
| `shellShortcut` | `boolean` | `true` | Let a lone `$` at the prompt, followed by <kbd>Enter</kbd>, open an interactive shell rooted at the session's working directory (activates only for a local, trusted, idle session on a real TTY). User- or managed-scoped only—not repo-overridable. |
| `showReasoning` | `boolean` | None | Show model reasoning in the timeline. You can set this with `/config` or `/settings`, or toggle it with <kbd>Ctrl</kbd>+<kbd>T</kbd>. Your preference is saved across sessions. |
| `showTimestamps` | `boolean` | `true` | Show dim `HH:mm` timestamps next to user messages in the timeline. |
| `showTipsOnStartup` | `boolean` | `true` | Show a random command tip when the CLI starts. |
| `sidebar` | `boolean` | `true` | Enable the current-session sidebar. Set to `false` to disable it entirely, hiding the composer hint and the <kbd>←</kbd> open gesture. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#sidebar-and-sessions-tab-shortcuts). |
| `skillDirectories` | `string[]` | `[]` | Additional directories to search for custom skill definitions (in addition to `~/.copilot/skills/`). |
| `statusLine` | `object` | — | Custom status line display. `type`: must be `"command"`. `command`: path to an executable script that receives session JSON on stdin and prints status content to stdout. `padding`: optional number of left-padding spaces. `refreshInterval`: optional integer number of seconds (`1`–`2147483`) to re-run the command on a timer instead of only on events; omit it to refresh only when the session state changes. If the command fails to spawn, exits non-zero, or fails to receive the status JSON on stdin, the CLI logs a warning once per continuous failure episode and leaves the status line blank instead of failing silently. Run with `--log-level all` to see the underlying error detail. |
| `stayInAutopilot` | `boolean` | `true` | Remain in autopilot mode after each task completes. When enabled, the next prompt you enter after a task completes is also handled in autopilot mode. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli/use-autopilot-mode). |
| `storeTokenPlaintext` | `boolean` | `false` | Allow authentication tokens to be stored in plain text in `config.json` when no system keychain is available. |
| `stream` | `boolean` | `true` | Enable streaming responses. |
| `streamerMode` | `boolean` | `false` | Hide preview model names, quota details, prompt timestamps, and the update-available notice. Useful when demonstrating {% data variables.copilot.copilot_cli_short %} or screen sharing. |
| `subagents.agents` | `object` | `{}` | Per-agent model configuration, keyed by agent name. Each value is an object with optional `model` (string), `modelPolicy` (`"preferred"` or `"required"`), `effortLevel` (string), and `contextTier` (`"default"`, `"long_context"`, or `"inherit"`) fields. Set `model`, `effortLevel`, or `contextTier` to `"inherit"` to use the parent session's value at dispatch time. `modelPolicy` has no effect when the agent definition itself sets `modelPolicy: "required"`—that lock can't be overridden here. Use the `/subagents` slash command to configure these settings interactively. |
| `subagents.agents["rubber-duck"].autoInvoke` | `boolean` | `false` | Allow Copilot to proactively consult the rubber duck agent without being asked. To change this, run `/subagents`, select `rubber-duck`, press **Enter**, then toggle **Proactive invocation**. |
| `subagents.disabledSubagents` | `string[]` | `[]` | Names of subagents that are turned off. Manage this list using the **On/Off** control for each agent in the `/subagents` picker in an interactive session. |
| `subagents.maxConcurrency` | `number` | plan-based | Maximum concurrent subagents for this session. Only honored for usage-based billing users; ignored for all other plans. Capped at `32`. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#subagent-limits). |
| `subagents.maxDepth` | `number` | `6` | Maximum subagent nesting depth. Only honored for usage-based billing users; ignored for all other plans. Capped at `256`. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#subagent-limits). |
| `tabs.enabled` | `boolean` | `true` | Show the home tab bar. Set to `false` to hide it entirely. |
| `tabs.hide` | `string[]` | `[]` | Tab identifiers to hide. Accepted values: `"copilot"`, `"agents"`, `"issues"`, `"pull-requests"`, `"gists"` (matched case-insensitively). |
| `tabs.sort` | `string[]` | `[]` | Order in which tabs are displayed. Tabs not listed keep their default relative order after the listed ones. Unknown identifiers are ignored. |
| `taskbarPresence` | `boolean` | `true` | Show a live {% data variables.product.prodname_copilot_short %} session on the Windows taskbar (agent icon and hover card). Set to `false` to opt out. Startup-only; takes effect on the next launch. Windows only. |
| `terminalNotifications` | `boolean` | `false` | Prefer terminal-owned OSC 777 notifications on supported terminals (Ghostty, WezTerm) when desktop notifications are enabled, falling back to native OS notifications when unsupported or delivery fails. |
| `terminalProgress` | `boolean` | `true` | Emit OSC 9;4 terminal progress indicators while the agent is working. Supported terminals include Windows Terminal, iTerm2, Ghostty, and ConEmu. |
| `theme` | `"default"` \| `"github"` \| `"dim"` \| `"high-contrast"` \| `"colorblind"` | `"github"` | Color palette for terminal output. Managed by the `/settings` and `/theme` slash commands. `colorMode` is a deprecated alias for this setting. | <!-- markdownlint-disable-line GHD046 -->
| `toolSearch` | `boolean` | model- and feature-dependent | Controls tool search (deferred tool loading). Set `toolSearch: false` to opt out of tool search. |
| `transcriptView` | `"default"` \| `"concise"` | `"default"` | Set to `"concise"` to group tool activity into expandable work summaries in the timeline. Set to `"default"` to show the full native transcript. |
| `updateTerminalTitle` | `boolean` | `true` | Show the current intent in the terminal tab or window title. |
| `worktreeBaseRef` | `"head"` \| `"defaultBranch"` | `"head"` | Starting point for new worktrees created by `/worktree`, `/worktree new`, `/new worktree`, `/move`, and `--worktree`. `"defaultBranch"` starts from the remote default branch instead of the current checkout. `/fork worktree` always branches off `HEAD`, regardless of this setting. |
| `worktreePathTemplate` | `string` | unset | Where `/worktree`, `/move`, `/new`, and `--worktree` create worktrees—for example, `~/src/worktrees/{repo}/{branch}`. Supports the `{repoPath}`, `{repo}`, `{branch}`, and `{branchSlug}` placeholders. When unset, the default layout, `<repo>.worktrees/`, is used, with slashes in the branch name flattened to dashes. |

> [!TIP]
> Run `copilot help sandbox` for the full sandbox reference, including supported hosts and all `sandbox` settings keys.

The `/sandbox` dialog groups Git authentication, `gh` authentication, and masked environment variables under a dedicated **Credentials** tab, and shows the `settings.json` path where the current sandbox configuration is stored. On the **Filesystem** tab, the configured path list is summarized by permission (for example, `2 read/write, 1 read-only`) behind a **User-configured paths** row. Press <kbd>Enter</kbd> on that row to open the full list, which takes over the cursor and tab bar until you press <kbd>Esc</kbd>. Configured paths are displayed as absolute paths rather than `./`-relative or `~`-shortened forms. Typing `~/path` when adding a path still expands it to your home directory. Press <kbd>Ctrl</kbd>+<kbd>E</kbd> in the `/sandbox` dialog to save any pending changes and open `settings.json` in your editor (`COPILOT_EDITOR`, `VISUAL`, or `EDITOR`), matching the same shortcut in `/settings`. The dialog reloads its state from disk after you edit and save the file.

Host rules and `sandbox.userPolicy.network.proxy` use a built-in local proxy. When both are configured, the local proxy applies the host rules before forwarding traffic to the upstream proxy. Upstream credentials stay outside the sandboxed child process. Host rules and proxy settings are inactive when outbound access is off.

When no proxy is set in sandbox settings, the local proxy selects its upstream proxy from the first non-empty environment variable on the host in this order: `HTTPS_PROXY`, `HTTP_PROXY`, `ALL_PROXY`. Only `http://` and `https://` proxies are supported, not `socks5`.

Destinations matching the host's `NO_PROXY` bypass only this inherited upstream proxy. The sandbox's local proxy still handles these connections and applies its host rules. A proxy configured in sandbox settings ignores `NO_PROXY`.

On macOS and Linux, the sandbox restricts direct connections so programs cannot avoid the proxy. On Windows, the sandbox relies on programs honoring the proxy settings. As a result, programs that ignore the proxy settings on Windows can connect directly and get around your host rules. Windows proxying and host rules also require a supported host and `allowLocalNetwork: true`, which permits private-network access. On Linux, proxy settings reject IPv6 address literals other than the `[::]` dual-stack wildcard. Use an IPv4 endpoint or a hostname with IPv4 support.

Sandbox settings are user-level or enterprise-managed. They are not repository-overridable. For configuration steps and network limitations, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

Sandboxing is powered by [Microsoft eXecution Container (MXC)](https://github.com/microsoft/mxc?utm_source=cli-config-directory-reference-article-microsoft-mxc&utm_medium=docs&utm_campaign=universe-2026), which provides platform-specific containment backends. {% data variables.copilot.copilot_cli_short %} uses Seatbelt on macOS, Bubblewrap on Linux, and ProcessContainer on Windows.

### Repository settings (`.github/copilot/settings.json`)

Repository settings apply to everyone who works in the repository. They are committed to the repository and shared with collaborators.

> [!NOTE]
> The plugin-related keys in the repository configuration file (`enabledPlugins` and `extraKnownMarketplaces`) are also read by {% data variables.copilot.copilot_in_the_cloud_short %}, not only {% data variables.copilot.copilot_cli_short %}. This lets you enable the same plugins for both clients from a single file. For more information about plugins, see [AUTOTITLE](/copilot/concepts/customizations/plugins).

Only the keys listed in the following table are supported at the repository level. Any other keys—including keys that are valid in the user configuration file—are silently ignored. Each supported key has a directional merge policy that keeps the override fail-closed and safe.

| Key | Type | Merge behavior | Description |
|-----|------|---------------|-------------|
| `companyAnnouncements` | `string[]` | Replaced—repository takes precedence | Messages shown randomly on startup. |
| `contextTier` | `"default"` \| `"long_context"` | Replaced—repository takes precedence | Pin the default context tier. |
| `deniedUrls` | `string[]` | Union—repository can add entries, never remove | URLs or domains blocked. |
| `disableAllHooks` | `boolean` | Repository takes precedence | Disable all hooks. |
| `disabledMcpServers` | `string[]` | Union—repository can add entries, never remove | MCP servers configured but not started. |
| `disabledSkills` | `string[]` | Union—repository can add entries, never remove | Skills discovered but not loaded. |
| `effortLevel` | `string` | Replaced—repository takes precedence | Pin the default reasoning effort. |
| `enabledPlugins` | `Record<string, boolean>` | Merged—repository overrides user for same key | Declarative plugin auto-install. |
| `extraKnownMarketplaces` | `Record<string, {...}>` | Merged—repository overrides user for same key | Plugin marketplaces available in this repository. Each entry's `source` is required. An `autoUpdate: true` on an entry is accepted at the repository level but currently ignored—the auto-update opt-in is only honored when set in the user's own settings or in managed (MDM/server) settings. |
| `hooks` | `object` | Merged—repository overrides user for same key | Hook definitions scoped to this repository. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks). |
| `includeCoAuthoredBy` | `boolean` | Replaced—repository takes precedence | Add a `Co-authored-by` trailer to commits. |
| `mergeStrategy` | `"rebase"` \| `"merge"` | Replaced—repository takes precedence | Conflict resolution strategy for `/pr fix conflicts`. |
| `model` | `string` | Replaced—repository takes precedence | Pin the default model for this repo. |
| `respectGitignore` | `boolean` | Tighten-only—repository can enable, never disable | Exclude gitignored files from the `@` file mention picker. |

`model`, `effortLevel`, and `contextTier` overrides only apply when the working directory is [trusted](/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools).

A plugin enabled only through a repository's `enabledPlugins` is scoped to that repository: it auto-installs and activates in the declaring repository, but stays disabled globally, so it never activates in unrelated projects. Leaving the repository, or the repository disabling the plugin, tears down its MCP server and deactivates its agents and skills for the session.

### Repository-level models allowlist (`.github/allowed_models.txt`)

Restrict which built-in models a repository can use with a plain-text allowlist at `.github/allowed_models.txt`, resolved from the current working directory's repository root (or the working directory itself outside a repository).

Each line is a glob pattern matched against model IDs, or a `fallback:` directive naming the model to use when the configured or requested model isn't allowed:

```text
# .github/allowed_models.txt
fallback: gpt-6-astra
gpt-6-astra
gpt-6-sol
claude-sonnet-*
```

| Rule | Description |
|------|-------------|
| `*` | Allow all models (default when no file is present). |
| `MODEL-ID` | Allow an exact model ID. |
| `GLOB-PATTERN` | Allow model IDs matching the glob (for example, `claude-sonnet-*`). |
| `fallback: MODEL-ID` | Required exactly once. The model {% data variables.product.prodname_copilot_short %} uses when the active model isn't allowed. |
| `#` | Comment line. |

Negated patterns (`!pattern`) aren't supported, the fallback model must be an exact ID (not a glob), and the fallback model must itself match one of the configured globs. {% data variables.copilot.copilot_cli_short %} re-evaluates the policy on `/cd` and rejects an invalid file with an error before running.

The allowlist governs only {% data variables.product.prodname_copilot_short %}'s built-in models. It cannot filter out custom models added using the bring your own API keys (BYOK) method. BYOK models remain listed and selectable regardless of the patterns you configure, and the `fallback:` directive never applies to them. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/enable-custom-models).

### Local settings (`.github/copilot/settings.local.json`)

Create `.github/copilot/settings.local.json` in the repository for personal overrides that should not be committed. Add this file to `.gitignore`.

The local configuration file uses the same schema as the repository configuration file (`.github/copilot/settings.json`) and takes precedence over it.

## MDM managed settings

IT administrators can push baseline policy using Mobile Device Management (MDM) managed settings instead of requiring per-user configuration. These settings apply device-level defaults for supported keys and load before user settings.

Managed settings apply uniformly across every session-hosting mode—interactive, `-p`, `--acp`, `--ahp-host`, and `--server`—so enterprise MCP, permission, and plugin policy can't be bypassed by starting a session through a different entry point.

{% data variables.copilot.copilot_cli_short %} also loads server-managed settings at startup, in addition to MDM. Device-managed (MDM) and server-managed settings are resolved **per key**: MDM's value wins for any key it sets, and the server's value fills in keys MDM leaves unset. This lets an organization set some policy via MDM (for example, `permissions`) while still receiving other managed defaults (for example, `model`) from the server.

Long-running sessions re-fetch and re-apply managed settings hourly, so policy changes—for example, an organization enabling `permissions.disableBypassPermissionsMode`—take effect without restarting the session.

### MDM managed settings sources

{% data variables.copilot.copilot_cli_short %} reads managed settings from platform-specific MDM or file-based locations.

| Platform | Source type | Location |
|----------|-------------|---------|
| macOS | MDM plist | `com.github.copilot` |
| macOS | File | `/Library/Application Support/GitHubCopilot/managed-settings.json` |
| Windows | MDM registry | `HKLM\SOFTWARE\Policies\GitHubCopilot` |
| Windows | File | `%ProgramFiles%\GitHubCopilot\managed-settings.json` |
| Linux | File | `/etc/github-copilot/managed-settings.json` |

> [!NOTE]
> On POSIX systems, {% data variables.copilot.copilot_cli_short %} rejects file-based managed settings that are symlinks, not owned by root, or world-writable.

### File format

Write file-based managed settings as JSON.

```json
{
    "model": "auto",
    "permissions": {
        "disableBypassPermissionsMode": "disable"
    }
}
```

> [!NOTE]
> `model` is a top-level key. Older configurations that nested it as `permissions.model` still work—the runtime falls back to that location when the top-level `model` key is absent—but write new configurations with `model` at the top level.

### Supported keys

Only the following keys are supported in MDM managed settings.

| Key | Description |
|-----|-------------|
| `allowedMcpServers` | Allowlist of MCP servers users may load, matched by `serverUrl`, `serverCommand`, or `serverName`. Trusted first-party servers (for example, the built-in {% data variables.product.github %} MCP server) are always exempt. Leaving this key unset allows all non-default servers; an empty array denies all of them. See [Managed MCP server allow/deny list](#managed-mcp-server-allowdeny-list). |
| `autoTier` | Set a default Auto routing tier (`"efficiency"`, `"balance"`, or `"intelligence"`) for sessions with `model` set to `auto`. A bare string strictly locks the tier, overriding user and repository settings and hiding it from `/settings`. Use `{"overridable": "TIER"}` instead to set an organization default that users and repositories may still override. `"fast"` is no longer selectable and falls back to `"balance"` with a warning. |
| `deniedMcpServers` | Denylist of MCP servers that must never load, matched the same way as `allowedMcpServers`. A matching non-default server is blocked regardless of the allowlist—deny always wins. See [Managed MCP server allow/deny list](#managed-mcp-server-allowdeny-list). |
| `enabledPlugins` | Enable or disable specific plugins |
| `extraKnownMarketplaces` | Add trusted plugin marketplaces |
| `forceLoginOrgs` | Pin sign-in to an approved set of {% data variables.product.github %} organizations (an array of organization logins, matched case-insensitively). {% data variables.product.prodname_copilot_short %} only runs for an account belonging to at least one listed organization; a personal account, an account that belongs only to some other enterprise, or BYOK/API-key authentication is refused with an actionable error. Set an empty array to turn the pin off without deleting the key. Deploy this key through the device channel (MDM plist/registry, or `managed-settings.json`) since it must be able to redirect a developer's first sign-in—the server-managed channel only reaches accounts that have already authenticated into the organization. This key fails closed: an unusable value, or a managed policy that can't be read on a known-managed device, blocks all sign-in until fixed. |
| `forceRemoteSettingsRefresh` | Require a fresh server-managed settings fetch on startup, even when a fresh cached policy exists. Cached policy cannot satisfy the freshness requirement. If the fetch fails, affected operations remain restricted until current policy is confirmed. The device (MDM) value takes precedence over a cached server value. |
| `model` | Set a default model for all users (overridden by the `--model` flag or a resumed-session model). `effortLevel` and `contextTier` set alongside `model` apply the same managed reasoning effort and context tier as the corresponding [repository settings](#repository-settings-githubcopilotsettingsjson) keys, but only when the managed model supports explicit effort/context options. |
| `permissions` | Set managed permissions, including `disableBypassPermissionsMode`, `deny` / `ask` / `allow` rule arrays, and the `limitTo` domain boundary array. See [Managed permission rules](#managed-permission-rules) and [Domain boundary (`limitTo`)](#domain-boundary-limitto). |
| `policyHelper` | Register an executable that supplies the lowest-priority managed-settings layer. Fields: `path` (required), plus optional `args`, `timeoutMs`, and `refreshIntervalMs`. If both a device (MDM) and a server policy register a `policyHelper`, the device registration wins. |
| `remoteControl` | Control whether sessions on this device can be controlled from other devices. `mode` is `"enabled"`, `"disabled"`, or `"requireSSO"` (requires `githubDotComOrganizations` when set). |
| `requireBase64ImageAttachments` | When `true`, require base64-encoded image attachments instead of attachment URLs. `false` or unset keeps existing behavior. |
| `sandbox` | Set a sandbox policy floor that users cannot relax. Supported settings include `enabled`, `failIfUnavailable`, `allowBypass`, `addCurrentWorkingDirectory`, `sandboxMcpServers`, `sandboxLspServers`, `auth.git`, `auth.gh`, `allowDevToolAccess`, `learningMode`, and the `userPolicy.*` filesystem and network rules. The managed value always takes precedence over a user's own value in the safer direction. Turning the sandbox on, requiring it to succeed, and sandboxing MCP and LSP servers cannot be turned off. Disabling bypass or credential injection cannot be re-enabled. Filesystem allow lists can only be narrowed, and denied paths can only be added to. `failIfUnavailable` can only be set by an administrator and blocks the session when the sandbox cannot be established. For the settings users can set themselves, see [User settings](#user-settings-copilotsettingsjson) or run `copilot help sandbox`. |
| `shellShortcut` | Force-enable or force-disable the `$` interactive shell shortcut for all users. A managed value always overrides the user's own `shellShortcut` setting. |
| `strictKnownMarketplaces` | Restrict plugins to an allowlist of known marketplaces (a JSON array of marketplace specs). The allowlist also governs built-in marketplaces once set—an empty array (`[]`) hides and blocks every marketplace, including built-ins, not just user- or repository-added ones. |
| `telemetry` | Push baseline OpenTelemetry export configuration: `enabled`, `endpoint`, `protocol`, `headers`, `resourceAttributes`, `captureContent`, `lockCaptureContent`, `serviceName`, and `headersProvider`. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#opentelemetry-monitoring). |

> [!NOTE]
> * `policyHelper.path` accepts an absolute path, a home-relative path (`~/...`), or a bare program name resolved from `PATH`. Other relative forms are rejected. The registration is accepted and validated, but the runtime doesn't yet invoke the helper—helper execution ships in a future release.
> * When `remoteControl.mode` is `"requireSSO"`, list the allowed organizations in `remoteControl.githubDotComOrganizations`. The client must be SSO-authorized for at least one listed {% data variables.product.prodname_dotcom_the_website %} organization—it no longer needs to be authorized for all of them.
> * Set `permissions.disableBypassPermissionsMode` to `"disable"` in MDM managed settings to block allow-all options at the device level. Account switches cannot override this policy. If an unrecognized value is set, the CLI logs the issue and enforces `"disable"` as a fail-closed default. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#restricting-the-allow-all-options).
> * Most managed keys lock the entire row: a local edit is silently overridden by the managed value on the next load. `enabledPlugins` and `extraKnownMarketplaces` are the exception—the managed layer merges these maps with your own entries field-by-field instead of replacing them outright. This means the lock applies **per entry**, not to the whole key: a plugin or marketplace pinned by a managed policy can't be re-enabled, disabled, or repointed locally, but other entries in the same map remain fully user-controlled.
> * `sandbox.learningMode` is Windows-only and can only be set through native MDM (for example, through Intune or the registry)—a `managed-settings.json` file value is ignored. On a host with denial capture, set it to `"allow"` to start sandboxed shell commands in record-and-allow mode instead of the default record-and-deny mode, recording each filesystem or process access and allowing it rather than refusing it (network policy is still enforced). This lets an administrator observe what a cohort's commands need before locking them down; it is not a containment mode. The status line shows `sandbox relaxed` and shell calls show `(sandbox relaxed)` while it applies. A `deny` value (the default), or removing the key, returns the cohort to the ordinary enforced sandbox, and `deny` from any managed channel always wins over `allow`. User settings and SDK hosts cannot set this key.

### Managed permission rules

Add `deny`, `ask`, and `allow` rule lists under the managed `permissions` key to enforce a permission policy for everyone. This works whether or not `permissions.disableBypassPermissionsMode` is set.

```json
{
    "permissions": {
        "deny": ["Shell(rm -rf *)", "Domain(*.evil.example)"],
        "ask": ["Shell(git push *)"],
        "allow": ["Read(**)"]
    }
}
```

| Rule family | Matches |
|-------------|---------|
| `Bash(...)`, `Shell(...)` | Shell commands. Use `<command> *` (for example, `git push *`) to match a command prefix; otherwise the rule matches exact text. |
| `PowerShell(...)` | PowerShell commands, matched the same way as `Shell(...)`. |
| `Read(...)` | File read/view paths. Supports glob patterns: `/` for the workspace root, `~/` for the home directory, and `./` for the current working directory. |
| `Edit(...)`, `Write(...)` | File write/edit paths, matched the same way as `Read(...)`. |
| `Domain(...)` | URL hostnames, matched like [URL rules](/copilot/reference/copilot-cli-reference/cli-command-reference#tool-permission-patterns). |

Rules are combined across managed sources with a fixed precedence: deny always wins, then ask, then allow—matching a `deny` rule blocks the request even if an `allow` rule also matches. `deny` and `ask` are unioned across every managed source (server, MDM). `allow` requires every source that declares an `allow` list to admit the operation—an intersection, not a union. When any of `deny`, `ask`, or `allow` is set, an operation that matches none of them defaults to `ask` rather than falling through silently.

`Edit(...)` and `Write(...)` rules apply to more than the built-in file tools. They also cover files written directly by a shell command. {% data variables.copilot.copilot_cli_short %} recognizes a fixed set of these writes. It covers Bash output redirections (`>`, `>>`, `>|`, `&>`, `&>>`), PowerShell output redirections (`>`, `>>`, `*>`, `*>>`), and a small set of in-place `sed` edits (`sed -i` or `--in-place`, and the BSD forms `-i ''` and `-I ''`). When {% data variables.copilot.copilot_cli_short %} can work out the target file from the command, a matching `deny` rule blocks the write and a matching `ask` rule prompts you first. This applies even when a broad rule like `Shell(*)` would otherwise allow the command. Sometimes the target file cannot be worked out ahead of time, for example when the path comes from a variable. In that case these path rules do not apply, and the command is checked by the normal shell command rules instead.

### Domain boundary (`limitTo`)

Add a `limitTo` array alongside `deny`, `ask`, and `allow` under the managed `permissions` key to enforce a closed-world domain allowlist:

```json
{
    "permissions": {
        "limitTo": ["github.com", "*.github.com"]
    }
}
```

Only `Domain(...)` entries are supported in `limitTo`. Any agent network request to a domain outside the list is denied without prompting, and user rules, saved approvals, and allow-all modes can't widen it. URLs detected in shell requests are treated as `Domain` requests and must also satisfy the boundary. `limitTo` doesn't restrict `shell`, `read`, or `write` operations by themselves.

An empty `limitTo` list denies every domain request. An invalid list, or an invalid entry, is enforced as an empty list (and reported as a configuration error) rather than discarding the rest of the managed policy.

`deny` still takes precedence over `limitTo`. `ask` and `allow` only refine requests that are already inside the boundary. Like `allow`, `limitTo` is an intersection across managed sources—every managed source that declares a `limitTo` list must admit the request.

## Managed MCP server allow/deny list

Administrators can govern MCP servers directly through MDM managed settings, independent of the [enterprise MCP allowlist](/copilot/reference/copilot-cli-reference/cli-command-reference#enterprise-mcp-allowlist).

Set `allowedMcpServers` and/or `deniedMcpServers` in a managed settings source:

```json
{
    "allowedMcpServers": [
        { "serverUrl": "https://mcp.example.com/*" },
        { "serverCommand": ["npx", "-y", "@example/mcp-server"] }
    ],
    "deniedMcpServers": [
        { "serverName": "untrusted-server" }
    ]
}
```

Each entry identifies a server by exactly one of the following matchers.

| Matcher | Matches | Notes |
|---------|---------|-------|
| `serverUrl` | A remote (HTTP/SSE) server by URL | Supports `*` wildcards; scheme and host match case-insensitively, path case-sensitively. `${VAR}` references expand before matching. |
| `serverCommand` | A stdio server by its exact command and arguments, in order | `${VAR}` references expand before matching. |
| `serverName` | A server by its assigned label | Allowlist entries are restricted to `[A-Za-z0-9_./-]+` (case-sensitive, no wildcards; registry names such as `microsoft/playwright-mcp` are accepted); denylist entries accept any non-empty string. |

Rules:

* **Trusted first-party servers** (for example, the built-in {% data variables.product.github %} MCP server) are always exempt from both lists.
* **Unset `allowedMcpServers`** allows all non-default servers; an **empty array** blocks all of them (deny-all).
* **Unset or empty `deniedMcpServers`** blocks nothing.
* **Deny always wins**—a server matching `deniedMcpServers` is blocked even if it also matches `allowedMcpServers`.
* For remote servers, a match must come from a `serverUrl` entry; `serverName` only counts when no `serverUrl` entries exist. For stdio servers, a match must come from a `serverCommand` entry; `serverName` only counts when no `serverCommand` entries exist.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
* [AUTOTITLE](/copilot/reference/hooks-reference)
