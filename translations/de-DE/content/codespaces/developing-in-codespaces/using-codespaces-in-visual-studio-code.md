---
title: Using Codespaces in Visual Studio Code
intro: 'Du kannst über {% data variables.product.prodname_vscode %} direkt in Deinem Codespace entwickeln, indem Du die {% data variables.product.prodname_github_codespaces %}-Erweiterung mit Deinem Konto auf {% data variables.product.product_name %} verbindest.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Vorrausetzungen

To develop in a codespace directly in {% data variables.product.prodname_vscode %}, you must sign into the {% data variables.product.prodname_github_codespaces %} extension. The {% data variables.product.prodname_github_codespaces %} extension requires {% data variables.product.prodname_vscode %} October 2020 Release 1.51 or later.

Du kannst {% data variables.product.prodname_vs %}-Marketplace verwenden, um die [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)-Erweiterung zu installieren. Weitere Informationen findest Du unter „[Marketplace-Erweiterung](https://code.visualstudio.com/docs/editor/extension-gallery)" in der {% data variables.product.prodname_vscode %}-Dokumentation.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Klicke auf **Sign in to view {% data variables.product.prodname_dotcom %}...** (Anmelden zur Anzeige von...). ![Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)
3. Um {% data variables.product.prodname_vscode %} für den Zugriff zu Deinem Konto auf {% data variables.product.product_name %} zu autorisieren, klicke auf **Allow** (Genehmigen).
4. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Use the "REMOTE EXPLORER" drop-down, then click **{% data variables.product.prodname_github_codespaces %}**. ![Die {% data variables.product.prodname_codespaces %}-Kopfzeile](/assets/images/help/codespaces/codespaces-header-vscode.png)
3. Klicke auf **Sign in to view {% data variables.product.prodname_codespaces %}...** (Anmelden zur Anzeige von...). ![Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
4. Um {% data variables.product.prodname_vscode %} für den Zugriff zu Deinem Konto auf {% data variables.product.product_name %} zu autorisieren, klicke auf **Allow** (Genehmigen).
5. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

{% endwindows %}

### Creating a codespace in {% data variables.product.prodname_vscode %}

After you connect your {% data variables.product.product_name %} account to the {% data variables.product.prodname_github_codespaces %} extension, you can develop in a codespace that you created on {% data variables.product.product_name %} or in {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon, then click **Create New Codespace**. ![The Create new Codespace option in {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)
3. Type, then click the repository's name you want to develop in. ![Searching for repository to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)
4. Click the branch you want to develop on. ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)
5. Click the machine type you want to develop in. ![Instance types for a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-sku-vscode.png)
### Einen Codespace in {% data variables.product.prodname_vscode %} eröffnen

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Under "Codespaces", click the codespace you want to develop in.
3. Klicke auf das Symbol „Connect to Codespace" (Verbinde zu Codespace). ![Symbol „Connect to Codespace" (Verbinde mit Codespace) in {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

### Changing the machine type in {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.codespaces-machine-types %}

You can change the machine type of your codespace at any time.

1. In {% data variables.product.prodname_vscode %}, open the Command Palette (`shift command P` / `shift control P`).
2. Search for and select "Codespaces: Change Machine Type." ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)
3. Click the codespace that you want to change. ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)
4. Choose the machine type you want to use. ![Searching for a branch to create a new {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-type.png)

If the codespace is currently running, a message is displayed asking if you would like to restart and reconnect to your codespace now. Click **Yes** if you want to change the machine type used for this codespace immediately. If you click **No**, or if the codespace is not currently running, the change will take effect the next time the codespace restarts.

### Deleting a codespace in {% data variables.product.prodname_vscode %}

1. Under "Codespaces", right-click the codespace you want to delete.
2. In the drop-down menu, click **Delete Codespace**. ![Deleting a codespace in {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/delete-codespace-vscode.png)
