---
title: Mode sudo
intro: 'Avant que vous n’effectuiez une action potentiellement sensible, {% data variables.product.product_location %} vous invite à vous identifier pour confirmer l’accès à votre compte.'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147540825'
---
## À propos du mode sudo

Pour maintenir la sécurité de votre compte lorsque vous effectuez une action potentiellement sensible dans {% data variables.product.product_location %}, vous devez vous authentifier même si vous êtes déjà connecté. Par exemple, {% data variables.product.company_short %} considère les actions suivantes comme sensibles, car chacune d’elle peut autoriser une nouvelle personne ou un nouveau système à accéder à votre compte.

- Modification d’une adresse e-mail associée
- Autorisation d’une application tierce
- Ajout d’une nouvelle clé SSH

Une fois que vous vous êtes authentifié pour effectuer une action sensible, votre session passe temporairement en « mode sudo ». En mode sudo, vous pouvez effectuer des actions sensibles sans vous authentifier. {% data variables.product.product_name %} attendra quelques heures avant de vous inviter à nouveau à vous authentifier. Pendant ce temps, toute action sensible que vous effectuerez réinitialisera le minuteur.

{% ifversion ghes %}

{% note %}

**Remarque** : Si {% data variables.product.product_location %} utilise une méthode d’authentification externe comme l’authentification unique CAS ou SAML, vous ne recevrez pas d’invites pour entrer en mode sudo. Pour plus d’informations, contactez votre administrateur de site.

{% endnote %}

{% endif %}

« sudo » correspond au nom court d’un programme des systèmes Unix appelé « **su** peruser **do** ». Pour plus d’informations, consultez [sudo](https://wikipedia.org/wiki/Sudo) sur Wikipédia.

## Confirmation de l’accès en mode sudo

Pour confirmer l’accès en mode sudo, vous {% ifversion totp-and-mobile-sudo-challenge %}pouvez{% else %}devez{% endif %} vous authentifier avec votre mot de passe. {% ifversion totp-and-mobile-sudo-challenge %} Si vous le souhaitez, vous pouvez utiliser une autre méthode d’authentification, comme {% ifversion fpt or ghec %}une clé de sécurité, {% data variables.product.prodname_mobile %} ou un code TFA{% elsif ghes %}une clé de sécurité ou un code TFA{% endif %}.{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [Confirmation de l’accès à l’aide d’une clé de sécurité](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [Confirmation de l’accès à l’aide de GitHub Mobile](#confirming-access-using-github-mobile) {%- endif %}
- [Confirmation de l’accès à l’aide d’un code TFA](#confirming-access-using-a-2fa-code)
- [Confirmation de l’accès à l’aide de votre mot de passe](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### Confirmation de l’accès à l’aide d’une clé de sécurité

Pour confirmer l’accès à votre compte en mode sudo à l’aide de la clé de sécurité, vous devez configurer l’authentification à 2 facteurs (TFA) pour votre compte à l’aide d’une clé de sécurité. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key) ».

Lorsque vous êtes invité à vous authentifier pour le mode sudo, cliquez sur **Use security key** (Utiliser la clé de sécurité), puis suivez les invites.

![Capture d’écran de l’option de clé de sécurité pour le mode sudo](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### Confirmation de l’accès à l’aide de {% data variables.product.prodname_mobile %}

Vous devez installer {% data variables.product.prodname_mobile %} et vous y connecter pour confirmer l’accès à votre compte en mode sudo à l’aide de l’application. Pour plus d’informations, consultez « [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile) ».

1. Lorsque vous êtes invité à vous authentifier pour le mode sudo, cliquez sur **Use GitHub Mobile** (Utiliser GitHub Mobile).

   ![Capture d’écran de l’option {% data variables.product.prodname_mobile %} pour le mode sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. Ouvrez {% data variables.product.prodname_mobile %}. {% data variables.product.prodname_mobile %} affichera les chiffres que vous devez entrer dans {% data variables.product.product_location %} pour approuver la demande.

   ![Capture d’écran des chiffres {% data variables.product.prodname_mobile %} à entrer dans {% data variables.product.product_name %} pour approuver l’accès en mode sudo](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. Dans {% data variables.product.product_name %}, tapez les chiffres qui s’affichent dans {% data variables.product.prodname_mobile %}.

{% endif %}

### Confirmation de l’accès à l’aide d’un code TFA

Pour confirmer l’accès à votre compte en mode sudo à l’aide d’un code TFA, vous devez configurer l’authentification à 2 facteurs (TFA) à l’aide d’une application mobile TOTP{% ifversion fpt or ghec %} ou de messages texte{% endif %}. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) ».

Lorsque vous êtes invité à vous authentifier pour le mode sudo, tapez le code d’authentification de votre application mobile TOTP{% ifversion fpt or ghec %} ou le message texte{% endif %}, puis cliquez sur **Verify** (Vérifier).

![Capture d’écran de l’invite de code TFA pour le mode sudo](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### Confirmation de l’accès à l’aide de votre mot de passe

{% endif %}

Lorsque vous êtes invité à vous authentifier pour le mode sudo, tapez votre mot de passe, puis cliquez sur **Confirm** (Confirmer).

![Capture d’écran de l’invite de mot de passe pour le mode sudo](/assets/images/help/settings/sudo_mode_prompt_password.png)
