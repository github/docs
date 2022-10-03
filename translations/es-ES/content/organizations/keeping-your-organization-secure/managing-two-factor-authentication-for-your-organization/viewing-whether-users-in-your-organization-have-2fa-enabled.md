---
title: Ver si los usuarios en tu organización han habilitado 2FA
intro: 'Puedes ver los propietarios de la organización, miembros y colaboradores externos que han habilitado la autenticación de dos factores.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135078'
---
{% note %}

**Nota:** Puede exigir que todos los miembros {% ifversion fpt or ghec %}, incluidos los propietarios, los administradores de facturación y{% else %} y{% endif %} los colaboradores externos de la organización tengan habilitada la autenticación en dos fases. Para más información, vea "[Exigencia de la autenticación en dos fases en la organización](/articles/requiring-two-factor-authentication-in-your-organization)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Para ver los miembros de la organización, incluidos los propietarios de la organización, que han habilitado o deshabilitado la autenticación en dos fases, a la derecha, haga clic en **2FA** y seleccione **Habilitado** o **Deshabilitado**.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Para ver los colaboradores externos de la organización, en la pestaña "Personas", haga clic en **Colaboradores externos**.
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Para ver qué colaboradores externos han habilitado o deshabilitado la autenticación en dos fases, a la derecha, haga clic en **2FA** y seleccione **Habilitado** o **Deshabilitado**.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## Información adicional

- "[Visualización de los roles de las personas en una organización](/articles/viewing-people-s-roles-in-an-organization)"
