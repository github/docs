---
title: Personen zu Deiner Organisation hinzufügen
intro: 'Sie können jede beliebige Person mithilfe ihres {% data variables.product.product_name %}-Benutzernamens oder ihrer E-Mail-Adresse zu einem Mitglied Ihrer Organisation machen.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Organization owners can add people to an organization.'
---

{% if currentVersion != "github-ae@latest" %}
Wenn Deine Organisation [die Zwei-Faktor-Authentifizierung für Mitglieder vorschreibt](/articles/requiring-two-factor-authentication-in-your-organization), müssen die Benutzer [die Zwei-Faktor-Authentifizierung aktivieren](/articles/securing-your-account-with-two-factor-authentication-2fa), bevor Du sie zur Organisation hinzufügen kannst.
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.invite_to_org %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role %}
{% data reusables.organizations.choose-user-license %}
{% data reusables.organizations.add-user-to-teams %}
{% data reusables.organizations.send-invitation %}

### Weiterführende Informationen
- „[Organisationsmitglieder zu einem Team hinzufügen](/articles/adding-organization-members-to-a-team)“
