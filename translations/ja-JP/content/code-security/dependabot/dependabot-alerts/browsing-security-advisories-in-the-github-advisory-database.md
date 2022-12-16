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
ms.openlocfilehash: 816d610c40a7551190a510a37a88dbe3de978dac
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: "147783152"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## {% data variables.product.prodname_advisory_database %} について

{% data variables.product.prodname_advisory_database %} には、既知のセキュリティの脆弱性 {% ifversion GH-advisory-db-supports-malware %}とマルウェアの一覧が含まれており、{% endif %}これらは、{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリの 2 つのカテゴリにグループ化されます。

{% data reusables.repositories.tracks-vulnerabilities %}

## セキュリティ アドバイザリの種類について

{% data reusables.advisory-database.beta-malware-advisories %}

{% data variables.product.prodname_advisory_database %} の各アドバイザリは、オープンソース プロジェクト{% ifversion GH-advisory-db-supports-malware %}の脆弱性または悪意のあるオープンソース ソフトウェア{% endif %}を対象としています。 

{% data reusables.repositories.a-vulnerability-is %} コードの脆弱性は通常、誤って導入され、検出されるとすぐに修正されます。 依存関係が使用可能になったらすぐに、修正された依存関係を使用するようにコードを更新する必要があります。

{% ifversion GH-advisory-db-supports-malware %}

これに対し、悪意のあるソフトウェア (マルウェア) は、望ましくない、または有害な機能を実行するように意図的に設計されたコードです。 マルウェアは、ハードウェア、ソフトウェア、機密データ、またはマルウェアを使用するアプリケーションのユーザーを対象とすることがあります。 プロジェクトからマルウェアを削除し、依存関係に対するより安全な代替手段を見つける必要があります。

{% endif %}

### {% data variables.product.company_short %} でレビューされたアドバイザリについて

{% data variables.product.company_short %} でレビューされたアドバイザリは、Microsoft がサポートするエコシステム内のパッケージにマップされたセキュリティの脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}です。 各アドバイザリの有効性を慎重にレビューし、詳しい説明があり、エコシステム情報とパッケージ情報の両方が含まれていることを確認します。

一般に、サポートされているエコシステムは、ソフトウェア プログラミング言語の関連するパッケージ レジストリにちなんで名前が付けられます。 サポートされているレジストリから取得されたパッケージの脆弱性を対象としている場合は、アドバイザリをレビューします。

- Composer (レジストリ: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (レジストリ: https://hex.pm/){% endif %}
- Go (レジストリ: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (レジストリ: https://repo.maven.apache.org/maven2)
- npm (レジストリ: https://www.npmjs.com/)
- NuGet (レジストリ: https://www.nuget.org/)
- pip (レジストリ: https://pypi.org/)
- RubyGems (レジストリ: https://rubygems.org/)
- Rust (レジストリ: https://crates.io/)

サポートする必要がある新しいエコシステムの提案がある場合は、ディスカッションのために [issue](https://github.com/github/advisory-database/issues) を開いてください。

レポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にすると、{% data variables.product.company_short %} でレビューされた新しいアドバイザリによって、依存するパッケージの脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}が報告された場合、自動的に通知されます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

### レビューされていないアドバイザリについて

レビューされていないアドバイザリは、National Vulnerability Database フィードから直接 {% data variables.product.prodname_advisory_database %} に自動的に公開されるセキュリティの脆弱性です。 

この種類のアドバイザリは、有効性または完成度について確認されないため、{% data variables.product.prodname_dependabot %} では、レビューされていないアドバイザリの {% data variables.product.prodname_dependabot_alerts %} は作成されません。

## セキュリティ アドバイザリの情報について

各セキュリティ アドバイザリには、脆弱性{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}に関する情報が含まれています。このような情報としては、説明、重要度、影響を受けるパッケージ、パッケージ エコシステム、影響を受けるバージョンとパッチを適用したバージョン、影響、オプションの情報 (リファレンス、回避策、クレジットなど) などがあります。 さらに、National Vulnerability Database リストのアドバイザリには、CVE レコードへのリンクが含まれており、脆弱性、その CVSS スコア、その定性的な重要度レベルの詳細を確認できます。 詳細については、アメリカ国立標準技術研究所の [National Vulnerability Database](https://nvd.nist.gov/)を参照してください。

重要度レベルは、"[共通脆弱性評価システム (CVSS) セクション 5](https://www.first.org/cvss/specification-document)" で定義されている 4 つの可能なレベルのいずれかです。
- 低
- Medium/Moderate
- 高
- Critical

{% data variables.product.prodname_advisory_database %} は、上記の CVSS レベルを使用します。 {% data variables.product.company_short %} が CVE を取得した場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.1 を使用します。 CVE がインポートされた場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.0 と 3.1 の両方をサポートします。

{% data reusables.repositories.github-security-lab %}

## {% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

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
## {% data variables.product.product_location %} のローカル アドバイザリ データベースへのアクセス

サイト管理者が {% data variables.product.product_location %} に対して {% data variables.product.prodname_github_connect %} を有効にしている場合は、レビューされたアドバイザリをローカルで参照することもできます。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

特定のセキュリティの脆弱性が含まれており、それによって、脆弱な依存関係に関するアラートを受け取るかどうかを、ローカル アドバイザリ データベースを使用して確認できます。 脆弱なリポジトリを表示することもできます。 

1. `https://HOSTNAME/advisories` に移動します。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。
  ![ドロップダウン フィルター](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **注:** レビューされたアドバイザリのみが一覧表示されます。 レビューされていないアドバイザリは、{% data variables.product.prodname_dotcom_the_website %} の {% data variables.product.prodname_advisory_database %} で表示できます。 詳しくは、「[GitHub Advisory Database のアドバイザリにアクセスする](#accessing-an-advisory-in-the-github-advisory-database)」を参照してください。 

   {% endnote %}
3. アドバイザリをクリックして詳細を表示します。{% ifversion GH-advisory-db-supports-malware %}既定では、セキュリティの脆弱性に関する {% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 マルウェア アドバイザリを表示するには、検索バーで `type:malware` を使用します。{% endif %}

ローカル アドバイザリ データベースから直接、任意のアドバイザリの改善を提案することもできます。 詳しくは、「[{% data variables.product.product_location %}からアドバイザリを編集する](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)」を参照してください。

### {% data variables.product.product_location %} の脆弱なリポジトリの表示

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

## 参考資料

- MITRE の ["脆弱性" の定義](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
