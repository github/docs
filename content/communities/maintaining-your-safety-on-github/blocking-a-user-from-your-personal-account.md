---
title: Blocking a user from your personal account
intro: 'You can block a user to deny them access to your activity and repositories, and to prevent them from sending you notifications.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
---

## About blocking users

You can block a user in your account settings or from the user's profile. {% data variables.product.prodname_dotcom %} will not notify the user when you block them. If you want to avoid contributing to the same project as someone you've blocked, you can choose to display a warning on any repositories with prior contributions from a blocked user. For more information, see "[Blocking a user in your account settings](#blocking-a-user-in-your-account-settings)." You may still see the activity of blocked users in shared spaces and blocked users can delete their existing content.

{% tip %}

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/locking-conversations)."

{% endtip %}

When you block a user:
* The user stops following you
* The user stops watching and unpins your repositories
* The user's stars and issue assignments are removed from your repositories
* The user's votes on discussions or comments in your repositories are deleted
* The user is removed as a collaborator on your repositories
* The user's contributions to your repositories are no longer counted as contributions for them
* Your contributions to the blocked user's repositories are no longer counted as contributions for you
* You are removed as a collaborator on their repositories
* Their sponsorship of you is canceled
* Any pending repository or account successor invitations to or from the blocked user are canceled
* The user is removed as a collaborator from all the projects and {% data variables.projects.projects_v1_boards %} owned by you
* You are removed as a collaborator from all the projects and {% data variables.projects.projects_v1_boards %} owned by the user

After you've blocked a user, they cannot:
* Send you any notifications, including by [@mentioning](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams) your username
* Comment on or edit issues or pull requests that you've created
* React to your comments on issues, pull requests, and commits
* Follow you or see your content in their activity feed
* Assign you to issues or pull requests
* Invite you as a collaborator on their repositories
* Invite you as a collaborator on a security advisory
* Cross-reference your repositories in comments
* Fork, watch, pin, or star your repositories
* Sponsor you
* Add you as a collaborator on their projects and {% data variables.projects.projects_v1_boards %}
* Make changes to your public projects and {% data variables.projects.projects_v1_boards %}

In repositories you own, blocked users also cannot:
* Open issues
* Send, close, or merge pull requests
* Comment on issues, pull requests, or commits
* Add or edit wiki pages

## Blocking a user in your account settings

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.blocked_users %}
1. Under "Block a user", type the username of the user you'd like to block, then click **Block user**.
1. Optionally, to add a note to describe why a user was blocked, click **Add Note**. The note will only be visible to you.
1. Optionally, you can display a warning when you visit a repository where a blocked user is a contributor. Under "Blocked users", select **Warn me when a blocked user is a prior contributor to a repository**.

## Blocking a user from their profile page

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
1. Optionally, add a note to describe why a user was blocked. The note will only be visible to you.
1. Click **Block user**.

{% note %}

If you're being harassed, visit {% data variables.contact.contact_support_page %} to report abuse. {% data reusables.policies.abuse %}

{% endnote %}

## Further reading

* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
* "[AUTOTITLE](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
* "[AUTOTITLE](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
