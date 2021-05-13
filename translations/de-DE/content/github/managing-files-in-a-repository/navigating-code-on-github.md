---
title: Code-Navigation auf GitHub
intro: 'Sie können die Beziehungen in Repositorys und Repository-übergreifend durch die Code-Navigation direkt in {% data variables.product.product_name %} nachvollziehen.'
redirect_from:
  - /articles/navigating-code-on-github
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Über Code-Navigation auf {% data variables.product.prodname_dotcom %}

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

{% note %}

**Hinweis**: Code-Navigation funktioniert für aktive Branches. Wenn die Funktion für Dich aktiviert ist, jedoch keine Links zu den Definitionen der Funktionen und Methoden angezeigt werden, führe einen Push-Vorgang an den Branch durch und versuche es erneut.

{% endnote %}

### Zur Definition einer Funktion oder Methode wechseln

Du kannst zur Definition einer Funktion oder Methoden innerhalb des gleichen Repository springen, indem Du auf den Funktions- oder Methodenaufruf in einer Datei klickst.

![Registerkarte „Jump-to-definition" (Wechseln zur Definition)](/assets/images/help/repository/jump-to-definition-tab.png)

### Alle Verweise einer Funktion oder Methode suchen

Du findest alle Referenzen für eine Funktion oder Methode innerhalb eines Repositorys, indem Du auf den Funktions- oder Methodenaufruf in einer Datei klickst und dann auf die Registerkarte **Referenzen** klickst.

![Registerkarte „Find all references" (Suche nach allen Referenzen)](/assets/images/help/repository/find-all-references-tab.png)

### Weiterführende Informationen
- „[Code durchsuchen](/github/searching-for-information-on-github/searching-code)“
