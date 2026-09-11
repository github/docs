---
title: Citations
shortTitle: Citations
intro: >-
  Citations link spans of an assistant response back to the sources that support
  them. Turn on `enableCitations` when you create or resume a session, then read
  the `citations` payload on `assistant.message` events to render footnotes,
  source lists, or inline links.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

> [!WARNING]
> Citations are experimental. The option name, event payload, and provider coverage can change in a future release.

## How citations work

Citations are produced by the model provider, not by the SDK. The flow has three parts:

1. Your application supplies citable material, such as a document attachment or a tool result that carries source content.
1. The runtime marks that material as citable on the wire when `enableCitations` is on. For Anthropic models, file attachments are sent as `document` blocks with citations enabled.
1. The model returns citation metadata, and the runtime normalizes it into a provider-agnostic `citations` object on the final `assistant.message` event.

Provider support is limited. The `provider` field on each source records where the citation came from:

| Provider value | Meaning |
|---|---|
| `anthropic` | Citation produced by an Anthropic (Claude) model response |
| `openai` | Citation produced by an OpenAI model response |
| `client` | Citation synthesized by the runtime from tool output |

> [!NOTE]
> Turning on `enableCitations` does not guarantee that a response contains citations. Models emit them only when the response is grounded in citable source material. Always treat the `citations` field as optional.

## Enable citations on a session

Set the option on session create, and set it again on resume if you want citations after a restart.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
const session = await client.createSession({
    onPermissionRequest: approveAll,
    enableCitations: true,
});

const resumed = await client.resumeSession(session.sessionId, {
    onPermissionRequest: approveAll,
    enableCitations: true,
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
session = await client.create_session(
    on_permission_request=PermissionHandler.approve_all,
    enable_citations=True,
)

resumed = await client.resume_session(
    session.session_id,
    on_permission_request=PermissionHandler.approve_all,
    enable_citations=True,
)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
session, err := client.CreateSession(ctx, &copilot.SessionConfig{
	OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
	EnableCitations:     copilot.Bool(true),
})

resumed, err := client.ResumeSession(ctx, session.SessionID, &copilot.ResumeSessionConfig{
	OnPermissionRequest: copilot.PermissionHandler.ApproveAll,
	EnableCitations:     copilot.Bool(true),
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
var session = await client.CreateSessionAsync(new SessionConfig
{
    OnPermissionRequest = PermissionHandler.ApproveAll,
    EnableCitations = true,
});

var resumed = await client.ResumeSessionAsync(session.SessionId, new ResumeSessionConfig
{
    OnPermissionRequest = PermissionHandler.ApproveAll,
    EnableCitations = true,
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
CopilotSession session = client
        .createSession(new SessionConfig()
                .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
                .setEnableCitations(true))
        .get();

CopilotSession resumed = client
        .resumeSession(session.getSessionId(), new ResumeSessionConfig()
                .setOnPermissionRequest(PermissionHandler.APPROVE_ALL)
                .setEnableCitations(true))
        .get();
```

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
let session = client
    .create_session(
        SessionConfig::new()
            .approve_all_permissions()
            .with_enable_citations(true),
    )
    .await?;

let resumed = client
    .resume_session(
        ResumeSessionConfig::new(session.id().clone())
            .approve_all_permissions()
            .with_enable_citations(true),
    )
    .await?;
```

{% endcodetab %}
{% endcodetabs %}

## Read citations from assistant messages

Citations arrive on the final `assistant.message` event, not on `assistant.message_delta` events. Wait for the final message before you render source markers.

{% codetabs %}
{% codetab typescript %}

<!-- docs-validate: skip -->

```typescript
session.on((event) => {
    if (event.type !== "assistant.message" || !event.data.citations) {
        return;
    }

    const { sources, spans } = event.data.citations;
    const sourceById = new Map(sources.map((source) => [source.id, source]));

    for (const span of spans) {
        const quoted = event.data.content.slice(span.startIndex, span.endIndex);
        for (const reference of span.references) {
            const source = sourceById.get(reference.sourceId);
            const label = source?.title ?? source?.url ?? source?.path ?? source?.id;
            console.log(`"${quoted}" — ${label}`);
        }
    }
});
```

{% endcodetab %}
{% codetab python %}

<!-- docs-validate: skip -->

```python
from copilot.session_events import SessionEventType

def utf16_slice(text: str, start: int, end: int) -> str:
    """Slice by UTF-16 code units, which is how span offsets are measured."""
    units = text.encode("utf-16-le")
    return units[start * 2 : end * 2].decode("utf-16-le")

def handle(event):
    if event.type != SessionEventType.ASSISTANT_MESSAGE or not event.data.citations:
        return

    sources = {source.id: source for source in event.data.citations.sources}

    for span in event.data.citations.spans:
        quoted = utf16_slice(event.data.content, span.start_index, span.end_index)
        for reference in span.references:
            source = sources[reference.source_id]
            label = source.title or source.url or source.path or source.id
            print(f'"{quoted}" — {label}')

session.on(handle)
```

{% endcodetab %}
{% codetab go %}

<!-- docs-validate: skip -->

```golang
// import "unicode/utf16"

session.On(func(event copilot.SessionEvent) {
	d, ok := event.Data.(*copilot.AssistantMessageData)
	if !ok || d.Citations == nil {
		return
	}

	sources := map[string]copilot.CitationSource{}
	for _, source := range d.Citations.Sources {
		sources[source.ID] = source
	}

	// Span offsets are UTF-16 code units, so index the UTF-16 view of the content.
	units := utf16.Encode([]rune(d.Content))

	for _, span := range d.Citations.Spans {
		quoted := string(utf16.Decode(units[span.StartIndex:span.EndIndex]))
		for _, reference := range span.References {
			source := sources[reference.SourceID]
			label := source.ID
			switch {
			case source.Title != nil:
				label = *source.Title
			case source.URL != nil:
				label = *source.URL
			case source.Path != nil:
				label = *source.Path
			}
			fmt.Printf("%q — %s\n", quoted, label)
		}
	}
})
```

{% endcodetab %}
{% codetab dotnet %}

<!-- docs-validate: skip -->

```csharp
session.On<SessionEvent>(evt =>
{
    if (evt is not AssistantMessageEvent message || message.Data.Citations is null)
    {
        return;
    }

    var sources = message.Data.Citations.Sources.ToDictionary(source => source.Id);

    foreach (var span in message.Data.Citations.Spans)
    {
        var quoted = message.Data.Content[(int)span.StartIndex..(int)span.EndIndex];
        foreach (var reference in span.References)
        {
            var source = sources[reference.SourceId];
            var label = source.Title ?? source.Url ?? source.Path ?? source.Id;
            Console.WriteLine($"\"{quoted}\" — {label}");
        }
    }
});
```

{% endcodetab %}
{% codetab java %}

<!-- docs-validate: skip -->

```java
session.on(AssistantMessageEvent.class, event -> {
    Citations citations = event.getData().citations();
    if (citations == null) {
        return;
    }

    Map<String, CitationSource> sources = citations.sources().stream()
            .collect(Collectors.toMap(CitationSource::id, source -> source));

    for (CitationSpan span : citations.spans()) {
        String quoted = event.getData().content()
                .substring(span.startIndex().intValue(), span.endIndex().intValue());
        for (CitationReference reference : span.references()) {
            CitationSource source = sources.get(reference.sourceId());
            String label = source.title() != null ? source.title()
                    : source.url() != null ? source.url()
                    : source.path() != null ? source.path()
                    : source.id();
            System.out.printf("\"%s\" — %s%n", quoted, label);
        }
    }
});
```

{% endcodetab %}
{% codetab rust %}

<!-- docs-validate: skip -->

```rust
use github_copilot_sdk::session_events::AssistantMessageData;
use std::collections::HashMap;

let mut events = session.subscribe();

while let Ok(event) = events.recv().await {
    if event.event_type != "assistant.message" {
        continue;
    }

    let Some(data) = event.typed_data::<AssistantMessageData>() else {
        continue;
    };
    let Some(citations) = data.citations.as_ref() else {
        continue;
    };

    let sources: HashMap<&str, _> = citations
        .sources
        .iter()
        .map(|source| (source.id.as_str(), source))
        .collect();

    // Span offsets are UTF-16 code units, so index the UTF-16 view of the content.
    let units: Vec<u16> = data.content.encode_utf16().collect();

    for span in &citations.spans {
        let quoted = String::from_utf16_lossy(
            &units[span.start_index as usize..span.end_index as usize],
        );
        for reference in &span.references {
            let Some(source) = sources.get(reference.source_id.as_str()) else {
                continue;
            };
            let label = source
                .title
                .as_deref()
                .or(source.url.as_deref())
                .or(source.path.as_deref())
                .unwrap_or(source.id.as_str());
            println!("\"{quoted}\" — {label}");
        }
    }
}
```

{% endcodetab %}
{% endcodetabs %}

## Citation payload reference

The `citations` object separates deduplicated sources from the spans that reference them, so a source cited five times appears once in `sources`.

| Type | Field | Description |
|---|---|---|
| `Citations` | `sources` | Deduplicated set of sources referenced by the citation spans |
| `Citations` | `spans` | Spans of generated text annotated with their supporting sources |
| `CitationSource` | `id` | Stable, turn-scoped identifier referenced by `CitationReference.sourceId` |
| `CitationSource` | `provider` | System that produced the citation: `anthropic`, `openai`, or `client` |
| `CitationSource` | `title?` | Human-readable title of the source |
| `CitationSource` | `url?` | URL of the source, when it is a web resource |
| `CitationSource` | `path?` | File path relative to the agent workspace root, when the source is a file |
| `CitationSpan` | `startIndex` | Start offset in the final message content (UTF-16 code units, zero-based, inclusive) |
| `CitationSpan` | `endIndex` | End offset in the final message content (UTF-16 code units, zero-based, exclusive) |
| `CitationSpan` | `references` | The sources that support this span |
| `CitationReference` | `sourceId` | Identifier of the `CitationSource` this reference points to |
| `CitationReference` | `citedText?` | Exact text from the source that supports the span, when the model provides it |
| `CitationReference` | `location?` | Location within the source that supports the span |
| `CitationReference` | `providerMetadata?` | Provider-native correlation data, passed through opaquely |

> [!TIP]
> Span offsets are measured in UTF-16 code units against the final `content` string. TypeScript, Java, and .NET strings are already UTF-16, so you can slice them directly. Python strings are indexed by Unicode code point and Go and Rust strings are UTF-8, so convert the content to UTF-16 code units before slicing, as the examples above do.

### Citation locations

`CitationReference.location` is a discriminated union keyed on `type`:

| Location type | Fields | Use |
|---|---|---|
| `char` | `startIndex`, `endIndex` | Character range within the source text |
| `page` | `startPage`, `endPage` | Page range within a paginated document |
| `block` | `startBlock`, `endBlock` | Content-block range within a structured document |

## Provide citable sources

Citations need source material the model can attribute. There are two ways to supply it.

### Attach documents to a message

When citations are enabled and the session uses an Anthropic provider, file attachments are sent as `document` blocks with citations turned on, so the model can cite passages from them.

<!-- docs-validate: skip -->

```typescript
await session.sendAndWait({
    prompt: "Summarize the attached PDF and cite the passages you used.",
    attachments: [
        {
            type: "blob",
            data: pdfBase64,
            displayName: "quarterly-report.pdf",
            mimeType: "application/pdf",
        },
    ],
});
```

See [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/image-input) for the attachment API and the `file` and `blob` attachment shapes.

### Return citable sources from a tool

Tool results carry an experimental `citableSources` array. Each entry supplies `content` that the model can cite, along with an `id` and optional `title`, `url`, and `path`. These sources are persisted with the tool result, so they survive session resume, and citations built from them are tagged with the `client` provider.

## Limitations

* Citations are experimental in every SDK and are not covered by compatibility guarantees.
* Coverage depends on the model provider. A session configured for a provider without citation support emits no `citations` payload.
* Citations are only present on the final `assistant.message` event, so streaming consumers cannot render them mid-response.
* Public code and IP-duplication citations are not part of this surface.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/streaming-events): subscribe to session events and narrow event types
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/image-input): attach files and in-memory blobs to a message
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/features/session-persistence): resume sessions and re-apply session options
* [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/compatibility): SDK and CLI feature matrix
