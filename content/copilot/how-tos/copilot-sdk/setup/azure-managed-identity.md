---
title: Azure managed identity with BYOK
shortTitle: Azure Managed Identity
intro: >-
  The Copilot SDK's [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) accepts static API keys, but
  Azure deployments often use **Managed Identity** (Entra ID) instead of
  long-lived keys. Since the SDK doesn't natively support Entra ID
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

This guide shows how to use `DefaultAzureCredential` from the [Azure Identity](https://learn.microsoft.com/python/api/azure-identity/azure.identity.defaultazurecredential) library to authenticate with Azure AI Foundry models through the Copilot SDK.

## How it works

Azure AI Foundry's OpenAI-compatible endpoint accepts bearer tokens from Entra ID in place of static API keys. The pattern is:

1. Use `DefaultAzureCredential` to obtain a token for the `https://cognitiveservices.azure.com/.default` scope
1. Pass the token as the `bearer_token` in the BYOK provider config
1. Refresh the token before it expires (tokens are typically valid for ~1 hour)

![Diagram: Sequence diagram showing the described process.](/assets/images/help/copilot/copilot-sdk/setup-azure-managed-identity-diagram-0.png)

## Python example

### Prerequisites

```bash
pip install github-copilot-sdk azure-identity
```

### Basic usage

```python
import asyncio
import os

from azure.identity import DefaultAzureCredential
from copilot import CopilotClient
from copilot.session import PermissionHandler, ProviderConfig

COGNITIVE_SERVICES_SCOPE = "https://cognitiveservices.azure.com/.default"


async def main():
    # Get a token using Managed Identity, Azure CLI, or other credential chain
    credential = DefaultAzureCredential()
    token = credential.get_token(COGNITIVE_SERVICES_SCOPE).token

    foundry_url = os.environ["AZURE_AI_FOUNDRY_RESOURCE_URL"]

    client = CopilotClient()
    await client.start()

    session = await client.create_session(
        on_permission_request=PermissionHandler.approve_all,
        model="gpt-4.1",
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

### Token refresh for long-running applications

Bearer tokens expire (typically after ~1 hour). For servers or long-running agents, refresh the token before creating each session:

```python
from azure.identity import DefaultAzureCredential
from copilot import CopilotClient
from copilot.session import PermissionHandler, ProviderConfig

COGNITIVE_SERVICES_SCOPE = "https://cognitiveservices.azure.com/.default"


class ManagedIdentityCopilotAgent:
    """Copilot agent that refreshes Entra ID tokens for Azure AI Foundry."""

    def __init__(self, foundry_url: str, model: str = "gpt-4.1"):
        self.foundry_url = foundry_url.rstrip("/")
        self.model = model
        self.credential = DefaultAzureCredential()
        self.client = CopilotClient()

    def _get_provider_config(self) -> ProviderConfig:
        """Build a ProviderConfig with a fresh bearer token."""
        token = self.credential.get_token(COGNITIVE_SERVICES_SCOPE).token
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

## Node.js / TypeScript example

<!-- docs-validate: skip -->

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { CopilotClient } from "@github/copilot-sdk";

const credential = new DefaultAzureCredential();
const tokenResponse = await credential.getToken(
  "https://cognitiveservices.azure.com/.default"
);

const client = new CopilotClient();

const session = await client.createSession({
  model: "gpt-4.1",
  provider: {
    type: "openai",
    baseUrl: `${process.env.AZURE_AI_FOUNDRY_RESOURCE_URL}/openai/v1/`,
    bearerToken: tokenResponse.token,
    wireApi: "responses",
  },
});

const response = await session.sendAndWait({ prompt: "Hello!" });
console.log(response?.data.content);

await client.stop();
```

## .NET example

<!-- docs-validate: skip -->

```csharp
using Azure.Identity;
using GitHub.Copilot;

var credential = new DefaultAzureCredential();
var token = await credential.GetTokenAsync(
    new Azure.Core.TokenRequestContext(
        new[] { "https://cognitiveservices.azure.com/.default" }));

await using var client = new CopilotClient();
var foundryUrl = Environment.GetEnvironmentVariable("AZURE_AI_FOUNDRY_RESOURCE_URL");

await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-4.1",
    Provider = new ProviderConfig
    {
        Type = "openai",
        BaseUrl = $"{foundryUrl!.TrimEnd('/')}/openai/v1/",
        BearerToken = token.Token,
        WireApi = "responses",
    },
});

var response = await session.SendAndWaitAsync(
    new MessageOptions { Prompt = "Hello from Managed Identity!" });
Console.WriteLine(response?.Data.Content);
```

## Environment configuration

| Variable | Description | Example |
|----------|-------------|---------|
| `AZURE_AI_FOUNDRY_RESOURCE_URL` | Your Azure AI Foundry resource URL | `https://myresource.openai.azure.com` |

No API key environment variable is needed—authentication is handled by `DefaultAzureCredential`, which automatically supports:

* **Managed Identity** (system-assigned or user-assigned): for Azure-hosted apps
* **Azure CLI** (`az login`): for local development
* **Environment variables** (`AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`): for service principals
* **Workload Identity**: for Kubernetes

See the [DefaultAzureCredential documentation](https://learn.microsoft.com/python/api/azure-identity/azure.identity.defaultazurecredential) for the full credential chain.

## When to use this pattern

| Scenario | Recommendation |
|----------|----------------|
| Azure-hosted app with Managed Identity | ✅ Use this pattern |
| App with existing Azure AD service principal | ✅ Use this pattern |
| Local development with `az login` | ✅ Use this pattern |
| Non-Azure environment with static API key | Use [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |
| GitHub Copilot subscription available | Use [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/github-oauth) |

## See also

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok): Static API key configuration
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/backend-services): Server-side deployment
* [Azure Identity documentation](https://learn.microsoft.com/python/api/overview/azure/identity-readme)
