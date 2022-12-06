---
title: Подписывание тегов
intro: 'Вы можете подписывать теги локально с помощью GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} или S/MIME.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106680'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

1. Чтобы подписать тег, добавьте `-s` в команду `git tag`.
  ```shell
  $ git tag -s MYTAG
  # Creates a signed tag
  ```
2. Проверьте подписанный тег, выполнив команду `git tag -v [tag-name]`.
  ```shell
  $ git tag -v MYTAG
  # Verifies the signed tag
  ```

## Дополнительные материалы

- [Просмотр тегов репозитория](/articles/viewing-your-repositorys-tags)
- [Предоставление Git информации о ключе для подписывания](/articles/telling-git-about-your-signing-key)
- [Связывание адреса электронной почты с ключом GPG](/articles/associating-an-email-with-your-gpg-key)
- [Подписывание фиксаций](/articles/signing-commits)
