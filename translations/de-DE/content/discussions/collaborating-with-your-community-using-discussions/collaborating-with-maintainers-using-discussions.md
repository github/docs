---
title: Zusammenarbeit mit Betreuern mithilfe von Diskussionen
shortTitle: Collaborating with maintainers
intro: 'Du kannst auf {% data variables.product.product_name %} zu Zielen, Plänen, Integrität und Community eines Projekts beitragen, indem du mit den Betreuern des Projekts diskutierst.'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
ms.openlocfilehash: f090088d55e946e67c1f0b5d790deca9fd794a90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410251'
---
## Informationen zur Zusammenarbeit mit Betreuern mithilfe von {% data variables.product.prodname_discussions %}

{% data reusables.discussions.about-discussions %} Wenn du ein Projekt verwendest oder daran mitwirkst, kannst du eine Diskussion starten, um Vorschläge zu machen und dich mit Betreuern und Communitymitgliedern über deine Pläne, Fragen, Ideen und Feedback auszutauschen. Weitere Informationen findest du unter [Informationen zu Diskussionen](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %} 

Repositoryadministratoren und Projektbetreuer können eine Diskussion in diesem Repository löschen. Ebenso können Administratoren und Betreuer des Quellrepositorys für die Diskussionen einer Organisation eine Diskussion in dieser Organisation löschen. Weitere Informationen findest du unter [Verwalten von Diskussionen](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion).

{% data reusables.discussions.github-recognizes-members %} Diese Mitglieder werden in einer Liste der hilfreichsten Mitwirkenden an den Diskussionen des Projekts angezeigt. Wenn dein Projekt wächst, kannst du aktiven Mitgliedern deiner Community höhere Zugriffsberechtigungen erteilen. Weitere Informationen findest du unter [Gewähren höherer Berechtigungen für Topmitwirkende](/discussions/guides/granting-higher-permissions-to-top-contributors).

![Die hilfreichsten Mitwirkenden bei Diskussionen zu einem Projekt](/assets/images/help/discussions/most-helpful.png)

Weitere Informationen zur Teilnahme an Diskussionen findest du unter [Teilnehmen an einer Diskussion](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion).

## Voraussetzungen

Damit mit Betreuern in Repositorydiskussionen zusammengearbeitet werden kann, muss ein Repositoryadministrator oder Projektbetreuer {% data variables.product.prodname_discussions %} für das Repository aktivieren. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von {% data variables.product.prodname_discussions %} für ein Repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository).

Damit mit Betreuern in Organisationsdiskussionen zusammengearbeitet werden kann, müssen {% data variables.product.prodname_discussions %} für die Organisation aktiviert sein. Weitere Informationen findest du unter [Aktivieren oder Deaktivieren von {% data variables.product.prodname_discussions %} für eine Organisation](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Starten einer Diskussion

{% data reusables.discussions.starting-a-discussion %}

## Starten einer Umfrage

{% data reusables.discussions.starting-a-poll %}

## Filtern der Liste der Diskussionen

Du kannst nach Diskussionen suchen und die Liste der Diskussionen in einem Repository oder einer Organisation filtern. Weitere Informationen findest du unter [Durchsuchen von Diskussionen](/search-github/searching-on-github/searching-discussions).

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. Gib eine Suchabfrage in das Feld **Alle Diskussionen durchsuchen** ein. Optional kannst du rechts neben dem Suchfeld auf eine Schaltfläche klicken, um die Ergebnisse weiter zu filtern.
  ![Suchleiste und Schaltflächen zum Filtern von Diskussionen](/assets/images/help/discussions/search-and-filter-controls.png)
1. Klicke in der Liste der Diskussionen auf die Diskussion, die du anzeigen möchtest.
  ![Suchergebnisse für Diskussionen](/assets/images/help/discussions/search-result.png)

## Konvertieren eines Issue in eine Diskussion

{% data reusables.discussions.you-can-convert-an-issue %} Weitere Informationen findest du unter [Moderieren von Diskussionen](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion).

## Weitere Informationsquellen

- [Informationen zum Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github) {%- ifversion fpt or ghec %}
- [Aufrechterhalten der Sicherheit auf {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github) {%- endif %}
