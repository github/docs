---
title: API プレビュー
intro: API プレビューを使用して新機能を試し、これらの機能が正式なものになる前にフィードバックを提供できます。
redirect_from:
  - /early-access/
  - /v3/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


API プレビューを使用すると、正式に GitHub API の一部になる前に、新しい API や既存の API メソッドへの変更を試すことができます。

プレビュー期間中は、開発者からのフィードバックに基づいて機能を変更することがあります。 変更をする際には、事前の通知なく[開発者blog](https://developer.github.com/changes/)でアナウンスします。

API プレビューにアクセスするには、リクエストの ` Accept` ヘッダー内でカスタムの[メディアタイプ](/v3/media)を提供しなければなりません。 各プレビューの機能ドキュメントに、どのカスタムメディアタイプを提供するのかが示されています。

{% if currentVersion == "free-pro-team@latest" %}
### 移行

GitHub ユーザまたは Organization アカウントからリポジトリをダウンロードして、データの確認、バックアップ、{% data variables.product.prodname_ghe_server %} への[移行](/v3/migrations/)ができます。

**カスタムメディアタイプ:** `wyandotte-preview` **発表日:** [2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

### 強化されたデプロイメント

より多くの情報と細かい粒度で、[デプロイメント](/rest/reference/repos#deployments)をより詳細に制御します。

**カスタムメディアタイプ:** `ant-man-preview` **発表日:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

### リアクション

コミット、Issue、コメントに対する[リアクション](/v3/reactions/)を管理します。

**カスタムメディアタイプ:** `squirrel-girl-preview` **発表日:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **更新日:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

### タイムライン

Issue またはプルリクエストの[イベントのリスト](/v3/issues/timeline/)を取得します。

**カスタムメディアタイプ:** `mockingbird-preview` **発表日:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% if enterpriseServerVersions contains currentVersion %}
### pre-receive 環境

pre-receive フックの環境を作成、一覧表示、更新、削除します。

**カスタムメディアタイプ:** `eye-scream-preview` **発表日:** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
### インテグレーション

API を介して[インテグレーション](/early-access/integrations/)を管理します。

**カスタムメディアタイプ:** `machine-man-preview` **発表日:** [2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/)
{% endif %}

### プロジェクト

[プロジェクト](/v3/projects/)を管理します。

**カスタムメディアタイプ:** `inertia-preview` **発表日:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **更新日:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)

### コミット検索

[コミットの検索](/v3/search/)をします。

**カスタムメディアタイプ:** `cloak-preview` **発表日:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

{% if currentVersion == "free-pro-team@latest" %}
### コミュニティプロフィールメトリクス

パブリックリポジトリの[コミュニティプロフィールメトリック](/v3/repos/community/)（コミュニティ健全性とも呼ばれる）を取得します。

**カスタムメディアタイプ:** `black-panther-preview` **発表日:** [2017-02-09](https://developer.github.com/changes/2017-02-09-community-health/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### ユーザブロック

ユーザは[他のユーザをブロック](/v3/users/blocking/)できます。 Organization も[ユーザをブロック](/v3/orgs/blocking/)できます。

**カスタムメディアタイプ:** `giant-sentry-fist-preview` **発表日:** [2011-05-31](https://github.com/blog/862-block-the-bullies) **更新日1:** [2016-04-04](https://github.com/blog/2146-organizations-can-now-block-abusive-users) **更新日 2:** [2016-08-17](https://github.com/blog/2229-see-the-users-you-ve-blocked-on-your-settings-page)
{% endif %}

### リポジトリトピック

リポジトリの結果を返す[呼び出し](/v3/repos/)で[リポジトリトピック](/articles/about-topics/)のリストを表示します。

**カスタムメディアタイプ:** `mercy-preview` **発表日:** [2017-01-31](https://github.com/blog/2309-introducing-topics)

### 行動規範

すべての[行動規範](/v3/codes_of_conduct)を表示するか、リポジトリに現在ある行動規範を取得します。

**カスタムメディアタイプ:** `scarlet-witch-preview`

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
### 入れ子チーム

入れ子チームコンテンツを [Team](/v3/teams/) ペイロードに含めます。

**カスタムメディアタイプ:** `hellcat-preview` **発表日:** [2017-09-01](https://developer.github.com/changes/2017-08-30-preview-nested-teams)

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}

### グローバル webhook

[Organization](/webhooks/event-payloads/#organization) および[ユーザ](/webhooks/event-payloads/#user)イベントタイプの[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/) を有効にします。 この API プレビューは {% data variables.product.prodname_ghe_server %} でのみ使用できます。

**カスタムメディアタイプ:** `superpro-preview` **発表日:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
### リポジトリ移譲

[リポジトリ](/v3/repos/)を Organization またはユーザに移譲します。

**カスタムメディアタイプ:** `nightshade-preview` **発表日:** [2017-11-09](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview)
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
### ロック理由の追加

[Issue をロック](/v3/issues/#lock-an-issue)するときに理由を追加できるようになりました。

**カスタムメディアタイプ:** `sailor-v-preview` **発表日:** [2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)
{% endif %}

### 署名済みコミットの必須化

これで、API を使用して、[保護されたブランチで署名済みコミットを必須にする](/v3/repos/branches)ための設定を管理できます。

**カスタムメディアタイプ:** `zzzax-preview` **発表日:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

### 複数の承認レビューの必須化

API を使用して、プルリクエストに対して[複数の承認レビューを必須にする](/v3/repos/branches)ことができるようになりました。

**カスタムメディアタイプ:** `luke-cage-preview` **発表日:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.19" %}
### ホバーカード情報の取得

[ユーザのホバーカード](/v3/users/#get-contextual-information-for-a-user)から情報を取得します。

**カスタムメディアタイプ:** `hagar-preview` **発表日:** [2018-03-21](https://developer.github.com/changes/2018-03-21-hovercard-api-preview)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}
### チェック実行とチェックスイート API

GitHub App がリポジトリのコードに対して外部チェックを実行できるようにします。 詳細については、[チェック実行](/v3/checks/runs/)と[チェックスイート](/v3/checks/suites/) API をご覧ください。

**カスタムメディアタイプ:** `antiope-preview` **発表日:** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)
{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}

### リポジトリへの匿名 Git アクセス

{% data variables.product.prodname_ghe_server %} インスタンスがプライベートモードの場合、サイトおよびリポジトリの管理者は、パブリックリポジトリに対して匿名の Git アクセスを有効にすることができます。

**カスタムメディアタイプ:** `x-ray-preview` **発表日:** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}

### プロジェクトカードの詳細

[Issue イベント](/v3/issues/events/)および [Issue タイムラインイベント](/v3/issues/timeline/)の REST API 応答は、プロジェクト関連イベントの `project_card` フィールドを返すようになりました。

**カスタムメディアタイプ:** `starfox-preview` **発表日:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% if currentVersion == "free-pro-team@latest" %}

### GitHub App マニフェスト

GitHub App マニフェストを使用すると、事前設された GitHub App を作成できます。 詳細については、「[GitHub App のマニフェスト](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。

**カスタムメディアタイプ:** `fury-preview`

{% endif %}

### デプロイメントステータス

[デプロイメントステータス](/rest/reference/repos#create-a-deployment-status)の`環境`を更新し、`in_progress` および `queued` ステータスを使用できるようになりました。 デプロイメントステータスを作成するときに、`auto_inactive` パラメータを使用して、古い`本番`デプロイメントを `inactive` としてマークできるようになりました。

**カスタムメディアタイプ:** `flash-preview` **発表日:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

### リポジトリの作成権限

Organization メンバーによるリポジトリの作成可否、および作成可能なリポジトリのタイプを設定できるようになりました。 詳細については、「[Organization を更新する](/v3/orgs/#update-an-organization)」を参照してください。

**カスタムメディアタイプ:** `surtur-preview` **発表日:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

### コンテンツの添付

{% data variables.product.prodname_unfurls %} API を使用して、登録されたドメインにリンクする URL の詳細情報を GitHub で提供できるようになりました。 詳細については、「[添付コンテンツを使用する](/apps/using-content-attachments/)」を参照してください。

**カスタムメディアタイプ:** `corsair-preview` **発表日:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% if currentVersion == "free-pro-team@latest" %}

### リポジトリと Organization に対するインタラクションの制限

{% data variables.product.product_name %} リポジトリまたは Organization に対して、コメント、Issue のオープン、プルリクエスト作成などのインタラクションを一時的に制限できます。 有効にすると、指定した {% data variables.product.product_name %} ユーザのグループのみがこれらの操作に参加できます。インタラクション 詳細については、 [リポジトリインタラクション](/v3/interactions/repos/)と [Organization インタラクション](/v3/interactions/orgs/) API を参照してください。

**カスタムメディアタイプ:** `sombra-preview` **発表日:** [2018-12-18](https://developer.github.com/changes/2018-12-18-interactions-preview/)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
### ドラフトプルリクエスト

ドラフトプルリクエスト API とその[プルリクエスト](/v3/pulls/)エンドポイントを使用して、プルリクエストがドラフト状態かどうかを確認できます。 ドラフトプルリクエストについての詳細は、「[プルリクエストについて](/articles/about-pull-requests/)」を参照してください。

**カスタムメディアタイプ:** `shadow-cat-preview` **発表日:** [2019-02-14](https://developer.github.com/changes/2019-02-14-draft-pull-requests/)

{% endif %}

### Pages の有効化と無効化

[Pages API](/rest/reference/repos#pages) の新しいエンドポイントを使用して、Pages を有効または無効にできます。 Pages の詳細については、「[GitHub Pages の基本](/categories/github-pages-basics) 」を参照してください。

**カスタムメディアタイプ:** `switcheroo-preview` **発表日:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

### コミットのブランチまたはプルリクエストの一覧表示

[Commits API](/v3/repos/commits/) で 2 つの新しいエンドポイントを使用して、コミットのブランチまたはプルリクエストを一覧表示できます。

**カスタムメディアタイプ:** `groot-preview` **発表日:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
### GitHub App のアンインストール

GitHub App の所有者は、[Apps API](/v3/apps/#delete-an-installation-for-the-authenticated-app) を使用してアプリケーションをアンインストールできるようになりました。

**カスタムメディアタイプ:** `gambit-preview`
{% endif %}

### リポジトリの脆弱性アラートの有効化または無効化

[Repos API](/v3/repos/) で 2 つの新しいエンドポイントを使用して、脆弱性アラートを有効化または無効化できます。

**カスタムメディアタイプ:** `dorian-preview` **発表日:** [2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)

### プルリクエストブランチの更新

新しいエンドポイントを使用して、[プルリクエストブランチ](/v3/pulls/#update-a-pull-request-branch)を上流ブランチの HEAD からの変更で更新できます。

**カスタムメディアタイプ:** `lydian-preview` **発表日:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% if currentVersion == "free-pro-team@latest" %}
### 自動セキュリティ修正の有効化または無効化

新しいエンドポイントを使用して、[自動セキュリティ修正を有効化または無効化](/v3/repos/#enable-automated-security-fixes)することができます。

**カスタムメディアタイプ:** `london-preview` **発表日:** [2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/)
{% endif %}

### リポジトリテンプレートの作成および使用

新しいエンドポイントで、[テンプレートを使用してリポジトリを作成](/v3/repos/#create-a-repository-using-a-template)し、`is_template` パラメータを `true` に設定して、テンプレートリポジトリである[認証済みユーザのリポジトリを作成](/v3/repos/#create-a-repository-for-the-authenticated-user)できます。 `is_template` キーを使用して、[リポジトリを取得](/v3/repos/#get-a-repository)し、テンプレートリポジトリとして設定されているかどうかを確認します。

**カスタムメディアタイプ:** `baptiste-preview` **発表日:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% if currentVersion == "enterprise-server@2.20" %}
### 新しい OAuth アプリケーション API エンドポイント

新しい [OAuth アプリケーション API](/v3/apps/oauth_applications/) エンドポイントでパスパラメータの代わりに OAuth トークンを入力パラメータとして使用することにより、OAuth App のトークンをより安全に管理できます。

**カスタムメディアタイプ:** `doctor-strange-preview` **発表日:** [2019-11-05](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
### Repositories API の新しい可視性パラメータ

[Repositories API](/v3/repos/) でリポジトリの可視性を設定および取得できます。

**カスタムメディアタイプ:** `nebula-preview` **発表日:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
