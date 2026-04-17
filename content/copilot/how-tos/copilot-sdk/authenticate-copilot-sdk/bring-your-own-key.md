---
title: Bring your own key (BYOK)
shortTitle: Bring your own key (BYOK)
intro: Use {% data variables.copilot.copilot_sdk_short %} with your own API keys from different model providers, bypassing {% data variables.product.prodname_copilot %} authentication.
product: '{% data reusables.gated-features.copilot-sdk %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.copilot-sdk.technical-preview-note %}

Bring your own key (BYOK) allows you to use {% data variables.copilot.copilot_sdk_short %} with your own API keys from model providers, bypassing {% data variables.product.prodname_copilot %} authentication. This is useful for enterprise deployments, custom model hosting, or when you want direct billing with your model provider.

## Supported providers

| Provider | Type value | Notes |
|----------|------------|-------|
| OpenAI | `"openai"` | OpenAI API and OpenAI-compatible endpoints |
| Azure OpenAI / Azure AI Foundry | `"azure"` or `"openai"` | Azure-hosted models (see [Azure endpoint types](#azure-endpoint-type-confusion)) |
| Anthropic | `"anthropic"` | Claude models |
| Ollama | `"openai"` | Local models via OpenAI-compatible API |
| Microsoft Foundry Local | `"openai"` | Run AI models locally on your device via OpenAI-compatible API |
| Other OpenAI-compatible | `"openai"` | vLLM, LiteLLM, and similar |

## Quick start: Azure AI Foundry

Azure AI Foundry (formerly Azure OpenAI) is a common BYOK deployment target for enterprises. The following example shows a complete Node.js/TypeScript setup:

1. Create a session with your Azure AI Foundry endpoint and API key:

   ```typescript copy
   import { CopilotClient } from "@github/copilot-sdk";

   const client = new CopilotClient();
   const session = await client.createSession({
       model: "YOUR-DEPLOYMENT-NAME",
       provider: {
           type: "openai",
           baseUrl: "https://YOUR-RESOURCE.openai.azure.com/openai/v1/",
           wireApi: "responses",  // Use "completions" for older models
           apiKey: process.env.FOUNDRY_API_KEY,
       },
   });

   session.on("assistant.message", (event) => {
       console.log(event.data.content);
   });

   await session.sendAndWait({ prompt: "What is 2+2?" });
   await client.stop();
   ```

Replace `YOUR-RESOURCE` with your Azure resource name and `YOUR-DEPLOYMENT-NAME` with your model deployment name. Set the `FOUNDRY_API_KEY` environment variable to your Azure API key.

For examples in Python, Go, and .NET, see [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository. {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Provider configuration reference

### ProviderConfig fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"openai"` \| `"azure"` \| `"anthropic"` | Provider type. Defaults to `"openai"`. |
| `baseUrl` | string | **Required.** API endpoint URL. |
| `apiKey` | string | API key. Optional for local providers like Ollama. |
| `bearerToken` | string | Bearer token authentication. Takes precedence over `apiKey`. |
| `wireApi` | `"completions"` \| `"responses"` | API format. Defaults to `"completions"`. |
| `azure.apiVersion` | string | Azure API version. Defaults to `"2024-10-21"`. |

### Wire API format

The `wireApi` setting determines which OpenAI API format to use:

* **`"completions"`** (default): Chat Completions API (`/chat/completions`). Use for most models.
* **`"responses"`**: Responses API. Use for GPT-5 series models that support the newer responses format.

### Type-specific notes

**OpenAI (`type: "openai"`)**
* Works with OpenAI API and any OpenAI-compatible endpoint.
* `baseUrl` should include the full path, for example, `https://api.openai.com/v1`.

**Azure (`type: "azure"`)**
* Use for native Azure OpenAI endpoints.
* `baseUrl` should be just the host, for example, `https://YOUR-RESOURCE.openai.azure.com`.
* Do not include `/openai/v1` in the URL—the SDK handles path construction.

**Anthropic (`type: "anthropic"`)**
* For direct Anthropic API access.
* Uses Claude-specific API format.

## Example configurations

### OpenAI direct

```typescript copy
provider: {
    type: "openai",
    baseUrl: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
}
```

### Azure OpenAI (native Azure endpoint)

Use `type: "azure"` for endpoints at `*.openai.azure.com`:

```typescript copy
provider: {
    type: "azure",
    baseUrl: "https://YOUR-RESOURCE.openai.azure.com",  // Just the host
    apiKey: process.env.AZURE_OPENAI_KEY,
    azure: {
        apiVersion: "2024-10-21",
    },
}
```

Replace `YOUR-RESOURCE` with your Azure resource name.

### Azure AI Foundry (OpenAI-compatible endpoint)

For Azure AI Foundry deployments with `/openai/v1/` endpoints, use `type: "openai"`:

```typescript copy
provider: {
    type: "openai",
    baseUrl: "https://YOUR-RESOURCE.openai.azure.com/openai/v1/",
    apiKey: process.env.FOUNDRY_API_KEY,
    wireApi: "responses",  // For GPT-5 series models
}
```

### Ollama (local)

```typescript copy
provider: {
    type: "openai",
    baseUrl: "http://localhost:11434/v1",
    // No apiKey needed for local Ollama
}
```

### Microsoft Foundry Local

[Microsoft Foundry Local](https://foundrylocal.ai) lets you run AI models locally with an OpenAI-compatible API. Install it via the Foundry Local CLI, then point the SDK at your local endpoint:

```typescript copy
provider: {
    type: "openai",
    baseUrl: "http://localhost:YOUR-PORT/v1",
    // No apiKey needed for local Foundry Local
}
```

> [!NOTE]
> Foundry Local starts on a dynamic port that is not fixed. Run `foundry service status` to confirm the port the service is currently listening on, then use that port in your `baseUrl`.

To get started with Foundry Local:

```bash copy
# Windows: Install Foundry Local CLI (requires winget)
winget install Microsoft.FoundryLocal

# List available models
foundry model list

# Run a model (starts the local server automatically)
foundry model run phi-4-mini

# Check the port the service is running on
foundry service status
```

For macOS/Linux installation, see [foundrylocal.ai](https://foundrylocal.ai).

### Anthropic

```typescript copy
provider: {
    type: "anthropic",
    baseUrl: "https://api.anthropic.com",
    apiKey: process.env.ANTHROPIC_API_KEY,
}
```

### Bearer token authentication

Some providers require bearer token authentication instead of API keys:

```typescript copy
provider: {
    type: "openai",
    baseUrl: "https://YOUR-CUSTOM-ENDPOINT.example.com/v1",
    bearerToken: process.env.MY_BEARER_TOKEN,  // Sets Authorization header
}
```

> [!NOTE]
> The `bearerToken` option accepts a static token string only. The SDK does not refresh this token automatically. If your token expires, requests will fail and you'll need to create a new session with a fresh token.

## Custom model listing

When using BYOK, the CLI server may not know which models your provider supports. You can supply a custom `onListModels` handler at the client level so that `client.listModels()` returns your provider's models in the standard `ModelInfo` format:

```typescript copy
import { CopilotClient } from "@github/copilot-sdk";
import type { ModelInfo } from "@github/copilot-sdk";

const client = new CopilotClient({
    onListModels: () => [
        {
            id: "my-custom-model",
            name: "My Custom Model",
            capabilities: {
                supports: { vision: false, reasoningEffort: false },
                limits: { max_context_window_tokens: 128000 },
            },
        },
    ],
});
```

Results are cached after the first call. The handler completely replaces the CLI's `models.list` RPC—no fallback to the server occurs.

For examples in Python, Go, and .NET, see [BYOK](https://github.com/github/copilot-sdk/blob/main/docs/auth/byok.md) in the `github/copilot-sdk` repository. {% data reusables.copilot.copilot-sdk.java-sdk-link %}

## Limitations

### Identity limitations

BYOK authentication uses static credentials only. The following identity providers are not supported:

* Microsoft Entra ID (Azure AD)—no support for Entra managed identities or service principals.
* Third-party identity providers—no OIDC, SAML, or other federated identity.
* Managed identities—Azure Managed Identity is not supported.

You must use an API key or static bearer token that you manage yourself.

> [!NOTE]
> While Entra ID does issue bearer tokens, these tokens are short-lived (typically one hour) and require automatic refresh via the Azure Identity SDK. The `bearerToken` option only accepts a static string—there is no callback mechanism for the SDK to request fresh tokens. For long-running workloads requiring Entra authentication, you would need to implement your own token refresh logic and create new sessions with updated tokens.

### Feature limitations

Some {% data variables.product.prodname_copilot_short %} features may behave differently with BYOK:

* **Model availability**: Only models supported by your provider are available.
* **Rate limiting**: Subject to your provider's rate limits, not {% data variables.product.prodname_copilot_short %}'s.
* **Usage tracking**: Usage is tracked by your provider, not {% data variables.product.github %}.
* **Premium requests**: Do not count against {% data variables.product.prodname_copilot_short %} premium request quotas.

### Provider-specific limitations

| Provider | Limitations |
|----------|-------------|
| Azure AI Foundry | No Entra ID auth; must use API keys. |
| Ollama | No API key; local only; model support varies. |
| Microsoft Foundry Local | Local only; model availability depends on device hardware; no API key required. |
| OpenAI | Subject to OpenAI rate limits and quotas. |

## Troubleshooting

### "Model not specified" error

When using BYOK, the `model` parameter is required:

```typescript
// Error: model required with custom provider
const session = await client.createSession({
    provider: { type: "openai", baseUrl: "..." },
});

// Correct: model specified
const session = await client.createSession({
    model: "gpt-4",
    provider: { type: "openai", baseUrl: "..." },
});
```

### Azure endpoint type confusion

For Azure OpenAI endpoints (`*.openai.azure.com`), make sure you use the correct provider type:

```typescript
// Wrong: using "openai" type with native Azure endpoint
provider: {
    type: "openai",
    baseUrl: "https://YOUR-RESOURCE.openai.azure.com",
}

// Correct: using "azure" type
provider: {
    type: "azure",
    baseUrl: "https://YOUR-RESOURCE.openai.azure.com",
}
```

If your Azure AI Foundry deployment provides an OpenAI-compatible endpoint path (for example, `/openai/v1/`), use `type: "openai"` instead:

```typescript
// Correct: OpenAI-compatible Azure AI Foundry endpoint
provider: {
    type: "openai",
    baseUrl: "https://YOUR-RESOURCE.openai.azure.com/openai/v1/",
}
```

### Connection refused (Ollama)

Ensure Ollama is running and accessible:

```bash copy
# Check Ollama is running
curl http://localhost:11434/v1/models

# Start Ollama if not running
ollama serve
```

### Connection refused (Foundry Local)

Foundry Local uses a dynamic port that may change between restarts. Confirm the active port:

```bash copy
foundry service status
```

Update your `baseUrl` to match the port shown in the output. If the service is not running, start a model to launch it:

```bash copy
foundry model run phi-4-mini
```

### Authentication failed

1. Verify your API key is correct and not expired.
1. Check that the `baseUrl` matches your provider's expected format.
1. For bearer tokens, ensure the full token is provided, not just a prefix.
