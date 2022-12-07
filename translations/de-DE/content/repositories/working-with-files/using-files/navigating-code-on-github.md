---
title: Code-Navigation auf GitHub
intro: 'Du kannst die Beziehungen in Repositorys und Repository-übergreifend durch die Code-Navigation direkt in {% data variables.product.product_name %} nachvollziehen.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164163'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## Über Code-Navigation auf {% data variables.product.prodname_dotcom %}

Die Codenavigation hilft dir dabei, Code zu lesen, in Code zu navigieren und den Code zu verstehen. Dazu kannst du Definitionen einer benannten Entität, die einem Verweis auf diese Entität entsprechen, sowie Verweise, die einer Definition der Entität entsprechen, anzeigen und verknüpfen.

![Anzeige der Codenavigation](/assets/images/help/repository/code-navigation-popover.png)

Die Codenavigation verwendet die Open Source-Bibliothek [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Die folgenden Sprachen und Navigationsstrategien werden unterstützt:

| Sprache   | Suchbasierte Codenavigation | Präzise Codenavigation |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


Du brauchst dein Repository nicht zu konfigurieren, um die Codenavigation aktivieren zu können. Bei den unterstützten Sprachen werden Informationen der suchbasierten und präzisen Codenavigation in allen Repositorys automatisch extrahiert. Außerdem kannst du zwischen den beiden unterstützten Codenavigationsansätzen wechseln, wenn deineProgrammiersprache von beiden unterstützt wird.

{% data variables.product.prodname_dotcom %} hat zwei Codenavigationsansätze auf Basis der Open Source-Bibliothek [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) und [`stack-graphs`](https://github.com/github/stack-graphs) entwickelt:
 - Suchbasiert: Alle Definitionen und Verweise in einem Repository werden durchsucht, um Entitäten mit einem bestimmten Namen zu finden
 - Präzise: Definitionen und Verweise werden basierend auf dem Satz von Klassen, Funktionen und importierten Definitionen jederzeit in deinem Code aufgelöst

Weitere Informationen zu diesen Ansätzen findest du unter [Präzise und suchbasierte Navigation](#precise-and-search-based-navigation).

Bei zukünftigen Versionen wird die *präzise Codenavigation*, ein Codenavigationsansatz, der genauere Ergebnisse liefern kann, für weitere Sprachen verfügbar gemacht.

## Zur Definition einer Funktion oder Methode wechseln

Du kannst zur Definition einer Funktion oder Methoden innerhalb des gleichen Repository springen, indem Du auf den Funktions- oder Methodenaufruf in einer Datei klickst.

![Registerkarte „Jump-to-definition" (Wechseln zur Definition)](/assets/images/help/repository/jump-to-definition-tab.png)

## Alle Verweise einer Funktion oder Methode suchen

Du findest alle Referenzen für eine Funktion oder Methode innerhalb eines Repositorys, indem Du auf den Funktions- oder Methodenaufruf in einer Datei und dann auf die Registerkarte **Verweise** klickst.

![Registerkarte „Find all references" (Suche nach allen Referenzen)](/assets/images/help/repository/find-all-references-tab.png)

## Präzise und suchbasierte Navigation

Bestimmte, von {% data variables.product.prodname_dotcom %} unterstützte Sprachen haben Zugriff auf die *präzise Codenavigation*, die einen Algorithmus (auf Grundlage der Open Source-Bibliothek [`stack-graphs`](https://github.com/github/stack-graphs)) verwendet, der Definitionen und Verweise basierend auf dem Satz von Klassen, Funktionen und importierten Definitionen auflöst, die an jedem Punkt in deinem Code sichtbar sind. Bei anderen Sprachen wird die *suchbasierte Codenavigation* verwendet, die alle Definitionen und Verweise in einem Repository durchsucht, um Entitäten mit einem bestimmten Namen zu finden. Beide Strategien sind effektiv bei der Suche nach Ergebnissen und vermeiden mit großer Sicherheit ungeeignete Ergebnisse wie Kommentare. Die präzise Codenavigation kann jedoch vor allem bei Repositorys, die mehrere Methoden oder Funktionen mit demselben Namen enthalten, genauere Ergebnisse erzielen.

Wenn bei der präzisen Codenavigation nach einer Abfrage nicht die erwarteten Ergebnisse angezeigt werden, kannst du im angezeigten Popover auf den Link „suchbasiert“ klicken, um die suchbasierte Navigation auszuführen.

![Link zur suchbasierten Codenavigation](/assets/images/help/repository/search-based-code-navigation-link.png)

Wenn die genauen Ergebnisse ungenau erscheinen, kannst du eine Supportanfrage einreichen.

## Repositoryübergreifende präzise Codenavigation

Die repositoryübergreifende Codenavigation steht für Sprachen zur Verfügung, die von der präzisen Codenavigation und vom Abhängigkeitsdiagramm unterstützt werden. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph). Mit der repositoryübergreifenden Codenavigation kannst du zur Definition von Funktionen oder Variablen springen, die in von deinem Projekt importierten Abhängigkeiten definiert sind, wenn diese Abhängigkeit ein Repository ist, das über {% data variables.product.prodname_dotcom %} gehostet wird. Die repositoryübergreifende Codenavigation unterstützt derzeit keine Suchabfragen für alle Verweise.

![Screenshot der repositoryübergreifenden Codenavigation](/assets/images/help/repository/cross-repository-code-navigation.png)

## Problembehandlung bei der Codenavigation

Die Codenavigation ist zwar für dich aktiviert, es werden aber keine Links zu den Definitionen von Funktionen und Methoden angezeigt:
- Die Codenavigation funktioniert nur bei aktiven Branches. Drücke auf den Branch, und versuche es erneut.
- Die Codenavigation funktioniert nur für Repositorys mit weniger als 100.000 Dateien.

## Weiterführende Themen
- [Durchsuchen von Code](/github/searching-for-information-on-github/searching-code)
