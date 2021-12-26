---
title: Editing a GitHub App's permissions
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions/
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**Note:** Updated permissions won't take effect on an installation until the owner of the account or organization approves the changes. You can use the [InstallationEvent webhook](/webhooks/event-payloads/#installation) to find out when people accept new permissions for your app. One exception is [user-level permissions](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions), which don't require the account owner to approve permission changes.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Select the GitHub App whose permissions you want to change. ![App selection](/assets/images/github-apps/github_apps_select-app.png)
5. In the left sidebar, click **Permissions & webhooks**. ![Permissions and webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modify the permissions you'd like to change. For each type of permission, select either "Read-only", "Read & write", or "No access" from the dropdown. ![Permissions selections for your GitHub App](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. In "Subscribe to events", select any events to which you'd like to subscribe your app. ![Permissions selections for subscribing your GitHub App to events](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Optionally, in "Add a note to users", add a note telling your users why you are changing the permissions that your GitHub App requests. ![Input box to add a note to users explaining why your GitHub App permissions have changed](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Click **Save changes**. ![Button to save permissions changes](/assets/images/github-apps/github_apps_save_changes.png)
