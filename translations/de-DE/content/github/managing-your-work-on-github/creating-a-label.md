---
title: Eine Kennzeichnung erstellen
intro: 'In Repositorys, auf die Du Schreibzugriff hast, kannst Du Kennzeichnungen erstellen, um Issues und Pull Requests zu organisieren.'
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tipp:** Du kannst auch innerhalb eines Issues oder Pull Requests eine Kennzeichnung über das Dropdownmenü „Labels“ (Kennzeichnungen) erstellen.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. Klicke rechts neben dem Suchfeld auf **New label** (Neue Kennzeichnung).
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Weiterführende Informationen

- „[Informationen zu Kennzeichnungen](/articles/about-labels)“
- „[Kennzeichnungen auf Issues und Pull Requests anwenden](/articles/applying-labels-to-issues-and-pull-requests)“
- „[Eine Kennzeichnung bearbeiten](/articles/editing-a-label)“
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- „[Standardkennzeichnungen für Repositorys in Deiner Organisation verwalten](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
