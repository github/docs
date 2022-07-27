---
title: GitHub Advisory Databaseのセキュリティアドバイザリの閲覧
intro: '{% data variables.product.prodname_advisory_database %}を閲覧して、{% data variables.product.company_short %}でホストされているオープンソースプロジェクトのセキュリティリスクに対するアドバイザリを見つけることができます。'
shortTitle: Advisory Databaseの参照
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
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## {% data variables.product.prodname_advisory_database %} について

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, {% endif %}grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## セキュリティアドバイザリのタイプについて

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}.

通常、コード内の{% data reusables.repositories.a-vulnerability-is %}の脆弱性は、偶然に導入され、発見されるとすぐに修正されます。 依存関係の修正されたバージョンを使うよう、コードはできるかぎり早く更新しなければなりません。

{% ifversion GH-advisory-db-supports-malware %}

対照的に、悪意のあるソフトウェア、またはマルウェアは、意図的に望ましくない、もしくは有害な機能を実行するように設計されたものです。 マルウェアは、ハードウェア、ソフトウェア、機密データ、あるいはマルウェアを使うアプリケーションのユーザを標的にする可能性があります。 マルウェアはプロジェクトから取り除き、その依存関係の安全な代替物を見つけなければなりません。

{% endif %}

### {% data variables.product.company_short %}がレビューしたアドバイザリ

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support. 各アドバイザリの有効性は慎重にレビューされ、完全な説明が成されており、エコシステムとパッケージの両方の情報が含まれていることが保証されています。

一般的に、サポートされているエコシステムはソフトウェアプログラミング言語の関連するパッケージレジストリにちなんで名付けられています。 アドバイザリは、サポートされているレジストリから来たパッケージ内の脆弱性に対するものであれば、レビューが行われます。

- Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registry: https://hex.pm/){% endif %}
- Go (レジストリ: https://pkg.go.dev/)
- Maven (レジストリ: https://repo1.maven.org/maven2/org/)
- npm (レジストリ: https://www.npmjs.com/)
- NuGet (レジストリ: https://www.nuget.org/)
- pip (レジストリ: https://pypi.org/)
- RubyGems (レジストリ: https://rubygems.org/)
- Rust (レジストリ: https://crates.io/)

サポートすべき新しいエコシステムの提案がある場合は、議論のための[Issue](https://github.com/github/advisory-database/issues)をオープンしてください。

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} for a package you depend on. 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

### レビューされていないアドバイザリ

レビューされていないアドバイザリは、自動的にNational Vulnerability Databaseフィードから直接{% data variables.product.prodname_advisory_database %}へ展開されたセキュリティ脆弱性です。

この種のアドバイザリは妥当性あるいは完全性がチェックされていないので、レビューされていないアドバイザリに対して{% data variables.product.prodname_dependabot %}は{% data variables.product.prodname_dependabot_alerts %}を生成しません。

## セキュリティアドバイザリ内の情報について

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. さらに、National Vulnerability Database リストのアドバイザリには、CVE レコードへのリンクが含まれており、脆弱性、その CVSS スコア、その定性的な重要度レベルの詳細を確認できます。 詳しい情報については、アメリカ国立標準技術研究所の「[National Vulnerability Database](https://nvd.nist.gov/)"」を参照してください。

重大度レベルは「[Common Vulnerability Scoring System (CVSS), Section 5](https://www.first.org/cvss/specification-document)」で定義されている 4 つのレベルのいずれかです。
- Low
- Medium/Moderate
- High
- Critical

{% data variables.product.prodname_advisory_database %} は、上記の CVSS レベルを使用します。 {% data variables.product.company_short %} が CVE を取得した場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.1 を使用します。 CVE がインポートされた場合、{% data variables.product.prodname_advisory_database %} は CVSS バージョン 3.0 と 3.1 の両方をサポートします。

{% data reusables.repositories.github-security-lab %}

## {% data variables.product.prodname_advisory_database %} のアドバイザリにアクセスする

1. Https://github.com/advisories にアクセスします。
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。 ![ドロップダウンフィルタ](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **参考:** 左側のサイドバーを使って、{% data variables.product.company_short %}がレビューしたアドバイザリとレビューされていないアドバイザリを個別に調べることができます。

   {% endtip %}
3. Click an advisory to view details. デフォルトでは、セキュリティ脆弱性に対する{% data variables.product.company_short %}がレビューしたアドバイザリが表示されます。 {% ifversion GH-advisory-db-supports-malware %}To show malware advisories, use `type:malware` in the search bar.{% endif %}


{% note %}

データベースは、GraphQL API を使用してアクセスすることもできます。 {% ifversion GH-advisory-db-supports-malware %}By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`.{% endif %} For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## {% data variables.product.prodname_advisory_database %}中のアドバイザリの編集
{% data variables.product.prodname_advisory_database %}のアドバイザリには、改善を提案できます。 詳しい情報については「[{% data variables.product.prodname_advisory_database %}中のセキュリティアドバイザリの編集](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)」を参照してください。

## {% data variables.product.prodname_advisory_database %} を検索する

データベースを検索し、修飾子を使用して検索を絞り込むことができます。 たとえば、特定の日付、特定のエコシステム、または特定のライブラリで作成されたアドバイザリを検索できます。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子             | サンプル                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed` | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed)は、セキュリティ脆弱性に対する{% data variables.product.company_short %}がレビューしたアドバイザリを表示します。 |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. | | `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. | | `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. | | `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. | | `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. | | `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. | | `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. | | `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. | | `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. | | `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. | | `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. | | `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. | | `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. | | `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

## 脆弱性のあるリポジトリを表示する

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. Https://github.com/advisories にアクセスします。
2. アドバイザリをクリックします。
3. アドバイザリページの上部にある [**Dependabot alerts**] をクリックします。 ![Dependabotアラート](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。 ![アラートをフィルタするための検索バーとドロップダウンメニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. アドバイザリに関する詳細、そして脆弱性のあるリポジトリの修正方法に関するアドバイスについては、リポジトリ名をクリックしてください。

{% ifversion security-advisories-ghes-ghae %}
## Accessing the local advisory database on {% data variables.product.product_location %}

If your site administrator has enabled {% data variables.product.prodname_github_connect %} for {% data variables.product.product_location %}, you can also browse reviewed advisories locally. 詳しい情報については「[{% data variables.product.prodname_github_connect %}について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories.

1. Navigate to `https://HOSTNAME/advisories`.
2. 必要に応じて、リストをフィルタするには、ドロップダウンメニューを使用します。 ![ドロップダウンフィルタ](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% note %}

   **Note:** Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database)".

   {% endnote %}
3. Click an advisory to view details.{% ifversion GH-advisory-db-supports-malware %} By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.{% endif %}

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see "[Editing advisories from {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Viewing vulnerable repositories for {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In the local advisory database, you can see which repositories are affected by each security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. 脆弱性のあるリポジトリを確認するには、そのリポジトリの {% data variables.product.prodname_dependabot_alerts %} にアクセスできる必要があります。 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)」を参照してください。

1. Navigate to `https://HOSTNAME/advisories`.
2. アドバイザリをクリックします。
3. アドバイザリページの上部にある [**Dependabot alerts**] をクリックします。 ![Dependabotアラート](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. 必要に応じて、リストをフィルタするには、検索バーまたはドロップダウンメニューを使用します。 [Organization] ドロップダウンメニューを使用すると、オーナー（Organization またはユーザ）ごとに {% data variables.product.prodname_dependabot_alerts %} をフィルタできます。 ![アラートをフィルタするための検索バーとドロップダウンメニュー](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. アドバイザリに関する詳細、そして脆弱性のあるリポジトリの修正方法に関するアドバイスについては、リポジトリ名をクリックしてください。

{% endif %}

## 参考リンク

- MITREの[「脆弱性」の定義](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
