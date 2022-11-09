---
title: GitHub Desktop での通知を構成する
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} では、pull request ブランチで発生するイベントに関する通知により、ユーザーに常に最新の情報が提供されます。'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060435'
---
## {% data variables.product.prodname_desktop %} での通知について

{% data variables.product.prodname_desktop %} には、現在選ばれているリポジトリで発生するイベントに関するシステム通知が表示されます。 通知は、次の場合に表示されます。

- pull request のチェックが失敗しました。
- コメント、承認、または変更要求を含む pull request レビューがあります。

通知をクリックすると、アプリケーションのフォーカスが {% data variables.product.prodname_desktop %} に切り替わり、詳細情報が表示されます。

## pull request のチェック失敗に関する通知

pull request ブランチが変更されると、チェックが失敗した場合に通知を受け取ります。

![pull request チェック失敗通知](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

通知をクリックすると、チェックの詳細を含むダイアログが表示されます。 チェックが失敗した理由を確認したら、チェックをもう一度実行するか、pull request ブランチにすぐに切り替えてエラーの修正を始めることができます。 詳しくは、「[GitHub Desktop でのチェックの表示と再実行](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)」をご覧ください。

![チェック失敗ダイアログ](/assets/images/help/desktop/checks-failed-dialog.png)
## pull request レビューの通知

チームメイトが pull request について承認、コメント、または変更要求すると、{% data variables.product.prodname_desktop %} にシステム通知が表示されます。 pull request のレビューについて詳しくは、「[pull request のレビューについて](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)」をご覧ください。

![pull request レビュー通知](/assets/images/help/desktop/pull-request-review-notification.png)

通知をクリックすると、アプリケーションのフォーカスが {% data variables.product.prodname_desktop %} に切り替わり、pull request レビュー コメントの詳細なコンテキストが表示されます。

![pull request レビュー ダイアログ](/assets/images/help/desktop/pull-request-review-dialog.png)
## 通知を有効にする

{% data variables.product.prodname_desktop %} でシステム通知が無効になっている場合は、次の手順のようにして有効にすることができます。

{% mac %}

1. **[Apple]** メニューをクリックして、 **[システム環境設定]** を選びます。
2. **[通知とフォーカス]** を選びます。
3. アプリケーションの一覧から **{% data variables.product.prodname_desktop %}** を選びます。
4. **[通知の許可]** をクリックします。

![macOS の [通知とフォーカス]](/assets/images/help/desktop/mac-enable-notifications.png)

macOS システム通知について詳しくは、「[Mac で通知機能を使う](https://support.apple.com/en-us/HT204079)」をご覧ください。

{% endmac %}

{% windows %}

1. **[スタート]** メニューを開いて、 **[設定]** を選びます。
2. **[システム]** を選び、 **[通知]** をクリックします。
3. アプリケーションの一覧で **{% data variables.product.prodname_desktop %}** を見つけて、 **[オン]** をクリックします。

![Windows の通知を有効にする](/assets/images/help/desktop/windows-enable-notifications.png)

Windows のシステム通知について詳しくは、「[Windows で通知の設定を変更する](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e)」をご覧ください。

{% endwindows %}
