---
title: Zugriff eines ehemaligen externen Mitarbeiters auf Deine Organisation wieder einsetzen
intro: 'You can reinstate a former outside collaborator''s access permissions for organization repositories, forks, and settings.'
redirect_from:
  - /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
  - /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

When an outside collaborator's access to your organization's private repositories is removed, the user's access privileges and settings are saved for three months. You can restore the user's privileges if you {% if currentVersion == "free-pro-team@latest" %}invite{% else %}add{% endif %} them back to the organization within that time frame.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Bei der Wiedereinsetzung eines ehemaligen externen Mitarbeiters kannst Du Folgendes wiederherstellen:
 - Die früheren Zugriffsberechtigungen des Benutzers auf die Organisationsrepositorys
 - Alle privaten Forks der Repositorys der Organisation
 - Die Mitgliedschaft innerhalb der Organisationsteams
 - Die früheren Zugriffsrechte und Berechtigungen für die Repositorys der Organisation
 - Sterne für die Repositorys der Organisation
 - Issue-Zuweisungen innerhalb der Organisation
 - Repository-Abonnements (Benachrichtigungseinstellungen für das Beobachten, Nichtbeobachten oder Ignorieren der Repository-Aktivitäten)

{% tip %}

**Tips**:
 - Nur der Organisationsinhaber kann den Zugriff eines externen Mitarbeiters auf seine Organisation wieder einsetzen. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)".
 - The reinstating a member flow on {% data variables.product.product_location %} may use the term "member" to describe reinstating an outside collaborator but if you reinstate this person and keep their previous privileges, they will only have their previous [outside collaborator permissions](/articles/permission-levels-for-an-organization/#outside-collaborators).{% if currentVersion == "free-pro-team@latest" %}
 - Wenn Deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor Du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen findest Du unter „[Informationen zu benutzerbasierten Preisen](/articles/about-per-user-pricing)“.{% endif %}

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. Klicke auf **Invite and reinstate** (Einladen und wieder einsetzen) oder auf **Invite and start fresh** (Einladen und neu beginnen), um festzulegen, ob Du den externen Mitarbeiter mit seinen früheren Zugriffsberechtigungen innerhalb der Organisation wieder einsetzen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest.

  {% warning %}

  **Warnung:** Wenn Du einen externen Mitarbeiter in ein Mitglied Deiner Organisation umwandeln möchtest, klicke auf **Invite and start fresh** (Einladen und neu starten), und wähle eine neue Rolle für diese Person aus. Wenn Du jedoch seine Rolle und Berechtigungen neu festlegst, gehen seine privaten Forks der Repositorys der Organisation verloren. Sollen bei der Umwandlung des externen Mitarbeiters zu einem Mitglied Deiner Organisation dessen privaten Forks *erhalten bleiben*, wähle stattdessen **Invite and reinstate** (Einladen und wieder einsetzen) aus. Sobald diese Person die Einladung annimmt, kannst Du sie anschließend durch [Einladung zum Organisationsbeitritt als Mitglied](/articles/converting-an-outside-collaborator-to-an-organization-member) in ein Organisationsmitglied umwandeln.

  {% endwarning %}

  ![Auswählen, ob Einstellungen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. Klicke auf **Add and reinstate** (Hinzufügen und wieder einsetzen) oder auf **Add and start fresh** (Hinzufügen und neu beginnen), um festzulegen, ob Du den externen Mitarbeiter mit seinen früheren Zugriffsberechtigungen innerhalb der Organisation wieder einsetzen möchtest oder ob Du die früheren Berechtigungen löschen und neu festlegen möchtest.

  {% warning %}

  **Warnung:** Wenn Du einen externen Mitarbeiter in ein Mitglied Deiner Organisation umwandeln möchtest, klicke auf **Add and start fresh** (Hinzufügen und neu beginnen), und wähle eine neue Rolle für diese Person aus. Wenn Du jedoch seine Rolle und Berechtigungen neu festlegst, gehen seine privaten Forks der Repositorys der Organisation verloren. Sollen bei der Umwandlung des externen Mitarbeiters zu einem Mitglied Deiner Organisation dessen privaten Forks *erhalten bleiben*, wähle stattdessen **Add and reinstate** (Hinzufügen und wieder einsetzen) aus. Danach kannst Du diese Person durch [Hinzufügen zur Organisation als Mitglied](/articles/converting-an-outside-collaborator-to-an-organization-member) in ein Organisationsmitglied umwandeln.

  {% endwarning %}

  ![Auswählen, ob Einstellungen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen externen Mitarbeiters gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Send invitation** (Einladung senden). ![Rollen- und Teamoptionen und Schaltfläche „Send invitation“ (Einladung senden)](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. Wenn Du die früheren Berechtigungen eines ehemaligen externen Mitarbeiters gelöscht hast, wähle eine neue Rolle für den Benutzer aus, und füge ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Add member** (Mitglied hinzufügen). ![Rollen- und Teamoptionen und Schaltfläche „Add member“ (Mitglied hinzufügen)](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
8. Die eingeladene Person erhält per E-Mail eine Einladung zur Organisation. Um externer Mitarbeiter der Organisation zu werden, muss die eingeladene Person die Einladung annehmen. {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### Weiterführende Informationen

- „[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization)“
