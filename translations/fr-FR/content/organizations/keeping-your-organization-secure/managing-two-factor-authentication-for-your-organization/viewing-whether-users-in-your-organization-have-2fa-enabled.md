---
title: "Voir si l’authentification à 2\_facteurs (2FA) est activée pour les utilisateurs de votre organisation"
intro: 'Vous pouvez voir quels propriétaires, membres et collaborateurs externes de l’organisation ont activé l’authentification à deux facteurs.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128528'
---
{% note %}

**Remarque :** vous pouvez exiger que tous les membres{% ifversion fpt or ghec %}, y compris, les propriétaires, les gestionnaires de facturation et{% else %} et{% endif %} collaborateurs externes de votre organisation ont activé l’authentification à deux facteurs. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs dans votre organisation](/articles/requiring-two-factor-authentication-in-your-organization) ».

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Pour voir les membres de l’organisation, y compris les propriétaires de l’organisation, qui ont activé ou désactivé l’authentification à deux facteurs, sur la droite, cliquez sur **2FA**, puis sélectionnez **Activé** ou **Désactivé**.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Pour voir les collaborateurs externes dans votre organisation, sous l’onglet « Personnes », cliquez sur **Collaborateurs externes**.
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Pour voir les collaborateurs externes qui ont activé ou désactivé l’authentification à deux facteurs, sur la droite, cliquez sur **2FA**, puis sélectionnez **Activé** ou **Désactivé**.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## Pour aller plus loin

- « [Affichage des rôles des personnes dans une organisation](/articles/viewing-people-s-roles-in-an-organization) »
