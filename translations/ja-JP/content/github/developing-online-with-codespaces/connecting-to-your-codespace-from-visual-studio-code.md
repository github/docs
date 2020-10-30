---
title: Visual Studio Code から codespace に接続する
intro: '{% data variables.product.product_name %} のアカウントに {% data variables.product.prodname_vs_codespaces %} 機能拡張を接続することにより、{% data variables.product.prodname_vscode %} で codespace を直接開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### {% data variables.product.prodname_vs_codespaces %} 機能拡張を {% data variables.product.prodname_dotcom %} アカウントに接続する

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

### {% data variables.product.prodname_vscode %} で codespace を開く

{% data variables.product.product_name %} アカウントを {% data variables.product.prodname_vs_codespaces %} 機能拡張に接続した後、{% data variables.product.product_name %} で作成した codespace で {% data variables.product.prodname_vscode %} を使って直接開発できます。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. [Codespaces] で、開発する codespace をクリックします。
3. [Connect to Codespace] アイコンをクリックします。 ![{% data variables.product.prodname_vscode %} の [Connect to Codespace] アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
