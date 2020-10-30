---
title: Einen externen Mitarbeiter in ein Organisationsmitglied umwandeln
intro: 'Wenn Du einem externen Mitarbeiter der Repositorys Deiner Organisation umfassendere Berechtigungen innerhalb Deiner Organisation gewähren möchtest, kannst Du {% if currentVersion == "free-pro-team@latest" %}ihn dazu einladen, Mitglied Deiner Organisation zu werden{% else %}ihn zu einem Mitglied Deiner Organisation machen{% endif %}.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tips**:
- Nur Organisationsinhaber können {% if currentVersion == "free-pro-team@latest" %}Benutzer zum Beitritt zur Organisation einladen{% else %}Benutzer zur Organisation hinzufügen{% endif %}. Weitere Informationen findest Du unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)“.{% if currentVersion == "free-pro-team@latest" %}
- Wenn Deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor Du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen finden Sie unter „[Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-expiration %}{% endif %}
- Wenn Deine Organisation [die Zwei-Faktor-Authentifizierung für Mitglieder vorschreibt](/articles/requiring-two-factor-authentication-in-your-organization), müssen die Benutzer{% if currentVersion == "free-pro-team@latest" %}, die Du einlädst, [die Zwei-Faktor-Authentifizierung aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa), bevor sie die Einladung annehmen können.{% else %}[ die Zwei-Faktor-Authentifizierung aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa), bevor Du sie zur Organisation hinzufügen kannst.{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. To the right of the name of the outside collaborator you want to become a member, use the
{% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Invite to organization**.![Externe Mitarbeiter zur Organisation einladen](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. Klicke rechts neben dem Namen des externen Mitarbeiters, der Mitglied werden soll, auf **Invite to organization** (Zur Organisation einladen).![Externe Mitarbeiter zur Organisation einladen](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Weiterführende Informationen

- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“
