---
title: Tags signieren
intro: 'Du kannst Tags lokal mit GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} oder S/MIME signieren.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106677'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Um ein Tag zu signieren, füge `-s` deinem `git tag`-Befehl hinzu.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. Überprüfe dein signiertes Tag, indem du `git tag -v [tag-name]` ausführst.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Weitere Informationsquellen

- [Anzeigen der Tags deines Repositorys](/articles/viewing-your-repositorys-tags)
- „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
- [Verknüpfen einer E-Mail-Adresse mit deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key)
- [Signieren von Commits](/articles/signing-commits)
