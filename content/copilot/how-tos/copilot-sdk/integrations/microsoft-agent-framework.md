---
title: Microsoft Agent Framework integration
shortTitle: Microsoft Agent Framework
intro: Use {% data variables.copilot.copilot_sdk_short %} as an agent provider inside the Microsoft Agent Framework to build and orchestrate multi-agent workflows alongside other AI providers.
versions:
  feature: copilot
product: '{% data reusables.gated-features.copilot-sdk %}'
contentType: how-tos
---

> [!NOTE]
> {% data variables.copilot.copilot_sdk_short %} is currently in {% data variables.release-phases.technical_preview %}. Functionality and availability are subject to change.

Use {% data variables.copilot.copilot_sdk_short %} as an agent provider inside the [Microsoft Agent Framework](https://devblogs.microsoft.com/semantic-kernel/build-ai-agents-with-github-copilot-sdk-and-microsoft-agent-framework/) (MAF) to compose multi-agent workflows alongside Azure OpenAI, Anthropic, and other providers.

## Overview

The Microsoft Agent Framework is the unified successor to Semantic Kernel and AutoGen. It provides a standard interface for building, orchestrating, and deploying AI agents. Dedicated integration packages let you wrap a {% data variables.copilot.copilot_sdk_short %} client as a first-class MAF agent—interchangeable with any other agent provider in the framework.

| Concept | Description |
|---------|-------------|
| Microsoft Agent Framework | Open-source framework for single- and multi-agent orchestration in .NET and Python |
| Agent provider | A backend that powers an agent (Copilot, Azure OpenAI, Anthropic, etc.) |
| Orchestrator | A MAF component that coordinates agents in sequential, concurrent, or handoff workflows |
| A2A protocol | Agent-to-Agent communication standard supported by the framework |

> [!NOTE]
> MAF integration packages are available for .NET and Python. For TypeScript and Go, use the {% data variables.copilot.copilot_sdk_short %} directly—the standard SDK APIs provide tool calling, streaming, and custom agents.

## Prerequisites

Before you begin, make sure you have:

* A working {% data variables.copilot.copilot_sdk_short %} setup in your language of choice. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
* A {% data variables.product.prodname_copilot %} subscription (Individual, Business, or Enterprise).
* {% data variables.copilot.copilot_cli_short %} installed or available via the SDK's bundled CLI.

## Installation

Install the {% data variables.copilot.copilot_sdk_short %} alongside the MAF integration package:

```shell
dotnet add package GitHub.Copilot.SDK
dotnet add package Microsoft.Agents.AI.GitHub.Copilot --prerelease
```

For examples in Python, see the [`microsoft-agent-framework`](https://github.com/github/copilot-sdk/blob/main/docs/integrations/microsoft-agent-framework.md) article in the `github/copilot-sdk` repository.

## Basic usage

Wrap the {% data variables.copilot.copilot_sdk_short %} client as a MAF agent with a single method call. The resulting agent conforms to the framework's standard interface and can be used anywhere a MAF agent is expected.

```csharp
using GitHub.Copilot.SDK;
using Microsoft.Agents.AI;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

// Wrap as a MAF agent
AIAgent agent = copilotClient.AsAIAgent();

// Use the standard MAF interface
string response = await agent.RunAsync("Explain how dependency injection works in ASP.NET Core");
Console.WriteLine(response);
```

For examples in Python, see the [`microsoft-agent-framework`](https://github.com/github/copilot-sdk/blob/main/docs/integrations/microsoft-agent-framework.md) article in the `github/copilot-sdk` repository.

## Adding custom tools

Extend your {% data variables.product.prodname_copilot_short %} agent with custom function tools. Tools defined through the standard {% data variables.copilot.copilot_sdk_short %} are automatically available when the agent runs inside MAF.

```csharp
using GitHub.Copilot.SDK;
using Microsoft.Extensions.AI;
using Microsoft.Agents.AI;

// Define a custom tool
AIFunction weatherTool = AIFunctionFactory.Create(
    (string location) => $"The weather in {location} is sunny with a high of 25°C.",
    "GetWeather",
    "Get the current weather for a given location."
);

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

// Create agent with tools
AIAgent agent = copilotClient.AsAIAgent(new AIAgentOptions
{
    Tools = new[] { weatherTool },
});

string response = await agent.RunAsync("What's the weather like in Seattle?");
Console.WriteLine(response);
```

You can also use the {% data variables.copilot.copilot_sdk_short %}'s native tool definition alongside MAF tools:

```typescript
import { CopilotClient, DefineTool } from "@github/copilot-sdk";

const getWeather = DefineTool({
    name: "GetWeather",
    description: "Get the current weather for a given location.",
    parameters: { location: { type: "string", description: "City name" } },
    execute: async ({ location }) => `The weather in ${location} is sunny, 25°C.`,
});

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    tools: [getWeather],
    onPermissionRequest: async () => ({ kind: "approved" }),
});

await session.sendAndWait({ prompt: "What's the weather like in Seattle?" });
```

> [!WARNING]
> Setting `onPermissionRequest` to always return `{ kind: "approved" }` can allow prompt injections without approval. For production use, implement policy-based approval that evaluates the requested tool and its parameters before granting permission.

For examples in Python, see the [`microsoft-agent-framework`](https://github.com/github/copilot-sdk/blob/main/docs/integrations/microsoft-agent-framework.md) article in the `github/copilot-sdk` repository.

## Multi-agent workflows

The primary benefit of MAF integration is composing {% data variables.product.prodname_copilot_short %} alongside other agent providers in orchestrated workflows. Use the framework's built-in orchestrators to create pipelines where different agents handle different steps.

### Sequential workflow

Run agents one after another, passing output from one to the next:

```csharp
using GitHub.Copilot.SDK;
using Microsoft.Agents.AI;
using Microsoft.Agents.AI.Orchestration;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

// Copilot agent for code review
AIAgent reviewer = copilotClient.AsAIAgent(new AIAgentOptions
{
    Instructions = "You review code for bugs, security issues, and best practices. Be thorough.",
});

// Azure OpenAI agent for generating documentation
AIAgent documentor = AIAgent.FromOpenAI(new OpenAIAgentOptions
{
    Model = "gpt-4.1",
    Instructions = "You write clear, concise documentation for code changes.",
});

// Compose in a sequential pipeline
var pipeline = new SequentialOrchestrator(new[] { reviewer, documentor });

string result = await pipeline.RunAsync(
    "Review and document this pull request: added retry logic to the HTTP client"
);
Console.WriteLine(result);
```

For examples in Python, see the [`microsoft-agent-framework`](https://github.com/github/copilot-sdk/blob/main/docs/integrations/microsoft-agent-framework.md) article in the `github/copilot-sdk` repository.

### Concurrent workflow

Run multiple agents in parallel and aggregate their results:

```csharp
using GitHub.Copilot.SDK;
using Microsoft.Agents.AI;
using Microsoft.Agents.AI.Orchestration;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

AIAgent securityReviewer = copilotClient.AsAIAgent(new AIAgentOptions
{
    Instructions = "Focus exclusively on security vulnerabilities and risks.",
});

AIAgent performanceReviewer = copilotClient.AsAIAgent(new AIAgentOptions
{
    Instructions = "Focus exclusively on performance bottlenecks and optimization opportunities.",
});

// Run both reviews concurrently
var concurrent = new ConcurrentOrchestrator(new[] { securityReviewer, performanceReviewer });

string combinedResult = await concurrent.RunAsync(
    "Analyze this database query module for issues"
);
Console.WriteLine(combinedResult);
```

## Streaming responses

When building interactive applications, stream agent responses to show real-time output. The MAF integration preserves the {% data variables.copilot.copilot_sdk_short %}'s streaming capabilities.

```csharp
using GitHub.Copilot.SDK;
using Microsoft.Agents.AI;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

AIAgent agent = copilotClient.AsAIAgent(new AIAgentOptions
{
    Streaming = true,
});

await foreach (var chunk in agent.RunStreamingAsync("Write a quicksort implementation in C#"))
{
    Console.Write(chunk);
}
Console.WriteLine();
```

You can also stream directly through the {% data variables.copilot.copilot_sdk_short %} without MAF:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    streaming: true,
    onPermissionRequest: async () => ({ kind: "approved" }),
});

session.on("assistant.message_delta", (event) => {
    process.stdout.write(event.data.delta ?? "");
});

await session.sendAndWait({ prompt: "Write a quicksort implementation in TypeScript" });
```

For examples in Python, see the [`microsoft-agent-framework`](https://github.com/github/copilot-sdk/blob/main/docs/integrations/microsoft-agent-framework.md) article in the `github/copilot-sdk` repository.

## Configuration reference

### MAF agent options

| Property       | Type             | Description |
|----------------|------------------|-------------|
| `Instructions` | string           | System prompt for the agent |
| `Tools`        | AIFunction[] or list | Custom function tools available to the agent |
| `Streaming`    | bool             | Enable streaming responses |
| `Model`        | string           | Override the default model |

### Copilot SDK options (passed through)

All standard `SessionConfig` options are available when creating the underlying {% data variables.product.prodname_copilot_short %} client. The MAF wrapper delegates to the SDK under the hood.

| SDK feature                                         | MAF support |
|-----------------------------------------------------|-------------|
| Custom tools (`DefineTool` and `AIFunctionFactory`) | Merged with MAF tools |
| MCP servers                                         | Configured on the SDK client |
| Custom agents and sub-agents                        | Available within the Copilot agent |
| Infinite sessions                                   | Configured on the SDK client |
| Model selection                                     | Overridable per agent or per call |
| Streaming                                           | Full delta event support |

## Best practices

### Choose the right level of integration

Use the MAF wrapper when you need to compose {% data variables.product.prodname_copilot_short %} with other providers in orchestrated workflows. If your application only uses {% data variables.product.prodname_copilot_short %}, the standalone SDK is simpler and gives you full control:

```typescript
// Standalone SDK — full control, simpler setup
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approved" }),
});
const response = await session.sendAndWait({ prompt: "Explain this code" });
```

### Keep agents focused

When building multi-agent workflows, give each agent a specific role with clear instructions. Avoid overlapping responsibilities:

```typescript
// Too vague — overlapping roles
const agents = [
    { instructions: "Help with code" },
    { instructions: "Assist with programming" },
];

// Focused — clear separation of concerns
const agents = [
    { instructions: "Review code for security vulnerabilities. Flag SQL injection, XSS, and auth issues." },
    { instructions: "Optimize code performance. Focus on algorithmic complexity and memory usage." },
];
```

### Handle errors at the orchestration level

Wrap agent calls in error handling, especially in multi-agent workflows where one agent's failure shouldn't block the entire pipeline:

```csharp
try
{
    string result = await pipeline.RunAsync("Analyze this module");
    Console.WriteLine(result);
}
catch (AgentException ex)
{
    Console.Error.WriteLine($"Agent {ex.AgentName} failed: {ex.Message}");
    // Fall back to single-agent mode or retry
}
```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started)
* [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/agents/providers/github-copilot)
* [Blog: Build AI Agents with GitHub Copilot SDK and Microsoft Agent Framework](https://devblogs.microsoft.com/semantic-kernel/build-ai-agents-with-github-copilot-sdk-and-microsoft-agent-framework/)
