---
title: Informationen zum Profil deiner Organisation
intro: Auf der Profilseite deiner Organisation werden grundlegende Informationen zu deiner Organisation angezeigt.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: a42d5393de00e57f0b642c89a349da86b4ad55f1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108387'
---
Du kannst optional eine Beschreibung, einen Standort, eine Website und eine E-Mail-Adresse für deine Organisation hinzufügen und wichtige Repositorys anheften.{% ifversion fpt or ghec or ghes > 3.3 %} Du kannst das öffentliche Profil deiner Organisation anpassen, indem du eine README.md-Datei hinzufügst. Weitere Informationen findest du unter "[Anpassen des Profils deiner Organisation](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".{% endif %}

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können die Identität ihrer Organisation bestätigen und einen Badge für "Überprüft" auf der Profilseite ihrer Organisation anzeigen, indem sie die Domänen der Organisation mit {% data variables.product.product_name %} überprüfen. Weitere Informationen findest du unter "[Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.
{% elsif ghec or ghes %} Um die Identität deiner Organisation zu bestätigen und den Badge „Verifiziert“ auf der Profilseite deiner Organisation anzuzeigen, kannst du die Domänen deiner Organisation mit {% data variables.product.prodname_dotcom %} verifizieren. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).
{% endif %}

{% ifversion fpt or ghes or ghec %} ![Beispiel-Organisationsprofilseite](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![Beispiel-Organisationsprofilseite](/assets/images/help/profile/org_profile.png) {% endif %}

## Weitere Informationsquellen

- "[Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
