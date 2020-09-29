---
title: Repository-Erstellung in Deiner Organisation einschränken
intro: Zum Schutz Deiner Organisationsdaten kannst Du die Berechtigungen für die Erstellung von Repositorys innerhalb Deiner Organisation konfigurieren.
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst wählen, ob Mitglieder in Deiner Organisation Repositorys erstellen können. Wenn Du Mitgliedern erlaubst, Repositories zu erstellen, kannst Du auswählen, welche Arten von Repositories Mitglieder erstellen können.{% if currentVersion == "free-pro-team@latest" %} Damit Mitglieder nur private Repositories erstellen können, muss Deine Organisation {% data variables.product.prodname_ghe_cloud %}verwenden.{% endif %} Weitere Informationen findest Du unter „[Über Repository-Sichtbarkeit](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Organisationsinhaber können immer jede Art von Repository erstellen.

{% if currentVersion == "free-pro-team@latest" %}Enterprise-Inhaber{% else %}Website-Administratoren{% endif %} können die Optionen einschränken, die Du für die Richtlinie zur Erstellung von Repositorys in Deiner Organisation zur Verfügung hast. Weitere Informationen findest Du unter {% if currentVersion == "free-pro-team@latest" %}„[Repository-Verwaltungsrichtlinie in Deinem Enterprise-Konto erzwingen](/github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account)."{% else %}„[Repository-Erstellung auf Deiner Instanz einschränken](/enterprise/admin/user-management/restricting-repository-creation-in-your-instance)."{% endif %}

{% warning %}

**Warning**: This setting only restricts the visibility options available when repositories are created and does not restrict the ability to change repository visibility at a later time. For more information about restricting changes to existing repositories' visibilities, see "[Restricting repository visibility changes in your organization](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Repository Creation" (Repository Erstellung) {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}eine oder mehrere Optionen{% else %}eine Einstellung{% endif %} aus. ![Optionen für die Repository-Erstellung](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. Klicke auf **Save** (Speichern).
