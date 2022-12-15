---
title: Fehlerbehebung bei Commits auf deiner Zeitleiste
intro: You can view details for commits from your profile's timeline. If you don't see commits you expect on your profile or can't find commit details from your profile page, the commit date and the commit author date may be different.
redirect_from:
- /articles/troubleshooting-commits-on-your-timeline
- /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 78adf6a92412c89180adeb49f7a5f446f7ce7f17
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090025"
---
## <a name="expected-behavior-to-view-commit-details"></a>Erwartetes Verhalten bei der Anzeige der Commit-Details über die Zeitleiste

Wenn Du in der Zeitleiste Deiner Profilseite neben einem Repository auf die Anzahl der Commits klickst, werden die Details zu Deinen Commits des betreffenden Zeitraums angezeigt, einschließlich eines Diffs der spezifischen Änderungen am Repository.

![Commit-Link in der Zeitleiste des Profils](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Commit-Details](/assets/images/help/commits/commit-details.png)

## <a name="missing-commit-details-from-commits-in-your-timeline"></a>Fehlende Commit-Details in der Zeitleiste

Wenn Du auf Deiner Profilseite auf einen Commit-Link klickst und auf der Commit-Seite des Repositorys nicht alle erwarteten Commits vorfindest, könnte es sein, dass der Commit-Verlauf in Git umgeschrieben wurde und das Erstellungs- und das Commit-Datum der Commits voneinander abweichen.

![Repositoryseite mit der Meldung „Keine Commits für Octocat gefunden“](/assets/images/help/repository/no-commits-found.png)

## <a name="how-github-uses-the-git-author-date-and-commit-date"></a>So verwendet GitHub das Erstellungs- und Commit-Datum von Git

In Git bezeichnet das Erstellungsdatum das Datum, an dem ein Commit ursprünglich mit dem Befehl `git commit` erstellt wurde. Das Commit-Datum ist mit diesem Datum identisch, solange der ursprüngliche Commit, und damit das Commit-Datum, nicht später durch `git commit --amend`, einen erzwungenen Push, ein Rebase oder einen anderen Git-Befehl geändert wurde.

Auf Deiner Profilseite wird das Bearbeitungsdatum zur Berechnung des Commit-Datums verwendet. In einem Repository gilt dagegen das Commit-Datum als Erstellungsdatum des Commits im Repository.

Meist sind das Verfassungs- und Commit-Datum identisch. Gelegentlich aber gerät die Commit-Abfolge durcheinander, wenn der Commit-Verlauf geändert wird. Weitere Informationen findest du unter [Warum werden meine Beiträge nicht auf meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)

## <a name="viewing-missing-commit-details-from-commits-in-your-timeline"></a>Fehlende Commit-Details in der Zeitleiste anzeigen

Du kannst den `git show`-Befehl mit dem `--pretty=fuller`-Flag verwenden, um zu überprüfen, ob das Commit-Erstellungsdatum und das Commit-Datum unterschiedlich sind.

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

Weichen das Erstellungs- und Commit-Datum voneinander ab, kannst Du das Commit-Datum in der URL manuell ändern, um die Commit-Details anzuzeigen.

Zum Beispiel:
- Die folgende URL verwendet das Erstellungsdatum `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- Die folgende URL verwendet das Commit-Datum `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

Wenn Du die URL mit dem korrigierten Commit-Datum aufrufst, werden die Commit-Details angezeigt.

![Commit-Details](/assets/images/help/commits/commit-details.png)

## <a name="expected-commits-missing-in-your-timeline"></a>Wenn erwartete Commits in der Zeitleiste fehlen

Wenn in Deiner Zeitleiste nicht alle erwarteten Commits angezeigt werden, könnte es sein, dass der Commit-Verlauf in Git umgeschrieben wurde und das Erstellungs- und das Commit-Datum der Commits voneinander abweichen. Andere Möglichkeiten findest du unter [Warum werden meine Beiträge nicht auf meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile).
