---
title: Usar o encaminhamento de agente SSH
intro: 'Para simplificar a implantação em um servidor, você pode configurar o encaminhamento do agente para usar as chaves SSH locais de forma segura.'
redirect_from:
  - /guides/using-ssh-agent-forwarding/
  - /v3/guides/using-ssh-agent-forwarding
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---



O encaminhamento do agente SSH pode ser usado para simplificar a implantação em um servidor.  Isso permite que você use suas chaves SSH locais em vez de deixar as chaves (sem frase secreta!) no seu servidor.

Se você já configurou uma chave SSH para interagir com {% data variables.product.product_name %}, você provavelmente está familiarizado com o `ssh-agent`. É um programa que é executado em segundo plano e mantém sua chave carregada na memória para que você não precise digitar a sua frase secreta toda vez que precisar usar a chave. O fato é que você pode optar por deixar os servidores acessarem seu `ssh-agent local` como se já estivessem em execução no servidor. Isso é como pedir a um amigo para digitar sua senha para que você possa usar o computador.

Confira o [Guia das Dicas Técnicas de Steve Friedl][tech-tips] para obter uma explicação mais detalhada sobre encaminhamento do agente SSH.

### Configurar o encaminhamento do agente SSH

Certifique-se de que sua própria chave SSH esteja configurada e funcionando. Você pode usar [nosso guia sobre a geração de chaves SSH][generating-keys], caso ainda não tenha feito isso.

Você pode testar se a chave local funciona, inserindo `ssh -T git@{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}nome de host{% else %}github. om{% endif %}` no terminal:

```shell
$ ssh -T git@{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! Você autenticou com sucesso, mas o GitHub não fornece
> acesso shell.
```

Começamos bem. Vamos configurar SSH para permitir o encaminhamento de agentes para o seu servidor.

1. Usando o seu editor de texto favorito, abra o arquivo em `~/.ssh/config`. Se este arquivo não existir, você poderá criá-lo digitando `touch ~/.ssh/config` no terminal.

2. Digite o seguinte texto no arquivo, substituindo `example.com` pelo nome do domínio ou IP do seu servidor:
   
        Host example.com
          ForwardAgent yes

{% warning %}

**Aviso:** Você pode estar tentado a usar um caractere curinga como `Host *` para aplicar esta configuração em todas as conexões SSH. Na verdade, isso não é uma boa ideia, já que você iria compartilhar suas chaves SSH locais com *todos* os servidores que ingressar com SSH. Eles não terão acesso direto às chaves, mas serão poderão usá-las *como você* enquanto a conexão for estabelecida. **Você deve adicionar apenas os servidores em que confia e que pretende usar com o encaminhamento de agentes.**

{% endwarning %}

### Testar o encaminhamento de agente SSH

Para testar se o encaminhamento de agente está funcionando com seu servidor, você pode ingressar por SSH no servidor e executar `ssh -T git@{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}nome de host{% else %}github.com{% endif %}` mais uma vez.  Se tudo correr bem, você retornará à mesma mensagem apresentada quando você fez localmente.

Se você não tiver certeza se sua chave local está sendo usada, você também poderá inspecionar a variável `SSH_AUTH_SOCK` no seu servidor:

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
$ ssh -T git@{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

### Solucionar problemas de encaminhamento de agente SSH

Aqui estão algumas coisas a serem analisadas quando o agente SSH for encaminhado para solução de problemas.

#### Você deve estar usando uma URL com SSH para fazer check-out do código

O encaminhamento de SSH só funciona com URLs com SSH, e não com URLs com HTTP(s). Verifique o arquivo *.git/config* no seu servidor e certifique-se de que a URL está na forma SSH, conforme abaixo:

```shell
[remote "origin"]
  url = git@{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

#### As suas chaves SSH devem funcionar localmente

Antes de fazer suas chaves funcionarem por meio do encaminhamento de agentes, primeiro elas devem funcionar localmente. [Nosso guia sobre como gerar chaves SSH][generating-keys] pode ajudá-lo a configurar suas chaves SSH localmente.

#### Seu sistema deve permitir o encaminhamento do agente SSH

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

No exemplo acima, o arquivo *~/.ssh/config* é carregado primeiro e */etc/ssh_config* é lido em seguida.  Podemos inspecionar esse arquivo para ver se está sobrescrevendo nossas opções, ao executar os seguintes comandos:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

Neste exemplo, nosso arquivo */etc/ssh_config* diz especificamente `ForwardAgent no`, que é uma maneira de bloquear o encaminhamento de agentes. A exclusão desta linha do arquivo deverá fazer com que o encaminhamento de agentes funcionando mais uma vez.

#### Seu servidor deve permitir o encaminhamento do agente SSH em conexões de entrada

O encaminhamento de agentes também pode ser bloqueado no seu servidor. Você pode verificar se o encaminhamento do agente é permitido pelo SSHing no servidor e executar `sshd_config`. A saída deste comando deve indicar que `AllowAgentForwarding` foi configurado.

#### Seu `ssh-agent` deve estar em execução

Na maioria dos computadores, o sistema operacional inicia automaticamente `ssh-agent` para você.  No entanto, é necessário que isso seja feito manualmente no Windows. Temos [um guia sobre como iniciar `ssh-agent` sempre que você abrir o Git Bash][autolaunch-ssh-agent].

Para verificar se `ssh-agent` está em execução no seu computador, digite o seguinte comando no terminal:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

#### Sua chave deve estar disponível para `ssh-agent`

Você pode verificar se sua chave está visível para `ssh-agent`, executando o seguinte comando:

```shell
ssh-add -L
```

Se o comando disser que nenhuma identidade está disponível, você deverá adicionar sua chave:

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

No Mac OS X `ssh-agent` irá "esquecer" essa chave, assim que for reiniciado. No entanto, você poderá importar suas chaves SSH para o Keychain usando este comando:

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[generating-keys]: /articles/generating-ssh-keys
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
