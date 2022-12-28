---
title: Erste Schritte mit GitHub Copilot in einer JetBrains-IDE
shortTitle: JetBrains IDE
intro: 'Erfahre, wie du {% data variables.product.prodname_copilot %} in einer JetBrains-IDE installierst, um beim Schreiben von Kommentaren und Code Vorschläge zu erhalten.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ae879b5834007a34ab0e3a7a45dcae4c1e31bc4f
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185059'
---
{% data reusables.copilot.copilot-cta-button %}

## Informationen zu {% data variables.product.prodname_copilot %} und JetBrains-IDEs

{% data reusables.copilot.procedural-intro %}

Wenn du die JetBrains-IDE verwendest, kannst du Vorschläge aus {% data variables.product.prodname_copilot %} direkt im Editor anzeigen und übernehmen. Diese Anleitung zeigt die Verwendung von {% data variables.product.prodname_copilot %} innerhalb einer JetBrains-IDE für macOS, Windows oder Linux.

## Voraussetzungen

{% data reusables.copilot.jetbrains-ides %}

## Installieren der {% data variables.product.prodname_copilot %}-Erweiterung in deiner JetBrains-IDE

Um {% data variables.product.prodname_copilot %} in einer JetBrains-IDE zu verwenden, musst du das {% data variables.product.prodname_copilot %}-Plug-In installieren. Das folgende Verfahren führt dich durch die Installation des {% data variables.product.prodname_copilot %}-Plug-Ins in IntelliJ IDEA. Schritte zum Installieren des Plug-Ins in einer anderen unterstützten IDE können sich unterscheiden.

1. Klicke in deiner JetBrains-IDE unter dem Menü **Datei** für Windows oder dem Namen deiner IDE für Mac (z. B. **PyCharm** oder **IntelliJ**) auf **Einstellungen** für Windows oder **Voreinstellungen** für Mac.
2. Klicke im linken Menü des Dialogfelds **Einstellungen/Voreinstellungen** auf **Plug-Ins**.
3. Klicke oben im Dialogfeld **Einstellungen/Voreinstellungen** auf **Marketplace**. Suche in der Suchleiste nach **{% data variables.product.prodname_copilot %}** , und klicke dann auf **Installieren**.
   ![Screenshot der Marketplace-Suche](/assets/images/help/copilot/jetbrains-marketplace.png)
1. Klicke nach der Installation von {% data variables.product.prodname_copilot %} auf **IDE neu starten**.
1. Klicke nach dem Neustart deiner JetBrains-IDE auf das Menü **Extras**. Klicke auf **{% data variables.product.prodname_copilot %}** und dann auf **Anmelden bei {% data variables.product.prodname_dotcom %}** . 
    ![Screenshot des Menüs „Extras“ von JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. Um den Gerätecode zu kopieren und das Geräteaktivierungsfenster zu öffnen, klicke im Dialogfeld „Anmelden bei {% data variables.product.prodname_dotcom %}“ auf **Kopieren und öffnen**.
    ![Screenshot von „Kopieren und öffnen“ für den Gerätecode](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Ein Geräteaktivierungsfenster wird in deinem Browser geöffnet. Füge den Gerätecode ein, und klicke dann auf **Weiter**.

   - Um den Code in Windows oder Linux einzufügen, drücke<kbd>STRG</kbd>+<kbd>V</kbd>.
   - Um den Code in macOS einzufügen, drücke <kbd>BEFEHLSTASTE</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} fordert die notwendigen Berechtigungen für {% data variables.product.prodname_copilot %} an. Um diese Berechtigungen zu genehmigen, klicke auf **{% data variables.product.prodname_copilot %}-Plug-In autorisieren**.
1. Nach Genehmigung der Berechtigungen zeigt deine JetBrains-IDE eine Bestätigung an. Klicke zum Verwenden von {% data variables.product.prodname_copilot %} auf **OK**.
   ![Screenshot der Bestätigung von JetBrains-IDE-Berechtigungen](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## Anzeigen deines ersten Vorschlags

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Die folgenden Beispiele sind in Java geschrieben, andere Sprachen funktionieren jedoch ähnlich.

{% data reusables.copilot.create-java-file %}
1. Erstelle in der Java-Datei eine Klasse durch Eingabe von `class Test`.
   {% data variables.product.prodname_copilot %} schlägt automatisch einen ganzen Klassentext in ausgegrautem Text vor, wie unten gezeigt. Der genaue Vorschlag kann variieren.
   ![Screenshot des Java-Klassentextvorschlags](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. Um {% data variables.product.prodname_copilot %} aufzufordern, einen Funktionstext vorzuschlagen, gib die folgende Zeile unterhalb der Klammer der `main`-Funktion ein. Der genaue Vorschlag kann variieren.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Screenshot des Java-Funktionstextvorschlags](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} versucht, Kontext und Stil deines Codes zu treffen. Du kannst den vorgeschlagenen Code immer bearbeiten.

## Anzeigen alternativer Vorschläge

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Um {% data variables.product.prodname_copilot %} aufzufordern, einen Vorschlag anzuzeigen, gib die folgende Zeile in die Java-Datei ein.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | OS | Nächsten Vorschlag anzeigen | Vorherigen Vorschlag anzeigen |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>ALT</kbd>+<kbd>]</kbd> | <kbd>ALT</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>ALT</kbd>+<kbd>]</kbd> | <kbd>ALT</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Anzeigen mehrerer Vorschläge auf einer neuen Registerkarte

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Um {% data variables.product.prodname_copilot %} aufzufordern, einen Vorschlag anzuzeigen, gib die folgende Zeile in die Java-Datei ein.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Öffne eine neue Registerkarte mit mehreren zusätzlichen Vorschlägen.
    - Drücke unter macOS <kbd>Befehlstaste</kbd>+<kbd>Umschalttaste</kbd>+<kbd>A</kbd>, und klicke dann auf **GitHub Copilot öffnen**, oder drücke <kbd>Befehlstaste</kbd>+<kbd>Umschalttaste</kbd>+<kbd>\</kbd>, um die neue Registerkarte sofort zu öffnen.
    - Drücke unter Windows oder Linux <kbd>STRG</kbd>+<kbd>EINGABETASTE</kbd>, und klicke dann auf **GitHub Copilot öffnen**.
  ![Screenshot des Dialogfelds zum Öffnen von Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Um einen Vorschlag zu akzeptieren, klicke oberhalb des Vorschlags auf **Lösung annehmen**. Um alle Vorschläge abzulehnen, schließe die Registerkarte.

## Generieren von Codevorschlägen aus Kommentaren

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Gib die folgenden Zeilen ein, um {% data variables.product.prodname_copilot %} aufzufordern, eine Implementierung einer Funktion in der Java-Datei vorzuschlagen.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Screenshot des Java-Funktionstextvorschlags](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Aktivieren und Deaktivieren von {% data variables.product.prodname_copilot %}

Du kannst {% data variables.product.prodname_copilot %} für alle Sprachen oder einzelne Sprachen aktivieren oder deaktivieren. Das Statussymbol von {% data variables.product.prodname_copilot %} im unteren Bereich deines JetBrains-IDE-Fensters gibt an, ob {% data variables.product.prodname_copilot %} aktiviert oder deaktiviert ist. Falls aktiviert, ist das Symbol hervorgehoben. Falls deaktiviert, ist das Symbol abgeblendet.

1. Um {% data variables.product.prodname_copilot %} zu aktivieren oder zu deaktivieren, klicke im unteren Panel des JetBrains-Fensters auf das Statussymbol.
   ![Screenshot des Statussymbols in IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Wenn du {% data variables.product.prodname_copilot %} deaktivierst, wirst du gefragt, ob du es global oder für die Sprache der aktuell bearbeiteten Datei deaktivieren möchtest.

   - Um Vorschläge von {% data variables.product.prodname_copilot %} global zu deaktivieren, klicke auf **Vervollständigungen deaktivieren**.
   - Wenn du Vorschläge von {% data variables.product.prodname_copilot %} für die angegebene Sprache deaktivieren möchtest, klicke auf **Vervollständigungen für _SPRACHE_ deaktivieren**.
   ![Screenshot der Option zum globalen Deaktivieren von {% data variables.product.prodname_copilot %} oder Deaktivieren für die aktuelle Sprache](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Weitere Informationsquellen

- [Die {% data variables.product.prodname_copilot %}-Website](https://copilot.github.com/)
- [Informationen zu {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
