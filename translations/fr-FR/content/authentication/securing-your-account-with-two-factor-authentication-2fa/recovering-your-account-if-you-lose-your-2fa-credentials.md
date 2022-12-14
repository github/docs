---
title: Récupération de votre compte si vous perdez vos informations d’identification TFA
intro: "Si vous perdez l’accès à vos informations d’identification d’authentification à 2\_facteurs, vous pouvez utiliser vos codes de récupération (ou une autre méthode de récupération) pour récupérer l’accès à votre compte."
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
ms.openlocfilehash: 1a93d77d4da76a6efbc96ba5d80d0fe7e800c08a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085921'
---
{% ifversion fpt or ghec %}

{% warning %}

**Avertissements** : 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## Utilisation d’un code de récupération pour l’authentification à 2 facteurs

Utilisez l’un de vos codes de récupération pour récupérer automatiquement l’accès à votre compte. Vous avez peut-être enregistré vos codes de récupération dans un gestionnaire de mots de passe ou le dossier de téléchargement de votre ordinateur. Le nom de fichier par défaut pour les codes de récupération est `github-recovery-codes.txt`. Pour plus d’informations sur les codes de récupération, consultez « [Configuration des méthodes de récupération pour l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes) ».

1. Tapez votre nom d’utilisateur et votre mot de passe dans l’invite d’authentification.

    {% warning %}

    **Avertissement** : {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. Sous « Vous rencontrez des problèmes ? », cliquez sur **Utiliser un code de récupération ou demander une réinitialisation**.

   ![Capture d’écran du lien pour utiliser un code de récupération](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. Dans la page Authentification à 2 facteurs, sous « Vous n’avez pas votre téléphone ? », cliquez sur **Entrer un code de récupération pour l’authentification à 2 facteurs**.

   ![Capture d’écran du lien pour utiliser un code de récupération](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. Tapez l’un de vos codes de récupération, puis cliquez sur **Vérifier**.

   ![Champ pour taper un code de récupération et bouton Vérifier](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## Authentification avec un numéro de secours

Si vous perdez l’accès à votre application TOTP principale ou à votre numéro de téléphone, vous pouvez fournir un code pour l’authentification à 2 facteurs, envoyé sur votre numéro de secours, pour récupérer automatiquement l’accès à votre compte.
{% endif %}

## Authentification avec une clé de sécurité

Si vous avez configuré l’authentification à 2 facteurs avec une clé de sécurité, vous pouvez utiliser votre clé de sécurité comme méthode d’authentification secondaire pour récupérer automatiquement l’accès à votre compte. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) ».

{% ifversion fpt or ghec %}
## Authentification avec un appareil vérifié, un jeton SSH ou un jeton d’accès personnel

Si vous connaissez votre mot de passe pour {% data variables.product.product_location %}, mais que vous n’avez pas les informations d’identification ou vos codes de récupération pour l’authentification à 2 facteurs, vous pouvez faire envoyer un mot de passe à usage unique à votre adresse e-mail vérifiée pour commencer le processus de vérification et récupérer l’accès à votre compte.

{% note %}

**Remarque** : Pour des raisons de sécurité, la récupération de l’accès à votre compte en vous authentifiant avec un mot de passe à usage unique peut prendre jusqu’à trois jours ouvrables. {% data variables.product.company_short %} ne traite pas les demandes soumises entre-temps.

{% endnote %}

Vous pouvez utiliser vos informations d’identification ou vos codes de récupération pour l’authentification à 2 facteurs afin de récupérer l’accès à votre compte à tout moment pendant le délai d’attente de 3 à 5 jours.

1. Tapez votre nom d’utilisateur et votre mot de passe dans l’invite d’authentification.

    {% warning %}

    **Avertissement** : {% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. Sous « Vous rencontrez des problèmes ? », cliquez sur **Utiliser un code de récupération ou demander une réinitialisation**.

   ![Capture d’écran du lien à utiliser si vous n’avez pas vos codes de récupération ou votre appareil pour l’authentification à 2 facteurs](/assets/images/help/2fa/no-access-link.png)
1. À droite de « Verrouillé ? », cliquez sur **Essayer de récupérer le compte**.

   ![Capture d’écran du lien pour essayer de récupérer votre compte](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. Cliquez sur **Je comprends, commençons** pour demander la réinitialisation de vos paramètres d’authentification.

    ![Capture d’écran du bouton pour lancer la réinitialisation des paramètres d’authentification](/assets/images/help/2fa/reset-auth-settings.png)
1. Cliquez sur **Envoyer un mot de passe à usage unique** pour envoyer un mot de passe à usage unique sur toutes les adresses éligibles associées à votre compte. Seuls les e-mails vérifiés sont éligibles à la récupération de compte. Si vous avez limité les réinitialisations de mot de passe à votre adresse principale et/ou votre adresse de secours, ces adresses sont les seules adresses éligibles à la récupération de compte.

   ![Capture d’écran du bouton pour envoyer un mot de passe à usage unique](/assets/images/help/2fa/send-one-time-password.png)
1. Sous « Mot de passe à usage unique », tapez le mot de passe temporaire figurant dans l’e-mail de récupération envoyé par {% data variables.product.prodname_dotcom %}.

   ![Capture d’écran du champ pour taper un mot de passe à usage unique](/assets/images/help/2fa/one-time-password-field.png)
1. Cliquez sur **Vérifier l’adresse e-mail**.

   ![Capture d’écran du bouton pour vérifier l’adresse e-mail](/assets/images/help/2fa/verify-email-address.png)
1. Choisissez un autre facteur de vérification.
    - Si vous avez déjà utilisé votre appareil actuel pour vous connecter à ce compte et souhaitez l’utiliser pour la vérification, cliquez sur **Vérifier avec cet appareil**.
    - Si vous avez déjà configuré une clé SSH sur ce compte et que vous souhaitez l’utiliser pour la vérification, cliquez sur **Clé SSH**.
    - Si vous avez déjà configuré un jeton d’accès personnel et que vous souhaitez l’utiliser pour la vérification, cliquez sur **Jeton d’accès personnel**.

   ![Capture d’écran des boutons pour la deuxième vérification](/assets/images/help/2fa/alt-verifications.png)
1. Un membre du {% data variables.contact.github_support %} examinera votre demande et vous enverra un e-mail sous trois jours ouvrables. Si votre demande est approuvée, vous recevrez un lien pour terminer le processus de récupération de votre compte. Si votre demande est refusée, l’e-mail inclura un moyen de contacter le support pour répondre à des questions supplémentaires.

{% endif %}
