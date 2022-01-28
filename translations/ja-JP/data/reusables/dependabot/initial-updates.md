最初にバージョンアップデートを有効にすると、古くなった依存関係が大量にあり、中には最新バージョンまでにいくつものバージョンが存在しているものもあるかもしれません。 {% data variables.product.prodname_dependabot %}は、有効化されるとすぐに古くなった依存関係をチェックします。 設定が更新するマニフェストファイルの数に応じて、設定ファイルの追加後数分のうちに、バージョンアップデートの新しいPull Requestが発行されるかもしれません。 {% data variables.product.prodname_dependabot %}は、設定ファイルに対するその後の変更に対しても更新を実行します。

{% data variables.product.prodname_dependabot %}は、アップデートの失敗後にマニフェストファイルを変更した際にもPull Requestを作成することがあります。 これは、アップデート失敗の原因となった依存関係の削除などのマニフェストへの変更によって、新たにトリガーされたアップデートが成功するかもしれないためです。

Pull Requestを管理可能でレビューしやすく保つために、{% data variables.product.prodname_dependabot %}は依存関係を最新バージョンにし始めるためのPull Requestを最大で5つまで発行します。 次にスケジュールされているアップデートの前にこれらの最初のPull Requestの一部をマージした場合、残りのPull Requestは上限まで次のアップデート時にオープンとなります。 [`open-pull-requests-limit`設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)を設定することによっても、オープンなPull Requestの最大数を変更できます。
