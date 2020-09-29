---
title: Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln
intro: 'Wenn ein aktuelles Mitglied Deiner Organisation nur auf bestimmte Repositorys zugreifen muss, z. B. im Falle von Beratern oder temporären Mitarbeitern, kannst Du ihn in einen *externen Mitarbeiter* umwandeln.'
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.owners-and-admins-can %} Organisationsmitglieder in externe Mitarbeiter umwandeln.

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Wenn Organisationsmitglieder in externe Mitarbeiter umgewandelt wurden, haben sie nur auf die Repositorys Zugriff, auf die sie entsprechend der aktuellen Teammitgliedschaft zugreifen können. Die Person ist kein explizites Mitglied der Organisation mehr und kann Folgendes nicht mehr tun:

- Teams erstellen
- Alle Organisationsmitglieder und Teams sehen
- Ein sichtbares Team @erwähnen
- Ein Team-Betreuer sein

Weitere Informationen findest Du unter „[Berechtigungsebenen für eine Organisation](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization)."

Wir empfehlen Dir, den Zugriff des Organisationsmitglieds auf Repositorys zu überprüfen, um sicherzustellen, dass dessen Zugriff den Erwartungen entspricht. Weitere Informationen findest Du unter „[Den Zugriff einer Person auf ein Repository einer Organisation verwalten](/articles/managing-an-individual-s-access-to-an-organization-repository)“

Wenn Du ein Organisationsmitglied in einen externen Mitarbeiter umwandelst, werden seine Berechtigungen als Organisationsmitglied drei Monate lang gespeichert. Dadurch kannst Du seine Mitgliedsberechtigungen wiederherstellen, wenn Du innerhalb dieser Zeit{% if currentVersion == "free-pro-team@latest" %} diesen Mitarbeiter einlädst, der Organisation erneut beizutreten{% else %} diesen Mitarbeiter erneut zu Deiner Organisation hinzufügst{% endif %}. Weitere Informationen findest Du unter „[Ehemaliges Mitglied Deiner Organisation wieder einsetzen](/articles/reinstating-a-former-member-of-your-organization).“

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Wähle die Person(en) aus, die Du in externe Mitarbeiter umwandeln möchtest. ![Liste der Mitglieder mit zwei ausgewählten Mitgliedern](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Klicke im Dropdownmenü über der Mitgliederliste auf **Convert to outside collaborator** (In externen Mitarbeiter umwandeln). ![Dropdownmenü mit der Option, Mitglieder in externe Mitarbeiter umzuwandeln](/assets/images/help/teams/user-bulk-management-options.png)
6. Lies die Informationen zum Umwandeln von Mitgliedern in externe Mitarbeiter, und klicke dann auf **Convert to outside collaborator** (In externen Mitarbeiter umwandeln). ![Informationen zu Berechtigungen für externe Mitarbeiter und Schaltfläche „Convert to outside collaborator“ (In externen Mitarbeiter umwandeln)](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### Weiterführende Informationen

- „[Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/articles/adding-outside-collaborators-to-repositories-in-your-organization)“
- „[Externen Mitarbeiter von einem Organisations-Repository entfernen](/articles/removing-an-outside-collaborator-from-an-organization-repository)“
- „[Externen Mitarbeiter in ein Organisationsmitglied umwandeln](/articles/converting-an-outside-collaborator-to-an-organization-member)“
