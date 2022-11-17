---
title: À propos des intégrations
intro: 'Les intégrations sont des outils et services qui se connectent à {% data variables.product.product_name %} pour compléter et étendre votre workflow.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
  - /github/customizing-your-github-workflow/exploring-integrations/about-integrations
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: a976ad099b80297d0d1e006a020b77b6406989eb
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106342'
---
Vous pouvez installer des intégrations dans votre compte personnel ou dans les organisations dont vous êtes propriétaire. Vous pouvez également installer des {% data variables.product.prodname_github_apps %} d’un tiers dans un dépôt spécifique sur lequel vous avez des autorisations d’administration ou qui appartient à votre organisation.

## Différences entre les {% data variables.product.prodname_github_apps %} et les {% data variables.product.prodname_oauth_apps %}

Les intégrations peuvent être des {% data variables.product.prodname_github_apps %}, des {% data variables.product.prodname_oauth_apps %}, ou toute application utilisant des webhooks ou des API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.

Les {% data variables.product.prodname_github_apps %} offrent des autorisations granulaires et demandent uniquement un accès à ce dont elles ont besoin. Les {% data variables.product.prodname_github_apps %} offrent également des autorisations spécifiques au niveau de l’utilisateur, que chaque utilisateur doit autoriser individuellement quand une application est installée ou quand l’intégrateur change les autorisations demandées par l’application.

Pour plus d'informations, consultez les pages suivantes :
- « [Différences entre les {% data variables.product.prodname_github_apps %} et les {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/) »
- « [À propos des applications](/apps/about-apps/) »
- «[Autorisations au niveau de l’utilisateur](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions) »
- « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) »
- « [Autorisation des {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps) »
- « [Passage en revue de vos intégrations autorisées](/articles/reviewing-your-authorized-integrations/) »

Vous pouvez installer une {% data variables.product.prodname_github_app %}, préconfigurée si les intégrateurs ou les créateurs d’applications ont créé leur application avec le flux de manifeste de l’{% data variables.product.prodname_github_app %}. Pour plus d’informations sur l’exécution de votre {% data variables.product.prodname_github_app %} avec une configuration automatique, contactez l’intégrateur ou le créateur d’applications.

Vous pouvez créer une {% data variables.product.prodname_github_app %} avec une configuration simplifiée si vous créez votre application avec Probot. Pour plus d’informations, consultez le site de la [documentation Probot](https://probot.github.io/docs/).

## Découverte d’intégrations dans {% data variables.product.prodname_marketplace %}

Vous pouvez rechercher une intégration pour installer ou publier votre propre intégration dans {% data variables.product.prodname_marketplace %}.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contient des {% data variables.product.prodname_github_apps %} et des {% data variables.product.prodname_oauth_apps %}. Pour plus d’informations sur la recherche d’une intégration ou la création de votre propre intégration, consultez « [À propos de {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace) ».

## Intégrations achetées directement auprès des intégrateurs

Vous pouvez également acheter des intégrations directement auprès des intégrateurs. En tant que membre d’une organisation, si vous trouvez une {% data variables.product.prodname_github_app %} que vous voulez utiliser, vous pouvez demander à l’organisation d’approuver et d’installer l’application pour l’organisation.

Si vous avez des autorisations d’administration sur tous les dépôts appartenant à l’organisation sur lesquels l’application est installée, vous pouvez installer des {% data variables.product.prodname_github_apps %} avec des autorisations au niveau du dépôt sans avoir à demander au propriétaire de l’organisation d’approuver l’application. Quand un intégrateur change les autorisations d’une application, si les autorisations concernent un dépôt uniquement, les propriétaires d’organisation et les personnes qui ont des autorisations d’administration sur un dépôt sur lequel cette application est installée peuvent examiner et accepter les nouvelles autorisations.
