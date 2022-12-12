---
title: "Désactivation de l’authentification à 2\_facteurs pour votre compte personnel"
intro: "Si vous désactivez l’authentification à 2\_facteurs pour votre compte personnel, vous risquez de perdre l’accès aux organisations dont vous faites partie."
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/disabling-two-factor-authentication-for-your-personal-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Disable 2FA
ms.openlocfilehash: 17135ec9a9458eeb2fc460e69dfc6af39d83ee1d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085922'
---
Nous vous recommandons vivement d’utiliser l’authentification à 2 facteurs pour sécuriser votre compte. Si vous devez désactiver l’authentification à 2 facteurs, nous vous recommandons de la réactiver dès que possible.

{% warning %}

**Avertissement :** Si vous êtes membre{% ifversion fpt or ghec %}, gestionnaire de facturation,{% endif %} ou collaborateur externe d’un dépôt public d’une organisation qui exige l’authentification à 2 facteurs et que vous la désactivez, vous êtes automatiquement supprimé de l’organisation et vous perdez votre accès à ses dépôts. Pour récupérer l’accès à l’organisation, réactivez l’authentification à 2 facteurs et contactez un propriétaire de l’organisation.

{% endwarning %}

Si votre organisation exige l’authentification à 2 facteurs et que vous êtes membre, propriétaire ou collaborateur externe d’un dépôt privé de votre organisation, vous devez d’abord quitter votre organisation pour pouvoir désactiver l’authentification à 2 facteurs.

Pour vous supprimer vous-même de votre organisation :
 - Si vous êtes membre ou propriétaire de l’organisation, consultez « [Vous supprimer vous-même d’une organisation](/articles/removing-yourself-from-an-organization/) ».
 - Si vous êtes collaborateur externe, demandez à un propriétaire ou administrateur de dépôt de l’organisation de vous supprimer des dépôts de l’organisation. Pour plus d’informations, consultez « [Affichage des rôles des personnes dans une organisation](/articles/viewing-people-s-roles-in-an-organization) » et « [Suppression d’un collaborateur externe d’un dépôt d’organisation](/articles/removing-an-outside-collaborator-from-an-organization-repository/) ».

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security %}
3. Cliquez sur **Désactiver**.
  ![Bouton Désactiver pour désactiver l’authentification à 2 facteurs](/assets/images/help/2fa/disable-two-factor-authentication.png)

## Pour aller plus loin

- « [À propos de l’authentification à deux facteurs](/articles/about-two-factor-authentication) »
- « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) »
- « [Configuration de méthodes de récupération pour l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication-recovery-methods) »
