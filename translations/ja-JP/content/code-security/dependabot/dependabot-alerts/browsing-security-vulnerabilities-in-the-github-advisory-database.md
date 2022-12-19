---
title: GitHub Advisory Database のセキュリティ脆弱性を参照する
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116046"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>セキュリティの脆弱性について

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>{% data variables.product.prodname_advisory_database %} について

{% data variables.product.prodname_advisory_database %} には、既知のセキュリティの脆弱性の一覧が含まれており、これらの脆弱性は、{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリの 2 つのカテゴリにグループ化されます。

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>{% data variables.product.company_short %} でレビューされたアドバイザリについて

{% data variables.product.company_short %} でレビューされたアドバイザリは、{% data variables.product.company_short %} の依存関係グラフによって追跡されるパッケージにマップされたセキュリティの脆弱性です。

有効性について各アドバイザリを注意深くレビューしています。 {% data variables.product.company_short %} でレビューされた各アドバイザリには、完全な説明があり、エコシステムとパッケージの両方の情報が含まれています。

レポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にすると、{% data variables.product.company_short %} でレビューされた新しいアドバイザリが、依存するパッケージに影響を与える場合、自動的に通知されます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

### <a name="about-unreviewed-advisories"></a>レビューされていないアドバイザリについて

レビューされていないアドバイザリは、National Vulnerability Database フィードから直接 {% data variables.product.prodname_advisory_database %} に自動的に公開されるセキュリティの脆弱性です。 

この種類のアドバイザリは、有効性または完成度について確認されないため、{% data variables.product.prodname_dependabot %} では、レビューされていないアドバイザリの {% data variables.product.prodname_dependabot_alerts %} は作成されません。

## <a name="about-security-advisories"></a>セキュリティ アドバイザリについて

各セキュリティ アドバイザリには、脆弱性に関する情報が含まれています。このような情報としては、説明、重要度、影響を受けるパッケージ、パッケージ エコシステム、影響を受けるバージョンとパッチを適用したバージョン、影響、オプションの情報 (リファレンス、回避策、クレジットなど) などがあります。 さらに、National Vulnerability Database リストのアドバイザリには、CVE レコードへのリンクが含まれており、脆弱性、その CVSS スコア、その定性的な重要度レベルの詳細を確認できます。 詳細については、アメリカ国立標準技術研究所の [National Vulnerability Database](https://nvd.nist.gov/)を参照してください。

重要度レベルは、"[共通脆弱性評価システム (CVSS) セクション 5](https://www.first.org/cvss/specification-document)" で定義されている 4 つの可能なレベルのいずれかです。
- 低
- Medium/Moderate
- 高
- Critical

{% data variables.product.prodname_advisory_database %} は、上記の CVSS レベルを使用します。 {% data variables.product.company_short %} が CVE を取得した場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.1 を使用します。 CVE がインポートされた場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.0 と 3.1 の両方をサポートします。

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>{% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

1. https://github.com/advisories に移動します。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。
  ![ドロップダウン フィルター](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **ヒント:** 左側のサイドバーを使用して、{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリを個別に調べることができます。

   {% endtip %}
3. アドバイザリをクリックして詳細を表示します。

{% note %}

データベースは、GraphQL API を使用してアクセスすることもできます。 詳細については、「[`security_advisory` webhook イベント](/webhooks/event-payloads/#security_advisory)」を参照してください。

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>{% data variables.product.prodname_advisory_database %} のアドバイザリを編集する
{% data variables.product.prodname_advisory_database %} のアドバイザリに対する改善を提案することができます。 詳細については、「[{% data variables.product.prodname_advisory_database %} のセキュリティ アドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>{% data variables.product.prodname_advisory_database %} を検索する

データベースを検索し、修飾子を使用して検索を絞り込むことができます。 たとえば、特定の日付、特定のエコシステム、または特定のライブラリで作成されたアドバイザリを検索できます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子  | 例 |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) を使用すると、{% data variables.product.company_short %} でレビューされたアドバイザリが表示されます。 |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) を使用すると、レビューされていないアドバイザリが表示されます。 |
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

## <a name="viewing-your-vulnerable-repositories"></a>脆弱性のあるリポジトリを表示する

{% data variables.product.prodname_advisory_database %} 内の {% data variables.product.company_short %} でレビューされたアドバイザリについては、そのセキュリティ脆弱性によって影響を受けるリポジトリを確認できます。 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. https://github.com/advisories に移動します。
2. アドバイザリをクリックします。
3. アドバイザリ ページの上部にある **[Dependabot アラート]** をクリックします。
   ![Dependabot アラート](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。
   ![アラートをフィルター処理するための検索バーとドロップダウン メニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 脆弱性の詳細、および脆弱性のあるリポジトリを修正する方法に関するアドバイスについては、リポジトリ名をクリックしてください。

## <a name="further-reading"></a>参考資料

- MITRE の ["脆弱性" の定義](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
