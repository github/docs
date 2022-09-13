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
ms.openlocfilehash: 47bdb96fac65d9432dfc54f671366d1b6c153556
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083534'
---
{% tip %}

**Usuários {% data variables.product.prodname_ghe_server %}** : acessar {% data variables.product.prodname_ghe_server %} via SSH por porta HTTPS atualmente não tem suporte.

{% endtip %}

Para testar se o SSH na porta HTTPS é possível, execute este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Se deu certo, ótimo! Caso contrário, talvez seja necessário [seguir nosso guia de solução de problemas](/articles/error-permission-denied-publickey).

## Habilitar conexões SSH por HTTPS

Se você conseguir fazer SSH para `git@ssh.{% data variables.command_line.backticks %}` por meio da porta 443, você poderá substituir as configurações SSH para forçar qualquer conexão ao {% data variables.product.product_location %} a ser executada nesse servidor e nessa porta.

Para definir isso em seu arquivo de configuração SSH, edite o arquivo em `~/.ssh/config` e adicione esta seção:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Para testar se funciona, conecte-se mais uma vez ao {% data variables.product.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
