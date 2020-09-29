---
title: Aus Visual Studio Code zu Deinem Codespace verbinden
intro: 'Du kannst über {% data variables.product.prodname_vscode %} direkt in Deinem Codespace entwickeln, indem Du die {% data variables.product.prodname_vs_codespaces %}-Erweiterung mit Deinem Konto auf {% data variables.product.product_name %} verbindest.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Die {% data variables.product.prodname_vs_codespaces %}-Erweiterung zu Deinem {% data variables.product.prodname_dotcom %}-Konto verbinden

Bevor Du über {% data variables.product.prodname_vscode %} direkt in einem Codespace entwickeln kannst, musst Du die {% data variables.product.prodname_vs_codespaces %}-Erweiterung so konfigurieren, dass sie sich zu Deinem {% data variables.product.product_name %}-Konto verbindet.

1. Du kannst {% data variables.product.prodname_vs %}-Marketplace verwenden, um die [{% data variables.product.prodname_vs_codespaces %}](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline)-Erweiterung zu installieren. Weitere Informationen findest Du unter „[Marketplace-Erweiterung](https://code.visualstudio.com/docs/editor/extension-gallery)" in der {% data variables.product.prodname_vscode %}-Dokumentation.
2. Klicke in der linken Seitenleiste in {% data variables.product.prodname_vscode %} auf das Symbol „Extensions" (Erweiterungen). ![Das Symbol „Extensions" (Erweiterungen) in {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-extensions-icon-vscode.png)
3. Klicke unterhalb von {% data variables.product.prodname_vs_codespaces %} auf das Symbol „Manage" (Verwalten), und klicke dann auf **Extension Settings** (Erweiterungseinstellungen). ![Option „Extension Settings" (Erweiterungseinstellungen)](/assets/images/help/codespaces/select-extension-settings.png)
4. Verwende das Dropdownmenü „Vsonline: Account Provider" (Vsonline: Kontoanbieter) und wähle {% data variables.product.prodname_dotcom %}. ![Den Kontoanbieter auf {% data variables.product.prodname_dotcom %} setzen](/assets/images/help/codespaces/select-account-provider-vscode.png)
{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
6. Wenn {% data variables.product.prodname_codespaces %} in der Kopfzeile noch nicht ausgewählt ist, klicke auf **{% data variables.product.prodname_codespaces %}**. ![Die {% data variables.product.prodname_codespaces %}-Kopfzeile](/assets/images/help/codespaces/codespaces-header-vscode.png)
7. Klicke auf **Sign in to view {% data variables.product.prodname_codespaces %}...** (Anmelden zur Anzeige von...). ![Anmelden, um {% data variables.product.prodname_codespaces %} anzuzeigen](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)
8. Um {% data variables.product.prodname_vscode %} für den Zugriff zu Deinem Konto auf {% data variables.product.product_name %} zu autorisieren, klicke auf **Allow** (Genehmigen).
9. Melde Dich bei {% data variables.product.product_name %} an, um die Erweiterung zu genehmigen.

### Einen Codespace in {% data variables.product.prodname_vscode %} eröffnen

Nachdem Du Dein {% data variables.product.product_name %}-Konto mit der {% data variables.product.prodname_vs_codespaces %}-Erweiterung verbunden hast, kannst Du direkt über {% data variables.product.prodname_vscode %} in einem Codespace entwickeln, den Du mit {% data variables.product.product_name %} erstellt hast.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Klicke unter „Codespaces" auf den Codespace, in dem Du entwickeln willst.
3. Klicke auf das Symbol „Connect to Codespace" (Verbinde zu Codespace). ![Symbol „Connect to Codespace" (Verbinde mit Codespace) in {% data variables.product.prodname_vscode %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)
