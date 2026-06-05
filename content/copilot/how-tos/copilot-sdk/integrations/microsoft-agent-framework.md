---
title: Microsoft agent framework integration
shortTitle: Microsoft Agent Framework
intro: >-
  Use the Copilot SDK as an agent provider inside the [Microsoft Agent
  Framework](https://devblogs.microsoft.com/semantic-kernel/build-ai-agents-with-github-copilot-sdk-and-microsoft-agent-framework/)
  (MAF) to compose multi-agent workflows alongside Azure OpenAI, Anthropic, and
  other providers.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Overview

The Microsoft Agent Framework is the unified successor to Semantic Kernel and AutoGen. It provides a standard interface for building, orchestrating, and deploying AI agents. Dedicated integration packages let you wrap a Copilot SDK client as a first-class MAF agent—interchangeable with any other agent provider in the framework.

| Concept | Description |
|---------|-------------|
| **Microsoft Agent Framework** | Open-source framework for single- and multi-agent orchestration in .NET and Python |
| **Agent provider** | A backend that powers an agent (Copilot, Azure OpenAI, Anthropic, etc.) |
| **Orchestrator** | A MAF component that coordinates agents in sequential, concurrent, or handoff workflows |
| **A2A protocol** | Agent-to-Agent communication standard supported by the framework |

> [!NOTE]
> MAF integration packages are available for **.NET** and **Python**. For TypeScript, Go, Java, and Rust, use the Copilot SDK directly—the standard SDK APIs already provide tool calling, streaming, and custom agents.

## Prerequisites

Before you begin, ensure you have:

* A working [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started) in your language of choice
* A GitHub Copilot subscription (Individual, Business, or Enterprise)
* The Copilot CLI installed or available via the SDK's bundled CLI

## Installation

Install the Copilot SDK alongside the MAF integration package for your language:

{% codetabs %}
{% codetab dotnet %}

```shell
dotnet add package GitHub.Copilot.SDK
dotnet add package Microsoft.Agents.AI.GitHub.Copilot --prerelease
```

{% endcodetab %}
{% codetab python %}

```shell
pip install copilot-sdk agent-framework-github-copilot
```

{% endcodetab %}
{% codetab java %}

> [!NOTE]
> The Java SDK does not have a dedicated MAF integration package. Use the standard Copilot SDK directly—it provides tool calling, streaming, and custom agents out of the box.

```xml
<!-- Maven -->
<!-- Set copilot.sdk.version to the version published in java/README.md / Maven Central -->
<dependency>
    <groupId>com.github</groupId>
    <artifactId>copilot-sdk-java</artifactId>
    <version>${copilot.sdk.version}</version>
</dependency>
```

{% endcodetab %}
{% endcodetabs %}

## Basic usage

Wrap the Copilot SDK client as a MAF agent with a single method call. The resulting agent conforms to the framework's standard interface and can be used anywhere a MAF agent is expected.

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
using Microsoft.Agents.AI;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

// Wrap as a MAF agent
AIAgent agent = copilotClient.AsAIAgent();

// Use the standard MAF interface
string response = await agent.RunAsync("Explain how dependency injection works in ASP.NET Core");
Console.WriteLine(response);
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from agent_framework.github import GitHubCopilotAgent

async def main():
    agent = GitHubCopilotAgent(
        default_options={
            "instructions": "You are a helpful coding assistant.",
        }
    )

    async with agent:
        result = await agent.run("Explain how dependency injection works in FastAPI")
        print(result)
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient();
client.start().get();

var session = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

var response = session.sendAndWait(new MessageOptions()
    .setPrompt("Explain how dependency injection works in Spring Boot")).get();
System.out.println(response.getData().content());

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

## Adding custom tools

Extend your Copilot agent with custom function tools. Tools defined through the standard Copilot SDK are automatically available when the agent runs inside MAF.

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
using Microsoft.Extensions.AI;
using Microsoft.Agents.AI;

// Define a custom tool
AIFunction weatherTool = CopilotTool.DefineTool(
    (string location) => $"The weather in {location} is sunny with a high of 25°C.",
    factoryOptions: new AIFunctionFactoryOptions
    {
        Name = "GetWeather",
        Description = "Get the current weather for a given location.",
    }
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

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from agent_framework.github import GitHubCopilotAgent

def get_weather(location: str) -> str:
    """Get the current weather for a given location."""
    return f"The weather in {location} is sunny with a high of 25°C."

async def main():
    agent = GitHubCopilotAgent(
        default_options={
            "instructions": "You are a helpful assistant with access to weather data.",
        },
        tools=[get_weather],
    )

    async with agent:
        result = await agent.run("What's the weather like in Seattle?")
        print(result)
```

{% endcodetab %}
{% endcodetabs %}

You can also use Copilot SDK's native tool definition alongside MAF tools:

{% codetabs %}
{% codetab typescript %}

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
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});

await session.sendAndWait({ prompt: "What's the weather like in Seattle?" });
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

var getWeather = ToolDefinition.create(
    "GetWeather",
    "Get the current weather for a given location.",
    Map.of(
        "type", "object",
        "properties", Map.of(
            "location", Map.of("type", "string", "description", "City name")),
        "required", List.of("location")),
    invocation -> {
        var location = (String) invocation.getArguments().get("location");
        return CompletableFuture.completedFuture(
            "The weather in " + location + " is sunny, 25°C.");
    });

try (var client = new CopilotClient()) {
    client.start().get();

    var session = client.createSession(new SessionConfig()
        .setModel("gpt-4.1")
        .setTools(List.of(getWeather))
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();

    session.sendAndWait(new MessageOptions()
        .setPrompt("What's the weather like in Seattle?")).get();
}
```

{% endcodetab %}
{% endcodetabs %}

## Multi-agent workflows

The primary benefit of MAF integration is composing Copilot alongside other agent providers in orchestrated workflows. Use the framework's built-in orchestrators to create pipelines where different agents handle different steps.

### Sequential workflow

Run agents one after another, passing output from one to the next:

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
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

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from agent_framework.github import GitHubCopilotAgent
from agent_framework.openai import OpenAIAgent
from agent_framework.orchestration import SequentialOrchestrator

async def main():
    # Copilot agent for code review
    reviewer = GitHubCopilotAgent(
        default_options={
            "instructions": "You review code for bugs, security issues, and best practices.",
        }
    )

    # OpenAI agent for documentation
    documentor = OpenAIAgent(
        model="gpt-4.1",
        instructions="You write clear, concise documentation for code changes.",
    )

    # Compose in a sequential pipeline
    pipeline = SequentialOrchestrator(agents=[reviewer, documentor])

    async with pipeline:
        result = await pipeline.run(
            "Review and document this PR: added retry logic to the HTTP client"
        )
        print(result)
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

// Java uses the standard SDK directly — no MAF orchestrator needed
var client = new CopilotClient();
client.start().get();

// Step 1: Code review session
var reviewer = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

var review = reviewer.sendAndWait(new MessageOptions()
    .setPrompt("Review this PR for bugs, security issues, and best practices: "
        + "added retry logic to the HTTP client")).get();

// Step 2: Documentation session using review output
var documentor = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

var docs = documentor.sendAndWait(new MessageOptions()
    .setPrompt("Write documentation for these changes: " + review.getData().content())).get();
System.out.println(docs.getData().content());

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

### Concurrent workflow

Run multiple agents in parallel and aggregate their results:

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
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

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;
import java.util.concurrent.CompletableFuture;

// Java uses CompletableFuture for concurrent execution
var client = new CopilotClient();
client.start().get();

var securitySession = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

var perfSession = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

// Run both reviews concurrently
var securityFuture = securitySession.sendAndWait(new MessageOptions()
    .setPrompt("Focus on security vulnerabilities in this database query module"));
var perfFuture = perfSession.sendAndWait(new MessageOptions()
    .setPrompt("Focus on performance bottlenecks in this database query module"));

CompletableFuture.allOf(securityFuture, perfFuture).get();

System.out.println("Security: " + securityFuture.get().getData().content());
System.out.println("Performance: " + perfFuture.get().getData().content());

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

## Streaming responses

When building interactive applications, stream agent responses to show real-time output. The MAF integration preserves the Copilot SDK's streaming capabilities.

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using GitHub.Copilot;
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

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from agent_framework.github import GitHubCopilotAgent

async def main():
    agent = GitHubCopilotAgent(
        default_options={"streaming": True}
    )

    async with agent:
        async for chunk in agent.run_streaming("Write a quicksort in Python"):
            print(chunk, end="", flush=True)
        print()
```

{% endcodetab %}
{% endcodetabs %}

You can also stream directly through the Copilot SDK without MAF:

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    streaming: true,
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});

session.on("assistant.message_delta", (event) => {
    process.stdout.write(event.data.delta ?? "");
});

await session.sendAndWait({ prompt: "Write a quicksort implementation in TypeScript" });
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient();
client.start().get();

var session = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setStreaming(true)
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

session.on(AssistantMessageDeltaEvent.class, event -> {
    System.out.print(event.getData().deltaContent());
});

session.sendAndWait(new MessageOptions()
    .setPrompt("Write a quicksort implementation in Java")).get();
System.out.println();

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

## Configuration reference

### MAF agent options

| Property | Type | Description |
|----------|------|-------------|
| `Instructions` / `instructions` | `string` | System prompt for the agent |
| `Tools` / `tools` | `AIFunction[]` / `list` | Custom function tools available to the agent |
| `Streaming` / `streaming` | `bool` | Enable streaming responses |
| `Model` / `model` | `string` | Override the default model |

### Copilot SDK options (passed through)

All standard [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started) options are still available when creating the underlying Copilot client. The MAF wrapper delegates to the SDK under the hood:

| SDK Feature | MAF Support |
|-------------|-------------|
| Custom tools (`DefineTool` / `AIFunctionFactory`) | ✅ Merged with MAF tools |
| MCP servers | ✅ Configured on the SDK client |
| Custom agents / sub-agents | ✅ Available within the Copilot agent |
| Infinite sessions | ✅ Configured on the SDK client |
| Model selection | ✅ Overridable per agent or per call |
| Streaming | ✅ Full delta event support |

## Best practices

### Choose the right level of integration

Use the MAF wrapper when you need to compose Copilot with other providers in orchestrated workflows. If your application only uses Copilot, the standalone SDK is simpler and gives you full control:

```typescript
// Standalone SDK — full control, simpler setup
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    onPermissionRequest: async () => ({ kind: "approve-once" }),
});
const response = await session.sendAndWait({ prompt: "Explain this code" });
```

### Keep agents focused

When building multi-agent workflows, give each agent a specific role with clear instructions. Avoid overlapping responsibilities:

```typescript
// ❌ Too vague — overlapping roles
const agents = [
    { instructions: "Help with code" },
    { instructions: "Assist with programming" },
];

// ✅ Focused — clear separation of concerns
const agents = [
    { instructions: "Review code for security vulnerabilities. Flag SQL injection, XSS, and auth issues." },
    { instructions: "Optimize code performance. Focus on algorithmic complexity and memory usage." },
];
```

### Handle errors at the orchestration level

Wrap agent calls in error handling, especially in multi-agent workflows where one agent's failure shouldn't block the entire pipeline:

<!-- docs-validate: skip -->

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

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started): initial Copilot SDK setup
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents): define specialized sub-agents within the SDK
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/skills): reusable prompt modules
* [Microsoft Agent Framework documentation](https://learn.microsoft.com/en-us/agent-framework/agents/providers/github-copilot): official MAF docs for the Copilot provider
* [Blog: Build AI Agents with GitHub Copilot SDK and Microsoft Agent Framework](https://devblogs.microsoft.com/semantic-kernel/build-ai-agents-with-github-copilot-sdk-and-microsoft-agent-framework/)
