---
title: 恢复已删除的仓库
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

通常情况下，如果有人删除仓库，它将在磁盘上保留 90 天并且可以通过站点管理员仪表板进行恢复。 Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

## 关于仓库恢复

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

仓库被删除后，可能需要一个小时才能恢复。

恢复仓库不会恢复发行版附件或团队权限。 已恢复的议题不会被标记。

## 恢复已删除的仓库

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## 延伸阅读

- "[Placing a legal hold on a user or organization](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
