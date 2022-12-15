---
title: Vérification de votre adresse e-mail
intro: 'La vérification de votre adresse e-mail principale garantit une sécurité renforcée, permet au personnel {% data variables.product.prodname_dotcom %} de mieux vous aider si vous oubliez votre mot de passe et vous donne accès à d’autres fonctionnalités dans {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 75c455907ab0cc89f1ba8b30d6fa1d37f2d9798f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109497'
---
## À propos de la vérification d’e-mail

Vous pouvez vérifier votre adresse e-mail après vous être inscrit pour obtenir un nouveau compte ou quand vous ajoutez une nouvelle adresse e-mail. Si une adresse e-mail ne permet pas de remettre des messages ou rebondit, elle est non vérifiée.

Si vous ne vérifiez pas votre adresse e-mail, vous ne pouvez pas :
  - Créer ou dupliquer (fork) des dépôts
  - Créer des problèmes ou des demandes de tirage
  - Émettre des commentaires sur des problèmes, des demandes de tirage ou des commits
  - Autoriser des applications {% data variables.product.prodname_oauth_app %}
  - Générer des jetons d’accès personnels
  - Recevoir des notifications par courrier électronique
  - Donner des étoiles à des dépôts
  - Créer ou mettre à jour des tableaux de projet, notamment en ajoutant des cartes
  - Créer ou mettre à jour des gists
  - Créer ou utiliser {% data variables.product.prodname_actions %}
  - Parrainer des développeurs avec {% data variables.product.prodname_sponsors %}

{% warning %}

**Avertissements** :

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## Vérification de votre adresse e-mail

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. Sous votre adresse e-mail, cliquez sur **Renvoyer un e-mail de vérification**.
  ![Lien Renvoyer un e-mail de vérification](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} vous envoie un e-mail contenant un lien. Une fois que vous cliquez sur ce lien, vous êtes redirigé vers votre tableau de bord {% data variables.product.prodname_dotcom %} et une bannière de confirmation apparaît.
  ![Bannière confirmant que votre adresse e-mail a été vérifiée](/assets/images/help/settings/email-verification-confirmation-banner.png)

## Résolution des problèmes de vérification d’adresse e-mail

### Impossible d’envoyer un e-mail de vérification

{% data reusables.user-settings.no-verification-disposable-emails %}

### Page d’erreur après avoir cliqué sur le lien de vérification

Le lien de vérification expire au bout de 24 heures. Si vous ne vérifiez pas votre e-mail dans un délai de 24 heures, vous pouvez demander un autre lien de vérification d’adresse e-mail. Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/articles/verifying-your-email-address) ».

Si vous cliquez sur le lien contenu dans l’e-mail de confirmation dans un délai de 24 heures et que vous êtes dirigé vers une page d’erreur, vous devez vérifier que vous êtes connecté au compte adéquat sur {% data variables.product.product_location %}.

1. {% data variables.product.signout_link %} de votre compte personnel sur {% data variables.product.product_location %}.
2. Quittez et redémarrez votre navigateur.
3. {% data variables.product.signin_link %} à votre compte personnel sur {% data variables.product.product_location %}.
4. Cliquez sur le lien de vérification dans l’e-mail que nous vous avons envoyé.

## Pour aller plus loin

- « [Modification de votre adresse e-mail principale](/articles/changing-your-primary-email-address) »
