---
title: Konfigurieren von GitHub Copilot in Visual Studio Code
intro: 'Du kannst {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} aktivieren, konfigurieren und deaktivieren.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080183'
---
## Informationen zu {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}

Wenn du {% data variables.product.prodname_vscode %} verwendest, kann {% data variables.product.prodname_copilot %} Code bei der Eingabe automatisch vervollständigen. Nach der Installation kannst du {% data variables.product.prodname_copilot %} aktivieren oder deaktivieren. Außerdem kannst du erweiterte Einstellungen innerhalb von {% data variables.product.prodname_vscode %} oder auf {% data variables.product.prodname_dotcom_the_website %} konfigurieren.

## Voraussetzungen

Um {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} zu konfigurieren, musst du das Plug-In {% data variables.product.prodname_copilot %} installieren. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code).

## Tastenkombinationen für {% data variables.product.prodname_copilot %}

Bei der Nutzung von {% data variables.product.prodname_copilot %} kannst du die Standardtastenkombinationen in {% data variables.product.prodname_vscode %} verwenden. Alternativ kannst du die Tastenkombinationen im Editor für Tastenkombinationen nach deinen Wünschen neu mit einzelnen Befehlen verknüpfen. Du kannst im Editor für Tastenkombinationen anhand des Befehlsnamens nach jeder Tastenkombination suchen.

{% mac %}

| Aktion | Tastenkombination | Befehlsname |
|:---|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|editor.action.inlineSuggest.commit|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Nächsten Inlinevorschlag anzeigen| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Vorherigen Inlinevorschlag anzeigen| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Inlinevorschlag auslösen| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>STRG</kbd>+<kbd>EINGABE</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} ein-/ausschalten|_Keine Standardtastenkombination_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Aktion | Tastenkombination | Befehlsname |
|:---|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|editor.action.inlineSuggest.commit|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Nächsten Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Vorherigen Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Inlinevorschlag auslösen|<kbd>ALT</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>STRG</kbd>+<kbd>EINGABETASTE</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} ein-/ausschalten|_Keine Standardtastenkombination_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Aktion | Tastenkombination | Befehlsname |
|:---|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|editor.action.inlineSuggest.commit|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|editor.action.inlineSuggest.hide|
|Nächsten Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Vorherigen Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Inlinevorschlag auslösen|<kbd>ALT</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>STRG</kbd>+<kbd>EINGABETASTE</kbd>|github.copilot.generate|
|{% data variables.product.prodname_copilot %} ein-/ausschalten|_Keine Standardtastenkombination_|github.copilot.toggleCopilot|

{% endlinux %}

## Tastenkombinationen neu binden

Wenn du bei Verwendung von {% data variables.product.prodname_copilot %} nicht die Standardtastenkombinationen in {% data variables.product.prodname_vscode %} verwenden möchtest, kannst du die Tastenkombinationen im Editor für Tastenkombinationen nach deinen Wünschen neu mit einzelnen Befehlen verknüpfen.

1. Klicke im Menü **Datei** auf **Einstellungen** und dann auf **Tastenkombinationen**.
![Screenshot von Visual Studio Code-Tastenkombinationen](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. Suche im Editor „Tastenkombinationen“ nach dem Befehlsnamen der Tastenkombination, die du ändern möchtest.
![Screenshot der Tastenkombinationen-Suchleiste](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Klicke neben dem Befehl, den du ändern möchtest, auf das Stiftsymbol.
![Screenshot des Editors für Tastenkombinationen](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Gib die Tastaturanschläge ein, die du für den Befehl verwenden möchtest, und drücke dann <kbd>EINGABE</kbd>/<kbd>EINGABE</kbd>.
![Screenshot des Textfelds zum Bearbeiten von Tastenkombinationen](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Aktivieren oder Deaktivieren von Inlinevorschlägen

Du kannst Inlinevorschläge für {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} aktivieren oder deaktivieren. 

1. Navigiere im Menü **Datei** zu **Einstellungen**, und klicke auf **Einstellungen**.
![Screenshot der Einstellungen für {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. Klicke im linken Bereich der Registerkarte „Einstellungen“ auf **Erweiterungen**, und wähle dann **Copilot** aus.
1. Aktiviere oder deaktiviere das Kontrollkästchen unter „Inlinevorschläge:Aktivieren“, um Inlinevorschläge zu aktivieren oder zu deaktivieren.

## Aktivieren oder Deaktivieren von {% data variables.product.prodname_copilot %} für bestimmte Sprachen

Du kannst angeben, für welche Sprachen du {% data variables.product.prodname_copilot %} aktivieren oder deaktivieren möchtest.

1. Klicke in {% data variables.product.prodname_vscode %} auf die Registerkarte **Erweiterungen**, und navigiere dann zum Abschnitt **Copilot**. Weitere Informationen findest du unter [Aktivieren und Deaktivieren von Inlinevorschlägen](#enabling-and-disabling-inline-suggestions).
1. Klicke unter „Copilot für angegebene Sprachen aktivieren oder deaktivieren“ auf **In settings.json bearbeiten**.
1. Füge in der Datei _settings.json_ die Sprachen hinzu, für die du {% data variables.product.prodname_copilot %} aktivieren möchtest, oder entferne sie zum Deaktivieren. Wenn du beispielsweise Python in {% data variables.product.prodname_copilot %} aktivieren möchtest, füge der Liste `"python": true` hinzu, und stelle sicher, dass dem letzten Listenelement ein Komma nachgestellt ist.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

{% data reusables.copilot.dotcom-settings %}
