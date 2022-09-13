---
title: 'Erro: agente com falha ao entrar'
intro: 'Em circunstâncias raras, conectar-se ao {% data variables.product.product_name %} via SSH no Linux produz o erro `"Agent admitted failure to sign using the key"`. Siga estas etapas para resolver o problema.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
ms.openlocfilehash: eceb783df61b403a6b94b8eda84be62e63aa5ead
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083557'
---
Ao tentar se conectar via SSH ao {% data variables.product.product_location %} em um computador Linux, você poderá receber a seguinte mensagem:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Para obter mais detalhes, confira <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>este relatório de problemas</a>.

## Resolução

Corrija esse erro carregando suas chaves no agente SSH com `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Se a sua chave não tiver o nome de arquivo padrão (`/.ssh/id_rsa`), você precisará transmitir esse caminho para `ssh-add`:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
