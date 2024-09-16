---
title: Configuring your Copilot agent to communicate with the Copilot platform
intro: 'Learn how to interact with the {% data variables.product.prodname_copilot_short %} platform by sending and receiving server-sent events with your {% data variables.product.prodname_copilot_agent_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Communicate with Copilot platform
type: reference
layout: inline
---

{% data reusables.copilot.copilot-extensions.beta-note %}

{% data variables.product.prodname_copilot_agents_short %} communicate with the {% data variables.product.prodname_copilot_short %} platform in the form of server-sent events (SSEs). Rather than waiting for the {% data variables.product.prodname_copilot_short %} platform to request an update from your agent, or vice versa, you can use SSEs to send and receive updates to and from the platform in real time.

To learn more about SSEs, see [Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) in the mdn documentation.

## Sending server-sent events

Your agent should only send one SSE for each interaction with the {% data variables.product.prodname_copilot_short %} platform. There are four predefined SSEs your agent can send:

* [`copilot_confirmation`](#copilot_confirmation)
* [`copilot_errors`](#copilot_errors)
* [`copilot_references`](#copilot_references)
* [Default SSE](#default-sse)

### `copilot_confirmation`

The `copilot_confirmation` SSE sends the user a prompt to confirm an action. This SSE is sent through an event type and data field. See the following code for an example of a `copilot_confirmation` SSE:

```typescript annotate
//
event: copilot_confirmation
data: {
    // Currently, `action` is the only supported value for `type` in `copilot_confirmation`.
    "type": "action",
    // Title of the confirmation dialog shown to the user.
    "title": "Turn off feature flag",
    // Confirmation message shown to the user.
    "message": "Are you sure you wish to turn off the `copilot` feature flag?",
    // Optional field for the agent to include any data needed to uniquely identify this confirmation and take action once the decision is received from the client.
    "confirmation": {
        "id": "id-123",
        "other": "identifier-as-needed",
    }
}
```

After the user accepts or dismisses the confirmation, the agent receives a message similar to the following example:

```typescript annotate
//
{
    "copilot_confirmations": [
        {
            // A string containing the state of the confirmation. This value is either `accepted` or `dismissed`.
            "state": "accepted",
            // An array of strings containing data identifying the relevant action.
            "confirmation": {
                "id": "id-123",
                "other": "identifier-as-needed",
            }
        }
    ]
}
```

Based on the values in this message, the agent can then complete or cancel the appropriate action.

### `copilot_errors`

The `copilot_errors` SSE sends the {% data variables.product.prodname_copilot_short %} platform a list of encountered errors. This SSE is sent through an event type and data field. See the following code for an example of a `copilot_errors` SSE:

```typescript annotate
//
event: copilot_errors
data: [{
    // A string that specifies the error's type. `type` can have a value of `reference`, `function` or `agent`.
    "type": "function",
    // A string controlled by the agent describing the nature of an error.
    "code": "recentchanges",
    // A string that specifies the error message shown to the user.
    "message": "The repository does not exist",
    // A string that serves as a unique identifier to link the error with other resources such as references or function calls.
    "identifier": "github/hello-world"
}]
```

### `copilot_references`

> [!NOTE] The `copilot_references` SSE is not yet available when using {% data variables.product.prodname_copilot_chat_dotcom_short %}.

The `copilot_references` SSE sends the user a list of references used to generate a response. This SSE is sent through an event type and data field. See the following code for an example of a `copilot_references` SSE:

```typescript annotate
//
event: copilot_references
data: [{
    // A string that specifies the type of the reference.
    "type": "blackbeard.story",
    // A string that specifies the ID of the reference.
    "id": "snippet",
    // An optional field where the agent can include any data needed to uniquely identify this reference.
    "data": {
        "file": "story.go",
        "start": "0",
        "end": "13",
        "content": "func main()...writeStory()..."
    },
    // An optional boolean that indicates if the reference was passed implicitly or explicitly.
    "is_implicit": false,
    // An optional field for the agent to include any metadata to display in the user's environment. If any of the below required fields are missing, then the reference will not be rendered in the UI.
    "metadata": {
        "display_name": "Lines 1-13 from story.go",
        "display_icon": "icon",
        "display_url": "http://blackbeard.com/story/1",

    }
}]
```

### Default SSE

The default SSE sends the user a general chat message. This SSE is unnamed and sent solely through a data field. See the following code for an example of a default SSE:

```text
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0125", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"logprobs":null,"finish_reason":null}]}
```

## Receiving server-sent events

Just as your agent sends SSEs to the {% data variables.product.prodname_copilot_short %} platform, it also receives the `resp_message` SSE from the platform. This SSE contains a list of messages from the user, as well as optional data related to each of the SSE events the agent can send. See the following code sample for an example curl request to your agent containing a message:

```bash
curl --request POST \
    --url $AGENT_URL \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --header "X-GitHub-Token: $RUNTIME_GENERATED_TOKEN" \
    --data '{
        "messages": [
            {
                "role": "user",
                "content": "What is a closure in javascript?",
                "copilot_references": []
            }
        ]
    }'
```

## Next steps

Now that you understand how your {% data variables.product.prodname_copilot_agent_short %} communicates with the {% data variables.product.prodname_copilot_short %} platform, you can learn how to integrate your agent with the {% data variables.product.github %} API. See "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github)."
