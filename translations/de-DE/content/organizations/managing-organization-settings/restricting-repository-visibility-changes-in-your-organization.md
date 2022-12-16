---
title: Änderung der Sichtbarkeit von Repositorys in Ihrer Organisation einschränken
intro: Zum Schutz deiner Organisationsdaten kannst du die Berechtigungen für die Änderung der Sichtbarkeit von Repositorys in deiner Organisation konfigurieren.
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set visibility changes policy
permissions: Organization owners can restrict repository visibility changes for an organization.
ms.openlocfilehash: e404d8dea2e188ff5b0b0a8b15c9767374269436
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106219'
---
Du kannst einschränken, wer die Sichtbarkeit von Repositorys in deiner Organisation ändern kann, z. B. das Ändern eines Repositorys von privat zu öffentlich. Weitere Informationen zur Sichtbarkeit von Repositorys findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility). 

Du kannst die Möglichkeit, die Sichtbarkeit von Repositorys zu ändern, auf die Besitzer der Organisation beschränken, oder allen Personen mit Administratorzugriff auf ein Repository erlauben, die Sichtbarkeit zu ändern.

{% warning %}

**Warnung**: Wenn diese Einstellung aktiviert ist, können Personen mit Administratorzugriff beliebige Sichtbarkeit für ein vorhandenes Repository auswählen, auch wenn du nicht erlaubst, diesen Repositorytyp zu erstellen. Weitere Informationen zum Einschränken der Sichtbarkeit von Repositorys während der Erstellung findest du unter [Einschränken der Repositoryerstellung in deiner Organisation](/articles/restricting-repository-creation-in-your-organization).

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Deaktiviere unter „Änderung der Sichtbarkeit von Repositorys“ das Kontrollkästchen **Mitgliedern die Änderung der Sichtbarkeit von Repositorys für diese Organisation erlauben**.
![Kontrollkästchen zur Erlaubnis der Änderung der Sichtbarkeit von Repositorys durch Mitglieder](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Klicken Sie auf **Speichern**.
