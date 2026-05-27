---
title: Default setup (bundled CLI)
shortTitle: Bundled CLI
intro: 'The Node.js, Python, and .NET SDKs include {% data variables.copilot.copilot_cli_short %} as a dependency—your app ships with everything it needs, with no extra installation or configuration required.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

**Best for:** Most applications—desktop apps, standalone tools, CLI utilities, prototypes, and more.

## How it works

When you install the {% data variables.copilot.copilot_sdk_short %}, {% data variables.copilot.copilot_cli_short %} is included automatically. The {% data variables.copilot.copilot_sdk_short %} starts it as a child process and communicates over stdio. There's nothing extra to configure.

![Diagram showing how the SDK client includes the Copilot CLI binary and makes API calls to GitHub Copilot.](/assets/images/help/copilot/copilot-sdk/bundled-cli-architecture.png)

**Key characteristics:**

* {% data variables.copilot.copilot_cli_short %} is included with the {% data variables.copilot.copilot_sdk_short %}—no separate install needed
* The {% data variables.copilot.copilot_sdk_short %} manages the CLI version to ensure compatibility
* Users authenticate through your app (or use env vars / BYOK)
* Sessions are managed per user on their machine

> [!NOTE]
> The Go and Java SDKs do not bundle {% data variables.copilot.copilot_cli_short %}. You must install the CLI separately or set `cliPath` to point to an existing binary. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/local-cli) for details.

## Quick start

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();

const session = await client.createSession({ model: "gpt-4.1" });
const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

For examples in Python, Go, .NET, and Java, see [Default setup](https://github.com/github/copilot-sdk/blob/main/docs/setup/bundled-cli.md#quick-start) in the `github/copilot-sdk` repository. {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Authentication strategies

You need to decide how your users will authenticate. Here are the common patterns:

![Diagram showing authentication options for a bundled CLI: signed-in credentials, app-provided token, or BYOK.](/assets/images/help/copilot/copilot-sdk/bundled-cli-authentication-strategies.png)

### Option A: user's signed-in credentials (simplest)

The user signs in to {% data variables.copilot.copilot_cli_short %} once, and your app uses those credentials. No extra code needed—this is the default behavior.

```typescript
const client = new CopilotClient();
// Default: uses signed-in user credentials
```

### Option B: token via environment variable

Ship your app with instructions to set a token, or set it programmatically:

```typescript
const client = new CopilotClient({
    env: {
        COPILOT_GITHUB_TOKEN: getUserToken(),  // Your app provides the token
    },
});
```

### Option C: BYOK (no {% data variables.product.github %} auth needed)

If you manage your own model provider keys, users don't need {% data variables.product.github %} accounts at all:

```typescript
const client = new CopilotClient();

const session = await client.createSession({
    model: "gpt-4.1",
    provider: {
        type: "openai",
        baseUrl: "https://api.openai.com/v1",
        apiKey: process.env.OPENAI_API_KEY,
    },
});
```

See [AUTOTITLE](/copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key) for full details.

## Session management

Apps typically want named sessions so users can resume conversations:

```typescript
const client = new CopilotClient();

// Create a session tied to the user's project
const sessionId = `project-${projectName}`;
const session = await client.createSession({
    sessionId,
    model: "gpt-4.1",
});

// User closes app...
// Later, resume where they left off
const resumed = await client.resumeSession(sessionId);
```

Session state persists at `~/.copilot/session-state/{sessionId}/`.

## When to move on

| Need | Next guide |
|------|-----------|
| Users signing in with {% data variables.product.github %} accounts | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth) |
| Run on a server instead of user machines | [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services) |
| Use your own model keys | [AUTOTITLE](/copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key) |

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/use-copilot-sdk/session-persistence)
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started)
