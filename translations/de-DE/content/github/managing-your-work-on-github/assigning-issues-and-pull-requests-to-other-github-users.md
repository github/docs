---
title: Issues und Pull Requests anderen GitHub-Benutzern zuweisen
intro: 'Zugewiesene Bearbeiter stellen klar, wer bestimmte Issues und Pull Requests bearbeitet.'
redirect_from:
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Jeder, der über Schreibberechtigungen für ein Repository verfügt, kann Issues und Pull Requests zuweisen.

Du kannst jedem Issue oder Pull Request bis zu 10 Personen zuweisen (auch Dich selber),{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} jeden, der den Issue oder Pull Request kommentiert hat,{% endif %} jeden, der Schreibberechtigungen für das Repository hat, sowie Organisationsmitglieder mit Leseberechtigung für das Repository. Weitere Informationen findest Du unter „[Zugriffsberechtigungen auf {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github).“

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Aktiviere das Kontrollkästchen neben den Elementen, die Du jemandem zuweisen möchtest. ![Kontrollkästchen für Issue-Metadaten](/assets/images/help/issues/issues_assign_checkbox.png)
4. Klicke in der oberen rechten Ecke auf **Assignee** (Bearbeiter).
5. Um die Elemente einem Benutzer zuzuweisen, beginne den entsprechenden Benutzernamen einzugeben. Wenn er angezeigt wird, wähle ihn aus. Du kannst bis zu zehn Bearbeiter auswählen und zu einem Issue oder Pull Request hinzufügen. ![Dropdownmenü für Issue-Zuweisung](/assets/images/help/issues/issues_assigning_dropdown.png)

### Weiterführende Informationen

* „[Issues und Pull Requests nach Bearbeitern filtern](/articles/filtering-issues-and-pull-requests-by-assignees)“
