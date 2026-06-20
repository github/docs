---
title: Plugin directories
shortTitle: Plugin Directories
intro: >-
  Use plugin directories to load skills, hooks, MCP servers, custom agents, and
  LSP settings from a single manifest.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

This guide explains the plugin folder layout, how to load a plugin from a directory, when to use plugin directories vs. registering individual extensions, and how to make plugin sets deterministic.

## When to use plugin directories

Use a plugin directory when you want to:

* **Distribute a bundle of capabilities** as one unit — e.g., a "TypeScript reviewer" pack with a skill, a `preToolUse` hook that enforces lint, and a custom agent that runs the reviewer.
* **Vendor capability packs into a repository** so every clone of the host application loads the same extensions deterministically.
* **Develop a plugin locally** before publishing it to a marketplace.
* **Override or extend** a marketplace-installed plugin with a local checkout for testing.

If you only need to add a single MCP server, a single hook, or a single custom agent, you can register it inline via the SDK config (`mcpServers`, `hooks`, `customAgents`). Plugin directories are most useful once you have three or more related extensions that ship together.

## Plugin folder layout

The Copilot CLI scans each plugin directory for a `plugin.json` manifest or a root-level `SKILL.md`. A minimal plugin looks like this:

```text
my-plugin/
├── plugin.json              # manifest (required unless using SKILL.md only)
├── SKILL.md                 # optional: top-level skill
├── hooks.json               # optional: hooks config
├── .mcp.json                # optional: MCP server config
├── agents/                  # optional: custom agents (one .md file per agent)
│   └── code-reviewer.md
└── skills/                  # optional: additional skills
    └── lint-fix/
        └── SKILL.md
```

The manifest may also live at `.github/plugin.json` or `.github/plugin/plugin.json` so plugins can sit inside an existing repository without changing its root layout. Each subsystem (hooks, MCP, LSP, skills, agents) has its own loader and is optional — a plugin only needs the parts it contributes.

For the full manifest schema, see the runtime documentation referenced from your CLI's `/plugin` slash command.

## Loading a plugin directory from the SDK

Plugin directories are loaded by passing `--plugin-dir <path>` to the Copilot CLI when the SDK spawns it. Each language exposes this through the runtime connection's extra-args option. The flag can be repeated to load multiple plugins.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient, RuntimeConnection } from "@github/copilot-sdk";

async function main() {
  const client = new CopilotClient({
    connection: RuntimeConnection.forStdio({
      args: [
        "--plugin-dir", "./plugins/code-reviewer",
        "--plugin-dir", "./plugins/lint-fix",
      ],
    }),
  });

  await client.start();
}

main();
```

```typescript
import { CopilotClient, RuntimeConnection } from "@github/copilot-sdk";

const client = new CopilotClient({
  connection: RuntimeConnection.forStdio({
    args: [
      "--plugin-dir", "./plugins/code-reviewer",
      "--plugin-dir", "./plugins/lint-fix",
    ],
  }),
});

await client.start();
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: wrap-async -->

```python
from copilot import CopilotClient, StdioRuntimeConnection

client = CopilotClient(
    connection=StdioRuntimeConnection(
        args=(
            "--plugin-dir", "./plugins/code-reviewer",
            "--plugin-dir", "./plugins/lint-fix",
        ),
    ),
)
await client.start()
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(&copilot.ClientOptions{
		Connection: copilot.StdioConnection{
			Args: []string{
				"--plugin-dir", "./plugins/code-reviewer",
				"--plugin-dir", "./plugins/lint-fix",
			},
		},
	})
	if err := client.Start(ctx); err != nil {
		return
	}
}
```

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    Connection: copilot.StdioConnection{
        Args: []string{
            "--plugin-dir", "./plugins/code-reviewer",
            "--plugin-dir", "./plugins/lint-fix",
        },
    },
})
if err := client.Start(ctx); err != nil {
    return err
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForStdio(args: new[]
    {
        "--plugin-dir", "./plugins/code-reviewer",
        "--plugin-dir", "./plugins/lint-fix",
    }),
});

await client.StartAsync();
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.CopilotClientOptions;

public class PluginDirectoriesExample {
    public static void main(String[] args) throws Exception {
        var options = new CopilotClientOptions()
            .setCliArgs(new String[] {
                "--plugin-dir", "./plugins/code-reviewer",
                "--plugin-dir", "./plugins/lint-fix",
            });

        var client = new CopilotClient(options);
        client.start().get();
    }
}
```

```java
var options = new CopilotClientOptions()
    .setCliArgs(new String[] {
        "--plugin-dir", "./plugins/code-reviewer",
        "--plugin-dir", "./plugins/lint-fix",
    });

var client = new CopilotClient(options);
client.start().get();
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{Client, ClientOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let _client = Client::start(
        ClientOptions::new().with_extra_args([
            "--plugin-dir", "./plugins/code-reviewer",
            "--plugin-dir", "./plugins/lint-fix",
        ]),
    )
    .await?;
    Ok(())
}
```

```rust
use github_copilot_sdk::{Client, ClientOptions};

let client = Client::start(
    ClientOptions::new().with_extra_args([
        "--plugin-dir", "./plugins/code-reviewer",
        "--plugin-dir", "./plugins/lint-fix",
    ]),
)
.await?;
```

{% endcodetab %}
{% endcodetabs %}

> The example above uses an stdio runtime connection — the default when the SDK bundles the CLI. If you connect to an external runtime via a URL (`forUri` / `ForUri`), pass `--plugin-dir` to the long-running CLI server when you start it; the SDK does not forward `--plugin-dir` to runtimes it didn't spawn.

## What a plugin can contribute

Loading a plugin directory makes its extensions visible to every session created by the client. The runtime merges plugin-provided extensions with anything you register inline:

| Plugin contributes | Visible to session as |
|---|---|
| Skills (`SKILL.md`, `skills/*/SKILL.md`) | Items in `session.skills.list()`; injectable by name |
| Custom agents (`agents/*.md`) | Dispatchable via the `task(agent_type=...)` tool |
| Hooks (`hooks.json`) | Fired alongside hooks registered via the SDK |
| MCP servers (`.mcp.json`) | Tools and resources reachable through `session.mcp.*` |
| LSP servers (`.lsp.json`) | Initialized via `session.lsp.initialize(...)` |

Plugin agents are first-class sub-agents in [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/fleet-mode): a parent agent can dispatch them by `agent_type`, and the runtime fires the `subagentStart` / `subagentStop` hooks for them like any other sub-agent.

## Plugin-dir vs marketplace plugins

The runtime has two ways to install plugins, and both end up looking the same to a session:

* **Marketplace / direct-repo plugins** are installed persistently through the CLI's `/plugin` slash command or the underlying `installedPlugins` user setting. They are *ambient* — every session that runs against the same user config sees them, and they participate in plugin discovery rules.
* **`--plugin-dir` plugins** are *explicit and ephemeral* — they only apply to the CLI process you launched with that flag. They take precedence over ambient discovery and are de-duplicated against marketplace entries with the same cache path, so the same plugin won't load twice when both surfaces reference it.

For SDK-driven applications, `--plugin-dir` is usually the right choice: it keeps the plugin set under your application's control instead of depending on per-machine user state.

## Making plugin sets deterministic

When the host machine may have other plugins installed (marketplace or personal), set `COPILOT_PLUGIN_DIR_ONLY=true` in the runtime's environment to suppress automatic plugin discovery. Only the directories you pass via `--plugin-dir` will load.

<details open>
<summary><strong>Node.js / TypeScript</strong></summary>

<!-- docs-validate: hidden -->

```typescript
import { CopilotClient, RuntimeConnection } from "@github/copilot-sdk";

async function main() {
  process.env.COPILOT_PLUGIN_DIR_ONLY = "true";
  const client = new CopilotClient({
    connection: RuntimeConnection.forStdio({
      args: ["--plugin-dir", "./plugins/code-reviewer"],
    }),
  });
  await client.start();
}

main();
```

<!-- /docs-validate: hidden -->

```typescript
process.env.COPILOT_PLUGIN_DIR_ONLY = "true";

const client = new CopilotClient({
  connection: RuntimeConnection.forStdio({
    args: ["--plugin-dir", "./plugins/code-reviewer"],
  }),
});
await client.start();
```

</details>

Use this in CI, in headless server deployments, and anywhere you want a reproducible plugin set that doesn't depend on the host's user configuration.

## Inspecting which plugins loaded

Once a session is created, list the active plugins to confirm a directory was picked up correctly:

<details open>
<summary><strong>Node.js / TypeScript</strong></summary>

<!-- docs-validate: hidden -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

async function main() {
  const client = new CopilotClient();
  await client.start();
  const session = await client.createSession({
    onPermissionRequest: async () => ({ kind: "approve-once" }),
  });

  const plugins = await session.rpc.plugins.list();
  for (const plugin of plugins.plugins) {
    console.log(`${plugin.name} (${plugin.enabled ? "enabled" : "disabled"})`);
  }
}

main();
```

<!-- /docs-validate: hidden -->

```typescript
const plugins = await session.rpc.plugins.list();
for (const plugin of plugins.plugins) {
  console.log(`${plugin.name} (${plugin.enabled ? "enabled" : "disabled"})`);
}
```

</details>

Plugins loaded via `--plugin-dir` appear in this list with their cache path set to the directory you provided. Marketplace installs are tagged with their registry source.

## Troubleshooting

* **"no plugin.json or SKILL.md found in &lt;dir&gt;"** — the directory exists but doesn't qualify as a plugin. Add a `plugin.json` manifest at the root (or under `.github/`), or include a top-level `SKILL.md`.
* **Plugin loaded but agents/skills not visible** — make sure the plugin manifest declares the agents/skills it contributes, or use the implicit layout (`agents/*.md`, `skills/*/SKILL.md`). Then call `session.rpc.skills.reload()` to pick up changes without restarting.
* **Duplicate hooks firing** — the runtime de-duplicates by `cache_path`, but only when the same directory is referenced both as a marketplace install and a `--plugin-dir`. If two different directories contain the same plugin, both will load. Remove one or use `COPILOT_PLUGIN_DIR_ONLY=true`.
* **`--plugin-dir` ignored when connecting to an external runtime** — the SDK only forwards extra args when it spawns the CLI itself. For external runtimes (`forUri`/`ForUri`), pass `--plugin-dir` on the command line that starts the runtime server.

## Related

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents): write agents that ship inside a plugin's `agents/` folder.
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/skills): how `SKILL.md` files are loaded, and the skill-tier ordering rules.
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/hooks): hooks defined by a plugin fire alongside SDK-registered hooks.
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp): plugin-provided MCP servers integrate the same way as inline registrations.
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/fleet-mode): plugin-provided agents are dispatchable as sub-agents.
