---
title: GitHub App の権限を編集する
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions/
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**注釈:** アカウントまたは Organization のオーナーが変更を承認するまで、更新した権限はインストールしたアプリケーションに反映されません。 [InstallationEvent webhook](/webhooks/event-payloads/#installation) を使用すると、ユーザがアプリケーションの新しい権限を受け入れた時に確認できます。 ただし[ユーザレベルの権限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)は例外で、アカウントの所有者が変更を承認する必要はありません。

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. 権限を変更する GitHub App を選択します。 ![アプリケーションの選択](/assets/images/github-apps/github_apps_select-app.png)
5. 左サイドバーで、[**Permissions & webhooks**] をクリックします。 ![権限と webhook](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. 変更したい権限を修正します。 権限の各タイプで、ドロップダウンメニューから [Read-only]、[Read & write]、[No access] のいずれかを選択します。 ![GitHub App に対する権限の選択](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. [Subscribe to events] で、アプリケーションがサブスクライブするイベントを選択します。 ![GitHub App がイベントにサブスクライブするための権限の選択](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. O必要に応じて、[Add a note to users] で注釈を追加し、GitHub App がリクエストする権限を変更する理由をユーザに伝えます。 ![GitHub App の権限を変更した理由をユーザに説明する注釈を追加するための入力ボックス](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. [**Save changes**] をクリックします。 ![権限の変更を保存するボタン](/assets/images/github-apps/github_apps_save_changes.png)
