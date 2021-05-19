---
title: 脆弱性のある依存関係の管理について
intro: '{% data variables.product.prodname_dotcom %} は、既知の脆弱性を含むサードパーティソフトウェアの使用を回避するのに役立ちます。'
redirect_from:
  - /github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies
versions:
  free-pro-team: '*'
topics:
  - Security
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Managing vulnerabilities in your project’s dependencies ".-->

{% data variables.product.prodname_dotcom %} は、脆弱性のある依存関係を削除および回避するための次のツールを提供しています。

#### 依存関係グラフ
依存関係グラフは、リポジトリに保存されているマニフェストファイルおよびロックファイルのサマリーです。 コードベースが依存するエコシステムとパッケージ（依存関係）、およびプロジェクトに依存するリポジトリとパッケージ（依存関係）が表示されます。 依存関係グラフの情報は、依存関係のレビューと {% data variables.product.prodname_dependabot %} によって使用されます。 詳しい情報については、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

#### 依存関係のレビュー
プルリクエストの依存関係のレビューを確認することで、依存関係からコードベースに脆弱性が発生するのを防ぐことができます。 プルリクエストが脆弱性のある依存関係を追加したり、依存関係を脆弱性のあるバージョンに変更した場合、これは依存関係のレビューで強調表示されます。 プルリクエストをマージする前に、依存関係をパッチを適用したバージョンに変更できます。 For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

#### {% data variables.product.prodname_dependabot_alerts %}
リポジトリ内の脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dotcom %} は {% data variables.product.prodname_dependabot_alerts %} を作成できます。 アラートは、リポジトリの [Security] タブに表示されます。 アラートには、プロジェクト内で影響を受けるファイルへのリンクと、修正バージョンに関する情報が含まれています。 {% data variables.product.prodname_dotcom %} は、通知設定に従って、リポジトリのメンテナにも通知します。 詳しい情報については、「[脆弱性のある依存関係に対するアラートについて](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

#### {% data variables.product.prodname_dependabot_security_updates %}
{% data variables.product.prodname_dotcom %} がリポジトリ内の脆弱性のある依存関係に対して {% data variables.product.prodname_dependabot %} アラートが発生すると、{% data variables.product.prodname_dependabot %} は自動的にそれを修正しようとします。 {% data variables.product.prodname_dependabot_security_updates %} は、脆弱性のある依存関係を修正バージョンに更新するプルリクエストを自動的に生成します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。


#### {% data variables.product.prodname_dependabot_version_updates %}
{% data variables.product.prodname_dependabot_version_updates %} を有効にすると、依存関係を維持する手間が省けます。 {% data variables.product.prodname_dependabot_version_updates %} を使用すると、{% data variables.product.prodname_dotcom  %} が古い依存関係を識別するたびに、マニフェストを最新バージョンの依存関係に更新するためのプルリクエストを発行します。 対照的に、{% data variables.product.prodname_dependabot_security_updates %} は脆弱性のある依存関係を修正するためにプルリクエストのみを発行します。 詳しい情報については、「[ Dependabot のバージョン更新について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。
