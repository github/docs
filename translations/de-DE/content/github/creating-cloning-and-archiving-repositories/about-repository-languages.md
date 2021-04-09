---
title: Informationen zu Repository-Sprachen
intro: Die Dateien und Verzeichnisse innerhalb eines Repositorys bestimmen die Sprachen des Repositorys. Du kannst die Sprachen eines Repositorys anzeigen, um Dir einen schnellen Überblick über das Repository zu verschaffen.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-my-favorite-language-recognized/
  - /articles/my-repo-is-marked-as-the-wrong-language/
  - /articles/why-isn-t-sql-recognized-as-a-language/
  - /articles/why-isn-t-my-favorite-language-recognized-by-github/
  - /articles/about-repository-languages
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% data variables.product.product_name %} uses the open source [Linguist library](https://github.com/github/linguist) to
determine file languages for syntax highlighting and repository statistics. Language statistics will update after you push changes to your default branch.

Einige Dateien sind schwer zu identifizieren, und manchmal enthalten Projekte mehr Bibliotheks- und Anbieterdateien als eigenen Primärcode. Wenn Du falsche Ergebnisse erhältst, lies bitte den [Leitfaden zur Fehlerbehebung](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) für Linguist.

### Markup-Sprachen

Markup-Sprachen werden in HTML gerendert und inline mit unserer Open-Source [Markup-Bibliothek](https://github.com/github/markup) angezeigt. Derzeit akzeptieren wir keine neuen Markup-Sprachen für die Anzeige innerhalb von {% data variables.product.product_name %}. Wir verwalten jedoch aktiv unsere aktuellen Markup-Sprachen. Wenn Du auf ein Problem stößt, [erstelle bitte einen Issue](https://github.com/github/markup/issues/new).
