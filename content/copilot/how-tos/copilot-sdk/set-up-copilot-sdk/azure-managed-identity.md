---
title: Using Azure Managed Identity with Copilot SDK
shortTitle: Azure Managed Identity
intro: Use Azure Managed Identity (Entra ID) to authenticate {% data variables.copilot.copilot_sdk %} with Azure AI Foundry models instead of static API keys.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
---

{% data reusables.copilot.copilot-sdk.release-state-note %}

Since Azure deployments often use **Managed Identity** (Entra ID) instead of long-lived keys, you need to take extra steps to use BYOK mode in {% data variables.copilot.copilot_sdk_short %}. Because the SDK doesn't natively support Entra ID authentication, you can use a short-lived bearer token via the provider configuration's bearer token field (`bearer_token` in Python, `bearerToken` in Node.js / TypeScript and .NET).

This guide shows how to use `DefaultAzureCredential` from the [Azure Identity](https://learn.microsoft.com/python/api/azure-identity/azure.identity.defaultazurecredential) library to authenticate with Azure AI Foundry models through {% data variables.copilot.copilot_sdk_short %}.

## How it works

Azure AI Foundry's OpenAI-compatible endpoint accepts bearer tokens from Entra ID in place of static API keys. The pattern is:

1. Use `DefaultAzureCredential` to obtain a token for the `https://cognitiveservices.azure.com/.default` scope.
1. Pass the token using the bearer token field in the BYOK provider configuration (`bearer_token` in Python, `bearerToken` in Node.js / TypeScript and .NET).
1. Refresh the token before it expires. Tokens are typically valid for about one hour.

![Diagram showing the authentication flow for Azure Managed Identity with the Copilot SDK.](/assets/images/help/copilot/copilot-sdk/azure-managed-identity-diagram.png)

## Prerequisites

* An Azure subscription with an Azure AI Foundry resource deployed.
* The Azure Identity library installed (`azure-identity` for Python, `@azure/identity` for Node.js, or `Azure.Identity` for .NET).
* {% data variables.copilot.copilot_sdk_short %} installed. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/sdk-getting-started).

## Python example

### Install dependencies

```shell
pip install github-copilot-sdk azure-identity
```

### Basic usage

```python
import asyncio
import os

from azure.identity import DefaultAzureCredential
from copilot import CopilotClient, PermissionHandler

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
        provider={
            "type": "openai",
            "base_url": f"{foundry_url.rstrip('/')}/openai/v1/",
            "bearer_token": token,  # Short-lived bearer token
            "wire_api": "responses",
        },
    )

    response = await session.send_and_wait({"prompt": "Hello from Managed Identity!"})
    print(response.data.content)

    await client.stop()


asyncio.run(main())
```

Replace `AZURE_AI_FOUNDRY_RESOURCE_URL` with the environment variable holding your Azure AI Foundry resource URL (for example, `https://myresource.openai.azure.com`).

### Token refresh for long-running applications

Bearer tokens expire after approximately one hour. For servers or long-running agents, refresh the token before creating each session:

```python
from azure.identity import DefaultAzureCredential
from copilot import CopilotClient, PermissionHandler

COGNITIVE_SERVICES_SCOPE = "https://cognitiveservices.azure.com/.default"


class ManagedIdentityCopilotAgent:
    """Copilot agent that refreshes Entra ID tokens for Azure AI Foundry."""

    def __init__(self, foundry_url: str, model: str = "gpt-4.1"):
        self.foundry_url = foundry_url.rstrip("/")
        self.model = model
        self.credential = DefaultAzureCredential()
        self.client = CopilotClient()

    def _get_provider_config(self) -> dict:
        """Build a provider config dict with a fresh bearer token."""
        token = self.credential.get_token(COGNITIVE_SERVICES_SCOPE).token
        return {
            "type": "openai",
            "base_url": f"{self.foundry_url}/openai/v1/",
            "bearer_token": token,
            "wire_api": "responses",
        }

    async def chat(self, prompt: str) -> str:
        """Send a prompt and return the response text."""
        # Fresh token for each session
        provider = self._get_provider_config()
        session = await self.client.create_session(
            on_permission_request=PermissionHandler.approve_all,
            model=self.model,
            provider=provider,
        )

        response = await session.send_and_wait({"prompt": prompt})
        await session.disconnect()

        return response.data.content if response else ""
```

## Node.js / TypeScript example

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

The following environment variable is required:

| Variable | Description | Example |
|---|---|---|
| `AZURE_AI_FOUNDRY_RESOURCE_URL` | Your Azure AI Foundry resource URL | `https://myresource.openai.azure.com` |

No API key environment variable is needed—authentication is handled by `DefaultAzureCredential`, which automatically supports:

* **Managed Identity** (system-assigned or user-assigned) for Azure-hosted apps.
* **Azure CLI** (`az login`) for local development.
* **Environment variables** (`AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`) for service principals.
* **Workload Identity** for Kubernetes.

For the full credential chain, see the [DefaultAzureCredential documentation](https://learn.microsoft.com/python/api/azure-identity/azure.identity.defaultazurecredential).

## When to use this pattern

| Scenario | Recommendation |
|---|---|
| Azure-hosted app with Managed Identity | Use this pattern. |
| App with existing Azure AD service principal | Use this pattern. |
| Local development with `az login` | Use this pattern. |
| Non-Azure environment with static API key | Use standard BYOK. For more information, see [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository. |
| {% data variables.product.prodname_copilot %} subscription available | Use GitHub OAuth. For more information, see [GitHub OAuth](https://github.com/github/copilot-sdk/blob/main/docs/setup/github-oauth.md) in the `github/copilot-sdk` repository. |

## Further reading

* For static API key configuration, see [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository.
* For server-side deployment, see [AUTOTITLE](/copilot/how-tos/copilot-sdk/set-up-copilot-sdk/backend-services).
* For Azure Identity library documentation, see [Azure Identity client library overview](https://learn.microsoft.com/python/api/overview/azure/identity-readme).
