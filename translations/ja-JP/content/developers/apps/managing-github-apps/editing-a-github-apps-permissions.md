---
title: GitHub App の権限を編集する
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089888'
---
{% note %}

**注:** アカウントまたは組織所有者が変更を承認するまで、更新したアクセス許可はインストールしたアプリケーションに反映されません。 [InstallationEvent Webhook](/webhooks/event-payloads/#installation) を使用して、ユーザーがアプリの新しいアクセス許可を受け入れるタイミングを確認できます。 例外の 1 つは[ユーザー レベルのアクセス許可](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)であり、アカウント所有者がアクセス許可の変更を承認する必要はありません。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. 権限を変更する GitHub App を選択します。
![アプリの選択](/assets/images/github-apps/github_apps_select-app.png)
5. 左側のサイドバーで、 **[アクセス許可と Webhook]** をクリックします。
![アクセス許可と Webhook](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. 変更したい権限を修正します。 アクセス許可の各タイプで、ドロップダウンメニューから [読み取り専用]、[読み取りと書き込み]、[アクセスなし] のいずれかを選択します。
![GitHub App に対するアクセス許可の選択](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. [Subscribe to events] で、アプリケーションがサブスクライブするイベントを選択します。
![GitHub App がイベントにサブスクライブするためのアクセス許可の選択](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. O必要に応じて、[Add a note to users] で注釈を追加し、GitHub App がリクエストする権限を変更する理由をユーザに伝えます。
![GitHub App のアクセス許可を変更した理由をユーザに説明する注釈を追加するための入力ボックス](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. **[変更を保存]** をクリックします。
![アクセス許可の変更を保存するボタン](/assets/images/github-apps/github_apps_save_changes.png)
