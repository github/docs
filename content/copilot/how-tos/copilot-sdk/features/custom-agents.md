---
title: Custom agents and sub-agent orchestration
shortTitle: Custom Agents
intro: >-
  Define specialized agents with scoped tools and prompts, then let Copilot
    orchestrate them as sub-agents within a single session.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-copilot-sdk/custom-agents
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Overview

Custom agents are lightweight agent definitions you attach to a session. Each agent has its own system prompt, tool restrictions, and optional MCP servers. When a user's request matches an agent's expertise, the Copilot runtime automatically delegates to that agent as a **sub-agent**—running it in an isolated context while streaming lifecycle events back to the parent session.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/features-custom-agents-diagram-0.png)

| Concept | Description |
|---------|-------------|
| **Custom agent** | A named agent config with its own prompt and tool set |
| **Sub-agent** | A custom agent invoked by the runtime to handle part of a task |
| **Inference** | The runtime's ability to auto-select an agent based on the user's intent |
| **Parent session** | The session that spawned the sub-agent; receives all lifecycle events |

## Defining custom agents

Pass `customAgents` when creating a session. Each agent needs at minimum a `name` and `prompt`.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
    model: "gpt-4.1",
    customAgents: [
        {
            name: "researcher",
            displayName: "Research Agent",
            description: "Explores codebases and answers questions using read-only tools",
            tools: ["grep", "glob", "view"],
            prompt: "You are a research assistant. Analyze code and answer questions. Do not modify any files.",
        },
        {
            name: "editor",
            displayName: "Editor Agent",
            description: "Makes targeted code changes",
            tools: ["view", "edit", "bash"],
            prompt: "You are a code editor. Make minimal, surgical changes to files as requested.",
        },
    ],
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, PermissionDecisionApproveOnce

client = CopilotClient()
await client.start()

session = await client.create_session(
    on_permission_request=lambda req, inv: PermissionDecisionApproveOnce(),
    model="gpt-4.1",
    custom_agents=[
        {
            "name": "researcher",
            "display_name": "Research Agent",
            "description": "Explores codebases and answers questions using read-only tools",
            "tools": ["grep", "glob", "view"],
            "prompt": "You are a research assistant. Analyze code and answer questions. Do not modify any files.",
        },
        {
            "name": "editor",
            "display_name": "Editor Agent",
            "description": "Makes targeted code changes",
            "tools": ["view", "edit", "bash"],
            "prompt": "You are a code editor. Make minimal, surgical changes to files as requested.",
        },
    ],
)
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	copilot "github.com/github/copilot-sdk/go"
	"github.com/github/copilot-sdk/go/rpc"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)
	client.Start(ctx)

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
		Model: "gpt-4.1",
		CustomAgents: []copilot.CustomAgentConfig{
			{
				Name:        "researcher",
				DisplayName: "Research Agent",
				Description: "Explores codebases and answers questions using read-only tools",
				Tools:       []string{"grep", "glob", "view"},
				Prompt:      "You are a research assistant. Analyze code and answer questions. Do not modify any files.",
			},
			{
				Name:        "editor",
				DisplayName: "Editor Agent",
				Description: "Makes targeted code changes",
				Tools:       []string{"view", "edit", "bash"},
				Prompt:      "You are a code editor. Make minimal, surgical changes to files as requested.",
			},
		},
		OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
			return &rpc.PermissionDecisionApproveOnce{}, nil
		},
	})
	_ = session
}
```

```golang
ctx := context.Background()
client := copilot.NewClient(nil)
client.Start(ctx)

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    Model: "gpt-4.1",
    CustomAgents: []copilot.CustomAgentConfig{
        {
            Name:        "researcher",
            DisplayName: "Research Agent",
            Description: "Explores codebases and answers questions using read-only tools",
            Tools:       []string{"grep", "glob", "view"},
            Prompt:      "You are a research assistant. Analyze code and answer questions. Do not modify any files.",
        },
        {
            Name:        "editor",
            DisplayName: "Editor Agent",
            Description: "Makes targeted code changes",
            Tools:       []string{"view", "edit", "bash"},
            Prompt:      "You are a code editor. Make minimal, surgical changes to files as requested.",
        },
    },
    OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
        return &rpc.PermissionDecisionApproveOnce{}, nil
    },
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;
using GitHub.Copilot.Rpc;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-4.1",
    CustomAgents = new List<CustomAgentConfig>
    {
        new()
        {
            Name = "researcher",
            DisplayName = "Research Agent",
            Description = "Explores codebases and answers questions using read-only tools",
            Tools = new List<string> { "grep", "glob", "view" },
            Prompt = "You are a research assistant. Analyze code and answer questions. Do not modify any files.",
        },
        new()
        {
            Name = "editor",
            DisplayName = "Editor Agent",
            Description = "Makes targeted code changes",
            Tools = new List<string> { "view", "edit", "bash" },
            Prompt = "You are a code editor. Make minimal, surgical changes to files as requested.",
        },
    },
    OnPermissionRequest = (req, inv) =>
        Task.FromResult(PermissionDecision.ApproveOnce()),
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;
import java.util.List;

try (var client = new CopilotClient()) {
    client.start().get();

    var session = client.createSession(
        new SessionConfig()
            .setModel("gpt-4.1")
            .setCustomAgents(List.of(
                new CustomAgentConfig()
                    .setName("researcher")
                    .setDisplayName("Research Agent")
                    .setDescription("Explores codebases and answers questions using read-only tools")
                    .setTools(List.of("grep", "glob", "view"))
                    .setPrompt("You are a research assistant. Analyze code and answer questions. Do not modify any files."),
                new CustomAgentConfig()
                    .setName("editor")
                    .setDisplayName("Editor Agent")
                    .setDescription("Makes targeted code changes")
                    .setTools(List.of("view", "edit", "bash"))
                    .setPrompt("You are a code editor. Make minimal, surgical changes to files as requested.")
            ))
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();
}
```

{% endcodetab %}
{% endcodetabs %}

## Configuration reference

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | ✅ | Unique identifier for the agent |
| `displayName` | `string` | | Human-readable name shown in events |
| `description` | `string` | | What the agent does—helps the runtime select it |
| `tools` | `string[]` or `null` | | Tool names the agent can use. `null` or omitted = all tools |
| `prompt` | `string` | ✅ | System prompt for the agent |
| `mcpServers` | `object` | | MCP server configurations specific to this agent |
| `infer` | `boolean` | | Whether the runtime can auto-select this agent (default: `true`) |
| `skills` | `string[]` | | Skill names to preload into the agent's context at startup |

> [!TIP]
> A good `description` helps the runtime match user intent to the right agent. Be specific about the agent's expertise and capabilities.

In addition to per-agent configuration above, you can set `agent` on the **session config** itself to pre-select which custom agent is active when the session starts. See [Selecting an Agent at Session Creation](#selecting-an-agent-at-session-creation) below.

| Session Config Property | Type | Description |
|-------------------------|------|-------------|
| `agent` | `string` | Name of the custom agent to pre-select at session creation. Must match a `name` in `customAgents`. |

## Per-agent skills

You can preload skills into an agent's context using the `skills` property. When specified, the **full content** of each listed skill is eagerly injected into the agent's context at startup—the agent doesn't need to invoke a skill tool; the instructions are already present. Skills are **opt-in**: agents receive no skills by default, and sub-agents do not inherit skills from the parent. Skill names are resolved from the session-level `skillDirectories`.

```typescript
const session = await client.createSession({
    skillDirectories: ["./skills"],
    customAgents: [
        {
            name: "security-auditor",
            description: "Security-focused code reviewer",
            prompt: "Focus on OWASP Top 10 vulnerabilities",
            skills: ["security-scan", "dependency-check"],
        },
        {
            name: "docs-writer",
            description: "Technical documentation writer",
            prompt: "Write clear, concise documentation",
            skills: ["markdown-lint"],
        },
    ],
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

In this example, `security-auditor` starts with `security-scan` and `dependency-check` already injected into its context, while `docs-writer` starts with `markdown-lint`. An agent without a `skills` field receives no skill content.

## Selecting an agent at session creation

You can pass `agent` in the session config to pre-select which custom agent should be active when the session starts. The value must match the `name` of one of the agents defined in `customAgents`.

This is equivalent to calling `session.rpc.agent.select()` after creation, but avoids the extra API call and ensures the agent is active from the very first prompt.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
const session = await client.createSession({
    customAgents: [
        {
            name: "researcher",
            prompt: "You are a research assistant. Analyze code and answer questions.",
        },
        {
            name: "editor",
            prompt: "You are a code editor. Make minimal, surgical changes.",
        },
    ],
    agent: "researcher", // Pre-select the researcher agent
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
session = await client.create_session(
    on_permission_request=PermissionHandler.approve_all,
    custom_agents=[
        {
            "name": "researcher",
            "prompt": "You are a research assistant. Analyze code and answer questions.",
        },
        {
            "name": "editor",
            "prompt": "You are a code editor. Make minimal, surgical changes.",
        },
    ],
    agent="researcher",  # Pre-select the researcher agent
)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    CustomAgents: []copilot.CustomAgentConfig{
        {
            Name:   "researcher",
            Prompt: "You are a research assistant. Analyze code and answer questions.",
        },
        {
            Name:   "editor",
            Prompt: "You are a code editor. Make minimal, surgical changes.",
        },
    },
    Agent: "researcher", // Pre-select the researcher agent
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    CustomAgents = new List<CustomAgentConfig>
    {
        new() { Name = "researcher", Prompt = "You are a research assistant. Analyze code and answer questions." },
        new() { Name = "editor", Prompt = "You are a code editor. Make minimal, surgical changes." },
    },
    Agent = "researcher", // Pre-select the researcher agent
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.rpc.*;
import java.util.List;

var session = client.createSession(
    new SessionConfig()
        .setCustomAgents(List.of(
            new CustomAgentConfig()
                .setName("researcher")
                .setPrompt("You are a research assistant. Analyze code and answer questions."),
            new CustomAgentConfig()
                .setName("editor")
                .setPrompt("You are a code editor. Make minimal, surgical changes.")
        ))
        .setAgent("researcher") // Pre-select the researcher agent
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();
```

{% endcodetab %}
{% endcodetabs %}

## How sub-agent delegation works

When you send a prompt to a session with custom agents, the runtime evaluates whether to delegate to a sub-agent:

1. **Intent matching**—The runtime analyzes the user's prompt against each agent's `name` and `description`
1. **Agent selection**—If a match is found and `infer` is not `false`, the runtime selects the agent
1. **Isolated execution**—The sub-agent runs with its own prompt and restricted tool set
1. **Event streaming**—Lifecycle events (`subagent.started`, `subagent.completed`, etc.) stream back to the parent session
1. **Result integration**—The sub-agent's output is incorporated into the parent agent's response

### Controlling inference

By default, all custom agents are available for automatic selection (`infer: true`). Set `infer: false` to prevent the runtime from auto-selecting an agent—useful for agents you only want invoked through explicit user requests:

```typescript
{
    name: "dangerous-cleanup",
    description: "Deletes unused files and dead code",
    tools: ["bash", "edit", "view"],
    prompt: "You clean up codebases by removing dead code and unused files.",
    infer: false, // Only invoked when user explicitly asks for this agent
}
```

## Listening to sub-agent events

When a sub-agent runs, the parent session emits lifecycle events. Subscribe to these events to build UIs that visualize agent activity.

### Event types

| Event | Emitted when | Data |
|-------|-------------|------|
| `subagent.selected` | Runtime selects an agent for the task | `agentName`, `agentDisplayName`, `tools` |
| `subagent.started` | Sub-agent begins execution | `toolCallId`, `agentName`, `agentDisplayName`, `agentDescription` |
| `subagent.completed` | Sub-agent finishes successfully | `toolCallId`, `agentName`, `agentDisplayName` |
| `subagent.failed` | Sub-agent encounters an error | `toolCallId`, `agentName`, `agentDisplayName`, `error` |
| `subagent.deselected` | Runtime switches away from the sub-agent |—|

### Subscribing to events

{% codetabs %}
{% codetab typescript %}

```typescript
session.on((event) => {
    switch (event.type) {
        case "subagent.started":
            console.log(`▶ Sub-agent started: ${event.data.agentDisplayName}`);
            console.log(`  Description: ${event.data.agentDescription}`);
            console.log(`  Tool call ID: ${event.data.toolCallId}`);
            break;

        case "subagent.completed":
            console.log(`✅ Sub-agent completed: ${event.data.agentDisplayName}`);
            break;

        case "subagent.failed":
            console.log(`❌ Sub-agent failed: ${event.data.agentDisplayName}`);
            console.log(`  Error: ${event.data.error}`);
            break;

        case "subagent.selected":
            console.log(`🎯 Agent selected: ${event.data.agentDisplayName}`);
            console.log(`  Tools: ${event.data.tools?.join(", ") ?? "all"}`);
            break;

        case "subagent.deselected":
            console.log("↩ Agent deselected, returning to parent");
            break;
    }
});

const response = await session.sendAndWait({
    prompt: "Research how authentication works in this codebase",
});
```

{% endcodetab %}
{% codetab python %}

```python
def handle_event(event):
    if event.type == "subagent.started":
        print(f"▶ Sub-agent started: {event.data.agent_display_name}")
        print(f"  Description: {event.data.agent_description}")
    elif event.type == "subagent.completed":
        print(f"✅ Sub-agent completed: {event.data.agent_display_name}")
    elif event.type == "subagent.failed":
        print(f"❌ Sub-agent failed: {event.data.agent_display_name}")
        print(f"  Error: {event.data.error}")
    elif event.type == "subagent.selected":
        tools = event.data.tools or "all"
        print(f"🎯 Agent selected: {event.data.agent_display_name} (tools: {tools})")

unsubscribe = session.on(handle_event)

response = await session.send_and_wait("Research how authentication works in this codebase")
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
	client.Start(ctx)

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
		Model: "gpt-4.1",
		OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
			return &rpc.PermissionDecisionApproveOnce{}, nil
		},
	})

	session.On(func(event copilot.SessionEvent) {
		switch d := event.Data.(type) {
		case *copilot.SubagentStartedData:
			fmt.Printf("▶ Sub-agent started: %s\n", d.AgentDisplayName)
			fmt.Printf("  Description: %s\n", d.AgentDescription)
			fmt.Printf("  Tool call ID: %s\n", d.ToolCallID)
		case *copilot.SubagentCompletedData:
			fmt.Printf("✅ Sub-agent completed: %s\n", d.AgentDisplayName)
		case *copilot.SubagentFailedData:
			fmt.Printf("❌ Sub-agent failed: %s — %v\n", d.AgentDisplayName, d.Error)
		case *copilot.SubagentSelectedData:
			fmt.Printf("🎯 Agent selected: %s\n", d.AgentDisplayName)
		}
	})

	_, err := session.SendAndWait(ctx, copilot.MessageOptions{
		Prompt: "Research how authentication works in this codebase",
	})
	_ = err
}
```

```golang
session.On(func(event copilot.SessionEvent) {
    switch d := event.Data.(type) {
    case *copilot.SubagentStartedData:
        fmt.Printf("▶ Sub-agent started: %s\n", d.AgentDisplayName)
        fmt.Printf("  Description: %s\n", d.AgentDescription)
        fmt.Printf("  Tool call ID: %s\n", d.ToolCallID)
    case *copilot.SubagentCompletedData:
        fmt.Printf("✅ Sub-agent completed: %s\n", d.AgentDisplayName)
    case *copilot.SubagentFailedData:
        fmt.Printf("❌ Sub-agent failed: %s — %v\n", d.AgentDisplayName, d.Error)
    case *copilot.SubagentSelectedData:
        fmt.Printf("🎯 Agent selected: %s\n", d.AgentDisplayName)
    }
})

_, err := session.SendAndWait(ctx, copilot.MessageOptions{
    Prompt: "Research how authentication works in this codebase",
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class SubAgentEventsExample
{
    public static async Task Example(CopilotSession session)
    {
        using var subscription = session.On<SessionEvent>(evt =>
        {
            switch (evt)
            {
                case SubagentStartedEvent started:
                    Console.WriteLine($"▶ Sub-agent started: {started.Data.AgentDisplayName}");
                    Console.WriteLine($"  Description: {started.Data.AgentDescription}");
                    Console.WriteLine($"  Tool call ID: {started.Data.ToolCallId}");
                    break;
                case SubagentCompletedEvent completed:
                    Console.WriteLine($"✅ Sub-agent completed: {completed.Data.AgentDisplayName}");
                    break;
                case SubagentFailedEvent failed:
                    Console.WriteLine($"❌ Sub-agent failed: {failed.Data.AgentDisplayName} — {failed.Data.Error}");
                    break;
                case SubagentSelectedEvent selected:
                    Console.WriteLine($"🎯 Agent selected: {selected.Data.AgentDisplayName}");
                    break;
            }
        });

        await session.SendAndWaitAsync(new MessageOptions
        {
            Prompt = "Research how authentication works in this codebase"
        });
    }
}
```

```csharp
using var subscription = session.On<SessionEvent>(evt =>
{
    switch (evt)
    {
        case SubagentStartedEvent started:
            Console.WriteLine($"▶ Sub-agent started: {started.Data.AgentDisplayName}");
            Console.WriteLine($"  Description: {started.Data.AgentDescription}");
            Console.WriteLine($"  Tool call ID: {started.Data.ToolCallId}");
            break;
        case SubagentCompletedEvent completed:
            Console.WriteLine($"✅ Sub-agent completed: {completed.Data.AgentDisplayName}");
            break;
        case SubagentFailedEvent failed:
            Console.WriteLine($"❌ Sub-agent failed: {failed.Data.AgentDisplayName} — {failed.Data.Error}");
            break;
        case SubagentSelectedEvent selected:
            Console.WriteLine($"🎯 Agent selected: {selected.Data.AgentDisplayName}");
            break;
    }
});

await session.SendAndWaitAsync(new MessageOptions
{
    Prompt = "Research how authentication works in this codebase"
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
session.on(event -> {
    if (event instanceof SubagentStartedEvent e) {
        System.out.println("▶ Sub-agent started: " + e.getData().agentDisplayName());
        System.out.println("  Description: " + e.getData().agentDescription());
        System.out.println("  Tool call ID: " + e.getData().toolCallId());
    } else if (event instanceof SubagentCompletedEvent e) {
        System.out.println("✅ Sub-agent completed: " + e.getData().agentName());
    } else if (event instanceof SubagentFailedEvent e) {
        System.out.println("❌ Sub-agent failed: " + e.getData().agentName());
        System.out.println("  Error: " + e.getData().error());
    } else if (event instanceof SubagentSelectedEvent e) {
        System.out.println("🎯 Agent selected: " + e.getData().agentDisplayName());
    } else if (event instanceof SubagentDeselectedEvent e) {
        System.out.println("↩ Agent deselected, returning to parent");
    }
});

var response = session.sendAndWait(
    new MessageOptions().setPrompt("Research how authentication works in this codebase")
).get();
```

{% endcodetab %}
{% endcodetabs %}

## Building an agent tree UI

Sub-agent events include `toolCallId` fields that let you reconstruct the execution tree. Here's a pattern for tracking agent activity:

```typescript
interface AgentNode {
    toolCallId: string;
    name: string;
    displayName: string;
    status: "running" | "completed" | "failed";
    error?: string;
    startedAt: Date;
    completedAt?: Date;
}

const agentTree = new Map<string, AgentNode>();

session.on((event) => {
    if (event.type === "subagent.started") {
        agentTree.set(event.data.toolCallId, {
            toolCallId: event.data.toolCallId,
            name: event.data.agentName,
            displayName: event.data.agentDisplayName,
            status: "running",
            startedAt: new Date(event.timestamp),
        });
    }

    if (event.type === "subagent.completed") {
        const node = agentTree.get(event.data.toolCallId);
        if (node) {
            node.status = "completed";
            node.completedAt = new Date(event.timestamp);
        }
    }

    if (event.type === "subagent.failed") {
        const node = agentTree.get(event.data.toolCallId);
        if (node) {
            node.status = "failed";
            node.error = event.data.error;
            node.completedAt = new Date(event.timestamp);
        }
    }

    // Render your UI with the updated tree
    renderAgentTree(agentTree);
});
```

## Scoping tools per agent

Use the `tools` property to restrict which tools an agent can access. This is essential for security and for keeping agents focused:

```typescript
const session = await client.createSession({
    customAgents: [
        {
            name: "reader",
            description: "Read-only exploration of the codebase",
            tools: ["grep", "glob", "view"],  // No write access
            prompt: "You explore and analyze code. Never suggest modifications directly.",
        },
        {
            name: "writer",
            description: "Makes code changes",
            tools: ["view", "edit", "bash"],   // Write access
            prompt: "You make precise code changes as instructed.",
        },
        {
            name: "unrestricted",
            description: "Full access agent for complex tasks",
            tools: null,                        // All tools available
            prompt: "You handle complex multi-step tasks using any available tools.",
        },
    ],
});
```

> [!NOTE]
> When `tools` is `null` or omitted, the agent inherits access to all tools configured on the session. Use explicit tool lists to enforce the principle of least privilege.

## Agent-exclusive tools

Use the `defaultAgent` property on the session configuration to hide specific tools from the default agent (the built-in agent that handles turns when no custom agent is selected). This forces the main agent to delegate to sub-agents when those tools' capabilities are needed, keeping the main agent's context clean.

This is useful when:
* Certain tools generate large amounts of context that would overwhelm the main agent
* You want the main agent to act as an orchestrator, delegating heavy work to specialized sub-agents
* You need strict separation between orchestration and execution

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient, defineTool, approveAll } from "@github/copilot-sdk";
import { z } from "zod";

const heavyContextTool = defineTool("analyze-codebase", {
    description: "Performs deep analysis of the codebase, generating extensive context",
    parameters: z.object({ query: z.string() }),
    handler: async ({ query }) => {
        // ... expensive analysis that returns lots of data
        return { analysis: "..." };
    },
});

const session = await client.createSession({
    tools: [heavyContextTool],
    defaultAgent: {
        excludedTools: ["analyze-codebase"],
    },
    customAgents: [
        {
            name: "researcher",
            description: "Deep codebase analysis agent with access to heavy-context tools",
            tools: ["analyze-codebase"],
            prompt: "You perform thorough codebase analysis using the analyze-codebase tool.",
        },
    ],
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.tools import Tool

heavy_tool = Tool(
    name="analyze-codebase",
    description="Performs deep analysis of the codebase",
    handler=analyze_handler,
    parameters={"type": "object", "properties": {"query": {"type": "string"}}},
)

session = await client.create_session(
    tools=[heavy_tool],
    default_agent={"excluded_tools": ["analyze-codebase"]},
    custom_agents=[
        {
            "name": "researcher",
            "description": "Deep codebase analysis agent",
            "tools": ["analyze-codebase"],
            "prompt": "You perform thorough codebase analysis.",
        },
    ],
    on_permission_request=approve_all,
)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
    Tools: []copilot.Tool{heavyTool},
    DefaultAgent: &copilot.DefaultAgentConfig{
        ExcludedTools: []string{"analyze-codebase"},
    },
    CustomAgents: []copilot.CustomAgentConfig{
        {
            Name:        "researcher",
            Description: "Deep codebase analysis agent",
            Tools:       []string{"analyze-codebase"},
            Prompt:      "You perform thorough codebase analysis.",
        },
    },
})
```

{% endcodetab %}
{% codetab csharp %}

<!-- docs-validate: skip -->

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    Tools = [analyzeCodebaseTool],
    DefaultAgent = new DefaultAgentConfig
    {
        ExcludedTools = ["analyze-codebase"],
    },
    CustomAgents =
    [
        new CustomAgentConfig
        {
            Name = "researcher",
            Description = "Deep codebase analysis agent",
            Tools = ["analyze-codebase"],
            Prompt = "You perform thorough codebase analysis.",
        },
    ],
});
```

{% endcodetab %}
{% endcodetabs %}

### How it works

Tools listed in `defaultAgent.excludedTools`:

1. **Are registered**—their handlers are available for execution
1. **Are hidden** from the main agent's tool list—the LLM won't see or call them directly
1. **Remain available** to any custom sub-agent that includes them in its `tools` array

### Interaction with other tool filters

`defaultAgent.excludedTools` is orthogonal to the session-level `availableTools` and `excludedTools`:

| Filter | Scope | Effect |
|--------|-------|--------|
| `availableTools` | Session-wide | Allowlist—only these tools exist for anyone |
| `excludedTools` | Session-wide | Blocklist—these tools are blocked for everyone |
| `defaultAgent.excludedTools` | Main agent only | These tools are hidden from the main agent but available to sub-agents |

Precedence:
1. Session-level `availableTools`/`excludedTools` are applied first (globally)
1. `defaultAgent.excludedTools` is applied on top, further restricting the main agent only

> [!NOTE]
> If a tool is in both `excludedTools` (session-level) and `defaultAgent.excludedTools`, the session-level exclusion takes precedence—the tool is unavailable to everyone.

## Attaching MCP servers to agents

Each custom agent can have its own MCP (Model Context Protocol) servers, giving it access to specialized data sources:

```typescript
const session = await client.createSession({
    customAgents: [
        {
            name: "db-analyst",
            description: "Analyzes database schemas and queries",
            prompt: "You are a database expert. Use the database MCP server to analyze schemas.",
            mcpServers: {
                "database": {
                    command: "npx",
                    args: ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"],
                },
            },
        },
    ],
});
```

## Patterns and best practices

### Pair a researcher with an editor

A common pattern is to define a read-only researcher agent and a write-capable editor agent. The runtime delegates exploration tasks to the researcher and modification tasks to the editor:

```typescript
customAgents: [
    {
        name: "researcher",
        description: "Analyzes code structure, finds patterns, and answers questions",
        tools: ["grep", "glob", "view"],
        prompt: "You are a code analyst. Thoroughly explore the codebase to answer questions.",
    },
    {
        name: "implementer",
        description: "Implements code changes based on analysis",
        tools: ["view", "edit", "bash"],
        prompt: "You make minimal, targeted code changes. Always verify changes compile.",
    },
]
```

### Keep agent descriptions specific

The runtime uses the `description` to match user intent. Vague descriptions lead to poor delegation:

```typescript
// ❌ Too vague — runtime can't distinguish from other agents
{ description: "Helps with code" }

// ✅ Specific — runtime knows when to delegate
{ description: "Analyzes Python test coverage and identifies untested code paths" }
```

### Handle failures gracefully

Sub-agents can fail. Always listen for `subagent.failed` events and handle them in your application:

```typescript
session.on((event) => {
    if (event.type === "subagent.failed") {
        logger.error(`Agent ${event.data.agentName} failed: ${event.data.error}`);
        // Show error in UI, retry, or fall back to parent agent
    }
});
```
