---
title: Maintien de la continuité de propriété des dépôts de votre compte d’utilisateur
intro: You can invite someone to manage your user owned repositories if you are not able to.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086476"
---
## <a name="about-successors"></a>À propos des successeurs

Nous vous recommandons d’inviter un autre utilisateur {% data variables.product.company_short %} à être votre successeur, afin de gérer vos dépôts appartenant à l’utilisateur si vous ne pouvez pas le faire. En tant que successeur, il sera autorisé à :

- Archiver vos dépôts publics.
- Transférer vos dépôts publics vers son propre compte d’utilisateur.
- Transférer vos dépôts publics vers une organisation où il peut créer des dépôts.

Les successeurs ne peuvent pas se connecter à votre compte.

Un successeur désigné peut gérer vos dépôts publics après avoir présenté un certificat de décès et attendu sept jours, ou après avoir présenté une nécrologie et attendu 21 jours. Pour plus d’informations, consultez « [Politique relative aux utilisateurs {% data variables.product.company_short %} décédés](/free-pro-team@latest/github/site-policy/github-deceased-user-policy) ».

Pour demander l’accès à la gestion de dépôts en tant que successeur, contactez le [support technique de GitHub](https://support.github.com/contact?tags=docs-accounts).

## <a name="inviting-a-successor"></a>Invitation d’un successeur
La personne que vous invitez à être votre successeur doit avoir un compte {% data variables.product.company_short %}.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Sous « Paramètres de successeur », pour inviter un successeur, commencez à taper un nom d’utilisateur, un nom complet ou une adresse e-mail, puis cliquez sur son nom lorsqu’il s’affiche.
   ![Champ de recherche d’invitation de successeur](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. Cliquez sur **Ajouter un successeur**.
{% data reusables.user-settings.sudo-mode-popup %}
5. L’utilisateur que vous avez invité sera listé comme « En attente » jusqu’à ce qu’il accepte de devenir votre successeur.
   ![Invitation de successeur en attente](/assets/images/help/settings/settings-pending-successor.png)
