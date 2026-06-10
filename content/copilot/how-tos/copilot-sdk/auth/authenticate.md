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
| [OAuth GitHub App](#oauth-github-app) | Apps acting on behalf of users via OAuth | Yes |
| [Environment Variables](#environment-variables) | CI/CD, automation, server-to-server | Yes |
| [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) | Using your own API keys (Azure AI Foundry, OpenAI, etc.) | No |

## GitHub signed-in user

This is the default authentication method when running the Copilot CLI interactively. Users authenticate via GitHub OAuth device flow, and the SDK uses their stored credentials.

**How it works:**
1. User runs `copilot` CLI and signs in via GitHub OAuth
1. Credentials are stored securely in the system keychain
1. SDK automatically uses stored credentials

**SDK Configuration:**

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Default: uses logged-in user credentials
const client = new CopilotClient();
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
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
	// Default: uses logged-in user credentials
	client := copilot.NewClient(nil)
	_ = client
}
```

```golang
import copilot "github.com/github/copilot-sdk/go"

// Default: uses logged-in user credentials
client := copilot.NewClient(nil)
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

// Default: uses logged-in user credentials
await using var client = new CopilotClient();
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
{% endcodetabs %}

**When to use:**
* Desktop applications where users interact directly
* Development and testing environments
* Any scenario where a user can sign in interactively

## OAuth GitHub App

Use an OAuth GitHub App to authenticate users through your application and pass their credentials to the SDK. This enables your application to make Copilot API requests on behalf of users who authorize your app.

**How it works:**
1. User authorizes your OAuth GitHub App
1. Your app receives a user access token (`gho_` or `ghu_` prefix)
1. Pass the token to the SDK via `gitHubToken` option

**SDK Configuration:**

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient({
    gitHubToken: userAccessToken,  // Token from OAuth flow
    useLoggedInUser: false,        // Don't use stored CLI credentials
});
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
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
	userAccessToken := "token"
	client := copilot.NewClient(&copilot.ClientOptions{
		GitHubToken:     userAccessToken,
		UseLoggedInUser: copilot.Bool(false),
	})
	_ = client
}
```

```golang
import copilot "github.com/github/copilot-sdk/go"

client := copilot.NewClient(&copilot.ClientOptions{
    GitHubToken:     userAccessToken,   // Token from OAuth flow
    UseLoggedInUser: copilot.Bool(false), // Don't use stored CLI credentials
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

var userAccessToken = "token";
await using var client = new CopilotClient(new CopilotClientOptions
{
    GitHubToken = userAccessToken,
    UseLoggedInUser = false,
});
```

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient(new CopilotClientOptions
{
    GitHubToken = userAccessToken,     // Token from OAuth flow
    UseLoggedInUser = false,           // Don't use stored CLI credentials
});
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

## Environment variables

For automation, CI/CD pipelines, and server-to-server scenarios, you can authenticate using environment variables.

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
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Token is read from environment variable automatically
const client = new CopilotClient();
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
{% endcodetabs %}

**When to use:**
* CI/CD pipelines (GitHub Actions, Jenkins, etc.)
* Automated testing
* Server-side applications with service accounts
* Development when you don't want to use interactive login

## BYOK (bring your own key)

BYOK allows you to use your own API keys from model providers like Azure AI Foundry, OpenAI, or Anthropic. This bypasses GitHub Copilot authentication entirely.

**Key benefits:**
* No GitHub Copilot subscription required
* Use enterprise model deployments
* Direct billing with your model provider
* Support for Azure AI Foundry, OpenAI, Anthropic, and OpenAI-compatible endpoints

**See the [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) for complete details**, including:
* Azure AI Foundry setup
* Provider configuration options
* Limitations and considerations
* Complete code examples

## Authentication priority

When multiple authentication methods are available, the SDK uses them in this priority order:

1. **Explicit `gitHubToken`** - Token passed directly to the SDK client or session configuration
1. **HMAC key** - `CAPI_HMAC_KEY` or `COPILOT_HMAC_KEY` environment variables
1. **Direct API token** - `GITHUB_COPILOT_API_TOKEN` with `COPILOT_API_URL`
1. **Environment variable tokens** - `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
1. **Stored OAuth credentials** - From previous `copilot` CLI login
1. **GitHub CLI** - `gh auth` credentials

For multi-user server mode, pass a per-session `gitHubToken` so each session runs with the correct GitHub identity; see [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy).

## Disabling auto-login

To prevent the SDK from automatically using stored credentials or `gh` CLI auth, use the `useLoggedInUser: false` option:

{% codetabs %}
{% codetab typescript %}

```typescript
const client = new CopilotClient({
    useLoggedInUser: false,  // Only use explicit tokens
});
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient

client = CopilotClient({
    "use_logged_in_user": False,
})
```

```python
client = CopilotClient({
    "use_logged_in_user": False,  # Only use explicit tokens
})
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import copilot "github.com/github/copilot-sdk/go"

func main() {
	client := copilot.NewClient(&copilot.ClientOptions{
		UseLoggedInUser: copilot.Bool(false),
	})
	_ = client
}
```

```golang
client := copilot.NewClient(&copilot.ClientOptions{
    UseLoggedInUser: copilot.Bool(false),  // Only use explicit tokens
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
await using var client = new CopilotClient(new CopilotClientOptions
{
    UseLoggedInUser = false,  // Only use explicit tokens
});
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
{% endcodetabs %}

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) - Learn how to use your own API keys
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started) - Build your first Copilot-powered app
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/mcp) - Connect to external tools
