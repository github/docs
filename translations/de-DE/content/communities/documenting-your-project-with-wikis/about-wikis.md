---
title: Informationen zu Wikis
intro: 'Du kannst die Dokumentation für dein Repository in einem Wiki verwalten, damit andere dein Projekt nutzen und daran mitwirken können.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 94800761c60bb984745e582e2c9691e294e7a90d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529623'
---
Jedes Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} ist mit einem Abschnitt zum Hosten von Dokumentation (als Wiki bezeichnet) ausgestattet. Du kannst das Wiki deines Repositorys verwenden, um ausführliche Informationen über dein Projekt auszutauschen, beispielsweise über seine Verwendung, seine Gestaltung und seine Kernprinzipien. Eine README-Datei zeigt schnell, was dein Projekt bezweckt, wohingegen du ein Wiki verwenden kannst, um zusätzliche Dokumentation bereitzustellen. Weitere Informationen findest du unter [Informationen zu README-Dateien](/articles/about-readmes).

Mit Wikis kannst du Inhalte wie überall sonst auf {% data variables.product.product_name %} verfassen. Weitere Informationen findest du unter [Erste Schritte beim Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github). Wir verwenden [unsere Open-Source Markupbibliothek](https://github.com/github/markup), um verschiedene Formate in HTML zu konvertieren. So kannst du auswählen, ob du in Markdown oder einem beliebigen anderen unterstützten Format schreiben möchtest. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}Wenn du ein Wiki in einem öffentlichen Repository erstellst, steht das Wiki für {% ifversion ghes %}jeden zur Verfügung, der auf {% data variables.product.product_location %} zugreifen kann{% else %}die Öffentlichkeit zur Verfügung{% endif %}. {% endif %}Wenn du ein Wiki in einem privaten{% ifversion ghec or ghes %} oder internen{% endif %} Repository erstellst, ist das Wiki nur für {% ifversion fpt or ghes or ghec %}Personen{% elsif ghae %}Unternehmensmitglieder{% endif %} mit Zugriff auf das Repository zugänglich. Weitere Informationen findest du unter [Festlegen der Sichtbarkeit des Repositorys](/articles/setting-repository-visibility).

Du kannst Wikis direkt auf {% data variables.product.product_name %} bearbeiten, oder du kannst Wiki-Dateien lokal bearbeiten. Standardmäßig können nur Personen mit Schreibzugriff auf dein Repository Änderungen an Wikis vornehmen. Du kannst jedoch jedem auf {% data variables.product.product_location %} erlauben, an einem Wiki in einem {% ifversion ghae %}internen{% else %}öffentlichen{% endif %} Repository mitzuwirken. Weitere Informationen findest du unter [Ändern von Zugriffsberechtigungen für Wikis](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis).

{% note %}

**Hinweis**: Durch Suchmaschinen wird der Inhalt von Wikis nicht indiziert. Damit deine Inhalte von Suchmaschinen indiziert werden können, kannst du [{% data variables.product.prodname_pages %}](/pages) in einem öffentlichen Repository verwenden.

{% endnote %}

## Weiterführende Themen

- [Hinzufügen oder Bearbeiten von Wiki-Seiten](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)
- [Erstellen einer Fußzeile oder Randleiste für dein Wiki](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)
- [Bearbeiten von Wiki-Inhalten](/communities/documenting-your-project-with-wikis/editing-wiki-content)
- [Anzeigen des Änderungsverlaufs eines Wikis](/articles/viewing-a-wiki-s-history-of-changes)
- [Durchsuchen von Wikis](/search-github/searching-on-github/searching-wikis)
