---
title: GitHub Advisory Database について
intro: '{% data variables.product.prodname_advisory_database %} には、既知のセキュリティの脆弱性 {% ifversion GH-advisory-db-supports-malware %}とマルウェアの一覧が含まれており、{% endif %}これらは、{% data variables.product.company_short %} でレビューされたアドバイザリとレビューされていないアドバイザリの 2 つのカテゴリにグループ化されます。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159078'
---
## {% data variables.product.prodname_advisory_database %} について

{% data reusables.repositories.tracks-vulnerabilities %}

セキュリティ アドバイザリは、オープン ソース脆弱性 (OSV) 形式の JSON ファイルとして公開されます。 OSV 形式について詳しくは、[オープン ソース脆弱性の形式](https://ossf.github.io/osv-schema/)に関する説明を参照してください。

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
- Go (レジストリ: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (レジストリ: https://repo.maven.apache.org/maven2)
- npm (レジストリ: https://www.npmjs.com/)
- NuGet (レジストリ: https://www.nuget.org/)
- pip (レジストリ: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (レジストリ: https://pub.dev/packages/registry){% endif %}
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

## 参考資料

- 「[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」
- MITRE の ["脆弱性" の定義](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
