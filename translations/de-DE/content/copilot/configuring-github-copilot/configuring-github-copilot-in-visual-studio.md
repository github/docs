---
title: Konfigurieren von GitHub Copilot in Visual Studio
intro: 'Du kannst {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} aktivieren, konfigurieren und deaktivieren.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: cb24557b15eafd4a5be8ef1a991ae3c43f376c67
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786029'
---
## Informationen zu {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}

Wenn du {% data variables.product.prodname_vs %} verwendest, kann {% data variables.product.prodname_copilot %} Code bei der Eingabe automatisch vervollständigen. Nach der Installation kannst du {% data variables.product.prodname_copilot %} aktivieren oder deaktivieren. Außerdem kannst du erweiterte Einstellungen innerhalb von {% data variables.product.prodname_vs %} oder auf {% data variables.product.prodname_dotcom_the_website %} konfigurieren.

## Voraussetzungen

Um {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} zu konfigurieren, musst du das Plug-In {% data variables.product.prodname_copilot %} installieren. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio).

## Tastenkombinationen für {% data variables.product.prodname_copilot %}

Bei der Nutzung von {% data variables.product.prodname_copilot %} kannst du die Standardtastenkombinationen in {% data variables.product.prodname_vs %} verwenden. Alternativ kannst du die Tastenkombinationen in den Einstellungen unter „Extras“ für {% data variables.product.prodname_vs %} mit deinen bevorzugten Tastenkombinationen für jeden spezifischen Befehl neu binden. Du kannst im Editor für Tastenkombinationen nach jeder Tastenkombination anhand ihres Befehlsnamens suchen.

| Aktion | Tastenkombination | Befehlsname |
|:---|:---|:---|
|Nächsten Inlinevorschlag anzeigen|<kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Vorherigen Inlinevorschlag anzeigen|<kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Inlinevorschlag auslösen|<kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Tastenkombinationen neu binden

Wenn du bei Verwendung von {% data variables.product.prodname_vs %} nicht die Standardtastenkombinationen in {% data variables.product.prodname_copilot %} verwenden möchtest, kannst du die Tastenkombinationen im Editor für Tastenkombinationen mit deinen bevorzugten Tastenkombinationen für die einzelnen Befehle neu binden.

1. Klicke auf der Symbolleiste von {% data variables.product.prodname_vs %} unter **Extras** auf **Optionen**.
   ![Screenshot der Option „Optionen“ auf der Symbolleiste von {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. Klicke im Dialogfeld „Optionen“ unter **Umgebung** auf **Tastatur**.
   ![Screenshot der Option „Tastatur“ im Dialogfeld „Optionen“](/assets/images/help/copilot/vs-options-dialogue.png)
1. Suche unter „Befehle mit folgendem Inhalt anzeigen“ den Befehl, den du neu binden möchtest.
   ![Screenshot der Suchleiste „Befehle mit folgendem Inhalt anzeigen“](/assets/images/help/copilot/vs-show-commands-containing.png)
1. Gib unter „Tastenkombination drücken“ die Tastenkombination ein, die du dem Befehl zuweisen möchtest, und klicke dann auf **Zuweisen**.
   ![Screenshot der Tastenkombinationszuweisung](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Konfigurieren von ReSharper für {% data variables.product.prodname_copilot %}

Falls du ReSharper verwendest, funktioniert {% data variables.product.prodname_copilot %} möglicherweise am besten, wenn du ReSharper so konfigurierst, dass natives IntelliSense von {% data variables.product.prodname_copilot %} verwendet wird. Weitere Informationen zu ReSharper findest du in der [ReSharper-Dokumentation](https://www.jetbrains.com/resharper/documentation/documentation.html).

1. Klicke auf der Symbolleiste von {% data variables.product.prodname_vs %} unter **Extras** auf **Optionen**.
   ![Screenshot der Option „Optionen“ auf der Symbolleiste von {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. Klicke im Dialogfeld „Optionen“ unter **Umgebung** auf **IntelliSense** und dann auf **Allgemein**.
    ![Screenshot der Option „IntelliSense“ im Dialogfeld „Optionen“](/assets/images/help/copilot/vs-options-intellisense.png)
1. Wähle unter „Allgemein“ zunächst **Visual Studio** aus, und klicke dann auf **Speichern**.

{% data reusables.copilot.dotcom-settings %}
