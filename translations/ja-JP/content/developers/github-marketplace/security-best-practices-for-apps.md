---
title: アプリケーションのセキュリティベストプラクティス
intro: '{% data variables.product.prodname_marketplace %}上でセキュアなアプリケーションを共有する準備のガイドライン'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
shortTitle: セキュリティベストプラクティス
versions:
  free-pro-team: '*'
---

以下のベストプラクティスに従えば、セキュアなユーザ体験を提供するための役に立つでしょう。

### 認可、認証、アクセスコントロール

OAuth AppよりもGitHub Appを作成することをおすすめします。 {% data reusables.marketplace.github_apps_preferred %}. 詳細については、「[GitHub AppsとOAuth Appsの違い](/apps/differences-between-apps/)」を参照してください。
- アプリケーションは、最小権限の原則を用い、アプリケーションが意図された機能を実行するために必要なOAuthのスコープとGitHub Appの権限だけをリクエストすべきです。 詳しい情報については、Wikipediaで[最小権限の原則](https://ja.wikipedia.org/wiki/最小権限の原則)を参照してください。
- アプリケーションは、サポート担当者にメールや連絡をすることなく、顧客が自分のアカウントを削除する方法を提供しなければなりません。
- アプリケーションは、異なる実装間でトークンを共有してはなりません。 たとえば、デスクトップのアプリケーションはWebベースのアプリケーションとは別のトークンを持つべきです。 個々のトークンを使うことで、それぞれのアプリケーションはGitHubのリソースに必要なアクセスを個別にリクエストできます。
- ユーザの種類に応じて求められる機能によって、様々なユーザのロールを持たせてアプリケーションを設計してください。 たとえば、標準的なユーザは管理機能を利用できるべきではなく、支払いマネージャーはリポジトリのコードにプッシュアクセスできるべきではありません。
- アプリケーションは、SaaSサービスを管理するためのメールやデータベースサービスのようなサービスアカウントを共有するべきではありません。
- アプリケーションで使用されるすべてのサービスは、固有のログインとパスワードクレデンシャルを持たなければなりません。
- プロダクションのホスティングインフラストラクチャへの管理権限でのアクセスは、管理業務を持つエンジニアや従業員にのみ与えられるべきです。
- アプリケーションは、認証に個人アクセストークンを使うべきではなく、[OAuth App](/apps/about-apps/#about-oauth-apps)あるいは[GitHub App](/apps/about-apps/#about-github-apps)として認証されなければなりません。
  - OAuth Appsは、[OAuthトークン](/apps/building-oauth-apps/authorizing-oauth-apps/)を使って認証を受けるべきです。
  - GitHub Appは、[JSON Webトークン (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)、[OAuthトークン](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)、[インストールアクセストークン](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)のいずれかで認証を受けるべきです。

### データの保護

- アプリケーションは、パブリックなインターネット上で転送されるデータを、有効なTLS証明書を用いたHTTPSもしくはSSH for Gitで暗号化すべきです。
- アプリケーションは、クライアントIDとクライアントシークレットキーをセキュアに保存すべきです。 それらは[環境変数](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)に保存することをおすすめします。
- アプリケーションは、ユーザからの要求を受けてから30日以内、あるいはユーザのGitHubとの法的な関係が終了してから30日以内に、すべてのGitHubユーザデータを削除すべきです。
- アプリケーションは、ユーザにGitHubパスワードの提供を求めるべきではありません。
- アプリケーションは、トークン、クライアントID、クライアントシークレットを暗号化すべきです。

### ロギング及びモニタリング

アプリケーションは、ロギング及びモニタリングの機能を持つべきです。 アプリケーションのログは最低でも30日間保存され、最低でも1年間アーカイブされるべきです。 セキュリティログは以下を含まなければなりません。

- 認証及び認可イベント
- サービス設定の変更
- オブジェクトの読み書き
- すべてのユーザ及びグループの権限変更
- ロールの管理者への昇格
- 各イベントに対する一貫したタイムスタンプ
- 記録されたすべてのアクションのソースユーザ、IPアドレス及びホスト名

### インシデントレスポンスのワークフロー

ユーザのセキュアな体験を提供するためには、アプリケーションをリストする前に明確なインシデントレスポンスプランを用意しておくべきです。 サードパーティのベンダを利用するよりは、自社内にセキュリティ及び運用インシデントレスポンスチームを持つことをおすすめします。 インシデントの確認から24時間以内に{% data variables.product.product_name %}に通知する機能を持っていなければなりません。

インシデントレスポンスのワークフローの例としては、[SANS Institute website](https://www.sans.org/information-security-policy/)の"Data Breach Response Policy"を参照してください。 インシデントが生じた際に取るべき明確なステップを記した短いドキュメントは、長いポリシーテンプレートよりも価値があります。

### 脆弱性管理とパッチ適用ワークフロー

プロダクションインフラストラクチャーの定期的な脆弱性スキャンを行わなければなりません。 脆弱性スキャンの結果をトリアージし、脆弱性の修正までの期間を定義して同意しなければなりません。

完全な脆弱性管理のプログラムをセットアップする準備ができていない場合は、パッチ適用のプロセスを作成することから始めると役立ちます。 パッチ管理ポリシーを作成するためのガイダンスとしては、TechRepublicの記事「[Establish a patch management policy](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)」を参照してください。
