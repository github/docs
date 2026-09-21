---
title: User prompt transformed hook
shortTitle: User prompt transformed
intro: >-
  The `userPromptTransformed` hook runs after the runtime adds generated context
  to a submitted prompt, but before the resulting content is persisted to
  session history or sent to the model.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

Use it when you need to inspect or replace the exact model-facing prompt. The `prompt` input contains the user prompt after any `userPromptSubmitted` hooks have run, while `transformedPrompt` also contains runtime-generated context such as `<current_datetime>`.

## Input and output

| Input field | Type | Description |
| --- | --- | --- |
| `sessionId` | string | Runtime session ID |
| `timestamp` | date/time | Time the hook was invoked |
| `cwd` / `workingDirectory` | string | Current working directory |
| `prompt` | string | Prompt after `userPromptSubmitted` hooks |
| `transformedPrompt` | string | Model-facing prompt after runtime transformations |

Return no value to leave the transformed prompt unchanged. Return `modifiedTransformedPrompt` to replace the content that is stored in session history and sent to the model.

## Examples

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
const session = await client.createSession({
  hooks: {
    onUserPromptTransformed: async (input) => ({
      modifiedTransformedPrompt: redact(input.transformedPrompt),
    }),
  },
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
session = await client.create_session(
    hooks={
        "on_user_prompt_transformed": lambda input_data, invocation: {
            "modifiedTransformedPrompt": redact(input_data["transformedPrompt"])
        }
    }
)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
	Hooks: &copilot.SessionHooks{
		OnUserPromptTransformed: func(input copilot.UserPromptTransformedHookInput, invocation copilot.HookInvocation) (*copilot.UserPromptTransformedHookOutput, error) {
			return &copilot.UserPromptTransformedHookOutput{
				ModifiedTransformedPrompt: copilot.String(redact(input.TransformedPrompt)),
			}, nil
		},
	},
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    Hooks = new SessionHooks
    {
        OnUserPromptTransformed = (input, invocation) =>
            Task.FromResult<UserPromptTransformedHookOutput?>(new()
            {
                ModifiedTransformedPrompt = Redact(input.TransformedPrompt),
            }),
    },
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
var hooks = new SessionHooks().setOnUserPromptTransformed((input, invocation) ->
    CompletableFuture.completedFuture(
        new UserPromptTransformedHookOutput(redact(input.transformedPrompt()))));

var session = client.createSession(new SessionConfig().setHooks(hooks)).get();
```

{% endcodetab %}
{% codetab rust %}

```rust
#[async_trait]
impl SessionHooks for MyHooks {
    async fn on_user_prompt_transformed(
        &self,
        input: UserPromptTransformedInput,
        _ctx: HookContext,
    ) -> Option<UserPromptTransformedOutput> {
        Some(UserPromptTransformedOutput {
            modified_transformed_prompt: Some(redact(&input.transformed_prompt)),
        })
    }
}

let session = client
    .create_session(SessionConfig::default().with_hooks(Arc::new(MyHooks)))
    .await?;
```

{% endcodetab %}
{% endcodetabs %}

The replacement is persisted as the user message content, so resumed sessions replay the modified content unchanged.
