---
title: Mise à jour des informations d’identification dans le trousseau macOS
intro: 'Vous devez mettre à jour vos informations d’identification enregistrées dans le helper `git-credential-osxkeychain` si vous changez votre{% ifversion not ghae %} nom d’utilisateur, mot de passe ou{% endif %} jeton d’accès personnel dans {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128978'
---
{% tip %}

**Remarque :** La mise à jour des informations d’identification dans le trousseau macOS s’applique uniquement aux utilisateurs qui ont configuré manuellement un jeton PAT avec l’assistance `osxkeychain` intégrée à macOS. 

Nous vous recommandons de [configurer SSH](/articles/generating-an-ssh-key) ou de mettre à niveau vers le [Gestionnaire d’informations d’identification Git](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM) à la place. Le GCM peut gérer l’authentification pour vous (plus de jetons PAT manuels), y compris 2FA (authentification à deux facteurs).

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Mise à jour de vos informations d’identification via Trousseaux d’accès

1. Cliquez sur l’icône Spotlight (loupe) à droite de la barre de menus. Tapez `Keychain access`, puis appuyez sur la touche Entrée pour lancer l’application.
   ![Barre de recherche Spotlight](/assets/images/help/setup/keychain-access.png)
2. Dans Trousseaux d’accès, recherchez **{% data variables.command_line.backticks %}** .
3. Recherchez l’entrée « mot de passe Internet » pour `{% data variables.command_line.backticks %}`.
4. Modifiez ou supprimez l’entrée en conséquence.

## Suppression de vos informations d’identification via la ligne de commande

À partir de la ligne de commande, vous pouvez utiliser l’assistance des informations d’identification directement pour effacer l’entrée du trousseau.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Si ça marche, rien n’est imprimé dans la sortie. Pour vérifier que ça fonctionne, essayez de cloner un dépôt privé à partir de {% data variables.product.product_location %}. Si vous êtes invité à entrer un mot de passe, l’entrée de trousseau a été supprimée.

## Pour aller plus loin

- « [Mise en cache de vos informations d’identification {% data variables.product.prodname_dotcom %} dans Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/) »
