---
title: Security best practices for apps
intro: 'Guidelines for preparing a secure app to share on {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process/
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
shortTitle: Security best practice
versions:
  free-pro-team: '*'
---

If you follow these best practices it will help you to provide a secure user experience.

### 認可、認証、アクセスコントロール

We recommend creating a GitHub App rather than an OAuth App. {% data reusables.marketplace.github_apps_preferred %}. 詳細については、「[GitHub AppsとOAuth Appsの違い](/apps/differences-between-apps/)」を参照してください。
- Apps should use the principle of least privilege and should only request the OAuth scopes and GitHub App permissions that the app needs to perform its intended functionality. For more information, see [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege) in Wikipedia.
- Apps should provide customers with a way to delete their account, without having to email or call a support person.
- アプリケーションは、異なる実装間でトークンを共有してはなりません。 たとえば、デスクトップのアプリケーションはWebベースのアプリケーションとは別のトークンを持つべきです。 個々のトークンを使うことで、それぞれのアプリケーションはGitHubのリソースに必要なアクセスを個別にリクエストできます。
- ユーザの種類に応じて求められる機能によって、様々なユーザのロールを持たせてアプリケーションを設計してください。 たとえば、標準的なユーザは管理機能を利用できるべきではなく、支払いマネージャーはリポジトリのコードにプッシュアクセスできるべきではありません。
- Apps should not share service accounts such as email or database services to manage your SaaS service.
- アプリケーションで使用されるすべてのサービスは、固有のログインとパスワードクレデンシャルを持たなければなりません。
- プロダクションのホスティングインフラストラクチャへの管理権限でのアクセスは、管理業務を持つエンジニアや従業員にのみ与えられるべきです。
- Apps should not use personal access tokens to authenticate and should authenticate as an [OAuth App](/apps/about-apps/#about-oauth-apps) or a [GitHub App](/apps/about-apps/#about-github-apps):
  - OAuth Apps should authenticate using an [OAuth token](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - GitHub Apps should authenticate using either a [JSON Web Token (JWT)](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app), [OAuth token](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/), or [installation access token](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

### データの保護

- Apps should encrypt data transferred over the public internet using HTTPS, with a valid TLS certificate, or SSH for Git.
- Apps should store client ID and client secret keys securely. それらは[環境変数](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables)に保存することをおすすめします。
- Apps should delete all GitHub user data within 30 days of receiving a request from the user, or within 30 days of the end of the user's legal relationship with GitHub.
- Apps should not require the user to provide their GitHub password.
- アプリケーションは、トークン、クライアントID、クライアントシークレットを暗号化すべきです。

### ロギング及びモニタリング

Apps should have logging and monitoring capabilities. App logs should be retained for at least 30 days and archived for at least one year. セキュリティログは以下を含まなければなりません。

- 認証及び認可イベント
- サービス設定の変更
- オブジェクトの読み書き
- すべてのユーザ及びグループの権限変更
- ロールの管理者への昇格
- 各イベントに対する一貫したタイムスタンプ
- 記録されたすべてのアクションのソースユーザ、IPアドレス及びホスト名

### インシデントレスポンスのワークフロー

To provide a secure experience for users, you should have a clear incident response plan in place before listing your app. サードパーティのベンダを利用するよりは、自社内にセキュリティ及び運用インシデントレスポンスチームを持つことをおすすめします。 You should have the capability to notify {% data variables.product.product_name %} within 24 hours of a confirmed incident.

For an example of an incident response workflow, see the "Data Breach Response Policy" on the [SANS Institute website](https://www.sans.org/information-security-policy/). A short document with clear steps to take in the event of an incident is more valuable than a lengthy policy template.

### 脆弱性管理とパッチ適用ワークフロー

プロダクションインフラストラクチャーの定期的な脆弱性スキャンを行わなければなりません。 脆弱性スキャンの結果をトリアージし、脆弱性の修正までの期間を定義して同意しなければなりません。

If you are not ready to set up a full vulnerability management program, it's useful to start by creating a patching process. For guidance in creating a patch management policy, see this TechRepublic article "[Establish a patch management policy](https://www.techrepublic.com/blog/it-security/establish-a-patch-management-policy-87756/)."
