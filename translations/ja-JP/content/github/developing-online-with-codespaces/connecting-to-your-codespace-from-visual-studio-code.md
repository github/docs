---
title: Visual Studio Code から codespace に接続する
intro: '{{ site.data.variables.product.product_name }} のアカウントに {{ site.data.variables.product.prodname_vs_codespaces }} 機能拡張を接続することにより、{{ site.data.variables.product.prodname_vscode }} で codespace を直接開発できます。'
product: '{{ site.data.reusables.gated-features.codespaces }}'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.codespaces.release-stage }}

### {{ site.data.variables.product.prodname_vs_codespaces }} 機能拡張を {{ site.data.variables.product.prodname_dotcom }} アカウントに接続する

{{ site.data.variables.product.prodname_vscode }} の codespace で直接開発する前に、{{ site.data.variables.product.product_name }} アカウントに接続するように {{ site.data.variables.product.prodname_vs_codespaces }} の機能拡張を設定する必要があります。

1. {{ site.data.variables.product.prodname_vs }} Marketplace を使用して、[{{ site.data.variables.product.prodname_vs_codespaces }}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline) 機能拡張をインストールします。 詳しい情報については、{{ site.data.variables.product.prodname_vscode }} ドキュメントの「[Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)」を参照してください。
2. {{ site.data.variables.product.prodname_vscode }} の左サイドバーで、[Extensions] アイコンをクリックします。 ![{{ site.data.variables.product.prodname_vscode }} の [Extensions] アイコン](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. {{ site.data.variables.product.prodname_vs_codespaces }} の下で、[Manage] アイコンをクリックしてから、[**Extension Settings**] をクリックします。 ![[Extension Settings] オプション](/assets/images/help/codespaces/select-extension-settings.png)
4. [Vsonline: Account Provider] ドロップダウンメニューを使用して、{{ site.data.variables.product.prodname_dotcom }} を選択します。 ![アカウントプロバイダを {{ site.data.variables.product.prodname_dotcom }} に設定する](/assets/images/help/codespaces/select-account-provider-vscode.png)
{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
6. ヘッダで {{ site.data.variables.product.prodname_codespaces }} がまだ選択されていない場合は、[**{{ site.data.variables.product.prodname_codespaces }}**] をクリックします。 ![{{ site.data.variables.product.prodname_codespaces }} ヘッダ](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. [**Sign in to view {{ site.data.variables.product.prodname_codespaces }}...**] をクリックします。 ![[Signing in to view {{ site.data.variables.product.prodname_codespaces }}]](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. {{ site.data.variables.product.prodname_vscode }} からの {{ site.data.variables.product.product_name }} のアカウントへのアクセスを承認するには、[**Allow**] をクリックします。
9. 機能拡張を承認するには、{{ site.data.variables.product.product_name }} にサインインします。

### {{ site.data.variables.product.prodname_vscode }} で codespace を開く

{{ site.data.variables.product.product_name }} アカウントを {{ site.data.variables.product.prodname_vs_codespaces }} 機能拡張に接続した後、{{ site.data.variables.product.product_name }} で作成した codespace で {{ site.data.variables.product.prodname_vscode }} を使って直接開発できます。

{{ site.data.reusables.codespaces.click-remote-explorer-icon-vscode }}
2. [Codespaces] で、開発する codespace をクリックします。
3. [Connect to Codespace] アイコンをクリックします。 ![{{ site.data.variables.product.prodname_vscode }} の [Connect to Codespace] アイコン](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
