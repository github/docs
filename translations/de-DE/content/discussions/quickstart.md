---
title: Schnellstart für GitHub Discussions
intro: 'Aktiviere {% data variables.product.prodname_discussions %} in einem bestehenden Repository oder einer Organisation, und unterhalte dich mit deiner Community.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410211'
---
## Einführung

{% data variables.product.prodname_discussions %} ist ein kollaboratives Kommunikationsforum für die Community rund um ein Open-Source-Projekt oder internes Projekt. Discussions ist für Unterhaltungen gedacht, die transparent und barrierefrei sein müssen, aber im Gegensatz zu {% data variables.product.prodname_github_issues %} keine Nachverfolgung auf einem Projektboard erfordern und nicht im Zusammenhang mit Code stehen. Discussions ermöglicht lockere, offene Gespräche in einem öffentlichen Forum.

Discussions bietet einen Raum für kollaborative Unterhaltungen, indem es einen zentralen Bereich zur Vernetzung und für die Informationssuche bietet.

## Aktivieren von {% data variables.product.prodname_discussions %} für dein Repository

Repositorybesitzer*innen und Personen mit Schreibzugriff können {% data variables.product.prodname_discussions %} für eine Community für ihre öffentlichen{% ifversion ghes > 3.5 %}, internen{% endif %} und privaten Repositorys aktivieren. Die Sichtbarkeit einer Unterhaltung wird von dem Repository geerbt, in dem die Unterhaltung erstellt wurde.

Wenn du {% data variables.product.prodname_discussions %} das erste Mal aktivierst, wirst du aufgefordert, ein Willkommensposting zu konfigurieren.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke unter dem Repositorynamen auf {% octicon "gear" aria-label="The gear icon" %} **Einstellungen**.
![Schaltfläche „Öffentliche Einstellungen“](/assets/images/help/discussions/public-repo-settings.png)
1. Klicke unter „Features“ auf **Diskussionen einrichten**.
  ![Schaltfläche „Diskussionen einrichten“ unter „Features“ zum Aktivieren oder Deaktivieren von GitHub Discussions für ein Repository](/assets/images/help/discussions/setup-discussions-button.png)
1. Bearbeite die Vorlage unter „Neue Diskussion starten“ so, dass sie den Ressourcen und dem Ton entspricht, den du für deine Community festlegen möchtest.
1. Klicke auf **Diskussion starten**.
  ![Schaltfläche „Diskussion starten“](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Aktivieren von {% data variables.product.prodname_discussions %} für deine Organisation

Organisationsbesitzer können {% data variables.product.prodname_discussions %} für ihre Organisation aktivieren.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Fördern von Diskussionsbeiträgen

Du kannst deine Community willkommen heißen und eine neue Form der Kommunikation für ein Repository oder eine Organisation einführen, indem du ein Willkommensposting erstellst und ihn an deine {% data variables.product.prodname_discussions %} Seite anheftest. Durch das Anheften und Sperren von Diskussionen wird den Mitgliedern verdeutlicht, dass ein Beitrag als Ankündigung gedacht ist. Du kannst Ankündigungen nutzen, um die Mitglieder auf weitere Ressourcen hinzuweisen und ihnen Tipps für das Eröffnen von Diskussionen in deiner Community zu geben. Weitere Informationen zum Anheften einer Diskussion findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).


## Festlegen von Communityrichtlinien für Mitwirkende

Du kannst für Repositorydiskussionen Beitragsrichtlinien festlegen, um die Mitwirkenden zu sinnvollen, nützlichen Unterhaltungen zu ermutigen, die für das Repository relevant sind. Darüber hinaus kannst du die README-Datei des Repositorys aktualisieren, um darin festzuhalten, wann Projektmitarbeiter ein Issue öffnen oder eine Diskussion starten sollten. Weitere Informationen zur Bereitstellung von Richtlinien für dein Projekt findest du unter {% ifversion fpt or ghec %} [Hinzufügen von Verhaltensregeln zu deinem Projekt](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) und {% endif %} [Einrichten deines Projekts für hilfreiche Beiträge](/communities/setting-up-your-project-for-healthy-contributions).

Für Organisationsdiskussionen teilst du Informationen über die Möglichkeiten der Zusammenarbeit mit deiner Organisation, indem du eine README zu deinem Organisationsprofil erstellst. Weitere Informationen findest du unter [Anpassen des Profils deiner Organisation](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile).

## Erstellen einer neuen Diskussion

Jeder authentifizierte Benutzer mit Anzeigeberechtigungen für das Repository kann eine Diskussion in diesem Repository erstellen. Und da Organisationsdiskussionen auf einem Quellrepository basieren, kann jeder authentifizierte Benutzer, der das Quellrepository anzeigen kann, eine Diskussion in dieser Organisation erstellen.

{% data reusables.discussions.starting-a-discussion %}

## Erstellen einer neuen Umfrage

Jeder authentifizierte Benutzer, der ein Repository anzeigen kann, kann eine Umfrage erstellen. Und da Organisationsdiskussionen auf einem Quellrepository basieren, kann jeder authentifizierte Benutzer, der das Quellrepository anzeigen kann, eine Umfrage in dieser Organisation erstellen.

{% data reusables.discussions.starting-a-poll %}

## Organisieren von Diskussionen

Repositorybesitzer und Personen mit Schreibzugriff auf das Repository können neue Kategorien erstellen, um die Diskussionen übersichtlich zu halten. Und da Organisationsdiskussionen auf einem Quellrepository basieren, können Repositorybesitzer und Personen mit Schreibrechten für das Quellrepository neue Kategorien für Organisationsdiskussionen erstellen.

Mitarbeiter*innen, die an Diskussionen teilnehmen und neue Diskussionen erstellen, können Diskussionen in die relevantesten vorhandenen Kategorien einordnen. Diskussionen können nach ihrer Erstellung auch in andere Kategorien eingeordnet werden. Weitere Informationen findest du unter [Verwalten von Kategorien für Diskussionen](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

{% data reusables.discussions.you-can-label-discussions %}

## Fördern von sinnvollen Unterhaltungen

Personen mit Schreibberechtigungen für das Repository oder das Quellrepository für Organisationsdiskussionen können dazu beitragen, wichtige Unterhaltungen sichtbar zu machen, indem sie Diskussionen anheften, sie können nicht mehr benötigte oder für die Gemeinschaft schädliche Diskussionen löschen und Diskussionen in geeignetere Repositorys im Besitz der Organisation verschieben. Weitere Informationen findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions).

Personen mit Selektierungsberechtigungen für das Repository oder das Quellrepository für Organisationsdiskussionen können dazu beitragen, die Diskussionen eines Projekts zu moderieren, indem sie Kommentare als Antworten markieren, sie können Diskussionen sperren, die nicht mehr relevant sind oder der Gemeinschaft schaden, und Themen in Diskussionen umwandeln, wenn sich eine Idee noch in einem frühen Entwicklungsstadium befindet. Weitere Informationen findest du unter [Moderieren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions).

## Nächste Schritte

Sobald es eine klare Vorstellung über den Arbeitsumfang und die Umsetzung einer Idee vom Konzept in die Praxis gibt, kannst du ein Issue erstellen und damit beginnen, deinen Fortschritt zu verfolgen. Weitere Informationen zum Erstellen eines Issues aus einer Diskussion findest du unter [Moderieren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions).
