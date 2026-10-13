---
title: Run the Copilot runtime in process
shortTitle: In-process runtime
intro: >-
  In-process hosting loads the native Copilot runtime into your application
  process instead of starting a separate Copilot CLI process. Use it to remove
  child-process management while keeping the same Copilot SDK sessions, events,
  tools, hooks, and JSON-RPC behavior.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

> [!WARNING]
> In-process hosting is experimental in every SDK. Test startup, model turns, and shutdown behavior on every operating system and architecture that you deploy.

## When to use in-process hosting

In-process hosting is a good fit when:

* Your application must run without a separate runtime process.
* You want the SDK to own the runtime lifecycle.
* You can ship a native library for each deployment platform.
* Process-wide environment and working-directory settings are acceptable.

Use the [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/bundled-cli) when process isolation and the most established deployment path are more important. Use a [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services) when multiple application instances must connect to a shared runtime over TCP.

## How it works

The SDK loads the Copilot runtime native library and binds its fixed C ABI. All SDK methods continue to use the existing `Content-Length`-framed JSON-RPC protocol over an in-memory connection.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-in-process-runtime-diagram-0.png)

The runtime:

* Runs in the application process without Node.js, a child process, a TCP port, or a connection token.
* Supports the same sessions, streaming events, tools, hooks, permissions, and server-to-client requests as other transports.
* Can invoke SDK callbacks from native worker threads. The SDK handles thread marshalling and callback lifetime.
* Keeps the loaded native library and its worker pool available for the lifetime of the application process.

## SDK requirements

All SDKs expose an explicit in-process connection option. Some languages require additional build or package configuration.

| SDK | Connection option | Additional requirement |
|-----|-------------------|------------------------|
| TypeScript | `RuntimeConnection.forInProcess()` | None when the package includes a compatible runtime bundle |
| Python | `RuntimeConnection.for_inprocess()` | Pre-download with `python -m copilot download-runtime --in-process` when runtime download is unavailable during startup |
| Go | `copilot.InProcessConnection{}` | Build with `-tags copilot_inprocess` |
| .NET | `RuntimeConnection.ForInProcess()` | Allow the `GHCP001` experimental API diagnostic |
| Rust | `Transport::InProcess` | Enable the `bundled-in-process` Cargo feature |
| Java | `RuntimeConnection.forInProcess()` | Add JNA, a platform runtime classifier, and experimental API opt-in |

The native runtime bundle must match the host operating system, CPU architecture, and, on Linux, C library. Unsupported hosts fail during runtime resolution or startup instead of falling back to a child process.

## Configure an in-process connection

Pass the language-specific connection option when you create the client.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
import { CopilotClient, RuntimeConnection } from "@github/copilot-sdk";

const client = new CopilotClient({
  connection: RuntimeConnection.forInProcess(),
});

await client.start();
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from copilot import CopilotClient, RuntimeConnection

client = CopilotClient(
    connection=RuntimeConnection.for_inprocess(),
)

await client.start()
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    Connection: copilot.InProcessConnection{},
})

if err := client.Start(context.Background()); err != nil {
    log.Fatal(err)
}
defer client.Stop()
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
#pragma warning disable GHCP001

var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForInProcess(),
});

await client.StartAsync();
```

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
let options = ClientOptions::default()
    .with_transport(Transport::InProcess);

let client = Client::start(options).await?;
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.AllowCopilotExperimental;

@AllowCopilotExperimental
public class Example {
    public void run() throws Exception {
        CopilotClientOptions options = new CopilotClientOptions()
            .setConnection(RuntimeConnection.forInProcess());

        CopilotClient client = new CopilotClient(options);
        client.start().join();
    }
}
```

`RuntimeConnection.forInProcess()` is `@CopilotExperimental`, so the consuming class or method must opt in with `@AllowCopilotExperimental` (or compile with `-Acopilot.experimental.allowed=true`). See [Using experimental APIs](https://github.com/github/copilot-sdk/tree/main/java/README.md#using-experimental-apis).

{% endcodetab %}
{% endcodetabs %}

You can also set `COPILOT_SDK_DEFAULT_CONNECTION=inprocess` before starting the application. The SDK uses this value only when the client does not specify a connection explicitly. An invalid value causes startup to fail.

Prefer explicit client configuration in application code. Use the environment variable when deployment configuration must select the transport without changing the application.

## Configure the runtime

The SDK converts supported typed client options into native runtime arguments and host-scoped environment values. Depending on the SDK, these options include:

* Authentication token and logged-in-user fallback.
* Copilot base directory.
* Log level.
* Session idle timeout.
* Remote session mode.

The in-process runtime receives a snapshot of the host environment plus supported SDK-managed overrides. It does not mutate the host environment.

Set process-wide values before creating the first in-process client. This includes environment variables that are not represented by typed client options and the application's current working directory.

## Runtime library resolution

Each SDK first looks for a compatible bundled or cached runtime library. You can set `COPILOT_CLI_PATH` to point into a compatible Copilot runtime package when you need to provide the runtime separately.

Only one native runtime library path and version can normally be loaded in a process. Starting another client with the same loaded library is supported, but attempting to load a different runtime library fails.

For production deployments:

1. Build and test the application for each target platform.
1. Ensure that the matching native runtime artifact is included in the deployed package or available through the SDK's runtime download mechanism.
1. Start at least one session and complete a model turn in a deployment smoke test.
1. Stop clients gracefully before the application exits.

## Lifecycle behavior

Starting an in-process client loads the native library, creates a runtime host, opens an in-memory connection, and performs the normal SDK protocol-version handshake.

During graceful shutdown, the SDK:

1. Closes active sessions.
1. Requests normal runtime shutdown over JSON-RPC.
1. Closes the JSON-RPC and native connections.
1. Releases the runtime host.

The native library can remain loaded until the application process exits. Do not depend on unloading and replacing the runtime library after first use.

## Limitations

In-process hosting has these current constraints:

* **Experimental API**: behavior and packaging requirements can change between releases.
* **Shared process state**: all clients share the host process environment, current working directory, native library, and runtime worker pool.
* **Restricted process options**: SDK options for an arbitrary environment, working directory, telemetry configuration, executable path, or CLI arguments are rejected where applicable. Configure process-global values on the host process and use supported typed options for runtime settings.
* **No per-client working directory**: the runtime uses the hosting process working directory.
* **One runtime version per process**: loading another native library path or version is not supported.
* **Platform maturity varies**: some SDK and platform combinations have reduced model-turn or shutdown coverage. Validate the exact combination that you deploy.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/choosing-a-setup-path): compare in-process hosting with other deployment models
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/bundled-cli): run the bundled runtime in a managed child process
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services): connect applications to a shared runtime over TCP
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/hooks/session-lifecycle): handle session start and end events
