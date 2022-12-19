---
title: Server Statistics について
intro: '{% data variables.product.prodname_server_statistics %} を使って、{% data variables.product.prodname_ghe_server %} からの独自の集計データを分析し、{% data variables.product.company_short %} 製品の改善に役立てることができます。'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185186'
---
## {% data variables.product.prodname_server_statistics %} の利点について

{% data variables.product.prodname_server_statistics %} は、Organization のニーズを予測し、チームの活動状況を把握し、{% data variables.product.prodname_ghe_server %} から得られた価値を確認するのに役立ちます。

{% data variables.product.prodname_server_statistics %} を有効にすると、特定の機能のインスタンスでの使用量に関する集計データが経時的に収集されます。 最終日のデータのみを返す他の [Admin Stats API](/rest/reference/enterprise-admin#admin-stats) エンドポイントとは異なり、{% data variables.product.prodname_server_statistics %} では、機能を有効にした日から収集されたすべての {% data variables.product.prodname_server_statistics %} メトリックの履歴データが提供されます。 詳しくは、「[Enterprise で {% data variables.product.prodname_server_statistics %} を有効にする](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」をご覧ください。

{% data variables.product.prodname_server_statistics %} を有効にすると、より優れた {% data variables.product.prodname_dotcom %} を構築できます。 提供される集計データにより、お客様に対する {% data variables.product.prodname_dotcom %} の価値についての分析情報が得られます。 この情報を利用することで、{% data variables.product.company_short %} は製品に関していっそう適切な決定を情報に基づいて行うことができ、最終的にはお客様のメリットになります。

## データのセキュリティについて

GitHub はお客様のデータを尊重します。 前もってお客様から許可をいただかない限り、{% data variables.location.product_location %} からデータを送信することはありません。

GitHub は個人データを収集しません。 また、コード、issue、コメント、pull request の内容など、{% data variables.product.company_short %} のいかなるコンテンツも収集しません。

データにアクセスできるのは、{% data variables.product.prodname_ghe_cloud %} 上の接続された Enterprise アカウントまたは Organization の所有者だけです。

リポジトリ、issue、pull request、その他の機能については、特定の集計メトリックのみが収集されます。 収集される集計メトリックの一覧については、「[{% data variables.product.prodname_server_statistics %} で収集されるデータ](#server-statistics-data-collected)」をご覧ください。 

収集されるメトリックは、{% data variables.product.prodname_ghe_server %} の今後の機能リリースで更新され、それについては [{% data variables.product.prodname_ghe_server %} のリリース ノート](/admin/release-notes)で説明されます。 さらに、この記事もすべてのメトリックの更新に関して更新されます。

{% data variables.product.prodname_server_statistics %} のデータの格納およびセキュリティ保護の方法について詳しくは、「[GitHub のセキュリティ](https://github.com/security)」をご覧ください。

### データの保持と削除について

{% data variables.product.company_short %} は、お客様の {% data variables.product.prodname_ghe_server %} ライセンスがアクティブで、{% data variables.product.prodname_server_statistics %} 機能が有効になっている場合にのみ、{% data variables.product.prodname_server_statistics %} のデータを収集します。

お客様がデータの削除を望まれる場合は、GitHub サポート、お客様の {% data variables.product.prodname_dotcom %} アカウント担当者、または担当のカスタマー サクセス マネージャーにご連絡ください。  一般に、データの削除は、プライバシーに関する声明で指定されている期間に行われます。 詳しくは、{% data variables.product.prodname_dotcom_the_website %} のドキュメントの「[{% data variables.product.company_short %} のプライバシーについての声明](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data)」をご覧ください。

### データの移植性について

{% data variables.product.prodname_ghe_cloud %} の Organization 所有者または Enterprise 所有者は、CSV または JSON ファイルにデータをエクスポートすることで、または {% data variables.product.prodname_server_statistics %} REST API を使って、{% data variables.product.prodname_server_statistics %} のデータにアクセスできます。 詳しくは、「[REST API を使用して {% data variables.product.prodname_server_statistics %} を要求する](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)」または「[{% data variables.product.prodname_server_statistics %} をエクスポートする](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)」をご覧ください。

## データ収集の無効化について

{% data variables.product.prodname_server_statistics %} の機能はいつでも無効にできます。 詳しくは、「[Enterprise で {% data variables.product.prodname_server_statistics %} を有効にする](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」をご覧ください。

## {% data variables.product.prodname_server_statistics %} で収集されるデータ

{% data variables.product.prodname_server_statistics %} を有効にすると、{% data variables.location.product_location %} で実行される日次ジョブを通じてメトリックが収集されます。 集計メトリックは、{% data variables.product.prodname_ghe_cloud %} の組織またはエンタープライズ アカウントに格納され、{% data variables.location.product_location %} には格納されません。

次の集計メトリックは、毎日収集および送信され、その日の合計カウントを表します。

CSV 列 | Name | 説明 |
---------- | ---- | ----------- |
A   | `github_connect.features_enabled` | インスタンスに対して有効になっている {% data variables.product.prodname_github_connect %} 機能の配列 (「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)」を参照) |
B   | `host_name` | インスタンスのホスト名 |
C   | `dormant_users.dormancy_threshold` | ユーザーが休眠と見なされるまでに非アクティブである必要がある時間の長さ |
D   | `dormant_users.total_dormant_users` | 休眠ユーザー アカウントの数 |
E   | `ghes_version` | インスタンスが実行されている {% data variables.product.product_name %} のバージョン |
F   | `server_id` | インスタンスに対して生成された UUID
G   | `collection_date` | メトリックが収集された日付 |
H   | `schema_version` | このデータの格納に使用されるデータベース スキーマのバージョン |
I   | `ghe_stats.comments.total_commit_comments` | コミットに対するコメントの数 |
J   | `ghe_stats.comments.total_gist_comments` | gist に対するコメントの数 |
K   | `ghe_stats.comments.total_issue_comments` | イシューに対するコメントの数 | 
L   | `ghe_stats.comments.total_pull_request_comments` | pull request に対するコメントの数 |
M   | `ghe_stats.gists.total_gists` | gists の数 (シークレットとパブリックの両方) |
N   | `ghe_stats.gists.private_gists` | シークレット gist の数 |
O   | `ghe_stats.gists.public_gists` | パブリック gist の数 |
P   | `ghe_stats.hooks.total_hooks` | pre-receive フックの数 (アクティブと非アクティブの両方) |
Q   | `ghe_stats.hooks.active_hooks` | アクティブな pre-receive フックの数 |
R   | `ghe_stats.hooks.inactive_hooks` | 非アクティブな pre-receive フックの数 |
S   | `ghe_stats.issues.total_issues` | イシューの数 (オープンとクローズの両方) |
T   | `ghe_stats.issues.open_issues` | オープンのイシューの数 |
U   | `ghe_stats.issues.closed_issues` | クローズされたイシューの数 |
V   | `ghe_stats.milestones.total_milestones` | マイルストーンの数 (オープンとクローズの両方) |
W   | `ghe_stats.milestones.open_milestones` | オープンのマイルストーンの数 |
X   | `ghe_stats.milestones.closed_milestones` | クローズされたマイルストーンの数 |
Y   | `ghe_stats.orgs.total_orgs` | 組織の数 (有効と無効の両方) |
Z   | `ghe_stats.orgs.disabled_orgs` | 無効な組織の数 |
AA | `ghe_stats.orgs.total_teams` | チームの数 |
AB | `ghe_stats.orgs.total_team_members` | チーム メンバーの数 |
AC | `ghe_stats.pages.total_pages` | {% data variables.product.prodname_pages %} サイトの数 |
AD | `ghe_stats.pulls.total_pulls` | pull request の数 |
AE | `ghe_stats.pulls.merged_pulls` | マージされた pull request の数 |
AF | `ghe_stats.pulls.mergeable_pulls` | 現在マージ可能な pull request の数 |
AG | `ghe_stats.pulls.unmergeable_pulls` | 現在マージ不可能な pull request の数 |
AH | `ghe_stats.repos.total_repos` | リポジトリの数 (アップストリーム リポジトリとフォークの両方) |
AI | `ghe_stats.repos.root_repos` | アップストリーム リポジトリの数 |
AJ | `ghe_stats.repos.fork_repos` | フォークの数 |
AK | `ghe_stats.repos.org_repos` | 組織が所有しているリポジトリの数 |
AL | `ghe_stats.repos.total_pushes` | リポジトリへのプッシュの数 |
AM | `ghe_stats.repos.total_wikis` | wiki の数 |
AN | `ghe_stats.users.total_users` | ユーザー アカウントの数 |
AO | `ghe_stats.users.admin_users` | サイト管理者であるユーザー アカウントの数 |
AP | `ghe_stats.users.suspended_users` | 一時停止されているユーザー アカウントの数 |

## {% data variables.product.prodname_server_statistics %} データの例

{% data variables.product.prodname_server_statistics %} の CSV エクスポートに含まれる見出しの例を確認するには、[{% data variables.product.prodname_server_statistics %} CSV の例](/assets/server-statistics-csv-example.csv)をダウンロードしてください。

{% data variables.product.prodname_server_statistics %} API の応答ペイロードの例については、「[REST API を使用して {% data variables.product.prodname_server_statistics %} を要求する](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)」をご覧ください。
