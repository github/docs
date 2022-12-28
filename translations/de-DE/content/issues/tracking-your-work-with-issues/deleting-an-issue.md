---
title: Einen Issue löschen
intro: Personen mit Administratorberechtigungen für ein Repository können Issues dauerhaft aus einem Repository löschen.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 140bd1fdb272dd3203b993cf5f5f7038963fafe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146774572'
---
Ob Issues gelöscht werden können, hängt davon ab, ob das Repository einem persönlichen Konto oder einer Organisation gehört:
- Nur das persönliche Konto, das im Besitz des Repositorys mit den Issues ist, kann diese löschen.
- Nur Konten mit Administrator- oder Besitzerberechtigungen können Issues in einem Repository löschen, das einer Organisation gehört.

  Zum Löschen eines Issue in einem Repository im Besitz einer Organisation muss der Organisationsbesitzer die Option zum Löschen von Issues für die Repositorys der Organisation aktivieren. Weitere Informationen findest du unter „[Zulassen, dass Personen Issues in deiner Organisation löschen können](/articles/allowing-people-to-delete-issues-in-your-organization)“ und „[Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)“.

Mitarbeiter*innen werden nicht benachrichtigt, wenn Issues gelöscht werden. Wenn Mitarbeiter*innen die URL eines gelöschten Issues aufrufen, wird ihnen eine Meldung angezeigt, dass die Website nicht gefunden werden kann. Sie können jedoch die API verwenden, um festzustellen, dass sie gelöscht wurde. Personen mit Administrator- oder Inhaberberechtigungen für das Repository sehen zusätzlich den Benutzernamen der Person, die den Issue gelöscht hat, und den Zeitpunkt des Löschvorgangs.

1. Navigiere zu dem Issue, den du löschen möchtest.
2. Klicke auf der rechten Seite unter „Benachrichtigungen“ auf **Issue löschen**.
![Hervorgehobener Text „Diesen Issue löschen“ unten auf der rechten Seitenleiste der Issue-Seite](/assets/images/help/issues/delete-issue.png)
4. Um das Löschen zu bestätigen, klicke auf **Dieses Issue löschen**.

## Weiterführende Themen

- „[Einen Pull Request zu einem Issue verknüpfen](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)“
