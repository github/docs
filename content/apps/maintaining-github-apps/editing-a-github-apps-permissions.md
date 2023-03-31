---
title: Editing a GitHub App's permissions
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
  - /developers/apps/managing-github-apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
---
{% note %}

**Note:** Updated permissions won't take effect on an installation until the owner of the account or organization approves the changes. You can use the [InstallationEvent webhook](/webhooks-and-events/webhooks/webhook-events-and-payloads#installation) to find out when people accept new permissions for your app. One exception is user-level permissions, which don't require the account owner to approve permission changes.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. In the {% data variables.product.prodname_github_apps %} settings sidebar, click **Permissions & events**.
6. Under "Repository permissions", "Organization permissions", and "Account permissions" sections, modify the permissions you'd like to change. For each type of permission, select either "Read-only", "Read and write", or "No access" from the dropdown. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."
7. Under "Subscribe to events", select any events to which you'd like to subscribe your app.
8. Optionally, under "Add a note to users", add a note telling your users why you are changing the permissions that your GitHub App requests.
9. Click **Save changes**.
