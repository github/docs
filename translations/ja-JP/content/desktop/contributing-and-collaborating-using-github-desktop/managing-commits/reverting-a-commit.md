---
title: コミットの打ち消し
intro: 特定のコミットを打ち消して、その変更をブランチから取り除くことができます。
redirect_from:
  - /desktop/contributing-to-projects/reverting-a-commit
  - /desktop/contributing-and-collaborating-using-github-desktop/reverting-a-commit
versions:
  fpt: '*'
ms.openlocfilehash: f6cf6f120beff99bdb1c8bfd7868bb157e68d5dd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090124'
---
コミットを打ち消しすると、打ち消し自体もコミットになります。 元のコミットもリポジトリの履歴に残ります。

{% tip %}

**ヒント:** 複数のコミットを元に戻す場合、最新のコミットから最も古いコミットの順に元に戻すことをお勧めします。 別の順番でコミットを打ち消しすると、マージコンフリクトが発生する場合があります。

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![差分ビューの上にある [Revert]\(元に戻す\) オプション](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.revert-commit %} ![差分ビューの上にある [Revert]\(元に戻す\) オプション](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
