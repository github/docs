---
title: About GitHub Copilot Memory
shortTitle: Copilot Memory
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_memory %} helps {% data variables.product.prodname_copilot_short %} become more effective over time by remembering facts about your repositories and your personal coding preferences.'
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=memory-purchase&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/copilot-memory
contentType: concepts
category:
  - Learn about Copilot
---

Any developer starting work on an existing codebase will typically read the repository's README, coding conventions, and other documentation to understand how the project works and how to contribute. This helps them submit good quality pull requests from the start. As they work on the project, the quality of their work will then typically improve, as they become more familiar with the codebase and learn its nuances. In the same way, {% data variables.copilot.copilot_memory %} allows {% data variables.product.prodname_copilot_short %} to build its own understanding of a repository, and the way you like to work, enabling it to become increasingly effective over time.

## Types of memories

{% data variables.product.prodname_copilot_short %} can store two types of memory:

* **Repository-level facts** describe a codebase and are shared with your collaborators.
* **User-level preferences** describe how you personally like to work and follow you between repositories. They can include how you want responses presented, actions that require your approval, and workflows you want {% data variables.product.prodname_copilot_short %} to follow across projects.

|  | Repository-level facts | User-level preferences |
| --- | --- | --- |
| **What they capture** | Facts about a repository, such as coding conventions, architectural decisions, build and test commands, and project-specific rules. | Your clearly stated, non-sensitive preferences, approval requirements, and reusable workflows that apply across your projects. |
| **Who can see them** | Users with read access to the repository who can use {% data variables.copilot.copilot_memory %}. Viewing memories in the repository's settings requires write access and user-level preferences enabled for your account. | You, and anyone who can view a shared agent session in which the preference appears. On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, an organization or enterprise administrator can also view and export them. |
| **Where they apply** | Only in operations on the same repository. | In your {% data variables.product.prodname_copilot_short %} interactions across all your repositories. |
| **Who can create them** | Users with write access to the repository who have {% data variables.copilot.copilot_memory %} enabled. | Only you, from your own interactions. |
| **Who can delete them** | Users with write access to the repository who have user-level preferences enabled for their account. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts). | You. On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, an organization or enterprise administrator can also delete them. |
| **How they are cited** | With citations pointing to the code that supports the fact. | With citations that may include direct quotes of what you said. |

For example, "this repository uses Vitest for unit tests" is a fact about the codebase that is useful to everyone working in it, so it is stored as a repository-level fact. "Explain your changes before you apply them" is a statement about how you personally want {% data variables.product.prodname_copilot_short %} to behave, so it is stored as a user-level preference and applies wherever you work.

Memories are only created when the applicable settings allow that type of memory.

## Where {% data variables.copilot.copilot_memory %} is available

{% data variables.copilot.copilot_memory %} is available on all paid {% data variables.product.prodname_copilot_short %} plans. Whether it is used depends on your plan's settings, repository access, and the surface you use.

{% data variables.copilot.copilot_memory %} can be used by {% data variables.product.prodname_copilot_short %} in:

* {% data variables.copilot.github_copilot_app %}
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.copilot_code-review_short %}
* {% data variables.copilot.copilot_cloud_agent %}
* {% data variables.copilot.agentic_autofix_caps %}
* {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_mobile %}
* {% data variables.product.prodname_copilot_short %} in Slack
* {% data variables.product.prodname_copilot_short %} in Microsoft Teams

Facts and preferences captured by one {% data variables.product.prodname_copilot_short %} surface can be used by another {% data variables.product.prodname_copilot_short %} surface. For example, if {% data variables.copilot.copilot_cloud_agent %} discovers how your repository handles database connections, {% data variables.copilot.copilot_code-review_short %} can later apply that knowledge to spot inconsistent patterns in a pull request. Similarly, if {% data variables.copilot.copilot_code-review_short %} learns that certain settings must stay synchronized across two files, {% data variables.copilot.copilot_cloud_agent %} will know to update both files when changing one.

> [!NOTE]
> Availability in the {% data variables.copilot.github_copilot_app %} depends on whether {% data variables.copilot.copilot_memory %} has been made available for your account. There is no setting in the app to turn on this availability. Where available, personal settings, repository settings, and applicable policies determine which types of memory can be used.
>
> The **Memory** setting for a project in the {% data variables.copilot.github_copilot_app %} is a separate feature. It stores preferences for that project across tasks, not the shared repository facts and user-level preferences described in this article. Editing or turning off a project's memory does not edit or turn off {% data variables.copilot.copilot_memory %}.

## How storage and ownership differ between memory types

The two types of memory are stored separately, and are owned and managed differently.

### Repository-level facts

Each repository-level fact belongs to one specific repository, and can be viewed and deleted in the repository's settings. When {% data variables.product.prodname_copilot_short %} finds a repository-level fact relevant to its current work, it checks the fact's citations against the current branch to judge whether the information is still accurate. Because this is a judgment {% data variables.product.prodname_copilot_short %} makes, rather than a guarantee enforced by the system, a stored fact should not be relied on as a rule that will always be followed. To provide instructions consistently, use custom instructions instead. See [Using custom instructions alongside {% data variables.copilot.copilot_memory %}](#using-custom-instructions-alongside-copilot-memory).

Repository facts are not pooled across an organization's repositories. Forking a repository does not copy its stored memories to the fork. Your user-level preferences can still apply when you work in the fork.

### User-level preferences

User-level preferences are stored in your user settings. When {% data variables.product.prodname_copilot_short %} finds a preference relevant to its current work, it uses its best judgment to confirm the preference still applies.

#### {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans

On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, user-level preferences are owned by the billing entity, which is the organization or enterprise that grants the user their license. When a preference is created, it is stored against the active billing entity for the user's current usage. Then, when {% data variables.product.prodname_copilot_short %} creates context for an agent session, it looks at the user's current active billing entity again and only retrieves preferences that are owned by that billing entity. Users can review their stored user-level preferences, and the owner of each displayed preference, in their [personal settings](https://github.com/settings/copilot/memory?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=memory-doc-memory-settings&utm_medium=docs&utm_campaign=universe-2026).

Users who have multiple licenses from different places must select a default billing entity in their [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=memory-doc-account-settings&utm_medium=docs&utm_campaign=universe-2026) in order to create new repository-level facts or user-level preferences.

Organization and enterprise owners can export or delete user-level preferences for their members, either in bulk or per user. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).

## How memories are created

{% data variables.product.prodname_copilot_short %} creates memories itself, as a byproduct of working with you. As {% data variables.product.prodname_copilot_short %} works, it notices durable facts about a repository, and details of your own personal preferences, that it determines are worth keeping, and it stores these for later use.

You can review the user-level preferences that {% data variables.product.prodname_copilot_short %} has stored for you, and delete any that you don't want {% data variables.product.prodname_copilot_short %} to use. If you have write access to a repository and user-level preferences enabled for your account, you can also review and delete repository-level facts in the repository's settings. You cannot directly create or edit an individual memory in the settings on {% data variables.product.prodname_dotcom_the_website %}, but you can influence {% data variables.product.prodname_copilot_short %} to create memories. If you clearly state a personal preference, or fact about a repository—or explicitly ask {% data variables.product.prodname_copilot_short %} to remember something—it is likely to be captured as a memory. You can also use {% data variables.copilot.copilot_cli_short %} to import prepared memories in bulk. See [Importing memories with {% data variables.copilot.copilot_cli_short %}](/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories#importing-memories-with-copilot-cli). When {% data variables.product.prodname_copilot_short %} creates a memory as a result of something you said, your words are recorded as the citation for the memory.

{% data variables.product.prodname_copilot_short %} chooses whether a memory is a repository-level fact or a user-level preference. It bases that choice on who the memory applies to, rather than on who stated it. Something that would be true for anyone working in the repository becomes a repository-level fact, while something that reflects your own way of working becomes a user-level preference. If your intent is ambiguous, {% data variables.product.prodname_copilot_short %} asks you to clarify the scope rather than guessing. You can avoid ambiguity by explicitly stating whether the memory is for you or for everyone working in the repository.

The type of memory {% data variables.product.prodname_copilot_short %} can create depends on the context. Repository-level facts are only created when {% data variables.product.prodname_copilot_short %} is working in a repository you have write access to, and user-level preferences are only created when {% data variables.product.prodname_copilot_short %} can identify you as the person it is working with.

## Data stored for each memory

Each memory contains data that {% data variables.product.prodname_copilot_short %} requires to determine whether, when, and how to use that memory. Some of this data—for example, the voting details—is for internal use only and is therefore not displayed on the {% data variables.product.github %} website or included in audit logs. The following table shows a selection of the data stored for each memory, and indicates which of the fields are displayed in the settings pages on {% data variables.product.prodname_dotcom_the_website %}.

| Data | Example | Displayed |
| ---- | ------- | --------- |
| Memory text | `The payments module must never call Stripe directly — route all charges through BillingGateway.` | {% octicon "check" aria-label="Yes" %} |
| Subject area | `architecture` | {% octicon "check" aria-label="Yes" %} |
| Agent | `Copilot cloud agent` | {% octicon "check" aria-label="Yes" %} |
| Model | `claude-sonnet-4` | {% octicon "check" aria-label="Yes" %} |
| Billing entity | `Acme Org` |  {% octicon "check" aria-label="Yes" %} |
| Citations | — | {% octicon "x" aria-label="No" %} |
| Reason for storing | — | {% octicon "x" aria-label="No" %} |
| Repository fact or user preference | — | {% octicon "x" aria-label="No" %} |
| Voting data | — | {% octicon "x" aria-label="No" %} |
| Expiry datetime | — | {% octicon "x" aria-label="No" %} |

> [!NOTE]
> * Data examples have been omitted for fields that are not displayed.
> * Model and billing entity are not always present, so may not be displayed.
> * If the billing entity is an organization, the building icon (🏢) is displayed in the user interface. If it is an enterprise, the globe icon (🌐) is displayed.

## How memories are reinforced and retired

{% data variables.product.prodname_copilot_short %} does not treat a memory as permanently true once it has been stored. Instead, {% data variables.product.prodname_copilot_short %} is instructed to check the citations provided with each memory before using it. {% data variables.product.prodname_copilot_short %} uses an internal voting system to rate the usefulness of each memory, based on whether the memory is still valid. It can upvote a memory that it's able to validate, and downvote a memory if it's found to be wrong or outdated. This reinforces useful memories.

Not all memories from the memory store are sent to a model with your prompt. Upvoted memories are more likely to be sent. So upvoting makes a memory more likely to be applied in future work. Memories that are downvoted past a threshold are no longer used and will be deleted after a period of disuse.

Upvoting and downvoting are carried out automatically by {% data variables.product.prodname_copilot_short %}. Although you can influence {% data variables.product.prodname_copilot_short %} to upvote or downvote a memory—by providing a positive or negative comment about the use of that memory in a session—this is something you can leave to {% data variables.product.prodname_copilot_short %} to manage. The vote count for a memory is intentionally not displayed, but you can see the effect of voting in the order in which memories are listed in the relevant settings page. Upvoted memories rise up the list, while downvoted memories move down.

The settings pages show memories ranked by usefulness. Memories that {% data variables.product.prodname_copilot_short %} has learned not to use are hidden from the list, but can remain stored until they expire. A memory disappearing from the list does not necessarily mean it has been deleted.

If {% data variables.product.prodname_copilot_short %} has used a memory that you don't want it to use again, you should explicitly delete it from the repository settings (for a repository fact) or your personal settings (for a user-level preference). See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Retention and expiry

To prevent stale information from lingering, stored repository facts and user preferences expire after a period without reinforcement. The expiry period starts when a memory is created and resets when {% data variables.product.prodname_copilot_short %} upvotes it. Simply retrieving a memory does not reset this period.

The default expiry period is 90 days. Enterprise and organization owners can configure the expiry period for repository-level facts to any value between 7 and 180 days (inclusive). This setting does not apply to user-level preferences, which always use the default retention period. Changing the retention period does not re-date repository-level facts that are already stored: they adopt the new retention period the next time {% data variables.product.prodname_copilot_short %} reinforces them.

If different expiry periods are set by an organization and by the enterprise to which the organization belongs, the lower of the two values is used.

When {% data variables.product.prodname_copilot_short %} upvotes a memory, the expiry period for that memory is reset to the default, or configured, expiry period. This extends the life of a memory that has been used. Downvoting a memory does not alter the period remaining before that memory expires.

> [!NOTE]
> Repository facts can be captured from pull requests that were closed without merging. {% data variables.product.prodname_copilot_short %} is instructed to check these facts against the current codebase, but this does not guarantee that it will recognize every outdated fact.

## What {% data variables.product.prodname_copilot_short %} does not store

The system prevents some content from being stored, and {% data variables.product.prodname_copilot_short %} is instructed not to store other content:

* Memories are checked for secrets, such as tokens, keys, or credentials. Memories in which a secret is detected are rejected and are not stored.
* The system can reject memories that contain recognized model-control tokens, as a defense against prompt injection.
* {% data variables.product.prodname_copilot_short %} is instructed not to store sensitive personal information, confidential information, or anything shared in confidence.
* {% data variables.product.prodname_copilot_short %} is instructed not to store short-lived or task-specific instructions, because memories are intended to capture things that stay true over time.


## Default settings

User-level preferences and repository-level facts have separate defaults. The following defaults apply where {% data variables.copilot.copilot_memory %} is available and you or an administrator have not changed the relevant settings. Existing opt-outs remain in effect.

| Plan | Default for user-level preferences |
| --- | --- |
| {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %} | Enabled. You can opt out in your [personal settings](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory). |
| {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} | Disabled until an [organization owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-organization) or [enterprise owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-enterprise) enables the policy. You can then opt out in your [personal settings](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory). |

**Repository-level facts have a separate default for all of these plans.** Repository memory access is allowed unless enterprise, organization, or repository settings restrict it. An organization's **Repository access** setting defaults to **All repositories**. Disabling user-level preferences in your personal settings does not disable repository-level facts. See [Managing {% data variables.copilot.copilot_memory %} for repositories](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

### Settings for each surface

Some surfaces have an additional local setting. Turning it on allows the surface to use {% data variables.copilot.copilot_memory %} only if the settings described above also allow it.

| Surface | Default | More information |
| --- | --- | --- |
| {% data variables.copilot.copilot_cli_short %}, interactive sessions | Local setting on. Follows your {% data variables.product.github %} settings. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-github-copilot-cli) |
| {% data variables.copilot.copilot_cli_short %}, programmatic sessions | Off. Use `--enable-memory` for each run. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-github-copilot-cli) |
| {% data variables.product.prodname_vscode %} | Off. Enable the local setting. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-visual-studio-code) |
| {% data variables.copilot.github_copilot_app %} | Follows your {% data variables.product.github %} settings, where available for your account. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#copilot-memory-in-the-github-copilot-app) |
| {% data variables.copilot.copilot_cloud_agent %} | Follows your {% data variables.product.github %} settings. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself#disabling-or-enabling-copilot-memory) and [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |
| {% data variables.copilot.copilot_code-review_short %} | Follows repository settings. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |
| {% data variables.copilot.agentic_autofix_caps %} | Follows repository settings. | [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories) |

All of these surfaces support repository-level facts. All except {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.agentic_autofix %} also support user-level preferences. In {% data variables.copilot.copilot_cli_short %}, user preferences belong to the user who started the session.

In the {% data variables.copilot.github_copilot_app_short %}, and {% data variables.copilot.copilot_cli_short %} interactive sessions, {% data variables.product.prodname_copilot_short %} can ask you to approve storing a memory. {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %} do not ask for this approval.

The {% data variables.copilot.copilot_cloud_agent %} behavior described here also applies to its sessions started from Slack, or Microsoft Teams. See [AUTOTITLE](/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-slack) and [AUTOTITLE](/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams).

{% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.agentic_autofix %} never apply user-level preferences, so a personal preference will not change how your pull requests are reviewed or security alerts are fixed.

In {% data variables.copilot.copilot_cli_short %}, only the root agent can use `store_memory` or `vote_memory`. Subagents can read memories when they have access to `read_memories`, but they cannot change them.

> [!NOTE]
> Applications built with the {% data variables.copilot.copilot_sdk_short %} can enable {% data variables.copilot.copilot_memory %} when creating or resuming a session. The SDK does not provide APIs to list, edit, or delete memories. See [AUTOTITLE](/copilot/how-tos/copilot-sdk/troubleshooting/compatibility).

## What determines whether {% data variables.copilot.copilot_memory %} is used

User-level preferences and repository-level facts have separate controls. Whether {% data variables.copilot.copilot_memory %} is used depends on the settings for the relevant type of memory and the client you are using:

1. **Your personal setting.** The {% data variables.copilot.copilot_memory %} setting in your personal account controls whether user-level preferences can be stored and used in your sessions. It does not control repository-level facts or override administrator restrictions. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

   On enterprise- and organization-managed plans, user-level preferences are off until an administrator enables them, after which you can opt out.

1. **Your enterprise or organization policy.** On managed plans, the {% data variables.copilot.copilot_memory %} policy controls user-level preferences. If you hold licenses from more than one organization, the most restrictive policy applies. Repository access is controlled separately. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
1. **Repository access and settings.** An organization owner can allow repository-level facts for all, selected, or no repositories, subject to enterprise restrictions. A repository administrator can also turn off repository-level facts for an individual repository.

   > [!NOTE]
   > Turning off repository-level facts does not turn off user-level preferences. Similarly, disabling user-level preferences does not by itself disable repository-level facts.

1. **Your client setting.** In an interactive {% data variables.copilot.copilot_cli_short %} session, `/memory off` disables both types of memory, even if the other settings allow them. This preference is independent of your setting on {% data variables.product.prodname_dotcom_the_website %} and is saved for future interactive sessions on that machine. `/memory on` clears this preference, but cannot override applicable enterprise, organization, or repository restrictions. Non-interactive runs require the separate `--enable-memory` option. {% data variables.product.prodname_vscode %} also has its own setting within the application. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

### Summary of when {% data variables.copilot.copilot_memory %} is used

To use {% data variables.copilot.copilot_memory %}:

* You must have a supported paid {% data variables.product.prodname_copilot_short %} plan.
* The client you are using must support {% data variables.copilot.copilot_memory %}, and any local setting must allow it. In {% data variables.copilot.copilot_cli_short %}, use `/memory show` to check the local setting.
* If you have multiple {% data variables.product.prodname_copilot_short %} licenses, you must select a default billing entity before new memories can be stored.

For user-level preferences, your personal {% data variables.copilot.copilot_memory %} setting and any applicable enterprise or organization policy must also allow them.

For repository-level facts:

* You must have access to the repository.
* You must have push permission to the repository for new repository facts to be created.
* {% data variables.copilot.copilot_memory %} must **not** be disabled for the repository in the repository's Copilot settings.
* If the repository is owned by an organization, the organization's {% data variables.copilot.copilot_memory %} repository access must include that repository.
* Any applicable enterprise restriction on repository memory access must allow it.

## Usage and billing

Memories included in a model's context count toward token usage and can affect the {% data variables.product.prodname_ai_credits_short %} consumed by an interaction. The cost depends on the model and the number of tokens used. For more information, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).

## Using custom instructions alongside {% data variables.copilot.copilot_memory %}

{% data variables.copilot.copilot_memory %} and custom instructions solve similar problems in different ways, and they work well together.

{% data variables.copilot.copilot_memory %} is built and curated by {% data variables.product.prodname_copilot_short %}. It requires no maintenance from you, it adapts as your codebase and your habits change, and it discards what stops being relevant. {% data variables.product.prodname_copilot_short %} decides what to remember, judges whether a memory still applies, and may not apply a memory in every session.

Custom instructions are written and maintained by you. They provide instructions for {% data variables.product.prodname_copilot_short %} to consider and are visible in your repository or your personal settings, so you can see and review exactly what {% data variables.product.prodname_copilot_short %} has been told.

Use custom instructions to state important rules, such as a security requirement or a mandatory review step, and let {% data variables.copilot.copilot_memory %} handle the accumulated detail that would otherwise make an instructions file long and hard to maintain. Neither memories nor custom instructions guarantee that {% data variables.product.prodname_copilot_short %} will follow a rule every time, so review its work. For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
