---
title: "Configuration de l’authentification à 2\_facteurs"
intro: Vous pouvez choisir parmi plusieurs options pour ajouter une deuxième source d’authentification à votre compte.
redirect_from:
  - /articles/configuring-two-factor-authentication-via-a-totp-mobile-app
  - /articles/configuring-two-factor-authentication-via-text-message
  - /articles/configuring-two-factor-authentication-via-fido-u2f
  - /articles/configuring-two-factor-authentication
  - /github/authenticating-to-github/configuring-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA
ms.openlocfilehash: 2a038134260ba9a6a7a0307bc3261157968ec1ea
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179956'
---
Vous pouvez configurer l’authentification à 2 facteurs à l’aide d’une application mobile{% ifversion fpt or ghec %} ou par SMS{% endif %}. Vous pouvez également ajouter une clé de sécurité.

Nous vous recommandons vivement d’utiliser une application de mots de passe à usage unique et durée définie (TOTP, time-based one-time password) pour configurer l’authentification à 2 facteurs (TFA).{% ifversion fpt or ghec %} Les applications TOTP sont plus fiables que les SMS, en particulier pour les emplacements situés en dehors des États-Unis.{% endif %} Les applications TOTP prennent en charge la sauvegarde sécurisée de vos codes d’authentification dans le cloud et peuvent être restaurées si vous perdez l’accès à votre appareil.

{% warning %}

**Avertissement :**
- Si vous êtes membre{% ifversion fpt or ghec %}, gestionnaire de facturation,{% endif %} ou collaborateur externe d’un dépôt privé d’une organisation qui nécessite une authentification à 2 facteurs, vous devez quitter l’organisation pour pouvoir désactiver l’authentification à 2 facteurs sur {% data variables.location.product_location %}.
- Si vous désactivez l’authentification à 2 facteurs, vous perdez automatiquement l’accès à l’organisation et à toutes les duplications (fork) privées des dépôts privés de l’organisation dont vous disposez. Pour récupérer l’accès à l’organisation et à vos duplications, réactivez l’authentification à 2 facteurs et contactez un propriétaire de l’organisation.

{% endwarning %}

{% ifversion fpt or ghec %}

Si vous êtes membre d’une {% data variables.enterprise.prodname_emu_enterprise %}, vous ne pouvez pas configurer l’authentification à 2 facteurs pour votre compte {% data variables.enterprise.prodname_managed_user %}, sauf si vous êtes connecté en tant qu’utilisateur d’installation. Pour les utilisateurs autres que l’utilisateur d’installation, un administrateur doit configurer l’authentification à 2 facteurs sur votre fournisseur d’identité (IdP).

{% endif %}

## Configuration de l’authentification à 2 facteurs à l’aide d’une application mobile TOTP

Une application de mots de passe à usage unique et durée définie (TOTP) génère automatiquement un code d’authentification qui change après une certaine période. Nous vous recommandons d’utiliser des applications TOTP cloud telles que :
- [1Password](https://support.1password.com/one-time-passwords/)
- [Authy](https://authy.com/guides/github/)
- [LastPass Authenticator](https://lastpass.com/auth/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator/)

{% tip %}

**Conseil** : Pour configurer l’authentification avec une méthode TOTP sur plusieurs appareils, pendant la configuration, scannez le code QR avec chaque appareil en même temps. Si l’authentification à 2 facteurs est déjà activée et que vous souhaitez ajouter un autre appareil, vous devez la reconfigurer à partir de vos paramètres de sécurité.

{% endtip %}

1. Téléchargez une application TOTP.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %} {%- ifversion fpt or ghec or ghes > 3.7 %}
5. Sous « Configurer l’application d’authentificateur », effectuez l’une des opérations suivantes :
    - Scannez le code QR avec l’application de votre appareil mobile. L’application affiche ensuite un code à six chiffres que vous pouvez entrer sur {% data variables.product.product_name %}.
    - Si vous ne pouvez pas scanner le code QR, cliquez sur **entrez ce code texte** pour afficher un code que vous pouvez entrer manuellement dans votre application TOTP à la place.
    ![Cliquez sur entrez ce code texte](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
6. L’application mobile TOTP enregistre votre compte sur {% data variables.location.product_location %} et génère un nouveau code d’authentification toutes les quelques secondes. Dans {% data variables.product.product_name %}, tapez le code dans le champ sous « Entrez le code à six chiffres de l’application ». 
![Champ Entrer le code TOTP](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- else %}
5. Sous « Authentification à 2 facteurs », sélectionnez **Configurer à l’aide d’une application**, puis cliquez sur **Continuer**.
6. Sous « Vérification de l’authentification », effectuez l’une des actions suivantes :
    - Scannez le code QR avec l’application de votre appareil mobile. L’application affiche ensuite un code à six chiffres que vous pouvez entrer sur {% data variables.product.product_name %}.
    - Si vous ne pouvez pas scanner le code QR, cliquez sur **entrez ce code texte** pour afficher un code que vous pouvez entrer manuellement dans votre application TOTP à la place.
    ![Cliquez sur entrez ce code texte](/assets/images/help/2fa/2fa_wizard_app_click_code.png)
7. L’application mobile TOTP enregistre votre compte sur {% data variables.location.product_location %} et génère un nouveau code d’authentification toutes les quelques secondes. Dans {% data variables.product.product_name %}, tapez le code dans le champ sous « Entrez le code à six chiffres de l’application ».
![Champ Entrer le code TOTP](/assets/images/help/2fa/2fa_wizard_app_enter_code.png) {%- endif %} {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}

## Configuration de l’authentification à 2 facteurs par SMS

Si vous n’êtes pas en mesure de vous authentifier en utilisant une application mobile TOTP, vous pouvez le faire par SMS. Vous pouvez également fournir un deuxième numéro pour un appareil de secours. Si vous perdez l’accès à votre appareil principal et à vos codes de récupération, un numéro SMS de secours peut vous permettre d’accéder de nouveau à votre compte.

Avant d’utiliser cette méthode, vérifiez que vous pouvez recevoir des SMS. L’opérateur peut facturer ce service.

{% warning %}

**Avertissement :** Nous vous **recommandons vivement** d’utiliser une application TOTP pour l’authentification à 2 facteurs plutôt que des SMS. {% data variables.product.product_name %} ne prend pas en charge l’envoi de SMS vers des téléphones dans tous les pays. Avant de configurer l’authentification par SMS, consultez la liste des pays dans lesquels {% data variables.product.product_name %} prend en charge l’authentification par SMS. Pour plus d’informations, consultez « [Pays dans lesquels l’authentification par SMS est prise en charge](/articles/countries-where-sms-authentication-is-supported) ».

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.enable-two-factor-authentication %}
4. Sous « Configurer l’application d’authentificateur », sélectionnez **Authentification par SMS**

  ![Option alternative - authentification à 2 facteurs par SMS](/assets/images/help/2fa/2fa_sms_alt_option.png)

5. Sous « Configurer l’authentification par SMS », sélectionnez votre code pays et tapez votre numéro de téléphone mobile avec l’indicatif régional. Après avoir spécifié les informations correctes, cliquez sur **Envoyer le code d’authentification**.

  ![Écran de l’authentification à 2 facteurs par SMS](/assets/images/help/2fa/2fa_wizard_sms_send.png)

6. Vous recevrez un SMS avec un code de sécurité. Dans {% data variables.product.product_name %}, tapez le code dans le champ sous « Entrez le code à six chiffres envoyé sur votre téléphone », puis cliquez sur **Continuer**.

  ![Champ Continuer pour l’authentification à 2 facteurs par SMS](/assets/images/help/2fa/2fa_wizard_sms_enter_code.png) {% data reusables.two_fa.save_your_recovery_codes_during_2fa_setup %} {% data reusables.two_fa.backup_options_during_2fa_enrollment %} {% data reusables.two_fa.test_2fa_immediately %}

{% endif %}

## Configuration de l’authentification à 2 facteurs avec une clé de sécurité

{% data reusables.two_fa.after-2fa-add-security-key %}

Sur la plupart des appareils et navigateurs, vous pouvez utiliser une clé de sécurité physique sur USB ou NFC. Certains navigateurs peuvent utiliser le lecteur d’empreintes digitales, la reconnaissance faciale ou un mot de passe/code PIN sur votre appareil comme clé de sécurité.

L’authentification avec une clé de sécurité est *secondaire* par rapport à l’authentification avec une application TOTP{% ifversion fpt or ghec %} ou par SMS{% endif %}. Si vous perdez votre clé de sécurité, vous pourrez toujours utiliser le code de votre téléphone pour vous connecter.

1. Vous devez avoir déjà configuré l’authentification à 2 facteurs avec une application mobile TOTP{% ifversion fpt or ghec %} ou par SMS{% endif %}.
2. Vérifiez qu’une clé de sécurité compatible WebAuthn est insérée dans votre ordinateur.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
5. En regard de « Clés de sécurité », cliquez sur **Ajouter**.
  ![Option d’ajout de clés de sécurité](/assets/images/help/2fa/add-security-keys-option.png)
6. Sous « Clés de sécurité », cliquez sur **Inscrire une nouvelle clé de sécurité**.
  ![Inscription d’une nouvelle clé de sécurité](/assets/images/help/2fa/security-key-register.png)
7. Tapez un pseudonyme pour la clé de sécurité, puis cliquez sur **Ajouter**.
  ![Fourniture d’un pseudonyme pour une clé de sécurité](/assets/images/help/2fa/security-key-nickname.png)
8. Activez votre clé de sécurité en suivant la documentation de votre clé de sécurité.
  ![Demander une clé de sécurité](/assets/images/help/2fa/security-key-prompt.png)
9.  Vérifiez que vous avez téléchargé vos codes de récupération et que vous pouvez y accéder. Si ce n’est déjà fait ou si vous souhaitez générer un autre ensemble de codes, téléchargez vos codes et enregistrez-les à un emplacement sûr. Pour plus d’informations, consultez « [Téléchargement de vos codes de vérification 2FA](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes) ».
{% data reusables.two_fa.test_2fa_immediately %}

{% ifversion fpt or ghec %}
## Configuration de l’authentification à 2 facteurs à l’aide de {% data variables.product.prodname_mobile %}

Vous pouvez utiliser {% data variables.product.prodname_mobile %} pour l’authentification à 2 facteurs quand vous vous connectez à votre compte {% data variables.product.prodname_dotcom %} dans un navigateur web. L’authentification à 2 facteurs avec {% data variables.product.prodname_mobile %} ne s’appuie pas sur la méthode TOTP. En fait, elle utilise le chiffrement à clé publique pour sécuriser votre compte.

Après avoir configuré une application TOTP ou une authentification par SMS, vous pouvez également utiliser {% data variables.product.prodname_mobile %} pour vous authentifier. Si, plus tard, vous n’avez plus accès à {% data variables.product.prodname_mobile %}, vous pourrez toujours utiliser des clés de sécurité ou des applications TOTP pour vous connecter.

1. Vous devez avoir déjà configuré l’authentification à 2 facteurs avec une application mobile TOTP ou par SMS.
2. Installez [{% data variables.product.prodname_mobile %}](https://github.com/mobile).
3. Connectez-vous à votre compte {% data variables.product.product_name %} à partir de {% data variables.product.prodname_mobile %}.

Après vous être connecté, vous pouvez utiliser votre appareil pour l’authentification à 2 facteurs.
{% endif %}

## Pour aller plus loin

- « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) »
- « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication-recovery-methods) »
- « [Accès à {% data variables.product.prodname_dotcom %} avec l’authentification à 2 facteurs](/articles/accessing-github-using-two-factor-authentication) »
- « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) »
- « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) »
