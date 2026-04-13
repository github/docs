---
title: Using a bundled CLI with Copilot SDK
shortTitle: Bundled CLI
intro: Package {% data variables.copilot.copilot_cli_short %} alongside your application so that users do not need to install or configure anything separately.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

Ship {% data variables.copilot.copilot_cli_short %} as part of your application so your users can get started with no additional setup.

**Best for:** Desktop apps, standalone tools, Electron apps, and distributable CLI utilities.

## How it works

Instead of relying on a globally installed CLI, you include the CLI binary in your application bundle. The SDK points to your bundled copy via the `cliPath` option. Key characteristics are:

* The CLI binary ships with your app—no separate install is needed.
* You control the exact CLI version your app uses.
* Users authenticate through your app, environment variables, or BYOK.
* Sessions are managed per user on their machine.

## Setup

### Step 1: Include the CLI in your project

The CLI is distributed as part of the `@github/copilot` npm package.

```shell
npm install @github/copilot
```

### Step 2: Point the SDK to your bundled CLI

#### Node.js / TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";
import path from "path";

const client = new CopilotClient({
    // Point to the CLI binary in your app bundle
    cliPath: path.join(__dirname, "vendor", "copilot"),
});

const session = await client.createSession({ model: "gpt-4.1" });
const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

#### Python

```python
from copilot import CopilotClient, PermissionHandler
from pathlib import Path

client = CopilotClient({
    "cli_path": str(Path(__file__).parent / "vendor" / "copilot"),
})
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-4.1")
response = await session.send_and_wait({"prompt": "Hello!"})
print(response.data.content)

await client.stop()
```

#### Go

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    CLIPath: "./vendor/copilot",
})
if err := client.Start(ctx); err != nil {
    log.Fatal(err)
}
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{Model: "gpt-4.1"})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
fmt.Println(*response.Data.Content)
```

#### .NET

```csharp
var client = new CopilotClient(new CopilotClientOptions
{
    CliPath = Path.Combine(AppContext.BaseDirectory, "vendor", "copilot"),
});

await using var session = await client.CreateSessionAsync(
    new SessionConfig { Model = "gpt-4.1" });

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
Console.WriteLine(response?.Data.Content);
```

## Authentication strategies

When bundling the CLI, you need to decide how your users will authenticate. The following diagram illustrates common patterns. 

![Diagram showing authentication strategy options for a bundled CLI deployment.](/assets/images/help/copilot/copilot-sdk/bundled-cli-authentication-strategies.png)

### Option A: User's signed-in credentials (simplest)

The user signs in to the CLI once, and your bundled app uses those credentials. No extra code needed—this is the default behavior.

```typescript
const client = new CopilotClient({
    cliPath: path.join(__dirname, "vendor", "copilot"),
    // Default: uses signed-in user credentials
});
```

### Option B: Token via environment variable

Set a token programmatically or instruct users to set one before starting your app:

```typescript
const client = new CopilotClient({
    cliPath: path.join(__dirname, "vendor", "copilot"),
    env: {
        COPILOT_GITHUB_TOKEN: getUserToken(),
    },
});
```

Replace `getUserToken()` with the logic in your app that retrieves the user's {% data variables.product.github %} OAuth token.

### Option C: BYOK (no {% data variables.product.github %} authentication needed)

If you manage your own model provider keys, users don't need {% data variables.product.github %} accounts:

```typescript
const client = new CopilotClient({
    cliPath: path.join(__dirname, "vendor", "copilot"),
});

const session = await client.createSession({
    model: "gpt-4.1",
    provider: {
        type: "openai",
        baseUrl: "https://api.openai.com/v1",
        apiKey: process.env.OPENAI_API_KEY,
    },
});
```

## Session management

Bundled apps typically want named sessions so users can resume conversations:

```typescript
const client = new CopilotClient({
    cliPath: path.join(__dirname, "vendor", "copilot"),
});

// Create a session tied to the user's project
const sessionId = `project-${projectName}`;
const session = await client.createSession({
    sessionId,
    model: "gpt-4.1",
});

// Resume the session in a later run
const resumed = await client.resumeSession(sessionId);
```

Session state is stored at `~/.copilot/session-state/SESSION-ID/`, where `SESSION-ID` is the session ID you provided.

## Distribution patterns

### Desktop app (Electron, Tauri)

Include the CLI binary in your app's resources directory:

```typescript
import { app } from "electron";
import path from "path";

const cliPath = path.join(
    app.isPackaged ? process.resourcesPath : __dirname,
    "copilot"
);

const client = new CopilotClient({ cliPath });
```

### CLI tool

For distributable CLI tools, resolve the path relative to your binary:

```typescript
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cliPath = path.join(__dirname, "..", "vendor", "copilot");

const client = new CopilotClient({ cliPath });
```

## Platform-specific binaries

When distributing for multiple platforms, include the correct binary for each target:

```text
my-app/
├── vendor/
│   ├── copilot-darwin-arm64    # macOS Apple Silicon
│   ├── copilot-darwin-x64      # macOS Intel
│   ├── copilot-linux-x64       # Linux x64
│   └── copilot-win-x64.exe     # Windows x64
└── src/
    └── index.ts
```

```typescript
import os from "os";

function getCLIPath(): string {
    const platform = process.platform;   // "darwin", "linux", "win32"
    const arch = os.arch();              // "arm64", "x64"
    const ext = platform === "win32" ? ".exe" : "";
    const name = `copilot-${platform}-${arch}${ext}`;
    return path.join(__dirname, "vendor", name);
}

const client = new CopilotClient({
    cliPath: getCLIPath(),
});
```

## Limitations

| Limitation | Details |
|---|---|
| **Bundle size** | The CLI binary adds to your app's distribution size. |
| **Updates** | You manage CLI version updates in your release cycle. |
| **Platform builds** | Separate binaries are needed for each OS/architecture. |
| **Single user** | Each bundled CLI instance serves one user. |

## Next steps

* For users signing in with {% data variables.product.github %} accounts, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth).
* To run on a server instead of user machines, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services).
* For installation and your first message, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
