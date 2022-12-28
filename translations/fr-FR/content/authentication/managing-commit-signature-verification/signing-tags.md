---
title: Signature d’étiquettes
intro: 'Vous pouvez signer des étiquettes localement en utilisant GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} ou S/MIME.'
redirect_from:
  - /articles/signing-tags-using-gpg
  - /articles/signing-tags
  - /github/authenticating-to-github/signing-tags
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 22bdc1c5095a8fa82d2ac406a19dc633f8f44fc6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106676'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Pour signer une étiquette, ajoutez `-s` à votre commande `git tag`.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. Vérifiez votre étiquette signée en exécutant `git tag -v [tag-name]`.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Pour aller plus loin

- « [Visualisation des étiquettes de votre dépôt](/articles/viewing-your-repositorys-tags) »
- « [Informer Git de l’utilisation de votre clé de signature](/articles/telling-git-about-your-signing-key) »
- « [Association d’un e-mail à votre clé GPG](/articles/associating-an-email-with-your-gpg-key) »
- « [Signature de commits](/articles/signing-commits) »
