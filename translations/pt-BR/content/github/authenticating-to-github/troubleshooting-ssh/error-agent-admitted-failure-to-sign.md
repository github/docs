---
title: 'Erro: agente com falha ao entrar'
intro: 'Em raras circunstâncias, a conexão com o {% data variables.product.product_name %} via SSH no Linux produz o erro "Agente com falha ao entrar usando a chave". Siga estas etapas para resolver o problema.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key/
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
Ao tentar se conectar via SSH ao {% data variables.product.product_location %} em um computador Linux, você poderá receber a seguinte mensagem:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agente com falha ao entrar usando a chave.
> debug1: Não há mais métodos de autenticação para tentar.
> Permissão negada (publickey).
```

Para ver mais detalhes, consulte <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>este relatório de problemas</a>.

### Resolução

Para corrigir esse erro, carregue suas chaves no agente SSH com `ssh-add`:

```shell
# Inicie o ssh-agent em segundo plano
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Insira a frase secreta para /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identidade adicionadafrase secreta: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Se a chave não tiver o nome de arquivo padrão (`/.ssh/id_rsa`), você precisará passar esse caminho para `ssh-add`:

```shell
# Inicie o ssh-agent em segundo plano
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Insira a frase secreta para /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identidade adicionada: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
