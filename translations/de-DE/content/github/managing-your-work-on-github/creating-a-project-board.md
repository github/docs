---
title: Ein Projektboard erstellen
intro: 'Mit Projektboards kannst Du benutzerdefinierte Workflows entsprechend Deinen Anforderungen erstellen, beispielsweise für die Nachverfolgung und Priorisierung spezifischer Arbeit an Funktionen, umfassender Roadmaps oder sogar Release-Checklisten.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.reusables.project-management.use-automated-template }}

{{ site.data.reusables.project-management.copy-project-boards }}

{{ site.data.reusables.project-management.link-repos-to-project-board }} Weitere Informationen findest Du unter „[Ein Repository mit einem Projektboard verknüpfen](/articles/linking-a-repository-to-a-project-board).“

Wenn Du ein Projektboard erstellt hast, kannst Du Issues, Pull Requests und Hinweise hinzufügen. Weitere Informationen findest Du unter „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board)“ und „[Hinweise zu einem Projektboard hinzufügen](/articles/adding-notes-to-a-project-board).“

Du kannst auch Workflows automatisieren, um Dein Projektboard mit dem Status der Issues und Pull Requests zu synchronisieren. Weitere Informationen finden Sie unter „[Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards)“.

{{ site.data.reusables.project-management.project-board-import-with-api }}

### Ein Benutzer-Projektboard erstellen

{{ site.data.reusables.profile.access_profile }}
2. On the top of your profile page, in the main navigation, click
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Registerkarte „Projects“ (Projekte)](/assets/images/help/projects/user-projects-tab.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Ein organisationsweites Projektboard erstellen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Ein Repository-Projektboard erstellen

{{ site.data.reusables.repositories.navigate-to-repo }}
2. Klicken Sie unter dem Namen des Repositorys auf
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Registerkarte „Projects“ (Projekte)](/assets/images/help/projects/repo-tabs-projects.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
- „[Ein Projektboard bearbeiten](/articles/editing-a-project-board)“{% if currentVersion == "free-pro-team@latest" %}
- „[Ein Projektboard kopieren](/articles/copying-a-project-board)“{% endif %}
- „[Ein Projektboard schließen](/articles/closing-a-project-board)“
- „[Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards)“
