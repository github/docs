---
title: Remote sessions
shortTitle: Remote Sessions
intro: >-
  Remote sessions let users access their Copilot session from GitHub web and
  mobile via [Mission Control](https://github.com). When enabled, the SDK
  connects each session to Mission Control, producing a URL that can be shared
  as a link or QR code.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/use-copilot-sdk/remote-sessions
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

For running sessions on GitHub-hosted compute, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/cloud-sessions).

## Prerequisites

* The user must be authenticated (GitHub token or logged-in user)
* The session's working directory must be a GitHub repository

## Enabling remote sessions

### Always-on (client-level)

Set `remote: true` when creating the client. Every session in a GitHub repo automatically gets a remote URL.

<!-- tabs:start -->

#### TypeScript

<!-- docs-validate: skip -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({ remote: true });
const session = await client.createSession({
  workingDirectory: "/path/to/github-repo",
  onPermissionRequest: async () => ({ allowed: true }),
});

session.on("session.info", (event) => {
  if (event.data.infoType === "remote") {
    console.log("Remote URL:", event.data.url);
  }
});
```

#### Python

<!-- docs-validate: skip -->

```python
from copilot import CopilotClient

client = CopilotClient(enable_remote_sessions=True)
session = await client.create_session(
    working_directory="/path/to/github-repo",
    on_permission_request=lambda req: {"allowed": True},
)

def on_event(event):
    if event.type == "session.info" and event.data.info_type == "remote":
        print(f"Remote URL: {event.data.url}")

session.on(on_event)
```

#### Go

<!-- docs-validate: skip -->

```golang
client, _ := copilot.NewClient(&copilot.ClientOptions{Remote: true})
session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    WorkingDirectory: "/path/to/github-repo",
    OnPermissionRequest: func(req copilot.PermissionRequest, inv copilot.PermissionInvocation) (rpc.PermissionDecision, error) {
        return &rpc.PermissionDecisionApproveOnce{}, nil
    },
})

session.On(func(event copilot.SessionEvent) {
    if event.Type == "session.info" {
        // Check infoType and extract URL
    }
})
```

#### C#

<!-- docs-validate: skip -->

```csharp
var client = new CopilotClient(new CopilotClientOptions { Remote = true });
var session = await client.CreateSessionAsync(new SessionConfig
{
    WorkingDirectory = "/path/to/github-repo",
    OnPermissionRequest = (req, inv) =>
        Task.FromResult(PermissionDecision.ApproveOnce()),
});

session.On((SessionEvent e) =>
{
    if (e is SessionInfoEvent info && info.Data.InfoType == "remote")
    {
        Console.WriteLine($"Remote URL: {info.Data.Url}");
    }
});
```

#### Rust

<!-- docs-validate: skip -->

```rust
use github_copilot_sdk::{Client, ClientOptions, SessionConfig};
use github_copilot_sdk::handler::PermissionResult;

let client = Client::start(
    ClientOptions::new().with_enable_remote_sessions(true)
).await?;
let session = client.create_session(
    SessionConfig::new("/path/to/github-repo")
        .with_permission_handler(|_req, _inv| async {
            Ok(PermissionResult::approve_once())
        }),
).await?;

let mut events = session.subscribe();
while let Ok(event) = events.recv().await {
    if event.event_type == "session.info" {
        // Check info_type and extract URL
    }
}
```

<!-- tabs:end -->

### On-demand (per-session toggle)

Use `session.rpc.remote.enable()` to start remote access mid-session, and `session.rpc.remote.disable()` to stop it. This is equivalent to the CLI's `/remote on` and `/remote off` commands.

<!-- tabs:start -->

#### TypeScript

<!-- docs-validate: skip -->

```typescript
const result = await session.rpc.remote.enable();
console.log("Remote URL:", result.url);

// Later: stop sharing
await session.rpc.remote.disable();
```

#### Python

<!-- docs-validate: skip -->

```python
result = await session.rpc.remote.enable()
print(f"Remote URL: {result.url}")

# Later: stop sharing
await session.rpc.remote.disable()
```

#### Go

<!-- docs-validate: skip -->

```golang
result, err := session.RPC.Remote.Enable(ctx)
if result.URL != nil {
    fmt.Println("Remote URL:", *result.URL)
}

// Later: stop sharing
err = session.RPC.Remote.Disable(ctx)
```

#### C#

<!-- docs-validate: skip -->

```csharp
var result = await session.Rpc.Remote.EnableAsync();
Console.WriteLine($"Remote URL: {result.Url}");

// Later: stop sharing
await session.Rpc.Remote.DisableAsync();
```

#### Rust

<!-- docs-validate: skip -->

```rust
let result = session.rpc().remote().enable().await?;
if let Some(url) = &result.url {
    println!("Remote URL: {url}");
}

// Later: stop sharing
session.rpc().remote().disable().await?;
```

<!-- tabs:end -->

## QR code generation

The remote URL can be rendered as a QR code for easy mobile access. The SDK provides the URL—use your preferred QR code library:

* **TypeScript**: [qrcode](https://www.npmjs.com/package/qrcode)
* **Python**: [qrcode](https://pypi.org/project/qrcode/)
* **Go**: [go-qrcode](https://github.com/skip2/go-qrcode)
* **C#**: [QRCoder](https://www.nuget.org/packages/QRCoder)
* **Rust**: [qrcode](https://crates.io/crates/qrcode)

## Notes

* The `remote` client option only applies when the SDK spawns the CLI process. It is ignored when connecting to an external server via `cliUrl`.
* If the working directory is not a GitHub repository, remote setup is silently skipped (always-on mode) or returns an error (on-demand mode).
* Remote sessions require authentication. Ensure `gitHubToken` or `useLoggedInUser` is configured.
