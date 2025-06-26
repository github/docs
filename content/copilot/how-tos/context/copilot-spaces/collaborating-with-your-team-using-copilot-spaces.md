---
title: Collaborating with your team using Copilot Spaces
shortTitle: Collaborate with your team
intro: 'Learn how to share {% data variables.copilot.copilot_spaces %} with your team to support collaboration and knowledge sharing.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
type: how_to
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces
---

{% data reusables.copilot.copilot-spaces.preview-note %}

{% data variables.copilot.copilot_spaces %} let you organize the context that {% data variables.product.prodname_copilot_short %} uses to answer your questions. Sharing {% data variables.copilot.copilot_spaces %} helps your team:

* Avoid repeated explanations and handoffs.
* Stay aligned on how a system works or what’s expected.
* Learn from past work, documentation, and examples.
* Get better help from {% data variables.product.prodname_copilot_short %} with grounded, team-curated context.

## Use cases for team collaboration

* **Onboarding**: Share a space with key code, docs, and checklists to help new developers get started faster.
* **System knowledge**: Create a space for a complex system or workflow (like authentication or CI pipelines) that other people can reference.
* **Style guides or review checklists**: Document standards and examples in a space that {% data variables.product.prodname_copilot_short %} can reference when suggesting changes.

For example, a subject matter expert creates a space called “Accessibility Reviews” that includes your team’s internal accessibility checklist, product guidelines, and WCAG documentation. Developers can ask {% data variables.product.prodname_copilot_short %} questions directly in the space to ensure they're following the latest guidelines in their work.

## Sharing {% data variables.copilot.copilot_spaces_short %}

When you create a space, you can choose whether it’s owned by you or by one of your organizations. If you choose an organization:

* You can share the space with others in the organization, giving read access to all organization members.
* Other people with access can view the context, use {% data variables.product.prodname_copilot_short %} within the space, and ask questions.

If you choose to create a personal space, **you can't share it with others**.

To share a space with your organization:

1. In the top right corner of the space, click **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}**, then click **{% octicon "share" aria-hidden="true" aria-label="share" %} Share**.
1. Change the base role to "The entire organization can access".

Other people in your organization can now view the space in the "Organizations" tab and use it to ask questions. Additionally, you can also click **{% octicon "link" aria-label="the link" %} Copy link** to copy the link to the space and share it with others.

## Accessing shared {% data variables.copilot.copilot_spaces_short %}

If you’re part of an organization that has shared spaces, you can access them in the **Organizations** tab on [https://github.com/copilot/spaces](https://github.com/copilot/spaces).
