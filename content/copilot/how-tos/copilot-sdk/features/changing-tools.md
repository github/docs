---
title: Changing tools during a session
shortTitle: Changing Tools
intro: >-
  An application can replace the tools it supplies to a live session without
  recreating it. For example, a web page can offer different tools as the user
  navigates, or a client that takes over a session can bring its own tools. Each
  SDK replaces the client's complete tool set and the handlers that serve it in
  one call.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

> **Experimental.** Tool replacement wraps the experimental `session.tools.set` RPC and requires a runtime that supports it.

## Replace this client's tools

Pass the complete set of tools this client should supply. It replaces the tools the client supplied when the session was created or resumed, or in an earlier replacement. Built-in, MCP, and plugin tools, and tools that other clients connected to the same session supply, are unaffected. Pass an empty list to remove all of this client's tools.

Tools are defined exactly as they are for creating a session, and a tool without a handler behaves the same way it does there.

{% codetabs %}
{% codetab typescript %}

```typescript
import { defineTool } from "@github/copilot-sdk";
import { z } from "zod";

const searchIssues = defineTool("search_issues", {
    description: "Search the issues shown on the current page",
    parameters: z.object({ query: z.string().describe("Search text") }),
    handler: async ({ query }) => findIssues(query),
});

// Supply only the tools the current page provides.
await session.setTools([searchIssues]);

// Remove all of this client's tools.
await session.setTools([]);
```

{% endcodetab %}
{% codetab python %}

```python
from pydantic import BaseModel, Field
from copilot.tools import define_tool

class SearchIssuesParams(BaseModel):
    query: str = Field(description="Search text")

@define_tool(description="Search the issues shown on the current page")
async def search_issues(params: SearchIssuesParams) -> str:
    return await find_issues(params.query)

# Supply only the tools the current page provides.
await session.set_tools([search_issues])

# Remove all of this client's tools.
await session.set_tools([])
```

{% endcodetab %}
{% codetab go %}

```golang
type SearchIssuesParams struct {
	Query string `json:"query" jsonschema:"Search text"`
}

searchIssues := copilot.DefineTool(
	"search_issues",
	"Search the issues shown on the current page",
	func(params SearchIssuesParams, inv copilot.ToolInvocation) (string, error) {
		return findIssues(params.Query)
	},
)

// Supply only the tools the current page provides.
if err := session.SetTools(ctx, []copilot.Tool{searchIssues}); err != nil {
	log.Fatal(err)
}

// Remove all of this client's tools.
if err := session.SetTools(ctx, nil); err != nil {
	log.Fatal(err)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var searchIssues = CopilotTool.DefineTool(
    ([Description("Search text")] string query) => FindIssues(query),
    factoryOptions: new AIFunctionFactoryOptions
    {
        Name = "search_issues",
        Description = "Search the issues shown on the current page",
    });

// Supply only the tools the current page provides.
await session.SetToolsAsync([searchIssues]);

// Remove all of this client's tools.
await session.SetToolsAsync([]);
```

`SetToolsAsync` raises the `GHCP001` experimental diagnostic, which you suppress with `#pragma warning disable GHCP001` or a project-level `<NoWarn>GHCP001</NoWarn>`.

{% endcodetab %}
{% codetab java %}

```java
var searchIssues = ToolDefinition.create(
    "search_issues",
    "Search the issues shown on the current page",
    Map.of(
        "type", "object",
        "properties", Map.of("query", Map.of("type", "string", "description", "Search text")),
        "required", List.of("query")),
    invocation -> CompletableFuture.completedFuture(
        findIssues((String) invocation.getArguments().get("query"))));

// Supply only the tools the current page provides.
session.setTools(List.of(searchIssues)).get();

// Remove all of this client's tools.
session.setTools(List.of()).get();
```

`setTools` is `@CopilotExperimental`, so the consuming class or method must opt in with `@AllowCopilotExperimental`. See [Using experimental APIs](https://github.com/github/copilot-sdk/tree/main/java/README.md#using-experimental-apis).

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
#[derive(Deserialize, JsonSchema)]
struct SearchIssuesParams {
    /// Search text
    query: String,
}

let search_issues = define_tool(
    "search_issues",
    "Search the issues shown on the current page",
    |_inv, params: SearchIssuesParams| async move {
        Ok(ToolResult::Text(find_issues(&params.query).await))
    },
);

// Supply only the tools the current page provides.
session.set_tools(vec![search_issues]).await?;

// Remove all of this client's tools.
session.set_tools(Vec::new()).await?;
```

{% endcodetab %}
{% endcodetabs %}

## When the new tools take effect

- **Model requests.** The runtime offers the new tools from the agent's next model request. That request can be part of a turn that is already in progress.
- **Handlers.** As soon as the runtime accepts the replacement, every tool call the session dispatches uses the new handlers. Calls that are already running finish on the handlers that started them.
- **Rejection.** If the runtime rejects the replacement, the call fails and the previous tools and handlers stay in place. The runtime rejects tool names with invalid characters and names that another connected client already supplies.
- **Ordering.** Concurrent replacements on the same session are applied one at a time, in the order they're made.
- **Cancellation.** In SDKs that let you cancel the call, cancelling it while an earlier replacement is still in flight sends nothing. Once the request is sent, cancelling only stops the wait: if the runtime accepts the replacement, the new handlers still take effect.

## Replacing tools during a turn

A model request that is already in flight was made with the previous tools, so the agent can still call a tool you just removed. The session doesn't answer that call, because another connected client might supply a tool with the same name, so the call can stay pending until the turn is aborted.

If a running turn might still call a tool you remove, replace tools while the session is idle, for example after the `session.idle` event, or abort the turn first. Replacing a tool's handler under the same name is safe during a turn: calls dispatched after the runtime accepts the replacement use the new handler.

## SDK reference

| SDK | Method |
|---|---|
| TypeScript | `session.setTools(tools)` |
| Python | `await session.set_tools(tools)` |
| Go | `session.SetTools(ctx, tools)` |
| .NET | `await session.SetToolsAsync(tools, cancellationToken)` |
| Java | `session.setTools(tools)`, which returns a `CompletableFuture<Void>` |
| Rust | `session.set_tools(tools).await` |
