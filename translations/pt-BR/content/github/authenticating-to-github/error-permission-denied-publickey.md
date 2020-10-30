---
title: 'Erro: permissão negada (publickey)'
intro: Uma mensagem de erro "Permission denied" (permissão negada) indica que o servidor rejeitou a sua conexão. Existem diferentes razões para isso acontecer. Os exemplos mais comuns estão descritos abaixo.
redirect_from:
  - /articles/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### O comando `sudo` deve ser usado com o Git?

Você não deve usar o comando `sudo` com o Git. Caso você tenha uma *razão muito boa* para usar `sudo`, assegure-se de usá-lo com todos os comandos (talvez seja melhor usar `su` para obter um shell como root nesse ponto). Se você [gerar chaves SSH](/articles/generating-an-ssh-key) sem `sudo` e depois tentar usar um comando como `sudo git push`, você não estará usando as mesmas chaves que gerou.

### Verifique se está conectado ao servidor correto

Sabemos que digitar é difícil. Preste atenção ao que digita; você não conseguirá se conectar a "githib.com" ou "guthub.com". Em alguns casos, uma rede corporativa também pode causar problemas ao resolver o registro DNS.

Insira o segunte comando para confirmar que está conectado ao domínio correto:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011
> debug1: Lendo dados de configuração /Users/<em>you</em>/.ssh/config
> debug1: Lendo dados de configuração /etc/ssh_config
> debug1: Solicitando opções para *
> debug1: Conectando a {% data variables.command_line.codeblock %} [IP ADDRESS] port 22.
```

A conexão deve ser feita na porta 22{% if currentVersion == "free-pro-team@latest" %}, a não ser que você esteja substituindo as configurações para usar [SSH na porta HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

### Sempre utilize o usuário "git"

Todas as conexões devem ser feitas como usuário "git", inclusive aquelas para URLs remotas. Se você tentar se conectar com o seu {% data variables.product.product_name %} nome de usuário, ocorrerá um erro:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permissão negada (publickey).
```
Se houver uma falha na conexão ao usar um URL remoto com seu nome de usuário {% data variables.product.product_name %}, você pode [alterar a URL remota para o usuário "git"](/articles/changing-a-remote-s-url/).

Verifique sua conexão digitando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Olá <em>username</em>! Você conseguiu se autenticar...
```

### Garanta que você tem uma chave que está em uso

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endlinux %}

O comando `ssh-add` *deverá* imprimir uma string longa com números e letras. Caso isso não aconteça, você deverá [gerar uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e associá-la a {% data variables.product.product_name %}.

{% tip %}

**Dica**: Na maioria dos sistemas, as chaves privadas padrão (`~/.ssh/id_rsa`{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}, `~/. sh/id_dsa`{% endif %} and `~/.ssh/identity`) são adicionadas automaticamente ao agente de autenticação SSH. Não há necessidade de executar `ssh-add path/to/key`, a não ser que você substitua o nome do arquivo ao gerar uma chave.

{% endtip %}

#### Obter mais detalhes

Você também pode verificar a chave que está sendo usada tentando se conectar a `git@{% data variables.command_line.backticks %}`:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: Arquivo de identificação /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: Arquivo de identificação /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: Arquivo de identificação /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: Arquivo de identificação /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Autenticações que podem prosseguir: publickey
> debug1: Próximo método de autenticação: publickey
> debug1: Tentando chave privada: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Tentando chave privada: /Users/<em>you</em>/.ssh/id_dsa
> debug1: Não há mais métodos de autenticação para tentar.
> Permissão negada (publickey).
```

Nesse exemplo, não temos nenhuma chave SSH para usar. "-1" ao final das linhas "arquivo de identificação" indica que o SSH não conseguiu encontrar um arquivo para usar. Mais adiante, as linhas "Tentando chave privada" também indicam que o arquivo não foi encontrado. Se existisse um arquivo, as linhas seriam respectivamente "1" e "Apresentando chave pública":

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: arquivo de identificação /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Autenticações que podem prosseguir: publickey
> debug1: Próximo método de autenticação: publickey
> debug1: Apresentando chave pública RSA: /Users/<em>you</em>/.ssh/id_rsa
```

### Verifique se a chave pública está associada à sua conta

Forneça sua chave pública a {% data variables.product.product_name %} para estabelecer uma conexão segura.

{% mac %}

1. Abra o terminal.
2. Inicie o SSH agent em segundo plano.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`. ![Lista de chaves SSH em {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Abra a linha de comando.
2. Inicie o SSH agent em segundo plano.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`. ![Lista de chaves SSH em {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Abra o terminal.
2. Inicie o SSH agent em segundo plano.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`. ![Lista de chaves SSH em {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Caso não consiga ver sua chave pública em {% data variables.product.product_name %}, seeá necessário [adicionar a chave SSH a {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) para associá-la ao seu computador.

{% warning %}

**Aviso**: se você encontrar uma chave SSH com a qual não esteja familiarizado em {% data variables.product.product_name %}, delete-a imediatamente e entre em contato com {% data variables.contact.contact_support %} para obter ajuda. Uma chave pública desconhecida pode indicar um possível problema de segurança. Para obter mais informações, consulte "[Revisar as chaves SSH](/articles/reviewing-your-ssh-keys)".

{% endwarning %}
