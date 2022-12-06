---
title: Systèmes d’exploitation pris en charge
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} sur n’importe quel système d’exploitation pris en charge.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105233'
---
## À propos des systèmes d’exploitation pris en charge

Les systèmes d’exploitation suivants sont pris en charge pour {% data variables.product.prodname_desktop %}.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Vous devez disposer d’un système d’exploitation 64 bits pour exécuter {% data variables.product.prodname_desktop %}.

## Résolution des problèmes sur macOS
Si vous rencontrez des problèmes d’utilisation de {% data variables.product.prodname_desktop %} sur macOS, tentez d’appliquer les méthodes de résolution suivantes. Pour plus d’informations, consultez [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### Erreur `The username or passphrase you entered is not correct` après la connexion à votre compte

Cette erreur peut se produire quand {% data variables.product.prodname_desktop %} ne peut pas accéder à vos informations d’identification stockées dans le trousseau.

Pour résoudre le problème, suivez ces étapes.

1. Ouvrez l’application « Trousseaux d’accès ».
2. Cliquez avec le bouton droit sur **session**, puis cliquez sur **Verrouiller le trousseau « session »** .
  ![Option Verrouiller le trousseau « session »](/assets/images/help/desktop/mac-lock-keychain.png)
3. Cliquez avec le bouton droit sur **session**, puis cliquez sur **Déverrouiller le trousseau « session »** . Suivez les invites à l’écran pour finir de déverrouiller le trousseau « session ».
  ![Option Déverrouiller le trousseau « session »](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Réauthentifiez votre compte sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}.

### Erreur `Could not create temporary directory: Permission denied` après la recherche de mises à jour

Cette erreur peut être due à des autorisations manquantes pour le répertoire `~/Library/Caches/com.github.GitHubClient.ShipIt`. {% data variables.product.prodname_desktop %} utilise ce répertoire pour créer et décompresser les fichiers temporaires dans le cadre de la mise à jour de l’application.

Pour résoudre le problème, suivez ces étapes.

1. Fermez {% data variables.product.prodname_desktop %}.
2. Ouvrez le « Finder », puis accédez à `~/Library/Caches/`.
3. Cliquez avec le bouton droit sur `com.github.GitHubClient.ShipIt`, puis cliquez sur **Lire les informations**.
4. Cliquez sur la flèche à gauche de « Partage et permissions ».
5. Si le privilège à droite de votre compte d’utilisateur n’indique pas « Lecture et écriture », cliquez sur le texte, puis sur **Lecture et écriture**.
  ![Options de « Partage et permissions »](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Ouvrez {% data variables.product.prodname_desktop %}, puis recherchez les mises à jour.

## Résolution des problèmes sur Windows
Si vous rencontrez des problèmes d’utilisation de {% data variables.product.prodname_desktop %} sur Windows, tentez d’appliquer les méthodes de résolution suivantes. Pour plus d’informations, consultez [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` erreurs

Cette erreur peut se produire si vous utilisez {% data variables.product.prodname_desktop %} sur un réseau d’entreprise qui empêche Windows de vérifier l’état de révocation d’un certificat.

Pour résoudre le problème, contactez votre administrateur système.

### Erreur `git clone failed` durant le clonage d’un dépôt configuré pour la redirection de dossiers

{% data variables.product.prodname_desktop %} ne prend pas en charge les dépôts configurés pour la redirection de dossiers.

### `cygheap base mismatch detected` erreurs

Cette erreur peut se produire quand la randomisation du format d’espace d’adresse (ASLR) obligatoire est activée. L’activation de la randomisation du format d’espace d’adresse (ASLR) obligatoire affecte la bibliothèque principale MSYS2, sur laquelle {% data variables.product.prodname_desktop %} s’appuie pour émuler la duplication de processus.

Pour résoudre ce problème, désactivez la randomisation du format d’espace d’adresse (ASLR) obligatoire, ou autorisez explicitement tous les exécutables dans `<Git>\usr\bin` qui dépendent de MSYS2.
