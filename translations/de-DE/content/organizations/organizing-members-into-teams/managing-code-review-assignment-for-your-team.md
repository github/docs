---
title: Code-Review-Zuweisung für Dein Team verwalten
intro: 'Die Zuweisung von Code-Reviews zeigt deutlich an, welche Mitglieder eines Teams einen Review für einen Pull Request einreichen sollen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team
product: '{% data reusables.gated-features.code-review-assignment %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Code review assignment
permissions: Team maintainers and organization owners can configure code review assignments.
---

## Über Code-Review-Zuweisungen

Jedes mal, wenn Dein Team aufgefordert wird, einen Pull Request zu überprüfen, wird durch die Verwendung von Code-Review-Zuweisungen das Team als Prüfer entfernt und durch eine bestimmte Teilmenge der Teammitglieder ersetzt. Code-Review-Zuweisungen erlauben es Dir zu entscheiden, ob das gesamte Team oder nur eine Teilmenge der Teammitgliedern benachrichtigt wird, wenn ein Team für einen Review angefordert wird.

Wenn Codeinhaber automatisch zum Review aufgefordert werden, wird das Team trotzdem noch entfernt und durch Einzelpersonen ersetzt. Die Genehmigungen von Einzelpersonen erfüllen die Anforderungen für die Codeinhaber-Genehmigung in einem geschützten Branch nicht. Weitere Informationen findest Du unter „[Über Codeinhaber](/github/creating-cloning-and-archiving-repositories/about-code-owners)."

{% ifversion fpt %}
To further enhance your team's collaboration abilities, you can upgrade to {% data variables.product.prodname_ghe_cloud %}, which includes features like protected branches and code owners on private repositories. {% data reusables.enterprise.link-to-ghec-trial %}
{% endif %}

## Routing-Algorithmen

Code review assignments automatically choose and assign reviewers based on one of two possible algorithms.

Der Round-Robin-Algorithmus wählt die Prüfer basierend auf den Empfängern der letzten Review-Anforderungen aus, und fokussiert auf der abwechselnden Auswahl der Mitarbeiter des Teams, unabhängig von der Anzahl ausstehenden Reviews, die die Teammitglieder momentan haben.

Der Lastenausgleich-Algorithmus (load balance algorithm) wählt Prüfer basierend auf der Gesamtzahl ihrer neuesten Review-Anforderungen aus und berücksichtigt die Anzahl der ausstehenden Reviews jedes Mitglieds. Der Lastenausgleich-Algorithmus versucht sicherzustellen, dass jedes Teammitglied eine gleiche Anzahl von Pull Requests innerhalb eines Zeitraums von 30 Tagen überprüft.

Any team members that have set their status to "Busy" will not be selected for review. If all team members are busy, the pull request will remain assigned to the team itself. For more information about user statuses, see "[Setting a status](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

## Code-Review-Zuweisungen konfigurieren
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Klicke in der linken Seitenleiste auf **Code review assignment** (Code-Review-Zuweisung). ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-button.png)
6. Wähle **Enable auto assignment** (Automatische Zuweisung aktivieren). ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-enable.png)
7. Benutze unter „How many team members should be assigned to review?" (Wie viele Teammitglieder sollen dem Review zugewiesen werden?) das Dropdownmenü und wähle die Anzahl der Prüfer, die jedem Pull Request zugewiesen werden sollen. ![Dropdownmenü „Number of reviewers" (Anzahl der Prüfer)](/assets/images/help/teams/review-assignment-number.png)
8. Benutze unter „Routing algorithm" (Routing-Algorithmen) das Dropdownmenü und wähle den Algorithmus, den Du benutzen möchtest. Weitere Informationen findest Du unter „[Routing-Algorithmen](#routing-algorithms)." ![Dropdownmenü „Routing algorithm" (Routing-Algorithmus)](/assets/images/help/teams/review-assignment-algorithm.png)
9. Um optional bestimmte Teammitglieder immer auszulassen, wähle **Never assign certain team members** (Weise bestimmte Teammitglieder nie zu). Dann wähle eines oder mehrere Teammitglieder, die Du immer auslassen willst. ![Kontrollkästchen und Dropdownmenü „Never assign certain team members" (Weise bestimmte Teammitglieder nie zu)](/assets/images/help/teams/review-assignment-skip-members.png)
10. Optionally, to only notify the team members chosen by code review assignment for each pull review request, under "Notifications" select **If assigning team members, don't notify the entire team.** ![Code review assignment notifications](/assets/images/help/teams/review-assignment-notifications.png){% ifversion fpt or ghae or ghes > 3.2 %}
11. Optionally, to include members of child teams as potential reviewers when assigning requests, select **Child team members**.
12. Optionally, to count any members whose review has already been requested against the total number of members to assign, select **Count existing requests**.
13. Optionally, to remove the review request from the team when assigning team members, select **Team review request**.{% endif %}
14. Klicke auf **Save changes** (Änderungen speichern).

## Code-Review-Zuweisungen deaktivieren
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Wähle **Enable auto assignment** (automatische Zuweisung aktivieren) um das Häkchen zu entfernen. ![Schaltfläche „Code review assignment" (Code-Review-Zuweisung)](/assets/images/help/teams/review-assignment-enable.png)
6. Klicke auf **Save changes** (Änderungen speichern).
