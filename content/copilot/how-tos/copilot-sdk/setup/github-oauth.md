---
title: GitHub OAuth setup
shortTitle: GitHub OAuth
intro: >-
  Let users authenticate with their GitHub accounts to use Copilot through your
  application. This supports individual accounts, organization memberships, and
  enterprise identities.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/set-up-copilot-sdk/github-oauth
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

**Best for:** Multi-user apps, internal tools with org access control, SaaS products, apps where users have GitHub accounts.

## How it works

You create a GitHub OAuth App (or GitHub App), users authorize it, and you pass their access token to the SDK. Copilot requests are made on behalf of each authenticated user, using their Copilot subscription.

![Diagram: Sequence diagram showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-github-oauth-diagram-0.png)

**Key characteristics:**
* Each user authenticates with their own GitHub account
* Copilot usage is billed to each user's subscription
* Supports GitHub organizations and enterprise accounts
* Your app never handles model API keys—GitHub manages everything

## Architecture

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-github-oauth-diagram-1.png)

## Step 1: create a GitHub OAuth app

1. Go to **GitHub Settings → Developer Settings → OAuth Apps → New OAuth App**
   (or for organizations: **Organization Settings → Developer Settings**)

1. Fill in:
   * **Application name**: Your app's name
   * **Homepage URL**: Your app's URL
   * **Authorization callback URL**: Your OAuth callback endpoint (e.g., `https://yourapp.com/auth/callback`)

1. Note your **Client ID** and generate a **Client Secret**

> **GitHub App vs OAuth App:** Both work. GitHub Apps offer finer-grained permissions and are recommended for new projects. OAuth Apps are simpler to set up. The token flow is the same from the SDK's perspective.

## Step 2: implement the OAuth flow

Your application handles the standard GitHub OAuth flow. Here's the server-side token exchange:

```typescript
// Server-side: Exchange authorization code for user token
async function handleOAuthCallback(code: string): Promise<string> {
    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        }),
    });

    const data = await response.json();
    return data.access_token; // gho_xxxx or ghu_xxxx
}
```

## Step 3: pass the token to the SDK

Create an SDK client for each authenticated user, passing their token:

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Create a client for an authenticated user
function createClientForUser(userToken: string): CopilotClient {
    return new CopilotClient({
        gitHubToken: userToken,
        useLoggedInUser: false,  // Don't fall back to CLI login
    });
}

// Usage
const client = createClientForUser("gho_user_access_token");
const session = await client.createSession({
    sessionId: `user-${userId}-session`,
    model: "gpt-4.1",
});

const response = await session.sendAndWait({ prompt: "Hello!" });
```

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.session import PermissionHandler

def create_client_for_user(user_token: str) -> CopilotClient:
    return CopilotClient({
        "github_token": user_token,
        "use_logged_in_user": False,
    })

# Usage
client = create_client_for_user("gho_user_access_token")
await client.start()

session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-4.1", session_id=f"user-{user_id}-session")

response = await session.send_and_wait("Hello!")
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"context"
	"fmt"
	copilot "github.com/github/copilot-sdk/go"
)

func createClientForUser(userToken string) *copilot.Client {
	return copilot.NewClient(&copilot.ClientOptions{
		GitHubToken:     userToken,
		UseLoggedInUser: copilot.Bool(false),
	})
}

func main() {
	ctx := context.Background()
	userID := "user1"

	client := createClientForUser("gho_user_access_token")
	client.Start(ctx)
	defer client.Stop()

	session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
		SessionID: fmt.Sprintf("user-%s-session", userID),
		Model:     "gpt-4.1",
	})
	response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
	_ = response
}
```

```golang
func createClientForUser(userToken string) *copilot.Client {
    return copilot.NewClient(&copilot.ClientOptions{
        GitHubToken:     userToken,
        UseLoggedInUser: copilot.Bool(false),
    })
}

// Usage
client := createClientForUser("gho_user_access_token")
client.Start(ctx)
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    SessionID: fmt.Sprintf("user-%s-session", userID),
    Model:     "gpt-4.1",
})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

CopilotClient CreateClientForUser(string userToken) =>
    new CopilotClient(new CopilotClientOptions
    {
        GitHubToken = userToken,
        UseLoggedInUser = false,
    });

var userId = "user1";

await using var client = CreateClientForUser("gho_user_access_token");
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    SessionId = $"user-{userId}-session",
    Model = "gpt-4.1",
});

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
```

```csharp
CopilotClient CreateClientForUser(string userToken) =>
    new CopilotClient(new CopilotClientOptions
    {
        GitHubToken = userToken,
        UseLoggedInUser = false,
    });

// Usage
await using var client = CreateClientForUser("gho_user_access_token");
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    SessionId = $"user-{userId}-session",
    Model = "gpt-4.1",
});

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

CopilotClient createClientForUser(String userToken) throws Exception {
    var client = new CopilotClient(new CopilotClientOptions()
        .setGitHubToken(userToken)
        .setUseLoggedInUser(false)
    );
    client.start().get();
    return client;
}

// Usage — use try-with-resources to ensure cleanup
var userId = "user1";
try (var client = createClientForUser("gho_user_access_token")) {
    var session = client.createSession(new SessionConfig()
        .setSessionId(String.format("user-%s-session", userId))
        .setModel("gpt-4.1")
        .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    ).get();

    var response = session.sendAndWait(new MessageOptions()
        .setPrompt("Hello!")).get();
}
```

{% endcodetab %}
{% endcodetabs %}

## Enterprise and organization access

GitHub OAuth naturally supports enterprise scenarios. When users authenticate with GitHub, their org memberships and enterprise associations come along.

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-github-oauth-diagram-2.png)

### Verify organization membership

After OAuth, check that the user belongs to your organization:

```typescript
async function verifyOrgMembership(
    token: string,
    requiredOrg: string
): Promise<boolean> {
    const response = await fetch("https://api.github.com/user/orgs", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const orgs = await response.json();
    return orgs.some((org: any) => org.login === requiredOrg);
}

// In your auth flow
const token = await handleOAuthCallback(code);
if (!await verifyOrgMembership(token, "my-company")) {
    throw new Error("User is not a member of the required organization");
}
const client = createClientForUser(token);
```

### Enterprise managed users (EMU)

For GitHub Enterprise Managed Users, the flow is identical—EMU users authenticate through GitHub OAuth like any other user. Their enterprise policies (IP restrictions, SAML SSO) are enforced by GitHub automatically.

```typescript
// No special SDK configuration needed for EMU
// Enterprise policies are enforced server-side by GitHub
const client = new CopilotClient({
    gitHubToken: emuUserToken,  // Works the same as regular tokens
    useLoggedInUser: false,
});
```

## Supported token types

| Token Prefix | Source | Works? |
|-------------|--------|--------|
| `gho_` | OAuth user access token | ✅ |
| `ghu_` | GitHub App user access token | ✅ |
| `github_pat_` | Fine-grained personal access token | ✅ |
| `ghp_` | Classic personal access token | ❌ (deprecated) |

## Token lifecycle

![Diagram: Flowchart showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-github-oauth-diagram-3.png)

**Important:** Your application is responsible for token storage, refresh, and expiration handling. The SDK uses whatever token you provide—it doesn't manage the OAuth lifecycle.

### Token refresh pattern

```typescript
async function getOrRefreshToken(userId: string): Promise<string> {
    const stored = await tokenStore.get(userId);

    if (stored && !isExpired(stored)) {
        return stored.accessToken;
    }

    if (stored?.refreshToken) {
        const refreshed = await refreshGitHubToken(stored.refreshToken);
        await tokenStore.set(userId, refreshed);
        return refreshed.accessToken;
    }

    throw new Error("User must re-authenticate");
}
```

## Multi-user patterns

### One client per user (recommended)

Each user gets their own SDK client with their own token. This provides the strongest isolation.

```typescript
const clients = new Map<string, CopilotClient>();

function getClientForUser(userId: string, token: string): CopilotClient {
    if (!clients.has(userId)) {
        clients.set(userId, new CopilotClient({
            gitHubToken: token,
            useLoggedInUser: false,
        }));
    }
    return clients.get(userId)!;
}
```

### Shared CLI with per-request tokens

For a lighter resource footprint, you can run a single external CLI server and pass tokens per session. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services) for this pattern.

## Limitations

| Limitation | Details |
|------------|---------|
| **Copilot subscription required** | Each user needs an active Copilot subscription |
| **Token management is your responsibility** | Store, refresh, and handle expiration |
| **GitHub account required** | Users must have GitHub accounts |
| **Rate limits per user** | Subject to each user's Copilot rate limits |

## When to move on

| Need | Next Guide |
|------|-----------|
| Users without GitHub accounts | [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |
| Run the SDK on servers | [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services) |
| Handle many concurrent users | [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/scaling) |

## Next steps

* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/authenticate)**: Full auth method reference
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services)**: Run the SDK server-side
* **[AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/scaling)**: Handle many users at scale
