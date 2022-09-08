---
title: ユーザーの移行
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125141'
---
## ユーザーの移行 API について

ユーザーの移行 API を使用できるのは、認証済みのアカウント所有者のみです。 詳細については、「[その他の認証方法](/rest/overview/other-authentication-methods)」を参照してください。

{% data variables.migrations.user_migrations_intro %} ダウンロードできる移行データの一覧については、「[ユーザー移行アーカイブのダウンロード](#download-a-user-migration-archive)」を参照してください。

アーカイブをダウンロードするには、先にユーザ移行を開始する必要があります。 移行の状態が `exported` になると、その移行をダウンロードできます。

移行アーカイブを作成すると、7 日間ダウンロードできるようになります。 ただし、必要があればユーザ移行アーカイブはそれより以前に削除できます。 移行が `exported` になったときにリポジトリのロックを解除して、リポジトリの使用を再開するか、ソース データが不要になった場合はリポジトリを削除できます。
