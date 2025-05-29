---
title: About organizing and sharing context with Copilot Spaces
shortTitle: Organize and share context
intro: 'Understand how gathering context with {% data variables.product.prodname_copilot_spaces %} can improve your results and help your teammates.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.product.prodname_copilot_spaces_short %}.'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
---

{% data reusables.copilot.copilot-spaces.preview-note %}

{% data variables.product.prodname_copilot_spaces %} let you organize the context that {% data variables.product.prodname_copilot_short %} uses to answer your questions. {% data variables.product.prodname_copilot_spaces_short %} can include code from repositories, free-text content like transcripts or notes, and more—grouped together in one place. You can ask {% data variables.product.prodname_copilot_short %} questions grounded in that context, or share the space with your team to support collaboration and knowledge sharing.

## Why use {% data variables.product.prodname_copilot_spaces %}?

Whether you’re working solo or collaborating across a team, {% data variables.product.prodname_copilot_spaces_short %} help you make {% data variables.product.prodname_copilot_short %} more useful.

With {% data variables.product.prodname_copilot_spaces %} you can:

* Get more relevant, specific answers from {% data variables.product.prodname_copilot_short %}.
* Stay in flow by collecting what you need for a task in one place.
* Reduce repeated questions by sharing knowledge with your team.
* Support onboarding and reuse with self-service context that lives beyond chat history.

### How are {% data variables.product.prodname_copilot_spaces_short %} different from knowledge bases?

{% data variables.product.prodname_copilot_spaces_short %} are optimized for specific tasks and grounded conversations. Because context in {% data variables.product.prodname_copilot_spaces_short %} is scoped, {% data variables.product.prodname_copilot_short %}'s responses are more accurate and relevant.

{% rowheaders %}

|                      | {% data variables.product.prodname_copilot_spaces %}         | Knowledge bases                                             |
| -------------------- | --------------------------- | -------------------------------------------------------------- |
| Who can create   | Anyone with a {% data variables.product.prodname_copilot_short %} license             | Organization owners                                              |
| Owned by   | Organizations or individual users              | Organizations                             |
| Content type     | Any code hosted in repositories and free-text content                  | Markdown files hosted in {% data variables.product.github %}
| Context handling | Limited in size, which guarantees higher response quality given the focused selection | Unlimited, but that comes with reduced response quality |

{% endrowheaders %}

## Who can use {% data variables.product.prodname_copilot_spaces_short %}?

Anyone with a {% data variables.product.prodname_copilot_short %} license, including {% data variables.product.prodname_copilot_free_short %}, can create and use {% data variables.product.prodname_copilot_spaces_short %}.

{% data reusables.copilot.editor-preview-settings %}

{% data variables.product.prodname_copilot_spaces_short %} can belong to a personal account or to an organization. Spaces owned by an organization can be shared with other organization members (read-only) or kept private to the person who created the space.

Questions you submit in a space count as {% data variables.product.prodname_copilot_chat_short %} requests.

* If you're a {% data variables.product.prodname_copilot_free_short %} user, this usage counts toward your monthly chat limit.
* If you use {% data variables.product.prodname_copilot_spaces_short %} with a premium model, this usage counts toward your premium usage quota.

## Next steps

To start using {% data variables.product.prodname_copilot_spaces_short %}, see [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/creating-and-using-copilot-spaces).
