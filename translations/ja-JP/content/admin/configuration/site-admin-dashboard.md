---
title: サイトアドミンのダッシュボード
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard/
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

ダッシュボードへアクセスするには、ページ右上の隅にある {% octicon "rocket" aria-label="The rocket ship" %}をクリックしてください。 ![サイトアドミン設定にアクセスするための宇宙船のアイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### 検索

ここで、ドメインや認証、SSL などの仮想アプライアンスの設定を管理するための {{ site.data.variables.enterprise.management_console }}を起動することができます。

{% else %}

### ライセンスの情報と検索

現在の {% data variables.product.prodname_enterprise %} のライセンスを確認する、ユーザとリポジトリを検索する、そして [Audit log](#audit-log) を照会するには、サイトアドミンのダッシュボードのこのセクションを参照してください。

{% endif %}

### {% data variables.enterprise.management_console %}

ここで、ドメインや認証、SSL などの仮想アプライアンスの設定を管理するための {% data variables.enterprise.management_console %}を起動することができます。

### Explorer

GitHub の[ 流行ページ][] のためのデータは、リポジトリとデベロッパーの両方において、日ごと、週ごと、月ごとの期間で計算されます。 **Explore** のセクションで、このデータが最後にいつキャッシュされたのかの確認や、新規流行計算ジョブをキューに挿入することができます。

### Audit log

{% data variables.product.prodname_enterprise %}は、クエリで確認できる、監査されたアクションのログを保持しています。

デフォルトでは、Audit log は、監査されたアクション全てを新しい順で表示します。 「[Audit log を検索する](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log)」で説明されているように、[**Query**] テキストボックスにキーと値のペアを入力して [**Search**] をクリックすることで、このリストをフィルタリングできます。

一般的な監査ログの詳細については、「[監査ログ](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)」を参照してください。 監査済みのアクションの全リストについては、「[監査済みのアクション](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)」を参照してください。

### 報告

{% data variables.product.product_location %}にある、ユーザやOrganization、リポジトリについての情報が必要な場合、一般的には、[GitHub API](/rest) を使って、JSON のデータをフェッチします。 残念ながら、API は、必要なデータを提供しない可能性があり、使用するのには専門知識が必要です。 サイトアドミンのダッシュボードには代替手段として [**Reports**] セクションがあり、ユーザー、Organization、およびリポジトリに必要と思われるほぼすべての情報を掲載した CSV レポートを簡単にダウンロードできます。

具体的には、次の情報を含む CSV 報告をダウンロードできます。

- 全ユーザ
- 過去一ケ月の間、アクティブだった全ユーザ
- 過去一ケ月、アクティブでなかった全ユーザ
- 停止されている全ユーザ
- 全ての Organization
- 全ての リポジトリ

サイトアドミンのアカウントを用いて標準の HTTP 認証を使用すれば、これらのレポートにプログラムでアクセスすることもできます。 `site_admin` スコープで個人アクセストークンを使用する必要があります。 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

たとえば、cURL を使用して "all users" レポートをダウンロードする方法は次のとおりです:

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

他の報告にプログラムでアクセスするには、 `all_users` を `active_users`や、 `dormant_users`、`suspended_users`、`all_organizations`、`all_repositories` に置き換えてください。

{% note %}

**注：** キャッシュされた報告がない場合、最初の `curl` リクエストは、 202の HTTP レスポンスを返して、報告は背景で生成されます。 もう一度リクエストを送れば、その報告をダウンロードすることができます。 パスワードの代わりに、`site_admin` スコープでのパスワードまたはOAuthトークンを使うことができます。

{% endnote %}

#### ユーザ報告

|                キー | 説明                                     |
| -----------------:| -------------------------------------- |
|      `created_at` | ユーザアカウントの作成時間（ISO 8601 のタイムスタンプ）       |
|              `id` | ユーザまたはOrganization のアカウント ID           |
|           `login` | アカウントのログイン名                            |
|           `email` | アカウントのプライマリメールアドレス                     |
|             `ロール` | アカウントがアドミンか一般ユーザか                      |
|      `suspended?` | アカウントが停止されているか                         |
|  `last_logged_ip` | 最後にアカウントにログインしたときの IP アドレス             |
|           `repos` | アカウントが所有しているリポジトリの数                    |
|        `ssh_keys` | アカウントに登録されているSSHキーの数                   |
| `org_memberships` | アカウントが所属している Organization の数           |
|        `dormant?` | アカウントが休眠であるかどうか                        |
|     `last_active` | アカウントが最後にアクティブだったとき（ISO 8601 のタイムスタンプ） |
|       `raw_login` | （JSON フォーマットでの）未処理のログイン情報              |
|    `2fa_enabled?` | ユーザが二段階認証を有効にしているかどうか                  |

#### Organization の報告

|              キー | 説明                              |
| ---------------:| ------------------------------- |
|            `id` | Organization の ID               |
|    `created_at` | Organization の作成時間              |
|         `login` | Organization のログイン名             |
|         `email` | Organization のプライマリメールアドレス      |
|        `owners` | Organizationのオーナーの数             |
|       `members` | Organization のメンバーの数            |
|         `teams` | Organization のチームの数             |
|         `repos` | Organization のリポジトリの数           |
| `2fa_required?` | Organization が二段階認証を有効にしているかどうか |

#### リポジトリ の報告

|              キー | 説明                            |
| ---------------:| ----------------------------- |
|    `created_at` | リポジトリの作成時間                    |
|      `owner_id` | リポジトリのコードオーナーの ID             |
|    `owner_type` | リポジトリの所有者がユーザか Organization か |
|    `owner_name` | リポジトリの所有者の名前                  |
|            `id` | リポジトリの ID                     |
|          `name` | リポジトリの名前                      |
|    `visibility` | リポジトリが公開かプライベートか              |
| `readable_size` | 人間が読める形式のリポジトリのサイズ            |
|      `raw_size` | 数字でのリポジトリのサイズ                 |
| `collaborators` | リポジトリのコラボレータの数                |
|         `fork?` | リポジトリがフォークであるかどうか             |
|      `deleted?` | リポジトリが削除されているかどうか             |

### インデックス化

GitHub の[コード検索][]フィーチャは、[Elasticsearch][] に駆動されています。 サイトアドミンのダッシュボードのこのセクションには、ElasticSearch クラスターの現在のステータスが表示され、検索とインデックス作成の動作を制御するためのいくつかのツールが用意されています。 このツールは、次の3つのカテゴリーに分類されています。

#### コード検索

これによって、ソースコードに対する検索とインデックスの作業を有効または無効にすることができます。

#### コード検索インデックスの修復

これはコード検索インデックスがどのように修復されるかを制御します。 次のことができます:

- インデックスの修理ジョブを有効または無効にする
- 新規インデックス修理ジョブを開始する
- インデックス修理状態を全てリセットする

{% data variables.product.prodname_enterprise %}は、修理ジョブを使って、検索インデックスの状態をデータベースで保存されているデータ（Issueやプルリクエスト、リポジトリ、ユーザ）と Git リポジトリに保存されているデータ（ソースコード）を照合することができます。 これは次の場合に使用されます。

- 新規検索インデックスが作成される
- 欠損データを埋め戻ししなければいけない場合
- 古い検索データを更新しなければいけない場合

すなわち、修理ジョブは、必要に応じて開始され、背景で作動しています。サイトアドミンが修理ジョブの開始時間を決めるわけではありません。

さらに、修理ジョブは、並列化のために"修理オフセット"を使っています。 これは照合されているレコードのデータベーステーブルへのオフセットです。 このオフセットによって、複数の背景ジョブの作業を同期化できます。

プログレスバーは、全ての背景ワーカープロセスによる、現在の修理ステータスを表示します。 それは、データベースの中の最高レコード ID と修理オフセットでのパーセント差です。 修復ジョブが完了した後にプログレスバーに表示される値については心配しないでください。それは修復オフセットとデータベース内の最大レコード ID の差を示すものであるため、たとえリポジトリが実際にインデックス付けされていても、{% data variables.product.product_location %} にリポジトリが追加されるにつれて値は減少します。

いつでも新規コード検索インデックスの修理ジョブを開始できます。 1つの CPU を使って、検索インデックスをデータベース及びGitのリポジトリデータと照合します。 I/O パフォーマンスに与える影響を最小限にするため、および、オペレーションがタイムアウトする可能性を減少するために混雑していない時間帯に修理ジョブを実行してみてください。 `top` のようなユーティリティで、システム負荷と CPU 使用率の平均を監視しましょう。大差がない場合は、混雑している時間帯にもインデックスの修理ジョブを実行しても安全なはずです。

#### Issue インデックスの修復

これは [Issues][] インデックスがどのように修復されるかを制御します。 次のことができます:

- インデックスの修理ジョブを有効または無効にする
- 新規インデックス修理ジョブを開始する
- インデックス修理状態を全てリセットする

{% if currentVersion ver_gt "enterprise-server@2.21" %}

### 全ユーザ

ここでは、{{ site.data.variables.product.product_location_enterprise }} で一時停止されているすべてのユーザーを確認することができ、そして [SSH キー監査を開始する](/enterprise/{{ page.version }}/admin/guides/user-management/auditing-ssh-keys)ことができます。

{% endif %}

### リポジトリ

これは {% data variables.product.product_location %} 上のリポジトリのリストです。 リポジトリ名をクリックしてリポジトリを管理するための機能にアクセスできます。

- [リポジトリへのフォースプッシュをブロックする](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [{% data variables.large_files.product_name_long %} を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [リポジトリのアーカイブへの保管と削除](/enterprise/{{ currentVersion }}/admin/guides/user-management/archiving-and-unarchiving-repositories/)

### 全ユーザ

ここでは、{% data variables.product.product_location %} 上のすべてのユーザーを確認することができ、そして [SSH キー監査を開始する](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys)ことができます。

### サイトアドミン

ここでは、{% data variables.product.product_location %} 上のすべての管理者を確認することができ、そして [SSH キー監査を開始する](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys)ことができます。

### 休眠ユーザ

ここでは、{% data variables.product.product_location %} 上のすべての非アクティブなユーザーを確認して、[一時停止](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)することができます。 ユーザアカウントは、次の場合において、非アクティブ（休眠）とみなされます。

- {% data variables.product.product_location %} 用に設定されている休眠しきい値よりも長く存在している。
- その期間内にどのアクティビティも生成していない。
- サイト管理人ではない

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} 詳細は「[休眠ユーザを管理する](/enterprise/{{ currentVersion }}/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold)」を参照してください。

### 停止されたユーザ

ここでは、{% data variables.product.product_location %} で一時停止されているすべてのユーザーを確認することができ、そして [SSH キー監査を開始する](/enterprise/{{ currentVersion }}/admin/guides/user-management/auditing-ssh-keys)ことができます。

  [ 流行ページ]: https://github.com/blog/1585-explore-what-is-trending-on-github

  [コード検索]: https://github.com/blog/1381-a-whole-new-code-search
  [Elasticsearch]: http://www.elasticsearch.org/

  [Issues]: https://github.com/blog/831-issues-2-0-the-next-generation
