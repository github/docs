---
title: Hinzufügen eines untergeordneten Teams anfordern
intro: 'Wenn Du in einem Team über Betreuer-Berechtigungen verfügst, kannst Du die Verschachtelung eines vorhandenen Teams innerhalb der Hierarchie Deiner Organisation unter Deinem Team anfordern.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Wenn Du das Hinzufügen eines untergeordneten Teams anforderst, wird an die Betreuer dieses Teams eine Anfrage gesendet. Sobald ein Betreuer dieses Teams Deiner Anfrage zustimmt, wird das Team innerhalb der Hierarchie Deiner Organisation unter Deinem Team eingeordnet.

Wenn Du Organisationsinhaber bist oder über Team-Betreuer-Berechtigungen sowohl im untergeordneten als auch im übergeordneten Team verfügst, kannst Du das untergeordnete Team auch ohne Anforderung einer Genehmigung hinzufügen oder das übergeordnete Team des untergeordneten Teams direkt auf der Einstellungsseite des untergeordneten Teams ändern. Weitere Informationen findest Du unter „[Team innerhalb der Hierarchie Deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy).“

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. Klicke in der Teamliste auf den Namen des Teams, dem Du das untergeordnete Team hinzufügen möchtest. ![Liste der Teams der Organisation](/assets/images/help/teams/click-team-name.png)
5. Klicke am Anfang der Teamseite auf {% octicon "people" aria-label="The people icon" %} **Teams**. ![Registerkarte „Teams" auf der Teamseite](/assets/images/help/teams/team-teams-tab.png)
6. Klicke auf **Add a team** (Team hinzufügen). ![Schaltfläche zum Hinzufügen eines Teams auf der Teamseite](/assets/images/help/teams/add-a-team.png)
7. Gib den Namen des Teams ein, das Du als untergeordnetes Team hinzufügen möchten, und wähle es aus dem Dropdownmenü aus. ![Textfeld zum Eingeben und Dropdown-Menü zum Auswählen des Namens des untergeordneten Teams](/assets/images/help/teams/type-child-team-name.png)
{% data reusables.repositories.changed-repository-access-permissions %}
9. Klicke auf **Confirm changes** (Änderungen bestätigen), um eine Anfrage zum Hinzufügen des untergeordneten Teams zu senden. ![Modales Feld mit Informationen zu den Änderungen an den Berechtigungen für den Repositoryzugriff](/assets/images/help/teams/confirm-new-parent-team.png)

### Weiterführende Informationen

- „[Informationen zu Teams](/articles/about-teams)“
- „[Team innerhalb der Hierarchie Deiner Organisation verschieben](/articles/moving-a-team-in-your-organization-s-hierarchy)“
- „[Hinzufügen oder Ändern eines übergeordneten Teams anfordern](/articles/requesting-to-add-or-change-a-parent-team)“
