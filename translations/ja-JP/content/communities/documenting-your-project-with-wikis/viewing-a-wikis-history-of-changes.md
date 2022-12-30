---
title: ウィキの変更履歴を表示する
intro: ウィキは Git リポジトリであるため、行うすべての変更は、表示できるコミットです。
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145090315'
---
## ウィキ履歴を表示する

ウィキ履歴には以下が含まれます:
- 変更を加えたユーザ
- 彼らが提供したコミットメッセージ
- いつ変更が行われたか

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. ウィキサイドバーを使用して、履歴を表示したいページに移動します。
4. ウィキの上部にあるリビジョンリンクをクリックします。
   ![ウィキ リビジョン リンク](/assets/images/help/wiki/wiki_revision_link.png)

## 以前のコンテンツを表示する

ウィキ履歴表で、[SHA-1 ハッシュ](http://en.wikipedia.org/wiki/SHA-1) (右端の文字と数字の並び) をクリックして、特定の時点で存在していたウィキ ページを表示できます。

![ウィキ SHA 番号](/assets/images/help/wiki/wiki_sha_number.png)

## 2 つのリビジョンを比較する

1. 比較したい 2 つの行を選択します。
2. 履歴表の上部にある **[リビジョンの比較]** をクリックします。
   ![ウィキ リビジョン比較ボタン](/assets/images/help/wiki/wiki_compare_revisions.png)
3. どの行が追加、削除、および修正されたかを示す変更の diff が表示されます。

## 以前の変更を打ち消す

ウィキを編集する権限を持っている場合にのみ、変更を打ち消すことができます。

1. 打ち消す行を選択します。
2. 履歴表の上部にある **[リビジョンの比較]** をクリックします。
   ![ウィキ リビジョン比較ボタン](/assets/images/help/wiki/wiki_compare_revisions.png)
3. どの行が追加、削除、および修正されたかを示す変更の diff が表示されます。
   ![ウィキ リビジョン diff](/assets/images/help/wiki/wiki_revision_diff.png)
4. 新しい変更を打ち消すには、 **[変更を打ち消す]** をクリックします。
   ![ウィキ変更打ち消しボタン](/assets/images/help/wiki/wiki_revert_changes.png)
