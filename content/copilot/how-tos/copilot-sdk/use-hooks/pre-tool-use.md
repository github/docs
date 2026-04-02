---
title: Pre-tool use hook
shortTitle: Pre-tool use
intro: 'Use the `onPreToolUse` hook to control tool execution, modify arguments, and add context before a tool runs in {% data variables.copilot.copilot_sdk_short %}.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

The `onPreToolUse` hook is called **before** a tool executes. Use it to:

* Approve or deny tool execution
* Modify tool arguments
* Add context for the tool
* Suppress tool output from the conversation

## Hook signature

```typescript
import type { PreToolUseHookInput, HookInvocation, PreToolUseHookOutput } from "@github/copilot-sdk";
type PreToolUseHandler = (
  input: PreToolUseHookInput,
  invocation: HookInvocation
) => Promise<PreToolUseHookOutput | null | undefined>;
```

For hook signatures in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/pre-tool-use.md#hook-signature).

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `toolName` | string | Name of the tool being called |
| `toolArgs` | object | Arguments passed to the tool |

## Output

Return `null` or `undefined` to allow the tool to execute with no changes. Otherwise, return an object with any of the following fields.

| Field | Type | Description |
|-------|------|-------------|
| `permissionDecision` | `"allow"` \| `"deny"` \| `"ask"` | Whether to allow the tool call |
| `permissionDecisionReason` | string | Explanation shown to user (for deny/ask) |
| `modifiedArgs` | object | Modified arguments to pass to the tool |
| `additionalContext` | string | Extra context injected into the conversation |
| `suppressOutput` | boolean | If true, tool output won't appear in conversation |

### Permission decisions

| Decision | Behavior |
|----------|----------|
| `"allow"` | Tool executes normally |
| `"deny"` | Tool is blocked, reason shown to user |
| `"ask"` | User is prompted to approve (interactive mode) |

## Examples

### Allow all tools (logging only)

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input, invocation) => {
      console.log(
        `[${invocation.sessionId}] `
        + `Calling ${input.toolName}`
      );
      console.log(
        `  Args: ${JSON.stringify(input.toolArgs)}`
      );
      return { permissionDecision: "allow" };
    },
  },
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/pre-tool-use.md#allow-all-tools-logging-only).

### Block specific tools

```typescript
const BLOCKED_TOOLS = [
  "shell", "bash", "write_file", "delete_file",
];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (BLOCKED_TOOLS.includes(input.toolName)) {
        return {
          permissionDecision: "deny",
          permissionDecisionReason:
            `Tool '${input.toolName}' `
            + `is not permitted in this environment`,
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Modify tool arguments

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      // Add a default timeout to all shell commands
      if (
        input.toolName === "shell" && input.toolArgs
      ) {
        const args = input.toolArgs as {
          command: string;
          timeout?: number;
        };
        return {
          permissionDecision: "allow",
          modifiedArgs: {
            ...args,
            timeout: args.timeout ?? 30000,
          },
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Restrict file access to specific directories

```typescript
const ALLOWED_DIRECTORIES = [
  "/home/user/projects", "/tmp",
];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (
        input.toolName === "read_file"
        || input.toolName === "write_file"
      ) {
        const args = input.toolArgs as {
          path: string;
        };
        const isAllowed =
          ALLOWED_DIRECTORIES.some((dir) =>
            args.path.startsWith(dir)
          );

        if (!isAllowed) {
          return {
            permissionDecision: "deny",
            permissionDecisionReason:
              `Access to '${args.path}' `
              + `is not permitted. `
              + `Allowed directories: `
              + ALLOWED_DIRECTORIES.join(", "),
          };
        }
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

### Suppress verbose tool output

```typescript
const VERBOSE_TOOLS = ["list_directory", "search_files"];

const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      return {
        permissionDecision: "allow",
        suppressOutput: VERBOSE_TOOLS.includes(input.toolName),
      };
    },
  },
});
```

### Add context based on tool

```typescript
const session = await client.createSession({
  hooks: {
    onPreToolUse: async (input) => {
      if (input.toolName === "query_database") {
        return {
          permissionDecision: "allow",
          additionalContext:
            "Remember: This database uses "
            + "PostgreSQL syntax. "
            + "Always use parameterized queries.",
        };
      }
      return { permissionDecision: "allow" };
    },
  },
});
```

## Best practices

* **Always return a decision.** Returning `null` allows the tool, but being explicit with `{ permissionDecision: "allow" }` is clearer.
* **Provide helpful denial reasons.** When denying, explain why so users understand what happened.
* **Be careful with argument modification.** Ensure modified arguments maintain the expected schema for the tool.
* **Consider performance.** Pre-tool hooks run synchronously before each tool call. Keep them fast.
* **Use `suppressOutput` judiciously.** Suppressing output means the model won't see the result, which may affect conversation quality.
* **Be mindful of sensitive data.** Tool arguments and results may contain secrets, file paths, or personally identifiable information. Avoid logging or exposing this data in production environments.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/quickstart)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/post-tool-use)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/error-handling)
