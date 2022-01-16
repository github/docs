---
title: Ehemaliges Mitglied Deiner Organisation wieder einsetzen
intro: 'Organisationsinhaber können ehemalige Organisationsmitglieder {% ifversion fpt %}zum Wiedereintritt in Deine Organisation einladen{% else %}wieder zu Deiner Organisation hinzufügen{% endif%} und auswählen, ob auch die ehemalige Rolle, Zugriffsberechtigungen, Forks und Einstellungen der Person wiederhergestellt werden sollen.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
---

## About member reinstatement

If you [remove a user from your organization](/articles/removing-a-member-from-your-organization){% ifversion ghae %} or{% else %},{% endif %} [convert an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator){% ifversion not ghae %}, or a user is removed from your organization because you've [required members and outside collaborators to enable two-factor authentication (2FA)](/articles/requiring-two-factor-authentication-in-your-organization){% endif %}, the user's access privileges and settings are saved for three months. You can restore the user's privileges if you {% ifversion fpt %}invite{% else %}add{% endif %} them back to the organization within that time frame.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Bei der Wiedereinsetzung eines ehemaligen Organisationsmitglieds kannst Du Folgendes wiederherstellen:
 - Die Rolle des Benutzers innerhalb der Organisation
 - Alle privaten Forks der Repositorys der Organisation
 - Die Mitgliedschaft innerhalb der Organisationsteams
 - Die früheren Zugriffsrechte und Berechtigungen für die Repositorys der Organisation
 - Sterne für die Repositorys der Organisation
 - Issue-Zuweisungen innerhalb der Organisation
 - Repository-Abonnements (Benachrichtigungseinstellungen für das Beobachten, Nichtbeobachten oder Ignorieren der Repository-Aktivitäten)

{% ifversion ghes %}
Wenn ein Organisationsmitglied aus der Organisation entfernt wurde, weil es keine Zwei-Faktor-Authentifizierung verwendet, und Deine Organisation nach wie vor von Mitgliedern die 2FA verlangt, muss das ehemalige Mitglied die 2FA aktivieren, damit seine Mitgliedschaft wiederhergestellt werden kann.
{% endif %}

{% ifversion fpt %}
Wenn Deine Organisation ein benutzerabhängiges Abonnement hat, muss eine ungenutzte Lizenz verfügbar sein, bevor Du ein ehemaliges Organisationsmitglied wieder einrichten kannst. Weitere Informationen finden Sie unter „[Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-scim %}
{% endif %}

## Ehemaliges Mitglied Deiner Organisation wieder einsetzen

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% ifversion fpt %}
6. Klicke auf **Invite and reinstate** (Einladen und wieder einsetzen) oder auf **Invite and start fresh** (Einladen und neu beginnen), um festzulegen, ob Du die Person mit ihren früheren Zugriffsberechtigungen innerhalb der Organisation wieder einsetzen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest. ![Auswählen, ob Informationen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Klicke auf **Add and reinstate** (Hinzufügen und wieder einsetzen) oder auf **Add and start fresh** (Hinzufügen und neu beginnen), um festzulegen, ob Du die Person mit ihren früheren Zugriffsberechtigungen innerhalb der Organisation wieder hinzufügen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest. ![Auswählen, ob Berechtigungen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% ifversion fpt %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Send invitation** (Einladung senden). ![Rollen- und Teamoptionen und Schaltfläche „Send invitation“ (Einladung senden)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Add member** (Mitglied hinzufügen). ![Rollen- und Teamoptionen und Schaltfläche „Add member“ (Mitglied hinzufügen)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% ifversion fpt %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

## Weiterführende Informationen

- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“
