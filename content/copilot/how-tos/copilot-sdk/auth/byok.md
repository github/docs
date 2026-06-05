---
title: BYOK (bring your own key)
shortTitle: BYOK
intro: >-
  BYOK allows you to use the Copilot SDK with your own API keys from model
  providers, bypassing GitHub Copilot authentication. This is useful for
  enterprise deployments, custom model hosting, or when you want direct billing
  with your model provider.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /copilot/how-tos/copilot-sdk/authenticate-copilot-sdk/bring-your-own-key
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Supported providers

| Provider | Type Value | Notes |
|----------|------------|-------|
| OpenAI | `"openai"` | OpenAI API and OpenAI-compatible endpoints |
| Azure OpenAI / Azure AI Foundry | `"azure"` | Azure-hosted models |
| Anthropic | `"anthropic"` | Claude models |
| Ollama | `"openai"` | Local models via OpenAI-compatible API |
| Microsoft Foundry Local | `"openai"` | Run AI models locally on your device via OpenAI-compatible API |
| Other OpenAI-compatible | `"openai"` | vLLM, LiteLLM, etc. |

## Quick start: Azure AI Foundry

Azure AI Foundry (formerly Azure OpenAI) is a common BYOK deployment target for enterprises. Here's a complete example:

{% codetabs %}
{% codetab python %}

```python
import asyncio
import os
from copilot import CopilotClient
from copilot.session import PermissionHandler

FOUNDRY_MODEL_URL = "https://your-resource.openai.azure.com/openai/v1/"
# Set FOUNDRY_API_KEY environment variable

async def main():
    client = CopilotClient()
    await client.start()

    session = await client.create_session(on_permission_request=PermissionHandler.approve_all, model="gpt-5.2-codex", provider={
        "type": "openai",
        "base_url": FOUNDRY_MODEL_URL,
        "wire_api": "responses",  # Use "completions" for older models
        "api_key": os.environ["FOUNDRY_API_KEY"],
    })

    done = asyncio.Event()

    def on_event(event):
        if event.type.value == "assistant.message":
            print(event.data.content)
        elif event.type.value == "session.idle":
            done.set()

    session.on(on_event)
    await session.send("What is 2+2?")
    await done.wait()

    await session.disconnect()
    await client.stop()

asyncio.run(main())
```

{% endcodetab %}
{% codetab typescript %}

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const FOUNDRY_MODEL_URL = "https://your-resource.openai.azure.com/openai/v1/";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-5.2-codex",  // Your deployment name
    provider: {
        type: "openai",
        baseUrl: FOUNDRY_MODEL_URL,
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

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
    "context"
    "fmt"
    "os"
    copilot "github.com/github/copilot-sdk/go"
)

func main() {
    ctx := context.Background()
    client := copilot.NewClient(nil)
    if err := client.Start(ctx); err != nil {
        panic(err)
    }
    defer client.Stop()

    session, err := client.CreateSession(ctx, &copilot.SessionConfig{
        Model: "gpt-5.2-codex",  // Your deployment name
        Provider: &copilot.ProviderConfig{
            Type:    "openai",
            BaseURL: "https://your-resource.openai.azure.com/openai/v1/",
            WireAPI: "responses",  // Use "completions" for older models
            APIKey:  os.Getenv("FOUNDRY_API_KEY"),
        },
    })
    if err != nil {
        panic(err)
    }

    response, err := session.SendAndWait(ctx, copilot.MessageOptions{
        Prompt: "What is 2+2?",
    })
    if err != nil {
        panic(err)
    }

    if d, ok := response.Data.(*copilot.AssistantMessageData); ok {
        fmt.Println(d.Content)
    }
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-5.2-codex",  // Your deployment name
    Provider = new ProviderConfig
    {
        Type = "openai",
        BaseUrl = "https://your-resource.openai.azure.com/openai/v1/",
        WireApi = "responses",  // Use "completions" for older models
        ApiKey = Environment.GetEnvironmentVariable("FOUNDRY_API_KEY"),
    },
});

var response = await session.SendAndWaitAsync(new MessageOptions
{
    Prompt = "What is 2+2?",
});
Console.WriteLine(response?.Data.Content);
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;

var client = new CopilotClient();
client.start().get();

var session = client.createSession(new SessionConfig()
    .setModel("gpt-5.2-codex")  // Your deployment name
    .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
    .setProvider(new ProviderConfig()
        .setType("openai")
        .setBaseUrl("https://your-resource.openai.azure.com/openai/v1/")
        .setWireApi("responses")  // Use "completions" for older models
        .setApiKey(System.getenv("FOUNDRY_API_KEY")))
).get();

var response = session.sendAndWait(new MessageOptions()
    .setPrompt("What is 2+2?")).get();
System.out.println(response.getData().content());

client.stop().get();
```

{% endcodetab %}
{% endcodetabs %}

## Provider configuration reference

### ProviderConfig fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | `"openai"` \| `"azure"` \| `"anthropic"` | Provider type (default: `"openai"`) |
| `baseUrl` / `base_url` | string | **Required.** API endpoint URL |
| `apiKey` / `api_key` | string | API key (optional for local providers like Ollama) |
| `bearerToken` / `bearer_token` | string | Bearer token auth (takes precedence over apiKey) |
| `wireApi` / `wire_api` | `"completions"` \| `"responses"` | Select `"completions"` for broad model compatibility (the Chat Completions API); select `"responses"` for multi-turn state management, tool namespacing, and reasoning support (the Responses API). Anthropic models always use the Messages API regardless of this setting. |
| `azure.apiVersion` / `azure.api_version` | string | Azure API version (default: `"2024-10-21"`) |

### Wire API format

The `wireApi` setting determines which OpenAI API format to use:

* **`"completions"`** (default) - Chat Completions API (`/chat/completions`) for broad model compatibility.
* **`"responses"`** - Responses API for multi-turn state management, tool namespacing, and reasoning support.

Anthropic models always use the Anthropic Messages API regardless of this setting.

### Type-specific notes

**OpenAI (`type: "openai"`)**
* Works with OpenAI API and any OpenAI-compatible endpoint
* `baseUrl` should include the full path (e.g., `https://api.openai.com/v1`)

**Azure (`type: "azure"`)**
* Use for native Azure OpenAI endpoints
* `baseUrl` should be just the host (e.g., `https://my-resource.openai.azure.com`)
* Do NOT include `/openai/v1` in the URL—the SDK handles path construction

**Anthropic (`type: "anthropic"`)**
* For direct Anthropic API access
* Uses Claude-specific API format

## Example configurations

### OpenAI direct

```typescript
provider: {
    type: "openai",
    baseUrl: "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
}
```

### Azure OpenAI (native Azure endpoint)

Use `type: "azure"` for endpoints at `*.openai.azure.com`:

```typescript
provider: {
    type: "azure",
    baseUrl: "https://my-resource.openai.azure.com",  // Just the host
    apiKey: process.env.AZURE_OPENAI_KEY,
    azure: {
        apiVersion: "2024-10-21",
    },
}
```

### Azure AI Foundry (OpenAI-compatible endpoint)

For Azure AI Foundry deployments with `/openai/v1/` endpoints, use `type: "openai"`:

```typescript
provider: {
    type: "openai",
    baseUrl: "https://your-resource.openai.azure.com/openai/v1/",
    apiKey: process.env.FOUNDRY_API_KEY,
    wireApi: "responses",  // For GPT-5 series models
}
```

### Ollama (local)

```typescript
provider: {
    type: "openai",
    baseUrl: "http://localhost:11434/v1",
    // No apiKey needed for local Ollama
}
```

### Microsoft Foundry Local

[Microsoft Foundry Local](https://foundrylocal.ai) lets you run AI models locally on your own device with an OpenAI-compatible API. Install it via the Foundry Local CLI, then point the SDK at your local endpoint:

```typescript
provider: {
    type: "openai",
    baseUrl: "http://localhost:<PORT>/v1",
    // No apiKey needed for local Foundry Local
}
```

> [!NOTE]
> Foundry Local starts on a **dynamic port**—the port is not fixed. Use `foundry service status` to confirm the port the service is currently listening on, then use that port in your `baseUrl`.

To get started with Foundry Local:

```bash
# Windows: Install Foundry Local CLI (requires winget)
winget install Microsoft.FoundryLocal

# macOS / Linux: see https://foundrylocal.ai for installation instructions
# List available models
foundry model list

# Run a model (starts the local server automatically)
foundry model run phi-4-mini

# Check the port the service is running on
foundry service status
```

### Anthropic

```typescript
provider: {
    type: "anthropic",
    baseUrl: "https://api.anthropic.com",
    apiKey: process.env.ANTHROPIC_API_KEY,
}
```

### Bearer token authentication

Some providers require bearer token authentication instead of API keys:

```typescript
provider: {
    type: "openai",
    baseUrl: "https://my-custom-endpoint.example.com/v1",
    bearerToken: process.env.MY_BEARER_TOKEN,  // Sets Authorization header
}
```

> [!NOTE]
> The `bearerToken` option accepts a **static token string** only. The SDK does not refresh this token automatically. If your token expires, requests will fail and you'll need to create a new session with a fresh token.

## Custom model listing

When using BYOK, the CLI server may not know which models your provider supports. You can supply a custom `onListModels` handler at the client level so that `client.listModels()` returns your provider's models in the standard `ModelInfo` format. This lets downstream consumers discover available models without querying the CLI.

{% codetabs %}
{% codetab typescript %}

```typescript
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

{% endcodetab %}
{% codetab python %}

```python
from copilot import CopilotClient
from copilot.client import ModelInfo, ModelCapabilities, ModelSupports, ModelLimits

client = CopilotClient(
    on_list_models=lambda: [
        ModelInfo(
            id="my-custom-model",
            name="My Custom Model",
            capabilities=ModelCapabilities(
                supports=ModelSupports(vision=False, reasoning_effort=False),
                limits=ModelLimits(max_context_window_tokens=128000),
            ),
        )
    ],
)
```

{% endcodetab %}
{% codetab go %}

```golang
package main

import (
    "context"
    copilot "github.com/github/copilot-sdk/go"
)

func main() {
    client := copilot.NewClient(&copilot.ClientOptions{
        OnListModels: func(ctx context.Context) ([]copilot.ModelInfo, error) {
            return []copilot.ModelInfo{
                {
                    ID:   "my-custom-model",
                    Name: "My Custom Model",
                    Capabilities: copilot.ModelCapabilities{
                        Supports: copilot.ModelSupports{Vision: false, ReasoningEffort: false},
                        Limits:   copilot.ModelLimits{MaxContextWindowTokens: 128000},
                    },
                },
            }, nil
        },
    })
    _ = client
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
using GitHub.Copilot;

var client = new CopilotClient(new CopilotClientOptions
{
    OnListModels = (ct) => Task.FromResult<IList<ModelInfo>>(new List<ModelInfo>
    {
        new()
        {
            Id = "my-custom-model",
            Name = "My Custom Model",
            Capabilities = new ModelCapabilities
            {
                Supports = new ModelSupports { Vision = false, ReasoningEffort = false },
                Limits = new ModelLimits { MaxContextWindowTokens = 128000 }
            }
        }
    })
});
```

{% endcodetab %}
{% codetab java %}

```java
import com.github.copilot.CopilotClient;
import com.github.copilot.rpc.*;
import java.util.List;
import java.util.concurrent.CompletableFuture;

var client = new CopilotClient(new CopilotClientOptions()
    .setOnListModels(() -> CompletableFuture.completedFuture(List.of(
        new ModelInfo()
            .setId("my-custom-model")
            .setName("My Custom Model")
            .setCapabilities(new ModelCapabilities()
                .setSupports(new ModelSupports().setVision(false).setReasoningEffort(false))
                .setLimits(new ModelLimits().setMaxContextWindowTokens(128000)))
    )))
);
```

{% endcodetab %}
{% endcodetabs %}

Results are cached after the first call, just like the default behavior. The handler completely replaces the CLI's `models.list` RPC—no fallback to the server occurs.

## Limitations

When using BYOK, be aware of these limitations:

### Identity limitations

BYOK authentication uses **static credentials only**. 

You must use an API key or static bearer token that you manage yourself.

### Feature limitations

Some Copilot features may behave differently with BYOK:

* **Model availability** - Only models supported by your provider are available
* **Rate limiting** - Subject to your provider's rate limits, not Copilot's
* **Usage tracking** - Usage is tracked by your provider, not GitHub Copilot
* **Premium requests** - Do not count against Copilot premium request quotas

### Provider-specific limitations

| Provider | Limitations |
|----------|-------------|
| Azure AI Foundry | No Entra ID auth; must use API keys |
| Ollama | No API key; local only; model support varies |
| [Microsoft Foundry Local](https://foundrylocal.ai) | Local only; model availability depends on device hardware; no API key required |
| OpenAI | Subject to OpenAI rate limits and quotas |

## Troubleshooting

### "Model not specified" error

When using BYOK, the `model` parameter is **required**:

```typescript
// ❌ Error: Model required with custom provider
const session = await client.createSession({
    provider: { type: "openai", baseUrl: "..." },
});

// ✅ Correct: Model specified
const session = await client.createSession({
    model: "gpt-4",  // Required!
    provider: { type: "openai", baseUrl: "..." },
});
```

### Azure endpoint type confusion

For Azure OpenAI endpoints (`*.openai.azure.com`), use the correct type:

<!-- docs-validate: hidden -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    provider: {
        type: "azure",
        baseUrl: "https://my-resource.openai.azure.com",
    },
});
```

<!-- /docs-validate: hidden -->

```typescript
// ❌ Wrong: Using "openai" type with native Azure endpoint
provider: {
    type: "openai",  // This won't work correctly
    baseUrl: "https://my-resource.openai.azure.com",
}

// ✅ Correct: Using "azure" type
provider: {
    type: "azure",
    baseUrl: "https://my-resource.openai.azure.com",
}
```

However, if your Azure AI Foundry deployment provides an OpenAI-compatible endpoint path (e.g., `/openai/v1/`), use `type: "openai"`:

<!-- docs-validate: hidden -->

```typescript
import { CopilotClient } from "@github/copilot-sdk";

const client = new CopilotClient();
const session = await client.createSession({
    model: "gpt-4.1",
    provider: {
        type: "openai",
        baseUrl: "https://your-resource.openai.azure.com/openai/v1/",
    },
});
```

<!-- /docs-validate: hidden -->

```typescript
// ✅ Correct: OpenAI-compatible Azure AI Foundry endpoint
provider: {
    type: "openai",
    baseUrl: "https://your-resource.openai.azure.com/openai/v1/",
}
```

### Connection refused (Ollama)

Ensure Ollama is running and accessible:

```bash
# Check Ollama is running
curl http://localhost:11434/v1/models

# Start Ollama if not running
ollama serve
```

### Connection refused (Foundry Local)

Foundry Local uses a dynamic port that may change between restarts. Confirm the active port:

```bash
# Check the service status and port
foundry service status
```

Update your `baseUrl` to match the port shown in the output. If the service is not running, start a model to launch it:

```bash
foundry model run phi-4-mini
```

### Authentication failed

1. Verify your API key is correct and not expired
1. Check the `baseUrl` matches your provider's expected format
1. For bearer tokens, ensure the full token is provided (not just a prefix)

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth) - Learn about all authentication methods
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/getting-started) - Build your first Copilot-powered app
