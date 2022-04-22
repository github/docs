After you connect your account on {% data variables.product.product_location %} to the {% data variables.product.prodname_github_codespaces %} extension, you can create a new codespace. For more information about the {% data variables.product.prodname_github_codespaces %} extension, see the [{% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Note**: Currently, {% data variables.product.prodname_vscode %} doesn't allow you to choose a dev container configuration when you create a codespace. If you want to choose a specific dev container configuration, use the {% data variables.product.prodname_dotcom %} web interface to create your codespace. For more information, click the **Web browser** tab at the top of this page.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon: {% octicon "plus" aria-label="The plus icon" %}.

   ![{% data variables.product.prodname_codespaces %} の [Create New Codespace] オプション](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Type the name of the repository you want to develop in, then select it.

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのリポジトリを検索する](/assets/images/help/codespaces/choose-repository-vscode.png)

4. 開発するブランチをクリックします。

   ![新しい {% data variables.product.prodname_codespaces %} を作成するためのブランチを検索する](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Click the machine type you want to use.

   ![新しい {% data variables.product.prodname_codespaces %} のインスタンスタイプ](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注釈**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}
