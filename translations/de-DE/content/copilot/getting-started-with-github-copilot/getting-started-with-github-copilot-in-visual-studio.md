---
title: Erste Schritte mit GitHub Copilot in Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Erfahre, wie du {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} installierst, um beim Schreiben von Kommentaren und Code Vorschläge zu erhalten.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 353095b0b0490cd12da8d853754b524431605819
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185130'
---
{% data reusables.copilot.copilot-cta-button %}

## Informationen zu {% data variables.product.prodname_copilot %} und Visual Studio

{% data reusables.copilot.procedural-intro %}

Wenn du {% data variables.product.prodname_vs %} verwendest, kannst du Vorschläge aus {% data variables.product.prodname_copilot %} direkt im Editor anzeigen und übernehmen. Diese Anleitung zeigt die Verwendung von {% data variables.product.prodname_copilot %} innerhalb von {% data variables.product.prodname_vs %} für Windows.

## Voraussetzungen

Um {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} zu verwenden, muss {% data variables.product.prodname_vs %} 2022 17.2 oder höher installiert sein. Weitere Informationen findest du in der Dokumentation zu [Visual Studio IDE](https://visualstudio.microsoft.com/vs/).

{% note %}

**Hinweis**: {% data variables.product.prodname_copilot %} ist derzeit nicht für die Verwendung mit Visual Studio für Mac verfügbar.

{% endnote %}

## Installation der {% data variables.product.prodname_vs %}-Erweiterung

Um {% data variables.product.prodname_copilot %} zu verwenden, musst du zuerst die {% data variables.product.prodname_vs %}-Erweiterung installieren.
1. Klicke in der Visual Studio-Symbolleiste auf **Erweiterungen** und dann auf **Erweiterungen verwalten**.
   ![Screenshot der Visual Studio-Symbolleiste](/assets/images/help/copilot/visual-studio-toolbar.png)
1. Klicke im Fenster „Erweiterungen verwalten“ auf **Visual Studio Marketplace**, suche nach der {% data variables.product.prodname_copilot %}-Erweiterung, und klicke dann auf **Herunterladen**.
   ![Screenshot der GitHub Copilot-Erweiterung für Visual Studio mit hervorgehobener Downloadschaltfläche](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Schließe das Fenster „Erweiterungen verwalten“, und starte {% data variables.product.prodname_vs %} neu.
1. Wenn du überprüfen möchtest, ob {% data variables.product.prodname_copilot %} installiert und aktiviert ist, gehe zurück zu **Erweiterungen verwalten**, klicke auf **Installiert**, um deine derzeit installierten Erweiterungen anzuzeigen, und dann auf **{% data variables.product.prodname_copilot %}** , um Statusinformationen zu erhalten.
  ![Screenshot der installierten Erweiterungen in Visual Studio mit Hervorhebung von GitHub Copilot](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Öffne ein Projekt in {% data variables.product.prodname_vs %}, oder erstelle ein neues Projekt. 
1. Um den Geräteaktivierungscode zu kopieren, klicke im Dialogfeld „Microsoft {% data variables.product.prodname_vs %}“ auf **OK**.
   ![Screenshot des Dialogfelds „Microsoft {% data variables.product.prodname_vs %}“](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Ein Geräteaktivierungsfenster wird in deinem Browser geöffnet. Füge den Gerätecode ein, und klicke dann auf **Weiter**.

   - Um den Code in Windows oder Linux einzufügen, drücke<kbd>STRG</kbd>+<kbd>V</kbd>.
   - Um den Code in macOS einzufügen, drücke <kbd>BEFEHLSTASTE</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} fordert die notwendigen Berechtigungen für {% data variables.product.prodname_copilot %} an. Um diese Berechtigungen zu genehmigen, klicke auf **{% data variables.product.prodname_copilot %}-Plug-In autorisieren**.
1. Nachdem du die Berechtigungen genehmigt hast, zeigt {% data variables.product.prodname_vs %} eine Bestätigung an.
   ![Screenshot der Bestätigung von {% data variables.product.prodname_vs %}-Berechtigungen](/assets/images/help/copilot/vs-confirmation.png)

## Anzeigen deines ersten Vorschlags

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} Die folgenden Beispiele sind in C# geschrieben, andere Sprachen funktionieren jedoch ähnlich.

{% data reusables.copilot.create-c-file %}
1. Gib in der C#-Datei die folgende Funktionssignatur ein. {% data variables.product.prodname_copilot %} schlägt automatisch einen ganzen Funktionstext in ausgegrautem Text vor, wie unten gezeigt. Der genaue Vorschlag kann variieren.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Screenshot eines ersten Vorschlags von Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## Anzeigen alternativer Vorschläge
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. Gib in der C#-Datei die folgende Funktionssignatur ein. {% data variables.product.prodname_copilot %} zeigt dir einen Vorschlag an.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Wenn alternative Vorschläge verfügbar sind, kannst du <kbd>ALT</kbd>+<kbd>]</kbd> (oder <kbd>ALT</kbd>+<kbd>[</kbd>) drücken, um diese Alternativen anzuzeigen.
1. Optional kannst du mit dem Mauszeiger auf den Vorschlag zeigen, um die {% data variables.product.prodname_copilot %}-Befehlspalette zur Auswahl von Vorschlägen anzuzeigen.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Generieren von Codevorschlägen aus Kommentaren

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. Gib in der C#-Datei den folgenden Kommentar ein. {% data variables.product.prodname_copilot %} schlägt eine Implementierung der Funktion vor.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Weitere Informationsquellen

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
