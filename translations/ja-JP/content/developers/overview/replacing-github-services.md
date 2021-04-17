---
title: GitHub Servicesの置き換え
intro: '非推奨となった{% data variables.product.prodname_dotcom %} Servicesにまだ依存しているなら、サービスフックをwebhookに移行する方法を学んでください。'
redirect_from:
  - /guides/replacing-github-services/
  - /v3/guides/automating-deployments-to-integrators/
  - /v3/guides/replacing-github-services
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - api
---


GitHub Servicesは、webhookとの統合を進めるために非推奨となりました。 このガイドは、GitHub Servicesからwebhookへの移行を支援します。 このアナウンスに関する詳細については、[ブログポスト](https://developer.github.com/changes/2018-10-01-denying-new-github-services)を参照してください。

{% note %}

メールサービスに代わるものとして、リポジトリへのプッシュに対するメール通知を利用しはじめられるようになりました。 コミットメール通知の設定方法については、「[リポジトリへのプッシュに対するメール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)」を参照してください。

{% endnote %}

### 非推奨のタイムライン

- **2018年10月1日**: GitHubはユーザがサービスをインストールするのを禁止しました。 GitHub.comのユーザインターフェースから、GitHub Servicesを削除しました。
- **2019年1月29日**: メールサービスの代替として、リポジトリへのプッシュに対するメール通知を使い始められるようになりました。 コミットメール通知の設定方法については、「[リポジトリへのプッシュに対するメール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)」を参照してください。
- **2019年1月31日**: GitHubはGitHub.com上でのインストールされたサービスのイベント配信を停止しました。

### GitHub Servicesの背景

GitHub Services（Service Hooksと呼ばれることもあります）は、インテグレーションの旧来の方法であり、GitHubがインテグレーターのサービスの一部を[`github-services`リポジトリ](https://github.com/github/github-services)を通じてホストします。 GitHub上で行われたアクションがこれらのサービスをトリガーし、これらのサービスを使ってGitHubの外部のアクションをトリガーできます。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
### GitHub Servicesを使っているリポジトリを探す
アプライアンス上でどのリポジトリがGitHub Servicesを使っているかを特定するためのコマンドラインスクリプトが提供されています。 詳しい情報については[ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report)を参照してください。{% endif %}

### GitHub Servicesとwebhook

GitHub Servicesとwebhookとの主な違いは以下のとおりです。
- **設定**: GitHub Servicesにはサービス固有の設定オプションがありますが、webhookはURLとイベント群を指定するだけで単純に設定できます。
- **カスタムロジック**: GitHub Servicesは1つのイベントの処理の一部として、複数のアクションで反応するカスタムロジックを持つことができますが、webhookにはカスタムロジックはありません。
- **リクエストの種類**: GitHub ServicesはHTTP及び非HTTPリクエストを発行できますが、webhookが発行できるのはHTTPリクエストのみです。

### webhookでのServicesの置き換え

GitHub Servicesをwebhookで置き換えるには、以下のようにします。

1. [このリスト](/webhooks/#events)から、サブスクライブする必要がある関連webhookイベントを特定してください。

2. GitHub Servicesを現在使っている方法に応じて、設定を変更してください。

   - **GitHub Apps**: アプリケーションの権限とサブスクライブしているイベントを更新し、関連するwebhookイベントを受信するようにアプリケーションを設定してください。
   - **OAuth Apps**: `repo_hook`や`org_hook`スコープをリクエストして、ユーザの代わりに関連するイベントを管理してください。
   - **GitHub Serviceプロバイダー**: ユーザが手動で、送信された関連するイベントとあわせてwebhookを設定するように要求するか、この機会にこの機能を管理するアプリケーションを構築してください。 詳しい情報については「[アプリケーションについて](/apps/about-apps/)」を参照してください。

3. GitHubの外部から、追加の設定を移動してください。 GitHub Servicesの中には、GitHub内の設定ページで追加のカスタム設定が必要になるものがあります。 使っているサービスがそうなら、この機能をアプリケーションに移すか、可能な場合はGitHub AppもしくはOAuth Appに依存する必要があります。

### {% data variables.product.prodname_ghe_server %}のサポート

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} リリース2.17以降では、管理者がサービスをインストールできなくなります。 {% data variables.product.prodname_ghe_server %}リリース2.17から2.19では、管理者は引き続き既存のサービスフックを変更し、サービスフックを受信できます。 {% data variables.product.prodname_ghe_server %} 2.17以降では、メールサービスの代替としてリポジトリへのプッシュに対するメール通知が使えます。 詳細については[このブログポスト](https://developer.github.com/changes/2019-01-29-life-after-github-services)を参照してください。
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %}リリース2.20以降では、インストールされたすべてのサービスイベントの配信が停止されます。

{% data variables.product.prodname_ghe_server %} 2.17リリースは、管理者がGitHub Servicesをインストールできない最初のリリースになります。 既存のGitHub Servicesは、{% data variables.product.prodname_ghe_server %} 2.20リリースまでしかサポートされません。 また、2019年10月1日まで{% data variables.product.prodname_ghe_server %}上で動作しているGitHub Serviceに対する重要なパッチを受け付けます。

### 弊社の支援を受けての移行

質問があれば、[お問い合わせ](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation)ください。

高レベルの概要としては、移行のプロセスは通常以下を含みます。
  - 製品がどこでどのようにGitHub Servicesを使っているかの特定。
  - 通常のwebhookに移行するために設定する必要がある、対応するwebhookイベントの特定。
  - [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/)もしくは[{% data variables.product.prodname_github_app %}](/apps/building-github-apps/)のいずれかを利用して設計を実装。 {% data variables.product.prodname_github_app %}の方が望ましいです。 {% data variables.product.prodname_github_app %}が望ましい理由の詳細を学ぶには、「[{% data variables.product.prodname_github_app %}に切り替える理由](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)」を参照してください。
