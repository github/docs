---
title: Restoring a deleted repository
intro: You can restore some deleted repositories to recover their contents.
redirect_from:
  - /articles/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
---

Anyone can restore deleted repositories that were owned by their own user account. Organization owners can restore deleted repositories that were owned by the organization.

### About repository restoration

A deleted repository can be restored within 90 days, unless the repository was part of a fork network that is not currently empty. A fork network consists of a parent repository, the repository's forks, and forks of the repository's forks. If your repository was part of a fork network, it cannot be restored unless every other repository in the network is deleted or has been detached from the network. For more information about forks, see "[About forks](/articles/about-forks)."

If you want to restore a repository that was part of a fork network that is not currently empty, you can contact {{ site.data.variables.contact.contact_support }}.

It can take up to an hour after a repository is deleted before that repository is available for restoration.

Restoring a repository will not restore release attachments or team permissions. Issues that are restored will not be labeled.

### Restoring a deleted repository that was owned by a user account

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.repo-tab }}
{{ site.data.reusables.user_settings.deleted-repos }}
{{ site.data.reusables.user_settings.restore-repo }}
{{ site.data.reusables.user_settings.restore-confirmation }}

### Restoring a deleted repository that was owned by an organization

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.deleted-repos }}
{{ site.data.reusables.user_settings.restore-repo }}
{{ site.data.reusables.user_settings.restore-confirmation }}

### 더 읽을거리

- "[Deleting a repository](/articles/deleting-a-repository)"
