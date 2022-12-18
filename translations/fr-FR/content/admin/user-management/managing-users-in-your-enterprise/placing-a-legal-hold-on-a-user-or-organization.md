---
title: Application d’un archivage juridique pour un utilisateur ou une organisation
intro: Vous pouvez appliquer un archivage juridique pour un utilisateur ou une organisation pour faire en sorte que les dépôts qu’ils possèdent ne puissent pas être supprimés définitivement de votre entreprise.
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199944'
---
En règle générale, si quelqu’un supprime un dépôt, celui-ci reste disponible sur disque pendant 90 jours et peut être restauré par le biais du tableau de bord d’administrateur de site. Au bout de 90 jours, le dépôt est vidé et définitivement supprimé. Si vous appliquez un archivage juridique pour utilisateur ou une organisation, les dépôts qu’ils possèdent restent disponibles pour restauration indéfiniment.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Cliquez sur **Appliquer un archivage juridique**.
![Bouton Appliquer un archivage juridique](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
