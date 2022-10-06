---
title: API プレビュー
intro: API プレビューを使用して新機能を試し、これらの機能が正式なものになる前にフィードバックを提供できます。
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: fe00e2ab78881edab8d0f7704f80f2f20163fdeb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878439'
---
API プレビューを使用すると、正式に GitHub API の一部になる前に、新しい API や既存の API メソッドへの変更を試すことができます。

プレビュー期間中は、開発者からのフィードバックに基づいて機能を変更することがあります。 変更を行う際には、事前の通知なく[開発者ブログ](https://developer.github.com/changes/)で発表します。

API プレビューにアクセスするには、自分の要求の `Accept` ヘッダーにカスタムの[メディアの種類](/rest/overview/media-types)を指定する必要があります。 各プレビューの機能ドキュメントに、どのカスタムメディアタイプを提供するのかが示されています。

{% ifversion ghes < 3.3 %}

## 強化されたデプロイメント

より多くの情報と細かい粒度で[デプロイ](/rest/reference/repos#deployments)をより細かく制御します。

**カスタムのメディアの種類:** `ant-man-preview`
**発表日:** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## リアクション

コミット、問題、コメントの[リアクション](/rest/reference/reactions)を管理します。

**カスタムのメディアの種類:** `squirrel-girl-preview`
**発表:** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/)
**更新:** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## タイムライン

問題または pull request の[イベントの一覧](/rest/reference/issues#timeline)を取得します。

**カスタムのメディアの種類:** `mockingbird-preview`
**発表日:** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes < 3.3 %}
## プロジェクト

[プロジェクト](/rest/reference/projects)を管理します。

**カスタムのメディアの種類:** `inertia-preview`
**発表:** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/)
**更新:** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/) {% endif %} {% ifversion ghes < 3.3 %}

## コミット検索

[コミットを検索します](/rest/reference/search)。

**カスタムのメディアの種類:** `cloak-preview`
**発表:** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/) {% endif %} {% ifversion ghes < 3.3 %}

## リポジトリトピック

リポジトリの結果を返す[呼び出し](/articles/about-topics/)で[リポジトリ トピック](/rest/reference/repos)の一覧を表示します。

**カスタムのメディアの種類:** `mercy-preview`
**発表:** [2017-01-31](https://github.com/blog/2309-introducing-topics) {% endif %} {% ifversion ghes < 3.3 %}

## 行動規範

すべての[行動規範](/rest/reference/codes-of-conduct)を表示するか、リポジトリに現在含まれる行動規範を取得します。

**カスタムのメディアの種類:** `scarlet-witch-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## グローバル webhook

[組織](/webhooks/event-payloads/#organization)と[ユーザー](/webhooks/event-payloads/#user)のイベントの種類に対して[グローバル Webhook](/rest/reference/enterprise-admin#global-webhooks/) を有効にします。 この API プレビューは {% data variables.product.prodname_ghe_server %} でのみ使用できます。

**カスタムのメディアの種類:** `superpro-preview`
**発表日:** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 3.3 %}

## 署名済みコミットの必須化

これで、API を使用して、[保護されたブランチで署名済みコミットを必須にする](/rest/reference/repos#branches)ための設定を管理できるようになりました。

**カスタムのメディアの種類:** `zzzax-preview`
**発表:** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures) {% endif %} {% ifversion ghes < 3.3 %}

## 複数の承認レビューの必須化

API を使用することで、pull request に対して[複数の承認レビューを要求](/rest/reference/repos#branches)できるようになりました。

**カスタムのメディアの種類:** `luke-cage-preview`
**発表日:** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.3 %}

## プロジェクトカードの詳細

[issue イベント](/rest/reference/issues#events)と [issue タイムライン イベント](/rest/reference/issues#timeline) の REST API 応答から、プロジェクト関連のイベントの `project_card` フィールドが返されるようになりました。

**カスタムのメディアの種類:** `starfox-preview`
**発表日:** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}

{% ifversion ghes < 3.3 %}

## デプロイメントステータス

これで、[デプロイ状態](/rest/reference/deployments#create-a-deployment-status)の `environment` を更新し、`in_progress` と `queued` の状態を使用できるようになりました。 デプロイの状態を作成する際に、`auto_inactive` パラメーターを使用して古い `production` デプロイを `inactive` として使用できるようになりました。

**カスタムのメディアの種類:** `flash-preview`
**発表日:** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## リポジトリの作成権限

Organization メンバーによるリポジトリの作成可否、および作成可能なリポジトリのタイプを設定できるようになりました。 詳細については、[組織の更新](/rest/reference/orgs#update-an-organization)に関するページを参照してください。

**カスタムのメディアの種類:** `surtur-preview`
**発表:** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

{% ifversion ghes < 3.4 %}
## コンテンツの添付

{% data variables.product.prodname_unfurls %} API を使用して、登録されたドメインにリンクする URL の詳細情報を GitHub で提供できるようになりました。 詳細については、「[添付コンテンツを使用する](/apps/using-content-attachments/)」を参照してください。

**カスタムのメディアの種類:** `corsair-preview`
**発表:** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## Pages の有効化と無効化

[Pages API](/rest/reference/repos#pages) の新しいエンドポイントを使用して、Pages を有効または無効にすることができます。 Pages の詳細については、[GitHub Pages の基本](/categories/github-pages-basics)に関するページを参照してください。

**カスタムのメディアの種類:** `switcheroo-preview`
**発表:** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## コミットのブランチまたはプルリクエストの一覧表示

[Commits API](/rest/reference/repos#commits) で 2 つの新しいエンドポイントを使用して、コミットのブランチまたは pull requests を一覧表示できます。

**カスタムのメディアの種類:** `groot-preview`
**発表:** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## プルリクエストブランチの更新

新しいエンドポイントを使用することで、アップストリーム ブランチの HEAD からの変更で [pull request ブランチを更新](/rest/reference/pulls#update-a-pull-request-branch)することができます。

**カスタムのメディアの種類:** `lydian-preview`
**発表:** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## リポジトリテンプレートの作成および使用

新しいエンドポイントを使用すると、[テンプレートを使用してリポジトリを作成](/rest/reference/repos#create-a-repository-using-a-template)したり、`is_template` パラメーターを `true` に設定して[認証済みユーザー用のリポジトリを作成](/rest/reference/repos#create-a-repository-for-the-authenticated-user)したりできます。 [リポジトリを取得](/rest/reference/repos#get-a-repository)することで、`is_template` キーを使用してそれがテンプレート リポジトリとして設定されているかどうかを確認できます。

**カスタムのメディアの種類:** `baptiste-preview`
**発表:** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/) {% endif %} {% ifversion ghes < 3.3 %}

## Repositories API の新しい可視性パラメータ

[Repositories API](/rest/reference/repos) でリポジトリの可視性を設定および取得できます。

**カスタムのメディアの種類:** `nebula-preview`
**発表:** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/) {% endif %}
