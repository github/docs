---
title: Code-Navigation auf GitHub
intro: 'Sie können die Beziehungen in Repositorys und Repository-übergreifend durch die Code-Navigation direkt in {% data variables.product.product_name %} nachvollziehen.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
---

<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported languages. -->

## Über Code-Navigation auf {% data variables.product.prodname_dotcom %}

Code navigation uses the open source library [`tree-sitter`](https://github.com/tree-sitter/tree-sitter). Die folgenden Sprachen werden unterstützt:
- C#
- CodeQL
- Go
- Java
- JavaScript
- PHP
- Python
- Ruby
- TypeScript

## Zur Definition einer Funktion oder Methode wechseln

Du kannst zur Definition einer Funktion oder Methoden innerhalb des gleichen Repository springen, indem Du auf den Funktions- oder Methodenaufruf in einer Datei klickst.

![Registerkarte „Jump-to-definition" (Wechseln zur Definition)](/assets/images/help/repository/jump-to-definition-tab.png)

## Alle Verweise einer Funktion oder Methode suchen

Du findest alle Referenzen für eine Funktion oder Methode innerhalb eines Repositorys, indem Du auf den Funktions- oder Methodenaufruf in einer Datei klickst und dann auf die Registerkarte **Referenzen** klickst.

![Registerkarte „Find all references" (Suche nach allen Referenzen)](/assets/images/help/repository/find-all-references-tab.png)

## Troubleshooting code navigation

If code navigation is enabled for you but you don't see links to the definitions of functions and methods:
- Code navigation only works for active branches. Push to the branch and try again.
- Code navigation only works for repositories with less than 100,000 files.

## Weiterführende Informationen
- „[Code durchsuchen](/github/searching-for-information-on-github/searching-code)“
