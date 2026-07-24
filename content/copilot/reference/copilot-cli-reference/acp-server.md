---
title: "Copilot CLI ACP server"
shortTitle: ACP server
intro: "Learn about {% data variables.copilot.copilot_cli %}'s Agent Client Protocol server."
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
redirect_from:
  - /copilot/reference/acp-server
docsTeamMetrics:
  - copilot-cli
---

> [!NOTE]
> ACP support in {% data variables.copilot.copilot_cli %} is in {% data variables.release-phases.public_preview %} and subject to change.

## Overview

The Agent Client Protocol (ACP) is a protocol that standardizes communication between clients (such as code editors and IDEs) and agents (such as {% data variables.copilot.copilot_cli_short %}). For more details about this protocol, see the [official introduction](https://agentclientprotocol.com/get-started/introduction).

## Use cases

* **IDE integrations:** Build {% data variables.product.prodname_copilot_short %} support into any editor or development environment.
* **CI/CD pipelines:** Orchestrate agentic coding tasks in automated workflows.
* **Custom frontends:** Create specialized interfaces for specific developer workflows.
* **Multi-agent systems:** Coordinate {% data variables.product.prodname_copilot_short %} with other AI agents using a standard protocol.

## Starting the ACP server

Use the `--acp` option of the `copilot` command to start the CLI's ACP server. You can specify the transport mode with either the `--stdio` or `--port` options. If no transport mode is specified, the server defaults to stdio mode.

### Options applied to every session

The ACP `session/new` request only lets a client set a few session parameters, such as the working directory and the MCP servers to use. It does not carry tool-filtering or reasoning settings. To configure those, pass the corresponding options when you **start the server**. The server stores the values and applies them as the initial configuration for every session it creates or loads, for any client that connects. A connecting client does not choose these values—whoever launches the server does.

| Server option | Accepted value | Effect on every session |
|---------------|----------------|-------------------------|
| `--available-tools=TOOL ...` | A quoted, comma-separated list of tool names | The session can use only the listed tools. |
| `--excluded-tools=TOOL ...` | A quoted, comma-separated list of tool names | The listed tools are removed from the session. |
| `--effort=LEVEL`, `--reasoning-effort=LEVEL` | `low`, `medium`, `high`, `xhigh`, or `max` | Sets the session's initial reasoning effort. |

For example, this command starts a server whose sessions all use maximum reasoning effort and expose only the `bash` and `view` tools:

```bash
copilot --acp --port 3000 --effort=max --available-tools="bash,view"
```

Every session the connected client opens against that server inherits those settings. Because the values are fixed when the server starts, a client cannot change them per session through `session/new`.

### stdio mode

stdio mode is inferred by default when you start the ACP server. You can also use the `--stdio` option for disambiguation.

```bash
copilot --acp --stdio
```

### TCP mode

If the `--port` option is provided in combination with the `--acp` option, the server is started in TCP mode.

```bash
copilot --acp --port 3000
```

### Choosing between stdio and TCP

Both transport modes carry the same ACP messages, encoded as newline-delimited JSON (NDJSON). They differ only in how a client connects to the server and how the server's lifecycle is managed. The two modes are mutually exclusive: passing both `--stdio` and `--port` is rejected.

| Aspect | stdio mode | TCP mode |
|---|---|---|
| **How the client connects** | The client launches `copilot --acp` as a child process and exchanges messages over the process's standard input and output. | The server opens a TCP listener that clients connect to over a network socket. By default it binds to the loopback address `127.0.0.1`. |
| **Number of clients** | A single client—the process that spawned the server and owns the pipe. | The listener accepts socket connections, each handled as its own agent connection. |
| **Lifecycle** | Tied to the parent process. When the input stream closes—because the parent exits or closes the pipe—the server shuts down automatically. | Independent of any single client. The server keeps listening on the port until it is stopped, for example with <kbd>Ctrl</kbd>+<kbd>C</kbd>. |
| **Standard output** | Reserved for the NDJSON protocol stream, so it can't be used for logs or other text. | Free for other use, because protocol traffic travels over the socket. |

When to use each mode:

* Use **stdio mode** when an editor, IDE, or script spawns {% data variables.copilot.copilot_cli_short %} directly as a subprocess. This is the default and the recommended setup for IDE integration, because the transport is established automatically when the process starts and torn down when it exits.
* Use **TCP mode** when a client needs to reach the server over a socket instead of a pipe—for example, from a separate process or container, or when connecting to a longer-lived server on a known port.

## Example: integrating with the ACP server

The following example is a client application that uses {% data variables.product.prodname_copilot_short %} by interacting with {% data variables.copilot.copilot_cli %}'s ACP server. It starts the ACP server in stdio mode, opens a session, asks you to enter a prompt, sends it, and prints the streamed response.

There is a growing ecosystem of libraries for interacting with ACP servers programmatically. This example uses the [ACP TypeScript library](https://agentclientprotocol.com/libraries/typescript).

To run this example, you need the following dependencies:

* [Node.js](https://nodejs.org) version 18 or later.
* {% data variables.copilot.copilot_cli %}, installed and authenticated.
* The `@agentclientprotocol/sdk` package, which provides the ACP TypeScript library. Install it by running `npm install @agentclientprotocol/sdk`.

```typescript copy
import * as acp from "@agentclientprotocol/sdk";
import { spawn } from "node:child_process";
import { Readable, Writable } from "node:stream";
import * as readline from "node:readline/promises";

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

  // Ask the user to enter a prompt instead of using a hard-coded one.
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const promptText = await rl.question("Enter a prompt: ");
  rl.close();

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

To run the example:

1. Save the code above to a file named `acp-client.ts`.
1. Run the file with `npx tsx`, which runs the TypeScript directly without a separate build step:

   ```bash
   npx tsx acp-client.ts
   ```

## Using slash commands

{% data variables.copilot.copilot_cli %}'s built-in slash commands can be run over ACP. To invoke one, send it as an ordinary prompt whose text is the command, passed as a single text content block—for example, `/context` or `/session info`. The server recognizes the command and runs it directly: informational commands such as `/usage` or `/context` return their output without invoking the model, while action commands such as `/plan` or `/review` start the corresponding agent task. Either way, the command text is not sent to the model as a question.

### Discovering available commands

The server advertises the commands it supports through the standard ACP `available_commands_update` session notification. It is sent after a session is created or loaded, and again whenever the set changes—for example, when skills finish loading. This advertised list is the authoritative, always-current set of commands you can run over ACP, and clients typically surface it in a command menu.

The advertised list contains:

* **Built-in commands**, such as `/compact`, `/context`, `/usage`, `/env`, `/model`, `/mcp`, `/plan`, `/review`, `/research`, `/session`, and `/rename`.
* **Enabled, user-invocable skills**, which appear as `/SKILL-NAME` commands.

Commands that the client itself registers are not advertised back to it.

### Accessing the list from your client

Because the list arrives as a notification rather than in response to a request, there is no method to fetch it on demand. Your client accesses it by handling the `session/update` notification and reacting to updates whose type is `available_commands_update`. Each entry has a `name` (without the leading slash), a `description`, and an optional `input.hint` that describes the command's arguments. The notification is re-sent whenever the set changes, so treat each one as a complete replacement of any list you have cached.

The following `sessionUpdate` handler captures the advertised commands, extending the `client` object from the example shown earlier.

```typescript copy
// Track the latest advertised commands for the session.
let availableCommands: acp.AvailableCommand[] = [];

const client: acp.Client = {
  async sessionUpdate(params) {
    const update = params.update;

    if (update.sessionUpdate === "available_commands_update") {
      // This notification is a full snapshot—replace any cached list.
      availableCommands = update.availableCommands;
      for (const command of availableCommands) {
        // command.name has no leading slash; invoke it by sending "/<name>" as a prompt.
        console.log(`/${command.name} — ${command.description}`);
      }
      return;
    }

    // ...handle other updates, such as agent_message_chunk
  },

  // ...other client methods, such as requestPermission
};
```

To run one of the advertised commands, send its name as a prompt in a single text content block—for example, `{ type: "text", text: "/context" }`—as described in [Using slash commands](#using-slash-commands).

### Commands that cannot be used over ACP

Slash commands that depend on the interactive terminal interface are not handled by the ACP server. This includes commands that open a picker, dialog, or full-screen view, such as `/diff`, `/resume`, `/theme`, `/settings`, `/login`, `/help`, `/tasks`, and `/undo`. As a rule, if a command does not appear in the `available_commands_update` list, it will not run over ACP: the server treats the text as an ordinary prompt and forwards it to the model instead of executing it.

Because ACP clients have no interactive pickers, a built-in command that would normally open a submenu instead returns its options as text. Provide the subcommand explicitly to get a direct result—for example, `/session info` or `/mcp list` rather than `/session` or `/mcp` on its own.

For a complete list of slash commands for {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface).

## Further reading

* [Official ACP documentation](https://agentclientprotocol.com/protocol/overview)
