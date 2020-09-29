---
title: Code nach exakten Übereinstimmungen durchsuchen
intro: 'Du kannst Code für exakte Übereinstimmungen in Repositorys auf {% data variables.product.prodname_dotcom %} durchsuchen.'
redirect_from:
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
permissions: Personen mit Leseberechtigung auf ein Repository können die Repository-Dateien auf exakte Übereinstimmungen durchsuchen.
versions:
  free-pro-team: '*'
---

{% note %}

{% data reusables.search.exact-match-beta %} Um Zugriff auf die Beta-Version zu erhalten, [tritt der Warteliste bei](https://github.com/features/code-search-exact-match/signup).

{% endnote %}

### Über die Codesuche nach exakten Übereinstimmungen

{% data reusables.search.exact-match %}

Standardmäßig wird bei Suche nach exakten Übereinstimmungen sowohl Gross- und Kleinschreibung wie auch Symbol-Sensitivität beachtet, und die Resultate werden keine teilweisen Übereinstimmungen oder normalisierte Grammatik enthalten. Beispielsweise wird die Suche nach `let ReactDOM*` nur genau `let ReactDOM*` zurückgeben.

### Code nach exakten Übereinstimmungen durchsuchen

{% note %}

Die Suche nach exakten Übereinstimmungen in Dateien in einem Repository funktioniert nur mit indizierten Repositorys für den Beta-Release.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. Gib im Suchfeld die Zeichenkette ein, die Du finden möchtest. ![Suchzeichenfolge für exakte Übereinstimmung](/assets/images/help/search/exact-match-search-string.png)
3. Klicke optional auf das Dropdownmenü **Options** (Optionen), um Deine Suche einzugrenzen. ![Dropdownmenü für Suche nach exakter Übereinstimmung](/assets/images/help/search/exact-match-options.png)
4. Drücke <kbd>Enter</kbd> (Eingabetaste) oder <kbd>Return</kbd> (Return-Taste) auf Deiner Tastatur.
5. Klicke in der Ergebnisliste auf die Datei.

### Weiterführende Informationen

- „[Code durchsuchen](/github/searching-for-information-on-github/searching-code)“
- „[In Code navigieren auf {% data variables.product.product_name %}](/github/managing-files-in-a-repository/navigating-code-on-github)"
