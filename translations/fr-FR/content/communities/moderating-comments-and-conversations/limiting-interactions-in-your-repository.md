---
title: Limitation des interactions dans votre dépôt
intro: Vous pouvez appliquer temporairement une période d’activité limitée pour certains utilisateurs sur un référentiel public.
redirect_from:
  - /articles/limiting-interactions-with-your-repository
  - /articles/limiting-interactions-in-your-repository
  - /github/building-a-strong-community/limiting-interactions-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
permissions: 'People with admin permissions to a repository, and organization moderators, can temporarily limit interactions in that repository.'
topics:
  - Community
shortTitle: Limit interactions in repo
ms.openlocfilehash: 0b49e1bfdf29be5dc270a453512701c9369c5933
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067249'
---
## À propos des limitations d’interactions temporaires

{% data reusables.community.interaction-limits-restrictions %}

{% data reusables.community.interaction-limits-duration %} Une fois le délai de limitation dépassé, les utilisateurs peuvent reprendre une activité normale dans votre dépôt.

{% data reusables.community.types-of-interaction-limits %}

Vous pouvez également activer les limitations d’activités sur tous les dépôts appartenant à votre compte personnel ou à une organisation. Si une limitation à l’échelle de l’utilisateur ou de l’organisation est activée, vous ne pouvez pas limiter l’activité des dépôts individuels appartenant au compte. Pour plus d’informations, consultez « [Limitation des interactions pour votre compte personnel](/communities/moderating-comments-and-conversations/limiting-interactions-for-your-personal-account) » et « [Limitation des interactions dans votre organisation](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization) ».

## Limitation des interactions dans votre dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Dans la barre latérale, sélectionnez **{% octicon "comment-discussion" aria-label="The comment-discussion icon" %} Options de modération**, puis cliquez sur **Limitations des interactions**.
{% data reusables.community.set-interaction-limit %} ![Options des limitations d’interactions temporaires](/assets/images/help/repository/temporary-interaction-limits-options.png)

## Pour aller plus loin
- « [Signalement d’abus ou de courrier indésirable](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam) »
- « [Gestion de l’accès d’un individu à un dépôt d’organisation](/articles/managing-an-individual-s-access-to-an-organization-repository) »
- « [Niveaux d’autorisation pour un dépôt de compte personnel](/articles/permission-levels-for-a-user-account-repository) »
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
- « [Gestion des modérateurs dans votre organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization) »
