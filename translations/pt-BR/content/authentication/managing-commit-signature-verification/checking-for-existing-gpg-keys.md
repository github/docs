---
title: Verificar se há chaves GPG
intro: 'Antes de gerar uma chave GPG, você pode verificar se há outras chaves chave GPG.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369294'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Observação:** o GPG não vem instalado por padrão no macOS nem no Windows. Para instalar as ferramentas de linha de comando do GPG, confira a [página Download do GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. Verifique a saída do comando para ver se você tem um par de chaves GPG.
    * Se não houver pares de chave GPG ou se você não quiser usar nenhum disponível para assinatura de commits e tags, [gere uma nova chave GPG](/articles/generating-a-new-gpg-key).
    * Se houver um par de chaves GPG existente e você quiser usá-lo para assinar commits e tags, você poderá exibir a chave pública usando o comando a seguir, substituindo o ID da chave GPG que você gostaria de usar. Neste exemplo, a ID da chave GPG é `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Em seguida, você pode [adicionar sua chave GPG à sua conta do GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Leitura adicional

* "[Como gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Como adicionar uma chave do GPG a uma conta do GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
* "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Como assinar commits](/articles/signing-commits)"
* "[Como assinar tags](/articles/signing-tags)"
