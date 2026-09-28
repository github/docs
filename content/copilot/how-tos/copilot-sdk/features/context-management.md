---
title: Context clearing and terminal tools
shortTitle: Context management
intro: >-
  Use `session.history.clearContext` when a host needs to replace the current
  conversation context without replacing the session. Typical uses include
  handoffs and host-managed context lifecycle policies.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

Context clearing is different from creating a new session: it preserves the session identity, system and developer messages, configuration, and event log while removing the model-facing conversation.

> [!IMPORTANT]
> `clearContext` is a tool-handler primitive. The runtime rejects calls made without a tool call in flight, calls with an empty seed prompt, and calls on remote sessions.

## Define a context-clearing tool

A successful context-clearing tool should be terminal. Otherwise, the agent loop may make another model call against the newly cleared window before starting the seeded turn.

```typescript
import { approveAll, CopilotClient, defineTool } from "@github/copilot-sdk";
import type { CopilotSession } from "@github/copilot-sdk";
import { z } from "zod";

const client = new CopilotClient();
let session: CopilotSession;

session = await client.createSession({
  onPermissionRequest: approveAll,
  tools: [
    defineTool("clear_context", {
      description: "Clear the conversation and start a fresh context window",
      parameters: z.object({ prompt: z.string() }),
      isTerminal: true,
      defer: "never",
      handler: async ({ prompt }) => {
        const { messagesCleared } =
          await session.rpc.history.clearContext({ prompt });
        return `Cleared ${messagesCleared} messages.`;
      },
    }),
  ],
});
```

The required `prompt` becomes the first user message in the fresh context. A successful clear emits `session.context_cleared` with the number of removed messages and the initial message.

## Terminal-tool behavior

`isTerminal` ends the current agent turn only when the tool succeeds. A failure, denial, rejection, timeout, or input-validation error remains visible to the model so it can recover or retry.

The option follows each language's naming conventions:

| SDK | Tool option |
|---|---|
| Node.js | `isTerminal` |
| Python | `is_terminal` |
| Go | `IsTerminal` |
| .NET | `CopilotToolOptions.IsTerminal` |
| Java | `ToolDefinition.isTerminal(true)` or `@CopilotTool(isTerminal = true)` |
| Rust | `with_is_terminal(true)` |

Use terminality only for tools whose successful completion should end the turn. Ordinary tools should leave it unset.
