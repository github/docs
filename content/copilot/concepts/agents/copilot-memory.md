---
title: About GitHub Copilot Memory
shortTitle: Copilot Memory
allowTitleToDifferFromFilename: true
intro: 'Find out how {% data variables.product.prodname_copilot_short %} can store repository-level facts and user-level preferences, and use that knowledge in future work.'
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-concept&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE]
> * This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.
> * User-level preferences are currently only available for users on a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan.

## Introduction

As a developer joining an existing codebase, you typically read the repository's README, coding conventions, and other documentation to understand how the project works and how to contribute. This helps you submit good quality pull requests from the start. Even so, the quality of your work steadily improves as you spend more time in the codebase and learn its nuances. In the same way, allowing {% data variables.product.prodname_copilot_short %} to build its own understanding of your repository enables it to become increasingly effective over time.

Copilot can use {% data variables.copilot.copilot_memory %} to store important facts about a repository. For users on a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, it can also persist personal preferences.

{% data variables.copilot.copilot_memory %} stores:

* **Repository-level facts**
  * Facts about a repository, such as coding conventions, architectural decisions, build commands, and project-specific rules.
  * Available to all users with access to {% data variables.copilot.copilot_memory %} for that repository.
* **User-level preferences**
  * Implied or stated personal preferences about how a user wants to interact with {% data variables.product.prodname_copilot_short %}.
  * Available only to that user across {% data variables.product.prodname_copilot_short %} interactions in all repositories.
  * Currently only available for users on a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan.

We typically refer to these repository-level facts and user-level preferences as "memories," and they are only created in response to {% data variables.product.prodname_copilot_short %} activity initiated by users who have {% data variables.copilot.copilot_memory %} enabled.

Facts and preferences captured by one {% data variables.product.prodname_copilot_short %} feature can be used by another. For example, if {% data variables.copilot.copilot_cloud_agent %} discovers how your repository handles database connections, {% data variables.copilot.copilot_code-review_short %} can later apply that knowledge to spot inconsistent patterns in a pull request. Similarly, if {% data variables.copilot.copilot_code-review_short %} learns that certain settings must stay synchronized across two files, {% data variables.copilot.copilot_cloud_agent %} will know to update both files when changing one.

## Benefits of using {% data variables.copilot.copilot_memory %}

Stateless AI doesn't retain an understanding of a codebase between interactions. This forces you to either repeatedly explain coding conventions and code-specific details in your prompts, or maintain detailed custom instructions files.

{% data variables.copilot.copilot_memory %}:

* Reduces the burden of repeatedly providing the same details in your prompts.
* Reduces the need for regular, manual maintenance of custom instruction files.

By capturing and applying repository-level facts and user-level preferences, {% data variables.product.prodname_copilot_short %} builds its own knowledge of your codebases and personal workflow, adapts to your coding requirements, and delivers more value over time.

## Where is {% data variables.copilot.copilot_memory %} used?

{% data variables.copilot.copilot_memory %} is currently used by {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_cli_short %}. A few feature-specific limits apply:

* {% data variables.copilot.copilot_cli_short %} only applies stored facts and preferences for the user who initiated the operation.
* {% data variables.copilot.copilot_code-review_short %} uses repository-level facts only. User-level preferences are not applied during code review.

## How {% data variables.copilot.copilot_memory %} stores, retains, and uses information

**Repository-level facts** are stored with citations pointing to the code that supports them. When {% data variables.product.prodname_copilot_short %} finds a fact relevant to its current work, it checks those citations against the current branch to confirm the information is still accurate. Only validated facts are used.

{% data variables.product.prodname_copilot_short %} only creates repository-level facts in response to actions by users with write access to the repository who have {% data variables.copilot.copilot_memory %} enabled. Once stored, those facts are available to any user who has access to {% data variables.copilot.copilot_memory %} in that repository, but those facts can only be used in operations on the same repository. This keeps what {% data variables.product.prodname_copilot_short %} learns about a repository scoped to that repository, preserving privacy and security.

**User-level preferences** are stored with citations that may include direct user quotes. When {% data variables.product.prodname_copilot_short %} finds a preference relevant to its current work, it uses its best judgment to confirm the preference still applies.

{% data variables.product.prodname_copilot_short %} only creates user-level preferences in response to interactions initiated by a specific user, and those preferences are only available in that same user's later interactions. They capture an individual's coding style and workflow patterns, and stay tied to the user who created them.

To prevent stale information from lingering, any stored fact or preference that goes unused is automatically deleted after 28 days. The 28-day timer may reset whenever {% data variables.product.prodname_copilot_short %} successfully validates and uses an entry.
Facts can also be captured from pull requests that were closed without merging. In those cases, the validation step ensures that {% data variables.product.prodname_copilot_short %}'s behavior is unaffected unless the current codebase still substantiates the information.

Repository owners can review and manually delete the repository-level facts stored for their repository. Users with access to user-level {% data variables.copilot.copilot_memory %} can do the same for their own preferences. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory).

## About enabling {% data variables.copilot.copilot_memory %}

{% data variables.copilot.copilot_memory %} is enabled per user, not per repository. Once a user has it enabled, {% data variables.product.prodname_copilot_short %} can use {% data variables.copilot.copilot_memory %} in any repository where that user works with {% data variables.product.prodname_copilot %}.

For individual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers, {% data variables.copilot.copilot_memory %} is on by default and can be disabled in personal {% data variables.product.prodname_copilot_short %} settings on {% data variables.product.github %}.

For enterprise and organization-managed subscriptions, {% data variables.copilot.copilot_memory %} is off by default. An enterprise or organization admin can enable it in their settings, which makes it available to all members who receive a {% data variables.product.prodname_copilot_short %} subscription through that organization.

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory).
