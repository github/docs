---
title: 削除したリポジトリの復元
intro: 削除したリポジトリを復元して、その内容を回復することができます。
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199787'
---
## リポジトリの復元について

通常は、誰かがリポジトリを削除するとそのリポジトリは90日間はディスク上にあり、サイト管理ダッシュボード経由でリストアできます。 詳しくは、「[サイト管理ダッシュボード](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)」をご覧ください。

ユーザーまたは Organization で訴訟ホールドが有効である場合を除き、90 日後にリポジトリは消去され、永久に削除されます。

リポジトリの削除時にリポジトリがフォーク ネットワークの一部であった場合、復元されるリポジトリは元のフォーク ネットワークからデタッチされます。

削除したリポジトリが復元できるようになるまでには、最大で1時間かかる場合があります。

リポジトリを復元しても、リリース添付ファイルやチーム権限は復元されません。 復元された Issue はラベル付けされません。

## 削除したリポジトリの復元

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. {% octicon "repo" aria-label="The repo icon" %} **[リポジトリ]** セクションで、{% octicon "trash" aria-label="The trash icon" %} **[リポジトリの削除]** リンクをクリックします。
1. 削除したリポジトリの一覧で復元するリポジトリを見つけて、リポジトリ名の右側にある **[復元]** をクリックします。
1. 指定したリポジトリを復元することを確認するには、 **[復元]** をクリックします。

## 参考資料

- 「[ユーザあるいは Organization への訴訟ホールドの配置](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)」
