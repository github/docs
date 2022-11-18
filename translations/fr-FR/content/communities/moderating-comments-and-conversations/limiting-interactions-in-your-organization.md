---
title: Limitation des interactions dans votre organisation
intro: Vous pouvez appliquer temporairement une période d’activité limitée pour certains utilisateurs dans tous les dépôts publics appartenant à votre organisation.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/limiting-interactions-in-your-organization
  - /articles/limiting-interactions-in-your-organization
  - /github/building-a-strong-community/limiting-interactions-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
permissions: Organization owners and moderators can limit interactions in an organization.
topics:
  - Community
shortTitle: Limit interactions in org
ms.openlocfilehash: 03bfad7a0da3386b6205517deb66e6b923de8386
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066681'
---
## À propos des limitations d’interactions temporaires

La limitation des interactions dans votre organisation permet de limiter les interactions de manière temporaire pour tous les dépôts publics appartenant à l’organisation. {% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Une fois le délai de limitation dépassé, les utilisateurs peuvent reprendre une activité normale dans les dépôts publics de votre organisation.

{% data reusables.community.types-of-interaction-limits %}

Les membres de l’organisation ne sont affectés par aucun type de limitation.

Quand vous activez les limitations d’activités à l’échelle de l’organisation, vous ne pouvez pas activer ou désactiver les limitations d’interactions sur des dépôts individuels. Pour plus d’informations sur la limitation des activités d’un dépôt individuel, consultez « [Limitation des interactions dans votre dépôt](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) ».

Les propriétaires et les modérateurs d’organisations peuvent également bloquer des utilisateurs pour une durée spécifique. À l’expiration du blocage, l’utilisateur est automatiquement débloqué. Pour plus d’informations, consultez « [Blocage de l’accès d’un utilisateur à votre organisation](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization) ».

## Limitation des interactions dans votre organisation


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. _Pour les propriétaires d’organisations :_ dans la section « Accès » de la barre latérale, sélectionnez **{% octicon "report" aria-label="The report icon" %} Modération**, puis cliquez sur **Limitations des interactions**.

   _Pour les modérateurs d’organisations_ : dans la barre latérale, cliquez sur **Limitations des interactions**.

{% data reusables.community.set-interaction-limit %} ![Options des limitations d’interactions temporaires](/assets/images/help/organizations/organization-temporary-interaction-limits-options.png)

## Pour aller plus loin
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
- « [Gestion de l’accès d’un individu à un dépôt d’organisation](/articles/managing-an-individual-s-access-to-an-organization-repository) »
- « [Niveaux d’autorisation pour un dépôt de compte personnel](/articles/permission-levels-for-a-user-account-repository) »
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
- « [Gestion des modérateurs dans votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization) »
