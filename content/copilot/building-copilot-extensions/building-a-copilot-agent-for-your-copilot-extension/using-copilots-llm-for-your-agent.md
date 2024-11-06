---
title: Using Copilot's LLM for your agent
intro: 'Learn how to use {% data variables.product.prodname_copilot_short %}''s LLM for your agent.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Use Copilot's LLM
type: reference
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.copilot-extensions.beta-note %}

## About {% data variables.product.prodname_copilot_short %}'s Language Learning Model (LLM)

{% data variables.product.prodname_copilot_short %}'s Language Learning Model (LLM) is a powerful, large-scale language model that is trained on a diverse range of data sources, including code, documentation, and other text. {% data variables.product.prodname_copilot_short %}'s LLM underpins the functionality for {% data variables.product.prodname_copilot %}, and is used to power all of {% data variables.product.prodname_copilot_short %}'s features, including code generation, documentation generation, and code completion.

You have the option to use {% data variables.product.prodname_copilot_short %}'s LLM to power your agent, which can be useful if you want your agent to be able to generate completions for user messages, but you don't want to manage your own LLM.

> [!NOTE] Third-party agents have strict rate limits for using {% data variables.product.prodname_copilot_short %}'s LLM. If your third-party agent will need to generate a large number of completions, you should consider using your own LLM or an API like OpenAI.

## Using {% data variables.product.prodname_copilot_short %}'s LLM for your agent

You can call {% data variables.product.prodname_copilot_short %}'s LLM deployment at `{% data variables.copilot.chat_completions_api %}` with a POST request. The request and responses should be in the same format as the OpenAI API.

To authenticate, use the same `X-Github-Token` header sent to your agent. For more information, see "[AUTOTITLE](/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/configuring-your-copilot-agent-to-communicate-with-github#fetching-resources-from-the-github-api)."

Here is an example of how {% data variables.product.prodname_copilot_short %}'s LLM deployment is used by the Blackbeard extension to generate completions for a user message:

```javascript
  // Use Copilot's LLM to generate a response to the user's
  //  messages, with our extra system messages attached.
  const copilotLLMResponse = await fetch(
    "https://api.githubcopilot.com/chat/completions",
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${tokenForUser}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        messages,
        stream: true,
      }),
    }
  );
```

To see this example in its full context, see the [Blackbeard extension](https://github.com/copilot-extensions/blackbeard-extension).
