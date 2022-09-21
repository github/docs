---
title: Usar o encaminhamento de agente SSH
intro: 'Para simplificar a implantação em um servidor, você pode configurar o encaminhamento do agente para usar as chaves SSH locais de forma segura.'
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: ca827e1fc70288acc2da5c3a28ecfd71ece4a504
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996254'
---
O encaminhamento do agente SSH pode ser usado para simplificar a implantação em um servidor.  Isso permite que você use suas chaves SSH locais em vez de deixar as chaves (sem frase secreta!) no seu servidor.

Se você já tiver configurado uma chave SSH para interagir com o {% data variables.product.product_name %}, provavelmente, estará familiarizado com o `ssh-agent`. É um programa que é executado em segundo plano e mantém sua chave carregada na memória para que você não precise digitar a sua frase secreta toda vez que precisar usar a chave. O mais bacana é que você pode optar por permitir que os servidores acessem o `ssh-agent` local como se eles já estivessem em execução no servidor. Isso é como pedir a um amigo para digitar sua senha para que você possa usar o computador.

Confira o [guia Tech Tips de Steve Friedl][tech-tips] para obter uma explicação mais detalhada do encaminhamento do agente SSH.

## Configurar o encaminhamento do agente SSH

Certifique-se de que sua própria chave SSH esteja configurada e funcionando. Use [nosso guia para gerar chaves SSH][generating-keys] se ainda não tiver feito isso.

Você pode testar se a chave local funciona inserindo `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` no terminal:

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

Começamos bem. Vamos configurar SSH para permitir o encaminhamento de agentes para o seu servidor.

1. Usando seu editor de texto favorito, abra o arquivo em `~/.ssh/config`. Se esse arquivo não existir, você pode criá-lo digitando `touch ~/.ssh/config` no terminal.

2. Insira o seguinte texto no arquivo, substituindo `example.com` pelo nome de domínio ou pelo IP do servidor:

        Host example.com
          ForwardAgent yes

{% warning %}

**Aviso:** talvez você tenha a tentação de usar um curinga como `Host *` para apenas aplicar essa configuração a todas as conexões SSH. Essa não é realmente uma boa ideia, pois você estará compartilhando suas chaves SSH locais com *cada* servidor em que você executa o SSH. Eles não terão acesso direto às chaves, mas poderão usá-las *como você* enquanto a conexão estiver estabelecida. **Você deve adicionar apenas servidores em que confia e que pretende usar com o encaminhamento de agente.**

{% endwarning %}

## Testar o encaminhamento de agente SSH

Para testar se o encaminhamento de agente está funcionando com o servidor, entre com o SSH no servidor e execute `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` mais uma vez.  Se tudo correr bem, você retornará à mesma mensagem apresentada quando você fez localmente.

Se não tiver certeza de se a chave local está sendo usada, inspecione também a variável `SSH_AUTH_SOCK` no servidor:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

Se a variável não estiver definida, significa que o encaminhamento de agentes não está funcionando:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## Solucionar problemas de encaminhamento de agente SSH

Aqui estão algumas coisas a serem analisadas quando o agente SSH for encaminhado para solução de problemas.

### Você deve estar usando uma URL com SSH para fazer check-out do código

O encaminhamento de SSH só funciona com URLs com SSH, e não com URLs com HTTP(s). Verifique o arquivo `.git/config` no servidor e garanta que a URL seja uma URL no estilo SSH, como a mostrada abaixo:

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### As suas chaves SSH devem funcionar localmente

Antes de fazer suas chaves funcionarem por meio do encaminhamento de agentes, primeiro elas devem funcionar localmente. [Nosso guia sobre como gerar chaves SSH][generating-keys] pode ajudar você a configurar suas chaves SSH localmente.

### Seu sistema deve permitir o encaminhamento do agente SSH

Às vezes, as configurações do sistema não permitem o encaminhamento do agente SSH. Você pode verificar se um arquivo de configuração do sistema está sendo usado digitando o seguinte comando no terminal:

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

No exemplo acima, o arquivo `~/.ssh/config` é carregado primeiro e, em seguida `/etc/ssh_config` é lido.  Podemos inspecionar esse arquivo para ver se está sobrescrevendo nossas opções, ao executar os seguintes comandos:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

Neste exemplo, o arquivo `/etc/ssh_config` indica especificamente `ForwardAgent no`, que é uma forma de bloquear o encaminhamento de agente. A exclusão desta linha do arquivo deverá fazer com que o encaminhamento de agentes funcionando mais uma vez.

### Seu servidor deve permitir o encaminhamento do agente SSH em conexões de entrada

O encaminhamento de agentes também pode ser bloqueado no seu servidor. Você pode verificar se o encaminhamento de agente é permitido entrando com SSH no servidor e executando `sshd_config`. A saída desse comando deve indicar que `AllowAgentForwarding` está definido.

### O `ssh-agent` local precisa estar em execução

Na maioria dos computadores, o sistema operacional inicia `ssh-agent` automaticamente.  No entanto, é necessário que isso seja feito manualmente no Windows. Temos [um guia sobre como iniciar o `ssh-agent` sempre que você abrir o Git Bash][autolaunch-ssh-agent].

Para verificar se `ssh-agent` está em execução no computador, digite o seguinte comando no terminal:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### A chave precisa estar disponível para o `ssh-agent`

Verifique se a chave está visível para o `ssh-agent` executando o seguinte comando:

```shell
ssh-add -L
```

Se o comando disser que nenhuma identidade está disponível, você deverá adicionar sua chave:

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

No macOS, o `ssh-agent` "esquecerá" essa chave depois que ele for reiniciado durante as reinicializações. No entanto, você poderá importar suas chaves SSH para o Keychain usando este comando:

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
