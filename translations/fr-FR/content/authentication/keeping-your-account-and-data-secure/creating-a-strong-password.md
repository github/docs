---
title: Création d’un mot de passe fort
intro: 'Sécurisez votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} avec un mot de passe fort et unique et en utilisant un gestionnaire de mots de passe.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
ms.openlocfilehash: 97473f9b04c8d033471f89cac9a0b0d08bebcba3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086041'
---
Vous devez choisir ou générer un mot de passe pour votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, contenant au moins :
- {% ifversion ghes %}Sept{% else %}Huit{% endif %} caractères s’il inclut un nombre et une lettre minuscule ou
- 15 caractères avec n’importe quelle combinaison de caractères

Pour sécuriser votre compte, nous vous recommandons de suivre les bonnes pratiques suivantes :
- Utilisez un gestionnaire de mots de passe tel que [LastPass](https://lastpass.com/) ou [1Password](https://1password.com/) pour générer un mot de passe d’au moins 15 caractères.
- Générez un mot de passe unique pour {% data variables.product.product_name %}. Si vous utilisez votre mot de passe {% data variables.product.product_name %} pour un autre service et que ce service est compromis, les attaquants ou autres utilisateurs malveillants peuvent utiliser ces informations pour accéder à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

- Configurez l’authentification à 2 facteurs pour votre compte personnel. Pour plus d’informations, consultez « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) ».
- Ne partagez jamais votre mot de passe, même avec un collaborateur potentiel. Chaque personne doit utiliser son propre compte personnel sur {% data variables.product.product_name %}. Pour plus d’informations sur les méthodes de collaboration, consultez : « [Invitation de collaborateurs à un dépôt personnel](/articles/inviting-collaborators-to-a-personal-repository) », « [À propos des modèles de développement collaboratif](/articles/about-collaborative-development-models/) » ou « [Collaboration avec des groupes dans des organisations](/organizations/collaborating-with-groups-in-organizations/) ».

{% data reusables.repositories.blocked-passwords %}

Vous pouvez utiliser votre mot de passe uniquement pour vous connecter à {% data variables.product.product_name %} avec votre navigateur. Quand vous vous authentifiez auprès de {% data variables.product.product_name %} par d’autres moyens, par exemple avec la ligne de commande ou l’API, vous devez utiliser d’autres informations d’identification. Pour plus d’informations, consultez « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github) ». 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## Pour aller plus loin

- « [Mise en cache de vos informations d’identification {% data variables.product.product_name %} dans Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/) »
- « [Maintenir votre compte et vos données sécurisés](/articles/keeping-your-account-and-data-secure/) »
