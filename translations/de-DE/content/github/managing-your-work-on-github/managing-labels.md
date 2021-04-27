---
title: Managing labels
intro: 'You can classify issues and pull requests by creating, editing, applying, and deleting labels.'
redirect_from:
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

### Informationen zu Kennzeichnungen

Sie können Ihre Arbeit auf {% data variables.product.product_name %} verwalten, indem Sie Kennzeichnungen für die Kategorisierung von Issues und Pull Requests erstellen. You can apply labels in the repository the label was created in. Once a label exists, you can use the label on any issue or pull request within that repository.

Alle Benutzer mit Lesezugriff auf ein Repository können die Kennzeichnungen des Repositorys einsehen und durchsuchen. Anyone with triage access to a repository can apply/dismiss existing labels. Um eine Kennzeichnung zu erstellen, zu bearbeiten, anzuwenden oder zu löschen, benötigst Du Schreibzugriff auf das Repository.

### About default labels

{% data variables.product.product_name %} bietet in jedem neuen Repository Standardkennzeichnungen. Mithilfe dieser Standardkennzeichnungen kannst Du einen Standardworkflow in einem Repository erstellen.

| Kennzeichnung      | Beschreibung                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indicates an unexpected problem or unintended behavior{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | Kennzeichnet die Notwendigkeit für Verbesserungen oder Ergänzungen der Dokumentation{% endif %}
| `duplicate`        | Kennzeichnet ähnliche Issues oder Pull Requests                                                                                                           |
| `enhancement`      | Kennzeichnet neue Funktionsanfragen                                                                                                                       |
| `good first issue` | Kennzeichnet einen geeigneten Issue für erstmalig Mitwirkende                                                                                             |
| `help wanted`      | Kennzeichnet, dass ein Betreuer Hilfe bei einem Issue oder Pull Request benötigt                                                                          |
| `invalid`          | Kennzeichnet, dass ein Issue oder Pull Request nicht mehr relevant ist                                                                                    |
| `question`         | Kennzeichnet, dass ein Issue oder Pull Request weitere Informationen benötigt                                                                             |
| `wontfix`          | Kennzeichnet, dass die Arbeit an einem Issue oder Pull Request nicht fortgesetzt wird                                                                     |

Standardkennzeichnungen sind in jedem neuen Repository beinhaltet, wenn das Repository erstellt wird, aber Du kannst die Kennzeichnungen später bearbeiten oder löschen.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organisationsinhaber können die Standardkennzeichnungen für Repositories in ihrer Organisation anpassen. Weitere Informationen findest Du unter „[Standardkennzeichnungen für Repositorys in Deiner Organisation verwalten](/articles/managing-default-labels-for-repositories-in-your-organization)."
{% endif %}

### Eine Kennzeichnung erstellen


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. Klicke rechts neben dem Suchfeld auf **New label** (Neue Kennzeichnung).
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Kennzeichnungen auf Issues und Pull Requests anwenden


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. Klicke in der oberen rechten Ecke auf **Label** (Kennzeichnung), und gib den Namen einer vorhandenen Kennzeichnung ein. Klicke auf den Namen der Kennzeichnung, um sie mit den ausgewählten Elementen zu verknüpfen. ![Dropdownmenü „Issues Milestone assignment" (Issue-Meilenstein-Zuordnung)](/assets/images/help/issues/issues_applying_labels_dropdown.png)

### Eine Kennzeichnung bearbeiten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Eine Kennzeichnung löschen
Deleting a label will remove the label from issues and pull requests.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Weiterführende Informationen
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Encouraging helpful contributions to your project with labels](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
