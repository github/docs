---
title: Schnellstart für GitHub Probleme
intro: 'Befolge diesen kurzen interaktiven Leitfaden, um mehr über {% data variables.product.prodname_github_issues %} zu erfahren.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Issues
  - Project management
ms.openlocfilehash: 16e52a7b75b34dc8de2f982cf6d0a0bf5d8e9574
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423252'
---
## Einführung

Dieser Leitfaden zeigt, wie du {% data variables.product.prodname_github_issues %} verwendest, um eine Arbeit zu planen und zu verfolgen. In diesem Leitfaden erstellst du ein neues Problem und fügst eine Aufgabenliste hinzu, um Unteraufgaben nachzuverfolgen. Außerdem lernst du, wie du Kennzeichnungen, Meilensteine, Verantwortliche und Projekte hinzufügst, um Metadaten über dein Problem zu kommunizieren.

## Voraussetzungen

Um ein Problem zu erstellen, benötigst du ein Repository. Du kannst ein vorhandenes Repository verwenden, auf das du Schreibzugriff hast, oder du kannst ein neues Repository erstellen. {% data reusables.enterprise-accounts.emu-permission-repo %} Das Repository muss Probleme aktiviert haben. Weitere Informationen zum Erstellen eines Repositorys findest du unter "[Erstellen eines neuen Repositorys](/articles/creating-a-new-repository)." Weitere Informationen zum Aktivieren von Problemen, wenn sie im Repository deaktiviert sind, findest du unter "[Deaktivieren von Problemen](/github/administering-a-repository/managing-repository-settings/disabling-issues)."

## Öffnen eines leeren Problems

Erstelle zunächst ein Problem. Es gibt mehrere Möglichkeiten, ein Problem zu erstellen; du kannst die Methode wählen, die für deinen Workflow am besten geeignet ist. Dieses Beispiel verwendet die {% data variables.product.prodname_dotcom %} Benutzeroberfläche. Weitere Informationen über andere Möglichkeiten, ein Problem zu erstellen, findest du unter "[Erstellen eines Problems](/issues/tracking-your-work-with-issues/creating-an-issue)."

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. In diesem Beispiel wird mit einem leeren Problem begonnen. Dein Repository kann Issuevorlagen{% ifversion fpt or ghec %} und Issueformulare{% endif %} verwenden, um Mitwirkende anzuregen, bestimmte Informationen zu liefern. Wenn dein Repository Problemvorlagen verwendet, {% ifversion fpt or ghes or ghec %}klickst du auf **Ein leeres Problem öffnen** {% else %}klickst du auf **Ein normales Problem öffnen.** {% endif %}.

![Leeres Problem](/assets/images/help/issues/blank-issue.png)

## Ausfüllen von Informationen

Gib deinem Problem einen beschreibenden Titel. Der Titel sollte auf einen Blick vermitteln, was das Problem betrifft.

Füge eine Beschreibung hinzu, die den Zweck des Problems erläutert, einschließlich aller Details, die das Problem möglicherweise beheben können. Wenn dies beispielsweise ein Fehlerbericht ist, beschreibe die Schritte zum Reproduzieren des Fehlers, des erwarteten Ergebnisses und des tatsächlichen Ergebnisses.

Du kannst Markdown verwenden, um Formatierungen, Links, Emojis und mehr hinzuzufügen. Weitere Informationen findest du unter "[Schreiben auf GitHub](/github/writing-on-github)."

![Problemtitel- und Text](/assets/images/help/issues/issue-title-body.png)

## Hinzufügen einer Aufgabenliste

Es kann hilfreich sein, große Probleme in kleinere Aufgaben aufzuteilen oder mehrere zusammenhängende Probleme in einem einzigen größeren Problem zu verfolgen. Füge deinem Problem eine Aufgabenliste hinzu, indem du Listenelemente mit `[ ]` vorführst. Verweise auf vorhandene Probleme nach Problemnummer oder URL. Du kannst nur Text verwenden, um Aufgaben zu verfolgen, die nicht über ein entsprechendes Problem verfügen und sie später in Probleme konvertieren. Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/about-task-lists).

![Problem mit Aufgabenliste](/assets/images/help/issues/issue-task-list-raw.png)

## Hinzufügen von Kennzeichnungen

Füge eine Kennzeichnung hinzu, um dein Problem zu kategorisieren. Du könntest z.B. eine `bug` Kennzeichnung und eine `good first issue` Kennzeichnung verwenden, um anzuzeigen, dass es sich bei einem Problem um einen Fehler handelt, den ein erstmaliger Mitarbeiter finden könnte. Benutzer können Probleme nach Kennzeichnung filtern, um alle Probleme zu finden, die über eine bestimmte Kennzeichnung verfügen.

Du kannst die Standardbezeichnungen verwenden oder eine neue Kennzeichnung erstellen. Weitere Informationen findest du unter [Verwalten von Bezeichnungen](/issues/using-labels-and-milestones-to-track-work/managing-labels).

![Problem mit Bezeichnungen](/assets/images/help/issues/issue-with-label.png)

## Hinzufügen von Meilensteinen

Du kannst einen Meilenstein hinzufügen, um das Problem als Teil eines datumsbasierten Ziels nachzuverfolgen. Ein Meilenstein zeigt den Fortschritt der Probleme als Zieldatumsansätze an. Weitere Informationen findest du unter "[Informationen zu Meilensteinen](/issues/using-labels-and-milestones-to-track-work/about-milestones)."

![Problem mit Meilenstein](/assets/images/help/issues/issue-milestone.png)

## Zuweisen des Problems

Um Verantwortung zu kommunizieren, kannst du das Problem einem Mitglied deiner Organisation zuweisen. Weitere Informationen findest du unter [Zuweisen von Issues und Pull Requests zu anderen GitHub-Benutzer*innen](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users).

![Problem mit Zuweisungen](/assets/images/help/issues/issue-assignees.png)

## Hinzufügen des Problems zu einem Projekt

Du kannst das Issue einem vorhandenen Projekt{% ifversion projects-v2 %} hinzufügen und Metadaten für das Projekt auffüllen. {% endif %} Weitere Informationen zu Projekten findest du unter {% ifversion projects-v2 %}[Informationen zu Projekten](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) und {% else %}[Organisieren deiner Arbeit in Projektboards](/issues/organizing-your-work-with-project-boards).{% endif %}

![Problem mit Projekten](/assets/images/help/issues/issue-project.png)

## Senden deines Problems

Klicke auf **Neues Problem übermitteln**, um dein Problem zu erstellen. Du kannst alle oben genannten Felder nach dem Erstellen des Problems bearbeiten. Dein Issue hat eine eindeutige URL, die du mit Teammitgliedern teilen oder in anderen Issues oder Pull Requests referenzieren kannst.

## Kommunizieren

Nachdem dein Problem erstellt wurde, kannst du die Konversation fortsetzen, indem du Kommentare zu dem Problem hinzufügst. Du kannst @mention Mitarbeiter oder Teams auf einen Kommentar aufmerksam machen. Um verwandte Issues im gleichen Repository zu verknüpfen, kannst du `#` gefolgt von einem Teil des Issuetitels eingeben und dann auf das Issue klicken, das du verknüpfen möchtest. Weitere Informationen findest du unter "[Schreiben auf GitHub](/github/writing-on-github)."

![Problemkommentar](/assets/images/help/issues/issue-comment.png)

## Nächste Schritte

Du kannst Projekte für eine Vielzahl von Zwecken verwenden. Zum Beispiel:

- Nachverfolgen von Ideen
- Sammeln von Feedback
- Planen von Aufgaben
- Melden von Fehlern

Hier findest du einige hilfreiche Ressourcen für deine nächsten Schritte mit {% data variables.product.prodname_github_issues %}:

- Weitere Informationen zu Problemen findest du unter "[Informationen zu Problemen](/issues/tracking-your-work-with-issues/about-issues)."
- Weitere Informationen darüber, wie Projekte dir bei der Planung und Verfolgung helfen können, findest du unter {% ifversion projects-v2 %}[Informationen zu Projekten](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) oder {% else %}[Organisieren deiner Arbeit in Projektboards](/issues/organizing-your-work-with-project-boards).{% endif %}
- Weitere Informationen über die Verwendung von Problemvorlagen{% ifversion fpt or ghec %} und Formularen{% endif %}, mit denen du Mitwirkende dazu ermutigen kannst, bestimmte Informationen bereitzustellen, findest du unter "[Verwenden von Vorlagen, um nützliche Probleme und Pull-Anforderungen zu fördern](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)."
