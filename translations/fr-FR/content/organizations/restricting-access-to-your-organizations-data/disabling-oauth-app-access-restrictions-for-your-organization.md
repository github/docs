---
title: Désactivation des restrictions d’accès aux applications OAuth pour votre organisation
intro: Les propriétaires d’organisations peuvent désactiver les restrictions sur {% data variables.product.prodname_oauth_apps %} qui ont accès aux ressources de l’organisation.
redirect_from:
- /articles/disabling-third-party-application-restrictions-for-your-organization
- /articles/disabling-oauth-app-access-restrictions-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Disable OAuth App
ms.openlocfilehash: 41fae63d8d491eec7a6cd6a275958d5c96fb5f5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134404"
---
{% danger %}

**Avertissement** : lorsque vous désactivez les restrictions d’accès {% data variables.product.prodname_oauth_app %} pour votre organisation, tous ses membres autorisent automatiquement {% data variables.product.prodname_oauth_app %} à accéder aux ressources privées de l’organisation lorsqu’ils approuvent une application à des fins d’utilisation dans les paramètres de leurs compte personnel.

{% enddanger %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Cliquez sur **Supprimer les restrictions**.
  ![Bouton Supprimer les restrictions](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. Après avoir examiné les informations relatives à la désactivation des restrictions d’application tierces, cliquez sur **Oui, supprimer les restrictions d’application**.
  ![Bouton de confirmation de suppression](/assets/images/help/settings/settings-third-party-confirm-disable.png)
