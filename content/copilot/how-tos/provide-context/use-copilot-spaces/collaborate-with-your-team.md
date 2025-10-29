---
title: Collaborating with your team using GitHub Copilot Spaces
shortTitle: Collaborate with your team
intro: 'Learn how to share {% data variables.copilot.copilot_spaces %} with your team to support collaboration and knowledge sharing.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.copilot.copilot_spaces_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/copilot-spaces/collaborating-with-your-team-using-copilot-spaces
  - /copilot/how-tos/context/copilot-spaces/collaborating-with-your-team-using-copilot-spaces
  - /copilot/how-tos/context/copilot-spaces/collaborate-with-your-team
  - /copilot/how-tos/context/use-copilot-spaces/collaborate-with-your-team
contentType: how-tos
category: 
  - Author and optimize with Copilot
---

{% data variables.copilot.copilot_spaces %} let you organize the context that {% data variables.product.prodname_copilot_short %} uses to answer your questions. Sharing {% data variables.copilot.copilot_spaces %} helps your team:

* Avoid repeated explanations and handoffs.
* Stay aligned on how a system works or what’s expected.
* Learn from past work, documentation, and examples.
* Get better help from {% data variables.product.prodname_copilot_short %} with grounded, team-curated context.

## Use cases for team collaboration

* **Onboarding**: Share a space with code, documentation, diagrams, and checklists to help new developers get started faster. Make other members of your team editors so anyone can update the included resources.
* **System knowledge**: Create a space for a complex system or workflow (like authentication or CI pipelines) that other people can reference.
* **Style guides or review checklists**: Document standards and examples in a space that {% data variables.product.prodname_copilot_short %} can reference when suggesting changes.

For example, a subject matter expert creates a space called “Accessibility Reviews” that includes your team’s internal accessibility checklist, product guidelines, and WCAG documentation. Developers can ask {% data variables.product.prodname_copilot_short %} questions directly in the space to ensure they're following the latest guidelines in their work.

## Sharing {% data variables.copilot.copilot_spaces_short %}

When you create a space, you can choose whether it’s owned by you or by one of your organizations. If you choose an organization:

* You can share the space with the organization, giving viewer, editor, or admin access to all organization members.
* You can give access to specific users or teams in the organization. For example, make everyone on your team an editor, or give admin access to a specific person so they can update the space's settings.

If you choose to create a personal space, **you can't share it with others**.

To share a space with others:

1. In the top right corner of the space, click **{% octicon "share" aria-hidden="true" aria-label="share" %}**.
1. To add specific users or teams, search for them with the search bar, then choose a role for the people you added.
1. Optionally, next to your organization's name, choose a base role for all other organization members.

   * **Viewers** can use the space to ask questions and view the included attachments and instructions.
   * **Editors** can update the space's attachments, description, name, and instructions, in addition to having all the permissions of viewers. However, editors can't update sharing settings or delete the space.
   * **Admins** can update sharing settings or delete the space, in addition to having all the permissions of viewers and editors.

1. Optionally, click **{% octicon "link" aria-label="the link" %} Copy link** to copy the link to the space and share it with others.

## Accessing shared {% data variables.copilot.copilot_spaces_short %}

If you’re part of an organization that has shared spaces, you can access them in the **Organizations** tab on [https://github.com/copilot/spaces](https://github.com/copilot/spaces?ref_product=copilot&ref_type=engagement&ref_style=text).

You can also use organization spaces directly in your IDE by specifying the organization as the owner when accessing the space. For more information, see [AUTOTITLE](/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces#using-copilot-spaces-in-your-ide).
