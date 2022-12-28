---
title: "Accès à GitHub avec l’authentification à 2\_facteurs"
intro: "Si l’authentification à 2\_facteurs est activé, vous êtes invité à fournir votre code d’authentification TFA, ainsi que votre mot de passe, au moment de vous connecter à {% data variables.product.product_name %}."
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 244cc4b45165cbc327729fd6d1c5ac519a6a6d7a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085950'
---
Si l’authentification à 2 facteurs est activée, vous devez fournir un code d’authentification quand vous accédez à {% data variables.product.product_name %} avec votre navigateur. Si vous accédez à {% data variables.product.product_name %} avec d’autres méthodes, par exemple l’API ou la ligne de commande, vous devez utiliser une autre forme d’authentification. Pour plus d’informations, consultez « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github) ».

## Fourniture d’un code TFA pour la connexion au site web

Après vous être connecté à {% data variables.product.product_name %} à l’aide de votre mot de passe, vous êtes invité à fournir un code d’authentification {% ifversion fpt or ghec %}reçu par SMS ou{% endif %} généré par votre application TOTP.

{% data variables.product.product_name %} vous demande de fournir à nouveau votre code d’authentification TFA uniquement si vous vous êtes déconnecté, si vous utilisez un nouvel appareil ou si votre session expire.

### Génération d’un code par le biais d’une application TOTP

Si vous avez choisi de configurer l’authentification à 2 facteurs avec une application TOTP sur votre smartphone, vous pouvez générer un code d’authentification pour {% data variables.product.product_name %} à tout moment. Dans la plupart des cas, le simple lancement de l’application génère un code. Pour obtenir des instructions spécifiques, reportez-vous à la documentation de votre application.

Si vous supprimez l’application mobile après avoir configuré l’authentification à 2 facteurs, vous devez fournir votre code de récupération pour accéder à votre compte. Pour plus d’informations, consultez « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) »

{% ifversion fpt or ghec %}

### Réception d’un SMS

Si vous configurez l’authentification à 2 facteurs par SMS, {% data variables.product.product_name %} vous envoie un SMS avec votre code d’authentification.

### Vérification avec {% data variables.product.prodname_mobile %}

Si vous avez installé {% data variables.product.prodname_mobile %} et que vous y êtes connecté, vous pouvez choisir de vous authentifier avec {% data variables.product.prodname_mobile %} pour l’authentification à 2 facteurs.

1. Connectez-vous à {% data variables.product.product_name %} avec votre navigateur, à l’aide de votre nom d’utilisateur et de votre mot de passe.
2. Si vous avez ajouté une clé de sécurité à votre compte, vous êtes d’abord invité à insérer et à utiliser une clé de sécurité. Pour ignorer l’utilisation d’une clé de sécurité, cliquez sur **S’authentifier avec {% data variables.product.prodname_mobile %}** .
  ![Demande d’authentification à 2 facteurs sur {% data variables.product.product_name %} avec « S’authentifier avec {% data variables.product.prodname_mobile %} » mis en surbrillance](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} vous envoie une notification Push pour vérifier votre tentative de connexion. L’ouverture de la notification Push ou l’ouverture de l’application {% data variables.product.prodname_mobile %} affiche une invite, vous demandant d’approuver ou de refuser cette tentative de connexion.
  {% note %}

  **Remarque** : Cette invite peut vous obliger à entrer un numéro à deux chiffres affiché dans le navigateur avec lequel vous vous connectez.

  {% endnote %}

  ![Demande d’authentification à 2 facteurs avec {% data variables.product.prodname_mobile %} nécessitant une entrée à deux chiffres](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - Si la tentative de connexion est approuvée avec {% data variables.product.prodname_mobile %}, votre navigateur donne automatiquement suite à la tentative de connexion.
    - Si la tentative de connexion est refusée, l’authentification n’aboutit pas. Pour plus d’informations, consultez « [Maintenir votre compte et vos données sécurisés](/authentication/keeping-your-account-and-data-secure) ».

{% endif %}

## Utilisation de l’authentification à 2 facteurs avec la ligne de commande

Une fois que vous avez activé 2FA, vous n’utiliserez plus votre mot de passe pour accéder à {% data variables.product.product_name %} sur la ligne de commande. Utilisez plutôt le Gestionnaire d’informations d’identification Git, un jeton d’accès personnel ou une clé SSH.

### Authentification sur la ligne de commande à l’aide du Gestionnaire d’informations d’identification Git

Le [Gestionnaire d’informations d’identification Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) est une application auxiliaire d’informations d’identification Git sécurisée qui s’exécute sur Windows, macOS et Linux. Pour plus d’informations sur les applications auxiliaires d’informations d’identification Git, consultez [Éviter la répétition](https://git-scm.com/docs/gitcredentials#_avoiding_repetition) dans le livre Git Pro.

Les instructions d’installation varient en fonction du système d’exploitation de votre ordinateur. Pour plus d’informations, consultez [Télécharger et installer](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) dans le dépôt GitCredentialManager/git-credential-manager.

### Authentification sur la ligne de commande avec HTTPS

Après avoir activé l’authentification à 2 facteurs, vous devez créer un jeton d’accès personnel à utiliser comme mot de passe quand vous vous authentifiez auprès de {% data variables.product.product_name %} sur la ligne de commande avec des URL HTTPS.

Quand vous êtes invité à entrer un nom d’utilisateur et un mot de passe sur la ligne de commande, utilisez votre nom d’utilisateur {% data variables.product.product_name %} et votre jeton d’accès personnel. L’invite de ligne de commande n’indique pas que vous devez entrer votre jeton d’accès personnel quand vous êtes invité à entrer votre mot de passe.

Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

### Authentification sur la ligne de commande avec SSH

L’activation de l’authentification à 2 facteurs ne modifie pas la façon dont vous vous authentifiez auprès de {% data variables.product.product_name %} sur la ligne de commande avec des URL SSH. Pour plus d’informations sur la configuration et l’utilisation d’une clé SSH, consultez « [Connexion à {% data variables.product.prodname_dotcom %} avec SSH](/articles/connecting-to-github-with-ssh/) ».

## Utilisation de l’authentification à 2 facteurs pour accéder à un dépôt à l’aide de Subversion

Quand vous accédez à un dépôt à l’aide de Subversion, vous devez fournir un jeton d’accès personnel au lieu d’entrer votre mot de passe. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

## Dépannage

Si vous perdez l’accès à vos informations d’identification TFA, vous pouvez utiliser vos codes de récupération ou une autre méthode de récupération (si vous en avez configuré une) pour récupérer l’accès à votre compte. Pour plus d’informations, consultez « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) ».

Si votre authentification échoue plusieurs fois, vous pouvez synchroniser l’horloge de votre téléphone avec votre fournisseur mobile. Souvent, cela implique de cocher l’option « Définir automatiquement » sur l’horloge de votre téléphone, plutôt que de fournir votre propre fuseau horaire.

## Pour aller plus loin

- « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) »
- « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) »
- « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication-recovery-methods) »
- « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) »
