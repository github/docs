---
title: Testar a conexão SSH
intro: 'Depois de configurar sua chave SSH e adicioná-la à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá testar a sua conexão.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338970'
---
Antes de testar a conexão SSH, é recomendável que você tenha:
- [Verificado se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)
- [Gerado uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adicionado uma nova chave SSH à sua conta do GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

Quando você testar a conexão, precisará autenticar essa ação usando sua senha, que é a frase secreta da chave SSH que você criou anteriormente. Para obter mais informações sobre como trabalhar com frases secretas da chave SSH, confira ["Como trabalhar com frases secretas da chave SSH"](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Insira o seguinte:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Você poderá receber um aviso como este:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Verifique se a impressão digital na mensagem que você vê corresponde à {% ifversion fpt or ghec %}[impressão digital de chave pública do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} impressão digital de chave pública da sua empresa{% endif %}. Se isso acontecer, digite `yes`:
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Você verá esta mensagem de erro:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  Esse é um problema conhecido com determinadas distribuições Linux. Para obter mais informações, confira ["Erro: Agente com falha ao entrar"](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

   {% note %}

   **Observação:** o comando remoto deve sair com o código 1.

   {% endnote %}

4. Verifique se a mensagem resultante contém seu nome de usuário. Se você receber a mensagem "Permissão negada", confira ["Erro: Permissão negada (chave pública)"](/articles/error-permission-denied-publickey).
