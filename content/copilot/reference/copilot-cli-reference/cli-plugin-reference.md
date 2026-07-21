---
title: GitHub Copilot CLI plugin reference
shortTitle: CLI plugin reference
intro: 'Find commands and configuration details for CLI plugins.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
redirect_from:
  - /copilot/reference/cli-plugin-reference
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.copilot.copilot-cli.cli-help-note %}

For an overview of what plugins are and how they work across {% data variables.product.prodname_copilot_short %} clients, see [AUTOTITLE](/copilot/concepts/agents/about-plugins).

## CLI commands

You can use the following commands in the terminal to manage plugins for {% data variables.copilot.copilot_cli_short %}. `copilot plugin` and `copilot plugins` are interchangeable—use whichever reads better for the subcommand.

| Command                                        | Description |
|------------------------------------------------|-------------|
| `copilot plugin install SPECIFICATION`         | Install a plugin. See [Plugin specification for `install` command](#plugin-specification-for-install-command) below. |
| `copilot plugin uninstall NAME`                | Remove a plugin |
| `copilot plugin list`                          | List installed plugins |
| `copilot plugin update NAME`                   | Update a named plugin. Use `--all` to update all installed plugins at once. |
| `copilot plugin enable NAME`                   | Enable a previously disabled plugin |
| `copilot plugin disable NAME`                  | Disable a plugin without uninstalling it |
| `copilot plugin marketplace add SPECIFICATION` | Register a marketplace. Use `--name NAME` to set a custom local name. |
| `copilot plugin marketplace list`              | List registered marketplaces |
| `copilot plugin marketplace browse NAME`       | Browse marketplace plugins |
| `copilot plugin marketplace update NAME`       | Re-fetch a marketplace's plugin catalog. Use `--all` to refresh every registered marketplace. |
| `copilot plugin marketplace remove NAME`       | Unregister a marketplace. Refused if plugins from the marketplace are still installed; pass `--force` to also uninstall those plugins. |

Non-interactively, `copilot plugins enable NAME --plugin`, `copilot plugins disable NAME --plugin`, and `copilot plugins remove NAME --plugin` provide the same enable, disable, and uninstall operations. `--plugin` is the default kind and can be omitted for these three commands. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#using-copilot-plugins-list) for the non-interactive `--mcp` and `--skill` kinds, which extend these commands to MCP servers and skills.

### Plugin specification for `install` command

| Format        | Example                         | Description |
|---------------|---------------------------------|-------------|
| Marketplace   | `plugin@marketplace`            | Plugin from a registered marketplace |
| {% data variables.product.github %}         | `OWNER/REPO`                 | Root of a {% data variables.product.github %} repository |
| {% data variables.product.github %}  subdir | `OWNER/REPO:PATH/TO/PLUGIN`  | Subdirectory in a repository |
| Git URL       | `https://github.com/o/r.git`    | Any Git URL |
| Local path    | `./my-plugin` or `/abs/path`    | Local directory |

## `plugin.json`

All plugins consist of a plugin directory containing, at minimum, a manifest file named `plugin.json` located at the root of the plugin directory. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

### Required field

| Field   | Type   | Description |
|---------|--------|-------------|
| `name`  | string | Kebab-case plugin name (letters, numbers, hyphens only). Max 64 chars. |

### Optional metadata fields

| Field        | Type      | Description |
|--------------|-----------|-------------|
| `description`| string    | Brief description. Max 1024 chars. |
| `version`    | string    | Semantic version (e.g., `1.0.0`). |
| `author`     | object    | `name` (required), `email` (optional), `url` (optional). |
| `homepage`   | string    | Plugin homepage URL. |
| `repository` | string    | Source repository URL. |
| `license`    | string    | License identifier (e.g., `MIT`). |
| `keywords`   | string[]  | Search keywords. |
| `category`   | string    | Plugin category. |
| `tags`       | string[]  | Additional tags. |

### Component path fields

These tell the CLI where to find your plugin's components. All are optional. The CLI uses default conventions if omitted.

| Field       | Type               | Default    | Description |
|-------------|--------------------|------------|-------------|
| `agents`    | string \| string[] | `agents/`  | Path(s) to agent directories (`.agent.md` files). |
| `skills`    | string \| string[] | `skills/`  | Path(s) to skill directories (`SKILL.md` files). |
| `commands`  | string \| string[] | —          | Path(s) to command directories. |
| `hooks`     | string \| object   | —          | Path to a hooks configuration file, or an inline hooks object. |
| `extensions`| string \| string[] \| object | —          | Path(s) to extension directories. Use `{ paths: [...], exclusive: true }` to suppress built-in extensions. |
| `mcpServers`| string \| object   | —          | Path to an MCP configuration file (e.g., `.mcp.json`), or inline server definitions. |
| `lspServers`| string \| object   | —          | Path to an LSP configuration file, or inline server definitions. |

### Example `plugin.json` file

{% data reusables.copilot.copilot-cli.cli-example-plugin-file %}

### LSP server configuration

To include LSP (Language Server Protocol) servers in a plugin, create a `lsp-config/servers.json` file in the plugin directory, or specify a path or inline object using the `lspServers` field in `plugin.json`.

Example `lsp-config/servers.json` (or inline via `lspServers` in `plugin.json`):

```json
{
    "lspServers": {
        "my-lsp": {
            "command": "my-language-server",
            "fileExtensions": { ".myext": "mylang" }
        }
    }
}
```

For cross-platform support, use `bash` and `powershell` instead of `command`:

```json
{
    "lspServers": {
        "my-lsp": {
            "bash": "${PLUGIN_ROOT}/scripts/start-lsp.sh",
            "powershell": "${PLUGIN_ROOT}/scripts/start-lsp.ps1",
            "fileExtensions": { ".myext": "mylang" }
        }
    }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `command` | string | * | Executable to launch the language server. |
| `bash` | string | * | Bash script to launch the server (Linux/macOS); executed via `bash -c SCRIPT`. |
| `powershell` | string | * | PowerShell script to launch the server (Windows); executed via `pwsh -c SCRIPT`. |
| `cwd` | string | No | Working directory. Absolute or relative to the configuration file. Supports `${PLUGIN_ROOT}`. |
| `args` | string[] | No | Arguments to pass to `command` (ignored for `bash` and `powershell`). |
| `env` | object | No | Environment variables to set when spawning the server. |
| `fileExtensions` | object | Yes | Map of file extensions to language IDs (for example, `{ ".ts": "typescript" }`). |
| `rootUri` | string | No | Project root relative to the git root (default: `.`). |
| `initializationOptions` | any | No | Options sent to the server in the LSP `initialize` request. |

(*) At least one of `command`, `bash`, or `powershell` is required. When both `bash` and `powershell` are specified, the platform-appropriate one is selected automatically (PowerShell on Windows, Bash elsewhere).

Use `${PLUGIN_ROOT}` to reference paths within the plugin directory.

## `marketplace.json`

You can create a plugin marketplace—which people can use to discover and install your plugins—by creating a `marketplace.json` file and saving it to the `.github/plugin/` directory of the repository. You can also store the `marketplace.json` file in your local file system. For example, saving the file as `/PATH/TO/my-marketplace/.github/plugin/marketplace.json` allows you to add it to the CLI using the following command:

```shell
copilot plugin marketplace add /PATH/TO/my-marketplace
```

{% data reusables.copilot.copilot-cli.cli-claude-plugin-dir %}


For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace).

### Example `marketplace.json` file

{% data reusables.copilot.copilot-cli.cli-example-marketplace-file %}

> [!NOTE]
> {% data reusables.copilot.copilot-cli.cli-path-to-plugins %}

### `marketplace.json` fields

#### Top-level fields

| Field      | Type     | Required | Description |
|------------|----------|----------|-------------|
| `name`     | string   | Yes      | Kebab-case marketplace name. Max 64 chars. |
| `owner`    | object   | Yes      | `{ name, email? }` — marketplace owner info. |
| `plugins`  | array    | Yes      | List of plugin entries (see the table below). |
| `metadata` | object   | No       | `{ description?, version?, pluginRoot? }` |

#### Plugin entry fields (objects within the `plugins` array)

| Field         | Type               | Required | Description |
|---------------|--------------------|----------|-------------|
| `name`        | string             | Yes      | Kebab-case plugin name. Max 64 chars. |
| `source`      | string \| object   | Yes      | Where to fetch the plugin (relative path, {% data variables.product.github %}, or URL). |
| `description` | string             | No       | Plugin description. Max 1024 chars. |
| `version`     | string             | No       | Plugin version. |
| `author`      | object             | No       | `{ name, email?, url? }` |
| `homepage`    | string             | No       | Plugin homepage URL. |
| `repository`  | string             | No       | Source repository URL. |
| `license`     | string             | No       | License identifier. |
| `keywords`    | string[]           | No       | Search keywords. |
| `category`    | string             | No       | Plugin category. |
| `tags`        | string[]           | No       | Additional tags. |
| `commands`    | string \| string[] | No       | Path(s) to command directories. |
| `agents`      | string \| string[] | No       | Path(s) to agent directories. |
| `skills`      | string \| string[] | No       | Path(s) to skill directories. |
| `hooks`       | string \| object   | No       | Path to hooks configuration or inline hooks object. |
| `mcpServers`  | string \| object   | No       | MCP servers to activate when the plugin is installed. Accepts an inline server map or a path to a JSON configuration file. Used when the plugin source does not ship its own MCP configuration. |
| `lspServers`  | string \| object   | No       | Path to LSP configuration or inline server definitions. |
| `strict`      | boolean            | No       | When `true` (the default), plugins must conform to the full schema and validation rules. When `false`, relaxed validation is used, allowing more flexibility—especially for direct installs or legacy plugins. |

#### Plugin source types

The `source` field on a plugin entry accepts a relative path string, or an object describing a {% data variables.product.github %} repository or Git URL source:

```json
{
    "source": {
        "source": "github",
        "repo": "owner/repo",
        "ref": "v1.0.0",
        "path": "plugins/my-plugin"
    }
}
```

Both the `github` and `url` source types accept an optional `sha` field to pin installs to an exact commit, in addition to (or instead of) `ref`:

```json
{
    "source": {
        "source": "github",
        "repo": "owner/repo",
        "sha": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
        "path": "plugins/my-plugin"
    }
}
```

`sha` must be a full 40-character commit SHA. Pin to a `sha` for reproducible installs that are immune to force-pushes or tag/branch moves.

## File locations

| Item                 | Path |
|----------------------|------|
| Installed plugins    | `~/.copilot/installed-plugins/MARKETPLACE/PLUGIN-NAME` (installed via a marketplace) and `~/.copilot/installed-plugins/_direct/SOURCE-ID/` (installed directly) |
| Marketplace cache    | Platform cache directory: `~/.cache/copilot/marketplaces/` (Linux), `~/Library/Caches/copilot/marketplaces/` (macOS). Overridable with `COPILOT_CACHE_HOME`. |
| Plugin manifest      | `.plugin/plugin.json`, `plugin.json`, `.github/plugin/plugin.json`, or `.claude-plugin/plugin.json` (checked in this order) |
| Marketplace manifest | `marketplace.json`, `.plugin/marketplace.json`, `.github/plugin/marketplace.json`, or `.claude-plugin/marketplace.json` (checked in this order) |
| Agents               | `agents/` (default, overridable in manifest) |
| Skills               | `skills/` (default, overridable in manifest) |
| Hooks configuration  | `hooks.json` or `hooks/hooks.json` |
| MCP configuration    | `.mcp.json`, `.github/mcp.json` |
| LSP configuration    | `lsp.json` or `.github/lsp.json` |
| Plugin data          | `${COPILOT_PLUGIN_DATA}` (also available as `${CLAUDE_PLUGIN_DATA}`). Points to a persistent, writable directory unique to each installed plugin. Use this for plugin-specific runtime data instead of paths inside the installed-plugins cache directory. |

## Loading order and precedence

If you install multiple plugins it's possible that some custom agents, skills, MCP servers, or tools supplied via MCP servers have duplicate names. In this situation, the CLI determines which component to use based on a precedence order.

* **Agents and skills** use first-found-wins precedence.

  If you have a project-level custom agent or skill with the same name or ID as one in a plugin you install, the agent or skill in the plugin is silently ignored. The plugin cannot override project-level or personal configurations. Custom agents are deduplicated using their ID, which is derived from its file name (for example, if the file is named `reviewer.agent.md`, the agent ID is `reviewer`). Skills are deduplicated by their name field inside the `SKILL.md` file.

* **MCP servers** use last-wins precedence.

  If you install a plugin that defines an MCP server with the same server name as an MCP server you have already installed, the plugin's definition takes precedence. You can use the `--additional-mcp-config` command-line option to override an MCP server configuration with the same name, installed using a plugin. If two or more plugins declare an MCP server with the same name, the CLI uses the version from the plugin that loaded last and shows a warning naming every prior plugin that defined it.

* **Built-in tools and agents** are always present and cannot be overridden by user-defined components.

The following diagram illustrates the loading order and precedence rules.

```text
┌──────────────────────────────────────────────────────────────────┐
│  BUILT-IN - HARDCODED, ALWAYS PRESENT                            │
│  • tools: bash, view, apply_patch, glob, rg, task, ...           │
│  • agents: explore, task, code-review, general-purpose, research │
└────────────────────────┬─────────────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  CUSTOM AGENTS - FIRST LOADED IS USED (dedup by ID)                 │
  │  1. ~/.copilot/agents/           (user, .github convention)         │
  │  2. <project>/.github/agents/    (project)                          │
  │  3. <parents>/.github/agents/    (inherited, monorepo)              │
  │  4. <project>/.claude/agents/    (project)                          │
  │  5. <parents>/.claude/agents/    (inherited, monorepo)              │
  │  6. PLUGIN: agents/ dirs         (plugin, by install order)         │
  │  7. Remote org/enterprise agents (remote, via API)                  │
  └──────────────────────┬──────────────────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  AGENT SKILLS - FIRST LOADED IS USED (dedup by name)                │
  │  1. <project>/.github/skills/        (project)                      │
  │  2. <project>/.agents/skills/        (project)                      │
  │  3. <project>/.claude/skills/        (project)                      │
  │  4. <parents>/.github/skills/ etc.   (inherited)                    │
  │  5. ~/.copilot/skills/               (personal-copilot)             │
  │  6. ~/.agents/skills/                (personal-agents)              │
  │  7. PLUGIN: skills/ dirs             (plugin)                       │
  │  8. COPILOT_SKILLS_DIRS env + config (custom)                       │
  │  --- then commands (.claude/commands/), skills override commands ---│
  └──────────────────────┬──────────────────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  MCP SERVERS - LAST LOADED IS USED (dedup by server name)           │
  │  1. ~/.copilot/mcp-config.json       (lowest priority)              │
  │  2. PLUGIN: MCP configs              (plugins)                      │
  │  3. --additional-mcp-config flag     (highest priority)             │
  └─────────────────────────────────────────────────────────────────────┘
```

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards)
* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
