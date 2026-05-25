---
title: Using a local CLI with Copilot SDK
shortTitle: Local CLI
intro: Use {% data variables.copilot.copilot_sdk %} with the CLI already signed in on your machine—the simplest configuration, with no auth code or infrastructure required.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

Connecting {% data variables.copilot.copilot_sdk %} to your locally signed-in CLI is the fastest way to get started. 

**Best for:** Personal projects, prototyping, local development, and learning the SDK.

## How it works

When you install {% data variables.copilot.copilot_cli_short %} and sign in, your credentials are stored in the system keychain. The SDK automatically starts the CLI as a child process and uses those stored credentials. Key characteristics:

* The CLI is spawned automatically by the SDK—no setup needed.
* Authentication uses the signed-in user's credentials from the system keychain.
* Communication happens over stdio (stdin/stdout)—no network ports are opened.
* Sessions are local to your machine.

## Quick start

The default configuration requires no options at all.

### Node.js / TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({ model: "gpt-4.1" });

const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

### Python

```python
from copilot import CopilotClient, PermissionHandler

client = CopilotClient()
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-4.1")
response = await session.send_and_wait({"prompt": "Hello!"})
print(response.data.content)

await client.stop()
```

### Go

```golang
client := copilot.NewClient(nil)
if err := client.Start(ctx); err != nil {
    log.Fatal(err)
}
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
fmt.Println(*response.Data.Content)
```

### .NET

```csharp
await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(
    new SessionConfig { Model = "gpt-4.1" });

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
Console.WriteLine(response?.Data.Content);
```

The SDK handles everything: starting the CLI, authenticating, and managing the session.

## How does this work internally?

For more information on the order of interaction between components, see the sequence diagram in the `github/copilot-sdk`[repository](https://github.com/github/copilot-sdk/blob/main/docs/setup/local-cli.md#whats-happening-under-the-hood). 

## Configuration options

While defaults work for most cases, you can customize the local setup:

```typescript
const client = new CopilotClient({
    // Override CLI location (default: bundled with @github/copilot)
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

Instead of the keychain, you can authenticate via environment variables. This is useful for CI or when you don't want interactive sign-in.

```shell
# Set one of these (in priority order):
export COPILOT_GITHUB_TOKEN="YOUR-GITHUB-TOKEN"   # Recommended
export GH_TOKEN="YOUR-GITHUB-TOKEN"               # GitHub CLI compatible
export GITHUB_TOKEN="YOUR-GITHUB-TOKEN"           # GitHub Actions compatible
```

Replace `YOUR-GITHUB-TOKEN` with a valid {% data variables.product.github %} {% data variables.product.pat_generic %} or OAuth token. The SDK picks these up automatically—no code changes are needed.

## Managing sessions

With the local CLI, sessions are ephemeral by default. To create resumable sessions, provide a session ID:

```typescript
// Create a named session
const session = await client.createSession({
    sessionId: "my-project-analysis",
    model: "gpt-4.1",
});

// Resume it in a later run
const resumed = await client.resumeSession("my-project-analysis");
```

Session state is stored locally at `~/.copilot/session-state/SESSION-ID/`, where `SESSION-ID` is the session ID you provided.

## Limitations

| Limitation | Details |
|---|---|
| **Single user** | Credentials are tied to whoever signed in to the CLI. |
| **Local only** | The CLI runs on the same machine as your app. |
| **No multi-tenant** | Cannot serve multiple users from one CLI instance. |
| **Requires CLI sign-in** | User must run `copilot` and authenticate first. |

## Next steps

* To ship your app to other users, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/bundled-cli).
* To support multiple users signing in with their own {% data variables.product.github %} accounts, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth).
* To run the SDK on a server, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services).
* For your first message and installation, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
