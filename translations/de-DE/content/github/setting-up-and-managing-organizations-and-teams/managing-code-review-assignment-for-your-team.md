---
title: Code-Review-Zuweisung für Dein Team verwalten
intro: Die Zuweisung von Code-Reviews zeigt deutlich an, welche Mitglieder eines Teams einen Review für einen Pull Request einreichen sollen.
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

Team-Betreuer und Organisationsinhaber können Code-Review-Zuweisungen konfigurieren.

### Über Code-Review-Zuweisungen

Jedes mal, wenn Dein Team aufgefordert wird, einen Pull Request zu überprüfen, wird durch die Verwendung von Code-Review-Zuweisungen das Team als Prüfer entfernt und durch eine bestimmte Teilmenge der Teammitglieder ersetzt. Code-Review-Zuweisungen erlauben es Dir zu entscheiden, ob das gesamte Team oder nur eine Teilmenge der Teammitgliedern benachrichtigt wird, wenn ein Team für einen Review angefordert wird.

Wenn Codeinhaber automatisch zum Review aufgefordert werden, wird das Team trotzdem noch entfernt und durch Einzelpersonen ersetzt. Die Genehmigungen von Einzelpersonen erfüllen die Anforderungen für die Codeinhaber-Genehmigung in einem geschützten Branch nicht. Weitere Informationen findest Du unter „[Über Codeinhaber](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

### Routing-Algorithmen

Code review assignments automatically choose and assign reviewers based on one of two possible algorithms.

Der Round-Robin-Algorithmus wählt die Prüfer basierend auf den Empfängern der letzten Review-Anforderungen aus, und fokussiert auf der abwechselnden Auswahl der Mitarbeiter des Teams, unabhängig von der Anzahl ausstehenden Reviews, die die Teammitglieder momentan haben.

Der Lastenausgleich-Algorithmus (load balance algorithm) wählt Prüfer basierend auf der Gesamtzahl ihrer neuesten Review-Anforderungen aus und berücksichtigt die Anzahl der ausstehenden Reviews jedes Mitglieds. Der Lastenausgleich-Algorithmus versucht sicherzustellen, dass jedes Teammitglied eine gleiche Anzahl von Pull Requests innerhalb eines Zeitraums von 30 Tagen überprüft.

### Code-Review-Zuweisungen konfigurieren
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Klicke in der linken Seitenleiste auf **Code review assignment** (Code-Review-Zuweisung). ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-button.png)
6. Wähle **Enable auto assignment** (Automatische Zuweisung aktivieren). ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-enable.png)
7. Benutze unter „How many team members should be assigned to review?" (Wie viele Teammitglieder sollen dem Review zugewiesen werden?) das Dropdownmenü und wähle die Anzahl der Prüfer, die jedem Pull Request zugewiesen werden sollen. ![Dropdownmenü „Number of reviewers" (Anzahl der Prüfer)](/assets/images/help/teams/review-assignment-number.png)
8. Benutze unter „Routing algorithm" (Routing-Algorithmen) das Dropdownmenü und wähle den Algorithmus, den Du benutzen möchtest. Weitere Informationen findest Du unter „[Routing-Algorithmen](#routing-algorithms)." ![Dropdownmenü „Routing algorithm" (Routing-Algorithmus)](/assets/images/help/teams/review-assignment-algorithm.png)
9. Um optional bestimmte Teammitglieder immer auszulassen, wähle **Never assign certain team members** (Weise bestimmte Teammitglieder nie zu). Dann wähle eines oder mehrere Teammitglieder, die Du immer auslassen willst. ![Kontrollkästchen und Dropdownmenü „Never assign certain team members" (Weise bestimmte Teammitglieder nie zu)](/assets/images/help/teams/review-assignment-skip-members.png)
10. Um optional nur diejenigen Teammitglieder zu informieren, die durch die Code-Review-Zuweisung für einen Pull-Request-Review betroffen sind, wähle unter „Notifications" (Benachrichtigungen) die Option **If assigning team members, don't notify the entire team** (Benachrichtige bei der Zuweisung einzelner Teammitglieder nicht das gesamte Team). ![Benachrichtigungen „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-notifications.png)
11. Klicke auf **Save changes** (Änderungen speichern).

### Code-Review-Zuweisungen deaktivieren
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Wähle **Enable auto assignment** (automatische Zuweisung aktivieren) um das Häkchen zu entfernen. ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-enable.png)
6. Klicke auf **Save changes** (Änderungen speichern).
