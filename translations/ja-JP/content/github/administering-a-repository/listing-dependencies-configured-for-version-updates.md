---
title: バージョン更新用に設定された依存関係を一覧表示する
intro: '{% data variables.product.prodname_dependabot %} が更新を監視している依存関係を表示できます。'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### {% data variables.product.prodname_dependabot %} によって監視されている依存関係を表示する

バージョン更新を有効にした後、リポジトリの依存関係グラフの [**{% data variables.product.prodname_dependabot %}**] タブで、設定が正しいかどうかを確認できます。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. 必要に応じて、パッケージマネージャーで監視されているファイルを表示するには、関連する {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。 ![監視対象の依存関係ファイル](/assets/images/help/dependabot/monitored-dependency-files.png)

依存関係が見つからない場合は、ログファイルでエラーを確認します。 パッケージマネージャーが見つからない場合は、設定ファイルを確認してください。

### Viewing {% data variables.product.prodname_dependabot %} のログファイルを表示する

1. [**{% data variables.product.prodname_dependabot %}**] タブで、[**Last checked *TIME* ago**] をクリックして、{% data variables.product.prodname_dependabot %} が最後のバージョン更新チェック時に生成したログファイルを表示します。 ![ログファイルの表示](/assets/images/help/dependabot/last-checked-link.png)
2. 必要に応じて、バージョンチェックを再実行するには、[**Check for updates**] をクリックします。 ![更新の確認](/assets/images/help/dependabot/check-for-updates.png)
