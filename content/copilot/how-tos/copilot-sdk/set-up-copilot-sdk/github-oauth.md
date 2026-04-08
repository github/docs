---
title: Using GitHub OAuth with Copilot SDK
shortTitle: GitHub OAuth
intro: Let users authenticate with their {% data variables.product.github %} accounts to use {% data variables.product.prodname_copilot %} through your application.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

"Connect users to {% data variables.product.prodname_copilot %} by providing {% data variables.product.github %} account authentication directly within your application.

**Best for:** Multi-user apps, internal tools with organization access control, SaaS products, and apps where users already have {% data variables.product.github %} accounts.

## How it works

You create a {% data variables.product.github %} OAuth App (or {% data variables.product.prodname_github_app %}), users authorize it, and you pass their access token to the SDK. {% data variables.product.prodname_copilot_short %} requests are made on behalf of each authenticated user, using their {% data variables.product.prodname_copilot_short %} subscription. For detailed sequence diagrams of this flow and architecture, see the `github/copilot-sdk` [repository](https://github.com/github/copilot-sdk/blob/main/docs/setup/github-oauth.md#how-it-works).

**Key characteristics:**

* Each user authenticates with their own {% data variables.product.github %} account.
* {% data variables.product.prodname_copilot_short %} usage is billed to each user's subscription.
* Supports {% data variables.product.github %} organizations and enterprise accounts.
* Your app never handles model API keys—{% data variables.product.github %} manages everything.

## Step 1: Create a GitHub OAuth App

1. Go to **{% data variables.product.github %} Settings > Developer Settings > OAuth Apps > New OAuth App**. For organizations, go to **Organization Settings > Developer Settings**.
1. Fill in the following fields:
   * **Application name**: Your app's name.
   * **Homepage URL**: Your app's URL.
   * **Authorization callback URL**: Your OAuth callback endpoint (for example, `https://YOUR-APP.com/auth/callback`). Replace `YOUR-APP.com` with your domain.
1. Note your **Client ID** and generate a **Client Secret**.

> [!NOTE]
> Both {% data variables.product.prodname_github_apps %} and OAuth Apps work with the SDK. {% data variables.product.prodname_github_apps %} offer finer-grained permissions and are recommended for new projects. OAuth Apps are simpler to set up. The token flow is the same from the SDK's perspective.

## Step 2: Implement the OAuth flow

Your application handles the standard {% data variables.product.github %} OAuth flow. The following shows the server-side token exchange:

```typescript
// Server-side: exchange authorization code for user token
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

## Step 3: Pass the token to the SDK

Create an SDK client for each authenticated user, passing their token.

### Node.js / TypeScript

```typescript
import { CopilotClient } from "@github/copilot-sdk";

// Create a client for an authenticated user
function createClientForUser(userToken: string): CopilotClient {
    return new CopilotClient({
        githubToken: userToken,
        useLoggedInUser: false,  // Don't fall back to CLI sign-in
    });
}

// Usage
const client = createClientForUser("USER-ACCESS-TOKEN");
const session = await client.createSession({
    sessionId: `user-${userId}-session`,
    model: "gpt-4.1",
});

const response = await session.sendAndWait({ prompt: "Hello!" });
```

Replace `USER-ACCESS-TOKEN` with the user's OAuth access token (for example, `gho_xxxx`).

### Python

```python
from copilot import CopilotClient, PermissionHandler

def create_client_for_user(user_token: str) -> CopilotClient:
    return CopilotClient({
        "github_token": user_token,
        "use_logged_in_user": False,
    })

# Usage
client = create_client_for_user("USER-ACCESS-TOKEN")
await client.start()

session = await client.create_session(
    on_permission_request=PermissionHandler.approve_all,
    model="gpt-4.1",
    session_id=f"user-{user_id}-session",
)

response = await session.send_and_wait({"prompt": "Hello!"})
```

### Go

```golang
func createClientForUser(userToken string) *copilot.Client {
    return copilot.NewClient(&copilot.ClientOptions{
        GithubToken:     userToken,
        UseLoggedInUser: copilot.Bool(false),
    })
}

// Usage
client := createClientForUser("USER-ACCESS-TOKEN")
client.Start(ctx)
defer client.Stop()

session, _ := client.CreateSession(ctx, &copilot.SessionConfig{
    SessionID: fmt.Sprintf("user-%s-session", userID),
    Model:     "gpt-4.1",
})
response, _ := session.SendAndWait(ctx, copilot.MessageOptions{Prompt: "Hello!"})
```

### .NET

```csharp
CopilotClient CreateClientForUser(string userToken) =>
    new CopilotClient(new CopilotClientOptions
    {
        GithubToken = userToken,
        UseLoggedInUser = false,
    });

// Usage
await using var client = CreateClientForUser("USER-ACCESS-TOKEN");
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    SessionId = $"user-{userId}-session",
    Model = "gpt-4.1",
});

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello!" });
```

## Enterprise and organization access

{% data variables.product.github %} OAuth naturally supports enterprise scenarios. When users authenticate with {% data variables.product.github %}, their organization memberships and enterprise associations are included.

### Verify organization membership

After OAuth, you can check that the user belongs to your organization:

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
if (!await verifyOrgMembership(token, "YOUR-ORG")) {
    throw new Error("User is not a member of the required organization");
}
const client = createClientForUser(token);
```

Replace `YOUR-ORG` with your {% data variables.product.github %} organization name.

### Enterprise Managed Users (EMU)

For {% data variables.enterprise.prodname_managed_users %}, the flow is identical. EMU users authenticate through {% data variables.product.github %} OAuth like any other user, and enterprise policies (IP restrictions, SAML SSO) are enforced by {% data variables.product.github %} automatically.

```typescript
// No special SDK configuration needed for EMU
const client = new CopilotClient({
    githubToken: emuUserToken,
    useLoggedInUser: false,
});
```

## Supported token types

| Token prefix | Source                                                             | Supported |
|---|--------------------------------------------------------------------|---|
| `gho_` | OAuth user access token                                            | Yes |
| `ghu_` | {% data variables.product.prodname_github_app %} user access token | Yes |
| `github_pat_` | {% data variables.product.pat_v2_caps %}                           | Yes |
| `ghp_` | {% data variables.product.pat_v1_caps %}                                      | No ({% data variables.release-phases.closing_down %}) |

## Token lifecycle management

Your application is responsible for token storage, refresh, and expiration handling. The SDK uses whatever token you provide—it doesn't manage the OAuth lifecycle.

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
            githubToken: token,
            useLoggedInUser: false,
        }));
    }
    return clients.get(userId)!;
}
```

## Limitations

| Limitation | Details |
|---|---|
| **{% data variables.product.prodname_copilot_short %} subscription required** | Each user needs an active {% data variables.product.prodname_copilot %} subscription. |
| **Token management is your responsibility** | You must store, refresh, and handle token expiration. |
| **{% data variables.product.github %} account required** | Users must have {% data variables.product.github %} accounts. |
| **Rate limits per user** | Usage is subject to each user's {% data variables.product.prodname_copilot_short %} rate limits. |

## Next steps

* To run the SDK on servers, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services).
* To handle many concurrent users, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/scaling).
* For installation and your first message, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).
