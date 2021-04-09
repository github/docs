---
title: Ein Inhaberteam für verbesserte Organisationsberechtigungen umwandeln
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Der „Owner“ (Inhaber) ist jetzt eine administrative Rolle, die einzelnen Mitgliedern Deiner Organisation zugewiesen wird. Mitglieder des alten Inhaberteams erhalten automatisch Inhaberberechtigungen.'
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organisationen
  - teams
---

Du hast mehrere Möglichkeiten, Dein altes Inhaberteam umzuwandeln:

- Gib dem Team einen neuen Namen, der die Mitglieder kennzeichnet, die einen besonderen Status in der Organisation haben.
- Lösche das Team, nachdem Du sichergestellt hast, dass alle Mitglieder zu Teams hinzugefügt wurden, die den benötigten Zugriff auf die Repositorys der Organisation haben.

### Dem Inhaberteam einen neuen Namen geben

{% tip %}

   **Hinweis:** Da „admin“ (Administrator) ein Begriff für Organisationsmitglieder mit spezifischem [Zugriff auf bestimmte Repositorys](/articles/repository-permission-levels-for-an-organization) in der Organisation ist, empfehlen wir, ihn nicht für Teamnamen zu verwenden.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. Lege im Feld für den Teamnamen einen neuen Namen für das Inhaberteam fest. Ein Beispiel:
    - Wenn nur sehr wenige Mitglieder Deiner Organisation Mitglieder des Inhaberteams waren, könntest Du das Team beispielsweise „Kern“ nennen.
    - Wenn alle Mitglieder Deiner Organisation Mitglieder des Inhaberteams waren, damit sie [Teams @erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) konnten, könntest Du das Team „Mitarbeiter“ nennen. ![Das Feld für den Teamnamen mit „Core“ (Kern) als neuen Namen für das Inhaberteam](/assets/images/help/teams/owners-team-new-name.png)
6. Klicke unter der Teambeschreibung auf **Save and continue** (Speichern und fortfahren). ![Schaltfläche „Save and continue“ (Speichern und fortfahren)](/assets/images/help/teams/owners-team-save-and-continue.png)
7. Optional kannst Du [das Team auch *öffentlich* machen](/articles/changing-team-visibility).

### Das alte Inhaberteam löschen

{% warning %}

**Warnung:** Wenn es Mitglieder in Deinem Inhaberteam gibt, die keine Mitglieder anderer Teams sind, werden sie beim Löschen des Teams aus der Organisation entfernt. Bevor Du das Team löschst, stelle sicher, dass die Mitglieder bereits direkte Mitglieder der Organisation sind oder Mitarbeiterzugriff auf die benötigten Repositorys haben.

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. Lies unten auf der Seite die Warnung, und klicke dann auf **Delete the Owners team** (Inhaberteam löschen). ![Link zum Löschen des Inhaberteams](/assets/images/help/teams/owners-team-delete.png)
