---
title: Usar SSH na porta HTTPS
intro: 'Às vezes, os firewalls se recusam a permitir conexões SSH completamente.  Se o uso [da clonagem de HTTPS com cache de credenciais](/github/using-git/caching-your-github-credentials-in-git) não for uma opção, você poderá tentar clonar usando uma conexão SSH feita através da porta HTTPS.  A maioria das regras de firewall deve permitir isso, mas o servidores proxy podem interferir.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
versions:
  free-pro-team: '*'
---

{% tip %}

**Usuários do GitHub Enterprise**: não há suporte atualmente ao GitHub Enterprise via SSH na porta HTTPS.

{% endtip %}

Para testar se o SSH na porta HTTPS é possível, execute este comando SSH:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Olá <em>username</em>! Você conseguiu se autenticar, mas o GitHub não
> fornece acesso shell.
```

Se deu certo, ótimo! Caso contrário, [siga nosso guia para solução de problemas](/articles/error-permission-denied-publickey).

### Habilitar conexões SSH por HTTPS

Se você conseguir fazer SSH no `git@ssh.{% data variables.command_line.backticks %}` na porta 443, substitua as configurações SSH para forçar qualquer conexão ao {% data variables.product.product_location %} a ser executada nesse servidor e nessa porta.

Para definir isso na configuração SSH, edite o arquivo em `~/.ssh/config` e adicione esta seção:

```
Host {% data variables.command_line.codeblock %}
  Hostname ssh.{% data variables.command_line.codeblock %}
  Port 443
```

Para testar se funciona, conecte-se mais uma vez ao {% data variables.product.product_location %}:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Olá <em>username</em>! Você conseguiu se autenticar, mas o GitHub não
> fornece acesso shell.
```
