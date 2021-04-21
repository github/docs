---
title: Einen externen Mitarbeiter in ein Organisationsmitglied umwandeln
intro: 'If you would like to give an outside collaborator on your organization''s repositories broader permissions within your organization, you can {% if currentVersion == "free-pro-team@latest" %}invite them to become a member of{% else %}make them a member of{% endif %} the organization.'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 'Organization owners can {% if currentVersion == "free-pro-team@latest" %}invite users to join{% else %}add users to{% endif %} an organization.'
topics:
  - organisationen
  - teams
---

{% if currentVersion == "free-pro-team@latest" %}
Wenn Deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor Du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen finden Sie unter „[Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% if currentVersion != "github-ae@latest" %}
If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users {% if currentVersion == "free-pro-team@latest" %}you invite must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.{% else %}must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.{% endif %}
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. To the right of the name of the outside collaborator you want to become a member, use the {% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Invite to organization**.![Externe Mitarbeiter zur Organisation einladen](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
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
