---
title: Fehlerbehebung bei Commit-Fehlern mithilfe der Zeitleiste
intro: 'Details zu einzelnen Commits findest Du in der Zeitleiste Deines Profils. Wenn Du in Deinem Profil respektive auf der Profilseite keine Details zu einem erwarteten Commit findest, weichen das Erstellungs- und das Commit-Datum des Commits eventuell voneinander ab.'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

### Erwartetes Verhalten bei der Anzeige der Commit-Details über die Zeitleiste

Wenn Du in der Zeitleiste Deiner Profilseite neben einem Repository auf die Anzahl der Commits klickst, werden die Details zu Deinen Commits des betreffenden Zeitraums angezeigt, einschließlich eines Diffs der spezifischen Änderungen am Repository.

![Commit-Link in der Zeitleiste des Profils](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Commit-Details](/assets/images/help/commits/commit-details.png)

### Fehlende Commit-Details in der Zeitleiste

Wenn Du auf Deiner Profilseite auf einen Commit-Link klickst und auf der Commit-Seite des Repositorys nicht alle erwarteten Commits vorfindest, könnte es sein, dass der Commit-Verlauf in Git umgeschrieben wurde und das Erstellungs- und das Commit-Datum der Commits voneinander abweichen.

![Repository-Seite mit der Meldung „No commits found for octocat“ (Keine Commits für Octocat gefunden)](/assets/images/help/repository/no-commits-found.png)

### So verwendet GitHub das Erstellungs- und Commit-Datum von Git

In Git bezeichnet das Erstellungsdatum das Datum, an dem ein Commit ursprünglich mit dem Befehl `git commit` erstellt wurde. Das Commit-Datum ist mit diesem Datum identisch, solange der ursprüngliche Commit, und damit das Commit-Datum, nicht später durch `git commit --amend`, einen erzwungenen Push, ein Rebase oder einen anderen Git-Befehl geändert wurde.

Auf Deiner Profilseite wird das Bearbeitungsdatum zur Berechnung des Commit-Datums verwendet. In einem Repository gilt dagegen das Commit-Datum als Erstellungsdatum des Commits im Repository.

Meist sind das Verfassungs- und Commit-Datum identisch. Gelegentlich aber gerät die Commit-Abfolge durcheinander, wenn der Commit-Verlauf geändert wird. Weitere Informationen findest Du unter „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“

### Fehlende Commit-Details in der Zeitleiste anzeigen

Mit dem Befehl `git show` und dem Flag `--pretty=fuller` kannst Du überprüfen, ob das Erstellungs- und das Commit-Datum eines Commits identisch sind.

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

Weichen das Erstellungs- und Commit-Datum voneinander ab, kannst Du das Commit-Datum in der URL manuell ändern, um die Commit-Details anzuzeigen.

Ein Beispiel:
- Die folgende URL verwendet das Verfassungsdatum `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- Die folgende URL verwendet das Commit-Datum `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

Wenn Du die URL mit dem korrigierten Commit-Datum aufrufst, werden die Commit-Details angezeigt.

![Commit-Details](/assets/images/help/commits/commit-details.png)

### Wenn erwartete Commits in der Zeitleiste fehlen

Wenn in Deiner Zeitleiste nicht alle erwarteten Commits angezeigt werden, könnte es sein, dass der Commit-Verlauf in Git umgeschrieben wurde und das Erstellungs- und das Commit-Datum der Commits voneinander abweichen. Weitere Ursachen dieses Verhaltens werden unter der Frage „[Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)“ beschrieben.
