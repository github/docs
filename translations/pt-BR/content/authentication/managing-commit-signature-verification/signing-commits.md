---
title: Assinar commits
intro: 'Você pode assinar confirmações localmente usando GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} ou S/MIME.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106746'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Dicas:**

Para configurar seu cliente do Git para assinar commits por padrão em um repositório local, nas versões do Git 2.0.0 e superior, execute `git config commit.gpgsign true`. Para assinar todos os commits por padrão em qualquer repositório local no computador, execute `git config --global commit.gpgsign true`.

Para armazenar a frase secreta da chave GPG e não precisar inseri-la sempre que assinar um commit, recomendamos o uso das seguintes ferramentas:
  - Para usuários do Mac, o [GPG Suite](https://gpgtools.org/) permite que você armazene a senha de chave GPG no Conjunto de Chaves do Mac OS.
  - Para usuários do Windows, o [Gpg4win](https://www.gpg4win.org/) integra-se a outras ferramentas do Windows.

Você também pode configurar manualmente o [gpg-agent](http://linux.die.net/man/1/gpg-agent) para salvar sua frase secreta de chave GPG, mas isso não se integra ao Conjunto de Chaves do Mac OS como o ssh-agent e exige configuração adicional.

{% endtip %}

Se você tiver várias chaves ou estiver tentando assinar commits ou tags com uma chave que não corresponda à sua identidade de autor de commit, [informe sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key).

1. Ao fazer commit das alterações no branch local, adicione o sinalizador -S flag ao comando git commit:
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. Se você estiver usando a GPG, depois de criar o commit, forneça a frase secreta configurada quando [gerou a chave GPG](/articles/generating-a-new-gpg-key).
3. Quando terminar de criar os commits localmente, faça o push para o repositório remoto no {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. No {% data variables.product.product_name %}, navegue até sua pull request.
{% data reusables.repositories.review-pr-commits %}
5. Para exibir informações mais detalhadas sobre a assinatura verificada, clique em Verified (Verificada).
![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## Leitura adicional

* "[Como informar sua chave de assinatura ao Git](/articles/telling-git-about-your-signing-key)"
* "[Como assinar tags](/articles/signing-tags)"
