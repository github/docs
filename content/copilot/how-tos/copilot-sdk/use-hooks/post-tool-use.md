---
title: Post-tool use hook
shortTitle: Post-tool use
intro: 'Use the `onPostToolUse` hook to transform tool results, log tool execution, and add context after a tool runs in {% data variables.copilot.copilot_sdk_short %}.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

The `onPostToolUse` hook is called **after** a tool executes. Use it to:

* Transform or filter tool results
* Log tool execution for auditing
* Add context based on results
* Suppress results from the conversation

## Hook signature

```typescript
import type { PostToolUseHookInput, HookInvocation, PostToolUseHookOutput } from "@github/copilot-sdk";
type PostToolUseHandler = (
  input: PostToolUseHookInput,
  invocation: HookInvocation
) => Promise<PostToolUseHookOutput | null | undefined>;
```

For hook signatures in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/post-tool-use.md#hook-signature).

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `toolName` | string | Name of the tool that was called |
| `toolArgs` | object | Arguments that were passed to the tool |
| `toolResult` | object | Result returned by the tool |

## Output

Return `null` or `undefined` to pass through the result unchanged. Otherwise, return an object with any of the following fields.

| Field | Type | Description |
|-------|------|-------------|
| `modifiedResult` | object | Modified result to use instead of original |
| `additionalContext` | string | Extra context injected into the conversation |
| `suppressOutput` | boolean | If true, result won't appear in conversation |

## Examples

### Log all tool results

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input, invocation) => {
      console.log(
        `[${invocation.sessionId}] `
        + `Tool: ${input.toolName}`
      );
      console.log(
        `  Args: ${JSON.stringify(input.toolArgs)}`
      );
      console.log(
        `  Result: `
        + `${JSON.stringify(input.toolResult)}`
      );
      return null; // Pass through unchanged
    },
  },
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/post-tool-use.md#log-all-tool-results).

### Redact sensitive data

```typescript
const SENSITIVE_PATTERNS = [
  /api[_-]?key["\s:=]+["']?[\w-]+["']?/gi,
  /password["\s:=]+["']?[\w-]+["']?/gi,
  /secret["\s:=]+["']?[\w-]+["']?/gi,
];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (typeof input.toolResult === "string") {
        let redacted = input.toolResult;
        for (const pattern of SENSITIVE_PATTERNS) {
          redacted = redacted.replace(
            pattern, "[REDACTED]"
          );
        }

        if (redacted !== input.toolResult) {
          return { modifiedResult: redacted };
        }
      }
      return null;
    },
  },
});
```

### Truncate large results

```typescript
const MAX_RESULT_LENGTH = 10000;

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      const resultStr =
        JSON.stringify(input.toolResult);

      if (resultStr.length > MAX_RESULT_LENGTH) {
        return {
          modifiedResult: {
            truncated: true,
            originalLength: resultStr.length,
            content:
              resultStr.substring(
                0, MAX_RESULT_LENGTH
              ) + "...",
          },
          additionalContext:
            `Note: Result was truncated from `
            + `${resultStr.length} to `
            + `${MAX_RESULT_LENGTH} characters.`,
        };
      }
      return null;
    },
  },
});
```

### Add context based on results

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      // If a file read returned an error,
      // add helpful context
      if (
        input.toolName === "read_file"
        && input.toolResult?.error
      ) {
        return {
          additionalContext:
            "Tip: If the file doesn't exist, "
            + "consider creating it or "
            + "checking the path.",
        };
      }

      // If shell command failed,
      // add debugging hint
      if (
        input.toolName === "shell"
        && input.toolResult?.exitCode !== 0
      ) {
        return {
          additionalContext:
            "The command failed. Check if "
            + "required dependencies are installed.",
        };
      }

      return null;
    },
  },
});
```

### Filter error stack traces

```typescript
const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (input.toolResult?.error && input.toolResult?.stack) {
        // Remove internal stack trace details
        return {
          modifiedResult: {
            error: input.toolResult.error,
            // Keep only first 3 lines of stack
            stack: input.toolResult.stack.split("\n").slice(0, 3).join("\n"),
          },
        };
      }
      return null;
    },
  },
});
```

### Audit trail for compliance

```typescript
interface AuditEntry {
  timestamp: number;
  sessionId: string;
  toolName: string;
  args: unknown;
  result: unknown;
  success: boolean;
}

const auditLog: AuditEntry[] = [];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input, invocation) => {
      auditLog.push({
        timestamp: input.timestamp,
        sessionId: invocation.sessionId,
        toolName: input.toolName,
        args: input.toolArgs,
        result: input.toolResult,
        success: !input.toolResult?.error,
      });

      // Optionally persist to database/file
      await saveAuditLog(auditLog);

      return null;
    },
  },
});
```

### Suppress noisy results

```typescript
const NOISY_TOOLS = ["list_directory", "search_codebase"];

const session = await client.createSession({
  hooks: {
    onPostToolUse: async (input) => {
      if (NOISY_TOOLS.includes(input.toolName)) {
        // Summarize instead of showing full result
        const items = Array.isArray(input.toolResult) 
          ? input.toolResult 
          : input.toolResult?.items || [];
        
        return {
          modifiedResult: {
            summary: `Found ${items.length} items`,
            firstFew: items.slice(0, 5),
          },
        };
      }
      return null;
    },
  },
});
```

## Best practices

* **Return `null` when no changes are needed.** This is more efficient than returning an empty object or the same result.
* **Be careful with result modification.** Changing results can affect how the model interprets tool output. Only modify when necessary.
* **Use `additionalContext` for hints.** Instead of modifying results, add context to help the model interpret them.
* **Consider privacy when logging.** Tool results may contain sensitive data. Apply redaction before logging.
* **Keep hooks fast.** Post-tool hooks run synchronously. Heavy processing should be done asynchronously or batched.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/quickstart)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/pre-tool-use)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/error-handling)
