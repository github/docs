---
title: Default setup (bundled CLI)
shortTitle: Bundled CLI
intro: >-
  The Node.js, Python, and .NET SDKs include the Copilot CLI as a
  dependency—your app ships with everything it needs, with no extra installation
  or configuration required.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/set-up-copilot-sdk/bundled-cli
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

**Best for:** Most applications—desktop apps, standalone tools, CLI utilities, prototypes, and more.

## How it works

When you install the SDK, the Copilot CLI binary is included automatically. The SDK starts it as a child process and communicates over stdio. There's nothing extra to configure.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-bundled-cli-diagram-0.png)

**Key characteristics:**
* CLI binary is included with the SDK—no separate install needed
* The SDK manages the CLI version to ensure compatibility
* Users authenticate through your app (or use env vars / BYOK)
* Sessions are managed per-user on their machine

## Quick start

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();

const session = await client.createSession({ model: "gpt-4.1" });
const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.session import PermissionHandler

client = CopilotClient()
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-4.1")
response = await session.send_and_wait("Hello!")
print(response.data.content)

await client.stop()
```

{% endcodetab %}
{% codetab go %}

> [!NOTE]
> The Go SDK does not bundle the CLI. You must install the CLI separately or set `Connection` to point to an existing binary. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/local-cli) for details.

```golang
package main

import (
	"context"
	"fmt"
	"log"
	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	ctx := context.Background()

	client := copilot.NewClient(nil)
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
	response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
	if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
		fmt.Println(d.Content)
	}
}
```

```golang
client := copilot.NewClient(nil)
if err := client.Start(ctx); err != nil {
    log.Fatal(err)
}
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
    fmt.Println(d.Content)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(
    new SessionConfig { Model = "gpt-4.1" });

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
Console.WriteLine(response?.Data.Content);
```

{% endcodetab %}
{% codetab java %}

> [!NOTE]
> The Java SDK does not bundle or embed the Copilot CLI. You must install the CLI separately and configure its path via `Connection` or the `COPILOT_CLI_PATH` environment variable.

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(new CopilotClientOptions()
    // Point to the CLI binary installed on the system
    .setCliPath("/path/to/vendor/copilot")
);
client.start().get();

var session = client.createSession(new SessionConfig()
    .setModel("gpt-4.1")
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();

var response = session.sendAndWait(new MessageOptions()
    .setPrompt("Hello!")).get();
System.out.println(response.getData().content());

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

## Authentication strategies

You need to decide how your users will authenticate. Here are the common patterns:

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-bundled-cli-diagram-1.png)

### Option A: user's signed-in credentials (simplest)

The user signs in to the CLI once, and your app uses those credentials. No extra code needed—this is the default behavior.

```typescript
const client = new CopilotClient();
// Default: uses signed-in user credentials
```

### Option B: token via environment variable

Ship your app with instructions to set a token, or set it programmatically:

```typescript
const client = new CopilotClient({
    env: {
        COPILOT_GITHUB_TOKEN: getUserToken(),  // Your app provides the token
    },
});
```

### Option C: BYOK (no GitHub auth needed)

If you manage your own model provider keys, users don't need GitHub accounts at all:

```typescript
const client = new CopilotClient();

const session = await client.createSession({
    model: "gpt-4.1",
    provider: {
        type: "openai",
        baseUrl: "https://api.openai.com/v1",
        apiKey: process.env.OPENAI_API_KEY,
    },
});
```

See the **[AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok)** for full details.

## Session management

Apps typically want named sessions so users can resume conversations:

```typescript
const client = new CopilotClient();

// Create a session tied to the user's project
const sessionId = `project-${projectName}`;
const session = await client.createSession({
    sessionId,
    model: "gpt-4.1",
});

// User closes app...
// Later, resume where they left off
const resumed = await client.resumeSession(sessionId);
```

Session state persists at `~/.copilot/session-state/{sessionId}/`.

## When to move on

| Need | Next Guide |
|------|-----------|
| Users signing in with GitHub accounts | [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/github-oauth) |
| Run on a server instead of user machines | [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services) |
| Use your own model keys | [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |

## Next steps

* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok)**: Use your own model provider keys
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/features/session-persistence)**: Advanced session management
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started)**: Build a complete app
