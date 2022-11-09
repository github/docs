---
title: GitHub Advisory Database でのセキュリティ アドバイザリの参照
intro: '{% data variables.product.prodname_advisory_database %} を参照して、{% data variables.product.company_short %} でホストされているオープンソース プロジェクトのセキュリティ リスクに関するアドバイザリを見つけることができます。'
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 19c37d2a1a1101f9984de13cd034bb0ee5e285a8
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114020'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## {% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

{% data variables.product.prodname_advisory_database %} の任意のアドバイザリにアクセスできます。

1. https://github.com/advisories に移動します。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。
  ![ドロップダウン フィルター](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **ヒント:** 左側のサイドバーを使用して、{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリを個別に調べることができます。

   {% endtip %}
3. アドバイザリをクリックして詳細を表示します。 既定では、セキュリティの脆弱性に関する {% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 {% ifversion GH-advisory-db-supports-malware %}マルウェアのアドバイザリを表示するには、検索バーで `type:malware` を使用します。{% endif %}


{% note %}

データベースは、GraphQL API を使用してアクセスすることもできます。 {% ifversion GH-advisory-db-supports-malware %}クエリの既定では、`type:malware` を指定しない限り、セキュリティの脆弱性に関する {% data variables.product.company_short %} でレビューされたアドバイザリが返されます。{% endif %}詳しくは、[`security_advisory` Webhook イベント](/webhooks/event-payloads/#security_advisory)に関する記事を参照してください。

{% endnote %}

## {% data variables.product.prodname_advisory_database %} のアドバイザリを編集する
{% data variables.product.prodname_advisory_database %} のアドバイザリに対する改善を提案することができます。 詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

## {% data variables.product.prodname_advisory_database %} を検索する

データベースを検索し、修飾子を使用して検索を絞り込むことができます。 たとえば、特定の日付、特定のエコシステム、または特定のライブラリで作成されたアドバイザリを検索できます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子  | 例 |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) を使用すると、セキュリティの脆弱性に関する {% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) を使用すると、マルウェアに関する {% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) を使用すると、レビューされていないアドバイザリが表示されます。 |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) を使用すると、この {% data variables.product.prodname_advisory_database %} ID のアドバイザリが表示されます。 |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) を使用すると、この CVE ID 番号のアドバイザリが表示されます。 |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) を使用すると、NPM パッケージに影響を与えるアドバイザリのみが表示されます。 |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) を使用すると、重要度レベルが高いアドバイザリのみが表示されます。 |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) を使用すると、lodash ライブラリに影響を与えるアドバイザリのみが表示されます。 |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) を使用すると、この CWE 番号のアドバイザリのみが表示されます。 |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) を使用すると、"octocat" ユーザー アカウントにクレジットされたアドバイザリのみが表示されます。 |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) を使用すると、最も古いアドバイザリから順に並べ替えられます。 |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) を使用すると、最も新しいアドバイザリから順に並べ替えられます。 |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) を使用すると、更新時期が最も古いものから順に並べ替えられます。 |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) を使用すると、更新時期が最も新しいものから順に並べ替えられます。 |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) を使用すると、取り消されたアドバイザリのみが表示されます。 |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) を使用すると、この日付に作成されたアドバイザリのみが表示されます。 |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) を使用すると、この日付に更新されたアドバイザリのみが表示されます。 |

## 脆弱性のあるリポジトリを表示する

{% data variables.product.prodname_advisory_database %} 内の {% data variables.product.company_short %} でレビューされたアドバイザリについては、そのセキュリティ脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}によって影響を受けるリポジトリを確認できます。 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. https://github.com/advisories に移動します。
2. アドバイザリをクリックします。
3. アドバイザリ ページの上部にある **[Dependabot アラート]** をクリックします。
   ![Dependabot アラート](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。
   ![アラートをフィルター処理するための検索バーとドロップダウン メニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. アドバイザリの詳細、および脆弱性のあるリポジトリを修正する方法に関するアドバイスについては、リポジトリ名をクリックしてください。

{% ifversion security-advisories-ghes-ghae %}
## {% data variables.location.product_location %} のローカル アドバイザリ データベースへのアクセス

サイト管理者が {% data variables.location.product_location %} に対して {% data variables.product.prodname_github_connect %} を有効にしている場合は、レビューされたアドバイザリをローカルで参照することもできます。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

特定のセキュリティの脆弱性が含まれており、それによって、脆弱な依存関係に関するアラートを受け取るかどうかを、ローカル アドバイザリ データベースを使用して確認できます。 脆弱なリポジトリを表示することもできます。 

1. `https://HOSTNAME/advisories` に移動します。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。
  ![ドロップダウン フィルター](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **注:** レビューされたアドバイザリのみが一覧表示されます。 レビューされていないアドバイザリは、{% data variables.product.prodname_dotcom_the_website %} の {% data variables.product.prodname_advisory_database %} で表示できます。 詳しくは、「[GitHub Advisory Database のアドバイザリにアクセスする](#accessing-an-advisory-in-the-github-advisory-database)」を参照してください。 

   {% endnote %}
3. アドバイザリをクリックして詳細を表示します。{% ifversion GH-advisory-db-supports-malware %}既定では、セキュリティの脆弱性に関する {% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 マルウェア アドバイザリを表示するには、検索バーで `type:malware` を使用します。{% endif %}

ローカル アドバイザリ データベースから直接、任意のアドバイザリの改善を提案することもできます。 詳細については、「[{% data variables.location.product_location %} からアドバイザリを編集する](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)」を参照してください。

### {% data variables.location.product_location %} の脆弱なリポジトリの表示

{% data reusables.repositories.enable-security-alerts %}

ローカル アドバイザリ データベースでは、各セキュリティ脆弱性{% ifversion GH-advisory-db-supports-malware %} またはマルウェア{% endif %}の影響を受けるリポジトリを確認できます。 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. `https://HOSTNAME/advisories` に移動します。
2. アドバイザリをクリックします。
3. アドバイザリ ページの上部にある **[Dependabot アラート]** をクリックします。
   ![Dependabot アラート](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。
   ![アラートをフィルター処理するための検索バーとドロップダウン メニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. アドバイザリの詳細、および脆弱性のあるリポジトリを修正する方法に関するアドバイスについては、リポジトリ名をクリックしてください。

{% endif %}
