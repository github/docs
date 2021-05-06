---
title: GitHub Advisory Database のセキュリティ脆弱性を参照する
intro: '{% data variables.product.prodname_advisory_database %} を使用すると、{% data variables.product.company_short %} のオープンソースプロジェクトに影響を与える脆弱性を参照または検索できます。'
shortTitle: Advisory Database を参照する
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

### セキュリティの脆弱性について

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.prodname_advisory_database %} の脆弱性のいずれかがリポジトリが依存するパッケージに影響することが検出された場合、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を送信します。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

### {% data variables.product.prodname_advisory_database %} について

{% data variables.product.prodname_advisory_database %} には、{% data variables.product.company_short %} の依存関係グラフによって追跡されるパッケージにマップされたセキュリティの脆弱性のキュレーションされたリストが含まれています。 {% data reusables.repositories.tracks-vulnerabilities %}

各セキュリティアドバイザリには、説明、重要度、影響するパッケージ、パッケージエコシステム、影響するバージョンとパッチを適用したバージョン、影響、およびリファレンス、回避策、クレジットなどのオプション情報を含む、脆弱性に関する情報が含まれています。 さらに、National Vulnerability Database リストのアドバイザリには、CVE レコードへのリンクが含まれており、脆弱性、その CVSS スコア、その定性的な重要度レベルの詳細を確認できます。 詳しい情報については、アメリカ国立標準技術研究所の「[National Vulnerability Database](https://nvd.nist.gov/)"」を参照してください。

重大度レベルは「[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)」で定義されている 4 つのレベルのいずれかです。
- Low
- Medium/Moderate
- High
- Critical

{% data variables.product.prodname_advisory_database %} は、上記の CVSS レベルを使用します。 {% data variables.product.company_short %} が CVE を取得した場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.1 を使用します。 CVE がインポートされた場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.0 と 3.1 の両方をサポートします。

{% data reusables.repositories.github-security-lab %}

### {% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

1. Https://github.com/advisories にアクセスします。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。 ![ドロップダウンフィルタ](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. アドバイザリをクリックして詳細を表示します。

{% note %}

データベースは、GraphQL API を使用してアクセスすることもできます。 詳しい情報については、「[`security_advisory` webhook イベント](/webhooks/event-payloads/#security_advisory)」を参照してください。

{% endnote %}

### {% data variables.product.prodname_advisory_database %} を検索する

データベースを検索し、修飾子を使用して検索を絞り込むことができます。 たとえば、特定の日付、特定のエコシステム、または特定のライブラリで作成されたアドバイザリを検索できます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                   | サンプル                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) は、この {% data variables.product.prodname_advisory_database %} ID でアドバイザリを表示します。 |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) は、この CVEID 番号でアドバイザリを表示します。                                                                |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) は、NPM パッケージに影響するアドバイザリのみを表示します。                                             |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) は、重大度レベルが高いアドバイザリのみを表示します。                                                  |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) は、lodash ライブラリに影響するアドバイザリのみを表示します。                                        |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) は、この CWE 番号のアドバイザリのみを表示します。                                                                            |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) は、「octocat」ユーザアカウントにクレジットされたアドバイザリのみを表示します。                                              |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) は、一番古いアドバイザリを最初にソートします。                                               |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) は、一番新しいアドバイザリを最初にソートします。                                            |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) は、最近で最も更新されていないものを最初にソートします。                                          |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) は、最も直近で更新されたものを最初にソートします。                                           |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) は、撤回されたアドバイザリのみを表示します。                                                        |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) は、この日に作成されたアドバイザリのみを表示します。                                        |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) は、この日に更新されたアドバイザリのみを表示します。                                        |

### 脆弱性のあるリポジトリを表示する

{% data variables.product.prodname_advisory_database %} の脆弱性については、どのリポジトリにその脆弱性に対する {% data variables.product.prodname_dependabot %} アラートがあるかを確認できます。 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. Https://github.com/advisories にアクセスします。
2. アドバイザリをクリックします。
3. アドバイザリページの上部にある [**Dependabot alerts**] をクリックします。 ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。 ![アラートをフィルタするための検索バーとドロップダウンメニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 脆弱性の詳細、および脆弱性のあるリポジトリを修正する方法に関するアドバイスについては、リポジトリ名をクリックしてください。

### 参考リンク

- MITREの[「脆弱性」の定義](https://cve.mitre.org/about/terminology.html#vulnerability)
