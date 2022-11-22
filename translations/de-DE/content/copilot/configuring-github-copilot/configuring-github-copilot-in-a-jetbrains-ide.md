---
title: Konfigurieren von GitHub Copilot in einer JetBrains-IDE
intro: 'Du kannst in einer JetBrains-IDE {% data variables.product.prodname_copilot %} aktivieren, konfigurieren oder deaktivieren.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 845f9306f519391f165dd00d3eefebed67bd409a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080286'
---
## Informationen zu {% data variables.product.prodname_copilot %} in JetBrains-IDEs

Wenn du eine Jetbrains-IDE verwendest, kann {% data variables.product.prodname_copilot %} den Code bei deiner Eingabe automatisch vervollständigen. Nach der Installation kannst du {% data variables.product.prodname_copilot %} aktivieren oder deaktivieren. Außerdem kannst du erweiterte Einstellungen innerhalb deiner IDE oder auf {% data variables.product.prodname_dotcom_the_website %} konfigurieren.

## Voraussetzungen

Um {% data variables.product.prodname_copilot %} in einer JetBrains-IDE zu konfigurieren, musst du das {% data variables.product.prodname_copilot %}-Plug-In installieren. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_copilot %} in einer JetBrains-IDE](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide).

## Tastenkombinationen für {% data variables.product.prodname_copilot %}

Du kannst die Standardtastenkombinationen für Inlinevorschläge in deiner JetBrains-IDE verwenden, wenn du {% data variables.product.prodname_copilot %} verwendest. Alternativ kannst du die Tastenkombinationen für jeden bestimmten Befehl erneut an deine bevorzugten Tastaturkurzbefehle binden. Weitere Informationen zum erneuten Binden von Tastenkombinationen in deiner JetBrains-IDE findest du in der JetBrains-Dokumentation. Du kannst beispielsweise die [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap)-Dokumentation anzeigen.

{% mac %}

| Aktion | Tastenkombination |
|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|
|Nächsten Inlinevorschlag anzeigen|<kbd>Option (⌥) oder ALT</kbd>+<kbd>]</kbd>|
|Vorherigen Inlinevorschlag anzeigen|<kbd>Option (⌥) oder ALT</kbd>+<kbd>[</kbd>|
|Inlinevorschlag auslösen|<kbd>Option (⌥)</kbd>+<kbd>\</kbd>|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>Option (⌥) oder ALT</kbd>+<kbd>EINGABETASTE</kbd> |

{% endmac %}

{% windows %}

| Aktion | Tastenkombination |
|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|
|Nächsten Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>]</kbd>|
|Vorherigen Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>[</kbd>|
|Inlinevorschlag auslösen|<kbd>ALT</kbd>+<kbd>\</kbd>|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>ALT</kbd>+<kbd>EINGABETASTE</kbd> |

{% endwindows %}

{% linux %}

| Aktion | Tastenkombination |
|:---|:---|
|Inlinevorschlag akzeptieren|<kbd>Registerkarte</kbd>|
|Inlinevorschlag verwerfen|<kbd>ESC</kbd>|
|Nächsten Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>]</kbd>|
|Vorherigen Inlinevorschlag anzeigen|<kbd>ALT</kbd>+<kbd>[</kbd>|
|Inlinevorschlag auslösen|<kbd>ALT</kbd>+<kbd>\</kbd>|
|Öffnen von {% data variables.product.prodname_copilot %} (zusätzliche Vorschläge im separaten Bereich)|<kbd>ALT</kbd>+<kbd>EINGABETASTE</kbd> |

{% endlinux %}

## Aktivieren oder Deaktivieren von {% data variables.product.prodname_copilot %}

Du kannst {% data variables.product.prodname_copilot %} in deiner JetBrains-IDE aktivieren oder deaktivieren. Das Statussymbol von {% data variables.product.prodname_copilot %} im unteren Bereich des JetBrains-Fensters gibt an, ob {% data variables.product.prodname_copilot %} aktiviert oder deaktiviert ist. Falls aktiviert, ist das Symbol hervorgehoben. Falls deaktiviert, ist das Symbol abgeblendet.

1. Um {% data variables.product.prodname_copilot %} zu aktivieren oder zu deaktivieren, klicke im unteren Panel des JetBrains-Fensters auf das Statussymbol.
   ![Statussymbol in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Wenn du {% data variables.product.prodname_copilot %} deaktivierst, wirst du gefragt, ob du es global oder für die Sprache der aktuell bearbeiteten Datei deaktivieren möchtest. Für eine globale Deaktivierung klicke auf **Vervollständigungen deaktivieren**. Klicke alternativ auf die sprachspezifische Schaltfläche, um {% data variables.product.prodname_copilot %} für die angegebene Sprache zu deaktivieren.
   ![Deaktivieren von {% data variables.product.prodname_copilot %}, global oder für die aktuelle Sprache](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Konfigurieren erweiterter Einstellungen für {% data variables.product.prodname_copilot %}

Du kannst erweiterte Einstellungen für {% data variables.product.prodname_copilot %} in deiner JetBrains-IDE verwalten, z. B. wie deine IDE Codevervollständigungen anzeigt, und welche Sprachen du für {% data variables.product.prodname_copilot %} aktivieren oder deaktivieren möchtest.

1. Klicke in deiner JetBrains-IDE auf das Menü **Datei** und dann auf **Einstellungen**.
1. Klicke unter **Sprachen und Frameworks** auf **{% data variables.product.prodname_copilot %}** .
1. Bearbeite die Einstellungen gemäß deiner persönlichen Voreinstellungen.
   - Wenn du das Verhalten, die Darstellung von Codevorschlägen und ob automatisch nach Updates gesucht werden soll, anpassen möchtest, aktiviere oder deaktiviere die entsprechenden Kontrollkästchen.
   - Wenn du dich für automatische Updates entschieden hast, kannst du wählen, ob du stabile, aber weniger häufige Updates erhalten möchtest, oder nächtliche Updates, die weniger stabil sind. Klicke auf das Dropdownmenü **Kanal aktualisieren**, und wähle **Stabil** für stabile Updates oder **Nächtlich** für nächtliche Updates aus.
   - Aktiviere bzw. deaktiviere unter „Deaktivierte Sprachen“ die entsprechenden Kontrollkästchen, um Sprachen für {% data variables.product.prodname_copilot %} zu deaktivieren.

{% data reusables.copilot.dotcom-settings %}
