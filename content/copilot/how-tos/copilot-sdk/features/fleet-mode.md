---
title: Fleet mode
shortTitle: Fleet Mode
intro: >-
    Use fleet mode to split work across multiple sub-agents and combine their
    results in one parent session.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## When to use fleet mode

Fleet mode is useful when the work can be decomposed before execution and each unit can run without waiting for the others.

Good fits include:

* Multi-file refactors where each worker owns a file, package, or language SDK.
* Batch reviews where each worker checks a separate diff, module, or alert group.
* Parallel research across independent repositories, services, or feature areas.
* Documentation refreshes where each worker owns a page or topic.
* Migration tasks where each worker can validate its own slice and report back.

Avoid fleet mode for:

* Sequential tasks where step 2 needs the concrete output from step 1.
* Tightly coupled edits where workers would contend for the same files.
* Small tasks that one synchronous sub-agent or the parent agent can finish quickly.
* Tasks that require continuous shared reasoning rather than clear ownership.

Fleet mode works best when the parent session can create clear units of work, assign one owner per unit, and define what each worker must return.

## Starting fleet mode

The SDK exposes fleet mode through the session RPC namespace in several languages. The binding is experimental in the generated RPC surface; pin both the SDK and the Copilot CLI runtime if your application depends on it.

### From within a session

The wire method is `session.fleet.start`. The optional `prompt` is combined with the runtime's fleet orchestration instructions.

{% codetabs %}
{% codetab typescript %}

```typescript
const result = await session.rpc.fleet.start({
    prompt: "Refactor each SDK package independently, then summarize the changes.",
});

if (result.started) {
    console.log("Fleet mode started");
}
```

{% endcodetab %}
{% codetab python %}

```python
from copilot.generated.rpc import FleetStartRequest

result = await session.rpc.fleet.start(
    FleetStartRequest(
        prompt="Review each service independently, then summarize the risks."
    )
)

if result.started:
    print("Fleet mode started")
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	"fmt"

	copilot "github.com/github/copilot-sdk/go"
	"github.com/github/copilot-sdk/go/rpc"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)
	session, err := client.CreateSession(ctx, &copilot.SessionConfig{})
	if err != nil {
		return
	}

	prompt := "Update each package independently, then report validation results."
	result, err := session.RPC.Fleet.Start(ctx, &rpc.FleetStartRequest{
		Prompt: &prompt,
	})
	if err != nil {
		return
	}
	if result.Started {
		fmt.Println("Fleet mode started")
	}
}
```

```golang
prompt := "Update each package independently, then report validation results."
result, err := session.RPC.Fleet.Start(ctx, &rpc.FleetStartRequest{
    Prompt: &prompt,
})
if err != nil {
    return err
}
if result.Started {
    fmt.Println("Fleet mode started")
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig());

var result = await session.Rpc.Fleet.StartAsync(
    "Audit each project independently, then summarize the findings.");

if (result.Started)
{
    Console.WriteLine("Fleet mode started");
}
```

```csharp
var result = await session.Rpc.Fleet.StartAsync(
    "Audit each project independently, then summarize the findings.");

if (result.Started)
{
    Console.WriteLine("Fleet mode started");
}
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::generated::api_types::FleetStartRequest;

let result = session
    .rpc()
    .fleet()
    .start(FleetStartRequest {
        prompt: Some("Research each crate independently, then summarize the plan.".into()),
    })
    .await?;

if result.started {
    println!("Fleet mode started");
}
```

{% endcodetab %}
{% endcodetabs %}

Native typed bindings for fleet mode were verified in Node.js/TypeScript, Python, Go, .NET, and Rust. A Java binding was not found in `java/src/main/java` on this branch, so Java examples are omitted until that surface is available.

### From plan mode

Plan-mode UIs can start fleet deployment by returning the `autopilot_fleet` exit action. The generated session event types describe it as:

```typescript
type PlanModeExitAction =
  | "exit_only"
  | "interactive"
  | "autopilot"
  /** Exit plan mode and continue with parallel autonomous workers. */
  | "autopilot_fleet";
```

Use this when a user approves a plan that already contains independent work items. Use `autopilot` for a single autonomous worker and `interactive` when the user should stay in the loop.

## How sub-agents coordinate

Fleet mode relies on explicit coordination state instead of implicit shared memory. The parent agent decomposes the work into todos, each sub-agent owns one todo, and the orchestrator dispatches workers whose dependencies are already complete.

The canonical schema is:

```sql
CREATE TABLE todos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending'
);

CREATE TABLE todo_deps (
    todo_id TEXT,
    depends_on TEXT,
    PRIMARY KEY (todo_id, depends_on)
);
```

Each todo moves through a small state machine:

```text
pending -> in_progress -> done
                       \-> blocked
```

A sub-agent should:

1. Claim exactly one ready todo by setting `status = 'in_progress'`.
1. Work only on that todo's scope.
1. Store its result in the conversation or relevant task output.
1. Set `status = 'done'` when complete.
1. Set `status = 'blocked'` when it cannot proceed, and include the reason.

The orchestrator can find work whose dependencies are satisfied with a query like:

```sql
SELECT t.*
FROM todos t
WHERE t.status = 'pending'
  AND NOT EXISTS (
      SELECT 1
      FROM todo_deps td
      JOIN todos dep ON td.depends_on = dep.id
      WHERE td.todo_id = t.id
        AND dep.status != 'done'
  );
```

This pattern gives every worker a clear owner and lets the parent session reason about what is ready, running, complete, or blocked.

## Lifecycle hooks

Fleet mode invokes sub-agents through the runtime's task mechanism. The runtime emits hook activity for sub-agent tool calls: the runtime 1.0.52 changelog notes that `preToolUse`, `postToolUse`, `subagentStart`, and `subagentStop` fire correctly for sub-agent tool calls.

A dedicated SDK hook callback for `subagentStart` or `subagentStop` was not found in the public SDK surface on this branch. SDK consumers can observe sub-agent activity through the generic session event stream, which includes events such as `subagent.started`, `subagent.completed`, `subagent.failed`, `subagent.selected`, and `subagent.deselected`.

{% codetabs %}
{% codetab typescript %}

```typescript
session.on((event) => {
    if (event.type === "subagent.started") {
        console.log(`Started ${event.data.agentDisplayName}`);
    }

    if (event.type === "subagent.completed") {
        console.log(`Completed ${event.data.agentDisplayName}`);
    }
});
```

{% endcodetab %}
{% codetab python %}

```python
import asyncio
from copilot import CopilotClient
from copilot.session import PermissionHandler

async def main():
    client = CopilotClient()
    await client.start()
    session = await client.create_session(
        on_permission_request=PermissionHandler.approve_all,
    )

    def handle_event(event):
        if event.type == "subagent.started":
            print(f"Started {event.data.agent_display_name}")
        elif event.type == "subagent.completed":
            print(f"Completed {event.data.agent_display_name}")

    unsubscribe = session.on(handle_event)

asyncio.run(main())
```

```python
def handle_event(event):
    if event.type == "subagent.started":
        print(f"Started {event.data.agent_display_name}")
    elif event.type == "subagent.completed":
        print(f"Completed {event.data.agent_display_name}")

unsubscribe = session.on(handle_event)
```

{% endcodetab %}
{% endcodetabs %}

For hook configuration that is already exposed at the SDK layer, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/hooks). For sub-agent event payloads, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents).

## Plugin sub-agents

The runtime can load plugins with `--plugin-dir`. Plugins loaded this way can register their agents as available `task(agent_type=...)` sub-agent types in prompt mode, which means fleet mode can dispatch to those plugin-provided worker types.

This is currently a runtime-level configuration pattern rather than a documented SDK-level registration API. Configure the Copilot CLI runtime with the plugin directory, then connect the SDK client to that runtime. Native SDK helpers for registering plugin sub-agent types may be added in the future.

Conceptually, a fleet prompt can then ask for a specific worker type:

```text
Use task(agent_type="security-review") for each independent package.
Run the workers in parallel and summarize only high-confidence findings.
```

Keep plugin-provided sub-agent types narrow and descriptive so the orchestrator can choose them reliably.

## Best practices

* Decompose the work into independent units before starting fleet mode.
* Minimize dependencies between todos; dependencies reduce parallelism.
* Give each todo a durable ID, a clear title, and a complete description.
* Make each sub-agent own exactly one todo at a time.
* Use background sub-agents for truly parallel work.
* Use synchronous sub-agent calls for serialized steps or validation gates.
* Provide each sub-agent with complete context; sub-agents are stateless across calls.
* Include file paths, commands, expected outputs, and constraints in each worker prompt.
* Do not dispatch a single background sub-agent; prefer a synchronous call or batch multiple workers in parallel.
* Avoid assigning overlapping files to different workers unless the parent agent will reconcile conflicts explicitly.
* Require every worker to report what it changed, how it validated the change, and what remains blocked.
* Have the parent agent verify the combined result after workers finish.

## Limitations and open questions

* Fleet mode is exposed through generated session RPC bindings and is marked experimental in several SDKs.
* The SQL todos pattern is the canonical coordination model in the runtime guidance, but whether it is a stable extensibility contract for SDK consumers is still an open question.
* `subagentStart` and `subagentStop` are runtime hook names; this branch exposes sub-agent lifecycle to SDK consumers through the generic session event stream, not dedicated hook callbacks.
* Plugin sub-agent registration is configured at the runtime layer through `--plugin-dir`; no SDK-level plugin registration helper was verified on this branch.
* Java native typed bindings for `session.fleet.start` were not found in the Java SDK source on this branch.
* Fleet mode does not remove the need for parent-agent review. Parallel workers can produce inconsistent assumptions that the orchestrator must reconcile.

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/hooks)
