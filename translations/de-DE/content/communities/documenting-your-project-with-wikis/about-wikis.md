---
title: Informationen zu Wikis
intro: 'Du kannst die Dokumentation für Dein Repository in einem Wiki verwalten, damit andere Dein Projekt nutzen und daran mitwirken können.'
redirect_from:
  - /articles/about-github-wikis/
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Community
---

Jedes {% data variables.product.product_name %}-Repository enthält einen Abschnitt für das Verwalten von Dokumentationen, ein so genanntes Wiki. Du kannst das Wiki Deines Repositorys verwenden, um ausführliche Informationen über Dein Projekt auszutauschen, beispielsweise über seine Verwendung, seine Gestaltung und seine Kernprinzipien. Eine README-Datei zeigt schnell, was Dein Projekt bezweckt, wohingegen Du ein Wiki verwenden kannst, um zusätzliche Dokumentation bereitzustellen. Weitere Informationen finden Sie unter „[Informationen zu README-Dateien](/articles/about-readmes/)“.

Mit Wikis können Sie Inhalte wie überall sonst auf {% data variables.product.product_name %} verfassen. Weitere Informationen findest Du unter „[Erste Schritte zum Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)“. Wir verwenden [unsere Open-Source Markup-Bibliothek](https://github.com/github/markup), um verschiedene Formate in HTML zu konvertieren, sodass Du entscheiden kannst, in Markdown oder jedem anderen unterstützten Format zu schreiben.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}If you create a wiki in a public repository, the wiki is available to {% if enterpriseServerVersions contains currentVersion %}anyone with access to {% data variables.product.product_location %}{% else %}the public{% endif %}. {% endif %}If you create a wiki in an internal or private repository, {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}people{% elsif currentVersion == "github-ae@latest" %}enterprise members{% endif %} with access to the repository can also access the wiki. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility).“

Sie können Wikis direkt auf {% data variables.product.product_name %} bearbeiten, oder Sie können Wiki-Dateien lokal bearbeiten. By default, only people with write access to your repository can make changes to wikis, although you can allow everyone on {% data variables.product.product_location %} to contribute to a wiki in {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} repository. Weitere Informationen findest Du unter „[Zugriffsberechtigungen für Wikis ändern](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)“.

{% note %}

**Note:** Search engines will not index the contents of wikis. To have your content indexed by search engines, you can use [{% data variables.product.prodname_pages %}](/pages) in a public repository.

{% endnote %}

### Weiterführende Informationen

- „[Wiki-Seiten hinzufügen oder bearbeiten](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)“
- „[Eine Fußzeile oder Seitenleiste für Dein Wiki erstellen](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)“
- „[Wiki-Inhalte bearbeiten](/communities/documenting-your-project-with-wikis/editing-wiki-content)“
- „[Änderungsverlauf eines Wikis anzeigen](/articles/viewing-a-wiki-s-history-of-changes)“
- „[Wikis durchsuchen](/articles/searching-wikis)“
