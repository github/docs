---
title: サイトアドミンのダッシュボード
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 5e845824a5216e43f1e4e8f7b73f08963ce1d71b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763709'
---
ダッシュボードにアクセスするには、任意のページの右上隅にある {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
![サイト管理者設定にアクセスするための宇宙船のアイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## 検索

ユーザーとリポジトリの検索、および[監査ログ](#audit-log)のクエリを実行するには、サイト管理者ダッシュボードのこのセクションを参照してください。

{% else %}

## ライセンス情報と検索

現在の {% data variables.product.prodname_enterprise %} のライセンスの確認、ユーザーとリポジトリの検索、および[監査ログ](#audit-log)のクエリを実行するには、サイト管理者ダッシュボードのこのセクションを参照してください。

{% endif %} {% ifversion ghes %}
## {% data variables.enterprise.management_console %}

ここで、ドメインや認証、SSL などの仮想アプライアンスの設定を管理するための {% data variables.enterprise.management_console %}を起動することができます。
{% endif %}
## 探索

GitHub の[トレンド ページ][]のデータは、リポジトリと開発者の両方において、日単位、週単位、月単位の期間で計算されます。 **[探索]** セクションで、このデータが最後にいつキャッシュされたのかの確認や、新しいトレンドの計算ジョブをキューに入れることができます。

  [トレンド ページ]: https://github.com/blog/1585-explore-what-is-trending-on-github

## 監査ログ

{% data variables.product.product_name %} では、クエリで確認できる、監査されたアクションの実行ログが保持されます。

デフォルトでは、Audit log は、監査されたアクション全てを新しい順で表示します。 このリストをフィルター処理するには、「**エンタープライズの監査ログの検索**」で説明されているように、 **[クエリ]** テキスト ボックスにキーと値のペアを入力し、[[検索]](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) をクリックします。

一般的な監査ログの詳細については、「[エンタープライズの監査ログについて](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)」を参照してください。 監査されたアクションの完全なリストについては、「[エンタープライズの監査ログ イベント](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)」を参照してください。

## Reports

{% data variables.product.product_location %} にある、ユーザー、組織、リポジトリの情報が必要な場合、一般的には、[GitHub API](/rest) を使って、JSON データをフェッチします。 残念ながら、API は、必要なデータを提供しない可能性があり、使用するのには専門知識が必要です。 サイト管理者ダッシュボードには代替手段として **[レポート]** セクションが設けられ、ユーザー、組織、リポジトリに必要と思われるほぼすべての情報を含んだ CSV レポートを簡単にダウンロードできます。

具体的には、次の情報を含む CSV 報告をダウンロードできます。

- 全ユーザ
- すべてのアクティブなユーザー
- すべての[休眠ユーザー](/admin/user-management/managing-dormant-users)
- 停止されている全ユーザ
- 全ての Organization
- 全ての リポジトリ

サイトアドミンのアカウントを用いて標準の HTTP 認証を使用すれば、これらのレポートにプログラムでアクセスすることもできます。 `site_admin` スコープで個人用アクセス トークンを使用する必要があります。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。

たとえば、cURL を使用して "all users" レポートをダウンロードする方法は次のとおりです:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

プログラムで他のレポートにアクセスするには、`all_users` を `active_users`、`dormant_users`、`suspended_users`、`all_organizations`、または `all_repositories` に置き換えます。

{% note %}

**注:** キャッシュされたレポートがない場合、最初の `curl` 要求では 202 HTTP 応答が返され、レポートはバックグラウンドで生成されます。 もう一度リクエストを送れば、その報告をダウンロードすることができます。 パスワードを使用するか、パスワードの代わりに、`site_admin` スコープと併せて OAuth トークンを使用することができます。

{% endnote %}

### ユーザ報告

Key               | 説明
-----------------:| ------------------------------------------------------------
`created_at`      | ユーザアカウントの作成時間（ISO 8601 のタイムスタンプ）
`id`              | ユーザまたはOrganization のアカウント ID
`login`           | アカウントのログイン名
`email`           | アカウントのプライマリメールアドレス
`role`            | アカウントがアドミンか一般ユーザか
`suspended?`      | アカウントが停止されているか
`last_logged_ip`  | 最後にアカウントにログインしたときの IP アドレス
`repos`           | アカウントが所有しているリポジトリの数
`ssh_keys`        | アカウントに登録されているSSHキーの数
`org_memberships` | アカウントが所属している Organization の数
`dormant?`        | アカウントが休眠であるかどうか
`last_active`     | アカウントが最後にアクティブだったとき（ISO 8601 のタイムスタンプ）
`raw_login`       | （JSON フォーマットでの）未処理のログイン情報
`2fa_enabled?`    | ユーザが二段階認証を有効にしているかどうか

### Organization の報告

Key            | 説明
--------------:| ------------------------------------
`id`           | 組織 ID
`created_at`   | Organization の作成時間
`login`        | Organization のログイン名
`email`        | Organization のプライマリメールアドレス
`owners`       | Organizationのオーナーの数
`members`      | Organization のメンバーの数
`teams`        | Organization のチームの数
`repos`        | Organization のリポジトリの数
`2fa_required?`| Organization が二段階認証を有効にしているかどうか

### リポジトリ の報告

Key             | 説明
---------------:| ------------------------------------------------------------
`created_at`    | リポジトリの作成時間
`owner_id`      | リポジトリのコードオーナーの ID
`owner_type`    | リポジトリの所有者がユーザか Organization か
`owner_name`    | リポジトリの所有者の名前
`id`            | リポジトリの ID
`name`          | リポジトリ名です
`visibility`    | リポジトリが公開かプライベートか
`readable_size` | 人間が読める形式のリポジトリのサイズ
`raw_size`      | 数字でのリポジトリのサイズ
`collaborators` | リポジトリのコラボレータの数
`fork?`         | リポジトリがフォークであるかどうか
`deleted?`      | リポジトリが削除されているかどうか

{% ifversion ghes %}
## インデックス作成

GitHub の検索機能には、Elasticsearch が搭載されています。 サイトアドミンのダッシュボードのこのセクションには、Elasticsearch クラスターの現在の状態が表示され、検索とインデックス作成の動作を制御するためにツールがいくつか用意されています。

コード検索の詳細については、「[{% data variables.product.prodname_dotcom %} での情報の検索](/search-github)」を参照してください。 Elasticsearch の詳細については、[Elasticsearch の Web サイト](https://elastic.co)をご覧ください。

{% note %}

**注**: 通常の使用では、サイト管理者は新しいインデックスを作成したり、修復ジョブをスケジュールしたりする必要はありません。 トラブルシューティングやその他のサポート目的で、{% data variables.contact.github_support %} から修復ジョブの実行を指示される場合があります。

{% endnote %}

### インデックスの管理

{% data variables.product.product_name %} では、検索インデックスの状態をインスタンス上のデータと自動的かつ定期的に照合して調整します。

- データベース内の問題、プル要求、リポジトリ、およびユーザー
- ディスク上の Git リポジトリ (ソース コード)

ご利用のインスタンスでは修復ジョブを使用してデータを調整し、次のイベントが発生した場合にバックグラウンドで修復ジョブをスケジュールします。

- 新規検索インデックスが作成される。
- 欠損データを埋め戻ししなければいけない場合。
- 古い検索データを更新しなければいけない場合。

新しいインデックスを作成することも、リスト内の既存のインデックスをクリックしてインデックスを管理することもできます。 インデックスに対して次の操作を実行できます。

- インデックスを検索可能にする。
- インデックスを書き込み可能にする。
- インデックスを更新する。
- インデックスを削除する
- インデックスの修復状態をリセットする。
- 新規インデックス修理ジョブを開始する。
- インデックスの修理ジョブを有効または無効にする。

プログレス バーには、背景 worker にまたがる修理ジョブの現在の状態が表示されます。 このバーは、データベースの中の最高レコード ID と修理オフセットでのパーセント差を示します。 修復ジョブが完了したら、プログレス バーに表示される値は無視できます。 プログレス バーには、修復オフセットとデータベース内の最大レコード ID の差が示されます。その値は、たとえリポジトリが実際にインデックス付けされていても、{% data variables.product.product_location %} にリポジトリが追加されるにつれて減少します。

I/O パフォーマンスに与える影響を最小限にするため、および、オペレーションがタイムアウトする可能性を低く抑えるために、混雑していない時間帯に修理ジョブを実行してください。 ジョブによって検索インデックスをデータベースおよび Git リポジトリ データと照合して調整する場合、使用される CPU は 1 つです。 `top` のようなユーティリティを使用して、システムの負荷平均と CPU 使用率を監視します。 リソース消費の大幅な増加が示されていない場合は、ピーク時間帯にインデックス修復ジョブを実行しても問題ありません。

修理ジョブでは、並列化のために "修理オフセット" が使用されます。 これは照合されているレコードのデータベーステーブルへのオフセットです。 このオフセットによって、複数の背景ジョブの作業を同期化できます。

### Code Search

これによって、ソースコードに対する検索とインデックスの作業を有効または無効にすることができます。

{% endif %}
## 予約済みログイン

特定の単語は、{% data variables.product.product_location %} の内部使用のために予約されています。つまり、これらの単語をユーザー名として使用することはできません。

たとえば、次の単語は予約されています。

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

完全なリストまたは予約語について確認するには、サイト管理者ダッシュボードの [予約済みログイン] に移動します。

{% ifversion ghas-committers-calculator %}
## {% data variables.product.prodname_advanced_security %} コミッター

{% data variables.product.prodname_GH_advanced_security %} のシートを現在使用しているアクティブなコミッターの数を確認できます。また、他の組織やリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合に使用される追加のシート数を計算できます。

[現在のアクティブなコミッター数] では、{% data variables.product.prodname_GH_advanced_security %} が有効になっているリポジトリのアクティブなコミッターの数を確認できます。 これは、現在使用されているライセンス シートの数です。

[インスタンス全体の最大コミッター数] では、エンタープライズ内のすべてのリポジトリのアクティブなコミッターの数を確認できます。 これは、エンタープライズ内のすべてのリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合に使用されるシートの数です。

[追加の高度なコミッターの計算] では、特定の組織とリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合に使用される追加のシートの数を計算できます。 [組織とリポジトリ] で、1 行に 1 つの組織またはリポジトリを含む組織とリポジトリのリストを入力または貼り付けます。 

```
example-org
octo-org/octo-repo
```

その結果、それらの組織とリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合に使用される追加のシートの数が得られます。

{% data variables.product.prodname_advanced_security %} の課金について詳しくは、「[{% data variables.product.prodname_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照してください。
{% endif %}

## 全ユーザ

組織、ユーザー、ポリシー、設定を管理するには、サイト管理者ダッシュボードのこのセクションを参照してください。

## リポジトリ

これは {% data variables.product.product_location %} 上のリポジトリのリストです。 リポジトリ名をクリックしてリポジトリを管理するための機能にアクセスできます。

- [リポジトリへのプッシュの強制をブロックする](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [{% data variables.large_files.product_name_long %} を構成する](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [リポジトリのアーカイブへの保管と削除](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## すべてのユーザー

ここでは、{% data variables.product.product_location %} 上のすべてのユーザーの確認と、[SSH キー監査を開始](/enterprise/admin/guides/user-management/auditing-ssh-keys)することができます。

## サイトアドミン

ここでは、{% data variables.product.product_location %} 上のすべての管理者の確認と、[SSH キー監査を開始](/enterprise/admin/guides/user-management/auditing-ssh-keys)することができます。

## 休眠ユーザ
{% ifversion ghes %}ここでは、{% data variables.product.product_location %} 上のすべての非アクティブなユーザーを確認でき、[一時停止させる](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)ことができます。 ユーザー アカウントは、次の場合において、非アクティブ ("休眠") と見なされます。{% endif %} {% ifversion ghae %} ここでは、{% data variables.product.product_location %} 上のすべての非アクティブなユーザーを確認でき、一時停止させることができます。 ユーザー アカウントは、次の場合において、非アクティブ ("休眠") と見なされます。{% endif %}

- {% data variables.product.product_location %} で設定されている休眠しきい値よりも長く存在している。
- その期間内にどのアクティビティも生成していない。
- サイト管理人ではない

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} 詳細については、「[休眠ユーザーの管理](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)」を参照してください。

## 停止されたユーザ

ここでは、{% data variables.product.product_location %} 上の一時停止されたすべてのユーザーの確認と、[SSH キー監査を開始](/enterprise/admin/guides/user-management/auditing-ssh-keys)することができます。
