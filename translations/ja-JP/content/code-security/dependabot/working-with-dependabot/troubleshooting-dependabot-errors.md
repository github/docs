---
title: Dependabot エラーのトラブルシューティング
intro: '{% data variables.product.prodname_dependabot %} は、依存関係を更新するためのプルリクエストを生成できない場合があります。 エラーをレビューして {% data variables.product.prodname_dependabot %} をブロック解除できます。'
shortTitle: エラーのトラブルシューティング
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} エラーについて

{% data reusables.dependabot.pull-request-introduction %}

何らかが {% data variables.product.prodname_dependabot %} によるプルリクエストの発行を妨げる場合、エラーとして報告されます。

## {% data variables.product.prodname_dependabot_security_updates %} でエラーを調査する

{% data variables.product.prodname_dependabot %} が {% data variables.product.prodname_dependabot %} アラートを修正するためのプルリクエストの作成をブロックされると、アラートにエラーメッセージを投稿します。 {% data variables.product.prodname_dependabot_alerts %} ビューには、未解決のアラートのリストが表示されます。 アラートビューにアクセスするには、リポジトリの [**Security**] タブで [**{% data variables.product.prodname_dependabot_alerts %}**] をクリックします。 脆弱性のある依存関係を修正するプルリクエストが生成された場合、アラートにはそのプルリクエストへのリンクが含まれます。

![プルリクエストリンクを示す {% data variables.product.prodname_dependabot_alerts %} ビュー](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

アラートにPull Requestリンクがない理由はいくつかあります。

1. {% data variables.product.prodname_dependabot_security_updates %} がリポジトリに対して有効になっていない。
{% ifversion GH-advisory-db-supports-malware %}
1. アラートがマルウェアに対するものであり、そのパッケージのセキュアなバージョンがない。
{% endif %}
1. アラートが、ロックファイルで明示的に定義されていない間接的または推移的な依存関係に対するものである。
1. エラーにより {% data variables.product.prodname_dependabot %} のプルリクエストの作成がブロックされた。

エラーによって {% data variables.product.prodname_dependabot %} によるプルリクエストの作成がブロックされた場合は、アラートをクリックしてエラーの詳細を表示できます。

## {% data variables.product.prodname_dependabot_version_updates %} でエラーを調査する

{% data variables.product.prodname_dependabot %} がエコシステムの依存関係を更新するためのプルリクエストの作成をブロックされると、マニフェストファイルにエラーアイコンを投稿します。 {% data variables.product.prodname_dependabot %} によって管理されるマニフェストファイルは、[{% data variables.product.prodname_dependabot %}] タブに一覧表示されます。 このタブにアクセスするには、リポジトリの [**Insights**] タブで [**Dependency graph**] をクリックし、[**{% data variables.product.prodname_dependabot %}**] タブをクリックします。

![エラーを示す {% data variables.product.prodname_dependabot %} ビュー](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

マニフェストファイルのログファイルを表示するには、[**Last checked TIME ago**] リンクをクリックします。 エラー記号（上のスクリーンショットの Maven など）で示されているマニフェストのログファイルを表示すると、エラーも表示されます。

![{% data variables.product.prodname_dependabot %} バージョン更新エラーとログ ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

マニフェストファイルのログを表示するには、**Last checked TIME ago**リンクをクリックし、続いて**View logs**をクリックしてください。

![{% data variables.product.prodname_dependabot %} バージョン更新エラーとログ ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## {% data variables.product.prodname_dependabot %} エラーを理解する

セキュリティアップデートのプルリクエストは、脆弱性のある依存関係を、脆弱性の修正を含む最小バージョンにアップグレードします。 対照的に、バージョン更新のプルリクエストは、パッケージマニフェストおよび {% data variables.product.prodname_dependabot %} 設定ファイルで許可されている最新バージョンに依存関係をアップグレードするように動作します。 したがって、一部のエラーは 1 つの種類の更新に固有になります。

### {% data variables.product.prodname_dependabot %} が DEPENDENCY を脆弱でないバージョンに更新できない

**セキュリティアップデートのみ。** {% data variables.product.prodname_dependabot %} は、このリポジトリの依存関係グラフの他の依存関係を壊さずに、脆弱性のある依存関係を安全なバージョンに更新するためのプルリクエストを作成することはできません。

依存関係を含むすべてのアプリケーションには、依存関係グラフ、つまり、アプリケーションが直接または間接的に依存するすべてのパッケージバージョンの有向非巡回グラフがあります。 依存関係が更新されるたびに、このグラフを解決する必要があります。解決しない場合、アプリケーションがビルドされません。 npm や RubyGems のように、エコシステムに深く複雑な依存関係グラフがある場合、エコシステム全体をアップグレードせずに単一の依存関係をアップグレードすることは不可能な場合があります。

この問題を回避する最善策としては、たとえばバージョン更新を有効化するなどして、最新のリリースバージョンで最新の状態に保つことです。 これにより、依存関係グラフを壊さない単純なアップグレードで 1 つの依存関係の脆弱性を解決できる可能性が高くなります。 詳しい情報については「[{% data variables.product.prodname_dependabot %}のバージョンアップデートの設定](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

### 最新バージョンのオープンプルリクエストがすでに存在するため、{% data variables.product.prodname_dependabot %} を必要なバージョンに更新できない

**セキュリティアップデートのみ。** {% data variables.product.prodname_dependabot %} は、このリポジトリの依存関係グラフの他の依存関係を壊さずに、脆弱性のある依存関係を安全なバージョンに更新するためのプルリクエストを作成することはできません。 このエラーは、単一の依存関係で脆弱性が検出され、依存関係を最新バージョンに更新するためのオープンプルリクエストがすでに存在する場合に表示されます。

オープンプルリクエストを確認して、変更が安全であると確信したらすぐにマージするか、そのプルリクエストをクローズして新しいセキュリティアップデートプルリクエストをトリガーする、という 2 つのオプションがあります。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} のプルリクエストを手動でトリガーする](#triggering-a-dependabot-pull-request-manually)」を参照してください。

### {% data variables.product.prodname_dependabot %} が更新中にタイムアウトした

{% data variables.product.prodname_dependabot %} は、必要な更新を評価してプルリクエストを準備するために許可された最大時間よりも長く時間を要しました。 このエラーは通常、多くのマニフェストファイルを含む大規模なリポジトリでのみ発生します。たとえば、数百の *package.json* ファイルを含む npm や yarn monorepo プロジェクトなどです。 Composer エコシステムの更新も評価に時間がかかり、タイムアウトする可能性があります。

これは対処が難しいエラーです。 バージョン更新がタイムアウトした場合は、`allow` パラメーターを使用して更新する最も重要な依存関係を指定するか、または、`ignore` パラメーターを使用して更新から一部の依存関係を除外できます。 設定を更新すると、{% data variables.product.prodname_dependabot %} がバージョンの更新を確認し、利用可能な時間内にプルリクエストを生成できます。

セキュリティアップデートがタイムアウトする場合、たとえばバージョン更新を有効にするなどして依存関係を最新に保つことで、タイムアウトが発生する可能性を減らすことができます。 詳しい情報については「[{% data variables.product.prodname_dependabot %}のバージョンアップデートの設定](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

### {% data variables.product.prodname_dependabot %} で追加のプルリクエストをオープンできない

{% data variables.product.prodname_dependabot %} が生成するオープンプルリクエスト数には制限があります。 上限に達すると、新しいプルリクエストはオープンされず、このエラーが報告されます。 エラーを解決する最善策として、複数のオープンプルリクエストを確認してマージします。

セキュリティアップデートとバージョン更新のプルリクエストには個別の制限があるため、オープンなバージョン更新のプルリクエストがセキュリティアップデートのプルリクエストの作成をブロックすることはできません。 セキュリティアップデートのプルリクエストの上限は 10 件です。 デフォルトではバージョン更新の上限は 5 件ですが、設定ファイルの `open-pull-requests-limit` パラメータを使用して変更できます。 詳しい情報については「[dependabot.ymlファイルの設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)」を参照してください。

このエラーを解決する最善策として、既存のプルリクエストの一部をマージまたはクローズして、新しいプルリクエストを手動でトリガーします。 詳しい情報については、「[{% data variables.product.prodname_dependabot %} のプルリクエストを手動でトリガーする](#triggering-a-dependabot-pull-request-manually)」を参照してください。

### {% data variables.product.prodname_dependabot %} が依存関係を解決またはアクセスできない

{% data variables.product.prodname_dependabot %} がリポジトリで依存関係のリファレンスを更新する必要があるかどうかを確認しようとしたが、1 つ以上のリファレンスファイルにアクセスできない場合、操作は失敗し、「{% data variables.product.prodname_dependabot %} は LANGUAGE 依存関係ファイルを解決できません」というエラーメッセージが表示されます。 API エラータイプは `git_dependencies_not_reachable` です。

同様に、{% data variables.product.prodname_dependabot %} が依存関係が存在するプライベートパッケージレジストリにアクセスできない場合、次のエラーのいずれかが生成されます。

*   「Dependabot はプライベートパッケージレジストリの依存関係に到達できません」<br> (API エラータイプ: `private_source_not_reachable`)
*   「Dependabot はプライベートパッケージレジストリを認証できません」<br> (API エラータイプ: `private_source_authentication_failure`)
*   「プライベートパッケージレジストリの待機中に Dependabot がタイムアウトしました」<br> (API エラータイプ: `private_source_timed_out`)
*   「Dependabot はプライベートパッケージレジストリの証明書を検証できませんでした」<br> (API エラータイプ: `private_source_certificate_failure`)

{% data variables.product.prodname_dependabot %} が依存関係のリファレンスを正常に更新できるようにするには、すべての依存関係のリファレンスがアクセス可能な場所でホストされていることを確認してください。

**バージョンの更新のみ。**{% data reusables.dependabot.private-dependencies-note %}さらに、{% data variables.product.prodname_dependabot %} はすべてのパッケージマネージャーのプライべートな {% data variables.product.prodname_dotcom %} 依存関係をサポートしているわけではありません。 詳しい情報については、「[ Dependabot のバージョン更新について](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)」を参照してください。

## {% data variables.product.prodname_dependabot %} のプルリクエストを手動でトリガーする

{% data variables.product.prodname_dependabot %} のブロックを解除すると、プルリクエストを作成するための新規の試行を手動でトリガーできます。

- **セキュリティアップデート** — 修正済みのエラーを示す {% data variables.product.prodname_dependabot %} アラートを表示します。[**Create {% data variables.product.prodname_dependabot %} security update**] をクリックします。
- **バージョン更新** — リポジトリの [**Insights**] タブで、[**Dependency graph**] をクリックし、[**Dependabot**] タブをクリックします。 [**Last checked *TIME* ago**] をクリックして、バージョン更新の最終チェック中に {% data variables.product.prodname_dependabot %} が生成したログファイルを表示します。 [**Check for updates**] をクリックします。

## 参考リンク

- "[依存関係グラフのトラブルシューティング ](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
- 「[脆弱性のある依存関係の検出のトラブルシューティング](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)」
