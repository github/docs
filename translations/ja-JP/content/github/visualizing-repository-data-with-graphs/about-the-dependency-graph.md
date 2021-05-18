---
title: 依存関係グラフについて
intro: 依存関係グラフ、それがサポートするエコシステム、およびリポジトリが依存するパッケージの決定方法についての詳細。
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/about-the-dependency-graph for the latest version of this article -->

### 依存関係グラフの利用

依存関係グラフは、サポートされているファイル形式を使用して、サポートされているパッケージエコシステムの依存関係を定義するすべてのリポジトリで利用できます。

{% data reusables.repositories.enable-security-alerts %}

### 依存関係グラフについて

依存関係グラフは、リポジトリに保存されているマニフェストファイルおよびロックファイルのサマリーです。 リポジトリごとに、依存関係、つまり、それが依存しているエコシステムとパッケージが表示されます。 {% data variables.product.prodname_ghe_server %} は、リポジトリに依存している依存関係、リポジトリ、およびパッケージに関する情報を計算しません。

サポートされているマニフェストまたはロックファイルを変更する、またはデフォルトブランチに追加するコミットを {% data variables.product.product_name %} にプッシュすると、依存関係グラフが自動的に更新されます。 サポートされているエコシステムとマニフェストファイルについては、「[サポートされているパッケージエコシステム](#supported-package-ecosystems)」を参照してください。

### 含まれる依存関係

依存関係グラフには、サポートされているエコシステムについてマニフェストおよびロックファイル、または同等のもので詳細に定義されているリポジトリの依存関係がすべて含まれています。 これは以下のものが含まれます。

- マニフェストまたはロックファイルで明示的に定義されている、直接依存関係
- 直接依存関係の間接依存関係。推移的な依存関係、または下位の依存関係とも言う。

依存関係グラフは、間接的な依存関係を識別します。

### 依存関係グラフの使用

依存関係グラフを使用する目的は、次のとおりです。

- コードが依存しているリポジトリを調べます。 詳しい情報については、「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。
- リポジトリの脆弱な依存関係を表示・更新すること。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。

### 依存関係グラフの有効化

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}If the dependency graph is not available in your system, your site administrator can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} システムで依存関係グラフを使用できない場合は、サイト管理者が依存関係グラフとセキュリティアラートを有効にできます。 詳しい情報については、「[{% data variables.product.prodname_ghe_server %}の脆弱性のある依存関係に関するセキュリティアラートの有効化](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。

{% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 有効にすると、リポジトリにプッシュするたびにグラフが自動的に更新されます。

### サポートされているパッケージエコシステム
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported packages. -->

推奨されるフォーマットでは、直接および間接の依存関係すべてに使用されるバージョンを明示的に定義しています。 これらのフォーマットを使用したほうが、依存関係グラフは正確になります。 現在のビルドのセットアップも反映され、直接と間接のどちらの依存関係でも依存関係グラフで脆弱性をレポートできます。

以下にリストされているエコシステムは、依存関係グラフと{% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}セキュリティアラート{% endif %}でサポートされています。

| パッケージマネージャー  | 言語                     | 推奨されるフォーマット                                        | サポートされているすべてのフォーマット                                                  |
| ------------ | ---------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Composer     | PHP                    | `composer.lock`                                    | `composer.json`、`composer.lock`                                      |
| `dotnet` CLI | .NET 言語 (C#、C++、F#、VB) | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
| Maven        | Java、Scala             | `pom.xml`                                          | `pom.xml`                                                            |
| npm          | JavaScript             | `package-lock.json`                                | `package-lock.json`、`package.json`                                   |
| Python PIP   | Python                 | `requirements.txt`、`pipfile.lock`                  | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`*           |
| RubyGems     | Ruby                   | `Gemfile.lock`                                     | `Gemfile.lock`、`Gemfile`、`*.gemspec`                                 |
| Yarn         | JavaScript             | `yarn.lock`                                        | `package.json`、`yarn.lock`                                           |

{% note %}

**メモ:** `setup.py` ファイルで Python の依存関係をリストする場合、プロジェクトの依存関係すべてを解析してリストすることはできない場合があります。

{% endnote %}

### 参考リンク

- Wikipedia の「[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)」
- [リポジトリの依存関係を見る](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
