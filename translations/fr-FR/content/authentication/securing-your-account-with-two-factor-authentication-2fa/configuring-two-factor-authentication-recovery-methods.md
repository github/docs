---
title: "Configuration de méthodes de récupération pour l’authentification à 2\_facteurs"
intro: "Vous pouvez configurer diverses méthodes de récupération pour accéder à votre compte au cas où vous perdriez vos informations d’identification d’authentification à 2\_facteurs."
redirect_from:
  - /articles/downloading-your-two-factor-authentication-recovery-codes
  - /articles/setting-a-fallback-authentication-number
  - /articles/about-recover-accounts-elsewhere
  - /articles/adding-a-fallback-authentication-method-with-recover-accounts-elsewhere
  - /articles/generating-and-storing-an-account-recovery-token
  - /articles/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/configuring-two-factor-authentication-recovery-methods
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Configure 2FA recovery
ms.openlocfilehash: a16f8dda2f834beb4c4a1634fae812b18a8730a3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085933'
---
En plus de stocker vos codes de récupération pour l’authentification à 2 facteurs de manière sécurisée, nous vous recommandons vivement de configurer une ou plusieurs méthodes de récupération supplémentaires.

## Téléchargement de vos codes de récupération pour l’authentification à 2 facteurs

{% data reusables.two_fa.about-recovery-codes %} Vous pouvez également télécharger vos codes de récupération à tout moment après l’activation de l’authentification à 2 facteurs.

Pour maintenir la sécurité de votre compte, ne partagez pas et ne distribuez pas vos codes de récupération. Nous vous recommandons de les enregistrer avec un gestionnaire de mots de passe sécurisé, par exemple :
- [1Password](https://1password.com/)
- [LastPass](https://lastpass.com/)

Si vous générez de nouveaux codes de récupération ou désactivez, puis réactivez l’authentification à 2 facteurs, les codes de récupération dans vos paramètres de sécurité sont automatiquement mis à jour.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
4. Conservez vos codes de récupération dans un endroit sûr. Vos codes de récupération vous permettent d’accéder de nouveau à votre compte si vous perdez l’accès.
    - Pour enregistrer vos codes de récupération sur votre appareil, cliquez sur **Télécharger**.
    - Pour faire une impression de vos codes de récupération, cliquez sur **Imprimer**.
    - Pour copier vos codes de récupération afin de les stocker dans un gestionnaire de mots de passe, cliquez sur **Copier**.
  ![Liste des codes de récupération avec possibilité de les télécharger, de les imprimer ou de les copier](/assets/images/help/2fa/download-print-or-copy-recovery-codes-before-continuing.png)

## Génération d’un nouvel ensemble de codes de récupération

Quand vous utilisez un code de récupération pour récupérer l’accès à votre compte, il ne peut plus être réutilisé. Si vous avez utilisé les 16 codes de récupération, vous pouvez générer une autre liste de codes. La génération d’un nouvel ensemble de codes de récupération invalide tous les codes que vous avez générés précédemment.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %} {% data reusables.two_fa.show-recovery-codes %}
3. Pour créer un autre lot de codes de récupération, cliquez sur **Générer de nouveaux codes de récupération**.
    ![Bouton Générer de nouveaux codes de récupération](/assets/images/help/2fa/generate-new-recovery-codes.png)

## Configuration d’une clé de sécurité comme méthode d’authentification à 2 facteurs supplémentaire

Vous pouvez configurer une clé de sécurité comme méthode secondaire d’authentification à 2 facteurs et l’utiliser pour récupérer l’accès à votre compte. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) ».

{% ifversion fpt or ghec %}

## Définition d’un numéro d’authentification de secours

Vous pouvez fournir un deuxième numéro pour un appareil de secours. Si vous perdez l’accès à votre appareil principal et à vos codes de récupération, un numéro SMS de secours peut vous permettre d’accéder de nouveau à votre compte.

Vous pouvez utiliser un numéro de secours que vous ayez configuré l’authentification par SMS ou avec une application mobile TOTP.

{% warning %}

**Avertissement :** L’utilisation d’un numéro de secours est une solution de dernier recours. Nous vous recommandons de configurer des méthodes de récupération supplémentaires si vous définissez un numéro d’authentification de secours.
- Des personnes malveillantes peuvent attaquer les opérateurs de téléphonie mobile, ce qui rend l’authentification par SMS risquée.
- Les SMS sont pris en charge uniquement dans certains pays en dehors des États-Unis. Pour en obtenir la liste, consultez « [Pays dans lesquels l’authentification par SMS est prise en charge](/articles/countries-where-sms-authentication-is-supported) ».

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. En regard de « Numéro SMS de secours », cliquez sur **Ajouter**.
![Bouton Ajouter un numéro SMS de secours](/assets/images/help/2fa/add-fallback-sms-number-button.png)
4. Sous « Numéro SMS de secours », cliquez sur **Ajouter un numéro SMS de secours**.
![Texte Ajouter un numéro SMS de secours](/assets/images/help/2fa/add_fallback_sms_number_text.png)
5. Sélectionnez votre code pays et tapez votre numéro de téléphone mobile avec l’indicatif régional. Après avoir spécifié les informations correctes, cliquez sur **Définir la méthode de secours**.
    ![Définition du numéro SMS de secours](/assets/images/help/2fa/2fa-fallback-number.png)

Après la configuration, l’appareil de secours reçoit un SMS de confirmation.

{% endif %}

## Pour aller plus loin

- « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) »
- « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) »
- « [Accès à {% data variables.product.prodname_dotcom %} avec l’authentification à 2 facteurs](/articles/accessing-github-using-two-factor-authentication) »
- « [Récupération de votre compte si vous perdez vos informations d’identification TFA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials) »
