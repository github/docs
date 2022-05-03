---
title: 用户
intro: The Users migrations API is only available to authenticated account owners.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

更多信息请参阅“[其他身份验证方法](/rest/overview/other-authentication-methods)”。

{% data variables.migrations.user_migrations_intro %} 有关可下载的迁移数据列表，请参阅“[下载用户迁移存档](#download-a-user-migration-archive)”。

要下载存档，您需要先开始用户迁移。 在迁移状态为 `exported` 后，便可下载迁移。

创建迁移存档后，该存档可供下载七天。 但是，如果您喜欢，您可以更早删除用户迁移存档。 当迁移为 `exported` 时，您可以解锁仓库以便再次开始使用，如果你不再需要源数据，则可删除您的仓库。
