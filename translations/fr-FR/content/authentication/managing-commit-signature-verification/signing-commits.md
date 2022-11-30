---
title: Signature de commits
intro: 'Vous pouvez signer des commits localement en utilisant GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} ou S/MIME.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106748'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Conseils :**

Afin de configurer votre client Git pour signer des commits par défaut pour un dépôt local, dans Git versions 2.0.0 et supérieures, exécutez `git config commit.gpgsign true`. Pour signer tous les commits par défaut dans n’importe quel dépôt local sur votre ordinateur, exécutez `git config --global commit.gpgsign true`.

Afin de stocker votre phrase secrète de clé GPG pour ne pas avoir à l’entrer chaque fois que vous signez un commit, nous vous recommandons d’utiliser les outils suivants :
  - Si vous êtes utilisateur Mac, [GPG Suite](https://gpgtools.org/) vous permet de stocker votre phrase secrète de clé GPG dans le trousseau Mac OS.
  - Pour les utilisateurs Windows, [Gpg4win](https://www.gpg4win.org/) s’intègre à d’autres outils Windows.

Vous pouvez également configurer manuellement [gpg-agent](http://linux.die.net/man/1/gpg-agent) pour enregistrer votre phrase secrète de clé GPG, mais il ne s’intègre pas au trousseau Mac OS comme ssh-agent et nécessite davantage de configuration.

{% endtip %}

Si vous avez plusieurs clés ou que vous tentez de signer des commits ou des étiquettes avec une clé qui ne correspond pas à votre identité de commiteur, vous devez [informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key).

1. Quand vous commitez des modifications dans votre branche locale, ajoutez l’indicateur -S à la commande git commit :
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. Si vous utilisez GPG, après avoir créé votre commit, fournissez la phrase secrète que vous avez configurée quand vous avez [généré votre clé GPG](/articles/generating-a-new-gpg-key).
3. Quand vous avez terminé de créer des commits localement, poussez-les (push) sur votre dépôt distant sur {% data variables.product.product_name %} :
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. Sur {% data variables.product.product_name %}, accédez à votre demande de tirage (pull request).
{% data reusables.repositories.review-pr-commits %}
5. Pour voir des informations plus détaillées sur la signature vérifiée, cliquez sur Vérifié.
![Commit signé](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## Pour aller plus loin

* « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
* « [Signature d’étiquettes](/articles/signing-tags) »
