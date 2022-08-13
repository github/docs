vCPU と RAM の量を調整したり、[ドットファイルを追加して環境をパーソナライズ](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)したり、インストールされているツールやスクリプトを変更したりして、codespace をカスタマイズできます。

{% data variables.product.prodname_codespaces %}は`devcontainer.json`というファイルを使って、codespaceで作業する際に使用する開発コンテナを設定します。 それぞれのリポジトリには1つ以上の`devcontainer.json`ファイルを含めて、codespaceでコードの作業をするのに必要なとおりの開発環境を提供できます。

起動時に{% data variables.product.prodname_codespaces %}は`devcontainer.json`ファイルと開発コンテナの設定を構成する依存ファイルを使い、ツールやランタイムをンストールし、プロジェクトが必要とするその他のセットアップタスクを行います。 詳しい情報については「[開発コンテナの紹介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)」を参照してください。
