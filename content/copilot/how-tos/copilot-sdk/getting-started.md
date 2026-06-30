---
title: Build your first Copilot-powered app
shortTitle: Getting Started
intro: >-
  In this tutorial, you'll use the Copilot SDK to build a command-line
  assistant. You'll start with the basics, add streaming responses, then add
  custom tools - giving Copilot the ability to call your code.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/sdk-getting-started
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

**What you'll build:**

```text
You: What's the weather like in Seattle?
Copilot: Let me check the weather for Seattle...
         Currently 62°F and cloudy with a chance of rain.
         Typical Seattle weather!

You: How about Tokyo?
Copilot: In Tokyo it's 75°F and sunny. Great day to be outside!
```

## Prerequisites

Before you begin, make sure you have:

* **GitHub Copilot CLI** installed and authenticated (the Node.js, Python, and .NET SDKs bundle the CLI automatically—see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/bundled-cli). Required for Go, Java, and Rust unless using their application-level CLI bundling features.)
* Your preferred language runtime:
  * **Node.js** 20+ or **Python** 3.11+ or **Go** 1.24+ or **Rust** 1.94+ or **Java** 17+ or **.NET** 8.0+

Verify the CLI is working:

```bash
copilot --version
```

## Step 1: install the SDK

{% codetabs %}
{% codetab typescript %}

First, create a new directory and initialize your project:

```bash
mkdir copilot-demo && cd copilot-demo
npm init -y --init-type module
```

Then install the SDK and TypeScript runner:

```bash
npm install @github/copilot-sdk tsx
```

{% endcodetab %}
{% codetab python %}

```bash
pip install github-copilot-sdk
```

{% endcodetab %}
{% codetab go %}

First, create a new directory and initialize your module:

```bash
mkdir copilot-demo && cd copilot-demo
go mod init copilot-demo
```

Then install the SDK:

```bash
go get github.com/github/copilot-sdk/go
```

{% endcodetab %}
{% codetab rust %}

First, create a new binary crate:

```bash
cargo new copilot-demo && cd copilot-demo
```

Then install the SDK and direct dependencies used by the examples:

```bash
cargo add github-copilot-sdk --features derive
# Used by #[tokio::main] and tokio::spawn
cargo add tokio --features rt-multi-thread,macros
# Used by custom-tool parameter derives later in this guide
cargo add serde --features derive
cargo add schemars
```

{% endcodetab %}
{% codetab dotnet %}

First, create a new console project:

```bash
dotnet new console -n CopilotDemo && cd CopilotDemo
```

Then add the SDK:

```bash
dotnet add package GitHub.Copilot.SDK
```

{% endcodetab %}
{% codetab java %}

First, create a new directory and initialize your project.

**Maven**—add to your `pom.xml`:

```xml
<dependency>
    <groupId>com.github</groupId>
    <artifactId>copilot-sdk-java</artifactId>
    <version>${copilot.sdk.version}</version>
</dependency>
```

**Gradle**—add to your `build.gradle`:

```groovy
implementation 'com.github:copilot-sdk-java:${copilotSdkVersion}'
```

{% endcodetab %}
{% endcodetabs %}

## Step 2: send your first message

Create a new file and add the following code. This is the simplest way to use the SDK—about 5 lines of code.

{% codetabs %}
{% codetab typescript %}

Create `index.ts`:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({ model: "auto" });

const response = await session.sendAndWait({ prompt: "What is 2 + 2?" });
console.log(response?.data.content);

await client.stop();
process.exit(0);
```

Run it:

```bash
npx tsx index.ts
```

{% endcodetab %}
{% codetab python %}

Create `main.py`:

```python
import asyncio
from copilot import CopilotClient
from copilot.session import PermissionHandler

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="auto")
    response = await session.send_and_wait("What is 2 + 2?")
    print(response.data.content)

    await client.stop()

asyncio.run(main())
```

Run it:

```bash
python main.py
```

{% endcodetab %}
{% codetab go %}

Create `main.go`:

```golang
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, err := client.CreateSession(ctx, &copilot.SessionConfig{Model: "auto"})
	if err != nil {
		log.Fatal(err)
	}

	response, err := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "What is 2 + 2?"})
	if err != nil {
		log.Fatal(err)
	}

	if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
		fmt.Println(d.Content)
	}
	os.Exit(0)
}
```

Run it:

```bash
go run main.go
```

{% endcodetab %}
{% codetab rust %}

Create `src/main.rs`:

```rust
use std::sync::Arc;
use std::time::Duration;

use github_copilot_sdk::handler::ApproveAllHandler;
use github_copilot_sdk::{Client, ClientOptions, MessageOptions, SessionConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::start(ClientOptions::default()).await?;
    let session = client
        .create_session(SessionConfig::default().with_permission_handler(Arc::new(ApproveAllHandler)))
        .await?;

    let response = session
        .send_and_wait(
            MessageOptions::new("What is 2 + 2?").with_wait_timeout(Duration::from_secs(120)),
        )
        .await?;

    if let Some(event) = response {
        if let Some(content) = event.data.get("content").and_then(|value| value.as_str()) {
            println!("{content}");
        }
    }

    session.disconnect().await?;
    client.stop().await?;
    Ok(())
}
```

Run it:

```bash
cargo run
```

{% endcodetab %}
{% codetab dotnet %}

Create a new console project and add this to `Program.cs`:

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "auto",
    OnPermissionRequest = PermissionHandler.ApproveAll
});

var response = await session.SendAndWaitAsync(new MessageOptions { Prompt = "What is 2 + 2?" });
Console.WriteLine(response?.Data.Content);
```

Run it:

```bash
dotnet run
```

{% endcodetab %}
{% codetab java %}

Create `HelloCopilot.java`:

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

public class HelloCopilot {
    public static void main(String[] args) throws Exception {
        try (var client = new CopilotClient()) {
            client.start().get();

            var session = client.createSession(
                new SessionConfig()
                    .setModel("auto")
                    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
            ).get();

            var response = session.sendAndWait(
                new MessageOptions().setPrompt("What is 2 + 2?")
            ).get();

            System.out.println(response.getData().content());

            client.stop().get();
        }
    }
}
```

Run it:

```bash
javac -cp copilot-sdk.jar HelloCopilot.java && java -cp .:copilot-sdk.jar HelloCopilot
```

{% endcodetab %}
{% endcodetabs %}

**You should see:**

```text
4
```

Congratulations! You just built your first Copilot-powered app.

## Step 3: add streaming responses

Right now, you wait for the complete response before seeing anything. Let's make it interactive by streaming the response as it's generated.

{% codetabs %}
{% codetab typescript %}

Update `index.ts`:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "auto",
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

{% endcodetab %}
{% codetab python %}

Update `main.py`:

```python
import asyncio
import sys
from copilot import CopilotClient
from copilot.session import PermissionHandler
from copilot.generated.session_events import SessionEventType

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="auto", streaming=True)

    # Listen for response chunks
    def handle_event(event):
        if event.type == SessionEventType.ASSISTANT_MESSAGE_DELTA:
            sys.stdout.write(event.data.delta_content)
            sys.stdout.flush()
        if event.type == SessionEventType.SESSION_IDLE:
            print()  # New line when done

    session.on(handle_event)

    await session.send_and_wait("Tell me a short joke")

    await client.stop()

asyncio.run(main())
```

{% endcodetab %}
{% codetab go %}

Update `main.go`:

```golang
package main

import (
	"context"
	"fmt"
	"log"
	"os"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	ctx := context.Background()
	client := copilot.NewClient(nil)
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, err := client.CreateSession(ctx, &copilot.SessionConfig{
		Model:     "auto",
		Streaming: copilot.Bool(true),
	})
	if err != nil {
		log.Fatal(err)
	}

	// Listen for response chunks
	session.On(func(event copilot.SessionEvent) {
		switch d := event.Data.(type) {
		case *copilot.AssistantMessageDeltaData:
			fmt.Print(d.DeltaContent)
		case *copilot.SessionIdleData:
			_ = d
			fmt.Println()
		}
	})

	_, err = session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Tell me a short joke"})
	if err != nil {
		log.Fatal(err)
	}
	os.Exit(0)
}
```

{% endcodetab %}
{% codetab rust %}

Update `src/main.rs`:

```rust
use std::io::{self, Write};
use std::sync::Arc;
use std::time::Duration;

use github_copilot_sdk::handler::ApproveAllHandler;
use github_copilot_sdk::{Client, ClientOptions, MessageOptions, SessionConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::start(ClientOptions::default()).await?;

    let mut config = SessionConfig::default();
    config.streaming = Some(true);
    let session = client
        .create_session(config.with_permission_handler(Arc::new(ApproveAllHandler)))
        .await?;

    // Listen for response chunks
    let mut events = session.subscribe();
    tokio::spawn(async move {
        while let Ok(event) = events.recv().await {
            match event.event_type.as_str() {
                "assistant.message_delta" => {
                    if let Some(text) =
                        event.data.get("deltaContent").and_then(|value| value.as_str())
                    {
                        print!("{text}");
                        io::stdout().flush().ok();
                    }
                }
                "assistant.message" => println!(),
                _ => {}
            }
        }
    });

    session
        .send_and_wait(
            MessageOptions::new("Tell me a short joke")
                .with_wait_timeout(Duration::from_secs(120)),
        )
        .await?;

    session.disconnect().await?;
    client.stop().await?;
    Ok(())
}
```

{% endcodetab %}
{% codetab dotnet %}

Update `Program.cs`:

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "auto",
    OnPermissionRequest = PermissionHandler.ApproveAll,
    Streaming = true,
});

// Listen for response chunks
session.On<SessionEvent>(ev =>
{
    if (ev is AssistantMessageDeltaEvent deltaEvent)
    {
        Console.Write(deltaEvent.Data.DeltaContent);
    }
    if (ev is SessionIdleEvent)
    {
        Console.WriteLine();
    }
});

await session.SendAndWaitAsync(new MessageOptions { Prompt = "Tell me a short joke" });
```

{% endcodetab %}
{% codetab java %}

Update `HelloCopilot.java`:

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

public class HelloCopilot {
    public static void main(String[] args) throws Exception {
        try (var client = new CopilotClient()) {
            client.start().get();

            var session = client.createSession(
                new SessionConfig()
                    .setModel("auto")
                    .setStreaming(true)
                    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
            ).get();

            // Listen for response chunks
            session.on(AssistantMessageDeltaEvent.class, delta -> {
                System.out.print(delta.getData().deltaContent());
            });
            session.on(SessionIdleEvent.class, idle -> {
                System.out.println(); // New line when done
            });

            session.sendAndWait(
                new MessageOptions().setPrompt("Tell me a short joke")
            ).get();

            client.stop().get();
        }
    }
}
```

{% endcodetab %}
{% endcodetabs %}

Run the code again. You'll see the response appear word by word.

### Event subscription methods

The SDK provides methods for subscribing to session events:

| Method | Description |
|--------|-------------|
| `on(handler)` | Subscribe to all events; returns unsubscribe function |
| `on(eventType, handler)` | Subscribe to specific event type (Node.js/TypeScript only); returns unsubscribe function |
| `subscribe()` | Subscribe to all events (Rust); filter by `event_type` |

{% codetabs %}
{% codetab typescript %}

```typescript
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

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, PermissionDecisionApproveOnce
from copilot.generated.session_events import SessionEvent, SessionEventType

client = CopilotClient()

session = await client.create_session(on_permission_request=lambda req, inv: PermissionDecisionApproveOnce())

# Subscribe to all events
unsubscribe = session.on(lambda event: print(f"Event: {event.type}"))

# Filter by event type in your handler
def handle_event(event: SessionEvent) -> None:
    if event.type == SessionEventType.SESSION_IDLE:
        print("Session is idle")
    elif event.type == SessionEventType.ASSISTANT_MESSAGE:
        print(f"Message: {event.data.content}")

unsubscribe = session.on(handle_event)

# Later, to unsubscribe:
unsubscribe()
```

```python
# Subscribe to all events
unsubscribe = session.on(lambda event: print(f"Event: {event.type}"))

# Filter by event type in your handler
def handle_event(event):
    if event.type == SessionEventType.SESSION_IDLE:
        print("Session is idle")
    elif event.type == SessionEventType.ASSISTANT_MESSAGE:
        print(f"Message: {event.data.content}")

unsubscribe = session.on(handle_event)

# Later, to unsubscribe:
unsubscribe()
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"fmt"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	session := &copilot.Session{}

	// Subscribe to all events
	unsubscribe := session.On(func(event copilot.SessionEvent) {
		fmt.Println("Event:", event.Type)
	})

	// Filter by event type in your handler
	session.On(func(event copilot.SessionEvent) {
		switch d := event.Data.(type) {
		case *copilot.SessionIdleData:
			_ = d
			fmt.Println("Session is idle")
		case *copilot.AssistantMessageData:
			fmt.Println("Message:", d.Content)
		}
	})

	// Later, to unsubscribe:
	unsubscribe()
}
```

```golang
// Subscribe to all events
unsubscribe := session.On(func(event copilot.SessionEvent) {
    fmt.Println("Event:", event.Type)
})

// Filter by event type in your handler
session.On(func(event copilot.SessionEvent) {
    switch d := event.Data.(type) {
    case *copilot.SessionIdleData:
        _ = d
        fmt.Println("Session is idle")
    case *copilot.AssistantMessageData:
        fmt.Println("Message:", d.Content)
    }
})

// Later, to unsubscribe:
unsubscribe()
```

{% endcodetab %}
{% codetab rust %}

```rust
let mut events = session.subscribe();

tokio::spawn(async move {
    while let Ok(event) = events.recv().await {
        println!("Event: {}", event.event_type);

        match event.event_type.as_str() {
            "session.idle" => println!("Session is idle"),
            "assistant.message" => {
                if let Some(content) = event.data.get("content").and_then(|value| value.as_str()) {
                    println!("Message: {content}");
                }
            }
            _ => {}
        }
    }
});
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

public static class EventSubscriptionExample
{
    public static void Example(CopilotSession session)
    {
        // Subscribe to all events
        var unsubscribe = session.On<SessionEvent>(ev => Console.WriteLine($"Event: {ev.Type}"));

        // Filter by event type using pattern matching
        session.On<SessionEvent>(ev =>
        {
            switch (ev)
            {
                case SessionIdleEvent:
                    Console.WriteLine("Session is idle");
                    break;
                case AssistantMessageEvent msg:
                    Console.WriteLine($"Message: {msg.Data.Content}");
                    break;
            }
        });

        // Later, to unsubscribe:
        unsubscribe.Dispose();
    }
}
```

```csharp
// Subscribe to all events
var unsubscribe = session.On<SessionEvent>(ev => Console.WriteLine($"Event: {ev.Type}"));

// Filter by event type using pattern matching
session.On<SessionEvent>(ev =>
{
    switch (ev)
    {
        case SessionIdleEvent:
            Console.WriteLine("Session is idle");
            break;
        case AssistantMessageEvent msg:
            Console.WriteLine($"Message: {msg.Data.Content}");
            break;
    }
});

// Later, to unsubscribe:
unsubscribe.Dispose();
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
// Subscribe to all events
var unsubscribe = session.on(event -> {
    System.out.println("Event: " + event.getType());
});

// Subscribe to a specific event type
session.on(AssistantMessageEvent.class, msg -> {
    System.out.println("Message: " + msg.getData().content());
});

session.on(SessionIdleEvent.class, idle -> {
    System.out.println("Session is idle");
});

// Later, to unsubscribe:
unsubscribe.close();
```

{% endcodetab %}
{% endcodetabs %}

## Step 4: add a custom tool

Now for the powerful part. Let's give Copilot the ability to call your code by defining a custom tool. We'll create a simple weather lookup tool.

{% codetabs %}
{% codetab typescript %}

Update `index.ts`:

```typescript
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
    model: "auto",
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

{% endcodetab %}
{% codetab python %}

Update `main.py`:

```python
import asyncio
import random
import sys
from copilot import CopilotClient
from copilot.session import PermissionHandler
from copilot.tools import define_tool
from copilot.generated.session_events import SessionEventType
from pydantic import BaseModel, Field

# Define the parameters for the tool using Pydantic
class GetWeatherParams(BaseModel):
    city: str = Field(description="The name of the city to get weather for")

# Define a tool that Copilot can call
@define_tool(description="Get the current weather for a city")
async def get_weather(params: GetWeatherParams) -> dict:
    city = params.city
    # In a real app, you'd call a weather API here
    conditions = ["sunny", "cloudy", "rainy", "partly cloudy"]
    temp = random.randint(50, 80)
    condition = random.choice(conditions)
    return {"city": city, "temperature": f"{temp}°F", "condition": condition}

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="auto", streaming=True, tools=[get_weather])

    def handle_event(event):
        if event.type == SessionEventType.ASSISTANT_MESSAGE_DELTA:
            sys.stdout.write(event.data.delta_content)
            sys.stdout.flush()
        if event.type == SessionEventType.SESSION_IDLE:
            print()

    session.on(handle_event)

    await session.send_and_wait("What's the weather like in Seattle and Tokyo?")

    await client.stop()

asyncio.run(main())
```

{% endcodetab %}
{% codetab go %}

Update `main.go`:

```golang
package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"os"

	copilot "github.com/github/copilot-sdk/go"
)

// Define the parameter type
type WeatherParams struct {
	City string `json:"city" jsonschema:"The city name"`
}

// Define the return type
type WeatherResult struct {
	City        string `json:"city"`
	Temperature string `json:"temperature"`
	Condition   string `json:"condition"`
}

func main() {
	ctx := context.Background()

	// Define a tool that Copilot can call
	getWeather := copilot.DefineTool(
		"get_weather",
		"Get the current weather for a city",
		func(params WeatherParams, inv copilot.ToolInvocation) (WeatherResult, error) {
			// In a real app, you'd call a weather API here
			conditions := []string{"sunny", "cloudy", "rainy", "partly cloudy"}
			temp := rand.Intn(30) + 50
			condition := conditions[rand.Intn(len(conditions))]
			return WeatherResult{
				City:        params.City,
				Temperature: fmt.Sprintf("%d°F", temp),
				Condition:   condition,
			}, nil
		},
	)

	client := copilot.NewClient(nil)
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, err := client.CreateSession(ctx, &copilot.SessionConfig{
		Model:     "auto",
		Streaming: copilot.Bool(true),
		Tools:     []copilot.Tool{getWeather},
	})
	if err != nil {
		log.Fatal(err)
	}

	session.On(func(event copilot.SessionEvent) {
		switch d := event.Data.(type) {
		case *copilot.AssistantMessageDeltaData:
			fmt.Print(d.DeltaContent)
		case *copilot.SessionIdleData:
			_ = d
			fmt.Println()
		}
	})

	_, err = session.SendAndWait(ctx, copilot.MessageOptions{
		Prompt: "What's the weather like in Seattle and Tokyo?",
	})
	if err != nil {
		log.Fatal(err)
	}
	os.Exit(0)
}
```

{% endcodetab %}
{% codetab rust %}

Update `src/main.rs`:

```rust
use std::io::{self, Write};
use std::sync::Arc;
use std::time::Duration;

use github_copilot_sdk::handler::ApproveAllHandler;
use github_copilot_sdk::tool::{define_tool, JsonSchema};
use github_copilot_sdk::{Client, ClientOptions, MessageOptions, SessionConfig, ToolResult};
use serde::Deserialize;

#[derive(Deserialize, JsonSchema)]
struct GetWeatherParams {
    city: String,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Define a tool that Copilot can call
    let tools = vec![define_tool(
        "get_weather",
        "Get the current weather for a city",
        |_inv, params: GetWeatherParams| async move {
            Ok(ToolResult::Text(format!(
                "{}: 62°F and sunny",
                params.city
            )))
        },
    )];

    let client = Client::start(ClientOptions::default()).await?;

    let mut config = SessionConfig::default();
    config.streaming = Some(true);
    let session = client
        .create_session(
            config
                .with_tools(tools)
                .with_permission_handler(Arc::new(ApproveAllHandler)),
        )
        .await?;

    let mut events = session.subscribe();
    tokio::spawn(async move {
        while let Ok(event) = events.recv().await {
            match event.event_type.as_str() {
                "assistant.message_delta" => {
                    if let Some(text) =
                        event.data.get("deltaContent").and_then(|value| value.as_str())
                    {
                        print!("{text}");
                        io::stdout().flush().ok();
                    }
                }
                "assistant.message" => println!(),
                _ => {}
            }
        }
    });

    session
        .send_and_wait(
            MessageOptions::new("What's the weather like in Seattle and Tokyo?")
                .with_wait_timeout(Duration::from_secs(120)),
        )
        .await?;

    session.disconnect().await?;
    client.stop().await?;
    Ok(())
}
```

{% endcodetab %}
{% codetab dotnet %}

Update `Program.cs`:

```csharp
using GitHub.Copilot;
using Microsoft.Extensions.AI;
using System.ComponentModel;

await using var client = new CopilotClient();

// Define a tool that Copilot can call
var getWeather = CopilotTool.DefineTool(
    ([Description("The city name")] string city) =>
    {
        // In a real app, you'd call a weather API here
        var conditions = new[] { "sunny", "cloudy", "rainy", "partly cloudy" };
        var temp = Random.Shared.Next(50, 80);
        var condition = conditions[Random.Shared.Next(conditions.Length)];
        return new { city, temperature = $"{temp}°F", condition };
    },
    factoryOptions: new AIFunctionFactoryOptions
    {
        Name = "get_weather",
        Description = "Get the current weather for a city",
    }
);

await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "auto",
    OnPermissionRequest = PermissionHandler.ApproveAll,
    Streaming = true,
    Tools = [getWeather],
});

session.On<SessionEvent>(ev =>
{
    if (ev is AssistantMessageDeltaEvent deltaEvent)
    {
        Console.Write(deltaEvent.Data.DeltaContent);
    }
    if (ev is SessionIdleEvent)
    {
        Console.WriteLine();
    }
});

await session.SendAndWaitAsync(new MessageOptions
{
    Prompt = "What's the weather like in Seattle and Tokyo?",
});
```

{% endcodetab %}
{% codetab java %}

Update `HelloCopilot.java`:

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.CompletableFuture;

public class HelloCopilot {
    public static void main(String[] args) throws Exception {
        var random = new Random();
        var conditions = List.of("sunny", "cloudy", "rainy", "partly cloudy");

        // Define a tool that Copilot can call
        var getWeather = ToolDefinition.create(
            "get_weather",
            "Get the current weather for a city",
            Map.of(
                "type", "object",
                "properties", Map.of(
                    "city", Map.of("type", "string", "description", "The city name")
                ),
                "required", List.of("city")
            ),
            invocation -> {
                var city = (String) invocation.getArguments().get("city");
                var temp = random.nextInt(30) + 50;
                var condition = conditions.get(random.nextInt(conditions.size()));
                return CompletableFuture.completedFuture(Map.of(
                    "city", city,
                    "temperature", temp + "°F",
                    "condition", condition
                ));
            }
        );

        try (var client = new CopilotClient()) {
            client.start().get();

            var session = client.createSession(
                new SessionConfig()
                    .setModel("auto")
                    .setStreaming(true)
                    .setTools(List.of(getWeather))
                    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
            ).get();

            session.on(AssistantMessageDeltaEvent.class, delta -> {
                System.out.print(delta.getData().deltaContent());
            });
            session.on(SessionIdleEvent.class, idle -> {
                System.out.println();
            });

            session.sendAndWait(
                new MessageOptions().setPrompt("What's the weather like in Seattle and Tokyo?")
            ).get();

            client.stop().get();
        }
    }
}
```

{% endcodetab %}
{% endcodetabs %}

Run it and you'll see Copilot call your tool to get weather data, then respond with the results!

## Step 5: build an interactive assistant

Let's put it all together into a useful interactive assistant:

{% codetabs %}
{% codetab typescript %}

```typescript
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
    model: "auto",
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

console.log("🌤️  Weather Assistant (type 'exit' to quit)");
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

```bash
npx tsx weather-assistant.ts
```

{% endcodetab %}
{% codetab python %}

Create `weather_assistant.py`:

```python
import asyncio
import random
import sys
from copilot import CopilotClient
from copilot.session import PermissionHandler
from copilot.tools import define_tool
from copilot.generated.session_events import SessionEventType
from pydantic import BaseModel, Field

class GetWeatherParams(BaseModel):
    city: str = Field(description="The name of the city to get weather for")

@define_tool(description="Get the current weather for a city")
async def get_weather(params: GetWeatherParams) -> dict:
    city = params.city
    conditions = ["sunny", "cloudy", "rainy", "partly cloudy"]
    temp = random.randint(50, 80)
    condition = random.choice(conditions)
    return {"city": city, "temperature": f"{temp}°F", "condition": condition}

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="auto", streaming=True, tools=[get_weather])

    def handle_event(event):
        if event.type == SessionEventType.ASSISTANT_MESSAGE_DELTA:
            sys.stdout.write(event.data.delta_content)
            sys.stdout.flush()

    session.on(handle_event)

    print("🌤️  Weather Assistant (type 'exit' to quit)")
    print("   Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'\n")

    while True:
        try:
            user_input = input("You: ")
        except EOFError:
            break

        if user_input.lower() == "exit":
            break

        sys.stdout.write("Assistant: ")
        await session.send_and_wait(user_input)
        print("\n")

    await client.stop()

asyncio.run(main())
```

Run with:

```bash
python weather_assistant.py
```

{% endcodetab %}
{% codetab go %}

Create `weather-assistant.go`:

```golang
package main

import (
	"bufio"
	"context"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strings"

	copilot "github.com/github/copilot-sdk/go"
)

type WeatherParams struct {
	City string `json:"city" jsonschema:"The city name"`
}

type WeatherResult struct {
	City        string `json:"city"`
	Temperature string `json:"temperature"`
	Condition   string `json:"condition"`
}

func main() {
	ctx := context.Background()

	getWeather := copilot.DefineTool(
		"get_weather",
		"Get the current weather for a city",
		func(params WeatherParams, inv copilot.ToolInvocation) (WeatherResult, error) {
			conditions := []string{"sunny", "cloudy", "rainy", "partly cloudy"}
			temp := rand.Intn(30) + 50
			condition := conditions[rand.Intn(len(conditions))]
			return WeatherResult{
				City:        params.City,
				Temperature: fmt.Sprintf("%d°F", temp),
				Condition:   condition,
			}, nil
		},
	)

	client := copilot.NewClient(nil)
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, err := client.CreateSession(ctx, &copilot.SessionConfig{
		Model:     "auto",
		Streaming: copilot.Bool(true),
		Tools:     []copilot.Tool{getWeather},
	})
	if err != nil {
		log.Fatal(err)
	}

	session.On(func(event copilot.SessionEvent) {
		switch d := event.Data.(type) {
		case *copilot.AssistantMessageDeltaData:
			fmt.Print(d.DeltaContent)
		case *copilot.SessionIdleData:
			_ = d
			fmt.Println()
		}
	})

	fmt.Println("🌤️  Weather Assistant (type 'exit' to quit)")
	fmt.Println("   Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'\n")

	scanner := bufio.NewScanner(os.Stdin)
	for {
		fmt.Print("You: ")
		if !scanner.Scan() {
			break
		}
		input := scanner.Text()
		if strings.ToLower(input) == "exit" {
			break
		}

		fmt.Print("Assistant: ")
		_, err = session.SendAndWait(ctx, copilot.MessageOptions{Prompt: input})
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error: %v\n", err)
			break
		}
		fmt.Println()
	}
	if err := scanner.Err(); err != nil {
		fmt.Fprintf(os.Stderr, "Input error: %v\n", err)
	}
}
```

Run with:

```bash
go run weather-assistant.go
```

{% endcodetab %}
{% codetab rust %}

Create `src/main.rs`:

```rust
use std::io::{self, BufRead, Write};
use std::sync::Arc;
use std::time::Duration;

use github_copilot_sdk::handler::ApproveAllHandler;
use github_copilot_sdk::tool::{define_tool, JsonSchema};
use github_copilot_sdk::{Client, ClientOptions, MessageOptions, SessionConfig, ToolResult};
use serde::Deserialize;

#[derive(Deserialize, JsonSchema)]
struct GetWeatherParams {
    city: String,
}

fn read_line() -> Option<String> {
    let stdin = io::stdin();
    let mut line = String::new();
    stdin.lock().read_line(&mut line).ok()?;
    if line.is_empty() {
        return None;
    }
    Some(line.trim_end_matches(&['\n', '\r'][..]).to_string())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let tools = vec![define_tool(
        "get_weather",
        "Get the current weather for a city",
        |_inv, params: GetWeatherParams| async move {
            Ok(ToolResult::Text(format!(
                "{}: 62°F and sunny",
                params.city
            )))
        },
    )];

    let client = Client::start(ClientOptions::default()).await?;

    let mut config = SessionConfig::default();
    config.streaming = Some(true);
    let session = client
        .create_session(
            config
                .with_tools(tools)
                .with_permission_handler(Arc::new(ApproveAllHandler)),
        )
        .await?;

    let mut events = session.subscribe();
    tokio::spawn(async move {
        while let Ok(event) = events.recv().await {
            match event.event_type.as_str() {
                "assistant.message_delta" => {
                    if let Some(text) =
                        event.data.get("deltaContent").and_then(|value| value.as_str())
                    {
                        print!("{text}");
                        io::stdout().flush().ok();
                    }
                }
                "assistant.message" => println!(),
                _ => {}
            }
        }
    });

    println!("Weather Assistant (type 'exit' to quit)");
    println!("Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'\n");

    loop {
        print!("You: ");
        io::stdout().flush().ok();

        let Some(input) = read_line() else { break };
        if input.eq_ignore_ascii_case("exit") {
            break;
        }

        print!("Assistant: ");
        io::stdout().flush().ok();
        session
            .send_and_wait(MessageOptions::new(input).with_wait_timeout(Duration::from_secs(120)))
            .await?;
        println!();
    }

    session.disconnect().await?;
    client.stop().await?;
    Ok(())
}
```

Run with:

```bash
cargo run
```

{% endcodetab %}
{% codetab dotnet %}

Create a new console project and update `Program.cs`:

```csharp
using GitHub.Copilot;
using Microsoft.Extensions.AI;
using System.ComponentModel;

// Define the weather tool
var getWeather = CopilotTool.DefineTool(
    ([Description("The city name")] string city) =>
    {
        var conditions = new[] { "sunny", "cloudy", "rainy", "partly cloudy" };
        var temp = Random.Shared.Next(50, 80);
        var condition = conditions[Random.Shared.Next(conditions.Length)];
        return new { city, temperature = $"{temp}°F", condition };
    },
    factoryOptions: new AIFunctionFactoryOptions
    {
        Name = "get_weather",
        Description = "Get the current weather for a city",
    });

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "auto",
    OnPermissionRequest = PermissionHandler.ApproveAll,
    Streaming = true,
    Tools = [getWeather]
});

// Listen for response chunks
session.On<SessionEvent>(ev =>
{
    if (ev is AssistantMessageDeltaEvent deltaEvent)
    {
        Console.Write(deltaEvent.Data.DeltaContent);
    }
    if (ev is SessionIdleEvent)
    {
        Console.WriteLine();
    }
});

Console.WriteLine("🌤️  Weather Assistant (type 'exit' to quit)");
Console.WriteLine("   Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'\n");

while (true)
{
    Console.Write("You: ");
    var input = Console.ReadLine();

    if (string.IsNullOrEmpty(input) || input.Equals("exit", StringComparison.OrdinalIgnoreCase))
    {
        break;
    }

    Console.Write("Assistant: ");
    await session.SendAndWaitAsync(new MessageOptions { Prompt = input });
    Console.WriteLine("\n");
}
```

Run with:

```bash
dotnet run
```

{% endcodetab %}
{% codetab java %}

Create `WeatherAssistant.java`:

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.CompletableFuture;

public class WeatherAssistant {
    public static void main(String[] args) throws Exception {
        var random = new Random();
        var conditions = List.of("sunny", "cloudy", "rainy", "partly cloudy");

        var getWeather = ToolDefinition.create(
            "get_weather",
            "Get the current weather for a city",
            Map.of(
                "type", "object",
                "properties", Map.of(
                    "city", Map.of("type", "string", "description", "The city name")
                ),
                "required", List.of("city")
            ),
            invocation -> {
                var city = (String) invocation.getArguments().get("city");
                var temp = random.nextInt(30) + 50;
                var condition = conditions.get(random.nextInt(conditions.size()));
                return CompletableFuture.completedFuture(Map.of(
                    "city", city,
                    "temperature", temp + "°F",
                    "condition", condition
                ));
            }
        );

        try (var client = new CopilotClient()) {
            client.start().get();

            var session = client.createSession(
                new SessionConfig()
                    .setModel("auto")
                    .setStreaming(true)
                    .setOnPermissionRequest(request ->
                        CompletableFuture.completedFuture(PermissionDecision.allow())
                    )
                    .setTools(List.of(getWeather))
            ).get();

            session.on(AssistantMessageDeltaEvent.class, delta -> {
                System.out.print(delta.getData().deltaContent());
            });
            session.on(SessionIdleEvent.class, idle -> {
                System.out.println();
            });

            System.out.println("🌤️  Weather Assistant (type 'exit' to quit)");
            System.out.println("   Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'\n");

            var scanner = new Scanner(System.in);
            while (true) {
                System.out.print("You: ");
                if (!scanner.hasNextLine()) break;
                var input = scanner.nextLine();
                if (input.equalsIgnoreCase("exit")) break;

                System.out.print("Assistant: ");
                session.sendAndWait(
                    new MessageOptions().setPrompt(input)
                ).get();
                System.out.println("\n");
            }

            client.stop().get();
        }
    }
}
```

Run with:

```bash
javac -cp copilot-sdk.jar WeatherAssistant.java && java -cp .:copilot-sdk.jar WeatherAssistant
```

{% endcodetab %}
{% endcodetabs %}

**Example session:**

```text
🌤️  Weather Assistant (type 'exit' to quit)
   Try: 'What's the weather in Paris?' or 'Compare weather in NYC and LA'

You: What's the weather in Seattle?
Assistant: Let me check the weather for Seattle...
It's currently 62°F and cloudy in Seattle.

You: How about Tokyo and London?
Assistant: I'll check both cities for you:
- Tokyo: 75°F and sunny
- London: 58°F and rainy

You: exit
```

You've built an assistant with a custom tool that Copilot can call!

## How tools work

When you define a tool, you're telling Copilot:
1. **What the tool does** (description)
1. **What parameters it needs** (schema)
1. **What code to run** (handler)

Copilot decides when to call your tool based on the user's question. When it does:
1. Copilot sends a tool call request with the parameters
1. The SDK runs your handler function
1. The result is sent back to Copilot
1. Copilot incorporates the result into its response

## What's next?

Now that you've got the basics, here are more powerful features to explore:

### Connect to MCP servers

MCP (Model Context Protocol) servers provide pre-built tools. Connect to GitHub's MCP server to give Copilot access to repositories, issues, and pull requests:

```typescript
const session = await client.createSession({
    mcpServers: {
        github: {
            type: "http",
            url: "https://api.githubcopilot.com/mcp/",
        },
    },
});
```

📖 **[AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp)** - Learn about local vs remote servers, all configuration options, and troubleshooting.

### Create custom agents

Define specialized AI personas for specific tasks:

```typescript
const session = await client.createSession({
    customAgents: [{
        name: "pr-reviewer",
        displayName: "PR Reviewer",
        description: "Reviews pull requests for best practices",
        prompt: "You are an expert code reviewer. Focus on security, performance, and maintainability.",
    }],
});
```

> [!TIP]
> You can also set `agent: "pr-reviewer"` in the session config to pre-select this agent from the start. See the [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/custom-agents#selecting-an-agent-at-session-creation) for details.

### Customize the system message

Control the AI's behavior and personality by appending instructions:

```typescript
const session = await client.createSession({
    systemMessage: {
        content: "You are a helpful assistant for our engineering team. Always be concise.",
    },
});
```

For more fine-grained control, use `mode: "customize"` to override individual sections of the system prompt while preserving the rest:

```typescript
const session = await client.createSession({
    systemMessage: {
        mode: "customize",
        sections: {
            tone: { action: "replace", content: "Respond in a warm, professional tone. Be thorough in explanations." },
            code_change_rules: { action: "remove" },
            guidelines: { action: "append", content: "\n* Always cite data sources" },
        },
        content: "Focus on financial analysis and reporting.",
    },
});
```

Available section IDs: `identity`, `tone`, `tool_efficiency`, `environment_context`, `code_change_rules`, `guidelines`, `safety`, `tool_instructions`, `custom_instructions`, `runtime_instructions`, `last_instructions`.

Each override supports four actions: `replace`, `remove`, `append`, and `prepend`. Unknown section IDs are handled gracefully—content is appended to additional instructions and a warning is emitted; `remove` on unknown sections is silently ignored.

See the language-specific SDK READMEs for examples in [TypeScript](https://github.com/github/copilot-sdk/tree/main/nodejs/README.md?utm_source=docs-copilot-sdk-typescript-readme&utm_medium=docs&utm_campaign=msbuild-2026), [Python](https://github.com/github/copilot-sdk/tree/main/python/README.md?utm_source=docs-copilot-sdk-python-readme&utm_medium=docs&utm_campaign=msbuild-2026), [Go](https://github.com/github/copilot-sdk/tree/main/go/README.md?utm_source=docs-copilot-sdk-go-readme&utm_medium=docs&utm_campaign=msbuild-2026), [Rust](https://github.com/github/copilot-sdk/tree/main/rust/README.md?utm_source=docs-copilot-sdk-rust-readme&utm_medium=docs&utm_campaign=msbuild-2026), [Java](https://github.com/github/copilot-sdk/tree/main/java/README.md?utm_source=docs-copilot-sdk-java-readme&utm_medium=docs&utm_campaign=msbuild-2026), and [C#](https://github.com/github/copilot-sdk/tree/main/dotnet/README.md?utm_source=docs-copilot-sdk-csharp-readme&utm_medium=docs&utm_campaign=msbuild-2026).

## Connecting to an external CLI server

By default, the SDK automatically manages the Copilot CLI process lifecycle, starting and stopping the CLI as needed. However, you can also run the CLI in server mode separately and have the SDK connect to it. This can be useful for:

* **Debugging**: Keep the CLI running between SDK restarts to inspect logs
* **Resource sharing**: Multiple SDK clients can connect to the same CLI server
* **Development**: Run the CLI with custom settings or in a different environment

### Running the CLI in server mode

Start the CLI in server mode using the `--headless` flag and optionally specify a port:

```bash
copilot --headless --port 4321
```

If you don't specify a port, the CLI will choose a random available port.

By default the headless server only accepts connections from loopback (`127.0.0.1`), so the SDK must run on the same machine. To accept connections from other hosts (for example when running the CLI in a container or on a separate server), bind to a non-loopback address with `--host`:

```bash
# Listen on all interfaces
copilot --headless --host 0.0.0.0 --port 4321
```

> [!WARNING]
> Exposing the headless server on a non-loopback address makes it reachable by anyone who can route to that address. Pair it with network controls (firewall, private network, reverse proxy) and authentication appropriate for your environment.

### Connecting the SDK to the external server

Once the CLI is running in server mode, configure your SDK client to connect to it using the "cli url" option:

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient, approveAll } from "@github/copilot-sdk";

const client = new CopilotClient({
    cliUrl: "localhost:4321"
});

// Use the client normally
const session = await client.createSession({ onPermissionRequest: approveAll });
// ...
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient, RuntimeConnection
from copilot.session import PermissionHandler

client = CopilotClient(connection=RuntimeConnection.for_uri("localhost:4321"))
await client.start()

# Use the client normally
session = await client.create_session(on_permission_request=PermissionHandler.approve_all)
# ...
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	"log"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	ctx := context.Background()

    client := copilot.NewClient(&copilot.ClientOptions{
        Connection: copilot.URIConnection{URL: "localhost:4321"},
    })

	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	// Use the client normally
	_, _ = client.CreateSession(ctx, &copilot.SessionConfig{
		OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
	})
}
```

```golang
import copilot "github.com/github/copilot-sdk/go"

client := copilot.NewClient(&copilot.ClientOptions{
    Connection: copilot.URIConnection{URL: "localhost:4321"},
})

if err := client.Start(ctx); err != nil {
    log.Fatal(err)
}
defer client.Stop()

// Use the client normally
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
    OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
})
// ...
```

{% endcodetab %}
{% codetab rust %}

```rust
use std::sync::Arc;

use github_copilot_sdk::handler::ApproveAllHandler;
use github_copilot_sdk::{Client, ClientOptions, SessionConfig, Transport};

let mut options = ClientOptions::default();
options.transport = Transport::External {
    host: "localhost".to_string(),
    port: 4321,
};
let client = Client::start(options).await?;

// Use the client normally
let session = client
    .create_session(SessionConfig::default().with_permission_handler(Arc::new(ApproveAllHandler)))
    .await?;
// ...
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

using var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForUri("localhost:4321"),
});

// Use the client normally
await using var session = await client.CreateSessionAsync(new()
{
    OnPermissionRequest = PermissionHandler.ApproveAll
});
// ...
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(
    new CopilotClientOptions().setCliUrl("localhost:4321")
);
client.start().get();

// Use the client normally
var session = client.createSession(
    new SessionConfig().setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();
// ...
```

{% endcodetab %}
{% endcodetabs %}

**Note:** When `cli_url` / `cliUrl` / Go's `URIConnection` is provided, or Rust uses `Transport::External`, the SDK will not spawn or manage a CLI process - it will only connect to the existing server at the specified URL.

## Telemetry and observability

The Copilot SDK supports [OpenTelemetry](https://opentelemetry.io/) for distributed tracing. Provide a `telemetry` configuration to the client to enable trace export from the CLI process and automatic [W3C Trace Context](https://www.w3.org/TR/trace-context/) propagation between the SDK and CLI.

### Enabling telemetry

Pass a `telemetry` (or `Telemetry`) config when creating the client. This is the opt-in—no separate "enabled" flag is needed.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
  telemetry: {
    otlpEndpoint: "http://localhost:4318",
  },
});
```

Optional peer dependency: `@opentelemetry/api`

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from copilot import CopilotClient, CopilotClientOptions

client = CopilotClient(CopilotClientOptions(
    telemetry={
        "otlp_endpoint": "http://localhost:4318",
    },
))
```

Install with telemetry extras: `pip install copilot-sdk[telemetry]` (provides `opentelemetry-api`)

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
client, err := copilot.NewClient(copilot.ClientOptions{
    Telemetry: &copilot.TelemetryConfig{
        OTLPEndpoint: "http://localhost:4318",
    },
})
```

Dependency: `go.opentelemetry.io/otel`

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
use github_copilot_sdk::{Client, ClientOptions, OtelExporterType, TelemetryConfig};

let mut options = ClientOptions::default();
options.telemetry = Some(
    TelemetryConfig::new()
        .with_exporter_type(OtelExporterType::OtlpHttp)
        .with_otlp_endpoint("http://localhost:4318"),
);
let client = Client::start(options).await?;
```

No extra dependencies—the SDK injects telemetry environment variables for the spawned CLI process.

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
var client = new CopilotClient(new CopilotClientOptions
{
    Telemetry = new TelemetryConfig
    {
        OtlpEndpoint = "http://localhost:4318",
    },
});
```

No extra dependencies—uses built-in `System.Diagnostics.Activity`.

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(new CopilotClientOptions()
    .setTelemetry(new TelemetryConfig()
        .setOtlpEndpoint("http://localhost:4318")));
```

Dependency: `io.opentelemetry:opentelemetry-api`

{% endcodetab %}
{% endcodetabs %}

### TelemetryConfig options

| Option | Node.js | Python | Go | Rust | Java | .NET | Description |
|---|---|---|---|---|---|---|---|
| OTLP endpoint | `otlpEndpoint` | `otlp_endpoint` | `OTLPEndpoint` | `otlp_endpoint` | `otlpEndpoint` | `OtlpEndpoint` | OTLP HTTP endpoint URL |
| File path | `filePath` | `file_path` | `FilePath` | `file_path` | `filePath` | `FilePath` | File path for JSON-lines trace output |
| Exporter type | `exporterType` | `exporter_type` | `ExporterType` | `exporter_type` | `exporterType` | `ExporterType` | `"otlp-http"` or `"file"` |
| Source name | `sourceName` | `source_name` | `SourceName` | `source_name` | `sourceName` | `SourceName` | Instrumentation scope name |
| Capture content | `captureContent` | `capture_content` | `CaptureContent` | `capture_content` | `captureContent` | `CaptureContent` | Whether to capture message content |

### File export

To write traces to a local file instead of an OTLP endpoint:

<!-- docs-validate: skip -->

```typescript
const client = new CopilotClient({
  telemetry: {
    filePath: "./traces.jsonl",
    exporterType: "file",
  },
});
```

### Trace context propagation

Trace context is propagated automatically—no manual instrumentation is needed:

* **SDK → CLI**: `traceparent` and `tracestate` headers from the current span/activity are included in `session.create`, `session.resume`, and `session.send` RPC calls.
* **CLI → SDK**: When the CLI invokes tool handlers, the trace context from the CLI's span is propagated so your tool code runs under the correct parent span.

📖 **[AUTOTITLE](/copilot/how-tos/copilot-sdk/observability/opentelemetry)**—TelemetryConfig options, trace context propagation, and per-language dependencies.

## Learn more

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/authenticate) - GitHub OAuth, environment variables, and BYOK
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) - Use your own API keys from Azure AI Foundry, OpenAI, etc.
* [Node.js SDK Reference](https://github.com/github/copilot-sdk/tree/main/nodejs/README.md?utm_source=docs-copilot-sdk-nodejs-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [Python SDK Reference](https://github.com/github/copilot-sdk/tree/main/python/README.md?utm_source=docs-copilot-sdk-python-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [Go SDK Reference](https://github.com/github/copilot-sdk/tree/main/go/README.md?utm_source=docs-copilot-sdk-go-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [Rust SDK Reference](https://github.com/github/copilot-sdk/tree/main/rust/README.md?utm_source=docs-copilot-sdk-rust-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [.NET SDK Reference](https://github.com/github/copilot-sdk/tree/main/dotnet/README.md?utm_source=docs-copilot-sdk-dotnet-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [Java SDK Reference](https://github.com/github/copilot-sdk/tree/main/java/README.md?utm_source=docs-copilot-sdk-java-reference&utm_medium=docs&utm_campaign=msbuild-2026)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp) - Integrate external tools via Model Context Protocol
* [GitHub MCP Server Documentation](https://github.com/github/github-mcp-server)
* [MCP Servers Directory](https://github.com/modelcontextprotocol/servers) - Explore more MCP servers
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/observability/opentelemetry) - TelemetryConfig, trace context propagation, and per-language dependencies

**You did it!** You've learned the core concepts of the GitHub Copilot SDK:
* ✅ Creating a client and session
* ✅ Sending messages and receiving responses
* ✅ Streaming for real-time output
* ✅ Defining custom tools that Copilot can call

Now go build something amazing! 🚀
