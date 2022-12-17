---
title: Paquets
intro: 'Utilisez l’API REST pour interagir avec {% data variables.product.prodname_registry %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192824'
---
## À propos de {% data variables.product.prodname_registry %}

Vous pouvez utiliser l’API REST pour gérer les packages dans vos dépôts et organisations {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Restauration et suppression des packages](/packages/learn-github-packages/deleting-and-restoring-a-package) ».

Pour utiliser l’API REST afin de gérer {% data variables.product.prodname_registry %}, vous devez vous authentifier avec un {% data variables.product.pat_v1 %}.
  - Pour accéder aux métadonnées de package, votre jeton doit avoir l’étendue `read:packages`.
  - Pour supprimer des packages et des versions de package, votre jeton doit avoir les étendues `read:packages` et `delete:packages`.
  - Pour restaurer des packages et des versions de package, votre jeton doit avoir les étendues `read:packages` et `write:packages`.

Si votre package se trouve dans un registre qui prend en charge les autorisations granulaires, votre jeton n’a pas besoin de l’étendue `repo` pour accéder ou gérer ce package. Si votre package se trouve dans un registre qui prend en charge uniquement les autorisations limitées au dépôt, votre jeton doit aussi inclure l’étendue `repo` dans la mesure où votre package hérite des autorisations d’un dépôt {% data variables.product.prodname_dotcom %}. Pour obtenir la liste des registres qui prennent en charge uniquement les autorisations limitées au dépôt, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ».

Pour accéder aux ressources d’une organisation avec l’authentification unique activée, vous devez activer l’authentification unique pour votre {% data variables.product.pat_v1 %}. Pour plus d’informations, consultez « [Autorisation de l’utilisation d’un {% data variables.product.pat_generic %} avec l’authentification unique SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation de {% data variables.product.prodname_ghe_cloud %}.{% else %} ».{% endif %}
