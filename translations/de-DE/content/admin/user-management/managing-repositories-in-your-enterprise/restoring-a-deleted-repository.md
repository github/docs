---
title: Wiederherstellen eines gelöschten Repositorys
intro: 'Gelöschte Repositorys können wiederhergestellt werden, sodass ihr Inhalt wieder verfügbar wird.'
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199786'
---
## Informationen zur Repository-Wiederherstellung

Wenn ein Repository gelöscht wird, bleibt es in der Regel 90 Tage lang weiterhin auf der Disk und kann über das Websiteadministrator-Dashboard wiederhergestellt werden. Weitere Informationen findest du unter [Websiteadministrator-Dashboard](/admin/configuration/configuring-your-enterprise/site-admin-dashboard).

Außer wenn eine gesetzliche Aufbewahrungspflicht in Kraft ist, wird das Repository nach 90 Tagen bereinigt und endgültig gelöscht.

Wenn ein Repository Teil eines Fork-Netzwerks war, als es gelöscht wurde, wird das wiederhergestellte Repository vom ursprünglichen Fork-Netzwerk getrennt.

Wenn du ein Repository löschst, kann es bis zu einer Stunde dauern, bis dieses Repository wiederhergestellt werden kann.

Beim Wiederherstellen eines Repositorys werden etwaige Releaseanhänge oder Teamberechtigungen nicht wiederhergestellt. Wiederhergestellte Probleme werden nicht gekennzeichnet.

## Wiederherstellen eines gelöschten Repositorys

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. Klicke im Abschnitt {% octicon "repo" aria-label="The repo icon" %} **Repositorys** auf den Link {% octicon "trash" aria-label="The trash icon" %} **Gelöschte Repositorys**.
1. Suche das Repository, das du wiederherstellen möchtest, in der Liste „Deleted repositories“ (Gelöschte Repositorys), und klicke dann rechts neben dem Repositorynamen auf **Restore** (Wiederherstellen).
1. Zur Bestätigung, dass du das genannte Repository wiederherstellen möchtest, klicke auf **Restore** (Wiederherstellen).

## Weiterführende Themen

- „[Festlegen einer gesetzlichen Aufbewahrungspflicht für einen Benutzer oder eine Organisation](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)“
