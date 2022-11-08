---
title: リポジトリのリリースの検索
intro: キーワード、タグ、およびその他の修飾子を使って、リポジトリ内の特定のリリースを検索できます。
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109652'
---
## リポジトリ内のリリースの検索

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. リポジトリのリリースを検索するには、[リリース] ページの上部にある検索フィールドにクエリを入力し、**Enter** キーを押します。
![[リリース] 検索フィールド](/assets/images/help/releases/search-releases.png)

## リポジトリ内のリリースを検索するための検索構文

検索クエリでは、リポジトリのリリースのタイトル、本文、タグと照合されるテキストを指定できます。 次の修飾子を組み合わせて、特定のリリースを対象にすることもできます。

| 修飾子        | 例
| ------------- | -------------
| `draft:true` | **draft:true** はドラフト リリースにのみ一致します。
| `draft:false` | **draft:false** は公開済みリリースにのみ一致します。
| `prerelease:true` | **prerelease:true** はプレリリースにのみ一致します。
| `prerelease:false` | **prerelease:false** は、プレリリースではないリリースにのみ一致します。
| <code>tag:<em>TAG</em></code> | **tag:v1** は、v1 タグを持つリリースと、v1.0、v1.2、v1.2.5 など、v1 内のマイナーまたはパッチ バージョンと一致します。
| <code>created:<em>DATE</em></code> | **created:2021** は、2021 年中に作成されたリリースと一致します。 期間を指定することもできます。 詳細については、「[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)」 (検索構文の理解) を参照してください。
