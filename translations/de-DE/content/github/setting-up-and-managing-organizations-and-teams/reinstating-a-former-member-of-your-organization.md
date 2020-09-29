---
title: Ehemaliges Mitglied Deiner Organisation wieder einsetzen
intro: 'Organisationsinhaber können ehemalige Organisationsmitglieder {% if currentVersion == "free-pro-team@latest" %}zum Wiedereintritt in Deine Organisation einladen{% else %}wieder zu Deiner Organisation hinzufügen{% endif%} und auswählen, ob auch die ehemalige Rolle, Zugriffsberechtigungen, Forks und Einstellungen der Person wiederhergestellt werden sollen.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du [einen Benutzer aus Deiner Organisation entfernst](/articles/removing-a-member-from-your-organization), [ein Organisationsmitglied in einen externen Mitarbeiter umwandelst](/articles/converting-an-organization-member-to-an-outside-collaborator), oder wenn ein Benutzer aus Deiner Organisation entfernt wird, weil Du [von Mitgliedern und externen Mitarbeitern die Aktivierung der Zwei-Faktor-Authentifizierung (2FA) verlangst](/articles/requiring-two-factor-authentication-in-your-organization), bleiben die Zugriffsberechtigungen und Einstellungen des Benutzers drei Monate lang im System gespeichert. Du kannst die Berechtigungen dieses Benutzers wiederherstellen, wenn Du ihn innerhalb dieses Zeitrahmens wieder zur Organisation {% if currentVersion =="free-pro-team@latest" %}einlädst{% else %}hinzufügst{% endif %}.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Bei der Wiedereinsetzung eines ehemaligen Organisationsmitglieds kannst Du Folgendes wiederherstellen:
 - Die Rolle des Benutzers innerhalb der Organisation
 - Alle privaten Forks der Repositorys der Organisation
 - Die Mitgliedschaft innerhalb der Organisationsteams
 - Die früheren Zugriffsrechte und Berechtigungen für die Repositorys der Organisation
 - Sterne für die Repositorys der Organisation
 - Issue-Zuweisungen innerhalb der Organisation
 - Repository-Abonnements (Benachrichtigungseinstellungen für das Beobachten, Nichtbeobachten oder Ignorieren der Repository-Aktivitäten)

    {% tip %}

    {% if currentVersion == "free-pro-team@latest" %}
    **Tips**:
    - Wenn ein Organisationsmitglied aus der Organisation entfernt wurde, weil es keine Zwei-Faktor-Authentifizierung verwendet, und Deine Organisation nach wie vor von Mitgliedern die 2FA verlangt, muss das ehemalige Mitglied die 2FA aktivieren, damit seine Mitgliedschaft wiederhergestellt werden kann.
    - Nur Organisationsinhaber können Benutzer zu einer Organisation einladen. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)".
    - Wenn Deine Organisation ein benutzerabhängiges Abonnement hat, muss eine ungenutzte Lizenz verfügbar sein, bevor Du ein ehemaliges Organisationsmitglied wieder einrichten kannst. Weitere Informationen finden Sie unter „[Informationen zur benutzerabhängigen Preisgestaltung](/articles/about-per-user-pricing)“. {% data reusables.organizations.org-invite-expiration %}

   {% else %}
    **Tips**:
    - Wenn ein Organisationsmitglied aus der Organisation entfernt wurde, weil es keine Zwei-Faktor-Authentifizierung verwendet, und Deine Organisation nach wie vor von Mitgliedern die 2FA verlangt, muss das ehemalige Mitglied die 2FA aktivieren, damit seine Mitgliedschaft wiederhergestellt werden kann.
    - Nur Organisationsinhaber können Benutzer zu einer Organisation hinzufügen. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)".
   {% endif %}

   {% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. Klicke auf **Invite and reinstate** (Einladen und wieder einsetzen) oder auf **Invite and start fresh** (Einladen und neu beginnen), um festzulegen, ob Du die Person mit ihren früheren Zugriffsberechtigungen innerhalb der Organisation wieder einsetzen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest. ![Auswählen, ob Informationen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Klicke auf **Add and reinstate** (Hinzufügen und wieder einsetzen) oder auf **Add and start fresh** (Hinzufügen und neu beginnen), um festzulegen, ob Du die Person mit ihren früheren Zugriffsberechtigungen innerhalb der Organisation wieder hinzufügen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest. ![Auswählen, ob Berechtigungen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Send invitation** (Einladung senden). ![Rollen- und Teamoptionen und Schaltfläche „Send invitation“ (Einladung senden)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Add member** (Mitglied hinzufügen). ![Rollen- und Teamoptionen und Schaltfläche „Add member“ (Mitglied hinzufügen)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Weiterführende Informationen

- „[Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)“
