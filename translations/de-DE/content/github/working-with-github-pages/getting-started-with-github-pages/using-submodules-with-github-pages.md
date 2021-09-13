---
title: Using submodules with GitHub Pages
intro: 'Sie können Submodule in {% data variables.product.prodname_pages %} nutzen und damit andere Projekte in den Code Ihrer Website einbinden.'
redirect_from:
  - /articles/using-submodules-with-pages/
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Seiten
---
Wenn das Repository für Ihre {% data variables.product.prodname_pages %}-Website Submodule enthält, wird deren Inhalt automatisch beim Erstellen der Website abgerufen.

Sie können nur Submodule verwenden, die auf öffentliche Repositorys verweisen, da der {% data variables.product.prodname_pages %}-Server nicht auf private Repositorys zugreifen kann.

Verwende die schreibgeschützte `https://`-URL für Submodule, einschließlich verschachtelter Submodule. Du kannst diese Änderung in Deiner _.gitmodules_-Datei vornehmen.

### Weiterführende Informationen

- „[Git-Tools – Submodule](https://git-scm.com/book/en/Git-Tools-Submodules)“ im _Pro Git_-Buch
- „[Jekyll-Build-Fehler für {% data variables.product.prodname_pages %}-Websites beheben](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)“
