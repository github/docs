---
title: Azure managed identity with BYOK
shortTitle: Azure Managed Identity
intro: >-
  The Copilot SDK's [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) accepts static API keys, but
  Azure deployments often use **Managed Identity** (Microsoft Entra ID) instead
  of long-lived keys. Since the SDK doesn't natively support Microsoft Entra
  authentication, you can use a short-lived bearer token via the `bearer_token`
  provider config field.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/set-up-copilot-sdk/azure-managed-identity
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

This guide shows how to use the Azure Identity SDK's `DefaultAzureCredential` API to authenticate with Microsoft Foundry models through the Copilot SDK.

## How it works

Microsoft Foundry's OpenAI-compatible endpoint accepts bearer tokens from Microsoft Entra ID in place of static API keys. The pattern is:

1. Use `DefaultAzureCredential` to obtain a token for the `https://ai.azure.com/.default` scope
1. Pass the token as the `bearer_token` in the BYOK provider config
1. Refresh the token before it expires (tokens are typically valid for ~1 hour)

![Diagram: Sequence diagram showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-azure-managed-identity-diagram-0.png)

## Code samples

### Prerequisites

Install the Azure Identity and Copilot SDK packages for your language:

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```bash
dotnet add package GitHub.Copilot.SDK
dotnet add package Azure.Core
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```bash
pip install github-copilot-sdk azure-identity
```

{% endcodetab %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```bash
npm install @github/copilot-sdk @azure/identity
```

{% endcodetab %}
{% endcodetabs %}

### Basic usage

Get a token using `DefaultAzureCredential` and pass it as the bearer token in your provider configuration:

{% codetabs %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
using Azure.Core;
using Azure.Identity;
using GitHub.Copilot;

DefaultAzureCredential credential = new(
    DefaultAzureCredential.DefaultEnvironmentVariableName);
AccessToken token = await credential.GetTokenAsync(
    new TokenRequestContext(new[] { "https://ai.azure.com/.default" }));

await using CopilotClient client = new();
string? foundryUrl = Environment.GetEnvironmentVariable("FOUNDRY_RESOURCE_URL");

await using CopilotSession session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-5.5",
    Provider = new ProviderConfig
    {
        Type = "openai",
        BaseUrl = $"{foundryUrl!.TrimEnd('/')}/openai/v1/",
        BearerToken = token.Token,
        WireApi = "responses",
    },
});

AssistantMessageEvent? response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello from Managed Identity!" });
Console.WriteLine(response?.Data.Content);
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
import asyncio
import os

from azure.identity import DefaultAzureCredential
from copilot import CopilotClient
from copilot.session import PermissionHandler, ProviderConfig

SCOPE = "https://ai.azure.com/.default"


async def main():
    # Get a token using Managed Identity, Azure CLI, or other credential chain
    credential = DefaultAzureCredential(require_envvar=True)
    token = credential.get_token(SCOPE).token

    foundry_url = os.environ["FOUNDRY_RESOURCE_URL"]

    client = CopilotClient()
    await client.start()

    session = await client.create_session(
        on_permission_request=PermissionHandler.approve_all,
        model="gpt-5.5",
        provider=ProviderConfig(
            type="openai",
            base_url=f"{foundry_url.rstrip('/')}/openai/v1/",
            bearer_token=token,  # Short-lived bearer token
            wire_api="responses",
        ),
    )

    response = await session.send_and_wait("Hello from Managed Identity!")
    print(response.data.content)

    await client.stop()


asyncio.run(main())
```

{% endcodetab %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { CopilotClient } from "@github/copilot-sdk";

const credential = new DefaultAzureCredential({
  requiredEnvVars: ["AZURE_TOKEN_CREDENTIALS"],
});
const tokenResponse = await credential.getToken(
  "https://ai.azure.com/.default"
);

const client = new CopilotClient();

const session = await client.createSession({
  model: "gpt-5.5",
  provider: {
    type: "openai",
    baseUrl: `${process.env.FOUNDRY_RESOURCE_URL}/openai/v1/`,
    bearerToken: tokenResponse.token,
    wireApi: "responses",
  },
});

const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

{% endcodetab %}
{% endcodetabs %}

### Token refresh for long-running applications

Bearer tokens expire (typically after ~1 hour). For servers or long-running agents, refresh the token before creating each session. The following Python example demonstrates this pattern:

<!-- docs-validate: skip -->

```python
from azure.identity import DefaultAzureCredential
from copilot import CopilotClient
from copilot.session import PermissionHandler, ProviderConfig

SCOPE = "https://ai.azure.com/.default"


class ManagedIdentityCopilotAgent:
    """Copilot agent that refreshes Microsoft Entra tokens for Microsoft Foundry."""

    def __init__(self, foundry_url: str, model: str = "gpt-5.5"):
        self.foundry_url = foundry_url.rstrip("/")
        self.model = model
        self.credential = DefaultAzureCredential(require_envvar=True)
        self.client = CopilotClient()

    def _get_provider_config(self) -> ProviderConfig:
        """Build a ProviderConfig with a fresh bearer token."""
        token = self.credential.get_token(SCOPE).token
        return ProviderConfig(
            type="openai",
            base_url=f"{self.foundry_url}/openai/v1/",
            bearer_token=token,
            wire_api="responses",
        )

    async def chat(self, prompt: str) -> str:
        """Send a prompt and return the response text."""
        # Fresh token for each session
        session = await self.client.create_session(
            on_permission_request=PermissionHandler.approve_all,
            model=self.model,
            provider=self._get_provider_config(),
        )

        response = await session.send_and_wait(prompt)
        await session.disconnect()

        return response.data.content if response else ""
```

## Environment configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `AZURE_TOKEN_CREDENTIALS` | When running in **Azure**, set it to `ManagedIdentityCredential`. When running **locally**, set it to either `dev` or a developer tool credential name, such as `AzureCliCredential`. | `ManagedIdentityCredential` |
| `FOUNDRY_RESOURCE_URL` | Your Microsoft Foundry resource URL | `https://<my-resource>.openai.azure.com` |

No API key environment variable is needed—authentication is handled by `DefaultAzureCredential`, which automatically supports:

* **Managed Identity** (system-assigned or user-assigned): for Azure-hosted apps
* **Azure CLI** (`az login`): for local development
* **Environment variables** (`AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`): for service principals
* **Workload Identity**: for Kubernetes

See the `DefaultAzureCredential` documentation for the full credential chain:

* [.NET](https://aka.ms/azsdk/net/identity/credential-chains#defaultazurecredential-overview)
* [Python](https://aka.ms/azsdk/python/identity/credential-chains#defaultazurecredential-overview)
* [TypeScript](https://aka.ms/azsdk/js/identity/credential-chains#defaultazurecredential-overview)

## When to use this pattern

| Scenario | Recommendation |
|----------|----------------|
| Azure-hosted app with Managed Identity | ✅ Use this pattern |
| App with existing Microsoft Entra service principal | ✅ Use this pattern |
| Local development with `az login` | ✅ Use this pattern |
| Non-Azure environment with static API key | Use [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |
| GitHub Copilot subscription available | Use [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/github-oauth) |

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok): Static API key configuration
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services): Server-side deployment
* [Azure Identity documentation](https://learn.microsoft.com/python/api/overview/azure/identity-readme)
