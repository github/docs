---
title: À propos de l’authentification à deux facteurs
intro: "{% data reusables.two_fa.about-2fa %} Avec l’authentification à 2\_facteurs, vous devez vous connecter avec votre nom d’utilisateur et votre mot de passe et fournir une autre forme d’authentification que vous seul connaissez ou à laquelle vous seul avez accès."
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: f4b15aeeece76ce5e5afe915e0e0bc4893c4dbb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085954'
---
Pour {% data variables.product.product_name %}, la deuxième forme d’authentification est un code généré par une application sur votre appareil mobile{% ifversion fpt or ghec %} ou envoyé par SMS{% endif %}. Quand vous activez l’authentification à 2 facteurs, {% data variables.product.product_name %} génère un code d’authentification chaque fois que quelqu’un tente de se connecter à votre compte sur {% data variables.product.product_location %}. Pour qu’une personne puisse se connecter à votre compte, elle doit connaître votre mot de passe et avoir accès au code d’authentification sur votre téléphone.

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} En plus des clés de sécurité, vous pouvez utiliser {% data variables.product.prodname_mobile %} pour l’authentification à 2 facteurs après avoir configuré une application mobile TOTP ou des SMS. {% data variables.product.prodname_mobile %} utilise le chiffrement à clé publique pour sécuriser votre compte, ce qui vous permet d’utiliser n’importe quel appareil mobile que vous avez utilisé pour vous connecter à {% data variables.product.prodname_mobile %} comme deuxième facteur.
{% endif %}

Vous pouvez également configurer des méthodes de récupération supplémentaires au cas où vous perdriez l’accès à vos informations d’identification pour l’authentification à 2 facteurs. Pour plus d’informations sur la configuration de l’authentification à 2 facteurs, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) » et « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication-recovery-methods) ».

Nous vous recommandons **vivement** d’activer l’authentification à 2 facteurs pour sécuriser votre compte, non seulement sur {% data variables.product.product_name %}, mais également sur les autres sites web et applications qui la prennent en charge. Vous pouvez activer l’authentification à 2 facteurs pour accéder à {% data variables.product.product_name %} et {% data variables.product.prodname_desktop %}.

Pour plus d’informations, consultez « [Accès à {% data variables.product.prodname_dotcom %} avec l’authentification à 2 facteurs](/articles/accessing-github-using-two-factor-authentication) ».

## Codes de récupération pour l’authentification à 2 facteurs

{% data reusables.two_fa.about-recovery-codes %} Pour plus d’informations, consultez « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) ».

{% ifversion fpt or ghec %}

{% warning %}

**Avertissement** : {% data reusables.two_fa.support-may-not-help %} Pour plus d’informations, consultez « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) ».

{% endwarning %}

{% endif %}

## Exiger l’authentification à deux facteurs dans votre organisation

Les propriétaires d’organisation peuvent exiger que les membres{% ifversion fpt or ghec %}, gestionnaires de facturation{% endif %} et collaborateurs externes de l’organisation utilisent l’authentification à 2 facteurs pour sécuriser leurs comptes personnels. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs dans votre organisation](/articles/requiring-two-factor-authentication-in-your-organization) ».

{% data reusables.two_fa.auth_methods_2fa %}
