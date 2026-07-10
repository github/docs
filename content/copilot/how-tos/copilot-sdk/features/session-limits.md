---
title: Session limits
shortTitle: Session limits
intro: >-
  Session limits let an application set an AI Credits budget for a Copilot
  session. Use `sessionLimits` when creating or resuming a session to set a soft
  cap for the current accounting window.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

## Configure a session limit

Set `maxAiCredits` to the AI Credits soft cap for the session's current accounting window. Usage is checked after model calls return, so one response can exceed the configured value before the runtime blocks the next model call. The SDK forwards this value to the Copilot CLI when it creates or resumes the session.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
const session = await client.createSession({
    onPermissionRequest: approveAll,
    sessionLimits: {
        maxAiCredits: 30,
    },
});

const resumed = await client.resumeSession(session.sessionId, {
    onPermissionRequest: approveAll,
    sessionLimits: {
        maxAiCredits: 30,
    },
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
session = await client.create_session(
    on_permission_request=PermissionHandler.approve_all,
    session_limits={
        "max_ai_credits": 30,
    },
)

resumed = await client.resume_session(
    session.session_id,
    on_permission_request=PermissionHandler.approve_all,
    session_limits={
        "max_ai_credits": 30,
    },
)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
	OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
	SessionLimits: &rpc.SessionLimitsConfig{
		MaxAiCredits: copilot.Float64(30),
	},
})

resumed, err := client.ResumeSession(ctx, session.SessionID, &copilot.ResumeSessionConfig{
	OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
	SessionLimits: &rpc.SessionLimitsConfig{
		MaxAiCredits: copilot.Float64(30),
	},
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    OnPermissionRequest = PermissionHandler.ApproveAll,
    SessionLimits = new SessionLimitsConfig
    {
        MaxAiCredits = 30,
    },
});

var resumed = await client.ResumeSessionAsync(session.SessionId, new ResumeSessionConfig
{
    OnPermissionRequest = PermissionHandler.ApproveAll,
    SessionLimits = new SessionLimitsConfig
    {
        MaxAiCredits = 30,
    },
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
CopilotSession session = client
        .createSession(new SessionConfig()
                .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
                .setSessionLimits(new SessionLimitsConfig(30.0)))
        .get();

CopilotSession resumed = client
        .resumeSession(session.getSessionId(), new ResumeSessionConfig()
                .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
                .setSessionLimits(new SessionLimitsConfig(30.0)))
        .get();
```

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
let limits = SessionLimitsConfig {
    max_ai_credits: Some(30.0),
};

let session = client
    .create_session(
        SessionConfig::new()
            .approve_all_permissions()
            .with_session_limits(limits.clone()),
    )
    .await?;

let resumed = client
    .resume_session(
        ResumeSessionConfig::new(session.id().clone())
            .approve_all_permissions()
            .with_session_limits(limits),
    )
    .await?;
```

{% endcodetab %}
{% endcodetabs %}

## Observe budget events

Applications can subscribe to session events to update UI when the soft cap changes or the session reaches the exhausted-budget flow.

| Event type | When it is emitted | Important fields |
|---|---|---|
| `session.session_limits_changed` | Active session limits changed. A `null` `sessionLimits` value means no limits are active. | `sessionLimits.maxAiCredits?` |
| `session.usage_checkpoint` | The runtime records durable aggregate usage for resume and accounting. | `totalNanoAiu`, `totalPremiumRequests?` |
| `session_limits_exhausted.requested` | The session reached the exhausted-budget flow and needs a user decision before continuing. | `requestId`, `maxAiCredits`, `usedAiCredits` |
| `session_limits_exhausted.completed` | The exhausted-limit prompt was resolved. | `requestId`, `response.action`, `response.additionalAiCredits?`, `response.maxAiCredits?` |

Use the generated event types for the SDK language you are using. For example, TypeScript narrows by `event.type`:

```typescript
session.on((event) => {
    if (event.type === "session_limits_exhausted.requested") {
        showBudgetDialog({
            requestId: event.data.requestId,
            maxAiCredits: event.data.maxAiCredits,
            usedAiCredits: event.data.usedAiCredits,
        });
    }
});
```
