---
title: "Modification des méthodes de remise de code pour l’authentification à 2\_facteurs sur votre appareil mobile"
intro: Vous pouvez choisir de recevoir les codes d’authentification par SMS ou via une application mobile.
redirect_from:
  - /articles/changing-two-factor-authentication-delivery-methods
  - /articles/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/changing-two-factor-authentication-delivery-methods-for-your-mobile-device
versions:
  fpt: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Change 2FA delivery method
ms.openlocfilehash: 90f06f6e3a8b3c5614b78d7aee4055d903df2e80
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085945'
---
{% note %}

**Remarque :** La modification de votre méthode d’authentification à 2 facteurs principale rend non valide la configuration actuelle de l’authentification à 2 facteurs et notamment vos codes de récupération. Conservez votre nouvel ensemble de codes de récupération de manière sûre. La modification de votre méthode d’authentification à 2 facteurs principale n’affecte pas votre configuration éventuelle du SMS de secours. Pour plus d’informations, consultez « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#setting-a-fallback-authentication-number) ».

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. En regard de « Méthode principale à deux facteurs », cliquez sur **Modifier**.
  ![Modifier les principales options de livraison](/assets/images/help/2fa/edit-primary-delivery-option.png)
4. Sous « Options de remise », cliquez sur **Reconfigurer l’authentification à 2 facteurs**.
    ![Modification de vos options de remise pour l’authentification à 2 facteurs](/assets/images/help/2fa/2fa-switching-methods.png)
5. Indiquez comment vous souhaitez configurer l’authentification à 2 facteurs : application mobile TOTP ou réception de SMS. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) ».
    - Pour configurer l’authentification à 2 facteurs avec une application mobile TOTP, cliquez sur **Configurer avec une application**.
    - Pour configurer l’authentification à 2 facteurs avec la réception d’un SMS, cliquez sur **Configurer avec des SMS**.

## Pour aller plus loin

- « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) »
- « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication-recovery-methods) »
