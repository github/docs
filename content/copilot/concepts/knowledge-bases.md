---
title: GitHub Copilot knowledge bases
shortTitle: Knowledge bases
intro: 'Knowledge bases allow you to bring together Markdown documentation across one or more repositories, which can then be used as context for {% data variables.copilot.copilot_chat_short %}.'
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.copilot.ce-product-callout %}'
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/copilot-knowledge-bases
contentType: concepts
---

> [!TIP] If you're looking for a more flexible way to organize context for {% data variables.product.prodname_copilot_short %}, you can also try {% data variables.copilot.copilot_spaces %}.
>
> {% data variables.copilot.copilot_spaces_short %} let you combine code and free-text content—like transcripts or specs—and can be created by any {% data variables.product.prodname_copilot_short %} user, not just organization owners. They’re a good option for more focused or task-specific use cases. See [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces).

## About knowledge bases

Organization owners can create knowledge bases, bringing together Markdown documentation across one or more repositories. Organization members can then specify that knowledge base as the context for {% data variables.copilot.copilot_chat_dotcom_short %}, {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode %}, and {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vs %}.

When you ask a question in {% data variables.copilot.copilot_chat_short %} with a knowledge base selected, {% data variables.product.prodname_copilot_short %} will search the knowledge base for relevant information and synthesize a response.

## Next steps

* To learn how to create and manage knowledge bases, see [AUTOTITLE](/copilot/how-tos/context/creating-and-managing-copilot-knowledge-bases).
* To learn how to use knowledge bases in {% data variables.copilot.copilot_chat_short %}, see [AUTOTITLE](/copilot/how-tos/chat/asking-github-copilot-questions-in-github#asking-copilot-chat-questions-about-a-knowledge-base) and [AUTOTITLE](/copilot/how-tos/chat/asking-github-copilot-questions-in-your-ide#asking-a-question-about-a-knowledge-base).
