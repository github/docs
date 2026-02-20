---
title: GitHub Copilot CLI plugin reference
shortTitle: CLI plugin reference
intro: 'Find commands and configuration details for CLI plugins.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot
topics:
  - Copilot
contentType: reference
---

{% data reusables.copilot.cli-help-note %}

## CLI commands

You can use the following commands in the terminal to manage plugins for {% data variables.copilot.copilot_cli_short %}.

| Command                                        | Description |
|------------------------------------------------|-------------|
| `copilot plugin install SPECIFICATION`         | Install a plugin. See [Plugin specification for `install` command](#plugin-specification-for-install-command) below. |
| `copilot plugin uninstall NAME`                | Remove a plugin |
| `copilot plugin list`                          | List installed plugins |
| `copilot plugin update NAME`                   | Update a plugin |
| `copilot plugin marketplace add SPECIFICATION` | Register a marketplace |
| `copilot plugin marketplace list`              | List registered marketplaces |
| `copilot plugin marketplace browse NAME`       | Browse marketplace plugins |
| `copilot plugin marketplace remove NAME`       | Unregister a marketplace |

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
| `hooks`     | string \| object   | —          | Path to a hooks config file, or an inline hooks object. |
| `mcpServers`| string \| object   | —          | Path to an MCP config file (e.g., `.mcp.json`), or inline server definitions. |
| `lspServers`| string \| object   | —          | Path to an LSP config file, or inline server definitions. |

### Example `plugin.json` file

{% data reusables.copilot.cli-example-plugin-file %}

## `marketplace.json`

You can create a plugin marketplace—which people can use to discover and install your plugins—by creating a `marketplace.json` file and saving it to the `.github/plugin/` directory of the repository. You can also store the `marketplace.json` file in your local file system. For example, saving the file as `/PATH/TO/my-marketplace/.github/plugin/marketplace.json` allows you to add it to the CLI using the following command:

```shell
copilot plugin marketplace add /PATH/TO/my-marketplace
```

{% data reusables.copilot.cli-claude-plugin-dir %}


For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace).

### Example `marketplace.json` file

{% data reusables.copilot.cli-example-marketplace-file %}

> [!NOTE]
> {% data reusables.copilot.cli-path-to-plugins %}

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
| `hooks`       | string \| object   | No       | Path to hooks config or inline hooks object. |
| `mcpServers`  | string \| object   | No       | Path to MCP config or inline server definitions. |
| `lspServers`  | string \| object   | No       | Path to LSP config or inline server definitions. |
| `strict`      | boolean            | No       | When `true` (the default), plugins must conform to the full schema and validation rules. When `false`, relaxed validation is used, allowing more flexibility—especially for direct installs or legacy plugins. |

## File locations

| Item                 | Path |
|----------------------|------|
| Installed plugins    | `~/.copilot/installed-plugins/` and `~/.copilot/installed-plugins/_direct` |
| Marketplace cache    | `~/.copilot/state/marketplace-cache/` |
| Plugin manifest      | `plugin.json`, `.github/plugin/plugin.json`, or `.claude-plugin/plugin.json` |
| Marketplace manifest | `.github/plugin/marketplace.json` or `.claude-plugin/marketplace.json` |
| Agents               | `agents/` (default, overridable in manifest) |
| Skills               | `skills/` (default, overridable in manifest) |
| Hooks config         | `hooks.json` or `hooks/hooks.json` |
| MCP config           | `.mcp.json` or `.github/mcp.json` |
| LSP config           | `lsp.json` or `.github/lsp.json` |

## Loading order and precedence

If you install multiple plugins it's possible that some custom agents, skills, MCP servers, or tools supplied via MCP servers have duplicate names. In this situation, the CLI determines which component to use based on a precedence order.

* **Agents and skills** use first-found-wins precedence.

  If you have a project-level custom agent or skill with the same name or ID as one in a plugin you install, the agent or skill in the plugin is silently ignored. The plugin cannot override project-level or personal configurations. Custom agents are deduplicated using their ID, which is derived from its file name (for example, if the file is named `reviewer.agent.md`, the agent ID is `reviewer`). Skills are deduplicated by their name field inside the `SKILL.md` file.

* **MCP servers** use last-wins precedence.

  If you install a plugin that defines an MCP server with the same server name as an MCP server you have already installed, the plugin's definition takes precedence. You can use the `--additional-mcp-config` command-line option to override an MCP server configuration with the same name, installed using a plugin.

* **Built-in tools and agents** are always present and cannot be overridden by user-defined components.

The following diagram illustrates the loading order and precedence rules.

```text
┌─────────────────────────────────────────────────────────┐
│  BUILT-IN - HARDCODED, ALWAYS PRESENT                   │
│  • tools: bash, view, apply_patch, glob, rg, task, ...  │
│  • agents: explore, task, code-review, general-purpose  │
└────────────────────────┬────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  CUSTOM AGENTS - FIRST LOADED IS USED (dedup by ID)                 │
  │  1. ~/.copilot/agents/           (user, .github convention)         │
  │  2. <project>/.github/agents/    (project)                          │
  │  3. <parents>/.github/agents/    (inherited, monorepo)              │
  │  4. ~/.claude/agents/            (user, .claude convention)         │
  │  5. <project>/.claude/agents/    (project)                          │
  │  6. <parents>/.claude/agents/    (inherited, monorepo)              │
  │  7. PLUGIN: agents/ dirs         (plugin, by install order)         │
  │  8. Remote org/enterprise agents (remote, via API)                  │
  └──────────────────────┬──────────────────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  AGENT SKILLS - FIRST LOADED IS USED (dedup by name)                │
  │  1. <project>/.github/skills/        (project)                      │
  │  2. <project>/.agents/skills/        (project)                      │
  │  3. <project>/.claude/skills/        (project)                      │
  │  4. <parents>/.github/skills/ etc.   (inherited)                    │
  │  5. ~/.copilot/skills/               (personal-copilot)             │
  │  6. ~/.claude/skills/                (personal-claude)              │
  │  7. PLUGIN: skills/ dirs             (plugin)                       │
  │  8. COPILOT_SKILLS_DIRS env + config (custom)                       │
  │  --- then commands (.claude/commands/), skills override commands ---│
  └──────────────────────┬──────────────────────────────────────────────┘
                         │
  ┌──────────────────────▼──────────────────────────────────────────────┐
  │  MCP SERVERS - LAST LOADED IS USED (dedup by server name)           │
  │  1. ~/.copilot/mcp-config.json       (lowest priority)              │
  │  2. .vscode/mcp.json                 (workspace)                    │
  │  3. PLUGIN: MCP configs              (plugins)                      │
  │  4. --additional-mcp-config flag     (highest priority)             │
  └─────────────────────────────────────────────────────────────────────┘
```
