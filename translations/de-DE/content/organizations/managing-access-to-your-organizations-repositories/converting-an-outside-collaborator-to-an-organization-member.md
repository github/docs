---
title: Einen externen Mitarbeiter in ein Organisationsmitglied umwandeln
intro: 'Wenn Du einem externen Mitarbeiter der Repositorys Deiner Organisation umfassendere Berechtigungen innerhalb Deiner Organisation gewähren möchtest, kannst Du {% ifversion fpt %}ihn dazu einladen, Mitglied Deiner Organisation zu werden{% else %}ihn zu einem Mitglied Deiner Organisation machen{% endif %}.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Organization owners can {% ifversion fpt %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - Organizations
  - Teams
shortTitle: Convert collaborator to member
---

{% ifversion fpt %}
Wenn Deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor Du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen finden Sie unter „[Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% ifversion not ghae %}
If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users {% ifversion fpt %}you invite must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.{% else %}must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.{% endif %}
{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% ifversion fpt %}
5. Klicke rechts neben dem Namen des externen Mitarbeiters, der Mitglied werden soll, auf das {% octicon "gear" aria-label="The gear icon" %}-Dropdownmenü, und wähle dort **Invite to organization** (Zur Organisation einladen) aus.![Externe Mitarbeiter zur Organisation einladen](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. Klicke rechts neben dem Namen des externen Mitarbeiters, der Mitglied werden soll, auf **Invite to organization** (Zur Organisation einladen).![Externe Mitarbeiter zur Organisation einladen](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% ifversion fpt %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Weiterführende Informationen

- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“
