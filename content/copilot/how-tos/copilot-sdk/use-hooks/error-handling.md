---
title: Error handling hook
shortTitle: Error handling
intro: 'Use the `onErrorOccurred` hook to implement custom error logging, track error patterns, and provide user-friendly error messages in {% data variables.copilot.copilot_sdk_short %}.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

The `onErrorOccurred` hook is called when errors occur during session execution. Use it to:

* Implement custom error logging
* Track error patterns
* Provide user-friendly error messages
* Trigger alerts for critical errors

## Hook signature

```typescript
import type { ErrorOccurredHookInput, HookInvocation, ErrorOccurredHookOutput } from "@github/copilot-sdk";
type ErrorOccurredHandler = (
  input: ErrorOccurredHookInput,
  invocation: HookInvocation
) => Promise<
  ErrorOccurredHookOutput | null | undefined
>;
```

For hook signatures in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/error-handling.md#hook-signature). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the error occurred |
| `cwd` | string | Current working directory |
| `error` | string | Error message |
| `errorContext` | string | Where the error occurred: `"model_call"`, `"tool_execution"`, `"system"`, or `"user_input"` |
| `recoverable` | boolean | Whether the error can potentially be recovered from |

## Output

Return `null` or `undefined` to use default error handling. Otherwise, return an object with any of the following fields.

| Field | Type | Description |
|-------|------|-------------|
| `suppressOutput` | boolean | If true, don't show error output to user |
| `errorHandling` | string | How to handle: `"retry"`, `"skip"`, or `"abort"` |
| `retryCount` | number | Number of times to retry (if `errorHandling` is `"retry"`) |
| `userNotification` | string | Custom message to show the user |

## Examples

### Basic error logging

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (
      input, invocation
    ) => {
      console.error(
        `[${invocation.sessionId}] `
        + `Error: ${input.error}`
      );
      console.error(
        `  Context: ${input.errorContext}`
      );
      console.error(
        `  Recoverable: ${input.recoverable}`
      );
      return null;
    },
  },
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/error-handling.md#basic-error-logging). {% data reusables.copilot.copilot-sdk.java-sdk-link %}

### Send errors to monitoring service

```typescript
import { captureException } from "@sentry/node"; // or your monitoring service

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input, invocation) => {
      captureException(new Error(input.error), {
        tags: {
          sessionId: invocation.sessionId,
          errorContext: input.errorContext,
        },
        extra: {
          error: input.error,
          recoverable: input.recoverable,
          cwd: input.cwd,
        },
      });
      
      return null;
    },
  },
});
```

### User-friendly error messages

```typescript
const ERROR_MESSAGES: Record<string, string> = {
  "model_call":
    "There was an issue communicating "
    + "with the AI model. Please try again.",
  "tool_execution":
    "A tool failed to execute. "
    + "Please check your inputs and try again.",
  "system":
    "A system error occurred. "
    + "Please try again later.",
  "user_input":
    "There was an issue with your input. "
    + "Please check and try again.",
};

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      const friendlyMessage =
        ERROR_MESSAGES[input.errorContext];

      if (friendlyMessage) {
        return {
          userNotification: friendlyMessage,
        };
      }

      return null;
    },
  },
});
```

### Suppress non-critical errors

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      // Suppress tool execution errors
      // that are recoverable
      if (
        input.errorContext === "tool_execution"
        && input.recoverable
      ) {
        console.log(
          `Suppressed recoverable error: `
          + `${input.error}`
        );
        return { suppressOutput: true };
      }
      return null;
    },
  },
});
```

### Add recovery context

```typescript
const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (input) => {
      if (
        input.errorContext === "tool_execution"
      ) {
        return {
          userNotification:
            "The tool failed. Here are some "
            + "recovery suggestions:\n"
            + "- Check if required dependencies "
            + "are installed\n"
            + "- Verify file paths are correct\n"
            + "- Try a simpler approach",
        };
      }

      if (
        input.errorContext === "model_call"
        && input.error.includes("rate")
      ) {
        return {
          errorHandling: "retry",
          retryCount: 3,
          userNotification:
            "Rate limit hit. Retrying...",
        };
      }

      return null;
    },
  },
});
```

### Track error patterns

```typescript
interface ErrorStats {
  count: number;
  lastOccurred: number;
  contexts: string[];
}

const errorStats =
  new Map<string, ErrorStats>();

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (
      input, invocation
    ) => {
      const key =
        `${input.errorContext}:`
        + `${input.error.substring(0, 50)}`;

      const existing =
        errorStats.get(key) || {
          count: 0,
          lastOccurred: 0,
          contexts: [],
        };

      existing.count++;
      existing.lastOccurred = input.timestamp;
      existing.contexts.push(
        invocation.sessionId
      );

      errorStats.set(key, existing);

      // Alert if error is recurring
      if (existing.count >= 5) {
        console.warn(
          `Recurring error detected: `
          + `${key} (${existing.count} times)`
        );
      }

      return null;
    },
  },
});
```

### Alert on critical errors

```typescript
const CRITICAL_CONTEXTS = [
  "system", "model_call",
];

const session = await client.createSession({
  hooks: {
    onErrorOccurred: async (
      input, invocation
    ) => {
      if (
        CRITICAL_CONTEXTS.includes(
          input.errorContext
        )
        && !input.recoverable
      ) {
        await sendAlert({
          level: "critical",
          message:
            `Critical error in session `
            + `${invocation.sessionId}`,
          error: input.error,
          context: input.errorContext,
          timestamp: new Date(
            input.timestamp
          ).toISOString(),
        });
      }

      return null;
    },
  },
});
```

## Best practices

* **Always log errors.** Even if you suppress them from users, keep logs for debugging.
* **Categorize errors.** Use `errorContext` to handle different errors appropriately.
* **Don't swallow critical errors.** Only suppress errors you're certain are non-critical.
* **Keep hooks fast.** Error handling shouldn't slow down recovery.
* **Monitor error patterns.** Track recurring errors to identify systemic issues.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/quickstart)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/session-lifecycle)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/pre-tool-use)
