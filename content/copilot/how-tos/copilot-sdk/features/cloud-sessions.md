---
title: Cloud sessions
shortTitle: Cloud Sessions
intro: >-
  Run Copilot sessions on GitHub-hosted compute through Mission Control instead
  of local CLI sessions.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Prerequisites

Before creating a cloud session, make sure:

* The user has Copilot access with cloud-agent entitlement.
* The session can authenticate to GitHub, either with a user token or a logged-in Copilot CLI identity.
* You can associate the session with a GitHub repository. This is optional in the SDK type, but recommended so Mission Control and the cloud agent have repository context.
* Organization policies allow remote control and viewing sessions from cloud surfaces.

## Creating a cloud session

Set the create-session `cloud` option to create a cloud session. You can include repository metadata to associate the cloud session with a GitHub repository.

<!-- tabs:start -->

### TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.createSession({
  onPermissionRequest: async () => ({ kind: "approve-once" }),
  cloud: {
    repository: {
      owner: "github",
      name: "copilot-sdk",
      branch: "main",
    },
  },
});
```

### Python

```python
from copilot import (
    CloudSessionOptions,
    CloudSessionRepository,
    CopilotClient,
    PermissionHandler,
)

client = CopilotClient()
await client.start()

session = await client.create_session(
    on_permission_request=PermissionHandler.approve_all,
    cloud=CloudSessionOptions(
        repository=CloudSessionRepository(
            owner="github",
            name="copilot-sdk",
            branch="main",
        )
    ),
)
```

### Go

<!-- docs-validate: hidden -->

```golang
package main

import (
    "context"

    copilot "github.com/github/copilot-sdk/go"
    "github.com/github/copilot-sdk/go/rpc"
)

func main() {
    _ = run(context.Background())
}

func run(ctx context.Context) error {
    client := copilot.NewClient(nil)
    if err := client.Start(ctx); err != nil {
        return err
    }

    session, err := client.CreateSession(ctx, &copilot.SessionConfig{
        Cloud: &copilot.CloudSessionOptions{
            Repository: &copilot.CloudSessionRepository{
                Owner:  "github",
                Name:   "copilot-sdk",
                Branch: "main",
            },
        },
        OnPermissionRequest: func(_ copilot.PermissionRequest, _ copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
            return &rpc.PermissionDecisionApproveOnce{}, nil
        },
    })
    _ = session
    return err
}
```

<!-- /docs-validate: hidden -->

```golang
client := copilot.NewClient(nil)
if err := client.Start(ctx); err != nil {
    return err
}

session, err := client.CreateSession(ctx, &copilot.SessionConfig{
    Cloud: &copilot.CloudSessionOptions{
        Repository: &copilot.CloudSessionRepository{
            Owner:  "github",
            Name:   "copilot-sdk",
            Branch: "main",
        },
    },
    OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
        return &rpc.PermissionDecisionApproveOnce{}, nil
    },
})
_ = session
```

### .NET

```csharp
await using var client = new CopilotClient();

var session = await client.CreateSessionAsync(new SessionConfig
{
    Cloud = new CloudSessionOptions
    {
        Repository = new CloudSessionRepository
        {
            Owner = "github",
            Name = "copilot-sdk",
            Branch = "main",
        },
    },
    OnPermissionRequest = (req, inv) =>
        Task.FromResult(PermissionDecision.ApproveOnce()),
});
```

### Java

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

try (var client = new CopilotClient()) {
    client.start().get();

    var session = client.createSession(
        new SessionConfig()
            .setCloud(new CloudSessionOptions()
                .setRepository(new CloudSessionRepository()
                    .setOwner("github")
                    .setName("copilot-sdk")
                    .setBranch("main")))
            .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();
}
```

### Rust

```rust
use std::sync::Arc;
use github_copilot_sdk::{CloudSessionOptions, CloudSessionRepository, SessionConfig};
use github_copilot_sdk::handler::ApproveAllHandler;

let session = client.create_session(
    SessionConfig::default()
        .with_cloud(CloudSessionOptions::with_repository(
            CloudSessionRepository::new("github", "copilot-sdk").with_branch("main"),
        ))
        .with_permission_handler(Arc::new(ApproveAllHandler)),
).await?;
```

<!-- tabs:end -->

## Sending the first prompt

Cloud sessions initialize in two phases: `createSession` resolves as soon as Mission Control has reserved a task, but the remote `copilot-agent` worker takes another second or two to connect and emit `session.start`. If you call `session.send` before that, the runtime's `RemoteSession.send` throws `"Remote session is still starting"` — but the schema wrapper is fire-and-forget and **silently swallows the error** while still returning a fresh `messageId` to your code. The prompt is dropped on the server and never reaches the worker.

To send reliably, subscribe to events **before** sending and await the first `session.start` event whose `producer` is `"copilot-agent"`:

<!-- docs-validate: skip -->

```typescript
import { CopilotClient, type CopilotSession } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session: CopilotSession = await client.createSession({
  streaming: true, // required for assistant.message_delta to fire
  cloud: { repository: { owner: "github", name: "copilot-sdk" } },
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});

// Subscribe BEFORE sending so you don't miss the start event.
const ready = new Promise<void>((resolve) => {
  const off = session.on("session.start", (event) => {
    if (event.data?.producer === "copilot-agent") {
      off();
      resolve();
    }
  });
});

await ready;
await session.send({ prompt: "Summarize the README" });
```

A few notes:

* Set `streaming: true` on `createSession` so the runtime emits `assistant.message_delta` events. Without it, the only assistant signal you get is the final `assistant.message` — fine for batch use, but the chat will look frozen if you're rendering a live UI. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events).
* Only the **first** `session.send` is sensitive to this race. Subsequent sends on the same session work normally because the runtime keeps `hasSessionStarted` set for the life of the session.
* Apply a timeout (e.g. 60 s) around the `ready` promise so a stuck Mission Control provisioning doesn't hang your app forever.
* The same pattern works in every SDK language — subscribe to `session.start`, check `producer === "copilot-agent"`, then call `send`.

## Accessing the Mission Control URL

Cloud sessions are inherently remote: once the worker connects, Mission Control publishes the session at `https://github.com/copilot/tasks/{sessionId}` and the runtime emits a `session.info` event with the URL. You do **not** need to call `remote.enable()` — that API is only for promoting a local session to Mission Control.

Capture the URL by subscribing to `session.info` and filtering by `infoType: "remote"`:

<!-- docs-validate: skip -->

```typescript
session.on("session.info", (event) => {
  if (event.data?.infoType === "remote" && event.data.url) {
    console.log("Open from web or mobile:", event.data.url);
    // e.g. surface in your UI as a shareable link or QR code.
  }
});
```

The event fires shortly after `session.start`. If your renderer mounts after the event has already fired, persist the URL alongside the session record in your app's state and rehydrate on remount — the runtime does not re-emit `session.info` on its own.

For the same wiring on local sessions promoted via `remote: true`, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/remote-sessions).

## Repository association

The `cloud.repository` object associates the cloud session with a GitHub repository:

| Field | Required | Description |
|-------|----------|-------------|
| `owner` | Yes | Repository owner or organization. |
| `name` | Yes | Repository name. |
| `branch` | No | Branch to use for repository context. Omit it to let the runtime choose the default branch or current repository context. |

Repository association is optional in the SDK type, but include it whenever your app knows the target repository. It helps Mission Control display the session in the right context and gives the cloud agent a clearer starting point.

Use `branch` when the work should start from a specific branch. If your app is creating sessions from pull requests, issue triage flows, or deployment workflows, pass the branch that matches the user-visible task.

## Resuming a cloud session

The `cloud` option only applies when creating a new session. To resume an existing cloud session, use the standard resume API for the SDK language:

<!-- docs-validate: hidden -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const session = await client.resumeSession("session-id", {
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
void session;
```

<!-- /docs-validate: hidden -->

```typescript
const session = await client.resumeSession("session-id", {
  onPermissionRequest: async () => ({ kind: "approve-once" }),
});
```

Do not pass `cloud` again on resume. The saved session metadata determines that the session is cloud-backed, and resume follows the normal session resume path.

## Org policies and entitlements

Cloud session creation can fail when the user or organization is not entitled to cloud-agent execution or when organization-level policies block the flow. In particular, policies for cloud sandbox can prevent clients from creating the cloud task.

When this happens, the runtime reports a `"policy_blocked"` failure reason for cloud task creation. Treat this as an authorization or policy outcome, not as a transient infrastructure failure.

In TypeScript, check for the reason before retrying:

<!-- docs-validate: hidden -->

```typescript
import {
  CopilotClient,
  type CloudSessionRepository,
} from "@github/copilot-sdk";

const client = new CopilotClient();
await client.start();

const repository: CloudSessionRepository = {
  owner: "github",
  name: "copilot-sdk",
};

try {
  await client.createSession({
    cloud: { repository },
    onPermissionRequest: async () => ({ kind: "approve-once" }),
  });
} catch (error) {
  if ((error as { reason?: string }).reason === "policy_blocked") {
    // Show an admin-facing message or link to org policy settings.
  }
  throw error;
}
```

<!-- /docs-validate: hidden -->

```typescript
try {
  await client.createSession({ cloud: { repository } });
} catch (error) {
  if ((error as { reason?: string }).reason === "policy_blocked") {
    // Show an admin-facing message or link to org policy settings.
  }
  throw error;
}
```

In languages where SDK errors are represented differently, inspect the surfaced error reason or code and handle `"policy_blocked"` explicitly. Retrying without a policy change is not expected to succeed.

## Integration ID and routing

Cloud sessions are stamped with a `Copilot-Integration-Id` header derived from the `GITHUB_COPILOT_INTEGRATION_ID` environment variable. This integration ID is used by Mission Control for routing, attribution, and integration-specific behavior.

For multi-user server guidance and full integration ID details, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy).

Mission Control routes SDK-created cloud sessions to the `copilot-developer-sandbox` agent slug. The name is an internal routing slug for the cloud agent and does not mean the session uses the local Windows sandbox.

## Advanced: `COPILOT_MC_BASE_URL`

By default, the runtime derives the Mission Control base URL from the configured Copilot API URL. Set `COPILOT_MC_BASE_URL` only when you need to override that Mission Control endpoint.

This may be required for GitHub Enterprise Server deployments. Confirm the correct value and support status with your GitHub representative before relying on it in production.

```shell
COPILOT_MC_BASE_URL="https://example.com/agents"
```

## Cloud sessions vs. remote sessions

| Capability | Remote sessions | Cloud sessions |
|------------|-----------------|----------------|
| Execution location | Local machine or your server | GitHub-hosted compute |
| Mission Control role | Shares a local session to GitHub web/mobile | Creates and routes the hosted session |
| SDK option | `remote: true` on the client or session | `cloud: { ... }` on create session |
| Resume path | Standard resume | Standard resume |
| Windows sandbox relation | Unrelated | Unrelated |

Use remote sessions when the session should execute where the SDK runtime is already running, but also be accessible from Mission Control. Use cloud sessions when the session should execute on GitHub-hosted compute.

## Troubleshooting

| Symptom | Likely cause | What to check |
|---------|--------------|---------------|
| Cloud session creation returns `"policy_blocked"` | Organization policy blocks remote control or view from cloud flows | Check org Copilot policies and user entitlement |
| Session creates without repository context | `cloud.repository` was omitted | Pass `owner`, `name`, and optionally `branch` |
| Resume ignores a new `cloud` option | `cloud` only applies to new sessions | Resume the existing session normally |
| Confusion with sandbox settings | Windows sandbox and cloud sessions are separate | Do not use `SANDBOX=true` for cloud execution |
| `session.send` resolves with a `messageId` but no `assistant.*` events fire and Mission Control shows no prompt | The session.send raced ahead of `session.start` from the remote worker; the runtime swallowed the prompt | Await the first `session.start` event with `producer === "copilot-agent"` before sending. See [Sending the first prompt](#sending-the-first-prompt) |
| Live UI never updates even though the cloud worker is processing | `streaming` was not set on `createSession`, so only the final `assistant.message` is emitted | Set `streaming: true` on `createSession` and re-launch |
| Cloud session works but no shareable URL appears in your UI | App never subscribed to `session.info` for the URL | Subscribe to `session.info` and filter `infoType === "remote"`. See [Accessing the Mission Control URL](#accessing-the-mission-control-url) |

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/remote-sessions): share locally hosted sessions through Mission Control
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events): subscribe to `assistant.*` deltas for live UI rendering
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy): integration IDs and server deployment patterns
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth): configure GitHub authentication for SDK sessions
