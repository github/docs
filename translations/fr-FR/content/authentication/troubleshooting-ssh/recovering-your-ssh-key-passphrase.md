---
title: Récupération de votre phrase secrète de clé SSH
intro: 'Si vous avez perdu votre phrase secrète de clé SSH, selon le système d’exploitation que vous utilisez, vous pouvez soit le récupérer, soit vous devez en générer une nouvelle.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 28d768e81f3076898c23b2b1668314ae5573ec5c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085849'
---
{% mac %}

Si vous [avez configuré votre phrase secrète SSH avec le trousseau macOS](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain), vous pouvez peut-être la récupérer.

1. Dans Finder, recherchez l’application **Trousseau d’accès**.
   ![Barre de recherche Spotlight](/assets/images/help/setup/keychain-access.png)
2. Dans Trousseau d’accès, recherchez **SSH**.
3. Double-cliquez sur l’entrée de votre clé SSH pour ouvrir une nouvelle boîte de dialogue.
4. Dans le coin inférieur gauche, sélectionnez **Afficher le mot de passe**.
   ![Boîte de dialogue Trousseau d’accès](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Vous serez invité à entrer votre mot de passe d’administration. Tapez-le dans la boîte de dialogue « Trousseau d’accès ».
6. Votre mot de passe sera révélé.

{% endmac %}

{% windows %}

Si vous perdez votre phrase secrète de clé SSH, il n’existe aucun moyen de la récupérer. Vous devrez [générer une nouvelle paires de clé SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [basculer vers le clonage HTTPS](/github/getting-started-with-github/managing-remote-repositories) afin de pouvoir utiliser votre mot de passe GitHub à la place.

{% endwindows %}

{% linux %}

Si vous perdez votre phrase secrète de clé SSH, il n’existe aucun moyen de la récupérer. Vous devrez [générer une nouvelle paires de clé SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) ou [basculer vers le clonage HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls) afin de pouvoir utiliser votre mot de passe GitHub à la place.

{% endlinux %}
