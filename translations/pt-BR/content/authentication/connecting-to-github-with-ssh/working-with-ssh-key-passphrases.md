---
title: Trabalhar com frase secreta da chave SSH
intro: Você pode proteger suas chaves SSH e configurar um agente de autenticação para que não precise redigitar a senha toda vez que usar as chaves SSH.
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 5ddacfa052b866fe1cbd601caa8a1ff9ab6934fd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409112'
---
## Sobre frases secretas para chaves SSH

Com as chaves SSH, se alguém conseguir acessar seu computador, o invasor terá acesso a todos os sistemas que usam essas chaves. Para incluir uma camada extra de segurança, adicione uma frase secreta à sua chave SSH. Para evitar inserir a frase secreta toda vez que você se conectar, você poderá salvar sua frase secreta com segurança no agente SSH.

## Adicionar ou alterar frase secreta

É possível alterar a frase secreta de uma chave privada sem gerar novamente o par de chaves. Basta digitar o seguinte comando:

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Caso a sua chave já tenha uma frase secreta, você precisará digitá-la antes de poder alterar para uma nova frase secreta.

{% windows %}

## Inicialização automática do `ssh-agent` no Git para Windows

Você pode executar `ssh-agent` automaticamente quando abre o shell do Bash ou do Git. Copie as seguintes linhas e cole-as no arquivo `~/.profile` ou `~/.bashrc` no shell do Git:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Se a sua chave privada não estiver armazenada em um dos locais padrão (como `~/.ssh/id_rsa`), você precisará informar ao agente de autenticação SSH o local em que ela se encontra. Para adicionar sua chave ao ssh-agent, digite `ssh-add ~/path/to/my_key`. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)".

{% tip %}

**Dica:** caso você deseje que o `ssh-agent` esqueça sua chave depois de algum tempo, configure-o para fazer isso executando `ssh-add -t <seconds>`.

{% endtip %}

Agora, quando você executar o Git Bash pela primeira vez, sua frase secreta será solicitada:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

O processo `ssh-agent` continuará sendo executado até que você faça logoff, desligue o computador ou encerre o processo.

{% endwindows %}

{% mac %}

## Salvar a frase secreta na keychain

No Mac OS X Leopard até o OS X El Capitan, estes arquivos de chave privada padrão são tratados automaticamente:

- *.ssh/id_rsa*
- *.ssh/identity*

Na primeira vez que você usar a chave, precisará digitar sua frase secreta. Se você optar por salvar a frase secreta com a keychain, não precisará digitá-la novamente.

Caso contrário, armazene a frase secreta na keychain quando adicionar a chave ao ssh-agent. Para obter mais informações, confira "[Como adicionar sua chave SSH ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)".

{% endmac %}
