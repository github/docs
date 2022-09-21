---
title: Gerar uma nova chave GPG
intro: 'Caso você não tenha uma chave GPG atual, é possível gerar uma nova para usar na assinatura de commits e tags.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710224'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Gerar uma chave GPG

{% note %}

**Observação:** antes de gerar uma nova chave GPG, verifique seu endereço de email. Se você ainda não o verificou, não pode assinar commits nem tags com o GPG.{% ifversion fpt or ghec %} Para obter mais informações, confira "[Como verificar seu endereço de email](/articles/verifying-your-email-address)".{% endif %}

{% endnote %}

1. Baixe e instale [as ferramentas de linha de comando do GPG](https://www.gnupg.org/download/) para seu sistema operacional. A instalação da última versão de seu sistema operacional é recomendada.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Gere um par de chaves GPG. Como há várias versões do GPG, talvez seja necessário consultar a [_página de manual_](https://en.wikipedia.org/wiki/Man_page) relevante para encontrar o comando de geração de chave apropriado. A sua chave deve usar RSA.
    - Se a sua versão for 2.1.17 ou posterior, cole o texto abaixo para gerar um par de chaves GPG.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - Se você não estiver usando a versão 2.1.17 ou superior, o comando `gpg --full-generate-key` não funcionará. Cole o texto abaixo e passe para a etapa 6.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. No prompt, especifique o tipo de chave desejada ou pressione `Enter` para aceitar o padrão.
5. No prompt, especifique o tamanho de chave desejado ou pressione `Enter` para aceitar o padrão. A chave precisa ter, pelo menos, `4096` bits.
6. Digite o prazo de validade da chave. Pressione `Enter` para especificar a seleção padrão, indicando que a chave não vence. A menos que uma data de validade seja necessária, recomendamos aceitar o padrão.
7. Verifique se suas seleções estão corretas.
8. Insira seu ID de usuário.

  {% note %}

  **Observação:** quando precisar inserir seu endereço de email, insira o endereço de email verificado para sua conta do GitHub. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Para obter mais informações, confira "[Como verificar seu endereço de email](/articles/verifying-your-email-address)" e "[Como configurar seu endereço de email de commit](/articles/setting-your-commit-email-address)".{% endif %}

  {% endnote %}

9. Digite uma frase secreta segura.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. Cole o texto abaixo, substituindo o ID da chave GPG que você quer usar. Neste exemplo, a ID da chave GPG é `3AA5C34371567BD2`:
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. Copie a chave GPG, começando com `-----BEGIN PGP PUBLIC KEY BLOCK-----` e terminando com `-----END PGP PUBLIC KEY BLOCK-----`.
12. [Adicione a chave GPG à sua conta do GitHub](/articles/adding-a-gpg-key-to-your-github-account).

## Leitura adicional

* "[Como verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Como adicionar uma chave do GPG a uma conta do GitHub](/articles/adding-a-gpg-key-to-your-github-account)"
* "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
* "[Como associar um email à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Como assinar commits](/articles/signing-commits)"
* "[Como assinar tags](/articles/signing-tags)"
