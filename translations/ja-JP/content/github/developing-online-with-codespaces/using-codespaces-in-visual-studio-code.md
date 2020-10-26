---
title: Using Codespaces in Visual Studio Code
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_vs_codespaces %} 機能拡張を接続することにより、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### 必要な環境

{% data variables.product.prodname_vscode %} の codespace で直接開発する前に、{% data variables.product.product_name %} アカウントに接続するように {% data variables.product.prodname_vs_codespaces %} の機能拡張を設定する必要があります。

1. {% data variables.product.prodname_vs %} Marketplace を使用して、[{% data variables.product.prodname_vs_codespaces %}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) 機能拡張をインストールします。 詳しい情報については、{% data variables.product.prodname_vscode %} ドキュメントの「[Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。
2. {% data variables.product.prodname_vscode %} の左サイドバーで、[Extensions] アイコンをクリックします。 ![{% data variables.product.prodname_vscode %} の [Extensions] アイコン](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. {% data variables.product.prodname_vs_codespaces %} の下で、[Manage] アイコンをクリックしてから、[**Extension Settings**] をクリックします。 ![[Extension Settings] オプション](/assets/images/help/codespaces/select-extension-settings.png)
4. [Vsonline: Account Provider] ドロップダウンメニューを使用して、{% data variables.product.prodname_dotcom %} を選択します。 ![アカウントプロバイダを {% data variables.product.prodname_dotcom %} に設定する](/assets/images/help/codespaces/select-account-provider-vscode.png)
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
6. ヘッダで {% data variables.product.prodname_codespaces %} がまだ選択されていない場合は、[**{% data variables.product.prodname_codespaces %}**] をクリックします。 ![{% data variables.product.prodname_codespaces %} ヘッダ](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. [**Sign in to view {% data variables.product.prodname_codespaces %}...**] をクリックします。 ![[Signing in to view {% data variables.product.prodname_codespaces %}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. {% data variables.product.prodname_vscode %} からの {% data variables.product.product_name %} のアカウントへのアクセスを承認するには、[**Allow**] をクリックします。
9. 機能拡張を承認するには、{% data variables.product.product_name %} にサインインします。

### Creating a codespace in {% data variables.product.prodname_vscode %}

After you connect your {% data variables.product.product_name %} account to the {% data variables.product.prodname_vs_codespaces %} extension, you can develop in a codespace that you created on {% data variables.product.product_name %} or in {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon, then click **Create New Codespace**. ![The Create new Codespace option in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Type, then click the repository's name you want to develop in. ![Searching for repository to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Click the branch you want to develop in. ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

### {% data variables.product.prodname_vscode %} で codespace を開く

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [Codespaces] で、開発する codespace をクリックします。
3. [Connect to Codespace] アイコンをクリックします。 ![{% data variables.product.prodname_vscode %} の [Connect to Codespace] アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Deleting a codespace in {% data variables.product.prodname_vscode %}

1. Under Codespaces, right-click the codespace you want to delete.
2. In the drop-down menu, click **Delete Codespace**. ![Deleting a codespace in {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
