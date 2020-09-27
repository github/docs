---
title: „Tags“ (Schlagworte) verwalten
intro: 'Du kannst {{ site.data.variables.product.prodname_desktop }} für die Erstellung, den Push-Zugriff und die Anzeige von „Tags“ (Schlagworten) verwenden.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### Informationen zu „Tags“ (Schlagworten) in {{ site.data.variables.product.prodname_desktop }}

{{ site.data.variables.product.prodname_desktop }} ermöglicht Dir, kommentierte Tags zu erstellen. Du kannst ein Tag verwenden, um einen einzelnen Punkt im Verlauf Deines Repositorys zu markieren, einschließlich einer Versionsnummer für eine Freigabe („Release“). Weitere Informationen zu Release-Tags findest Du unter „[Informationen zu Releases](/github/administering-a-repository/about-releases)“.

{{ site.data.reusables.desktop.tags-push-with-commits }}

### Ein Tag erstellen

{{ site.data.reusables.desktop.history-tab }}
{{ site.data.reusables.desktop.create-tag }}
{{ site.data.reusables.desktop.name-tag }}
{{ site.data.reusables.desktop.confirm-tag }}

### Tags anzeigen

{{ site.data.reusables.desktop.history-tab }}
2. Klicke auf den Commit.
  {% note %}

  **Hinweis**: {{ site.data.variables.product.prodname_desktop }} zeigt einen Pfeil {% octicon "arrow-up" aria-label="The up arrow icon" %} an, falls das Tag nicht per Push in das Remote-Repository übertragen wurde.

  {% endnote %}

  ![Ein Tag in der Historie anzeigen](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Alle dem Commit zugeordneten Tags sind in den Metadaten dieses Commits sichtbar. ![Ein Tag im Commit anzeigen](/assets/images/help/desktop/viewing-tags-in-commit.png)
