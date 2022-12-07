---
title: Verwenden von Submodulen mit GitHub Pages
intro: 'Du kannst Submodule in {% data variables.product.prodname_pages %} nutzen und damit andere Projekte in den Code deiner Website einbinden.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880798'
---
Wenn das Repository für Ihre {% data variables.product.prodname_pages %}-Website Submodule enthält, wird deren Inhalt automatisch beim Erstellen der Website abgerufen.

Du kannst nur Submodule verwenden, die auf öffentliche Repositorys verweisen, da der {% data variables.product.prodname_pages %}-Server nicht auf private Repositorys zugreifen kann.

Verwende die schreibgeschützte URL `https://` für deine Submodule, geschachtelte Submodule eingeschlossen. Du kannst diese Änderung in deiner _.gitmodules_-Datei vornehmen.

## Weiterführende Themen

- [Git Tools – Submodule](https://git-scm.com/book/en/Git-Tools-Submodules) aus dem _Pro Git_-Buch
- [Behandeln von Jekyll-Buildfehlern für {% data variables.product.prodname_pages %}-Websites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
