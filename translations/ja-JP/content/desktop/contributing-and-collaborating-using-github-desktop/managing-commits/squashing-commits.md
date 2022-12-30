---
title: コミットのスカッシュ
intro: '{% data variables.product.prodname_desktop %} を使用して、ブランチの履歴内のコミットをスカッシュできます。'
versions:
  fpt: '*'
ms.openlocfilehash: fb8141710a99b52f1b9a93e1abc0429b5e29f116
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '145117493'
---
## コミットのスカッシュについて

スカッシュすると、ブランチの履歴内の複数のコミットを 1 つのコミットに結合できます。 これにより、リポジトリの履歴が、読みやすく、わかりやすくなります。

## コミットのスカッシュ

{% mac %}

{% data reusables.desktop.current-branch-menu %}
2. ブランチのリストで、スカッシュしたいコミットがあるブランチを選びます。
{% data reusables.desktop.history-tab %}
4. スカッシュするコミットを選び、結合先のコミットにドロップします。 <kbd>Command</kbd> キーまたは <kbd>Shift</kbd> キーを使って、1 つのコミットを選んだり、複数のコミットを選んだりすることができます。
  ![スカッシュのドラッグ アンド ドロップ](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 新しいコミットのコミット メッセージを変更します。 スカッシュするために選んだコミットのコミット メッセージは、 **"概要"** フィールドと **"説明"** フィールドに自動入力されます。
6. **[スカッシュのコミット]** をクリックします。

{% endmac %}

{% windows %}

{% data reusables.desktop.current-branch-menu %}
2. ブランチのリストで、スカッシュしたいコミットがあるブランチを選びます。
{% data reusables.desktop.history-tab %}
4. スカッシュするコミットを選び、結合先のコミットにドロップします。 <kbd>Ctrl</kbd> キーまたは <kbd>Shift</kbd> キーを使って、1 つのコミットを選んだり、複数のコミットを選んだりすることができます。
  ![スカッシュのドラッグ アンド ドロップ](/assets/images/help/desktop/squash-drag-and-drop.png)
5. 新しいコミットのコミット メッセージを変更します。 スカッシュするために選んだコミットのコミット メッセージは、 **"概要"** フィールドと **"説明"** フィールドに自動入力されます。
6. **[スカッシュのコミット]** をクリックします。

{% endwindows %}

## コミットをスカッシュするときのエラー メッセージ

コミットをスカッシュするときに、次のような通知やエラー メッセージが表示されることがあります。

* 通知は、ブランチに対してリクエストされている変更で、リモート ブランチを更新するために強制プッシュが必要となることを示しています。 強制的にプッシュすると、ブランチのコミット履歴が変更され、そのブランチで作業している他のコラボレーターが影響を受けます。  **[スカッシュの開始]** を選んでスカッシュを開始したら、 **[Origin に強制プッシュ]** をクリックして、変更をプッシュします。

  ![スカッシュの強制プッシュのダイアログ](/assets/images/help/desktop/squash-force-push.png)

* エラーは、スカッシュされたコミット間にマージ コミットがあるため、スカッシュが失敗したことを示しています。

  ![マージ コミットの並べ替えのダイアログ](/assets/images/help/desktop/squash-merge-commit-dialog.png)

* 現在のブランチにコミットされていない変更が存在していることを示す通知が表示されます。 **[変更を一時退避して続ける]** を選び、変更を保存して続けるか、 **[閉じる]** を選び、メッセージを閉じて変更をコミットします。 コミットされていない変更がなくなったら、コミットをスカッシュできます。

  ![スカッシュの一時退避のダイアログ](/assets/images/help/desktop/squash-stash-dialog.png)
