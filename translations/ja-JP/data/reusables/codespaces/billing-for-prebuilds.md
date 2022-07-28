デフォルトでは、{% data variables.product.prodname_actions %}ワークフローは事前ビルドされたテンプレートを作成あるいは更新するたび、あるいは事前ビルドが有効化されたブランチにプッシュするたびにトリガーされます。 他のワークフローと同じように、事前ビルドされたワークフローはアカウントに含まれるActionsの分があればその一部を消費し、そうでない場合はActionsの分に対する課金を生じさせます。 Actionsの分の価格に関する詳しい情報については「[{% data variables.product.prodname_actions %}の支払いについて](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」を参照してください。

{% data variables.product.prodname_actions %}の分と合わせて、指定されたリポジトリとリージョンについて、それぞれの事前ビルドされた設定と関連づけられた事前ビルドテンプレートのストレージに対しても課金されます。 事前ビルドされたテンプレートのストレージは、Codespacesのストレージと同じレートで課金されます。 詳しい情報については「[ストレージの利用の計算](#calculating-storage-usage)」を参照してください。

Actionsの分の消費を削減するために、開発コンテナ設定ファイルを変更したときにのみ、あるいはカスタムのスケジュールだけに従って事前ビルドされたテンプレートが更新されるように設定できます。 また、事前ビルドされた設定に対して保持されるテンプレートのバージョン数を調整することによって、ストレージの使用量を管理することもできます。 詳しい情報については「[事前ビルドの設定](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)」を参照してください。

Organizationのオーナーは、事前ビルドされたワークフローとストレージの使用状況を、Organizationの{% data variables.product.prodname_actions %}使用状況レポートをダウンロードして追跡できます。 事前ビルドに対するワークフローの実行は、CSVの出力を"Create Codespaces Prebuilds"というワークフローだけが含まれるようにフィルタリングすれば、特定できます。 詳しい情報については「[{% data variables.product.prodname_actions %}の利用状況の表示](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)」を参照してください。
