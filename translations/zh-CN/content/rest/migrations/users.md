---
title: 用户迁移
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101203'
---
## 关于用户迁移 API

用户迁移 API 仅适用于经过身份验证的帐户所有者。 有关详细信息，请参阅“[其他身份验证方法](/rest/overview/other-authentication-methods)”。

{% data variables.migrations.user_migrations_intro %} 有关可下载的迁移数据列表，请参阅“[下载用户迁移存档](#download-a-user-migration-archive)”。

要下载存档，您需要先开始用户迁移。 在迁移状态为 `exported` 后，便可下载迁移。

创建迁移存档后，该存档可供下载七天。 但是，如果您喜欢，您可以更早删除用户迁移存档。 当迁移为 `exported` 时，可以解锁存储库以再次开始使用，如果你不再需要源数据，则可删除存储库。
