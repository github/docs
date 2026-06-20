---
title: Local CLI setup
shortTitle: Local CLI
intro: >-
  Use a specific CLI binary instead of the SDK's bundled CLI. This is an
  advanced option—you supply the CLI path explicitly, and you are responsible
  for ensuring version compatibility with the SDK.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/set-up-copilot-sdk/local-cli
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

**Use when:** You need to pin a specific CLI version, or work with the Go SDK (which does not bundle a CLI).

## How it works

By default, the Node.js, Python, and .NET SDKs include their own CLI dependency (see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/bundled-cli)). If you need to override this—for example, to use a system-installed CLI—you can use the `Connection` option.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-local-cli-diagram-0.png)

**Key characteristics:**
* You explicitly provide the CLI binary path
* You are responsible for CLI version compatibility with the SDK
* Authentication uses the signed-in user's credentials from the system keychain (or env vars)
* Communication happens over stdio

## Configuration

### Using a local CLI binary

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    cliPath: "/usr/local/bin/copilot",
});

const session = await client.createSession({ model: "gpt-4.1" });
const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.generated.session_events import AssistantMessageData
from copilot.session import PermissionHandler

client = CopilotClient({
    "cli_path": "/usr/local/bin/copilot",
})
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-4.1")
response = await session.send_and_wait("Hello!")
if response:
    match response.data:
        case AssistantMessageData() as data:
            print(data.content)

await client.stop()
```

{% endcodetab %}
{% codetab go %}

> [!NOTE]
> The Go SDK does not bundle a CLI, so you must always provide `Connection`.

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

	client := copilot.NewClient(&copilot.ClientOptions{
		Connection: copilot.StdioConnection{Path: "/usr/local/bin/copilot"},
	})
	if err := client.Start(ctx); err != nil {
		log.Fatal(err)
	}
	defer client.Stop()

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
	response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
	if response != nil {
		if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
			fmt.Println(d.Content)
		}
	}
}
```

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    Connection: copilot.StdioConnection{Path: "/usr/local/bin/copilot"},
})
if err := client.Start(ctx); err != nil {
    log.Fatal(err)
}
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
if response != nil {
    if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
        fmt.Println(d.Content)
    }
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForStdio(path: "/usr/local/bin/copilot"),
});

await using var session = await client.CreateSessionAsync(
    new SessionConfig { Model = "gpt-4.1" });

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
Console.WriteLine(response?.Data.Content);
```

{% endcodetab %}
{% endcodetabs %}

## Additional options

```typescript
const client = new CopilotClient({
    cliPath: "/usr/local/bin/copilot",

    // Set log level for debugging
    logLevel: "debug",

    // Pass extra CLI arguments
    cliArgs: ["--log-dir=/tmp/copilot-logs"],

    // Set working directory
    cwd: "/path/to/project",
});
```

## Using environment variables

Instead of the keychain, you can authenticate via environment variables. This is useful for CI or when you don't want interactive login.

```bash
# Set one of these (in priority order):
export COPILOT_GITHUB_TOKEN="gho_xxxx"   # Recommended
export GH_TOKEN="gho_xxxx"               # GitHub CLI compatible
export GITHUB_TOKEN="gho_xxxx"           # GitHub Actions compatible
```

The SDK picks these up automatically—no code changes needed.

## Managing sessions

Sessions default to ephemeral. To create resumable sessions, provide your own session ID:

```typescript
// Create a named session
const session = await client.createSession({
    sessionId: "my-project-analysis",
    model: "gpt-4.1",
});

// Later, resume it
const resumed = await client.resumeSession("my-project-analysis");
```

Session state is stored locally at `~/.copilot/session-state/{sessionId}/`.

## Limitations

| Limitation | Details |
|------------|---------|
| **Version compatibility** | You must ensure your CLI version is compatible with the SDK |
| **Single user** | Credentials are tied to whoever signed in to the CLI |
| **Local only** | The CLI runs on the same machine as your app |
| **No multi-tenant** | Can't serve multiple users from one CLI instance |

## Next steps

* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/bundled-cli)**: Use the SDK's built-in CLI (recommended for most use cases)
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started)**: Build a complete interactive app
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/authenticate)**: All auth methods in detail
