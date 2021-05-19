---
title: 移行について
intro: '移行とは、「ソース」場所 ({% data variables.product.prodname_dotcom_the_website %} Organization か {% data variables.product.prodname_ghe_server %} インスタンスのいずれか) から「ターゲット」となる {% data variables.product.prodname_ghe_server %} インスタンスにデータを移譲するプロセスです。 移行は、プラットフォームを変更したり、インスタンスのハードウェアをアップグレードしたりする場合にデータを転送するのに利用できます。'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Migration
---

### 移行の種類

行える移行は3種類あります。

- {% data variables.product.prodname_ghe_server %} インスタンスから別の {% data variables.product.prodname_ghe_server %} インスタンスへの移行。 インスタンス上の任意のユーザあるいはOrganizationが所有する任意の数のリポジトリを移行できます。 移行を行う前に、双方のインスタンスにサイト管理者としてアクセスできなければなりません。
- {% data variables.product.prodname_dotcom_the_website %} Organization から {% data variables.product.prodname_ghe_server %} インスタンスへの移行。 Organizationが所有する任意の数のリポジトリを移行できます。 移行を実行するためには、{% data variables.product.prodname_dotcom_the_website %} Organization への[管理アクセス](/enterprise/user/articles/permission-levels-for-an-organization/)と、ターゲットインスタンスへのサイト管理者としてのアクセスが必要です。
- *トライアル実行*は、データを[ステージングインスタンス](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)にインポートする移行です。 これは、{% data variables.product.product_location %} に対して移行を行ったときに何が起こる*ことになる*のかを確認するのに役立ちます。 **本番インスタンスへデータをインポートする前に、ステージングインスタンスで試行することを強くおすすめします。**

### データの移行

移行においては、すべての事項についてリポジトリが中心になります。 リポジトリに関係するほとんどのデータは移行できます。 たとえば Organization 内のリポジトリは、リポジトリ*および*その Organization、またそのリポジトリに関連付けられているユーザ、Team、Issue、プルリクエストのすべてを移行します。

以下の表の項目はレポジトリと共に移行できます。 このデータの移行リストに記載されていない項目はどれも移行できません。

{% data reusables.enterprise_migrations.fork-persistence %}

| 移行されたリポジトリに関連するデータ            | 注釈                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ユーザ                           | ユーザの**@メンション**は、ターゲットにマッチするよう書き換えられます。                                                                        |
| Organization                  | Organizationの名前と詳細は移行されます。                                                                                    |
| リポジトリ                         | Git ツリー、blob、コミット、および行へのリンクは、ターゲットにマッチするよう書き換えられます。 移行者がリダイレクトできるリポジトリの上限は 3 つです。                             |
| Wiki                          | すべてのWikiのデータは移行されます。                                                                                          |
| Team                          | チームの**@メンション**はターゲットにマッチするよう書き換えられます。                                                                         |
| マイルストーン                       | タイムスタンプは保持されます。                                                                                               |
| プロジェクトボード                     | リポジトリやリポジトリを所有するOrganizationに関連するプロジェクトボードは移行されます。                                                            |
| Issue                         | Issueへの参照とタイムスタンプは保持されます。                                                                                     |
| Issueのコメント                    | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。                                                                         |
| プルリクエスト                       | プルリクエストへの相互参照はターゲットにマッチするよう書き換えられます。 タイムスタンプは保持されます。                                                          |
| プルリクエストのレビュー                  | プルリクエストのレビューと関連データは移行されます。                                                                                    |
| プルリクエストのレビューのコメント             | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。 タイムスタンプは保持されます。                                                         |
| コミットのコメント                     | コメントへの相互参照は、ターゲットインスタンスに合わせて書き換えられます。 タイムスタンプは保持されます。                                                         |
| リリース                          | すべてのリリースデータは移行されます。                                                                                           |
| プルリクエストあるいはIssueに対して行われたアクション | ユーザの割り当て、タイトルの変更、ラベルの変更など、プルリクエストあるいはIssueに対するすべての変更は、それぞれのアクションのタイムスタンプと共に保持されます。                            |
| 添付ファイル                        | [Issue およびプルリクエストの添付ファイル](/articles/file-attachments-on-issues-and-pull-requests)は移行されます。 移行に関するこの機能は無効化できます。 |
| webhook                       | アクティブなwebhookのみが移行されます。                                                                                       |
| リポジトリのデプロイキー                  | リポジトリのデプロイキーは移行されます。                                                                                          |
| 保護されたブランチ                     | 保護されたブランチの設定と関連データは移行されます。                                                                                    |
