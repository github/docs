---
title: コミットのチェリーピック
intro: あるブランチで特定のコミットを選び、コミットを別のブランチにコピーできます。
versions:
  fpt: '*'
redirect_from:
  - /desktop/contributing-and-collaborating-using-github-desktop/cherry-picking-a-commit
ms.openlocfilehash: 6dad1615b9a8c224c3648be60759b5bb6ccf0d62
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090130'
---
## Git のチェリーピックについて

あるブランチのコミットをチェリーピックして、別のブランチに同じ変更を加えたコミットのコピーを作成できます。 間違ったブランチに変更をコミットした場合、または同じ変更を別のブランチに反映する場合は、コミットをチェリーピックして別のブランチに変更を適用することができます。 また、pull request を作成したりマージしたりする前に、チェリーピックを使って特定の変更を適用することもできます。 たとえば、機能ブランチにバグ修正をコミットした場合、そのバグ修正を含むコミットをプロジェクトの他のブランチにチェリーピックすることができます。

また、チームとの共同作業時にもチェリーピックを使用できます。 一部のプロジェクトには、チェリーピック コミットによる貢献が組み込まれています。 詳細については、Git ドキュメントの「[分散 Git - プロジェクトの管理](https://git-scm.com/book/en/v2/Distributed-Git-Maintaining-a-Project#_rebase_cherry_pick)」を参照してください。

## コミットのチェリーピック

{% data reusables.desktop.current-branch-menu %}
2. ブランチの一覧で、チェリーピックするコミットがあるブランチをクリックします。
{% data reusables.desktop.history-tab %}
4. チェリーピックするコミットを {% octicon "git-branch" aria-label="The branch icon" %} **[Current Branch]\(現在のブランチ\)** メニューにドラッグし、コピー先のブランチにコミットをドロップします。
  ![[Current Branch]\(現在のブランチ\) メニューの別のブランチにコミットをドラッグする](/assets/images/help/desktop/cherry-picking.png)

## 参考資料
- Git ドキュメントの [git-cherry-pick](https://git-scm.com/docs/git-cherry-pick)
