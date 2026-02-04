---
title: "Copilot CLI ACP server"
shortTitle: ACP server
intro: "Learn about {% data variables.copilot.copilot_cli %}'s Agent Client Protocol server."
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
contentType: reference
---

> [!NOTE]
> ACP support in {% data variables.copilot.copilot_cli %} is in {% data variables.release-phases.public_preview %} and subject to change.

## Overview

The Agent Client Protocol (ACP) is a protocol that standardizes communication between clients (such as code editors and IDEs) and coding agents (such as {% data variables.copilot.copilot_cli_short %}). For more details about this protocol, see the [official introduction](https://agentclientprotocol.com/get-started/introduction).

## Starting the ACP server

{% data variables.copilot.copilot_cli %} can be started as an ACP server using the `--acp` flag. The server supports two modes, `stdio` and `TCP`.

### stdio mode (recommended for IDE integration)

By default, when providing the `--acp` flag, `stdio` mode will be inferred. The `--stdio` flag can also be provided for disambiguation.

```bash
copilot --acp --stdio
```

### TCP mode

If the `--port` flag is provided in combination with the `--acp` flag, the server is started in TCP mode.

```bash
copilot --acp --port 3000
```

## Integrating with the ACP server

There is a growing ecosystem of libraries to programmatically interact with ACP servers. Given {% data variables.copilot.copilot_cli %} is correctly installed and authenticated, the following example demonstrates using the [typescript](https://agentclientprotocol.com/libraries/typescript) client to send a single prompt and print the AI response.

```typescript
import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";

async function main() {
  const executable = process.env.COPILOT_CLI_PATH ?? "copilot";

  // ACP uses standard input/output (stdin/stdout) for transport; we pipe these for the NDJSON stream.
  const copilotProcess = spawn(executable, ["--acp", "--stdio"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  if (!copilotProcess.stdin || !copilotProcess.stdout) {
    throw new Error("Failed to start Copilot ACP process with piped stdio.");
  }

  // Create ACP streams (NDJSON over stdio)
  const output = Writable.toWeb(copilotProcess.stdin) as WritableStream<Uint8Array>;
  const input = Readable.toWeb(copilotProcess.stdout) as ReadableStream<Uint8Array>;
  const stream = acp.ndJsonStream(output, input);

  const client: acp.Client = {
    async requestPermission(params) {
      // This example should not trigger tool calls; if it does, refuse.
      return { outcome: { outcome: "cancelled" } };
    },

    async sessionUpdate(params) {
      const update = params.update;

      if (update.sessionUpdate === "agent_message_chunk" && update.content.type === "text") {
        process.stdout.write(update.content.text);
      }
    },
  };

  const connection = new acp.ClientSideConnection((_agent) => client, stream);

  await connection.initialize({
    protocolVersion: acp.PROTOCOL_VERSION,
    clientCapabilities: {},
  });

  const sessionResult = await connection.newSession({
    cwd: process.cwd(),
    mcpServers: [],
  });

  process.stdout.write("Session started!\n");
  const promptText = "Hello ACP Server!";
  process.stdout.write(`Sending prompt: '${promptText}'\n`);

  const promptResult = await connection.prompt({
    sessionId: sessionResult.sessionId,
    prompt: [{ type: "text", text: promptText }],
  });

  process.stdout.write("\n");

  if (promptResult.stopReason !== "end_turn") {
    process.stderr.write(`Prompt finished with stopReason=${promptResult.stopReason}\n`);
  }

  // Best-effort cleanup
  copilotProcess.stdin.end();
  copilotProcess.kill("SIGTERM");
  await new Promise<void>((resolve) => {
    copilotProcess.once("exit", () => resolve());
    setTimeout(() => resolve(), 2000);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## Further reading

* [Official ACP documentation](https://agentclientprotocol.com/protocol/overview)
