---
title: Getting started with Copilot SDK
shortTitle: Quickstart
intro: Learn how to install {% data variables.copilot.copilot_sdk_short %} and send your first message.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Learn about Copilot
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

{% data variables.copilot.copilot_sdk %} lets you build applications powered by {% data variables.product.prodname_copilot %} in your preferred programming language. In this guide, you'll install the SDK using `npm`, send your first message, and add streaming responses.

For more information and steps for other languages, see [Install the SDK](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md) in the `github/copilot-sdk` repository.

## Prerequisites

Before you begin, make sure you have **Node.js 18** or later installed.

## Authentication

Follow the instructions at [AUTOTITLE](/copilot/how-tos/copilot-cli/install-copilot-cli) to install and authenticate with {% data variables.copilot.copilot_cli %}. This will allow the SDK to access your {% data variables.product.github %} account and use {% data variables.product.prodname_copilot_short %}.

1. Verify that {% data variables.copilot.copilot_cli_short %} is installed and working:

    ```bash copy
    copilot --version
    ```

## Installation

1. Create a new directory and initialize your project:

    ```bash copy
    mkdir copilot-demo && cd copilot-demo
    npm init -y --init-type module
    ```

1. Install the SDK and TypeScript runner:

    ```bash copy
    npm install @github/copilot-sdk tsx
    ```

## Send your first message

1. Create a new file `index.ts` and add the following code. This sends a single prompt to {% data variables.product.prodname_copilot_short %} and prints the response.

    ```typescript copy
    import { CopilotClient } from "@github/copilot-sdk";
    
    const client = new CopilotClient();
    const session = await client.createSession({ model: "gpt-4.1" });
    
    const response = await session.sendAndWait({ prompt: "What is 2 + 2?" });
    console.log(response?.data.content);
    
    await client.stop();
    process.exit(0);
    ```

1. Run the code:

    ```bash copy
    npx tsx index.ts
    ```

In this example:

* **`CopilotClient()`** creates a new client that manages the connection to {% data variables.copilot.copilot_cli_short %}.
* **`createSession()`** starts a new conversation session with the specified model.
* **`sendAndWait()`** sends a prompt and waits for the complete response before returning.

## Add streaming responses

Instead of waiting for the full response, you can stream it as it's generated. This is useful for long responses or interactive applications where you want to display output in real time.

1. Update `index.ts` with the following code to listen and print response chunks as they arrive:

    ```typescript copy
    import { CopilotClient } from "@github/copilot-sdk";
    
    const client = new CopilotClient();
    const session = await client.createSession({
        model: "gpt-4.1",
        streaming: true,
    });
    
    // Listen for response chunks
    session.on("assistant.message_delta", (event) => {
        process.stdout.write(event.data.deltaContent);
    });
    session.on("session.idle", () => {
        console.log(); // New line when done
    });
    
    await session.sendAndWait({ prompt: "Tell me a short joke" });
    
    await client.stop();
    process.exit(0);
    ```

1. Run the code:

    ```bash copy
    npx tsx index.ts
    ```

With streaming enabled, the response appears incrementally as it's generated. 
You can subscribe to events to process each chunk in real time:

* **`assistant.message_delta`** fires for each chunk of the response as it's generated.
* **`session.idle`** fires when the response is complete and the session is ready for the next message.

### Event subscription methods

The SDK provides the following methods to subscribe to events:

* **on(handler)**: Subscribe to all events. Returns the unsubscribe function.
* **on(eventType, handler)**: Subscribe to a specific event type. Returns the unsubscribe function.

Add the following code to `index.ts` to subscribe to events and unsubscribe when you no longer need them:

```typescript copy
// Subscribe to all events
const unsubscribeAll = session.on((event) => {
    console.log("Event:", event.type);
});

// Subscribe to specific event type
const unsubscribeIdle = session.on("session.idle", (event) => {
    console.log("Session is idle");
});

// Later, to unsubscribe:
unsubscribeAll();
unsubscribeIdle();
```

## Next steps

### Add a custom tool

Give {% data variables.product.prodname_copilot_short %} the ability to call your code by defining a custom tool. Here's a weather lookup tool:

```typescript copy
import { CopilotClient, defineTool } from "@github/copilot-sdk";

// Define a tool that Copilot can call
const getWeather = defineTool("get_weather", {
    description: "Get the current weather for a city",
    parameters: {
        type: "object",
        properties: {
            city: { type: "string", description: "The city name" },
        },
        required: ["city"],
    },
    handler: async (args: { city: string }) => {
        const { city } = args;
        // In a real app, you'd call a weather API here
        const conditions = ["sunny", "cloudy", "rainy", "partly cloudy"];
        const temp = Math.floor(Math.random() * 30) + 50;
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        return { city, temperature: `${temp}°F`, condition };
    },
});

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    streaming: true,
    tools: [getWeather],
});

session.on("assistant.message_delta", (event) => {
    process.stdout.write(event.data.deltaContent);
});

session.on("session.idle", () => {
    console.log(); // New line when done
});

await session.sendAndWait({
    prompt: "What's the weather like in Seattle and Tokyo?",
});

await client.stop();
process.exit(0);
```

For examples in Python, Go, .NET, and Rust, see [Getting started](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md#step-4-add-a-custom-tool) in the `github/copilot-sdk` repository. {% data reusables.copilot.copilot-sdk.java-sdk-link %}

When you define a tool, you're telling {% data variables.product.prodname_copilot_short %}:

1. **What the tool does** (description)
1. **What parameters it needs** (schema)
1. **What code to run** (handler)

{% data variables.product.prodname_copilot_short %} decides when to call your tool based on the user's question. When it does, the {% data variables.copilot.copilot_sdk_short %} runs your handler function and sends the result back to {% data variables.product.prodname_copilot_short %}, which incorporates it into the response.

### Build an interactive assistant

Combine everything into an interactive chat assistant:

```typescript copy
import { CopilotClient, defineTool } from "@github/copilot-sdk";
import * as readline from "readline";

const getWeather = defineTool("get_weather", {
    description: "Get the current weather for a city",
    parameters: {
        type: "object",
        properties: {
            city: { type: "string", description: "The city name" },
        },
        required: ["city"],
    },
    handler: async ({ city }) => {
        const conditions = ["sunny", "cloudy", "rainy", "partly cloudy"];
        const temp = Math.floor(Math.random() * 30) + 50;
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        return { city, temperature: `${temp}°F`, condition };
    },
});

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    streaming: true,
    tools: [getWeather],
});

session.on("assistant.message_delta", (event) => {
    process.stdout.write(event.data.deltaContent);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Weather Assistant (type 'exit' to quit)");
console.log("   Try: 'What's the weather in Paris?'\n");

const prompt = () => {
    rl.question("You: ", async (input) => {
        if (input.toLowerCase() === "exit") {
            await client.stop();
            rl.close();
            return;
        }

        process.stdout.write("Assistant: ");
        await session.sendAndWait({ prompt: input });
        console.log("\n");
        prompt();
    });
};

prompt();
```

Run with:

```bash copy
npx tsx weather-assistant.ts
```

For examples in Python, Go, .NET, and Rust, see [Getting started](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md#step-5-build-an-interactive-assistant) in the `github/copilot-sdk` repository. {% data reusables.copilot.copilot-sdk.java-sdk-link %}

### Connect to MCP servers

MCP (Model Context Protocol) servers provide pre-built tools. Connect to {% data variables.product.github %}'s MCP server to give {% data variables.product.prodname_copilot_short %} access to repositories, issues, and pull requests:

```typescript copy
const session = await client.createSession({
    mcpServers: {
        github: {
            type: "http",
            url: "https://api.githubcopilot.com/mcp/",
        },
    },
});
```

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/mcp-servers).

### Create custom agents

Define specialized AI personas for specific tasks:

```typescript copy
const session = await client.createSession({
    customAgents: [{
        name: "pr-reviewer",
        displayName: "PR Reviewer",
        description: "Reviews pull requests for best practices",
        prompt: "You are an expert code reviewer. Focus on security, performance, and maintainability.",
    }],
});
```

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/custom-agents).

### Customize the system message

Control the AI's behavior and personality by appending instructions:

```typescript copy
const session = await client.createSession({
    systemMessage: {
        content: "You are a helpful assistant for our engineering team. Always be concise.",
    },
});
```

### Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/choosing-a-setup-path)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/agent-loop)
* [Connecting to an external CLI server](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md#connecting-to-an-external-cli-server) in the `github/copilot-sdk` repository
* [Telemetry and observability](https://github.com/github/copilot-sdk/blob/main/docs/getting-started.md#telemetry-and-observability) in the `github/copilot-sdk` repository
