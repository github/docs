---
title: Informationen zum Schreiben und Formatieren bei GitHub
intro: GitHub kombiniert eine Syntax zur Formatierung von Text namens GitHub Flavored Markdown mit einigen einzigartigen Schreibfeatures.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Write & format on GitHub
ms.openlocfilehash: 7819ebc6bbf3ffa8696c87f82745a19c103c8134
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147860834'
---
[Markdown](http://daringfireball.net/projects/markdown/) ist eine leicht lesbare, einfach zu schreibende Syntax für die Formatierung von Nur-Text.

Wir haben einige benutzerdefinierte Funktionen hinzugefügt, um {% data variables.product.prodname_dotcom %} Flavored Markdown zu erstellen, das verwendet wird, um Fließtext und Code auf unserer Website zu formatieren.

Du kannst auch mit anderen Benutzern bei Pull-Anfragen und Problemen interagieren, indem du Features wie[@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [Problem- und PR-Verweise](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) und [Emojis](/articles/basic-writing-and-formatting-syntax/#using-emoji) verwendest.

## Symbolleiste für die Textformatierung

Jedes Kommentarfeld auf {% data variables.product.product_name %} enthält eine Symbolleiste für die Textformatierung, mit der du deinen Text formatieren kannst, ohne die Markdown-Syntax erlernen zu müssen. Zusätzlich zur Markdown-Formatierung (z. B. fettgedruckte und kursive Stile und Erstellung von Überschriften, Links und Listen) enthält die Symbolleiste {% data variables.product.product_name %}-spezifische Funktionen wie @mentions, Aufgabenlisten und Links zu Problemen und Pull-Anfragen.

{% ifversion fixed-width-font-gfm-fields %}

## Aktivieren von Schriftarten mit fester Breite im Editor

Du kannst eine Schriftart mit fester Breite in jedem Kommentarfeld auf {% data variables.product.product_name %} aktivieren. Jedes Zeichen in einer festen Breite, oder Monospace, belegt denselben horizontalen Raum, der das Bearbeiten erweiterter Markdown-Strukturen wie Tabellen und Codeschnipsel erleichtern kann.

![Screenshot des {% data variables.product.product_name %}-Kommentarfelds mit aktivierten Schriftarten mit fester Breite](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. Wähle unter "Markdown editor font preference" (Schriftarteinstellungen des Markdown-Editors) **Use a fixed-width (monospace) font when editing Markdown** (Beim Bearbeiten des Markdown-Editors die Schriftart "Feste Breite (Monospace) verwenden") aus.
  ![Screenshot des {% data variables.product.product_name %}-Kommentarfelds mit aktivierten Schriftarten mit fester Breite](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Weitere Informationsquellen

- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
- [Grundlegende Schreib- und Formatierungssyntax](/articles/basic-writing-and-formatting-syntax)
- "[Arbeiten mit erweiterter Formatierung](/articles/working-with-advanced-formatting)"
