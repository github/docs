---
title: Eine Kennzeichnung löschen
intro: 'In Repositorys, auf die Du Schreibzugriff hast, kannst Du eine Kennzeichnung löschen, wenn Du sie nicht mehr zum Klassifizieren von Issues oder Pull Requests benötigst.'
redirect_from:
  - /articles/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Durch den Löschvorgang wird die Kennzeichnung von allen Issues und Pull Requests entfernt, auf die sie angewendet wurde.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Weiterführende Informationen

- „[Kennzeichnungen auf Issues und Pull Requests anwenden](/articles/applying-labels-to-issues-and-pull-requests)“
- „[Issues und Pull Requests nach Kennzeichnungen filtern](/articles/filtering-issues-and-pull-requests-by-labels)“{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- „[Standardkennzeichnungen für Repositorys in Deiner Organisation verwalten](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
