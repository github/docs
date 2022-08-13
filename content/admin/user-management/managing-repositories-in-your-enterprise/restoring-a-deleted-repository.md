---
title: Restoring a deleted repository
intro: You can restore deleted repositories to recover their contents.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
---

## About repository restoration

Usually, if someone deletes a repository, it will be available on disk for 90 days and can be restored via the site admin dashboard. For more information, see "[Site admin dashboard](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)."

Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

It can take up to an hour after a repository is deleted before that repository is available for restoration.

Restoring a repository will not restore release attachments or team permissions. Issues that are restored will not be labeled.

## Restoring a deleted repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## Further reading

- "[Placing a legal hold on a user or organization](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
