---
title: コミットの並べ替え
intro: '{% data variables.product.prodname_desktop %} を使用して、ブランチの履歴内のコミットを並べ替えることができます。'
versions:
  fpt: '*'
ms.openlocfilehash: 5f68af5f2798e6780a91515886130f2b3ca7e6aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117494'
---
## コミットの並べ替えについて

並べ替えを行うと、コミット履歴を変更して、コミットの進捗をさらにわかりやすく示すことができます。 {% data variables.product.prodname_desktop %} を使うと、ブランチの履歴でコミットをドラッグ アンド ドロップして並べ替えることができます。

## コミットの並べ替え

{% data reusables.desktop.current-branch-menu %}
2. ブランチのリストで、並べ替えたいコミットがあるブランチをクリックします。
{% data reusables.desktop.history-tab %}
4. 並べ替えたいコミットをドラッグして、隣どうしの 2 つのコミットの間にドロップします。
  ![並べ替え時のドラッグ アンド ドロップ](/assets/images/help/desktop/reorder-drag-and-drop.png) アプリケーションによるコミットの並べ替え中は、 **[並べ替えが進行中]** ダイアログが変更の進捗を示します。

## コミットを並べ替えるときのエラー メッセージ

コミットを並べ替えるときに、次のような通知やエラー メッセージが表示されることがあります。

* 通知は、ブランチに対してリクエストされている変更で、リモート ブランチを更新するために強制プッシュが必要となることを示しています。 これは、並べ替えたコミットがリモート ブランチに以前プッシュされていた場合に表示されます。 強制的にプッシュすると、ブランチのコミット履歴が変更され、そのブランチで作業している他のコラボレーターが影響を受けます。  **[並べ替えの開始]** を選んで並べ替えを開始したら、 **[Origin に強制プッシュ]** をクリックして、変更をプッシュします。

  ![並べ替えの強制プッシュのダイアログ](/assets/images/help/desktop/reorder-force-push-dialog.png)

* エラーは、並べ替えられたコミット間にマージ コミットがあるため、並べ替えが失敗したことを示しています。

  ![マージ コミットの並べ替えのダイアログ](/assets/images/help/desktop/reorder-merge-commit-dialog.png)

* 現在のブランチにコミットされていない変更が存在していることを示す通知が表示されます。 **[変更を一時退避して続ける]** を選び、変更を保存して続けるか、 **[閉じる]** を選び、メッセージを閉じて変更をコミットします。 コミットされていない変更がなくなったら、コミットを並べ替えることができます。

  ![一時退避エントリの並べ替えのダイアログ](/assets/images/help/desktop/reorder-stash-dialog.png)

* メッセージは、アプリケーションで引き続きブランチのコミットを並べ替えられるように、競合するマージを解決する必要があることを示しています。
    1. **[競合の表示]** をクリックして、競合を表示します。
      ![並べ替え時の競合の解決のメッセージ](/assets/images/help/desktop/reorder-resolve-conflicts.png) {% data reusables.desktop.resolve-merge-conflicts %}
   3. すべての競合を解決したら、コミットを並べ替えることができます。
  
