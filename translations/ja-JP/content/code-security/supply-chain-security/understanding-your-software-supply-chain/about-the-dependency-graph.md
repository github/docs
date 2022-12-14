---
title: 依存関係グラフについて
intro: 依存関係グラフを使って、プロジェクトの依存関係をすべて特定できます。 依存関係グラフは、幅広く一般的なパッケージエコシステムをサポートします。
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106494'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %}

{% data variables.product.product_name %} に、デフォルト ブランチでサポートされているマニフェストもしくはロック ファイルを変更もしくは追加するコミットをプッシュすると、依存関係グラフは自動的に更新されます。{% ifversion fpt or ghec %}加えて、誰かが依存関係のいずれかのリポジトリに変更をプッシュすると、グラフは更新されます。{% endif %}サポートされているエコシステムとマニフェスト ファイルに関する情報については以下の「[サポートされているパッケージエコシステム](#supported-package-ecosystems)」を参照してください。

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

デフォルトブランチをターゲットとする、依存関係の変更を含むPull Requestを作成すると、{% data variables.product.prodname_dotcom %}は依存関係グラフを使ってそのPull Requestに依存関係のレビューを追加します。 それらは、依存関係が脆弱性を含んでいるか、もしそうならその脆弱性が修復されているバージョンを示しています。 詳細については、「[依存関係レビューについて](/code-security/supply-chain-security/about-dependency-review)」を参照してください。

## 依存関係グラフの利用

{% ifversion fpt or ghec %}依存関係グラフは、サポートされているファイル形式を使用して、サポートされているパッケージ エコシステムの依存関係を定義するすべてのパブリック リポジトリで利用できます。 リポジトリ管理者は、プライベート リポジトリの依存関係グラフを有効または無効にすることができます。 {% endif %}{% ifversion ghes %}依存関係グラフの構成について{% endif %}詳しくは、「[依存関係グラフを設定する](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)」をご覧ください。

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## 含まれる依存関係

依存関係グラフには、マニフェストとロック ファイルで詳しく説明されているリポジトリのすべての依存関係、またはサポートされているエコシステム {% ifversion dependency-submission-api %} に関する同等の依存関係と、Dependency Submission API (beta){% endif %} を使用して送信されたすべての依存関係が含まれます。 これには次のものが含まれます

- マニフェストまたはロック ファイルに明示的に定義されている{% ifversion dependency-submission-api %}、または依存関係送信 API (ベータ) を使って送信された{% endif %}直接依存関係
- 直接依存関係の間接依存関係。推移的な依存関係、または下位の依存関係とも言う。

依存関係グラフでは、{% ifversion fpt or ghec %}ロック ファイルから明示的に、または直接的な依存対象の依存関係をチェックして、間接的な依存関係を識別します。 最も信頼性の高いグラフを得るには、ロックファイル (または同等のもの) を使用してください。直接および間接の依存関係のうち現在どのバージョンを使用しているかが正確に定義されているからです。 ロックファイルを使用する場合、リポジトリのすべてのコントリビューターが同じバージョンを使用していることも確認してください。そのほうが、コードのテストとデバッグが容易になります。{% else %}ロックファイルから間接的な依存関係を識別します。{% endif %}

{% data variables.product.product_name %} を使用して環境内の依存関係を理解する方法の詳細については、「[サプライ チェーンのセキュリティについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)」を参照してください。

{% ifversion fpt or ghec %}

## 含まれる依存物

パブリックリポジトリでは、そのリポジトリに依存しているパブリックリポジトリ、もしくはそのリポジトリが公開しているパッケージのみが報告されます。 この情報は、プライベートリポジトリについては報告されません。{% endif %}

## 依存関係グラフの使用

依存関係グラフを使用する目的は、次のとおりです。

- コードが依存しているリポジトリ{% ifversion fpt or ghec %}、そしてそのコードに依存しているリポジトリ{% endif %}を調べること。 詳細については、「[ポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。 {% ifversion ghec %}
- Organization のリポジトリで使用されている依存関係のサマリーを 1 つのダッシュボードで確認すること。 詳細については、「[Organization のインサイトを表示する](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)」を参照してください。{% endif %}
- リポジトリの脆弱な依存関係を表示・更新すること。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。{% ifversion fpt or ghes or ghec %}
- Pull Request中の脆弱性がある依存関係に関する情報を見ること。 詳細については、「[pull request 内の依存関係の変更をレビューする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)」を参照してください。{% endif %}

## サポートされているパッケージエコシステム

推奨されるフォーマットでは、直接および間接の依存関係すべてに使用されるバージョンを明示的に定義しています。 これらの形式を使う場合、依存関係グラフはより正確になります。 これは、現在のビルドのセットアップも反映し、依存関係グラフが直接および間接の依存関係の両方で脆弱性を報告できるようにしてくれます。{% ifversion fpt or ghec %}マニフェスト ファイル (あるいはそれに相当するもの) から推定される間接的な依存関係は、セキュリティで保護されていない依存関係のチェックから除外されます。{% endif %}

| パッケージ マネージャー | 言語 | 推奨される形式 | サポートされているすべての形式 |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`、`Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`、`composer.lock` | | NuGet | .NET 言語 (C#、F#、VB)、C++  |   `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` |  `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` | {%- ifversion github-actions-in-dependency-graph %} | {% data variables.product.prodname_actions %} ワークフロー<sup>[†]</sup> | YAML | `.yml`、`.yaml` | `.yml`、`.yaml` | {%- endif %} | Go モジュール | Go | `go.sum` | `go.mod`、`go.sum` | | Maven | Java、Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`、`package.json`| | pip             | Python                    | `requirements.txt`、`pipfile.lock` | `requirements.txt`、`pipfile`、`pipfile.lock`、`setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`、`pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`、`pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`、`Gemfile`、`*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`、`yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} マニフェストとして認識するには、{% data variables.product.prodname_actions %} ワークフローをリポジトリの `.github/workflows/` ディレクトリに配置する必要があります。 構文 `jobs[*].steps[*].uses` または `jobs.<job_id>.uses` を使用して参照されるアクションまたはワークフローは、依存関係として解析されます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions)に関するページを参照してください。

{% endif %}

[‡] `setup.py` ファイル内に Python の依存関係を列挙した場合、ユーザーはプロジェクト内のすべての依存関係を解析し、列挙することができない場合があります。

{% ifversion github-actions-in-dependency-graph %} {% note %}

**注:** {% data variables.product.prodname_actions %} ワークフローの依存関係は、情報提供のために依存関係グラフに表示されます。 Dependabot アラートは、現在、{% data variables.product.prodname_actions %} ワークフローではサポートされていません。

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}依存関係申請 API (ベータ) を使用すると、上記のサポートされているエコシステム リストにエコシステムがない場合でも、依存関係を任意のパッケージ マネージャーまたはエコシステムから依存関係グラフに追加できます。 依存関係グラフには、送信された依存関係がエコシステム別にグループ化されて表示されますが、マニフェストまたはロック ファイルから解析された依存関係とは別に表示されます。 {% data variables.product.prodname_advisory_database %} の[サポートされているエコシステム](https://github.com/github/advisory-database#supported-ecosystems)のいずれかからの依存関係に対する {% data variables.product.prodname_dependabot_alerts %} のみを受け取ります。 依存関係送信 API の詳細について、「[依存関係送信 API の使用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」を参照してください。{% endif %}
## 参考資料

- Wikipedia の「[依存関係グラフ](https://en.wikipedia.org/wiki/Dependency_graph)」
- 「[リポジトリの依存関係を調べる](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」
- 「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」
- [脆弱性のある依存関係の検出のトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
