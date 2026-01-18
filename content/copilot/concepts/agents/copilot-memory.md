---
title: About agentic memory for GitHub Copilot
shortTitle: Copilot Memory
allowTitleToDifferFromFilename: true
intro: 'Find out how {% data variables.product.prodname_copilot_short %} can store details it has learned about a codebase and use that knowledge for future work in a repository.'
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-concept&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

## Introduction

As a developer, when you start working on an existing codebase—perhaps as a new member of the development team—you can read the README for the repository, the coding conventions documentation, and other information to help you understand the repository and how you should work when updating or adding code. This will help you submit good quality pull requests. However, the quality of work you're able to deliver will steadily improve as you work on the codebase and learn more about it. In the same way, by allowing {% data variables.product.prodname_copilot_short %} to build its own understanding of your repository, you can enable it to become increasingly effective over time.

Copilot can develop a persistent understanding of a repository by storing "memories."

Memories are tightly scoped pieces of information about a repository, that are deduced by Copilot as it works on the repository. Memories are:

* Repository-specific.
* Only created in response to {% data variables.product.prodname_copilot_short %} activity initiated by users who have had {% data variables.copilot.copilot_memory %} enabled.

Memories created by one part of {% data variables.product.prodname_copilot_short %} can be used by another part of {% data variables.product.prodname_copilot_short %}. So, for example, if {% data variables.copilot.copilot_coding_agent %} discovers how your repository handles database connections, {% data variables.copilot.copilot_code-review_short %} can later apply that knowledge to spot inconsistent patterns in a pull request it is reviewing. Similarly, if {% data variables.copilot.copilot_code-review_short %} learns about settings that must stay synchronized in two separate files, then {% data variables.copilot.copilot_coding_agent %} will know that if it alters the settings in one of those files it must update the other file accordingly.

## Benefits of using {% data variables.copilot.copilot_memory %}

AI that is stateless and doesn't retain an understanding of a codebase between separate human/AI interactions, requires you either to repeatedly explain coding conventions and important details about specific code in your prompts, or to create detailed custom instructions files, which you must then maintain.

{% data variables.copilot.copilot_memory %}:

* Reduces the burden of repeatedly providing the same details in your prompts.
* Reduces the need for regular, manual maintenance of custom instruction files.

By building and maintaining a persistent, repository-level memory, {% data variables.product.prodname_copilot_short %} develops its own knowledge of your codebase, adapts to your coding requirements, and increases the value it can deliver over time.

## Where is {% data variables.copilot.copilot_memory %} used?

Currently {% data variables.copilot.copilot_memory %} is used by {% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_code-review_short %} when these features are working on pull requests on the {% data variables.product.github %} website, and by {% data variables.copilot.copilot_cli_short %}. Memories are only created and used by {% data variables.product.prodname_copilot_short %} when {% data variables.copilot.copilot_memory %} has been enabled for the user initiating the {% data variables.product.prodname_copilot_short %} operation.

Agentic memory will be extended to other parts of {% data variables.product.prodname_copilot_short %}, and for personal and organizational scopes, in future releases.

## How memories are stored, retained and used

Each memory that {% data variables.product.prodname_copilot_short %} generates is stored with citations. These are references to specific code locations that support the memory. When {% data variables.product.prodname_copilot_short %} finds a memory that relates to the work it is doing, it checks the citations against the current codebase to validate that the information is still accurate and is relevant to the current branch. The memory is only used if it is successfully validated.

To avoid stale memories being retained, resulting in outdated information adversely affecting {% data variables.product.prodname_copilot_short %}'s decision making, memories are automatically deleted after 28 days.

If a memory is validated and used by {% data variables.product.prodname_copilot_short %}, then a new memory with the same details may be stored, which increases the longevity of that memory.

Memories can be created from code in pull requests that were closed without being merged. However, the validation mechanism ensures that such memories will not affect {% data variables.product.prodname_copilot_short %}'s behavior if there is no substantiating evidence in the current codebase.

{% data variables.product.prodname_copilot_short %} only creates memories in a repository in response to actions taken within that repository by people who have write permission for the repository, and for whom {% data variables.copilot.copilot_memory %} has been enabled. Memories are repository scoped, not user scoped, so all memories stored for a repository are available for use in {% data variables.product.prodname_copilot_short %} operations initiated by any user who has access to {% data variables.copilot.copilot_memory %} for that repository. The memories stored for a repository can only be used in {% data variables.product.prodname_copilot_short %} operations on that same repository. In this way, what {% data variables.product.prodname_copilot_short %} learns about a repository stays within that repository, ensuring privacy and security.

If you are the owner of a repository where {% data variables.copilot.copilot_memory %} is being used, you can review and manually delete the memories for that repository. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory).

## About enabling {% data variables.copilot.copilot_memory %}

{% data variables.copilot.copilot_memory %} is turned off by default and can be enabled in the enterprise, organization, and personal settings.

The ability to use {% data variables.copilot.copilot_memory %} is granted to users, rather than being enabled for repositories. After {% data variables.copilot.copilot_memory %} has been enabled for a user, {% data variables.product.prodname_copilot_short %} will be able to use agentic memory in any repository in which that person uses {% data variables.product.prodname_copilot %}.

When enabled at the enterprise or organization level, {% data variables.copilot.copilot_memory %} will be available to all organization members who receive a {% data variables.product.prodname_copilot_short %} subscription from that organization.

Users who have an individual {% data variables.product.prodname_copilot_short %} subscription, from a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, must enable {% data variables.copilot.copilot_memory %} in their personal {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.github %}.

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory).
