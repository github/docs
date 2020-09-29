---
title: Sichtbarkeitsänderungen von Repositorys in Deiner Organisation einschränken
intro: Zum Schutz Deiner Organisationsdaten kannst Du die Berechtigungen für die Änderung der Sichtbarkeit von Repositorys in Deiner Organisation konfigurieren.
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst die Möglichkeit der Änderung der Sichtbarkeit von Repositorys ausschließlich auf Organisationsinhaber beschränken oder auch Mitgliedern mit Administratorberechtigungen für ein Repository erlauben, die Sichtbarkeit des Repositorys von privat auf öffentlich oder von öffentlich auf privat zu ändern.

{% warning %}

**Warning**: If enabled, this setting allows people with admin permissions to change an existing repository to any visibility, even if you do not allow that type of repository to be created. For more information about restricting the visibility of repositories during creation, see "[Restricting repository creation in your organization](/articles/restricting-repository-creation-in-your-organization)."

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Deaktiviere unter „Repository visibility change“ (Änderung der Sichtbarkeit von Repositorys) das Kontrollkästchen **Allow members to change repository visibilities for this organization** (Mitgliedern die Änderung der Sichtbarkeit von Repositorys für diese Organisation erlauben). ![Kontrollkästchen zur Erlaubnis der Änderung der Sichtbarkeit von Repositorys durch Mitglieder](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Klicke auf **Save** (Speichern).
