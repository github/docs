---
title: GitHub Desktop でのチェックの表示と再実行
shortTitle: Viewing and re-running checks
intro: '{% data variables.product.prodname_desktop %} で、チェックの状態を確認して実行し直すことができます。'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068023'
---
## {% data variables.product.prodname_desktop %} でのチェックについて

{% data variables.product.prodname_desktop %} には、pull request ブランチで実行されたチェックのステータスが表示されます。 ブランチ名の横にあるチェック バッジには *、チェックの保留中、合格、* または *失敗* の状態が表示されます。 {% data variables.product.prodname_desktop %} のチェックのステータスを表示するときに、すべて、失敗した、または個々のチェックを再実行することもできます。 リポジトリでチェックを設定する方法について詳しくは、「[ステータス チェックについて](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks)」をご覧ください。

{% data variables.product.prodname_desktop %} では、チェックが失敗したときにもシステム通知が表示されます。 通知を有効にする方法について詳しくは、「[GitHub Desktop での通知の構成](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop)」をご覧ください。

## チェックの表示と再実行

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![[Current Branch] ドロップダウン メニューの [Pull Request] タブ](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![リポジトリのオープンな pull request のリスト](/assets/images/help/desktop/click-pull-request.png)
4. pull request ブランチ名の右側にある pull request 番号をクリックします。
  ![ブランチ名の横のチェック表示](/assets/images/help/desktop/checks-dialog.png)
5. 失敗したチェックを再実行するには、 **[{% octicon "sync" aria-label="The sync icon" %} 再実行]** をクリックし、 **[失敗したチェックの再実行]** を選びます。
  ![失敗したチェックを再実行する](/assets/images/help/desktop/re-run-failed-checks.png)
6. 個々のチェックを再実行するには、再実行する個々のチェックにカーソルを合わせ、{% octicon "sync" aria-label="The sync icon" %} アイコンを選んでチェックを再実行します。
  ![個々のチェックを再実行する](/assets/images/help/desktop/re-run-individual-checks.png)
7. 再実行されるチェックの概要を含む確認ダイアログが表示されます。 **[チェックの再実行]** をクリックして、再実行することを確認します。
  ![再実行の確認ダイアログ](/assets/images/help/desktop/re-run-confirmation-dialog.png)
