---
title: '„Tags“ (Schlagworte) verwalten'
intro: 'Du kannst {% data variables.product.prodname_desktop %} für die Erstellung, den Push-Zugriff und die Anzeige von „Tags“ (Schlagworten) verwenden.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### Informationen zu „Tags“ (Schlagworten) in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} ermöglicht Dir, kommentierte Tags zu erstellen. Tags are associated with commits, so you can use a tag to mark an individual point in your repository's history, including a version number for a release. Weitere Informationen zu Release-Tags findest Du unter „[Informationen zu Releases](/github/administering-a-repository/about-releases)“.

{% data reusables.desktop.tags-push-with-commits %}

### Ein Tag erstellen

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.create-tag %}
{% data reusables.desktop.name-tag %}
{% data reusables.desktop.confirm-tag %}

### Tags anzeigen

{% data reusables.desktop.history-tab %}
2. Klicke auf den Commit.
  {% note %}

  **Hinweis**: {% data variables.product.prodname_desktop %} zeigt einen Pfeil {% octicon "arrow-up" aria-label="The up arrow icon" %} an, falls das Tag nicht per Push in das Remote-Repository übertragen wurde.

  {% endnote %}

  ![Ein Tag in der Historie anzeigen](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Alle dem Commit zugeordneten Tags sind in den Metadaten dieses Commits sichtbar. ![Ein Tag im Commit anzeigen](/assets/images/help/desktop/viewing-tags-in-commit.png)

### Deleting tags

{% note %}

**Note**: You can only delete tags associated with commits that have not yet been pushed.

{% endnote %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.delete-tag %}

### Weiterführende Informationen

- "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation
