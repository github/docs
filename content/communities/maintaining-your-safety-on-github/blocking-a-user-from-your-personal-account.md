---
title: Blocking a user from your personal account
intro: 'You can block a user to deny them access to your activity and repositories, and to prevent them from sending you notifications.'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
topics:
  - Community
---

### About blocking users

You can block a user in your account settings or from the user's profile. {% data variables.product.prodname_dotcom %} will not notify the user when you block them. If you want to avoid contributing to the same project as someone you've blocked, you can choose to display a warning on any repositories with prior contributions from a blocked user. For more information, see "[Blocking a user in your account settings](#blocking-a-user-in-your-account-settings)." You may still see the activity of blocked users in shared spaces and blocked users can delete their existing content.

{% tip %}

**Tip:** If you're blocking a user because of a heated conversation, consider locking the conversation so only collaborators can comment. For more information, see "[Locking conversations](/communities/moderating-comments-and-conversations/locking-conversations)."

{% endtip %}

When you block a user:
- The user stops following you
- The user stops watching and unpins your repositories
- The user is not able to join any organizations you are an owner of
- The user's stars and issue assignments are removed from your repositories
- The user's votes on discussions or comments in your repositories are deleted
- The user is removed as a collaborator on your repositories
- The user's contributions to your repositories are no longer counted as contributions for them
- Your contributions to the blocked user's repositories are no longer counted as contributions for you
- You are removed as a collaborator on their repositories
- Their sponsorship of you is cancelled
- Any pending repository or account successor invitations to or from the blocked user are cancelled

After you've blocked a user, they cannot:
- Send you any notifications, including by [@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) your username
- Comment on or edit issues or pull requests that you've created
- React to your comments on issues, pull requests, and commits
- Follow you or see your content in their activity feed
- Assign you to issues or pull requests
- Invite you as a collaborator on their repositories
- Invite you as a collaborator on a security advisory
- Cross-reference your repositories in comments
- Fork, watch, pin, or star your repositories
- Sponsor you

In repositories you own, blocked users also cannot:
- Open issues
- Send, close, or merge pull requests
- Comment on issues, pull requests, or commits
- Add or edit wiki pages

### Blocking a user in your account settings

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. Under "Block a user", type the username of the user you'd like to block, then click **Block user**.
  ![Username field and block button](/assets/images/help/settings/user-settings-block-user.png)
4. Optionally, to display a warning when you visit a repository where a blocked user is a contributor, select **Warn me when a blocked user is a prior contributor to a repository**.
  ![Warn about blocked users option](/assets/images/help/settings/warn-block-user.png)

### Blocking a user from their profile page

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. Click **Block user**.
   ![Modal box with options to block user or report abuse](/assets/images/help/profile/profile-blockuser.png)

{% note %}

Use {% data variables.contact.report_abuse %} to contact us if you're being harassed. {% data reusables.policies.abuse %}

{% endnote %}

### Further reading

- "[Viewing users you've blocked from your personal account](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)"
- "[Unblocking a user from your personal account](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[Blocking a user from your organization](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)"
- "[Unblocking a user from your organization](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[Reporting abuse or spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
- "[Limiting interactions in your repository](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)"
