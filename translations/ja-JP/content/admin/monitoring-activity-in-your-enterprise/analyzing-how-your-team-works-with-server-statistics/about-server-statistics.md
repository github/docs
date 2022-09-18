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
ms.openlocfilehash: c71cab38c096d5984a5136147b6dbc75e794c173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409324'
---
## {% data variables.product.prodname_server_statistics %} の利点について

{% data variables.product.prodname_server_statistics %} は、Organization のニーズを予測し、チームの活動状況を把握し、{% data variables.product.prodname_ghe_server %} から得られた価値を確認するのに役立ちます。

{% data variables.product.prodname_server_statistics %} を有効にすると、特定の機能のインスタンスでの使用量に関する集計データが経時的に収集されます。 最終日のデータのみを返す他の [Admin Stats API](/rest/reference/enterprise-admin#admin-stats) エンドポイントとは異なり、{% data variables.product.prodname_server_statistics %} では、機能を有効にした日から収集されたすべての {% data variables.product.prodname_server_statistics %} メトリックの履歴データが提供されます。 詳しくは、「[Enterprise で {% data variables.product.prodname_server_statistics %} を有効にする](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」をご覧ください。

{% data variables.product.prodname_server_statistics %} を有効にすると、より優れた {% data variables.product.prodname_dotcom %} を構築できます。 提供される集計データにより、お客様に対する {% data variables.product.prodname_dotcom %} の価値についての分析情報が得られます。 この情報を利用することで、{% data variables.product.company_short %} は製品に関していっそう適切な決定を情報に基づいて行うことができ、最終的にはお客様のメリットになります。

## データのセキュリティについて

GitHub はお客様のデータを尊重します。 前もってお客様から許可をいただかない限り、{% data variables.product.product_location %} からデータを送信することはありません。

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

{% data variables.product.prodname_server_statistics %} を有効にすると、{% data variables.product.product_location %} で実行される日次ジョブを通じてメトリックが収集されます。 集計メトリックは、{% data variables.product.prodname_ghe_cloud %} の Organization または Enterprise アカウントに格納され、{% data variables.product.product_location %} には格納されません。

次の集計メトリックは、毎日収集および送信され、その日の合計カウントを表します。
  - `active_hooks`
  - `admin_users`
  - `closed_issues`
  - `closed_milestones`
  - `collection_date`
  - `disabled_orgs`
  - `dormancy_threshold`
  - `fork_repos`
  - `ghes_version`
  - `github_connect_features_enabled`
  - `inactive_hooks`
  - `mergeable_pulls`
  - `merged_pulls`
  - `open_issues`
  - `open_milestones`
  - `org_repos`
  - `private_gists`
  - `public_gists`
  - `root_repos`
  - `schema_version`
  - `server_id`
  - `suspended_users`
  - `total_commit_comments`
  - `total_dormant_users`
  - `total_gist_comments`
  - `total_gists`
  - `total_hooks`
  - `total_issues`
  - `total_issue_comments`
  - `total_milestones`
  - `total_repos`
  - `total_orgs`
  - `total_pages`
  - `total_pull_request_comments`
  - `total_pulls`
  - `total_pushes`
  - `total_team_members`
  - `total_teams`
  - `total_users`
  - `total_wikis`
  - `unmergeable_pulls`

## {% data variables.product.prodname_server_statistics %} のペイロードの例

{% data variables.product.prodname_server_statistics %} API の応答ペイロードの例については、「[REST API を使用して {% data variables.product.prodname_server_statistics %} を要求する](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)」をご覧ください。

収集されるデータの一覧については、「[{% data variables.product.prodname_server_statistics %} で収集されるデータ](#server-statistics-data-collected)」をご覧ください。
