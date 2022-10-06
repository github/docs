---
title: リポジトリ内のブランチを表示する
intro: 'ブランチは、{% data variables.product.product_name %} のコラボレーションの中心となるものです。それらを表示する最も良い方法はブランチページです。'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132354'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. ページ上部のナビゲーションを使用して、特定のブランチのリストを表示します:
    - **ブランチ**: プッシュアクセスできるリポジトリでは、 **[Yours]** ビューには、既定のブランチを除き、プッシュしたすべてのブランチが表示され、最新のブランチが最初に表示されます。
    - **アクティブなブランチ**: **[アクティブ]** ビューには、過去 3 か月以内に誰かがコミットしたすべてのブランチが、最新のコミットを最初に持つブランチの順に表示されます。
    - **ステイルブランチ**: **[ステイル]** ビューには、過去 3 か月間に誰もコミットしていないブランチがすべて表示され、最も古いコミットが最初に表示されます。 この一覧を使い、[削除すべきブランチ](/articles/creating-and-deleting-branches-within-your-repository)を判断します。
    - **すべてのブランチ:** **[すべて]** ビューには、デフォルトブランチが表示され、続いて最新のコミットを持つブランチの順に他のすべてのブランチが表示されます。

4. 必要に応じて、右上の検索フィールドを使用します。 このフィールドでは単純に、大文字と小文字を区別しない、ブランチ名の部分一致検索を行うことができます。 その他のクエリ構文はサポートしていません。

![Atom リポジトリのブランチページ](/assets/images/help/branches/branches-overview-atom.png)

## 参考資料

- 「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)」
- 「[使われていないブランチを削除する](/articles/deleting-unused-branches)」
