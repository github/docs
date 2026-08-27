---
title: Usage and billing metrics
shortTitle: Usage and billing
intro: >-
  This guide shows how to read token counts, context-window utilization, AI
  credit cost, and account quota from a Copilot SDK application. Examples are
  shown for TypeScript, Python, Go, .NET, Java, and Rust.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

> [!TIP]
> Each example is functionally equivalent across languages. The TypeScript snippet is expanded by default; select your language from the collapsible blocks to see the same logic in that SDK.

## Overview

The SDK surfaces usage data through two complementary mechanisms:

* **Session events**: ephemeral events the runtime emits as a turn runs. Subscribe to these for real-time, per-API-call data.
* **RPC methods**: request/response calls you make on demand. Use these to snapshot accumulated totals or look up account-level quota.

The table below maps each signal to the API that exposes it.

| Signal | API | Scope | Type |
|---|---|---|---|
| Per-call token counts | `assistant.usage` event | Session | Event |
| Context-window utilization | `session.usage_info` event | Session | Event |
| Context-window breakdown (on demand) | `session.metadata.contextInfo` | Session | RPC |
| Accumulated AI credit and token totals | `session.usage.getMetrics` | Session | RPC |
| Per-model AI credit pricing | `models.list` | Server | RPC |
| Account quota and premium interactions | `account.getQuota` | Server | RPC |

> [!NOTE]
> `session.usage.getMetrics`, `session.metadata.contextInfo`, and `session.metadata.recomputeContextTokens` are marked experimental in the generated RPC surface. In .NET they raise the `GHCP001` experimental diagnostic, which you suppress with `#pragma warning disable GHCP001` or a project-level `<NoWarn>GHCP001</NoWarn>`. Pin both the SDK and the Copilot CLI runtime if your application depends on them.

The field tables below list only the fields used in the examples on this page. The complete, always-current field reference is the generated SDK types plus [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events), which is regenerated from the CLI schema on every dependency bump. Treat those as the source of truth and this page as a task-oriented guide.

## Per-call token counts

The `assistant.usage` event is emitted once for every model API call in a turn (including calls made by sub-agents). It carries the token counts and the billing multiplier for that single call.

The example below uses these fields. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events#assistantusage) for the full list, including cache, reasoning, latency, and tracing fields.

| Field | Type | Description |
|---|---|---|
| `model` | `string` | Model identifier for this call |
| `inputTokens` | `number` | Input tokens consumed |
| `outputTokens` | `number` | Output tokens produced |
| `cost` | `number` | Premium request multiplier applied to this call |

> [!TIP]
> `assistant.usage` is ephemeral, so it is delivered live but not replayed when you resume a session. To read accumulated totals after the fact, call `session.usage.getMetrics` (see [Accumulated AI credit and token totals](#accumulated-ai-credit-and-token-totals)).

{% codetabs %}
{% codetab typescript %}

```typescript
session.on("assistant.usage", (event) => {
    const { model, inputTokens, outputTokens, cost } = event.data;
    console.log(
        `${model}: in=${inputTokens ?? 0} out=${outputTokens ?? 0} cost=${cost ?? 0}`,
    );
});
```

{% endcodetab %}
{% codetab python %}

```python
def on_usage(event):
    if event.type == SessionEventType.ASSISTANT_USAGE:
        data = event.data
        print(f"{data.model}: in={data.input_tokens or 0} out={data.output_tokens or 0} cost={data.cost or 0}")

session.on(on_usage)
```

{% endcodetab %}
{% codetab go %}

```golang
session.On(func(event copilot.SessionEvent) {
    d, ok := event.Data.(*copilot.AssistantUsageData)
    if !ok {
        return
    }
    in, out, cost := int64(0), int64(0), float64(0)
    if d.InputTokens != nil {
        in = *d.InputTokens
    }
    if d.OutputTokens != nil {
        out = *d.OutputTokens
    }
    if d.Cost != nil {
        cost = *d.Cost
    }
    fmt.Printf("%s: in=%d out=%d cost=%g\n", d.Model, in, out, cost)
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
session.On<AssistantUsageEvent>(evt =>
{
    var data = evt.Data;
    Console.WriteLine(
        $"{data.Model}: in={data.InputTokens ?? 0} out={data.OutputTokens ?? 0} cost={data.Cost ?? 0}");
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
session.on(AssistantUsageEvent.class, event -> {
    var data = event.getData();
    long in = data.inputTokens() != null ? data.inputTokens() : 0;
    long out = data.outputTokens() != null ? data.outputTokens() : 0;
    double cost = data.cost() != null ? data.cost() : 0.0;
    System.out.printf("%s: in=%d out=%d cost=%s%n", data.model(), in, out, cost);
});
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::session_events::AssistantUsageData;

let mut events = session.subscribe();
while let Ok(event) = events.recv().await {
    if event.event_type == "assistant.usage" {
        if let Some(data) = event.typed_data::<AssistantUsageData>() {
            println!(
                "{}: in={} out={} cost={}",
                data.model,
                data.input_tokens.unwrap_or(0),
                data.output_tokens.unwrap_or(0),
                data.cost.unwrap_or(0.0),
            );
        }
    }
}
```

{% endcodetab %}
{% endcodetabs %}

## Context-window utilization

Token counts tell you what each call consumed. Context-window utilization tells you how full the model's prompt window is right now—useful for showing a progress bar or warning the user before automatic compaction kicks in.

### Live updates with `session.usage_info`

The runtime emits a `session.usage_info` event whenever the context-window size changes. The example uses `currentTokens` and `tokenLimit`; see [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events#sessionusage_info) for the complete payload.

| Field | Type | Description |
|---|---|---|
| `currentTokens` | `number` | Tokens currently in the context window |
| `tokenLimit` | `number` | Maximum tokens for the model's context window |

{% codetabs %}
{% codetab typescript %}

```typescript
session.on("session.usage_info", (event) => {
    const { currentTokens, tokenLimit } = event.data;
    const pct = Math.round((currentTokens / tokenLimit) * 100);
    console.log(`Context: ${currentTokens}/${tokenLimit} (${pct}%)`);
});
```

{% endcodetab %}
{% codetab python %}

```python
def on_usage_info(event):
    if event.type == SessionEventType.SESSION_USAGE_INFO:
        data = event.data
        pct = round(data.current_tokens / data.token_limit * 100)
        print(f"Context: {data.current_tokens}/{data.token_limit} ({pct}%)")

session.on(on_usage_info)
```

{% endcodetab %}
{% codetab go %}

```golang
session.On(func(event copilot.SessionEvent) {
    d, ok := event.Data.(*copilot.SessionUsageInfoData)
    if !ok {
        return
    }
    pct := int(float64(d.CurrentTokens) / float64(d.TokenLimit) * 100)
    fmt.Printf("Context: %d/%d (%d%%)\n", d.CurrentTokens, d.TokenLimit, pct)
})
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
session.On<SessionUsageInfoEvent>(evt =>
{
    var pct = (int)Math.Round((double)evt.Data.CurrentTokens / evt.Data.TokenLimit * 100);
    Console.WriteLine($"Context: {evt.Data.CurrentTokens}/{evt.Data.TokenLimit} ({pct}%)");
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
session.on(SessionUsageInfoEvent.class, event -> {
    var data = event.getData();
    long pct = Math.round((double) data.currentTokens() / data.tokenLimit() * 100);
    System.out.printf("Context: %d/%d (%d%%)%n", data.currentTokens(), data.tokenLimit(), pct);
});
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::session_events::SessionUsageInfoData;

let mut events = session.subscribe();
while let Ok(event) = events.recv().await {
    if event.event_type == "session.usage_info" {
        if let Some(data) = event.typed_data::<SessionUsageInfoData>() {
            let pct = (data.current_tokens as f64 / data.token_limit as f64 * 100.0) as i64;
            println!("Context: {}/{} ({}%)", data.current_tokens, data.token_limit, pct);
        }
    }
}
```

{% endcodetab %}
{% endcodetabs %}

### On-demand breakdown with `session.metadata.contextInfo`

Events only fire when the context changes. To read the current breakdown at any moment—for example, right after resuming a session—call `session.metadata.contextInfo`. Pass `0` for `promptTokenLimit` to use the runtime default; pass `0` for `outputTokenLimit` if the value is unknown.

The result's `contextInfo` is `null` until the session has been initialized (the system prompt and tool metadata have been cached). It breaks the total down into `systemTokens`, `conversationTokens`, and `toolDefinitionsTokens`, alongside the `promptTokenLimit`.

{% codetabs %}
{% codetab typescript %}

```typescript
const { contextInfo } = await session.rpc.metadata.contextInfo({
    promptTokenLimit: 0,
    outputTokenLimit: 0,
});

if (contextInfo) {
    console.log(
        `Total ${contextInfo.totalTokens}/${contextInfo.promptTokenLimit} ` +
            `(system=${contextInfo.systemTokens}, conversation=${contextInfo.conversationTokens})`,
    );
}
```

{% endcodetab %}
{% codetab python %}

```python
result = await session.rpc.metadata.context_info(
    MetadataContextInfoRequest(prompt_token_limit=0, output_token_limit=0)
)
info = result.context_info

if info is not None:
    print(
        f"Total {info.total_tokens}/{info.prompt_token_limit} "
        f"(system={info.system_tokens}, conversation={info.conversation_tokens})"
    )
```

{% endcodetab %}
{% codetab go %}

```golang
result, _ := session.RPC.Metadata.ContextInfo(ctx, &rpc.MetadataContextInfoRequest{
    PromptTokenLimit: 0,
    OutputTokenLimit: 0,
})

if info := result.ContextInfo; info != nil {
    fmt.Printf("Total %d/%d (system=%d, conversation=%d)\n",
        info.TotalTokens, info.PromptTokenLimit, info.SystemTokens, info.ConversationTokens)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var result = await session.Rpc.Metadata.ContextInfoAsync(promptTokenLimit: 0, outputTokenLimit: 0);
var info = result.ContextInfo;

if (info is not null)
{
    Console.WriteLine(
        $"Total {info.TotalTokens}/{info.PromptTokenLimit} " +
        $"(system={info.SystemTokens}, conversation={info.ConversationTokens})");
}
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var result = session.getRpc().metadata
    .contextInfo(new SessionMetadataContextInfoParams(null, 0L, 0L, null))
    .join();
var info = result.contextInfo();

if (info != null) {
    System.out.printf("Total %d/%d (system=%d, conversation=%d)%n",
        info.totalTokens(), info.promptTokenLimit(), info.systemTokens(), info.conversationTokens());
}
```

{% endcodetab %}
{% codetab rust %}

```rust
use github_copilot_sdk::rpc::MetadataContextInfoRequest;

let result = session
    .rpc()
    .metadata()
    .context_info(MetadataContextInfoRequest {
        prompt_token_limit: 0,
        output_token_limit: 0,
        selected_model: None,
    })
    .await?;

if let Some(info) = result.context_info {
    println!(
        "Total {}/{} (system={}, conversation={})",
        info.total_tokens, info.prompt_token_limit, info.system_tokens, info.conversation_tokens,
    );
}
```

{% endcodetab %}
{% endcodetabs %}

## Accumulated AI credit and token totals

`session.usage.getMetrics` returns the running totals for the whole session in a single call. This is the cleanest way to read AI credit cost, because it aggregates every API call (main agent and sub-agents) for you.

The example uses the fields below. The generated `UsageGetMetricsResult` type is the full reference.

| Field | Type | Description |
|---|---|---|
| `totalNanoAiu` | `number` | Session-wide AI credit cost, in nano-AI units |
| `totalPremiumRequestCost` | `number` | Premium request cost across all models, after multipliers |
| `modelMetrics` | `Record<string, ModelMetric>` | Per-model breakdown; each entry has `usage.inputTokens`, `usage.outputTokens`, and `totalNanoAiu` |

> [!NOTE]
> Cost is reported in **nano-AI units** (the field is named `totalNanoAiu`). The exact conversion to AI credits and the precise meaning of premium request accounting are defined by GitHub Copilot billing, not by the SDK—treat [GitHub's Copilot billing documentation](/copilot/concepts/billing) as the source of truth and verify before surfacing currency-like values to users. The examples divide by `1e9` as a convenience, following the SI `nano` prefix; confirm this matches current billing before relying on it. The `modelMetrics` and `tokenDetails` maps are keyed by runtime strings (model IDs and token-type names) that the SDK type system does not validate.

{% codetabs %}
{% codetab typescript %}

```typescript
const metrics = await session.rpc.usage.getMetrics();

const aiCredits = (metrics.totalNanoAiu ?? 0) / 1e9;
console.log(`AI credits used: ${aiCredits.toFixed(6)}`);
console.log(`Premium requests: ${metrics.totalPremiumRequestCost}`);

for (const [model, m] of Object.entries(metrics.modelMetrics)) {
    if (!m) continue;
    console.log(
        `${model}: in=${m.usage.inputTokens} out=${m.usage.outputTokens} ` +
            `nanoAiu=${m.totalNanoAiu ?? 0}`,
    );
}
```

{% endcodetab %}
{% codetab python %}

```python
metrics = await session.rpc.usage.get_metrics()

ai_credits = (metrics.total_nano_aiu or 0) / 1e9
print(f"AI credits used: {ai_credits:.6f}")
print(f"Premium requests: {metrics.total_premium_request_cost}")

for model, m in metrics.model_metrics.items():
    print(f"{model}: in={m.usage.input_tokens} out={m.usage.output_tokens} nanoAiu={m.total_nano_aiu or 0}")
```

{% endcodetab %}
{% codetab go %}

```golang
metrics, _ := session.RPC.Usage.GetMetrics(ctx)

aiCredits := float64(0)
if metrics.TotalNanoAiu != nil {
    aiCredits = *metrics.TotalNanoAiu / 1e9
}
fmt.Printf("AI credits used: %.6f\n", aiCredits)
fmt.Printf("Premium requests: %v\n", metrics.TotalPremiumRequestCost)

for model, m := range metrics.ModelMetrics {
    nanoAiu := float64(0)
    if m.TotalNanoAiu != nil {
        nanoAiu = *m.TotalNanoAiu
    }
    fmt.Printf("%s: in=%d out=%d nanoAiu=%v\n", model, m.Usage.InputTokens, m.Usage.OutputTokens, nanoAiu)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var metrics = await session.Rpc.Usage.GetMetricsAsync();

var aiCredits = (metrics.TotalNanoAiu ?? 0) / 1e9;
Console.WriteLine($"AI credits used: {aiCredits:F6}");
Console.WriteLine($"Premium requests: {metrics.TotalPremiumRequestCost}");

foreach (var (model, m) in metrics.ModelMetrics)
{
    Console.WriteLine(
        $"{model}: in={m.Usage.InputTokens} out={m.Usage.OutputTokens} nanoAiu={m.TotalNanoAiu ?? 0}");
}
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var metrics = session.getRpc().usage.getMetrics().join();

double aiCredits = metrics.totalNanoAiu() != null ? metrics.totalNanoAiu() / 1e9 : 0;
System.out.printf("AI credits used: %.6f%n", aiCredits);
System.out.printf("Premium requests: %s%n", metrics.totalPremiumRequestCost());

metrics.modelMetrics().forEach((model, m) -> {
    double nanoAiu = m.totalNanoAiu() != null ? m.totalNanoAiu() : 0;
    System.out.printf("%s: in=%d out=%d nanoAiu=%s%n",
        model, m.usage().inputTokens(), m.usage().outputTokens(), nanoAiu);
});
```

{% endcodetab %}
{% codetab rust %}

```rust
let metrics = session.rpc().usage().get_metrics().await?;

let ai_credits = metrics.total_nano_aiu.unwrap_or(0.0) / 1e9;
println!("AI credits used: {ai_credits:.6}");
println!("Premium requests: {}", metrics.total_premium_request_cost);

for (model, m) in &metrics.model_metrics {
    let nano_aiu = m.total_nano_aiu.unwrap_or(0.0);
    println!(
        "{model}: in={} out={} nanoAiu={nano_aiu}",
        m.usage.input_tokens, m.usage.output_tokens,
    );
}
```

{% endcodetab %}
{% endcodetabs %}

## Per-model AI credit pricing

To estimate cost before you run a turn, read each model's token prices from `models.list`. This is a server-scoped call on the client, so it does not need a session. Prices are expressed in AI credits per billing batch of tokens. The generated `ModelBillingTokenPrices` type lists every field, including `cachePrice`.

| Field | Type | Description |
|---|---|---|
| `billing.multiplier` | `number` | Premium request cost multiplier relative to the base rate |
| `billing.tokenPrices.inputPrice` | `number` | AI credit cost per batch of input tokens |
| `billing.tokenPrices.outputPrice` | `number` | AI credit cost per batch of output tokens |
| `billing.tokenPrices.batchSize` | `number` | Number of tokens per billing batch |

> [!NOTE]
> Price values change as plans and models evolve. Read them at runtime as shown below; never hard-code the numbers into your application.

{% codetabs %}
{% codetab typescript %}

```typescript
const { models } = await client.rpc.models.list({});

for (const model of models) {
    const prices = model.billing?.tokenPrices;
    if (!prices) continue;
    console.log(
        `${model.id}: input=${prices.inputPrice} output=${prices.outputPrice} ` +
            `per ${prices.batchSize} tokens (x${model.billing?.multiplier ?? 1})`,
    );
}
```

{% endcodetab %}
{% codetab python %}

```python
result = await client.rpc.models.list(ModelsListRequest())

for model in result.models:
    prices = model.billing.token_prices if model.billing else None
    if prices is None:
        continue
    multiplier = model.billing.multiplier if model.billing else 1
    print(
        f"{model.id}: input={prices.input_price} output={prices.output_price} "
        f"per {prices.batch_size} tokens (x{multiplier})"
    )
```

{% endcodetab %}
{% codetab go %}

```golang
list, _ := client.RPC.Models.List(ctx, &rpc.ModelsListRequest{})

for _, model := range list.Models {
    if model.Billing == nil || model.Billing.TokenPrices == nil {
        continue
    }
    prices := model.Billing.TokenPrices
    multiplier := 1.0
    if model.Billing.Multiplier != nil {
        multiplier = *model.Billing.Multiplier
    }
    in, out := 0.0, 0.0
    if prices.InputPrice != nil {
        in = *prices.InputPrice
    }
    if prices.OutputPrice != nil {
        out = *prices.OutputPrice
    }
    batch := int64(0)
    if prices.BatchSize != nil {
        batch = *prices.BatchSize
    }
    fmt.Printf("%s: input=%v output=%v per %d tokens (x%v)\n", model.ID, in, out, batch, multiplier)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var list = await client.Rpc.Models.ListAsync();

foreach (var model in list.Models)
{
    var prices = model.Billing?.TokenPrices;
    if (prices is null) continue;
    Console.WriteLine(
        $"{model.Id}: input={prices.InputPrice} output={prices.OutputPrice} " +
        $"per {prices.BatchSize} tokens (x{model.Billing?.Multiplier ?? 1})");
}
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var list = client.getRpc().models.list().join();

for (var model : list.models()) {
    var billing = model.billing();
    if (billing == null || billing.tokenPrices() == null) {
        continue;
    }
    var prices = billing.tokenPrices();
    double multiplier = billing.multiplier() != null ? billing.multiplier() : 1;
    System.out.printf("%s: input=%s output=%s per %d tokens (x%s)%n",
        model.id(), prices.inputPrice(), prices.outputPrice(), prices.batchSize(), multiplier);
}
```

{% endcodetab %}
{% codetab rust %}

```rust
let list = client.rpc().models().list().await?;

for model in &list.models {
    let Some(billing) = &model.billing else { continue };
    let Some(prices) = &billing.token_prices else { continue };
    let multiplier = billing.multiplier.unwrap_or(1.0);
    println!(
        "{}: input={} output={} per {} tokens (x{multiplier})",
        model.id,
        prices.input_price.unwrap_or(0.0),
        prices.output_price.unwrap_or(0.0),
        prices.batch_size.unwrap_or(0),
    );
}
```

{% endcodetab %}
{% endcodetabs %}

## Account quota and premium interactions

`account.getQuota` reports the authenticated user's remaining Copilot entitlement. The result's `quotaSnapshots` map is keyed by quota type—commonly `premium_interactions`, `chat`, and `completions`. Use it to show users how much of their monthly allowance is left, or to gate work before they hit a limit.

The example uses the fields below; the generated `AccountQuotaSnapshot` type is the full reference. The `quotaSnapshots` keys are runtime strings that the SDK type system does not validate, so guard your lookups.

| Field | Type | Description |
|---|---|---|
| `entitlementRequests` | `number` | Requests included in the entitlement, or `-1` for unlimited |
| `usedRequests` | `number` | Requests used so far this period |
| `remainingPercentage` | `number` | Percentage of the entitlement remaining |
| `resetDate` | `string` | ISO 8601 date when the quota resets |

> [!TIP]
> To read quota for a specific user rather than the connection's global auth context (for example, in a multi-tenant backend), pass that user's GitHub token to `getQuota`. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy).

{% codetabs %}
{% codetab typescript %}

```typescript
const { quotaSnapshots } = await client.rpc.account.getQuota({});
const premium = quotaSnapshots["premium_interactions"];

if (premium) {
    console.log(
        `Premium interactions: ${premium.usedRequests}/${premium.entitlementRequests} ` +
            `(${premium.remainingPercentage.toFixed(1)}% left, resets ${premium.resetDate ?? "n/a"})`,
    );
}
```

{% endcodetab %}
{% codetab python %}

```python
result = await client.rpc.account.get_quota(AccountGetQuotaRequest())
premium = result.quota_snapshots.get("premium_interactions")

if premium is not None:
    print(
        f"Premium interactions: {premium.used_requests}/{premium.entitlement_requests} "
        f"({premium.remaining_percentage:.1f}% left, resets {premium.reset_date or 'n/a'})"
    )
```

{% endcodetab %}
{% codetab go %}

```golang
result, _ := client.RPC.Account.GetQuota(ctx, &rpc.AccountGetQuotaRequest{})

if premium, ok := result.QuotaSnapshots["premium_interactions"]; ok {
    resets := "n/a"
    if premium.ResetDate != nil {
        resets = premium.ResetDate.Format(time.RFC3339)
    }
    fmt.Printf("Premium interactions: %d/%d (%.1f%% left, resets %s)\n",
        premium.UsedRequests, premium.EntitlementRequests, premium.RemainingPercentage, resets)
}
```

{% endcodetab %}
{% codetab dotnet %}

```csharp
var result = await client.Rpc.Account.GetQuotaAsync();

if (result.QuotaSnapshots.TryGetValue("premium_interactions", out var premium))
{
    Console.WriteLine(
        $"Premium interactions: {premium.UsedRequests}/{premium.EntitlementRequests} " +
        $"({premium.RemainingPercentage:F1}% left, resets {premium.ResetDate?.ToString("o") ?? "n/a"})");
}
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var result = client.getRpc().account.getQuota().join();
var premium = result.quotaSnapshots().get("premium_interactions");

if (premium != null) {
    System.out.printf("Premium interactions: %d/%d (%.1f%% left, resets %s)%n",
        premium.usedRequests(), premium.entitlementRequests(),
        premium.remainingPercentage(), premium.resetDate());
}
```

{% endcodetab %}
{% codetab rust %}

```rust
let result = client.rpc().account().get_quota().await?;

if let Some(premium) = result.quota_snapshots.get("premium_interactions") {
    let resets = premium.reset_date.as_deref().unwrap_or("n/a");
    println!(
        "Premium interactions: {}/{} ({:.1}% left, resets {resets})",
        premium.used_requests, premium.entitlement_requests, premium.remaining_percentage,
    );
}
```

{% endcodetab %}
{% endcodetabs %}

## Choosing the right API

Use this summary to decide which API fits your use case:

* **Render a live cost or token meter as a turn runs**: subscribe to `assistant.usage` and `session.usage_info`.
* **Show a final cost summary after a turn or session**: call `session.usage.getMetrics`.
* **Display context-window usage on resume, before any new turn**: call `session.metadata.contextInfo`.
* **Estimate cost before running work**: read `models.list` token prices.
* **Warn users before they exhaust their plan**: call `account.getQuota`.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events): full field-level reference for `assistant.usage`, `session.usage_info`, and every other session event
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/observability): export usage data to OpenTelemetry for cost attribution
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/setup/multi-tenancy): resolve per-user quota and models with a GitHub token
