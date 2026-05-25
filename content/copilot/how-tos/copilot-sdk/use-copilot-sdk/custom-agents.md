---
title: Custom agents and sub-agent orchestration
shortTitle: Custom agents
intro: Define specialized agents with scoped tools and prompts, and let {% data variables.product.prodname_copilot_short %} orchestrate them as sub-agents within a single session.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Custom agents are lightweight agent definitions you attach to a session. Each agent has its own system prompt, tool restrictions, and optional MCP servers. When a user's request matches an agent's expertise, the {% data variables.copilot.copilot_sdk_short %} runtime automatically delegates to that agent as a sub-agent—running it in an isolated context while streaming lifecycle events back to the parent session. For a visual overview of the delegation flow, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#overview).

| Concept | Description |
|---------|-------------|
| **Custom agent** | A named agent config with its own prompt and tool set |
| **Sub-agent** | A custom agent invoked by the runtime to handle part of a task |
| **Inference** | The runtime's ability to auto-select an agent based on the user's intent |
| **Parent session** | The session that spawned the sub-agent; receives all lifecycle events |

## Defining custom agents

Pass `customAgents` when creating a session. At minimum, each agent needs a `name` and `prompt`.

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
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#defining-custom-agents). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Configuration reference

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `name` | `string` | Yes | Unique identifier for the agent |
| `displayName` | `string` | No | Human-readable name shown in events |
| `description` | `string` | No | What the agent does—helps the runtime select it |
| `tools` | `string[]` or `null` | No | Names of tools the agent can use. `null` or omitted = all tools |
| `prompt` | `string` | Yes | System prompt for the agent |
| `mcpServers` | `object` | No | MCP server configurations specific to this agent |
| `infer` | `boolean` | No | Whether the runtime can auto-select this agent (default: `true`) |
| `skills` | `string[]` | No | Skill names to preload into the agent's context at startup |

> [!TIP]
> A good `description` helps the runtime match user intent to the right agent. Be specific about the agent's expertise and capabilities.

In addition to per-agent configuration, you can set `agent` on the **session config** to pre-select which custom agent is active when the session starts.

| Session config property | Type | Description |
|-------------------------|------|-------------|
| `agent` | `string` | Name of the custom agent to pre-select at session creation. Must match a `name` in `customAgents`. |

## Per-agent skills

You can preload skills into an agent's context using the `skills` property. When specified, the full content of each listed skill is eagerly injected into the agent's context at startup—the agent doesn't need to invoke a skill tool; the instructions are already present. Skills are opt-in: agents receive no skills by default, and sub-agents do not inherit skills from the parent. Skill names are resolved from the session-level `skillDirectories`.

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
    onPermissionRequest: async () => ({ kind: "approved" }),
});
```

In this example, `security-auditor` starts with `security-scan` and `dependency-check` already injected into its context, while `docs-writer` starts with `markdown-lint`. An agent without a `skills` field receives no skill content.

For examples in other languages, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#per-agent-skills). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Selecting an agent at session creation

You can pass `agent` in the session config to pre-select which custom agent should be active when the session starts. The value must match the `name` of one of the agents defined in `customAgents`.

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

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#selecting-an-agent-at-session-creation). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

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
| `subagent.deselected` | Runtime switches away from the sub-agent | None |

### Subscribing to events

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

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#listening-to-sub-agent-events). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

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

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/features/custom-agents.md#agent-exclusive-tools). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

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
