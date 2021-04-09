---
title: 依存関係グラフについて
intro: '依存関係グラフ、それがサポートするエコシステム、およびリポジトリが依存するパッケージの決定方法についての詳細。'
versions:
  enterprise-server: '<=2.22'
topics:
  - repositories
---

### 依存関係グラフの利用

The dependency graph is available for every{% if currentVersion == "free-pro-team@latest" %} public{% endif %} repository that defines dependencies in a supported package ecosystem using a supported file format.{% if currentVersion == "free-pro-team@latest" %} Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.repositories.enable-security-alerts %}

### 依存関係グラフについて

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows{% if currentVersion == "free-pro-team@latest" %}:

- 依存関係、エコシステム、それが依存しているパッケージ
- Dependents, the repositories and packages that depend on it{% else %} dependencies, that is, the ecosystems and packages it depends on. {% data variables.product.prodname_ghe_server %} does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% if currentVersion == "free-pro-team@latest" %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %} For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

{% if currentVersion == "free-pro-team@latest" %}
When you create a pull request containing changes to dependencies that targets the default branch,
{% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. 詳しい情報については「[Pull Request中の依存関係の変更のレビュー](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。
{% endif %}

### 含まれる依存関係

依存関係グラフには、サポートされているエコシステムについてマニフェストおよびロックファイル、または同等のもので詳細に定義されているリポジトリの依存関係がすべて含まれています。 これは以下のものが含まれます。

- マニフェストまたはロックファイルで明示的に定義されている、直接依存関係
- 直接依存関係の間接依存関係。推移的な依存関係、または下位の依存関係とも言う。

The dependency graph identifies indirect dependencies{% if currentVersion == "free-pro-team@latest" %} either explicitly from a lock file or by checking the dependencies of your direct dependencies. 最も信頼性の高いグラフを得るには、ロックファイル (または同等のもの) を使用してください。直接および間接の依存関係のうち現在どのバージョンを使用しているかが正確に定義されているからです。 If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
### Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

### 依存関係グラフの使用

依存関係グラフを使用する目的は、次のとおりです。

- Explore the repositories your code depends on{% if currentVersion == "free-pro-team@latest" %}, and those that depend on it{% endif %}. 詳しい情報については、「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。 {% if currentVersion == "free-pro-team@latest" %}
- Organization のリポジトリで使用されている依存関係のサマリーを 1 つのダッシュボードで確認すること。 詳細は「[Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)」を参照してください。{% endif %}
- リポジトリの脆弱な依存関係を表示・更新すること。 For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."{% if currentVersion == "free-pro-team@latest" %}
- See information about vulnerable dependencies in pull requests. For more information, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."{% endif %}

### 依存関係グラフの有効化

{% if currentVersion == "free-pro-team@latest" %}To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. 依存関係グラフは、パブリックリポジトリに対しては常に自動的に生成され、プライベートリポジトリに対しては有効化を選択することができます。 For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}If the dependency graph is not available in your system, your site administrator can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} If the dependency graph is not available in your system, your site administrator can enable the dependency graph and security alerts. 詳しい情報については、「[{% data variables.product.prodname_ghe_server %}の脆弱性のある依存関係に関するセキュリティアラートの有効化](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)」を参照してください。

{% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 Once enabled, the graph is automatically updated with every push to the repository{% if currentVersion == "free-pro-team@latest" %} and every push to other repositories in the graph{% endif %}.

### サポートされているパッケージエコシステム

推奨されるフォーマットでは、直接および間接の依存関係すべてに使用されるバージョンを明示的に定義しています。 これらのフォーマットを使用したほうが、依存関係グラフは正確になります。 It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% if currentVersion == "free-pro-team@latest" %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for vulnerable dependencies.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}The ecosystems listed below are supported for the dependency graph, {% data variables.product.prodname_dependabot_alerts %}, and {% data variables.product.prodname_dependabot_security_updates %}.{% endif %}
|
{% if currentVersion ver_gt "enterprise-server@2.21" %}The ecosystems listed below are supported for the dependency graph and {% data variables.product.prodname_dependabot_alerts %}.{% endif %}
| パッケージマネージャー  | 言語                     | 推奨されるフォーマット                                        | サポートされているすべてのフォーマット                                                  |
| ------------ | ---------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Composer     | PHP                    | `composer.lock`                                    | `composer.json`, `composer.lock`                                     |
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
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- [Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% endif %}
