---
title: Mise à jour de vos informations d’identification d’accès à GitHub
intro: 'Les informations d’identification {% data variables.product.product_name %} se composent{% ifversion not ghae %} non seulement de votre mot de passe, mais aussi{% endif %} des jetons d’accès, des clés SSH et des jetons d’API d’application que vous utilisez pour communiquer avec {% data variables.product.product_name %}. Si nécessaire, vous pouvez réinitialiser toutes ces informations d’identification d’accès par vous-même.'
redirect_from:
  - /articles/rolling-your-credentials
  - /articles/how-can-i-reset-my-password
  - /articles/updating-your-github-access-credentials
  - /github/authenticating-to-github/updating-your-github-access-credentials
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/updating-your-github-access-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Update access credentials
ms.openlocfilehash: 650c0027b679690def6d1c77d727a87b8688b889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508415'
---
{% ifversion not ghae %}
## Demande d’un nouveau mot de passe

1. Pour demander un nouveau mot de passe, accédez à {% ifversion fpt or ghec %} https://{% data variables.product.product_url %}/password_reset{% else %}`https://{% data variables.product.product_url %}/password_reset`{% endif %}.
2. Entrez l’adresse e-mail associée à votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, puis cliquez sur **Envoyer un e-mail de réinitialisation du mot de passe**. L’e-mail est envoyé à l’adresse e-mail de secours si vous en avez configuré une.
  ![Boîte de dialogue de demande d’envoi d’un e-mail de réinitialisation du mot de passe](/assets/images/help/settings/password-recovery-email-request.png)
3. Nous vous enverrons un lien qui vous permettra de réinitialiser votre mot de passe. Vous devez cliquer sur ce lien dans les 3 heures suivant la réception de l’e-mail. Si vous n’avez pas reçu d’e-mail de notre part, veillez à vérifier votre dossier de courrier indésirable.
4. Si vous avez activé l’authentification à 2 facteurs, vous serez invité à entrer vos informations d’identification TFA : {% ifversion fpt or ghec %}
   * Si vous disposez de {% data variables.product.prodname_mobile %}, vous recevez une notification Push pour vérifier votre identité. Ouvrez la notification Push ou l’application {% data variables.product.prodname_mobile %}, puis entrez le code à deux chiffres qui vous est présenté dans la page de réinitialisation du mot de passe de votre navigateur.
   ![Invite d’authentification à 2 facteurs de {% data variables.product.prodname_mobile %}](/assets/images/help/2fa/2fa-mobile-challenge-password-reset.png)
      * Pour passer la vérification avec GitHub Mobile, cliquez sur **Entrer le code d’authentification à deux facteurs ou de récupération**.
      ![Invite d’authentification à 2 facteurs de GitHub Mobile sur {% data variables.product.product_name %} avec le message « Enter two-factor authentication or recovery code » (Entrer le code d’authentification à 2 facteurs ou le code de récupération) mis en évidence](/assets/images/help/2fa/2fa-github-mobile-password-reset.png) {% endif %}
   * Tapez votre code d’authentification ou l’un de vos codes de récupération, puis cliquez sur **Vérifier**.
      ![Authentification à 2 facteurs - invite](/assets/images/help/2fa/2fa-password-reset.png)
     * Si vous avez ajouté une clé de sécurité à votre compte, cliquez sur **Utiliser la clé de sécurité** au lieu de taper un code d’authentification.
     {% ifversion fpt or ghec %}
     * Si vous avez configuré [{% data variables.product.prodname_mobile %}](https://github.com/mobile), cliquez plutôt sur **S’authentifier avec GitHub Mobile**.
     {% endif %}
5. Tapez un nouveau mot de passe, confirmez votre nouveau mot de passe, puis cliquez sur **Modifier le mot de passe**. Pour obtenir de l’aide sur la création d’un mot de passe fort, consultez « [Création d’un mot de passe fort](/articles/creating-a-strong-password) ».
  {% ifversion fpt or ghec %}![Zone de récupération de mot de passe](/assets/images/help/settings/password-recovery-page.png){% else %} ![Zone de récupération de mot de passe](/assets/images/enterprise/settings/password-recovery-page.png){% endif %}

{% tip %}

Pour éviter de perdre votre mot de passe, nous vous suggérons d’utiliser un gestionnaire de mots de passe sécurisé comme [LastPass](https://lastpass.com/) ou [1Password](https://1password.com/).

{% endtip %}

## Modification d’un mot de passe existant

{% data reusables.repositories.blocked-passwords %}

1. {% data variables.product.signin_link %} à {% data variables.product.product_name %}.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
4. Sous « Modifier le mot de passe », tapez votre ancien mot de passe, un nouveau mot de passe fort et confirmez votre nouveau mot de passe. Pour obtenir de l’aide sur la création d’un mot de passe fort, consultez « [Création d’un mot de passe fort](/articles/creating-a-strong-password) ».
5. Cliquez sur **Mettre à jour le mot de passe**.

{% tip %}

Pour plus de sécurité, activez l’authentification à 2 facteurs en plus de modifier votre mot de passe. Pour obtenir des informations plus détaillées, consultez [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication).

{% endtip %} {% endif %}
## Mise à jour de vos jetons d’accès

Consultez « [Examen de vos intégrations autorisées](/articles/reviewing-your-authorized-integrations) » pour obtenir des instructions sur l’examen et la suppression des jetons d’accès. Pour générer des jetons d’accès, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

{% ifversion not ghae %}

Si vous avez réinitialisé votre mot de passe de compte et souhaitez également déclencher une déconnexion à partir de l’application {% data variables.product.prodname_mobile %}, vous pouvez révoquer votre autorisation de l’application OAuth « GitHub iOS » ou « GitHub Android ». Cela déconnecte toutes les instances de l’application {% data variables.product.prodname_mobile %} associée à votre compte. Pour plus d’informations, consultez « [Examen de vos intégrations autorisées](/authentication/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations) ».

{% endif %}

## Mise à jour de vos clés SSH

Consultez « [Examen de vos clés SSH](/articles/reviewing-your-ssh-keys) » pour obtenir des instructions sur l’examen et la suppression de clés SSH. Pour générer et ajouter de nouvelles clés SSH, consultez « [Génération d’une clé SSH](/articles/generating-an-ssh-key) ».

## Réinitialisation de jetons d’API

Si vous avez des applications inscrites auprès de {% data variables.product.product_name %}, vous devrez réinitialiser leurs jetons OAuth. Pour plus d’informations, consultez « [Réinitialiser une autorisation](/rest/reference/apps#reset-an-authorization) » (point de terminaison).

{% ifversion not ghae %}
## Prévention des accès non autorisés

Pour obtenir des conseils supplémentaires sur la sécurisation de votre compte et la prévention des accès non autorisés, consultez « [Prévention des accès non autorisés](/articles/preventing-unauthorized-access) ».
{% endif %}
