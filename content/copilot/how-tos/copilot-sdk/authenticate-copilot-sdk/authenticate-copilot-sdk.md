---
title: Authenticating with Copilot SDK
shortTitle: Authenticate Copilot SDK
intro: 'Choose the authentication method in {% data variables.copilot.copilot_sdk %} that best fits your deployment scenario.'
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

## Authentication methods overview

{% data variables.copilot.copilot_sdk %} supports multiple authentication methods to fit different use cases.

| Method | Use case | {% data variables.product.prodname_copilot_short %} subscription required |
|--------|----------|-------------------------------|
| [GitHub signed-in user](#github-signed-in-user) | Interactive apps where users sign in with {% data variables.product.github %} | Yes |
| [OAuth {% data variables.product.github %} App](#oauth-github-app) | Apps acting on behalf of users via OAuth | Yes |
| [Environment variables](#environment-variables) | CI/CD, automation, server-to-server | Yes |
| [BYOK (bring your own key)](#byok-bring-your-own-key) | Using your own API keys (Azure AI Foundry, OpenAI, etc) | No |

## GitHub signed-in user

This is the default authentication method when running the {% data variables.copilot.copilot_cli %} interactively, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli). Users authenticate via the {% data variables.product.github %} OAuth device flow, and the SDK uses their stored credentials.

**How it works:**
1. User runs the `copilot` CLI and signs in via {% data variables.product.github %} OAuth.
1. Credentials are stored securely in the system keychain.
1. The SDK automatically uses stored credentials.

**SDK configuration:**

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Default: uses signed-in user credentials
const client = new CopilotClient();
```

For examples in other languages, see [Authentication](https://github.com/github/copilot-sdk/blob/main/docs/auth/index.md#github-signed-in-user) in the `github/copilot-sdk` repository.

**When to use this method:**

* Desktop applications where users interact directly
* Development and testing environments
* Any scenario where a user can sign in interactively

## OAuth GitHub App

Use an OAuth {% data variables.product.github %} App to authenticate users through your application and pass their credentials to the SDK. This lets your application make {% data variables.product.prodname_copilot %} API requests on behalf of users who authorize your app.

**How it works:**
1. User authorizes your OAuth {% data variables.product.github %} App.
1. Your app receives a user access token (`gho_` or `ghu_` prefix).
1. Pass the token to the SDK via the `githubToken` option.

**SDK configuration:**

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    githubToken: userAccessToken,  // Token from OAuth flow
    useLoggedInUser: false,        // Don't use stored CLI credentials
});
```

For examples in other languages, see [Authentication](https://github.com/github/copilot-sdk/blob/main/docs/auth/index.md#oauth-github-app) in the `github/copilot-sdk` repository.

**Supported token types:**

* `gho_` — OAuth user access tokens
* `ghu_` — {% data variables.product.github %} App user access tokens
* `github_pat_` — {% data variables.product.pat_v2_caps_plural %}

**Not supported:**

* `ghp_` — {% data variables.product.pat_v1_caps_plural %} (closing down)

**When to use this method:**

* Web applications where users sign in via {% data variables.product.github %}
* Software-as-a-service (SaaS) applications building on top of {% data variables.product.prodname_copilot %}
* Any multi-user application where you need to make requests on behalf of different users

## Environment variables

For automation, CI/CD pipelines, and server-to-server scenarios, you can authenticate using environment variables.

**Supported environment variables (in priority order):**

1. `COPILOT_GITHUB_TOKEN` — Recommended for explicit {% data variables.product.prodname_copilot_short %} usage
1. `GH_TOKEN` — {% data variables.product.prodname_cli %} compatible
1. `GITHUB_TOKEN` — {% data variables.product.prodname_actions %} compatible

The SDK automatically detects and uses these environment variables without any code changes required:

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Token is read from environment variable automatically
const client = new CopilotClient();
```

**When to use this method:**

* CI/CD pipelines ({% data variables.product.prodname_actions %}, Jenkins, etc)
* Automated testing
* Server-side applications with service accounts
* Development when you don't want to use interactive sign-in

## BYOK (bring your own key)

BYOK lets you use your own API keys from model providers like Azure AI Foundry, OpenAI, or Anthropic. This bypasses {% data variables.product.prodname_copilot %} authentication entirely.

**Key benefits:**

* No {% data variables.product.prodname_copilot %} subscription required
* Use enterprise model deployments
* Direct billing with your model provider
* Support for Azure AI Foundry, OpenAI, Anthropic, and OpenAI-compatible endpoints

For complete setup instructions, including provider configuration options, limitations, and code examples, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key).

## Authentication priority

When multiple authentication methods are available, the SDK uses them in this priority order:

1. **Explicit `githubToken`** — Token passed directly to the SDK constructor
1. **HMAC key** — `CAPI_HMAC_KEY` or `COPILOT_HMAC_KEY` environment variables
1. **Direct API token** — `GITHUB_COPILOT_API_TOKEN` with `COPILOT_API_URL`
1. **Environment variable tokens** — `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
1. **Stored OAuth credentials** — From previous `copilot` CLI sign-in
1. **{% data variables.product.prodname_cli %}** — `gh auth` credentials

## Disabling auto sign-in

To prevent the SDK from automatically using stored credentials or {% data variables.product.prodname_cli %} authentication, set the `useLoggedInUser` option to `false`:

```typescript
const client = new CopilotClient({
    useLoggedInUser: false,  // Only use explicit tokens
});
```

For examples in other languages, see [Authentication](https://github.com/github/copilot-sdk/blob/main/docs/auth/index.md#disabling-auto-login) in the `github/copilot-sdk` repository.

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key) 
* [MCP servers documentation](https://github.com/github/copilot-sdk/blob/main/docs/features/mcp.md)—Connect to external tools using the SDK
