---
title: 'Was geschieht mit Forks, wenn ein Repository gelöscht wird oder sich dessen Sichtbarkeit ändert?'
intro: 'Wenn du dein Repository löschst oder dessen Sichtbarkeit änderst, wirkt sich dies auf die Forks dieses Repositorys aus.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /articles/changing-the-visibility-of-a-network
  - /articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-issues-and-pull-requests/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
  - /github/collaborating-with-pull-requests/working-with-forks/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Deleted or changes visibility
ms.openlocfilehash: 95296f33d9163cd1171481386efd0a2351095c39
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191361'
---
{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Privates Repository löschen

Wenn du ein privates Repository löschst, werden alle zugehörigen privaten Forks ebenfalls gelöscht.

{% ifversion fpt or ghes or ghec %}

## Öffentliches Repository löschen

Wenn du ein öffentliches Repository löschst, wird einer der vorhandenen öffentlichen Forks als neues Upstream-Repository ausgewählt. Alle anderen Repositorys werden von diesem neuen Upstream-Repository geforkt und nachfolgende Pull Requests gehen an dieses neue Upstream-Repository.

{% endif %}

## Private Forks und Berechtigungen

{% data reusables.repositories.private_forks_inherit_permissions %}

{% ifversion fpt or ghes or ghec %}

## Öffentliches Repository in ein privates Repository ändern

Wenn ein öffentliches Repository auf privat festgelegt wird, werden die zugehörigen öffentlichen Forks in ein neues Netzwerk abgespalten. Wie beim Löschen eines öffentlichen Repositorys wird einer der vorhandenen öffentlichen Forks als neues Upstream-Repository ausgewählt und alle anderen Repositorys werden von diesem neuen Upstream-Repository geforkt. Nachfolgende Pull Requests werden an dieses neue Upstream-Repository übermittelt.

Anders ausgedrückt: Die Forks eines öffentlichen Repositorys bleiben in ihrem eigenen separaten Repositorynetzwerk öffentlich, auch wenn das Upstream-Repository als privat festgelegt wird. Dadurch können Fork-Inhaber ohne Unterbrechung weiterhin arbeiten und zusammenarbeiten. Wenn öffentliche Forks nicht auf diese Weise in ein separates Netzwerk verschoben wurden, benötigen die Inhaber dieser Forks die entsprechenden [Zugriffsberechtigungen](/articles/access-permissions-on-github), um Änderungen vom (inzwischen privaten) Upstream-Repository abzurufen – auch wenn sie diese Berechtigungen zuvor nicht benötigt wurden.

{% ifversion ghes or ghae %} Wenn für ein öffentliches Repository der anonyme Git-Lesezugriff aktiviert ist und das Repository auf privat festgelegt wird, verlieren alle Forks des Repositorys den anonymen Git-Lesezugriff und verwenden wieder die standardmäßig deaktivierte Einstellung. Wenn ein geforktes Repository als öffentlich festgelegt wird, kann der anonyme Git-Lesezugriff durch die Repository-Administratoren wieder aktiviert werden. Weitere Informationen findest du unter [Aktivieren des anonymen Git-Lesezugriffs für ein Repository](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository).
{% endif %}

### Privates Repository löschen

Wenn ein öffentliches Repository auf privat festgelegt und anschließend gelöscht wird, bleiben die zugehörigen öffentlichen Forks in einem separaten Netzwerk erhalten.

## Privates Repository in ein öffentliches Repository ändern

Wenn ein privates Repository als öffentlich festgelegt wird, werden alle privaten Forks in eigenständige private Repositorys umgewandelt und werden zum Upstream-Repository ihres eigenen neuen Repository-Netzwerks. Private Forks werden niemals automatisch auf öffentlich festgelegt, da sie sensible Commits enthalten können, die nicht veröffentlicht werden sollten.

### Öffentliches Repository löschen

Wenn ein privates Repository auf öffentlich festgelegt und anschließend gelöscht wird, bleiben die zugehörigen privaten Forks in separaten Netzwerken als eigenständige private Repositorys erhalten.

{% endif %}

{% ifversion ghes or ghec or ghae %}

## Ändern der Sichtbarkeit eines internen Repositorys



Wenn die Richtlinie deines Unternehmens Forking erlaubt, sind alle Forks von internen Repositorys privat. Wenn du die Sichtbarkeit eines internen Repositorys änderst, bleibt jeder Fork, der von einer Organisation oder einem persönlichen Konto gehört, privat bleiben.

### Löschen des internen Repositorys

Wenn du die Sichtbarkeit eines internen Repositorys änderst und dann das Repository löschst, wird die Forks weiterhin in einem separaten Netzwerk vorhanden sein.

{% endif %}

## Weiterführende Themen

- [Festlegen der Sichtbarkeit eines Repository](/articles/setting-repository-visibility)
- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- „[Verwalten der Fork-Richtlinie für dein Repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)“
- „[Die Fork-Richtlinie für deine Organisation verwalten](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)“
- „[Erzwingen von Repository-Verwaltungsrichtlinien in einem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-forking-private-or-internal-repositories)“
