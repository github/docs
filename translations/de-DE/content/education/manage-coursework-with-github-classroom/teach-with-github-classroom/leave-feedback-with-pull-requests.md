---
title: Einfügen von Feedback mit Pull Requests
intro: Du kannst zu jeder Aufgabe in besonderen Pull Requests innerhalb des Repositorys Feedback für deine Studierenden hinterlassen.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106360'
---
## Informationen zu Feedback-Pull Requests für Zuweisungen

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

Wenn du die Pull Request für Feedback für eine Aufgabe aktivierst, erstellt {% data variables.product.prodname_classroom %} eine spezielle Pull Request mit dem Titel **Feedback** im Zuweisungs-Repository für jeden Kursteilnehmer oder jedes Team. Die Pull Request zeigt automatisch jeden Commit an, den ein Schüler an den Standardzweig des Zuweisungs-Repositorys verschoben hat.

## Voraussetzungen

Um die Feedback-Pull Request zu erstellen und zuzugreifen, musst du die Feedback-Pull Request aktivieren, wenn du die Zuweisung erstellst. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## Verlassen von Feedback in einer Pull Request für eine Aufgabe

{% data reusables.classroom.sign-into-github-classroom %}
1. Klicke in der Liste der Kursräume auf den Raum mit der Aufgabe, die du überprüfen möchtest.
  ![Klassenzimmer in der Liste der Klassenzimmer für eine Organisation](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. Klicke rechts neben einer Übermittlung auf **Überprüfen**.
  ![Überprüfen-Schaltfläche für die Zuordnung in der Liste der Übermittlungen für eine Zuordnung](/assets/images/help/classroom/assignments-click-review-button.png)
1. Überprüfen Sie den Pull Request. Weitere Informationen findest du unter [Kommentieren von Pull Requests](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request).

## Weitere Informationsquellen

- Weitere Informationen findest du unter [Integrieren von {% data variables.product.prodname_classroom %} mit einer IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide).
