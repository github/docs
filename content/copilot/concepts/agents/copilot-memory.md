---
title: About GitHub Copilot Memory
shortTitle: Copilot Memory
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_memory %} helps {% data variables.product.prodname_copilot_short %} become more effective over time by remembering facts about your repositories and your personal coding preferences.'
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-concept&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE] This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

As a developer joining an existing codebase, you typically read the repository's README, coding conventions, and other documentation to understand how the project works and how to contribute. This helps you submit good quality pull requests from the start. Even so, the quality of your work steadily improves as you spend more time in the codebase and learn its nuances. In the same way, allowing {% data variables.product.prodname_copilot_short %} to build its own understanding of your repository enables it to become increasingly effective over time.

## Types of memories

{% data variables.product.prodname_copilot_short %} can use {% data variables.copilot.copilot_memory %} to store important facts about a repository and your personal preferences.

{% data variables.copilot.copilot_memory %} stores:

* **Repository-level facts**
  * Facts about a repository, such as coding conventions, architectural decisions, build commands, and project-specific rules.
  * Available to all users with access to {% data variables.copilot.copilot_memory %} for that repository.
* **User-level preferences**
  * Implied or stated personal preferences about how a user wants to interact with {% data variables.product.prodname_copilot_short %}.
  * Available only to that user's {% data variables.product.prodname_copilot_short %} interactions across repositories.
  * For {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, they can be viewed and deleted by an organization or enterprise administrator.

We typically refer to these repository-level facts and user-level preferences as "memories," and they are only created in response to {% data variables.product.prodname_copilot_short %} activity initiated by users who have {% data variables.copilot.copilot_memory %} enabled.

## Feature availability

{% data variables.copilot.copilot_memory %} is currently used by {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_cli_short %}.

Facts and preferences captured by one {% data variables.product.prodname_copilot_short %} feature can be used by another. For example, if {% data variables.copilot.copilot_cloud_agent %} discovers how your repository handles database connections, {% data variables.copilot.copilot_code-review_short %} can later apply that knowledge to spot inconsistent patterns in a pull request. Similarly, if {% data variables.copilot.copilot_code-review_short %} learns that certain settings must stay synchronized across two files, {% data variables.copilot.copilot_cloud_agent %} will know to update both files when changing one.

A few feature-specific limits apply:

* {% data variables.copilot.copilot_cli_short %} only applies stored facts and preferences for the user who initiated the operation.
* {% data variables.copilot.copilot_code-review_short %} uses repository-level facts only. User-level preferences are not applied during code review.

## Benefits of using {% data variables.copilot.copilot_memory %}

Stateless AI doesn't retain an understanding of a codebase between interactions. This forces you to either repeatedly explain coding conventions and code-specific details in your prompts, or maintain detailed custom instructions files.

{% data variables.copilot.copilot_memory %}:

* Reduces the burden of repeatedly providing the same details in your prompts.
* Reduces the need for regular, manual maintenance of custom instruction files.

By capturing and applying repository-level facts and user-level preferences, {% data variables.product.prodname_copilot_short %} builds its own knowledge of your codebases and personal workflow, adapts to your coding requirements, and delivers more value over time.

## How {% data variables.copilot.copilot_memory %} stores, retains, and uses information

### Repository-level facts

Repository-level facts are stored with citations pointing to the code that supports them. When {% data variables.product.prodname_copilot_short %} finds a fact relevant to its current work, it checks those citations against the current branch to confirm the information is still accurate. Only validated facts are used.

{% data variables.product.prodname_copilot_short %} only creates repository-level facts in response to actions by users with write access to the repository who have {% data variables.copilot.copilot_memory %} enabled. Once stored, those facts are available to any user who has access to {% data variables.copilot.copilot_memory %} in that repository, but those facts can only be used in operations on the same repository. This keeps what {% data variables.product.prodname_copilot_short %} learns about a repository scoped to that repository, preserving privacy and security.

Repository owners can review and manually delete the repository-level facts stored for their repository.

### User-level preferences

User-level preferences are stored with citations that may include direct user quotes. When {% data variables.product.prodname_copilot_short %} finds a preference relevant to its current work, it uses its best judgment to confirm the preference still applies.

{% data variables.product.prodname_copilot_short %} only creates user-level preferences in response to interactions initiated by a specific user, and those preferences are only available in that same user's later interactions. They capture an individual's coding style and workflow patterns, and stay tied to the user who created them.

Users can view and delete their own user-level preferences regardless of their {% data variables.product.prodname_copilot_short %} plan.

#### {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans

On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, user-level preferences can also be exported or deleted by an organization or enterprise administrator, either in bulk or per user.

Preferences are owned by the billing entity, which is the organization or enterprise that grants the user their license. When a memory is created, it is stored against the active billing entity for the user's current usage. Then, when {% data variables.product.prodname_copilot_short %} creates context for an agent session, it looks at the user's current active billing entity again and only retrieves memories that are owned by that billing entity. Users can view all their stored preferences and corresponding owners in their [personal settings](https://github.com/settings/copilot/memory?ref_product=copilot&ref_type=engagement&ref_style=text).

Users who have multiple licenses from different places must select a default billing entity in their [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text) in order to generate user-level preferences.

### Retention and validation

To prevent stale information from lingering, any stored fact or preference that goes unused is automatically deleted after 28 days. The 28-day timer may reset whenever {% data variables.product.prodname_copilot_short %} successfully validates and uses an entry.

Facts can also be captured from pull requests that were closed without merging. In those cases, the validation step ensures that {% data variables.product.prodname_copilot_short %}'s behavior is unaffected unless the current codebase still substantiates the information.

## Enabling {% data variables.copilot.copilot_memory %}

{% data variables.copilot.copilot_memory %} is enabled per user, not per repository. Once enabled, it applies in any repository where that user works with {% data variables.product.prodname_copilot %}. For individual plans, it's on by default. For enterprise- and organization-managed plans, an administrator must enable the policy first, and then individual users can opt out.

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself) or [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
