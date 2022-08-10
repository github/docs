{% data variables.product.product_location %}上のアカウントを{% data variables.product.prodname_github_codespaces %}の機能拡張に接続すると、新しいcodespaceを作成できます。 {% data variables.product.prodname_github_codespaces %}の機能拡張に関する詳しい情報については[{% data variables.product.prodname_vs_marketplace_shortname %} Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)を参照してください。

{% note %}

**ノート**: 現在、{% data variables.product.prodname_vscode_shortname %}ではcodespaceの作成時に開発コンテナの設定を選択することはできません。 特定の開発コンテナの設定を選択したい場合、{% data variables.product.prodname_dotcom %} Webインターフェースを使ってcodespaceを作成してください。 詳しい情報については、このページの上部の**Web browser（Webブラウザ）**タブをクリックしてください。

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 追加アイコン {% octicon "plus" aria-label="The plus icon" %} をクリックしてください。

   ![{% data variables.product.prodname_codespaces %} の [Create New Codespace] オプション](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 開発を行いたいリポジトリ名を入力し、選択してください。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのリポジトリを検索する](/assets/images/help/codespaces/choose-repository-vscode.png)

4. 開発するブランチをクリックします。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/choose-branch-vscode.png)

5. If prompted to choose a dev container configuration file, choose a file from the list.

   ![Choosing a dev container configuration file for {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. 使用したいマシンタイプをクリックしてください。

   ![新しい {% data variables.product.prodname_codespaces %} のインスタンスタイプ](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注釈**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
