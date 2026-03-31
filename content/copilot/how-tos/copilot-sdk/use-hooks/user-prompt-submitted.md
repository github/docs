---
title: User prompt submitted hook
shortTitle: User prompt submitted
intro: 'Use the `onUserPromptSubmitted` hook to modify prompts, add context, and filter user input in {% data variables.copilot.copilot_sdk_short %}.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> {% data reusables.copilot.copilot-sdk.technical-preview-note %}

The `onUserPromptSubmitted` hook is called when a user submits a message. Use it to:

* Modify or enhance user prompts
* Add context before processing
* Filter or validate user input
* Implement prompt templates

## Hook signature

```typescript
import type { UserPromptSubmittedHookInput, HookInvocation, UserPromptSubmittedHookOutput } from "@github/copilot-sdk";
type UserPromptSubmittedHandler = (
  input: UserPromptSubmittedHookInput,
  invocation: HookInvocation
) => Promise<
  UserPromptSubmittedHookOutput | null | undefined
>;
```

For hook signatures in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/user-prompt-submitted.md#hook-signature).

## Input

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | number | Unix timestamp when the hook was triggered |
| `cwd` | string | Current working directory |
| `prompt` | string | The user's submitted prompt |

## Output

Return `null` or `undefined` to use the prompt unchanged. Otherwise, return an object with any of the following fields.

| Field | Type | Description |
|-------|------|-------------|
| `modifiedPrompt` | string | Modified prompt to use instead of original |
| `additionalContext` | string | Extra context added to the conversation |
| `suppressOutput` | boolean | If true, suppress the assistant's response output |

## Examples

### Log all user prompts

```typescript
const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (
      input, invocation
    ) => {
      console.log(
        `[${invocation.sessionId}] `
        + `User: ${input.prompt}`
      );
      return null; // Pass through unchanged
    },
  },
});
```

For examples in Python, Go, and .NET, see the [`github/copilot-sdk` repository](https://github.com/github/copilot-sdk/blob/main/docs/hooks/user-prompt-submitted.md#log-all-user-prompts).

### Add project context

```typescript
const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const projectInfo = await getProjectInfo();

      return {
        additionalContext: `
Project: ${projectInfo.name}
Language: ${projectInfo.language}
Framework: ${projectInfo.framework}
        `.trim(),
      };
    },
  },
});
```

### Expand shorthand commands

```typescript
const SHORTCUTS: Record<string, string> = {
  "/fix":
    "Please fix the errors in the code",
  "/explain":
    "Please explain this code in detail",
  "/test":
    "Please write unit tests for this code",
  "/refactor":
    "Please refactor this code to improve "
    + "readability and maintainability",
};

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const [shortcut, expansion]
        of Object.entries(SHORTCUTS)) {
        if (input.prompt.startsWith(shortcut)) {
          const rest = input.prompt
            .slice(shortcut.length).trim();
          return {
            modifiedPrompt:
              `${expansion}`
              + `${rest ? `: ${rest}` : ""}`,
          };
        }
      }
      return null;
    },
  },
});
```

### Content filtering

```typescript
const BLOCKED_PATTERNS = [
  /password\s*[:=]/i,
  /api[_-]?key\s*[:=]/i,
  /secret\s*[:=]/i,
];

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const pattern of BLOCKED_PATTERNS) {
        if (pattern.test(input.prompt)) {
          return {
            modifiedPrompt:
              "[Content blocked: Please don't "
              + "include sensitive credentials "
              + "in your prompts. Use environment "
              + "variables instead.]",
            suppressOutput: true,
          };
        }
      }
      return null;
    },
  },
});
```

### Enforce prompt limit lengths

```typescript
const MAX_PROMPT_LENGTH = 10000;

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      if (input.prompt.length > MAX_PROMPT_LENGTH) {
        // Truncate the prompt and add context
        return {
          modifiedPrompt: input.prompt.substring(0, MAX_PROMPT_LENGTH),
          additionalContext: `Note: The original prompt was ${input.prompt.length} characters and was truncated to ${MAX_PROMPT_LENGTH} characters.`,
        };
      }
      return null;
    },
  },
});
```

### Add user preferences

```typescript
interface UserPreferences {
  codeStyle: "concise" | "verbose";
  preferredLanguage: string;
  experienceLevel: "beginner" | "intermediate" | "expert";
}

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const prefs: UserPreferences = await loadUserPreferences();
      
      const contextParts = [];
      
      if (prefs.codeStyle === "concise") {
        contextParts.push("User prefers concise code with minimal comments.");
      } else {
        contextParts.push("User prefers verbose code with detailed comments.");
      }
      
      if (prefs.experienceLevel === "beginner") {
        contextParts.push("Explain concepts in simple terms.");
      }
      
      return {
        additionalContext: contextParts.join(" "),
      };
    },
  },
});
```

### Rate limiting

```typescript
const promptTimestamps: number[] = [];
const RATE_LIMIT = 10; // prompts
const RATE_WINDOW = 60000; // 1 minute

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      const now = Date.now();
      
      // Remove timestamps outside the window
      while (promptTimestamps.length > 0 && promptTimestamps[0] < now - RATE_WINDOW) {
        promptTimestamps.shift();
      }
      
      if (promptTimestamps.length >= RATE_LIMIT) {
        return {
          reject: true,
          rejectReason: `Rate limit exceeded. Please wait before sending more prompts.`,
        };
      }
      
      promptTimestamps.push(now);
      return null;
    },
  },
});
```

### Prompt templates

```typescript
const TEMPLATES: Record<
  string, (args: string) => string
> = {
  "bug:": (desc) =>
    `I found a bug: ${desc}\n\n`
    + `Please help me:\n`
    + `1. Understand why this is happening\n`
    + `2. Suggest a fix\n`
    + `3. Explain how to prevent similar bugs`,

  "feature:": (desc) =>
    `I want to implement this feature: `
    + `${desc}\n\n`
    + `Please:\n`
    + `1. Outline the implementation approach\n`
    + `2. Identify potential challenges\n`
    + `3. Provide sample code`,
};

const session = await client.createSession({
  hooks: {
    onUserPromptSubmitted: async (input) => {
      for (const [prefix, template]
        of Object.entries(TEMPLATES)) {
        if (
          input.prompt.toLowerCase()
            .startsWith(prefix)
        ) {
          const args = input.prompt
            .slice(prefix.length).trim();
          return {
            modifiedPrompt: template(args),
          };
        }
      }
      return null;
    },
  },
});
```

## Best practices

* **Preserve user intent.** When modifying prompts, ensure the core intent remains clear.
* **Be transparent about modifications.** If you significantly change a prompt, consider logging or notifying the user.
* **Use `additionalContext` over `modifiedPrompt`.** Adding context is less intrusive than rewriting the prompt.
* **Provide clear rejection reasons.** When rejecting prompts, explain why and how to fix the issue.
* **Keep processing fast.** This hook runs on every user message. Avoid slow operations.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/quickstart)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/session-lifecycle)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-hooks/pre-tool-use)
