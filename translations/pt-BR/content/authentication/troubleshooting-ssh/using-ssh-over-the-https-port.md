---
title: Usar SSH na porta HTTPS
intro: 'Às vezes, os firewalls se recusam a permitir conexões SSH completamente.  Se usar [clonagem de HTTPS com armazenamento de credenciais em cache](/github/getting-started-with-github/caching-your-github-credentials-in-git) não for uma opção, experimente clonar usando uma conexão SSH na porta HTTPS.  A maioria das regras de firewall deve permitir isso, mas o servidores proxy podem interferir.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190319'
---
{% tip %}

**Usuários {% data variables.product.prodname_ghe_server %}** : acessar {% data variables.product.prodname_ghe_server %} via SSH por porta HTTPS atualmente não tem suporte.

{% endtip %}

Para testar se o SSH na porta HTTPS é possível, execute este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Observação**: o nome do host da porta 443 é `ssh.{% data variables.command_line.backticks %}`, não `{% data variables.command_line.backticks %}`.

{% endnote %}

Se deu certo, ótimo! Caso contrário, talvez seja necessário [seguir nosso guia de solução de problemas](/articles/error-permission-denied-publickey).

Agora, para clonar o repositório, você pode executar o seguinte comando:

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## Habilitar conexões SSH por HTTPS

Se você conseguir usar SSH no `git@ssh.{% data variables.command_line.backticks %}` na porta 443, você poderá substituir as configurações de SSH para forçar qualquer conexão ao {% data variables.location.product_location %} a ser executada nesse servidor e nessa porta.

Para definir isso em seu arquivo de configuração SSH, edite o arquivo em `~/.ssh/config` e adicione esta seção:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Para testar se funciona, conecte-se mais uma vez ao {% data variables.location.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Atualizando hosts conhecidos

Na primeira vez que você interagir com o GitHub depois de alternar para a porta 443, talvez receba uma mensagem de aviso informando que o host não foi encontrado no `known_hosts` ou que ele foi encontrado por outro nome.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Você pode responder "sim" a essa pergunta, supondo que a impressão digital do SSH corresponde a uma das impressões digitais publicadas do GitHub. Para obter a lista de impressões digitais, confira "[Impressões digitais de chave SSH do Github](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)".
