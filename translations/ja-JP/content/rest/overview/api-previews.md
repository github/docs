---
title: API プレビュー
intro: API プレビューを使用して新機能を試し、これらの機能が正式なものになる前にフィードバックを提供できます。
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
  ghae: '*'
topics:
  - API
---


API プレビューを使用すると、正式に GitHub API の一部になる前に、新しい API や既存の API メソッドへの変更を試すことができます。

プレビュー期間中は、開発者からのフィードバックに基づいて機能を変更することがあります。 変更をする際には、事前の通知なく[開発者blog](https://developer.github.com/changes/)でアナウンスします。

API プレビューにアクセスするには、リクエストの ` Accept` ヘッダー内でカスタムの[メディアタイプ](/rest/overview/media-types)を提供しなければなりません。 各プレビューの機能ドキュメントに、どのカスタムメディアタイプを提供するのかが示されています。

{% ifversion ghes < 3.3 %}

## 強化されたデプロイメント

より多くの情報と細かい粒度で、[デプロイメント](/rest/reference/repos#deployments)をより詳細に制御します。

**カスタムメディアタイプ:** `ant-man-preview` **発表日:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## リアクション

コミット、Issue、コメントに対する[リアクション](/rest/reference/reactions)を管理します。

**カスタムメディアタイプ:** `squirrel-girl-preview` **発表日:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **更新日:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## タイムライン

Issue またはプルリクエストの[イベントのリスト](/rest/reference/issues#timeline)を取得します。

**カスタムメディアタイプ:** `mockingbird-preview` **発表日:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes < 3.3 %}
## プロジェクト

[プロジェクト](/rest/reference/projects)を管理します。

**カスタムメディアタイプ:** `inertia-preview` **発表日:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **更新日:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## コミット検索

[コミットの検索](/rest/reference/search)をします。

**カスタムメディアタイプ:** `cloak-preview` **発表日:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## リポジトリトピック

リポジトリの結果を返す[呼び出し](/rest/reference/repos)で[リポジトリトピック](/articles/about-topics/)のリストを表示します。

**カスタムメディアタイプ:** `mercy-preview` **発表日:** [2017-01-31](https://github.com/blog/2309-introducing-topics)
{% endif %}
{% ifversion ghes < 3.3 %}

## 行動規範

すべての[行動規範](/rest/reference/codes-of-conduct)を表示するか、リポジトリに現在ある行動規範を取得します。

**カスタムメディアタイプ:** `scarlet-witch-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## グローバル webhook

[Organization](/webhooks/event-payloads/#organization) および[ユーザ](/webhooks/event-payloads/#user)イベントタイプの[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/) を有効にします。 この API プレビューは {% data variables.product.prodname_ghe_server %} でのみ使用できます。

**カスタムメディアタイプ:** `superpro-preview` **発表日:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 3.3 %}

## 署名済みコミットの必須化

これで、API を使用して、[保護されたブランチで署名済みコミットを必須にする](/rest/reference/repos#branches)ための設定を管理できます。

**カスタムメディアタイプ:** `zzzax-preview` **発表日:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)
{% endif %}
{% ifversion ghes < 3.3 %}

## 複数の承認レビューの必須化

API を使用して、プルリクエストに対して[複数の承認レビューを必須にする](/rest/reference/repos#branches)ことができるようになりました。

**カスタムメディアタイプ:** `luke-cage-preview` **発表日:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.3 %}

## プロジェクトカードの詳細

[Issue イベント](/rest/reference/issues#events)および [Issue タイムラインイベント](/rest/reference/issues#timeline)の REST API 応答は、プロジェクト関連イベントの `project_card` フィールドを返すようになりました。

**カスタムメディアタイプ:** `starfox-preview` **発表日:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}

{% ifversion ghes < 3.3 %}

## デプロイメントステータス

[デプロイメントステータス](/rest/reference/deployments#create-a-deployment-status)の`環境`を更新し、`in_progress` および `queued` ステータスを使用できるようになりました。 デプロイメントステータスを作成するときに、`auto_inactive` パラメータを使用して、古い`本番`デプロイメントを `inactive` としてマークできるようになりました。

**カスタムメディアタイプ:** `flash-preview` **発表日:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## リポジトリの作成権限

Organization メンバーによるリポジトリの作成可否、および作成可能なリポジトリのタイプを設定できるようになりました。 詳細については、「[Organization を更新する](/rest/reference/orgs#update-an-organization)」を参照してください。

**カスタムメディアタイプ:** `surtur-preview` **発表日:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

{% ifversion ghes < 3.4 %}
## コンテンツの添付

{% data variables.product.prodname_unfurls %} API を使用して、登録されたドメインにリンクする URL の詳細情報を GitHub で提供できるようになりました。 詳細については、「[添付コンテンツを使用する](/apps/using-content-attachments/)」を参照してください。

**カスタムメディアタイプ:** `corsair-preview` **発表日:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}
{% ifversion ghae or ghes < 3.3 %}

## Pages の有効化と無効化

[Pages API](/rest/reference/repos#pages) の新しいエンドポイントを使用して、Pages を有効または無効にできます。 Pages の詳細については、「[GitHub Pages の基本](/categories/github-pages-basics) 」を参照してください。

**カスタムメディアタイプ:** `switcheroo-preview` **発表日:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## コミットのブランチまたはプルリクエストの一覧表示

[Commits API](/rest/reference/repos#commits) で 2 つの新しいエンドポイントを使用して、コミットのブランチまたはプルリクエストを一覧表示できます。

**カスタムメディアタイプ:** `groot-preview` **発表日:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## プルリクエストブランチの更新

新しいエンドポイントを使用して、[プルリクエストブランチ](/rest/reference/pulls#update-a-pull-request-branch)を上流ブランチの HEAD からの変更で更新できます。

**カスタムメディアタイプ:** `lydian-preview` **発表日:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %}
{% ifversion ghes < 3.3 %}

## リポジトリテンプレートの作成および使用

新しいエンドポイントで、[テンプレートを使用してリポジトリを作成](/rest/reference/repos#create-a-repository-using-a-template)し、`is_template` パラメータを `true` に設定して、テンプレートリポジトリである[認証済みユーザのリポジトリを作成](/rest/reference/repos#create-a-repository-for-the-authenticated-user)できます。 `is_template` キーを使用して、[リポジトリを取得](/rest/reference/repos#get-a-repository)し、テンプレートリポジトリとして設定されているかどうかを確認します。

**カスタムメディアタイプ:** `baptiste-preview` **発表日:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)
{% endif %}
{% ifversion ghes < 3.3 %}

## Repositories API の新しい可視性パラメータ

[Repositories API](/rest/reference/repos) でリポジトリの可視性を設定および取得できます。

**カスタムメディアタイプ:** `nebula-preview` **発表日:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
