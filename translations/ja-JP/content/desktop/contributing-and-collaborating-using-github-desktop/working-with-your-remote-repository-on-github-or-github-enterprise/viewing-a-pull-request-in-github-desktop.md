---
title: GitHub デスクトップでプルリクエストを表示する
shortTitle: Viewing a pull request
intro: '{% data variables.product.prodname_desktop %}でオープンプルリクエストで提案された変更を見ることができます。'
redirect_from:
  - /desktop/contributing-to-projects/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/accessing-a-pull-request-locally
  - /desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 62f824366991a5c075440f548a3b8916a8ba60db
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117469'
---
## {% data variables.product.prodname_desktop %} のプルリクエストについて
自分またはコラボレータが提案したプルリクエストは、{% data variables.product.prodname_desktop %} で確認できます。 プルリクエストを使用すると、プロジェクトへの変更を提案し、フィードバックとレビューを提供し、変更をプロジェクトにマージできます。 詳細については、「[pull request について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。

{% data variables.product.prodname_desktop %} でプルリクエストを表示すると、コントリビューターが行ったコミットの履歴を確認できます。 コミットが変更、追加、または削除されたファイルを確認することもできます。 {% data variables.product.prodname_desktop %} から、任意のテキストエディタでリポジトリを開いて、変更を表示したり、追加の変更を加えたりすることができます。 プルリクエストの変更を確認したら、{% data variables.product.prodname_dotcom %} に関するフィードバックを送信できます。 詳細については、「[プル リクエストのレビューについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)」を参照してください。

リポジトリでチェックが有効になっている場合、{% data variables.product.prodname_desktop %} には pull request のチェックのステータスが表示され、チェックを再実行できます。 詳しくは、「[GitHub Desktop でのチェックの表示と再実行](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)」をご覧ください。

## {% data variables.product.prodname_desktop %} のプルリクエストを表示する
{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![[Current Branch] ドロップダウン メニューの [Pull Request] タブ](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![リポジトリのオープンな pull request のリスト](/assets/images/help/desktop/click-pull-request.png)
4. 必要に応じて、pull request のリストを更新するには、{% octicon "sync" aria-label="The sync icon" %} をクリックします。
  ![更新するための [同期] ボタン](/assets/images/help/desktop/pull-request-list-sync.png)

## {% data variables.product.prodname_dotcom %} から {% data variables.product.prodname_desktop %} でプルリクエストを開く
{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、{% data variables.product.prodname_desktop %} で開くプルリクエストをクリックします。
3. pull request のタイトルの右側にある **[開く]** ドロップダウンをクリックし、 **[デスクトップで開く]** ボタンをクリックします。
  ![[デスクトップで開く] ボタン](/assets/images/help/desktop/open-pr-in-desktop-button.png)
