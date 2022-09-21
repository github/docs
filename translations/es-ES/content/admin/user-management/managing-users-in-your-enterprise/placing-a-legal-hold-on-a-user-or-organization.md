---
title: Asignar un titular legal a un usuario o una organización
intro: Puedes asignar un titular legal a un usuario o una organización para garantizar que los repositorios que les pertenezcan no se puedan eliminar de forma permanente desde tu empresa.
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199950'
---
Generalmente, si alguien elimina un repositorio, estará disponible en el disco por 90 días y se puede restablecer mediante el tablero de administración del sitio. Después de los 90 días, el repositorio se purga y se elimina para siempre. Si asignas un titular legal a un usuario o una organización, los repositorios que ellos poseen se pueden restablecer indefinidamente.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Haga clic en **Colocar suspensión legal**.
![Botón Colocar suspensión legal](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
