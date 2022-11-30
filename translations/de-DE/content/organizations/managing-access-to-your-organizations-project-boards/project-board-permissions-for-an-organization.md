---
title: '{% data variables.product.prodname_project_v1_caps %}berechtigungen für eine Organisation'
intro: 'Organisationsbesitzer und Personen mit {% data variables.projects.projects_v1_board %}-Administratorberechtigungen können anpassen, wer Lese-, Schreib- und Administratorberechtigungen für die {% data variables.projects.projects_v1_boards %} deiner Organisation hat.'
redirect_from:
  - /articles/project-board-permissions-for-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/project-board-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: '{% data variables.product.prodname_project_v1_caps %} permissions'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fbc3ec7db52d6b4a417a4e9e93aea9ae717e2fca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614207'
---
{% data reusables.projects.project_boards_old %}

## Zuweisen von Benutzerrollen und Berechtigungen

Es gibt drei Berechtigungsstufen für ein {% data variables.projects.projects_v1_board %} für Personen und Teams:

{% data reusables.project-management.project-board-permissions %}

Organisationbesitzer*innen und Personen mit Administratorberechtigungen können einer Person den Zugriff auf ein {% data variables.projects.projects_v1_board %} der Organisation als Einzelperson, externe*r Mitarbeiter*in oder Organisationsmitglied oder über ihre Mitgliedschaft in einem Team oder einer Organisation gewähren. Externe Mitarbeiter*innen sind Personen, die kein Organisationsmitglied sind, aber die Berechtigungen für die Mitarbeit in deiner Organisation besitzen.

Organisationsbesitzer*innen und Personen mit Administratorberechtigungen für ein {% data variables.projects.projects_v1_board %} können auch:
- Standardberechtigungen für das Projektboard für alle Organisationsmitglieder festlegen
- den Zugriff auf das Projektboard für Organisationsmitglieder, Teams und externe Mitarbeiter verwalten Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf das {% data variables.product.prodname_project_v1 %} einer Organisation](/articles/managing-team-access-to-an-organization-project-board), [Verwalten des Zugriffs einer Einzelperson auf das {% data variables.product.prodname_project_v1 %} einer Organisation ](/articles/managing-an-individual-s-access-to-an-organization-project-board) oder [Verwalten des Zugriffs auf ein {% data variables.product.prodname_project_v1 %} für Organisationsmitglieder](/articles/managing-access-to-a-project-board-for-organization-members).
- die Sichtbarkeit des Projektboards verwalten Weitere Informationen findest du unter [Verwalten des Zugriffs auf ein {% data variables.product.prodname_project_v1 %} für Organisationsmitglieder](/articles/managing-access-to-a-project-board-for-organization-members).

## Kaskadierende Berechtigungen für {% data variables.projects.projects_v1_boards %}

{% data reusables.project-management.cascading-permissions %}

Wenn ein*e Organisationsbesitzer*in z. B. allen Organisationsmitgliedern Leseberechtigungen für ein {% data variables.projects.projects_v1_board %} erteilt hat und ein*e {% data variables.projects.projects_v1_board %}administrator*in einem Organisationsmitglied für dieses Board Schreibberechtigungen als einzelne*r Mitarbeiter*in erteilt, hätte diese Person Schreibberechtigungen für das {% data variables.projects.projects_v1_board %}.

## Sichtbarkeit von {% data variables.projects.projects_v1_board_caps %}s

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

{% data reusables.project-management.project-board-visibility %} Du kannst die Sichtbarkeit des {% data variables.projects.projects_v1_board %}s von privat in {% ifversion ghae %}intern{% else %}öffentlich{% endif %} und umgekehrt ändern. Weitere Informationen findest du unter [Ändern der Sichtbarkeit von {% data variables.product.prodname_project_v1 %}s](/articles/changing-project-board-visibility).

## Weiterführende Themen

- [Ändern der Sichtbarkeit von {% data variables.product.prodname_project_v1 %}s](/articles/changing-project-board-visibility).
- [Verwalten des Zugriffs einer Einzelperson auf das {% data variables.product.prodname_project_v1 %} einer Organisation](/articles/managing-an-individual-s-access-to-an-organization-project-board)
- [Verwalten des Teamzugriffs auf das {% data variables.product.prodname_project_v1 %} einer Organisation](/articles/managing-team-access-to-an-organization-project-board)
- [Verwalten des Zugriffs auf ein {% data variables.product.prodname_project_v1 %} für Organisationsmitglieder](/articles/managing-access-to-a-project-board-for-organization-members).
