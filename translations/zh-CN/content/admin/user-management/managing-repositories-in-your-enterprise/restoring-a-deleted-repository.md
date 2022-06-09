---
title: 恢复已删除的仓库
intro: You can restore deleted repositories to recover their contents.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: 恢复已删除的仓库
---

## 关于仓库恢复

通常情况下，如果有人删除仓库，它将在磁盘上保留 90 天并且可以通过站点管理员仪表板进行恢复。 更多信息请参阅“[站点管理仪表板](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)”。

除非法定保留对用户或组织有效，否则 90 天后，存储库将被清除并永久删除。

如果存储库在被删除时是复刻网络的一部分，则还原的存储库将与原始复刻网络分离。

仓库被删除后，可能需要一个小时才能恢复。

恢复仓库不会恢复发行版附件或团队权限。 已恢复的议题不会被标记。

## 恢复已删除的仓库

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. 在 {% octicon "repo" aria-label="The repo icon" %} **存储库**部分，单击 {% octicon "trash" aria-label="The trash icon" %} **已删除的存储库**链接。
1. 在已删除的存储库列表中找到要还原的存储库，然后在存储库名称右侧单击 **Restore（还原）**。
1. 要确认是否要还原指定的存储库，请单击 **Restore（还原）**。

## 延伸阅读

- "[对用户或组织合法保留](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
