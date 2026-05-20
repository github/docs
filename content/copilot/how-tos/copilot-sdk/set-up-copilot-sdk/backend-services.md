---
title: Setting up Copilot SDK for backend services
shortTitle: Backend services
intro: Run {% data variables.copilot.copilot_sdk %} in server-side applications such as APIs, web backends, microservices, and background workers.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

The CLI runs as a headless server that your backend code connects to over the network.

**Best for:** Web app backends, API services, internal tools, CI/CD integrations, any server-side workload.

## How it works

Instead of the SDK spawning a CLI child process, you run the CLI independently in **headless server mode**. Your backend connects to it over TCP using the `cliUrl` option.  For detailed diagrams of the headless server architecture and how it compares to the default auto-managed CLI, see the `github/copilot-sdk` [repository](https://github.com/github/copilot-sdk/blob/main/docs/setup/backend-services.md#how-it-works).

Key characteristics:

* The CLI runs as a persistent server process, not spawned per request.
* The SDK connects over TCP—the CLI and app can run in different containers.
* Multiple SDK clients can share one CLI server.
* Works with any authentication method ({% data variables.product.github %} tokens, environment variables, BYOK).

## Step 1: Start the CLI in headless mode

Run the CLI as a background server.

```shell
# Start with a specific port
copilot --headless --port 4321

# Or let it pick a random port (prints the URL)
copilot --headless
# Output: Listening on http://localhost:52431
```

For production, run it as a system service or in a container:

```shell
# Docker
docker run -d --name copilot-cli \
    -p 4321:4321 \
    -e COPILOT_GITHUB_TOKEN="$TOKEN" \
    ghcr.io/github/copilot-cli:latest \
    --headless --port 4321
```

```shell
# systemd
[Service]
ExecStart=/usr/local/bin/copilot --headless --port 4321
Environment=COPILOT_GITHUB_TOKEN=YOUR-GITHUB-TOKEN
Restart=always
```

## Step 2: Connect the SDK

### Node.js / TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    cliUrl: "localhost:4321",
});

const session = await client.createSession({
    sessionId: `user-${userId}-${Date.now()}`,
    model: "gpt-4.1",
});

const response = await session.sendAndWait({ prompt: req.body.message });
res.json({ content: response?.data.content });
```

### Python

```python
from copilot import CopilotClient

client = CopilotClient({
    "cli_url": "localhost:4321",
})
await client.start()

session = await client.create_session({
    "session_id": f"user-{user_id}-{int(time.time())}",
    "model": "gpt-4.1",
})

response = await session.send_and_wait({"prompt": message})
```

### Go

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    CLIUrl: "localhost:4321",
})
client.Start(ctx)
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    SessionID: fmt.Sprintf("user-%s-%d", userID, time.Now().Unix()),
    Model:     "gpt-4.1",
})

response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: message})
```

### .NET

```csharp
var client = new CopilotClient(new CopilotClientOptions
{
    CliUrl = "localhost:4321",
    UseStdio = false,
});

await using var session = await client.CreateSessionAsync(new SessionConfig
{
    SessionId = $"user-{userId}-{DateTimeOffset.UtcNow.ToUnixTimeSeconds()}",
    Model = "gpt-4.1",
});

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = message });
```

## Authentication for backend services

### Environment variable tokens

The simplest approach—set a token on the CLI server:

```shell
# All requests use this token
export COPILOT_GITHUB_TOKEN="YOUR-SERVICE-ACCOUNT-TOKEN"
copilot --headless --port 4321
```

Replace `YOUR-SERVICE-ACCOUNT-TOKEN` with your {% data variables.product.github %} {% data variables.product.pat_generic %} or OAuth token for the service account.

### Per-user tokens (OAuth)

Pass individual user tokens when creating sessions:

```typescript
// Your API receives user tokens from your auth layer
app.post("/chat", authMiddleware, async (req, res) => {
    const client = new CopilotClient({
        cliUrl: "localhost:4321",
        githubToken: req.user.githubToken,
        useLoggedInUser: false,
    });

    const session = await client.createSession({
        sessionId: `user-${req.user.id}-chat`,
        model: "gpt-4.1",
    });

    const response = await session.sendAndWait({
        prompt: req.body.message,
    });

    res.json({ content: response?.data.content });
});
```

### BYOK (no {% data variables.product.github %} authentication)

Use your own API keys for the model provider:

```typescript
const client = new CopilotClient({
    cliUrl: "localhost:4321",
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

## Common backend patterns

### Web API with Express

```typescript
import express from "express";
import { CopilotClient } from "@github/copilot-sdk";

const app = express();
app.use(express.json());

// Single shared CLI connection
const client = new CopilotClient({
    cliUrl: process.env.CLI_URL || "localhost:4321",
});

app.post("/api/chat", async (req, res) => {
    const { sessionId, message } = req.body;

    // Create or resume session
    let session;
    try {
        session = await client.resumeSession(sessionId);
    } catch {
        session = await client.createSession({
            sessionId,
            model: "gpt-4.1",
        });
    }

    const response = await session.sendAndWait({ prompt: message });
    res.json({
        sessionId,
        content: response?.data.content,
    });
});

app.listen(3000);
```

### Background worker

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    cliUrl: process.env.CLI_URL || "localhost:4321",
});

// Process jobs from a queue
async function processJob(job: Job) {
    const session = await client.createSession({
        sessionId: `job-${job.id}`,
        model: "gpt-4.1",
    });

    const response = await session.sendAndWait({
        prompt: job.prompt,
    });

    await saveResult(job.id, response?.data.content);
    await session.disconnect(); // Clean up after job completes
}
```

### Docker Compose deployment

```yaml
version: "3.8"

services:
  copilot-cli:
    image: ghcr.io/github/copilot-cli:latest
    command: ["--headless", "--port", "4321"]
    environment:
      - COPILOT_GITHUB_TOKEN=${COPILOT_GITHUB_TOKEN}
    ports:
      - "4321:4321"
    restart: always
    volumes:
      - session-data:/root/.copilot/session-state

  api:
    build: .
    environment:
      - CLI_URL=copilot-cli:4321
    depends_on:
      - copilot-cli
    ports:
      - "3000:3000"

volumes:
  session-data:
```

## Health checks

Monitor the CLI server's health:

```typescript
// Periodic health check
async function checkCLIHealth(): Promise<boolean> {
    try {
        const status = await client.getStatus();
        return status !== undefined;
    } catch {
        return false;
    }
}
```

## Session cleanup

Backend services should actively clean up sessions to avoid resource leaks:

```typescript
// Clean up expired sessions periodically
async function cleanupSessions(maxAgeMs: number) {
    const sessions = await client.listSessions();
    const now = Date.now();

    for (const session of sessions) {
        const age = now - new Date(session.createdAt).getTime();
        if (age > maxAgeMs) {
            await client.deleteSession(session.sessionId);
        }
    }
}

// Run every hour
setInterval(() => cleanupSessions(24 * 60 * 60 * 1000), 60 * 60 * 1000);
```

## Limitations

| Limitation | Details |
|---|---|
| **Single CLI server = single point of failure** | Consider high-availability patterns for production deployments. |
| **No built-in auth between SDK and CLI** | Secure the network path (same host, VPC, etc.). |
| **Session state on local disk** | Mount persistent storage for container restarts. |
| **30-minute idle timeout** | Sessions without activity are automatically cleaned up. |

## Next steps

* For installation and your first message, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
* For information about resuming sessions across restarts, see [Session Persistence](https://github.com/github/copilot-sdk/blob/main/docs/features/session-persistence.md) in the `github/copilot-sdk` repository.
* For information about adding user authentication, see [GitHub OAuth](https://github.com/github/copilot-sdk/blob/main/docs/setup/github-oauth.md) in the `github/copilot-sdk` repository.
