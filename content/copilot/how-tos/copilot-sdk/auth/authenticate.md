---
title: Authentication
shortTitle: Authenticate
intro: >-
  The GitHub Copilot SDK supports multiple authentication methods to fit
  different use cases. Choose the method that best matches your deployment
  scenario.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/authenticate-copilot-sdk
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Authentication methods

| Method | Use Case | Copilot Subscription Required |
|--------|----------|-------------------------------|
| [GitHub Signed-in User](#github-signed-in-user) | Interactive apps where users sign in with GitHub | Yes |
| [GitHub OAuth App](#github-oauth-app) | Apps acting on behalf of users via OAuth | Yes |
| [Environment Variables](#environment-variables) | CI/CD, automation, server-to-server | Yes |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens) | Organization-attributed automation and direct organization billing | No user subscription; organization policy required |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) | Using your own API keys (Microsoft Foundry, OpenAI, and more) | No |

## GitHub signed-in user

This is the default authentication method when running the Copilot CLI interactively. Users authenticate via GitHub OAuth device flow, and the SDK uses their stored credentials.

**How it works:**
1. User runs `copilot` CLI and signs in via GitHub OAuth
1. Credentials are stored securely in the system keychain
1. SDK automatically uses stored credentials

**SDK Configuration:**

{% codetabs %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

// Default: uses logged-in user credentials
await using CopilotClient client = new();
```

{% endcodetab %}
{% codetab go %}

```golang
import copilot "github.com/github/copilot-sdk/go"

// Default: uses logged-in user credentials
client := copilot.NewClient(nil)
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;

// Default: uses logged-in user credentials
var client = new CopilotClient();
client.start().get();
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

# Default: uses logged-in user credentials
client = CopilotClient()
await client.start()
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{Client, ClientOptions};

// Default: uses logged-in user credentials
let client = Client::start(ClientOptions::default()).await?;
```

{% endcodetab %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Default: uses logged-in user credentials
const client = new CopilotClient();
```

{% endcodetab %}
{% endcodetabs %}

**When to use:**
* Desktop applications where users interact directly
* Development and testing environments
* Any scenario where a user can sign in interactively

## GitHub OAuth App

Use an OAuth GitHub App to authenticate users through your application and pass their credentials to the SDK. This enables your application to make Copilot API requests on behalf of users who authorize your app.

**How it works:**
1. User authorizes your OAuth GitHub App
1. Your app receives a user access token (`gho_` or `ghu_` prefix)
1. Pass the token to the SDK through its client configuration

**SDK Configuration:**

{% codetabs %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient(new CopilotClientOptions
{
    GitHubToken = userAccessToken,     // Token from OAuth flow
    UseLoggedInUser = false,           // Don't use stored CLI credentials
});
```

{% endcodetab %}
{% codetab go %}

```golang
import copilot "github.com/github/copilot-sdk/go"

client := copilot.NewClient(&copilot.ClientOptions{
    GitHubToken:       userAccessToken,      // Token from OAuth flow
    UseLoggedInUser:   copilot.Bool(false),  // Don't use stored CLI credentials
})
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(new CopilotClientOptions()
    .setGitHubToken(userAccessToken)  // Token from OAuth flow
    .setUseLoggedInUser(false)        // Don't use stored CLI credentials
);
client.start().get();
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

client = CopilotClient({
    "github_token": user_access_token,  # Token from OAuth flow
    "use_logged_in_user": False,        # Don't use stored CLI credentials
})
await client.start()
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{Client, ClientOptions};

let client = Client::start(
    ClientOptions::default()
        .with_github_token(user_access_token)
        .with_use_logged_in_user(false),
).await?;
```

{% endcodetab %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    gitHubToken: userAccessToken,  // Token from OAuth flow
    useLoggedInUser: false,        // Don't use stored CLI credentials
});
```

{% endcodetab %}
{% endcodetabs %}

**Supported token types:**
* `gho_` - OAuth user access tokens
* `ghu_` - GitHub App user access tokens
* `github_pat_` - Fine-grained personal access tokens

**Not supported:**
* `ghp_` - Classic personal access tokens (deprecated)

**When to use:**
* Web applications where users sign in via GitHub
* SaaS applications building on top of Copilot
* Any multi-user application where you need to make requests on behalf of different users

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/github-oauth).

## Rotating session-scoped GitHub tokens

For multi-user services and integrations, set a token provider on each session instead of storing one long-lived token. The runtime calls the provider for the effective GitHub host and identifies the request as `initial` or `refresh`. The session ID is absent only when a cloud session has not received its ID yet.

Return a tagged token result or an explicit cancellation. Every token result must include `expiresIn`: the positive number of seconds remaining when the callback completes. Production GitHub tokens typically last eight hours, so `8 * 60 * 60` is a common value. Do not set both the static per-session token and the provider.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
const session = await client.createSession({
    gitHubTokenProvider: async ({ host, sessionId, reason }) => {
        const token = await acquireGitHubToken({ host, sessionId, reason });
        return {
            kind: "token",
            accessToken: token.value,
            expiresIn: token.secondsRemaining,
        };
    },
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
async def provide_github_token(args):
    token = await acquire_github_token(
        host=args["host"],
        session_id=args["session_id"],
        reason=args["reason"],
    )
    return {
        "kind": "token",
        "accessToken": token.value,
        "expiresIn": token.seconds_remaining,
    }


session = await client.create_session(github_token_provider=provide_github_token)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
	GitHubTokenProvider: func(args copilot.GitHubTokenProviderArgs) (*copilot.GitHubTokenProviderResult, error) {
		token, secondsRemaining, err := acquireGitHubToken(args.Host, args.SessionID, args.Reason)
		if err != nil {
			return nil, err
		}
		return copilot.GitHubTokenResult(&copilot.GitHubToken{
			AccessToken: token,
			ExpiresIn:   secondsRemaining,
		}), nil
	},
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    GitHubTokenProvider = async args =>
    {
        var token = await AcquireGitHubTokenAsync(args.Host, args.SessionId, args.Reason);
        return GitHubTokenProviderResult.FromToken(new GitHubToken
        {
            AccessToken = token.Value,
            ExpiresIn = token.SecondsRemaining,
        });
    },
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var session = client.createSession(new SessionConfig()
    .setGitHubTokenProvider(args ->
        acquireGitHubToken(args.host(), args.sessionId(), args.reason())
            .thenApply(token -> GitHubTokenProviderResult.token(
                token.value(), token.secondsRemaining())))
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
).get();
```

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
let provider = Arc::new(|args: GitHubTokenProviderArgs| async move {
    let token = acquire_github_token(&args.host, args.session_id.as_ref(), args.reason).await?;
    Ok(GitHubTokenProviderResult::Token(GitHubToken::new(
        token.value,
        token.seconds_remaining,
    )))
});

let session = client
    .create_session(SessionConfig::default().with_github_token_provider(provider))
    .await?;
```

{% endcodetab %}
{% endcodetabs %}

The runtime performs the `initial` acquisition as part of session creation or resume. A cancelled acquisition, provider error, invalid response, or token without a stable account identity rejects the create or resume operation. The runtime does not fall back to ambient authentication.

After the session is established, the runtime performs async preflight before each credential-consuming operation. It requests a `refresh` when the current token has one hour or less remaining. Idle sessions are not refreshed until their next credential-consuming operation. The runtime does not use background timers, rejection-driven replay, 401/403 challenge propagation, or upscope for this callback.

## Environment variables

For automation, CI/CD pipelines, and server-to-server scenarios, you can authenticate using environment variables.

For organization-attributed automation that should not use a user's personal access token, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens).

**Supported environment variables (in priority order):**
1. `COPILOT_GITHUB_TOKEN` - Recommended for explicit Copilot usage
1. `GH_TOKEN` - GitHub CLI compatible
1. `GITHUB_TOKEN` - GitHub Actions compatible

**How it works:**
1. Set one of the supported environment variables with a valid token
1. The SDK automatically detects and uses the token

**SDK Configuration:**

No code changes needed—the SDK automatically detects environment variables:

{% codetabs %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

// Token is read from environment variable automatically
await using CopilotClient client = new();
```

{% endcodetab %}
{% codetab go %}

```golang
import copilot "github.com/github/copilot-sdk/go"

// Token is read from environment variable automatically
client := copilot.NewClient(nil)
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;

// Token is read from environment variable automatically
var client = new CopilotClient();
client.start().get();
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

# Token is read from environment variable automatically
client = CopilotClient()
await client.start()
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{Client, ClientOptions};

// Token is read from environment variable automatically
let client = Client::start(ClientOptions::default()).await?;
```

{% endcodetab %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Token is read from environment variable automatically
const client = new CopilotClient();
```

{% endcodetab %}
{% endcodetabs %}

**When to use:**
* CI/CD pipelines (GitHub Actions, Jenkins, and more)
* Automated testing
* Server-side applications with service accounts
* Development when you don't want to use interactive login

## BYOK (bring your own key)

BYOK allows you to use your own API keys from model providers like Microsoft Foundry, OpenAI, or Anthropic. This bypasses GitHub Copilot authentication entirely.

**Key benefits:**
* No GitHub Copilot subscription required
* Use enterprise model deployments
* Direct billing with your model provider
* Support for Microsoft Foundry, OpenAI, Anthropic, and OpenAI-compatible endpoints

**See the [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) for complete details**, including:
* Microsoft Foundry setup
* Provider configuration options
* Limitations and considerations
* Complete code examples

## Authentication priority

When multiple authentication methods are available, the SDK uses them in this priority order:

1. **Explicit `gitHubToken`** - Token passed directly to the SDK client or session configuration
1. **Direct API token** - `GITHUB_COPILOT_API_TOKEN` with `COPILOT_API_URL`
1. **Environment variable tokens** - `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
1. **Stored OAuth credentials** - From previous `copilot` CLI login
1. **GitHub CLI** - `gh auth` credentials

For multi-user server mode, pass a per-session `gitHubToken` so each session runs with the correct GitHub identity; see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy).

## Disabling auto-login

To prevent the SDK from automatically using stored credentials or `gh` CLI auth, configure it to disable logged-in-user fallback:

{% codetabs %}
{% codetab dotnet %}

```csharp
await using var client = new CopilotClient(new CopilotClientOptions
{
    UseLoggedInUser = false,  // Only use explicit tokens
});
```

{% endcodetab %}
{% codetab go %}

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    UseLoggedInUser: copilot.Bool(false),  // Only use explicit tokens
})
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient(new CopilotClientOptions()
    .setUseLoggedInUser(false)  // Only use explicit tokens
);
client.start().get();
```

{% endcodetab %}
{% codetab python %}

```python
client = CopilotClient({
    "use_logged_in_user": False,  # Only use explicit tokens
})
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{Client, ClientOptions};

let client = Client::start(
    ClientOptions::default().with_use_logged_in_user(false),
).await?;
```

{% endcodetab %}
{% codetab typescript %}

```typescript
const client = new CopilotClient({
    useLoggedInUser: false,  // Only use explicit tokens
});
```

{% endcodetab %}
{% endcodetabs %}

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) - Learn how to use your own API keys
* [AUTOTITLE](/copilot/get-started/sdk-quickstart) - Build your first Copilot-powered app
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp) - Connect to external tools
