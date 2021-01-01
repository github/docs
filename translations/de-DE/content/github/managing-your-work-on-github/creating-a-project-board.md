---
title: Ein Projektboard erstellen
intro: 'Mit Projektboards kannst Du benutzerdefinierte Workflows entsprechend Deinen Anforderungen erstellen, beispielsweise für die Nachverfolgung und Priorisierung spezifischer Arbeit an Funktionen, umfassender Roadmaps oder sogar Release-Checklisten.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Weitere Informationen findest Du unter „[Ein Repository mit einem Projektboard verknüpfen](/articles/linking-a-repository-to-a-project-board).“

Wenn Du ein Projektboard erstellt hast, kannst Du Issues, Pull Requests und Hinweise hinzufügen. Weitere Informationen findest Du unter „[Issues und Pull Requests zu einem Projektboard hinzufügen](/articles/adding-issues-and-pull-requests-to-a-project-board)“ und „[Hinweise zu einem Projektboard hinzufügen](/articles/adding-notes-to-a-project-board).“

Du kannst auch Workflows automatisieren, um Dein Projektboard mit dem Status der Issues und Pull Requests zu synchronisieren. Weitere Informationen finden Sie unter „[Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards)“.

{% data reusables.project-management.project-board-import-with-api %}

### Ein Benutzer-Projektboard erstellen

{% data reusables.profile.access_profile %}
2. On the top of your profile page, in the main navigation, click
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Registerkarte „Projects“ (Projekte)](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Ein organisationsweites Projektboard erstellen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Ein Repository-Projektboard erstellen

{% data reusables.repositories.navigate-to-repo %}
2. Klicken Sie unter dem Namen des Repositorys auf
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![Registerkarte „Projects“ (Projekte)](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Weiterführende Informationen

- „[Informationen zu Projektboards](/articles/about-project-boards)“
- "[Editing a project board](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- „[Ein Projektboard kopieren](/articles/copying-a-project-board)“{% endif %}
- „[Ein Projektboard schließen](/articles/closing-a-project-board)“
- „[Informationen zur Automatisierung für Projektboards](/articles/about-automation-for-project-boards)“
