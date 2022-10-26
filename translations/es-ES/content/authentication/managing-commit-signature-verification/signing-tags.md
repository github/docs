---
title: Firmar etiquetas
intro: 'Puedes firmar etiquetas localmente mediante GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} o S/MIME.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106681'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Para firmar una etiqueta, agregue `-s` al comando `git tag`.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. Compruebe la etiqueta firmada mediante la ejecución de `git tag -v [tag-name]`.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Información adicional

- "[Visualización de las etiquetas del repositorio](/articles/viewing-your-repositorys-tags)"
- "[Notificación de la clave de firma a Git](/articles/telling-git-about-your-signing-key)"
- "[Asociación de un correo electrónico con la clave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Firma de confirmaciones](/articles/signing-commits)"
