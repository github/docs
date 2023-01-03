---
title: Repository löschen
intro: 'Du kannst ein Repository oder einen Fork löschen, wenn du Organisationsinhaber*in bist oder über Administratorberechtigungen für das Repository oder den Fork verfügst. Durch das Löschen eines geforkten Repositorys wird das vorgelagerte Repository nicht gelöscht.'
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 53e6b69113a5483ea37c7ddd34dee7921959b62a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132304'
---
{% data reusables.organizations.owners-and-admins-can %} ein Organisations-Repository löschen. Wenn **Mitgliedern das Löschen oder Übertragen von Repositorys für diese Organisation erlauben** deaktiviert wurde, können nur Organisationsbesitzer Organisationsrepositorys löschen. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}Beim Löschen eines öffentlichen Repositorys werden keine Forks des Repositorys gelöscht.{% endif %}

{% warning %}

**Warnungen**:

- Das Löschen eines Repositorys löscht Releaseanhänge und Teamberechtigungen **dauerhaft**. Diese Aktion kann **nicht** rückgängig gemacht werden.
- Beim Löschen eines privaten{% ifversion ghes or ghec or ghae %} oder internen{% endif %} Repositorys werden alle Forks des Repositorys gelöscht.

{% endwarning %}

Einige gelöschte Repositorys können innerhalb von 90 Tagen nach dem Löschen wiederhergestellt werden. {% ifversion ghes or ghae %}Deine Websiteadministrator*innen können ein gelöschtes Repository möglicherweise für dich wiederherstellen. Weitere Informationen findest du unter [Wiederherstellen eines gelöschten Repositorys](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository). {% else %}Weitere Informationen findest du unter [Wiederherstellen eines gelöschten Repositorys](/articles/restoring-a-deleted-repository).{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
2. Klicke unter „Gefahrenzone“ auf **Dieses Repository löschen**.
   ![Schaltfläche zum Löschen des Repositorys](/assets/images/help/repository/repo-delete.png)
3. **Lies die Warnungen**.
4. Um sicherzustellen, dass du das richtige Repository löschst, gib den Namen des Repositorys ein, das du löschen möchtest.
   ![Löschbezeichnung](/assets/images/help/repository/repo-delete-confirmation.png)
5. Klicke auf **Ich verstehe die Folgen, dieses Repository löschen**.
