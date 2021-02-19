---
title: GitHub Advisory Database のセキュリティ脆弱性を参照する
intro: '{% data variables.product.prodname_advisory_database %} を使用すると、{% data variables.product.company_short %} のオープンソースプロジェクトに影響を与える脆弱性を参照または検索できます。'
shortTitle: Browsing the Advisory Database
versions:
  free-pro-team: '*'
---

### セキュリティの脆弱性について

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.product_name %} will send you {% data variables.product.prodname_dependabot_alerts %} if we detect that any of the vulnerabilities from the {% data variables.product.prodname_advisory_database %} affect the packages that your repository depends on. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

### {% data variables.product.prodname_advisory_database %} について

{% data variables.product.prodname_advisory_database %} には、{% data variables.product.company_short %} の依存関係グラフによって追跡されるパッケージにマップされたセキュリティの脆弱性のキュレーションされたリストが含まれています。 {% data reusables.repositories.tracks-vulnerabilities %}

各セキュリティアドバイザリには、説明、重要度、影響するパッケージ、パッケージエコシステム、影響するバージョンとパッチを適用したバージョン、影響、およびリファレンス、回避策、クレジットなどのオプション情報を含む、脆弱性に関する情報が含まれています。 さらに、National Vulnerability Database リストのアドバイザリには、CVE レコードへのリンクが含まれており、脆弱性、その CVSS スコア、その定性的な重要度レベルの詳細を確認できます。 詳しい情報については、アメリカ国立標準技術研究所の「[National Vulnerability Database](https://nvd.nist.gov/)"」を参照してください。

重要度のレベルは [Common Vulnerability Scoring System (CVSS), Section 2.1.2](https://www.first.org/cvss/specification-document) で定義されている 4 つのレベルのいずれかです。
- Low
- Moderate
- High
- Critical

{% data variables.product.prodname_advisory_database %} は、CVSS バージョン 3.0 標準と上記の CVSS レベルを使用します。

{% data reusables.repositories.github-security-lab %}

### {% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

1. Https://github.com/advisories にアクセスします。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。 ![ドロップダウンフィルタ](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. アドバイザリをクリックして詳細を表示します。

{% note %}

データベースは、GraphQL API を使用してアクセスすることもできます。 詳しい情報については、「[`security_advisory` webhook イベント](/webhooks/event-payloads/#security_advisory)」を参照してください。

{% endnote %}

### {% data variables.product.prodname_advisory_database %} を検索する

You can search the database, and use qualifiers to narrow your search. For example, you can search for advisories created on a certain date, in a specific ecosystem, or in a particular library.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子                   | サンプル                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number.                                                          |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) は、NPM パッケージに影響するアドバイザリのみを表示します。                                                           |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) は、重大度レベルが高いアドバイザリのみを表示します。                                                                |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) は、lodash ライブラリに影響するアドバイザリのみを表示します。                                                      |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number.                                                                      |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account.                                      |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) は、一番古いアドバイザリを最初にソートします。                                                             |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) は、一番新しいアドバイザリを最初にソートします。                                                          |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) は、最近で最も更新されていないものを最初にソートします。                                                        |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) は、最も直近で更新されたものを最初にソートします。                                                         |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) は、撤回されたアドバイザリのみを表示します。                                                                      |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) は、この日に作成されたアドバイザリのみを表示します。                                                      |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) は、この日に更新されたアドバイザリのみを表示します。                                                      |

### Viewing your vulnerable repositories

For any vulnerability in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories have a {% data variables.product.prodname_dependabot %} alert for that vulnerability. To see a vulnerable repository, you must have access to {% data variables.product.prodname_dependabot_alerts %} for that repository. 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. Https://github.com/advisories にアクセスします。
2. Click an advisory.
3. At the top of the advisory page, click **Dependabot alerts**. ![Dependabot alerts](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Optionally, to filter the list, use the search bar or the drop-down menus. The "Organization" drop-down menu allows you to filter the {% data variables.product.prodname_dependabot_alerts %} per owner (organization or user). ![Search bar and drop-down menus to filter alerts](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. For more details about the vulnerability, and for advice on how to fix the vulnerable repository, click the repository name.

### 参考リンク

- MITREの[「脆弱性」の定義](https://cve.mitre.org/about/terminology.html#vulnerability)
