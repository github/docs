---
title: "Pourquoi Git demande toujours mon mot de passe\_?"
intro: 'Si Git vous invite à entrer un nom d’utilisateur et un mot de passe chaque fois que vous essayez d’interagir avec GitHub, vous utilisez probablement l’URL de clonage HTTPS pour votre dépôt.'
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128974'
---
L’utilisation d’une URL distante HTTPS présente certains avantages par rapport à l’utilisation de SSH. Elle est plus facile à configurer que SSH et fonctionne généralement à travers des pare-feu et des proxys stricts. Toutefois, elle vous invite également à entrer vos informations d’identification {% data variables.product.product_name %} chaque fois que vous tirez ou poussez un dépôt. 

{% data reusables.user-settings.password-authentication-deprecation %}

Afin de ne pas avoir à entrer votre mot de passe, configurez Git pour [mettre en cache vos informations d’identification](/github/getting-started-with-github/caching-your-github-credentials-in-git). Une fois que vous avez configuré la mise en cache des informations d’identification, Git utilise automatiquement votre jeton d’accès personnel en cache quand vous tirez ou poussez un dépôt en utilisant HTTPS.

## Pour aller plus loin

- « [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories) ».
- « [À propos de l’authentification sur {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github) »
- « [Ajout de votre clé SSH à ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) »
