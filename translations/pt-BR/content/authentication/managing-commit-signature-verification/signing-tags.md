---
title: Assinar tags
intro: 'Você pode assinar marcas localmente usando GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} ou S/MIME.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106674'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Para assinar uma marca, adicione `-s` ao comando `git tag`.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. Verifique a tag assinada executando `git tag -v [tag-name]`.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Leitura adicional

- "[Como ver as tags do seu repositório](/articles/viewing-your-repositorys-tags)"
- "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
- "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Como assinar commits](/articles/signing-commits)"
