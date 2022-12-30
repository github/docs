---
title: Git リベース後のマージコンフリクトを解決する
intro: '`git rebase` 操作を実行するときに、通常ではコミットを移動しています。 このため、マージコンフリクトが発生する状況に陥る可能性があります。 つまり、同じファイルで 2 つのコミットにより同じ行が変更されたため、Git はどちらの変更を適用するのかわからないということです。'
redirect_from:
  - /articles/resolving-merge-conflicts-after-a-git-rebase
  - /github/using-git/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase
  - /github/getting-started-with-github/using-git/resolving-merge-conflicts-after-a-git-rebase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Resolve conflicts after rebase
ms.openlocfilehash: 8798282fb804f7b2389d98f69ba2b0e855a2289a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115973'
---
`git rebase` を使ってコミットを並べ替えたり操作したりした後で、マージ コンフリクトが発生した場合は、Git は次のメッセージをターミナルに表示して知らせます。

```shell
error: could not apply fa39187... something to add to patch A

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
Could not apply fa39187f3c3dfd2ab5faa38ac01cf3de7ce2e841... Change fake file
```

ここでは、Git はどのコミットがコンフリクトを引き起こしているかを知らせています (`fa39187`)。 次の 3 つの選択肢が与えられています:

* `git rebase --abort` を実行すると、リベースを完全に取り消すことができます。 Git はブランチを `git rebase` が呼ばれる前の状態に戻します。
* `git rebase --skip` を実行すると、コミットを完全にスキップできます。 つまり、問題のあるコミットにより引き起された変更はすべて除外されます。 このオプションを選択することはほとんどありません。
* コンフリクトを解決できます。

コンフリクトを修正するには、[コマンド ラインからマージのコンフリクトを解決するための標準的な手順](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)に従います。 終了したら、Git がリベースの残りの処理を続けるために `git rebase --continue` を呼び出す必要があります。
