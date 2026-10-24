---
title: Server-to-server authentication
shortTitle: Server To Server Tokens
intro: >-
  Use a short-lived installation access token when a service needs to make
  Copilot requests on behalf of an organization without a user's credentials. In
  GitHub Actions, use the built-in `GITHUB_TOKEN` instead.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## GitHub Actions

For workflows in an organization-owned repository, grant the built-in token permission to make Copilot requests:

```yaml
permissions:
  contents: read
  copilot-requests: write

jobs:
  copilot:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: your-application
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

The organization's **Allow use of Copilot CLI billed to the organization** policy must be enabled. This approach needs no GitHub App or stored authentication secret. For details, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli-in-actions).

## Other services and CI systems

For services outside GitHub Actions:

1. Create a GitHub App with the **Copilot Requests** organization permission set to **Read-only**.
1. Install it on the organization that usage should be attributed and billed to.
1. [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app) with the Copilot permission:

   ```json
   {
     "permissions": {
       "organization_copilot_requests": "read"
     }
   }
   ```

1. Pass the resulting `ghs_` token to the SDK's `gitHubToken`, `github_token`, or equivalent option. For an existing runtime URI, set it as `COPILOT_GITHUB_TOKEN` on the runtime process instead.

The organization must be enabled for Copilot requests from GitHub App installations. Installation tokens expire after one hour.

> [!NOTE]
> No signed-in user is required. `useLoggedInUser: false` turns off automatic credential discovery, including environment variable tokens such as `COPILOT_GITHUB_TOKEN`, so pass the installation token through the SDK's explicit token option.

## Configure the runtime

The following examples assume the minted token is in `INSTALLATION_TOKEN`. They pass it only to the child runtime and disable fallback to stored user credentials.

{% codetabs %}
{% codetab typescript %}

```typescript
import { CopilotClient, RuntimeConnection } from "@github/copilot-sdk";

const token = process.env.INSTALLATION_TOKEN;
if (!token) throw new Error("INSTALLATION_TOKEN is required");

const client = new CopilotClient({
    connection: RuntimeConnection.forStdio(),
    gitHubToken: token,
    useLoggedInUser: false,
});
```

{% endcodetab %}
{% codetab python %}

```python
import os

from copilot import CopilotClient, RuntimeConnection

client = CopilotClient(
    connection=RuntimeConnection.for_stdio(),
    github_token=os.environ["INSTALLATION_TOKEN"],
    use_logged_in_user=False,
)
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
	"log"
	"os"

	copilot "github.com/github/copilot-sdk/go"
)

func main() {
	token, ok := os.LookupEnv("INSTALLATION_TOKEN")
	if !ok {
		log.Fatal("INSTALLATION_TOKEN is required")
	}
	client := copilot.NewClient(&copilot.ClientOptions{
		Connection:      copilot.StdioConnection{},
		GitHubToken:     token,
		UseLoggedInUser: copilot.Bool(false),
	})
	_ = client
}
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::{ClientOptions, Transport};

fn main() {
    let token = std::env::var("INSTALLATION_TOKEN").expect("INSTALLATION_TOKEN is required");
    let options = ClientOptions::new()
        .with_transport(Transport::Stdio)
        .with_github_token(token)
        .with_use_logged_in_user(false);
    drop(options);
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

var token = Environment.GetEnvironmentVariable("INSTALLATION_TOKEN")
    ?? throw new InvalidOperationException("INSTALLATION_TOKEN is required");

await using var client = new CopilotClient(new CopilotClientOptions
{
    Connection = RuntimeConnection.ForStdio(),
    GitHubToken = token,
    UseLoggedInUser = false,
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.CopilotClientOptions;
import java.util.Objects;

var token = Objects.requireNonNull(
    System.getenv("INSTALLATION_TOKEN"), "INSTALLATION_TOKEN is required");

try (var client = new CopilotClient(new CopilotClientOptions()
        .setGitHubToken(token)
        .setUseLoggedInUser(false))) {
    // Use the client.
}
```

{% endcodetab %}
{% endcodetabs %}

For in-process FFI, use the same token option; environment variable tokens in the host process are ignored when `useLoggedInUser` is false. For an existing runtime URI, set `COPILOT_GITHUB_TOKEN` on that runtime process.

## Refresh tokens

Mint a new installation token before the current token expires. For a child process, restart the SDK client with the new token. For an in-process or existing runtime, restart the host runtime with the new token.

## Billing

Usage is attributed and billed to the organization that owns the GitHub App installation.

## Troubleshooting

| Symptom | Check |
|---|---|
| `401 Unauthorized` | The token may be expired or invalid. Mint a new installation token. |
| `403` stating that Copilot requests with GitHub App installation access tokens are not enabled | Confirm the organization supports GitHub App installation authentication for Copilot. |
| `No GitHub OAuth token or Copilot HMAC key provided` or `Not authenticated` | Confirm the installation token is passed through the SDK's explicit token option. With `useLoggedInUser: false`, the runtime ignores `COPILOT_GITHUB_TOKEN` and other environment variable tokens. |
| `403 Forbidden` from the Copilot API | Confirm the installation has the organization **Copilot Requests** permission, then mint a new token. |
| Requested model is unavailable | Confirm the organization's Copilot policy allows the model and the bundled runtime supports it. |
| Wrong account billed | Confirm the installation belongs to the intended organization. |

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/authenticate): other authentication methods and priority
* [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app): GitHub App token creation
