---
title: 依存関係グラフについて
intro: 依存関係グラフを使って、プロジェクトの依存関係をすべて特定できます。 依存関係グラフは、幅広く一般的なパッケージエコシステムをサポートします。
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: 依存関係グラフ
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## 依存関係グラフの利用

{% ifversion fpt or ghec %}The dependency graph is available for every public repository that defines dependencies in a supported package ecosystem using a supported file format. Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## 依存関係グラフについて

依存関係グラフは、リポジトリに保存されているマニフェストファイルおよびロックファイルのサマリーです。 それぞれのリポジトリにおいて、依存関係グラフは以下を表示します。{% ifversion fpt or ghec %}

- リポジトリが依存している依存関係、エコシステム、パッケージ
- リポジトリに依存する対象、リポジトリ、パッケージ{% else %}依存関係、すなわちリポジトリが依存するエコシステムとパッケージ。 {% data variables.product.product_name %}は、リポジトリに依存する対象、リポジトリ、パッケージに関する情報を計算しません。{% endif %}

{% data variables.product.product_name %}に、デフォルトブランチでサポートされているマニフェストもしくはロックファイルを変更もしくは追加するコミットをプッシュすると、依存関係グラフは自動的に更新されます。{% ifversion fpt or ghec %}加えて、誰かが依存関係のいずれかのリポジトリに変更をプッシュすると、グラフは更新されます。{% endif %}サポートされているエコシステムとマニフェストファイルに関する情報については以下の「[サポートされているパッケージエコシステム](#supported-package-ecosystems)」を参照してください。

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
デフォルトブランチをターゲットとする、依存関係の変更を含むPull Requestを作成すると、{% data variables.product.prodname_dotcom %}は依存関係グラフを使ってそのPull Requestに依存関係のレビューを追加します。 それらは、依存関係が脆弱性を含んでいるか、もしそうならその脆弱性が修復されているバージョンを示しています。 For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

## 含まれる依存関係

依存関係グラフには、サポートされているエコシステムについてマニフェストおよびロックファイル、または同等のもので詳細に定義されているリポジトリの依存関係がすべて含まれています。 これは以下のものが含まれます。

- マニフェストまたはロックファイルで明示的に定義されている、直接依存関係
- 直接依存関係の間接依存関係。推移的な依存関係、または下位の依存関係とも言う。

依存関係グラフは、{% ifversion fpt or ghec %}ロックファイルから明示的に、または直接的な依存対象の依存関係をチェックして、間接的な依存関係を識別します。 最も信頼性の高いグラフを得るには、ロックファイル (または同等のもの) を使用してください。直接および間接の依存関係のうち現在どのバージョンを使用しているかが正確に定義されているからです。 ロックファイルを使用する場合、リポジトリのすべてのコントリビューターが同じバージョンを使用していることも確認してください。そのほうが、コードのテストとデバッグが容易になります。{% else %}ロックファイルから間接的な依存関係を識別します。{% endif %}

{% ifversion fpt or ghec %}
## 含まれる依存物

パブリックリポジトリでは、そのリポジトリに依存しているパブリックリポジトリ、もしくはそのリポジトリが公開しているパッケージのみが報告されます。 この情報は、プライベートリポジトリについては報告されません。{% endif %}

## 依存関係グラフの使用

依存関係グラフを使用する目的は、次のとおりです。

- コードが依存しているリポジトリ{% ifversion fpt or ghec %}、そしてそのコードに依存しているリポジトリ{% endif %}を調べること。 詳しい情報については、「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。 {% ifversion fpt or ghec %}
- Organization のリポジトリで使用されている依存関係のサマリーを 1 つのダッシュボードで確認すること。 詳細は「[Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)」を参照してください。{% endif %}
- リポジトリの脆弱な依存関係を表示・更新すること。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。 {% ifversion fpt or ghes > 3.1 or ghec %}
- Pull Request中の脆弱性がある依存関係に関する情報を見ること。 詳しい情報については「[Pull Request中の依存関係の変化のレビュー](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。{% endif %}

## 依存関係グラフの有効化

{% ifversion fpt or ghec %}依存関係グラフを生成するには、{% data variables.product.product_name %} がリポジトリの依存関係のマニフェストおよびロックファイルに読み取りアクセスできる必要があります。 依存関係グラフは、パブリックリポジトリに対しては常に自動的に生成され、プライベートリポジトリに対しては有効化を選択することができます。 For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %}If the dependency graph is not available in your system, your enterprise owner can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see  "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."{% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 有効にすると、リポジトリにプッシュするたびに{% ifversion fpt or ghec %}、またグラフ中の他のリポジトリにプッシュするたびに{% endif %}、グラフが自動的に更新されます。

## サポートされているパッケージエコシステム

推奨されるフォーマットでは、直接および間接の依存関係すべてに使用されるバージョンを明示的に定義しています。 これらのフォーマットを使用したほうが、依存関係グラフは正確になります。 これは、現在のビルドのセットアップも反映し、依存関係グラフが直接及び間接の依存関係の両方で脆弱性を報告できるようにしてくれます。{% ifversion fpt or ghec %}マニフェストファイル（あるいはそれに相当するもの）から推定される間接的な依存関係は、脆弱性のある依存関係のチェックから除外されます。{% endif %}

| パッケージマネージャー  | 言語                     | 推奨されるフォーマット                                        | サポートされているすべてのフォーマット                                                  |
| ------------ | ---------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Composer     | PHP                    | `composer.lock`                                    | `composer.json`、`composer.lock`                                      |
| `dotnet` CLI | .NET 言語 (C#、C++、F#、VB) | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
{%- ifversion fpt or ghes > 3.2 or ghae %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`* |
{%- ifversion fpt or ghes > 3.3 %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |{% endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**メモ:** `setup.py` ファイルで Python の依存関係をリストする場合、プロジェクトの依存関係すべてを解析してリストすることはできない場合があります。

{% endnote %}

## 参考リンク

- Wikipedia の「[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)」
- 「[リポジトリの依存関係の調査](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」{% ifversion fpt or ghec %}
- [Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization){% endif %}
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- 「[脆弱性のある依存関係の検出のトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)」
