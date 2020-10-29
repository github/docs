---
title: Informationen zu Kennzeichnungen
intro: 'Mit Kennzeichnungen auf {% data variables.product.product_name %} können Sie Ihre Arbeit organisieren und priorisieren. Du kannst Kennzeichnungen auf Issues und Pull Requests anwenden, um Priorität, Kategorie oder andere Informationen zu kennzeichnen, die Du für nützlich hältst.'
redirect_from:
  - /articles/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Kennzeichnungen sind an das Repository gebunden, in dem sie erstellt werden. Sobald eine Kennzeichnung existiert, kannst Du sie für alle Issues oder Pull Requests innerhalb dieses Repositorys verwenden. Weitere Informationen findest Du unter „[Eine Kennzeichnung erstellen](/articles/creating-a-label/).“

Alle Benutzer mit Lesezugriff auf ein Repository können die Kennzeichnungen des Repositorys einsehen und durchsuchen. Um eine Kennzeichnung zu erstellen, zu bearbeiten, anzuwenden oder zu löschen, benötigst Du Schreibzugriff auf das Repository.

### Standardkennzeichnungen verwenden

{% data variables.product.product_name %} bietet in jedem neuen Repository Standardkennzeichnungen. Mithilfe dieser Standardkennzeichnungen kannst Du einen Standardworkflow in einem Repository erstellen:

| Kennzeichnung      | Beschreibung                                                                          |
| ------------------ | ------------------------------------------------------------------------------------- |
| `bug`              | Indicates an unexpected problem or unintended behavior                                |
| `documentation`    | Indicates a need for improvements or additions to documentation                       |
| `duplicate`        | Kennzeichnet ähnliche Issues oder Pull Requests                                       |
| `enhancement`      | Kennzeichnet neue Funktionsanfragen                                                   |
| `good first issue` | Kennzeichnet einen geeigneten Issue für erstmalig Mitwirkende                         |
| `help wanted`      | Kennzeichnet, dass ein Betreuer Hilfe bei einem Issue oder Pull Request benötigt      |
| `invalid`          | Kennzeichnet, dass ein Issue oder Pull Request nicht mehr relevant ist                |
| `question`         | Kennzeichnet, dass ein Issue oder Pull Request weitere Informationen benötigt         |
| `wontfix`          | Kennzeichnet, dass die Arbeit an einem Issue oder Pull Request nicht fortgesetzt wird |

Standardkennzeichnungen sind in jedem neuen Repository beinhaltet, wenn das Repository erstellt wird, aber Du kannst die Kennzeichnungen später bearbeiten oder löschen. Weitere Informationen findest Du unter „[Eine Kennzeichnung löschen](/articles/deleting-a-label/).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organisationsinhaber können die Standardkennzeichnungen für Repositories in ihrer Organisation anpassen. Weitere Informationen findest Du unter „[Standardkennzeichnungen für Repositorys in Deiner Organisation verwalten](/articles/managing-default-labels-for-repositories-in-your-organization)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Weiterführende Informationen

- „[Ermutigen hilfreicher Beiträge zu Deinem Projekt über Kennzeichnungen](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"
{% endif %}
