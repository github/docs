---
title: Erste Schritte mit GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Erfahre, wie du {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} installierst, um beim Schreiben von Kommentaren und Code Vorschläge zu erhalten.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 63c670a7cd5263057f79b7761a960854ecac2dd6
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185133'
---
{% data reusables.copilot.copilot-cta-button %}

## Informationen zu {% data variables.product.prodname_copilot %} und {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

Wenn du {% data variables.product.prodname_vscode %} verwendest, kannst du Vorschläge aus {% data variables.product.prodname_copilot %} direkt im Editor anzeigen und übernehmen. Diese Anleitung zeigt die Verwendung von {% data variables.product.prodname_copilot %} innerhalb von {% data variables.product.prodname_vscode %} für macOS, Windows oder Linux.

## Voraussetzungen

Um {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %} zu verwenden, muss {% data variables.product.prodname_vscode %} installiert sein. Weitere Informationen findest du auf der [Downloadseite zu {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/Download).

## Installation der {% data variables.product.prodname_vscode %}-Erweiterung

Um {% data variables.product.prodname_copilot %} zu verwenden, musst du zuerst die {% data variables.product.prodname_vscode %}-Erweiterung installieren.

1. Wechsele im {% data variables.product.prodname_vscode %}-Marketplace zur Seite [{% data variables.product.prodname_copilot %}-Erweiterung](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), und klicke auf **Installieren**.
   ![Installieren der {% data variables.product.prodname_copilot %}-Erweiterung {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Ein Popupfenster mit der Abfrage, ob {% data variables.product.prodname_vscode %} geöffnet werden soll, wird angezeigt. Klicke auf **{% data variables.product.prodname_vscode %} öffnen**.
1. Klicke auf der Registerkarte „Erweiterung: {% data variables.product.prodname_copilot %}“ in {% data variables.product.prodname_vscode %} auf **Installieren**.
   ![Schaltfläche „Installieren“ in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Wenn du {% data variables.product.prodname_vscode %} noch nicht in deinem {% data variables.product.prodname_dotcom %}-Konto autorisiert hast, wirst du aufgefordert, dich bei {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %} anzumelden.
   - Wenn du zuvor {% data variables.product.prodname_vscode %} für dein Konto auf {% data variables.product.prodname_dotcom %} autorisiert hast, wird {% data variables.product.prodname_copilot %} automatisch autorisiert.
   ![Screenshot des {% data variables.product.prodname_vscode %}-Autorisierungsbildschirms](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In deinem Browser wird {% data variables.product.prodname_dotcom %} die notwendigen Berechtigungen für {% data variables.product.prodname_copilot %} anfordern. Um diese Berechtigungen zu genehmigen, klicke auf **{% data variables.product.prodname_vscode %} autorisieren**.
1. Klicke in {% data variables.product.prodname_vscode %} im Dialogfeld „{% data variables.product.prodname_vscode %}“ auf **Öffnen**, um die Authentifizierung zu bestätigen.
   

## Anzeigen deines ersten Vorschlags

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Die folgenden Beispiele sind in JavaScript enthalten, andere Sprachen funktionieren jedoch ähnlich.

{% data reusables.copilot.create-js-file %}
1. Gib in der JavaScript-Datei den folgenden Funktionsheader ein. {% data variables.product.prodname_copilot %} schlägt automatisch einen ganzen Funktionstext in ausgegrautem Text vor, wie unten gezeigt. Der genaue Vorschlag kann variieren.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Screenshot eines ersten Vorschlags {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Anzeigen alternativer Vorschläge

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. Gib in der JavaScript-Datei den folgenden Funktionsheader ein. {% data variables.product.prodname_copilot %} zeigt dir einen Vorschlag an.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | Nächsten Vorschlag anzeigen | Vorherigen Vorschlag anzeigen |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) oder ALT</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) oder ALT</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>ALT</kbd>+<kbd>]</kbd>|<kbd>ALT</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>ALT</kbd>+<kbd>]</kbd>|<kbd>ALT</kbd>+<kbd>[</kbd>|
1. Alternativ kannst du mit dem Mauszeiger auf den Vorschlag zeigen, um die {% data variables.product.prodname_copilot %}-Befehlspalette zur Anzeige von Vorschlägen auszuwählen.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Anzeigen mehrerer Vorschläge auf einer neuen Registerkarte

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. Gib in der JavaScript-Datei den folgenden Funktionsheader ein. {% data variables.product.prodname_copilot %} zeigt dir einen Vorschlag an.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. Um eine neue Registerkarte mit mehreren zusätzlichen Optionen zu öffnen, drücke <kbd>STRG</kbd>+<kbd>EINGABETASTE</kbd>.
1. Um einen Vorschlag zu akzeptieren, klicke oberhalb des Vorschlags auf **Lösung annehmen**. Um alle Vorschläge abzulehnen, schließe die Registerkarte.

## Generieren von Codevorschlägen aus Kommentaren

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. Gib in der JavaScript-Datei den folgenden Kommentar ein. {% data variables.product.prodname_copilot %} schlägt eine Implementierung der Funktion vor.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Verwenden eines Frameworks

Du kannst auch mit {% data variables.product.prodname_copilot %} Vorschläge für APIs und Frameworks generieren. Im folgenden Beispiel wird mit {% data variables.product.prodname_copilot %} ein einfacher Express-Server erstellt, der die aktuelle Uhrzeit zurückgibt.

{% data reusables.copilot.create-js-file %}
1. Gib in der JavaScript-Datei den folgenden Kommentar ein, und drücke dann die <kbd>EINGABETASTE</kbd>. {% data variables.product.prodname_copilot %} schlägt eine Implementierung der Express-App vor.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. Um jede Zeile zu akzeptieren, drücke die <kbd>TABULATORTASTE</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Weitere Informationsquellen

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
