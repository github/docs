---
title: GitHub Servicesの置き換え
intro: '非推奨となった{% data variables.product.prodname_dotcom %} Servicesにまだ依存しているなら、サービスフックをwebhookに移行する方法を学んでください。'
redirect_from:
  - /guides/replacing-github-services
  - /v3/guides/automating-deployments-to-integrators
  - /v3/guides/replacing-github-services
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: ddbe9552b1520f2238e531afca06e449ba2f2ff8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112422'
---
GitHub Servicesは、webhookとの統合を進めるために非推奨となりました。 このガイドは、GitHub Servicesからwebhookへの移行を支援します。 このお知らせの詳細については、[ブログの投稿](https://developer.github.com/changes/2018-10-01-denying-new-github-services)を参照してください。

{% note %}

メールサービスに代わるものとして、リポジトリへのプッシュに対するメール通知を利用しはじめられるようになりました。 電子メール通知のコミットを構成する方法については、「[リポジトリへのプッシュに対するメール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)」を参照してください。

{% endnote %}

## 非推奨のタイムライン

- **2018 年 10 月 1 日**: GitHub では、ユーザーによるサービスのインストールを停止しました。 GitHub.comのユーザインターフェースから、GitHub Servicesを削除しました。
- **2019 年 1 月 29 日**: メール サービスに代わるものとして、リポジトリへのプッシュに対するメール通知を利用し始められるようになりました。 電子メール通知のコミットを構成する方法については、「[リポジトリへのプッシュに対するメール通知について](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)」を参照してください。
- **2019 年 1 月 31 日**: GitHub では、GitHub.com でインストールされたサービス イベントの配信が停止されます。

## GitHub Servicesの背景

GitHub Services (サービス フックとも呼ばれます) は、GitHub が[`github-services` リポジトリ](https://github.com/github/github-services)を介してインテグレーターのサービスの一部をホストする統合の従来の方法です。 GitHub上で行われたアクションがこれらのサービスをトリガーし、これらのサービスを使ってGitHubの外部のアクションをトリガーできます。

{% ifversion ghes %}
## GitHub Servicesを使っているリポジトリを探す
アプライアンス上でどのリポジトリがGitHub Servicesを使っているかを特定するためのコマンドラインスクリプトが提供されています。 詳細については、[ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report) を参照してください。{% endif %}

## GitHub Servicesとwebhook

GitHub Servicesとwebhookとの主な違いは以下のとおりです。
- **構成**: GitHub Services にはサービス固有の構成オプションがありますが、Webhook は URL とイベント群を指定するだけで簡単に設定できます。
- **カスタム ロジック**: GitHub Services では 1 つのイベントの処理の一部として複数のアクションで反応するカスタム ロジックを持つことができますが、Webhook にはカスタム ロジックはありません。
- **要求の種類**: GitHub Services は HTTP および非 HTTP 要求を発行できますが、Webhook が発行できるのは HTTP 要求のみです。

## webhookでのServicesの置き換え

GitHub Servicesをwebhookで置き換えるには、以下のようにします。

1. [この一覧](/webhooks/#events)からサブスクライブする必要のある関連する Webhook イベントを特定します。

2. GitHub Servicesを現在使っている方法に応じて、設定を変更してください。

   - **GitHub Apps**: アプリのアクセス許可とサブスクライブしているイベントを更新し、関連する Webhook イベントを受信するようにアプリを構成します。
   - **OAuth アプリ**: `repo_hook` と `org_hook` スコープの一方または両方を要求し、ユーザーに代わって関連するイベントを管理します。
   - **GitHub Service プロバイダー**: ユーザーが手動で、送信された関連するイベントと合わせて Webhook を構成するように要求するか、この機会にこの機能を管理するアプリを構築してください。 詳細については、「[アプリについて](/apps/about-apps/)」を参照してください。

3. GitHubの外部から、追加の設定を移動してください。 GitHub Servicesの中には、GitHub内の設定ページで追加のカスタム設定が必要になるものがあります。 使っているサービスがそうなら、この機能をアプリケーションに移すか、可能な場合はGitHub AppもしくはOAuth Appに依存する必要があります。

## {% data variables.product.prodname_ghe_server %}のサポート

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} リリース 2.17 以降では、管理者がサービスをインストールできなくなります。 {% data variables.product.prodname_ghe_server %}リリース2.17から2.19では、管理者は引き続き既存のサービスフックを変更し、サービスフックを受信できます。 {% data variables.product.prodname_ghe_server %} 2.17以降では、メールサービスの代替としてリポジトリへのプッシュに対するメール通知が使えます。 詳細については、[このブログ記事](https://developer.github.com/changes/2019-01-29-life-after-github-services)を参照してください。
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %} リリース 2.20 以降では、インストールされたすべてのサービス イベントの配信が停止されます。

{% data variables.product.prodname_ghe_server %} 2.17リリースは、管理者がGitHub Servicesをインストールできない最初のリリースになります。 既存のGitHub Servicesは、{% data variables.product.prodname_ghe_server %} 2.20リリースまでしかサポートされません。 また、2019年10月1日まで{% data variables.product.prodname_ghe_server %}上で動作しているGitHub Serviceに対する重要なパッチを受け付けます。

## 弊社の支援を受けての移行

ご質問がある場合は、[お問い合わせください](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation)。

高レベルの概要としては、移行のプロセスは通常以下を含みます。
  - 製品がどこでどのようにGitHub Servicesを使っているかの特定。
  - 通常のwebhookに移行するために設定する必要がある、対応するwebhookイベントの特定。
  - [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/) または [{% data variables.product.prodname_github_apps %}。{% data variables.product.prodname_github_apps %} を使用して設計を実装します。](/apps/building-github-apps/) が推奨されます。 {% data variables.product.prodname_github_apps %} が優先される理由の詳細については、「[{% data variables.product.prodname_github_apps %} に切り替える理由](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)」を参照してください。
