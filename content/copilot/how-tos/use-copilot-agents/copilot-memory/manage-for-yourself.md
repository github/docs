---
title: Managing Copilot Memory for your personal account
shortTitle: Manage for yourself
intro: Review and manage the coding conventions, preferences, and other details that {% data variables.product.prodname_copilot_short %} has stored from your interactions.
product: '{% data reusables.gated-features.copilot-memory %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-memory-how-to-signup&utm_medium=docs&utm_campaign=dec25postuniverse" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.memory-how-to-intro %}

Your personal setting controls whether {% data variables.product.prodname_copilot_short %} can store and use user-level preferences in your sessions. Repository-level facts have separate controls.

On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, an administrator must allow user-level preferences before you can use them. Enabling the policy does not undo a choice you previously made to disable user-level preferences. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).

Settings in individual applications can further restrict {% data variables.copilot.copilot_memory %}, but cannot override your {% data variables.product.github %} settings or policies.

This article covers reviewing and deleting the memories that {% data variables.product.prodname_copilot_short %} has already stored. For guidance on getting a specific fact or preference remembered in the first place, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories).

## Disabling or enabling {% data variables.copilot.copilot_memory %}

The {% data variables.copilot.copilot_memory %} setting in your personal account controls user-level preferences in your own {% data variables.product.prodname_copilot_short %} sessions. It does not control repository-level facts or change other users' sessions.

The dropdown shows your saved setting. Enterprise or organization policies can still prevent you from using user-level preferences. For repository-level controls, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

{% data reusables.user-settings.copilot-settings %}
1. Under "Features", scroll down to the setting for **{% data variables.copilot.copilot_memory %}**.
1. Click the dropdown button and choose whether to enable or disable user-level preferences.

Disabling user-level preferences does not disable repository-level facts or delete stored memories. If you want to delete your user-level preferences, review and delete them before turning them off.

### {% data variables.copilot.copilot_memory %} in {% data variables.copilot.copilot_cli %}

In interactive sessions, the CLI's local {% data variables.copilot.copilot_memory %} setting is on by default, so it follows your {% data variables.product.github %} settings and policies. Use `/memory off` to disable both types of memory in the CLI, or `/memory on` to remove that local opt-out. The choice takes effect in the current session and is saved for future interactive sessions on that machine. Changing your personal setting on {% data variables.product.prodname_dotcom_the_website %} does not clear a CLI opt-out. You can also disable {% data variables.copilot.copilot_memory %} in your {% data variables.copilot.copilot_cli_short %} user settings with `"memory": false`. The CLI setting cannot override applicable enterprise, organization, or repository restrictions.

To check the CLI setting, enter `/memory` or `/memory show`. The command displays the client setting and a link to manage your stored memories on {% data variables.product.github %}. An enabled status does not mean that your account or repository policies allow both types of memory.

In non-interactive runs, such as `copilot -p "YOUR PROMPT"`, {% data variables.copilot.copilot_memory %} is disabled by default, even if it is enabled for interactive sessions. Add `--enable-memory` to enable it for that run. This option takes precedence over a saved `"memory": false` setting, but account, repository, and tool-permission restrictions still apply. It does not change your saved setting.

> [!NOTE]
> Turning off {% data variables.copilot.copilot_memory %} in the CLI stops further storage and retrieval, but memories already supplied to an existing conversation can remain in its context. To continue without that earlier context, turn memory off and start a new session.

### {% data variables.copilot.copilot_memory %} in {% data variables.product.prodname_vscode %}

For {% data variables.product.prodname_copilot_short %} sessions that run in its **Local Agent Host**, {% data variables.product.prodname_vscode %} has its own {% data variables.copilot.copilot_memory %} setting. It is off by default, even when your {% data variables.product.github %} settings allow memory. These sessions can use repository-level facts and user-level preferences when the applicable settings allow them.

1. Open **Settings** in {% data variables.product.prodname_vscode %}.
1. Search for `chat.copilot.memory.enabled`.
1. Select the checkbox to enable {% data variables.copilot.copilot_memory %}, or clear it to disable the feature in {% data variables.product.prodname_vscode %}.

Enabling this setting does not override your {% data variables.product.github %} settings or policies. On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, an [organization owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-organization) or [enterprise owner](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-memory-for-an-enterprise) must also allow user-level preferences. Repository-level facts follow the separate [repository access controls](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

This setting does not affect {% data variables.product.prodname_vscode_shortname %}'s memory tool for local memory files. See [Use memory with agents in VS Code](https://code.visualstudio.com/docs/agents/run/memory) in the {% data variables.product.prodname_vscode_shortname %} documentation.

### {% data variables.copilot.copilot_memory %} in the {% data variables.copilot.github_copilot_app %}

{% data variables.copilot.copilot_memory %} must be available for your account in the app. The app does not provide a separate toggle to make it available or a screen for managing these shared memories.

Where are the settings for {% data variables.copilot.copilot_memory %}:

* **User-level preferences** — as an individual users, you can enable or disable {% data variables.copilot.copilot_memory %} in your personal settings on {% data variables.product.prodname_dotcom_the_website %}. See [Disabling or enabling Copilot memory](#disabling-or-enabling-copilot-memory). On {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans, an organization owner or enterprise owner must first allow you to enable {% data variables.copilot.copilot_memory %}. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator).
* **Repository-level facts** — the repository's settings and applicable repository access policies must allow these. If access is blocked by a policy, ask the relevant administrator to check the [repository controls](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#managing-copilot-memory-for-repositories).

The **Memory** setting in a project's settings controls a separate set of preferences that the project remembers across tasks. You can edit those preferences there, but this does not change your shared {% data variables.copilot.copilot_memory %} facts or preferences. Use the personal or repository settings on {% data variables.product.prodname_dotcom_the_website %} to view and delete those.

## Selecting a default billing entity

If you receive {% data variables.product.prodname_copilot_short %} access through multiple enterprises or organizations, you **must** select a default billing entity in order to create new repository-level facts or user-level preferences with {% data variables.copilot.copilot_memory %}. The billing entity determines which account "owns" (can manage and delete) user-level preferences that are generated for your account. Do this in your [account settings](https://github.com/settings/copilot/features?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=manage-memory-individual-settings&utm_medium=docs&utm_campaign=universe-2026).

Until you select a default, {% data variables.product.prodname_copilot_short %} cannot create new memories for you, and will tell you to choose one.

The owner of a user-level preference is set when the preference is created by {% data variables.copilot.copilot_memory %} and it does not change afterwards. If you later move to a different license, the preferences you have already generated stay with the organization or enterprise that owned them, and {% data variables.product.prodname_copilot_short %} will no longer retrieve them for you. Existing repository-level facts remain associated with their repository and are not restricted to your active billing entity.

## Viewing and deleting your user-level preferences

{% data variables.copilot.copilot_memory %} stores preferences for your personal use of {% data variables.product.prodname_copilot_short %}.

{% data reusables.user-settings.copilot-settings %}
1. In the sidebar, under **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, click **Memory**.
1. To delete a memory, click **{% octicon "trash" aria-label="Delete memory" %}** next to it. To delete several memories at once, select their checkboxes, then click **Delete**.

Memories are ranked by usefulness. Memories that {% data variables.product.prodname_copilot_short %} has learned not to use are hidden from the list, but can remain stored until they expire.

> [!NOTE]
> If you have write access to a repository and user-level preferences enabled for your account, you can also view and delete repository-level facts in the repository's settings. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-and-deleting-repository-level-facts).

## Enabling {% data variables.copilot.copilot_dreaming %} for your personal account

{% data variables.copilot.copilot_dreaming %} for personal memories, and for your personally owned repositories, is disabled by default. You can enable {% data variables.copilot.copilot_dreaming %} in your personal {% data variables.product.prodname_copilot_short %} settings.

If you get access to {% data variables.product.prodname_copilot_short %} through an organization or enterprise, your ability to enable {% data variables.copilot.copilot_dreaming %} may be limited by policies set by the organization or enterprise. For more information, see [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-dreaming).

> [!NOTE]
> {% data variables.copilot.copilot_dreaming %} is in {% data variables.release-phases.public_preview %} and is subject to change.

### Enabling {% data variables.copilot.copilot_dreaming %} for your personal memories

1. In the upper-right corner of {% data variables.product.prodname_dotcom_the_website %}, click your profile picture, then click **Settings**.
1. {% data reusables.user-settings.code-planning-automation %} click **{% data variables.product.prodname_copilot_short %}** then click **Features**.
1. Under **Features**, locate **{% data variables.copilot.copilot_memory %}**.
1. Make sure {% data variables.copilot.copilot_memory %} is enabled. If {% data variables.copilot.copilot_memory %} is disabled, the personal {% data variables.copilot.copilot_dreaming %} setting is hidden.
1. In the **{% data variables.copilot.copilot_dreaming_short %}** dropdown, select **Enabled**.

This setting controls {% data variables.copilot.copilot_dreaming %} for your personal memories only. It does not enable {% data variables.copilot.copilot_dreaming %} for repositories you own.  If an organization or enterprise provides your {% data variables.product.prodname_copilot_short %} access, you can select **Disabled** to opt out when {% data variables.copilot.copilot_dreaming %} is permitted. You cannot override a policy that disables {% data variables.copilot.copilot_dreaming_short %} in any organization or enterprise that provides you with {% data variables.product.prodname_copilot_short %} access, even if you also have an individual subscription.

To review the results, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#viewing-copilot-dreaming-results-in-the-copilot-app).

### Enabling {% data variables.copilot.copilot_dreaming %} for a personally owned repository

These steps apply if you have an eligible individual {% data variables.product.prodname_copilot_short %} subscription and do not receive {% data variables.product.prodname_copilot_short %} access from an organization or enterprise. You must have administrator access to the repository. You cannot enable {% data variables.copilot.copilot_dreaming %} for an archived repository.

Organization and enterprise policies control {% data variables.copilot.copilot_dreaming %} for organization-owned repositories. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator#enabling-copilot-dreaming).

1. On {% data variables.product.prodname_dotcom_the_website %}, open the personally owned repository where you want to enable {% data variables.copilot.copilot_dreaming %}.
1. Under the repository name, click **Settings**.
1. {% data reusables.user-settings.code-planning-automation %} click **{% data variables.product.prodname_copilot_short %}**, then **{% data variables.copilot.copilot_memory_short %}**.

   Make sure **Allow Copilot to store and retrieve repository facts** is enabled.

1. In the sidebar, click {% data variables.copilot.copilot_dreaming_short %}.
1. Enable **{% data variables.copilot.copilot_dreaming_short %}**.
1. Repeat for each of your personally owned repositories where you want to enable {% data variables.copilot.copilot_dreaming %}.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-memory)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator)
