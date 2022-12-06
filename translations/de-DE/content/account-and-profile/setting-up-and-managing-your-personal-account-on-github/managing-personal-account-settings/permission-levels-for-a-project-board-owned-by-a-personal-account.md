---
title: Berechtigungsstufen für ein Projektboard im Besitz eines persönlichen Kontos
intro: 'Ein Projektboard im Besitz eines persönlichen Kontos verfügt über zwei Berechtigungsebenen: den Projektboardbesitzer und die Mitarbeiter*innen.'
redirect_from:
  - /articles/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/permission-levels-for-user-owned-project-boards
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-user-owned-project-boards
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Project board permissions
ms.openlocfilehash: 353b9ac497abc7110437aafdf691ca48a3ff6cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165004'
---
## Zuweisen von Benutzerrollen und Berechtigungen

Es gibt nur einen Besitzer eines benutzereigenen Projektboards. Diese Berechtigung kann nicht mit einem anderen persönlichen Konto geteilt werden. Neben dem Inhaber können auch andere Personen an Projektboards mitarbeiten.

Für Projektboard-Mitarbeiter gibt es drei Berechtigungsstufen:

{% data reusables.project-management.project-board-permissions %}

## Inhaber- und Administratorberechtigungen für ein Benutzer-Projektboard

Der Projektboard-Inhaber und die Mitarbeiter mit Administratorzugriff besitzen die vollständige Kontrolle über das Projektboard. Neben den Berechtigungen, die auch Projektboard-Mitarbeitern erteilt werden, stehen einem Projektboard-Inhaber und Mitarbeitern mit Administratorzugriff zusätzlich folgende Möglichkeiten zur Verfügung:

- [Verwalten, Anzeigen und Hinzufügen von Mitarbeitern](/articles/managing-access-to-your-user-account-s-project-boards)
- [Konfigurieren eines Projektboards als {% ifversion ghae %}intern{% else %}öffentlich{% endif %} oder privat](/articles/changing-project-board-visibility)
- [Löschen eines Projektboards](/articles/deleting-a-project-board/)
- [Schließen eines Projektboards](/articles/closing-a-project-board/)
- [Erneutes Öffnen eines geschlossenen Projektboards](/articles/reopening-a-closed-project-board)

## Lese- und Schreibberechtigungen für ein Benutzer-Projektboard

Mitarbeiter mit Lesezugriff auf ein Benutzer-Projektboard können Folgendes tun:

- Ein Projektboard anzeigen
- Ein Projektboard kopieren
- Tickets auf einem Projektboard filtern

Mitarbeiter mit Schreibzugriff auf ein Benutzer-Projektboard können Folgendes tun:

- Ein Projektboard anzeigen
- Ein Projektboard kopieren
- Tickets auf einem Projektboard filtern
- Ein Projektboard bearbeiten
- Ein Repository mit einem Projektboard verknüpfen
- Automatisierung für Projektboards konfigurieren
- Ein Projektboard kopieren
- Issues und Pull Requests zu einem Projektboard hinzufügen
- Hinweise zu einem Projektboard hinzufügen
- Fortschritt in deinem Projektboard verfolgen
- Tickets auf einem Projektboard archivieren

## Sichtbarkeit des Projektboards

Du kannst die Sichtbarkeit des Projektboards von privat in {% ifversion ghae %}intern{% else %}öffentlich{% endif %} und wieder zurück ändern. Standardmäßig sind Benutzer-Projektboards privat. Weitere Informationen findest du unter [Ändern der Sichtbarkeit von Projektboards](/articles/changing-project-board-visibility).

## Weiterführende Themen

  - [Verwalten des Zugriffs auf die Projektboards deines persönlichen Kontos](/articles/managing-access-to-your-user-account-s-project-boards)
