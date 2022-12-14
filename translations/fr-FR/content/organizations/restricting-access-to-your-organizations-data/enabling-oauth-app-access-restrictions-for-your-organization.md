---
title: Activation des restrictions d’accès aux applications OAuth pour votre organisation
intro: Les propriétaires d’organisations peuvent activer les restrictions d’accès {% data variables.product.prodname_oauth_app %} pour empêcher les applications non fiables d’accéder aux ressources de l’organisation tout en permettant aux membres de l’organisation d’utiliser {% data variables.product.prodname_oauth_apps %} pour leurs comptes personnels.
redirect_from:
- /articles/enabling-third-party-application-restrictions-for-your-organization
- /articles/enabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Enable OAuth App
ms.openlocfilehash: 7ae5885530f449c8ce9981067b0d0fe8b23af0d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134400"
---
{% data reusables.organizations.oauth_app_restrictions_default %}

{% warning %}

**Avertissements** :
- L’activation des restrictions d’accès {% data variables.product.prodname_oauth_app %} révoque l’accès de l’organisation pour toutes les {% data variables.product.prodname_oauth_apps %} et clés SSH précédemment autorisées. Pour plus d’informations, consultez « [À propos des restrictions d’accès {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions) ».
- Une fois que vous avez configuré les restrictions d’accès {% data variables.product.prodname_oauth_app %}, veillez à réinscrire les {% data variables.product.prodname_oauth_app %} qui nécessitent l’accès aux données privées de l’organisation en permanence. Tous les membres de l’organisation doivent créer de nouvelles clés SSH, et l’organisation doit créer de nouvelles clés de déploiement si nécessaire.
- Lorsque les restrictions d’accès à {% data variables.product.prodname_oauth_app %} sont activées, les applications peuvent utiliser un jeton OAuth pour accéder aux informations sur les transactions {% data variables.product.prodname_marketplace %} .

{% endwarning %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Sous « Stratégie d’accès aux applications tierces », cliquez sur **Configurer les restrictions d’accès aux applications**.
  ![Bouton Configurer des restrictions](/assets/images/help/settings/settings-third-party-set-up-restrictions.png)
6. Après avoir examiné les informations relatives aux restrictions d’accès tiers, cliquez sur **Restreindre l’accès aux applications tierces**.
  ![Bouton de confirmation de restriction](/assets/images/help/settings/settings-third-party-restrict-confirm.png)
