---
title: 'Erro: ssh-add: opção ilícita -- K'
intro: 'O erro indica que sua versão do `ssh-add` não é compatível com a integração de keychain no macOS, que permite o armazenamento da frase secreta no keychain.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083550'
---
A opção `-K` está na versão padrão de `ssh-add` da Apple, que armazena a frase secreta no seu conjunto de chaves quando você adiciona uma chave SSH ao ssh-agent. Se você instalou outra versão de `ssh-add`, talvez ela não tenha suporte para `-K`.

## Resolver o problema

Para adicionar sua chave privada SSH ao ssh-agent, você pode especificar o caminho para a versão de `ssh-add` da Apple:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**Observação:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Leitura adicional

- "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)"
- [Página do manual do Linux para o SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Para ver a página do manual da Apple para o SSH-ADD, execute `man ssh-add` no terminal
