---
title: GitHub Connect について
intro: '{% data variables.product.prodname_github_connect %} では、{% data variables.product.prodname_dotcom_the_website %} の機能に依存する追加の機能とワークフローにアクセスできるようにすることで、{% data variables.product.product_name %} を強化します。'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160817'
---
## {% data variables.product.prodname_github_connect %} について

{% data variables.location.product_location %} が {% data variables.product.prodname_dotcom_the_website %} の機能を限定的に利用できるようにすることで、{% data variables.product.prodname_github_connect %} により {% data variables.product.product_name %} が強化されます。 {% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.product.prodname_dotcom_the_website %} に依存する追加の機能やワークフローを有効にすることができます。これには、{% data variables.product.prodname_advisory_database %} で追跡されるセキュリティの脆弱性に対する {% data variables.product.prodname_dependabot_alerts %} などが含まれます。

{% data variables.product.prodname_github_connect %} では、パブリック インターネットに対して {% data variables.location.product_location %} が開きません。 {% data variables.product.prodname_dotcom_the_website %} ユーザーには、エンタープライズのプライベート データは公開されません。 代わりに、{% data variables.product.prodname_github_connect %} は、有効にした個々の機能に必要な限られたデータのみを送信します。 ライセンス同期を有効にしない限り、{% data variables.product.prodname_github_connect %} によって個人データは送信されません。 {% data variables.product.prodname_github_connect %} によって送信されるデータの詳細については、「[{% data variables.product.prodname_github_connect %} のデータ転送](#data-transmission-for-github-connect)」を参照してください。

{% data variables.product.prodname_github_connect %} を有効化しても、{% data variables.product.prodname_dotcom_the_website %} のユーザーは {% data variables.product.product_name %} を変更できません。

{% data variables.product.prodname_github_connect %} を有効にするには、{% data variables.location.product_location %} と、{% data variables.product.prodname_ghe_cloud %} を使用する {% data variables.product.prodname_dotcom_the_website %} 上の Organization または Enterprise アカウントの間の接続を構成します。 {% data reusables.github-connect.connection-port-protocol %} 詳しくは、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。

{% data variables.product.prodname_github_connect %} を有効にすると、{% ifversion ghes %}自動ユーザー ライセンス同期や {% endif %}{% data variables.product.prodname_dependabot_alerts %} などの機能を有効にできるようになります。 使用可能なすべての機能の詳細については、「[{% data variables.product.prodname_github_connect %} 機能](#github-connect-features)」を参照してください。

## {% data variables.product.prodname_github_connect %} 機能

{% data variables.location.product_location %} と {% data variables.product.prodname_ghe_cloud %} の間の接続を構成した後、Enterprise に対して {% data variables.product.prodname_github_connect %} の個々の機能を有効にすることができます。

機能 | 説明 | 詳細 | ------- | ----------- | ---------------- |{% ifversion ghes %} 自動ユーザー ライセンス同期 | ユーザー ライセンスを {% data variables.location.product_location %} から {% data variables.product.prodname_ghe_cloud %} に自動的に同期することで、{% data variables.product.prodname_enterprise %} デプロイ全体のライセンス使用量を管理します。 | 「[Enterprise に対する自動ユーザー ライセンス同期の有効化](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)」{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | ユーザーが、コード依存関係の脆弱性を見つけて修正できるようにします。 | 「[エンタープライズに対して {% data variables.product.prodname_dependabot %} を有効にする](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」{% endif %} {% data variables.product.prodname_dotcom_the_website %} アクション | ユーザーがワークフロー ファイルで {% data variables.product.prodname_dotcom_the_website %} からのアクションを使用できるようにします。 | 「[{% data variables.product.prodname_github_connect %} を使った {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスの有効化](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)」{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | GitHub Enterprise Server からの独自の集計データを分析して、GitHub 製品の改善に役立てます。 | 「[Enterprise に対する {% data variables.product.prodname_server_statistics %} の有効化](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)」{% endif %} Unified Search | {% data variables.location.product_location %} から検索するときに、ユーザーが検索結果に {% data variables.product.prodname_dotcom_the_website %} のリポジトリを含めることができるようになります。 | 「[Enterprise の {% data variables.enterprise.prodname_unified_search %} を有効にする](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)」統合コントリビューション | ユーザーが {% data variables.location.product_location %} に対する作業の匿名化されたコントリビューション数を、{% data variables.product.prodname_dotcom_the_website %} のコントリビューション グラフに含めることを許可します。 | 「[Enterprise に対する {% data variables.enterprise.prodname_unified_contributions %} の有効化](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)」

## {% data variables.product.prodname_github_connect %} のデータ転送 

{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.product.prodname_ghe_cloud %} 上のレコードに、接続に関する情報が格納されます。 {% data variables.product.prodname_github_connect %} の個々の機能を有効にすると、追加のデータが送信されます。

{% note %}

**注意:** {% data variables.product.product_name %} から {% data variables.product.prodname_dotcom_the_website %} に {% data variables.product.prodname_github_connect %} によって、リポジトリ、issue、または pull request が送信されることはありません。

{% endnote %}

### {% data variables.product.prodname_github_connect %} を有効にすると送信されるデータ

{% data variables.product.prodname_github_connect %} または特定の {% data variables.product.prodname_github_connect %} 機能を有効にすると、{% data variables.product.prodname_ghe_cloud %} のレコードに、接続に関する次の情報が格納されます。
{% ifversion ghes %}
- {% data variables.product.prodname_ghe_server %} ライセンスの公開鍵の部分
- {% data variables.product.prodname_ghe_server %} ライセンスのハッシュ
- {% data variables.product.prodname_ghe_server %} ライセンスの顧客名
- {% data variables.location.product_location_enterprise %} のバージョン{% endif %}
- {% data variables.location.product_location %} のホスト名
- {% data variables.location.product_location %} に接続している {% data variables.product.prodname_ghe_cloud %} 上の Organization または Enterprise アカウント
- {% data variables.product.prodname_ghe_cloud %} への要求の発行に {% data variables.location.product_location %} で使用される認証トークン
- トランスポート層セキュリティ (TLS) が有効で、{% data variables.location.product_location %}{% ifversion ghes %} で構成されている場合
- {% data variables.location.product_location %} で有効になっている {% data variables.product.prodname_github_connect %} の機能と、有効化された日時{% endif %}
- エンタープライズの休眠しきい値
- エンタープライズの休止ユーザーの数
- 一時停止中のユーザーを含まないライセンス消費シートの数

{% data variables.product.prodname_github_connect %} は、{% data variables.location.product_location %} と {% data variables.product.prodname_ghe_cloud %} の間の上記の接続データを、{% data variables.product.prodname_github_connect %} が有効になった日とおおよその時刻から毎週同期します。

### {% data variables.product.prodname_github_connect %} の個々の機能によって送信されるデータ

{% data variables.product.prodname_github_connect %} の個々の機能を有効にすると、追加のデータが送信されます。

機能 | データ | データの流れ | データの使用場所 | ------- | ---- | --------- | ------ |{% ifversion ghes %} 自動ユーザー ライセンス同期 | 各 {% data variables.product.product_name %} ユーザーのユーザー ID とメール アドレス | {% data variables.product.product_name %} から {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | 脆弱性アラート | {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | 依存関係と各依存関係のリポジトリのメタデータ<br><br>依存関係が {% data variables.product.prodname_dotcom_the_website %} のプライベート リポジトリに格納されている場合、{% data variables.product.prodname_dependabot %} が構成され、そのリポジトリへのアクセスが承認されている場合のみ、データは送信されます。 | {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.product_name %} へ | {% data variables.product.product_name %} {% endif %} {% data variables.product.prodname_dotcom_the_website %} アクション | アクションの名前、アクション ({% data variables.product.prodname_marketplace %} からの YAML ファイル) | {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.product_name %} へ<br><br>{% data variables.product.product_name %} から {% data variables.product.prodname_dotcom_the_website %} へ | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | {% data variables.product.prodname_ghe_server %} の使用状況に関するメトリックの集計。 メトリックの完全なリストについては、「[{% data variables.product.prodname_server_statistics %} について](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)」を参照してください。 | {% data variables.product.product_name %} から {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} Unified Search | 検索語句、検索結果 | {% data variables.product.prodname_dotcom_the_website %} から {% data variables.product.product_name %}<br><br>{% data variables.product.product_name %} から {% data variables.product.prodname_dotcom_the_website %} へ | {% data variables.product.product_name %} | 統合コントリビューション | コントリビューション数 | {% data variables.product.product_name %} から {% data variables.product.prodname_dotcom_the_website %} へ | {% data variables.product.prodname_dotcom_the_website %} |

## 参考資料

- GraphQL API ドキュメントの「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」
