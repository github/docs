---
title: Restoring a deleted repository
intro: Site administrators can restore deleted repositories to recover their contents.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
---

Wenn ein Repository gelöscht wird, bleibt es in der Regel 90 Tage lang weiterhin auf der Disk und kann über das Websiteadministrator-Dashboard wiederhergestellt werden. Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

## Informationen zur Repository-Wiederherstellung

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

Wenn Du ein Repository löschst, kann es bis zu einer Stunde dauern, bis dieses Repository wiederhergestellt werden kann.

Beim Wiederherstellen eines Repositorys werden etwaige Releaseanhänge oder Teamberechtigungen nicht wiederhergestellt. Issues that are restored will not be labeled.

## Restoring a deleted repository

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## Weiterführende Informationen

- "[Placing a legal hold on a user or organization](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
