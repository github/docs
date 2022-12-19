---
title: Wiederherstellen eines gelöschten Repositorys
intro: '{% ifversion ghes or ghae %}Ein*e Unternehmensinhaber*in{% elsif fpt or ghec %}Du{% endif %} kannst einige gelöschte Repositorys zum Wiederherstellen ihrer Inhalte wiederherstellen.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 233785cc42ac6dd97a35d042186ae198dd69502a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146200098'
---
{% ifversion ghes or ghae %}

In der Regel können gelöschte Repositorys innerhalb von 90 Tagen von einem Unternehmensinhaber bzw. einer Unternehmensinhaberin{% ifversion ghes %} auf {% data variables.product.product_location %}{% endif %} wiederhergestellt werden. Weitere Informationen findest du unter [Wiederherstellen eines gelöschten Repositorys](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository). 

{% else %}

## Informationen zur Repository-Wiederherstellung

Ein gelöschtes Repository kann innerhalb von 90 Tagen wiederhergestellt werden. Dies gilt allerdings nicht, wenn das Repository Teil eines Forknetzwerks war, das derzeit nicht leer ist. Ein Fork-Netzwerk besteht aus einem übergeordneten Repository, den Forks des Repositorys und den Forks dieser Repository-Forks. Wenn dein Repository Teil eines Fork-Netzwerks war, kann es nur dann wiederhergestellt werden, wenn alle anderen Repositorys im Netzwerk gelöscht oder vom Netzwerk getrennt wurden. Weitere Informationen zu Forks findest du unter „[Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)“.

Soll ein Repository wiederhergestellt werden, das Teil eines derzeit nicht leeren Fork-Netzwerks war, wende dich an {% data variables.contact.contact_support %}.

Wenn du ein Repository löschst, kann es bis zu einer Stunde dauern, bis dieses Repository wiederhergestellt werden kann.

Beim Wiederherstellen eines Repositorys werden etwaige Releaseanhänge oder Teamberechtigungen nicht wiederhergestellt. Wiederhergestellte Probleme werden nicht gekennzeichnet.

## Wiederherstellen eines gelöschten Repositorys eines Benutzerkontos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Gelöschtes Repository einer Organisation wiederherstellen


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## Weiterführende Themen

- [Löschen eines Repositorys](/articles/deleting-a-repository)

{% endif %}
