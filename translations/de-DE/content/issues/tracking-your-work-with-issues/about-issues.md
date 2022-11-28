---
title: Informationen zu Issues
intro: 'Verwende {% data variables.product.prodname_github_issues %}, um Ideen, Feedback, Aufgaben oder Fehler für die Arbeit auf {% data variables.product.company_short %} nachzuverfolgen.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422732'
---
## Integriert mit GitHub

Mit Issues kannst du deine Arbeit auf {% data variables.product.company_short %} nachverfolgen, wo die Entwicklung passiert. Wenn du ein Issue in einem anderen Issue oder Pull Request erwähnst, spiegelt die Zeitachse des Issues den Querverweis wieder, damit du verwandte Arbeiten nachverfolgen kannst. Um anzugeben, dass die Arbeit ausgeführt wird, kannst du ein Issue mit einem Pull Request verknüpfen. Wenn der Pull Request zusammenführt wird, wird das verknüpfte Issue automatisch geschlossen.

Weitere Informationen zu Schlüsselwörtern findest du unter [Verknüpfen eines Pull Requests mit einem Issue](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## Schnelles Erstellen von Issues

Issues können auf verschiedene Arten erstellt werden, sodass du die bequemste Methode für deinen Workflow auswählen kannst. Du kannst beispielsweise ein Issue aus einem Repository erstellen, {% ifversion fpt or ghec %} ein Element in einer Aufgabenliste, {% endif %} eine Notiz in einem Projekt, einen Kommentar in einem Issue oder Pull Request, eine bestimmte Codezeile oder eine URL-Abfrage. Du kannst auch ein Issue über deine bevorzugte Plattform erstellen: über die Webbenutzeroberfläche, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL und REST APIs oder {% data variables.product.prodname_mobile %}. Weitere Informationen findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue).

## Arbeit nachverfolgen

Du kannst Issues mit Projekten organisieren und priorisieren. {% ifversion fpt or ghec %}Um Issues als Teil eines größeren Isses nachzuverfolgen, kannst du Aufgabenlisten verwenden.{% endif %} Um verwandte Issues zu kategorisieren, kannst du Bezeichnungen und Meilensteine verwenden.

Weitere Informationen zu Projekten findest du unter {% ifversion projects-v2 %}[Informationen zu Projekten](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects). {% else %}[Organisieren deiner Arbeit in Projektboads](/issues/organizing-your-work-with-project-boards).{% endif %} {% ifversion fpt or ghec %} Weitere Informationen zu Aufgabenlisten findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists). {% endif %}Weitere Informationen zu Bezeichnungen und Meilensteinen findest du unter [Verwenden von Bezeichnungen und Meilensteinen zum Nachverfolgen der Arbeit](/issues/using-labels-and-milestones-to-track-work).

## Auf dem Laufenden bleiben

Um über die neuesten Kommentare in einem Issue auf dem Laufenden zu bleiben, kannst du ein Issue abonnieren, um Benachrichtigungen zu den neuesten Kommentaren zu erhalten. Um schnell Links zu kürzlich aktualisierten Issues zu finden, besuche dein Dashboard. Weitere Informationen findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications) und [Informationen zu deinem persönlichen Dashboard](/articles/about-your-personal-dashboard).

## Communityverwaltung

Um Projektmitarbeiter*innen dabei zu helfen, aussagekräftige Issues zu erstellen,die für dich erforderliche Informationen enthalten, kannst du {% ifversion fpt or ghec %}Issueformulare und {% endif %}Issuevorlagen verwenden. Weitere Informationen findest du unter [Verwenden von Vorlagen zur Unterstützung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

{% ifversion fpt or ghec %}Um ein gesundes Communityumfeld zu schaffen, kannst du Kommentare melden, die gegen die [Communityrichtlinien](/free-pro-team@latest/github/site-policy/github-community-guidelines) von {% data variables.product.prodname_dotcom %} verstoßen. Weitere Informationen findest du unter [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}

## Effiziente Kommunikation

Du kannst die Projektmitarbeiter*innen mit „@“ erwähnen (@mention), die Zugriff auf dein Repository in einem Issue haben, um deren Aufmerksamkeit auf diesen Kommentar zu lenken. Um verwandte Issues im gleichen Repository zu verknüpfen, kannst du `#` gefolgt von einem Teil des Issuetitels eingeben und dann auf das Issue klicken, das du verknüpfen möchtest. Um Verantwortung zu kommunizieren, kannst du Issues zuweisen. Wenn du häufig denselben Kommentar eingeben musst, kannst du gespeicherte Antworten verwenden.
{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Grundlegende Schreib- und Formatierungssyntax](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) und [Zuweisen von Issues und Pull Requests an andere GitHub-Benutzer](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users).
{% endif %} {% ifversion discussions %}
## Vergleichen von Issues und Diskussionen

Einige Unterhaltungen eignen sich besser für {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Anleitungen zur Verwendung eines Issues oder einer Diskussion findest du unter [Kommunikation über GitHub](/github/getting-started-with-github/quickstart/communicating-on-github).

Wenn eine Unterhaltung in einem Issue besser für eine Diskussion geeignet ist, kannst du das Issue in eine Diskussion konvertieren.
{% endif %}
