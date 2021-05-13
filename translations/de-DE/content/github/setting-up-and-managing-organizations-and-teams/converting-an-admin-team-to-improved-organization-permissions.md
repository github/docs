---
title: Ein Administratorenteam für verbesserte Organisationsberechtigungen umwandeln
intro: 'Wenn Deine Organisation nach September 2015 erstellt wurde, verfügt sie standardmäßig über verbesserte Organisationsberechtigungen. Organisationen, die vor September 2015 erstellt wurden, müssen ältere Inhaber- und Administratorenteams möglicherweise auf das verbesserte Berechtigungsmodell migrieren. Mitglieder der alten Administratorenteams behalten automatisch die Fähigkeit, Repositorys zu erstellen, bis diese Teams zu dem verbesserten Organisationsberechtigungsmodell migriert wurden.'
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions/
  - /articles/converting-an-admin-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organisationen
  - teams
---

Um Mitgliedern der alten Administratorenteams die Berechtigung zum Erstellen von Repositorys zu entziehen, erstelle ein neues Team für diese Mitglieder, stelle dabei sicher, dass das Team den erforderlichen Zugriff auf die Repositorys der Organisation hat, und lösche dann das alte Administratorenteam.

Weitere Informationen findest Du unter„[Berechtigungsebenen für die Repositorys einer Organisation](/articles/repository-permission-levels-for-an-organization/).“

{% warning %}

**Warnungen:**
- Wenn es Mitglieder in Deinem alten Administratorenteam gibt, die keine Mitglieder anderer Teams sind, werden sie beim Löschen des Teams aus der Organisation entfernt. Bevor Du das Team löschst, stelle sicher, dass die Mitglieder bereits direkte Mitglieder der Organisation sind oder Mitarbeiterzugriff auf die benötigten Repositorys haben.
- Um zu verhindern, dass private Forks der Mitglieder des alten Administratorenteams verloren gehen, musst Du die unten stehenden Schritte 1 bis 3 ausführen, bevor Du das alte Administratorenteam löschst.
- Da „admin“ (Administrator) ein Begriff für Organisationsmitglieder mit spezifischem [Zugriff auf bestimmte Repositorys](/articles/repository-permission-levels-for-an-organization) in der Organisation ist, empfehlen wir, ihn nicht für Teamnamen zu verwenden.

{% endwarning %}

1. [Erstelle ein neues Team](/articles/creating-a-team).
2. [Füge alle Mitglieder](/articles/adding-organization-members-to-a-team) des alten Administratorenteams zum neuen Team hinzu.
3. [Gewähre dem neuen Team Zugriff](/articles/managing-team-access-to-an-organization-repository) auf die Repositorys, auf die das alte Team zugreifen konnte.
4. [Lösche das alte Administratorenteam](/articles/deleting-a-team).
