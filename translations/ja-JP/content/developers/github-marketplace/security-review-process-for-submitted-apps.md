---
title: サブミットされたアプリケーションに対するセキュリティレビューのプロセス
intro: 'GitHubのセキュリティチームは、{% data variables.product.prodname_marketplace %}にサブミットされたすべてのアプリケーションをレビューし、それらがセキュリティの要件を満たしていることを確認します。 このレビューのプロセスに備えるために、以下のベストプラクティスに従ってください。'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
versions:
  free-pro-team: '*'
---



承認のためにアプリケーションをサブミットすると、GitHubのセキュリティチームはそのアプリケーションと全体的なセキュリティプログラムに関するセキュリティアンケートへの回答を求めます。 レビューの一環として、回答をサポートするためのドキュメンテーションを提供することもできます。 {% data variables.product.prodname_marketplace %}が承認される前に、[インシデントレスポンス計画](#incident-response-plan)と[脆弱性管理ワークフロー](#vulnerability-management-workflow)という2つの必須ドキュメントを提出しなければなりません。


### セキュリティのベストプラクティス

セキュリティレビューを成功させ、セキュアなユーザ体験を提供するために、以下のベストプラクティスに従ってください。

#### 認可、認証、アクセスコントロール

OAuth Appよりは、GitHub Appをサブミットすることをおすすめします。 {% data reusables.marketplace.github_apps_preferred %}. 詳細については、「[GitHub AppsとOAuth Appsの違い](/apps/differences-between-apps/)」を参照してください。
- アプリケーションは「[最小の権限の原則](https://en.wikipedia.org/wiki/Principle_of_least_privilege)」を用いなければならず、要求するOAuthのスコープやGitHub Appの権限は、意図された機能を実行するのにアプリケーションが必要とするものだけにすべきです。
- アプリケーションは、サポート担当者にメールや連絡をすることなく、顧客が自分のアカウントを削除する方法を提供しなければなりません。
- アプリケーションは、異なる実装間でトークンを共有してはなりません。 たとえば、デスクトップのアプリケーションはWebベースのアプリケーションとは別のトークンを持つべきです。 個々のトークンを使うことで、それぞれのアプリケーションはGitHubのリソースに必要なアクセスを個別にリクエストできます。
- ユーザの種類に応じて求められる機能によって、様々なユーザのロールを持たせてアプリケーションを設計してください。 たとえば、標準的なユーザは管理機能を利用できるべきではなく、支払いマネージャーはリポジトリのコードにプッシュアクセスできるべきではありません。
- アプリケーションは、SaaSサービスを管理するためのメールやデータベースサービスのようなサービスアカウントを共有するべきではありません。
- アプリケーションで使用されるすべてのサービスは、固有のログインとパスワードクレデンシャルを持たなければなりません。
- プロダクションのホスティングインフラストラクチャへの管理権限でのアクセスは、管理業務を持つエンジニアや従業員にのみ与えられるべきです。
- アプリケーションは、認証に個人アクセストークンを使うことはできず、[OAuth App](/apps/about-apps/#about-oauth-apps)あるいは[GitHub App](/apps/about-apps/#about-github-apps)として認証されなければなりません。
  - OAuth Appsは、[OAuthトークン](/apps/building-oauth-apps/authorizing-oauth-apps/)を使って認証を受けなければなりません。
  - GitHub Appは、[JSON Webトークン (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)、[OAuthトークン](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)、[インストールアクセストークン](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)のいずれかで認証を受けなければなりません。

#### データの保護

- アプリケーションは、パブリックなインターネット上で転送されるデータを、有効なTLS証明書を用いたHTTPSもしくはSSH for Gitで暗号化しなければなりません。
- アプリケーションは、クライアントIDとクライアントシークレットキーをセキュアに保存しなければなりません。 それらは[環境変数](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)に保存することをおすすめします。
- アプリケーションは、ユーザからの要求を受けてから30日以内、あるいはユーザのGitHubとの法的な関係が終了してから30日以内に、すべてのGitHubユーザデータを削除しなければなりません。
- アプリケーションは、ユーザにGitHubパスワードの提供を求めてはなりません。
- アプリケーションは、トークン、クライアントID、クライアントシークレットを暗号化すべきです。

#### ロギング及びモニタリング

- アプリケーションは、ロギング及びモニタリングの機能を持たなければなりません。 アプリケーションのログは最低でも30日間保存され、最低でも1年間アーカイブされていなければなりません。 セキュリティログは以下を含まなければなりません。
  - 認証及び認可イベント
  - サービス設定の変更
  - オブジェクトの読み書き
  - すべてのユーザ及びグループの権限変更
  - ロールの管理者への昇格
  - 各イベントに対する一貫したタイムスタンプ
  - 記録されたすべてのアクションのソースユーザ、IPアドレス及びホスト名

#### インシデントレスポンスのワークフロー

- GitHubと連携するには、{% data variables.product.prodname_marketplace %}アプリケーションのリストをサブミットする前に、[インシデントレスポンスプラン](#incident-response-plan)を用意しておかなければなりません。
- サードパーティのベンダを利用するよりは、自社内にセキュリティ及び運用インシデントレスポンスチームを持つことをおすすめします。
- インシデントの確認後24時間以内にGitHubに通知する機能を持っていなければなりません。
- インシデントレスポンスワークフローの要件に関する追加の詳細を含む、[{% data variables.product.prodname_marketplace %}開発者契約](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities)のセクション3.7.5 - 3.7.5.6に馴染んでおかなければなりません。

#### 脆弱性管理とパッチ適用ワークフロー

- プロダクションインフラストラクチャーの定期的な脆弱性スキャンを行わなければなりません。
- 脆弱性スキャンの結果をトリアージし、脆弱性の修正までの期間を定義して同意しなければなりません。
- 脆弱性管理とパッチ適用ワークフローの要件に関する追加の詳細を含む、[{% data variables.product.prodname_marketplace %}開発者契約](/github/site-policy/github-marketplace-developer-agreement#3-restrictions-and-responsibilities)のセクション3.7.3に馴染んでおかなければなりません。

### セキュリティプログラムのドキュメンテーション

Marketplaceのセキュリティレビューの間に、インシデントレスポンスプランと脆弱性管理のワークフローの提出を求められます。 それぞれのドキュメントには、日付スタンプ付きの経営陣が署名した会社ブランドでの声明が含まれていなければなりません。

#### インシデントレスポンスプラン
インシデントレスポンスプランのドキュメンテーションには、会社が従う現在のプロセス、責任者、連絡先の人物もしくはインシデント発生時に想定される連絡先の人物が含まれていなければなりません。 「[NIST Computer Security Incident Handling Guide](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf)」は、インシデントレスポンスを全般的に取り上げたドキュメントの素晴らしい例です。 セクション2.3の"Incident Response Policy, Plan, and Procedure Creation"は、特にこのポリシーを取り上げています。 もう1つの素晴らしい例としては「[SANS Data Breach Response Policy](https://www.sans.org/security-resources/policies/general/pdf/data-breach-response)」があります。

#### 脆弱性管理のワークフロー
脆弱性管理のワークフロードキュメンテーションには、使用されている脆弱性管理及びパッチ適用プロセスについて会社が従う現在のプロセスが含まれていなければなりません。 完全な脆弱性管理のプログラムがないなら、パッチ適用のプロセスの作成から始めると役立つでしょう。 パッチ管理ポリシーの作成のガイダンスとしては、「[Establish a patch management policy](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)」を読んでください。

{% note %}

**ノート:** インシデントレスポンス及び脆弱性管理ワークフローのドキュメントは、大規模な正式のポリシーあるいはプログラムドキュメントだとは想定されていません。 やることを書いた1〜2ページのドキュメントには、長いポリシーテンプレートよりも価値があります。

{% endnote %}

#### GitHub Marketplaceセキュリティプログラムアンケート

アプリケーションのサブミットの過程で、弊社の{% data variables.product.prodname_marketplace %}オンボーディングチームからセキュリティプラクティスに関する情報を求めるアンケートが送られてきます。 このドキュメントは、以下を証明する書面による記録となります。

- アプリケーションが必要とする認証方式とスコープ。
- OAuthの制限と{% data variables.product.prodname_github_app %}の利用を考慮した上で、アプリケーションが意図された機能を実行するのに必要となる以上のスコープや{% data variables.product.product_name %}のアクセスを要求していないこと。
- SaaS、PaaS、IaaSといったサードパーティのサービスあるいはインフラストラクチャの利用。
- インシデントレスポンスの手順が存在すること。
- アプリケーションによるキー／トークンの処理方法。
- 責任ある開示方針及び手続きがあること、もしくは6ヶ月以内に実施されること。
- 脆弱性管理のワークフローもしくはプログラム。
- ロギング及びモニタリングの機能があること。 関連するアプリケーションのログが少なくとも30日間保持され、少なくとも1年間アーカイブされるという証拠も提供しなければなりません。
