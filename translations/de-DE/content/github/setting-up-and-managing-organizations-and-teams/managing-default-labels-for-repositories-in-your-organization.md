---
title: Standardkennzeichnungen für Repositorys in Deiner Organisation verwalten
intro: 'Du kannst die Kennzeichnungen anpassen, die in jedem neuen Repository Deiner Organisation enthalten sind.'
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

Organisationsinhaber können die Standardkennzeichnungen für Repositorys in der Organisation verwalten.

Standardkennzeichnungen sind in jedem neuen Repository Deiner Organisation beinhaltet, aber jeder mit Schreibzugriff auf das Repository kann die Kennzeichnungen in diesem Repository später bearbeiten oder löschen. Standardkennzeichnungen hinzuzufügen, zu bearbeiten oder zu löschen wird diese Kennzeichnungen für bestehende Repositorys weder hinzufügen noch bearbeiten oder löschen.

### Eine Standardkennzeichnung erstellen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
5. Klicke unter „Repository labels" (Repository-Kennzeichnungen) auf **New label** (neue Kennzeichnung). ![Schaltfläche „New label" (Neue Kennzeichnung)](/assets/images/help/organizations/new-label-button.png)
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Eine Standardkennzeichnung bearbeiten

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Eine Standardkennzeichnung löschen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.organizations.repository-defaults %}
{% else %}
{% data reusables.organizations.repository-labels %}
{% endif %}
{% data reusables.project-management.delete-label %}
{% data reusables.project-management.confirm-label-deletion %}

### Weiterführende Informationen

- „[Informationen zu Kennzeichnungen](/articles/about-labels)“
