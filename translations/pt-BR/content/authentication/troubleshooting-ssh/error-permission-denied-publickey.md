---
title: 'Erro: permissão negada (publickey)'
intro: Uma mensagem de erro "Permission denied" (permissão negada) indica que o servidor rejeitou a sua conexão. Existem diferentes razões para isso acontecer. Os exemplos mais comuns estão descritos abaixo.
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: fdf69ae9777127851e1e0a1e85b5907ebd4a3557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083553'
---
## O comando `sudo` ou os privilégios elevados devem ser usados com o Git?

Você não deve usar o comando `sudo` nem privilégios elevados, como permissões de administrador, com o Git. Se tiver uma *razão muito boa* para usar o `sudo`, use-o com todos os comandos (provavelmente, é melhor usar o `su` para obter um shell como raiz neste ponto). Se você [gerar chaves SSH](/articles/generating-an-ssh-key) sem o `sudo` e tentar usar um comando como `sudo git push`, as mesmas chaves geradas não serão usadas.

## Verifique se está conectado ao servidor correto

Sabemos que digitar é difícil. Preste atenção ao que digita; você não conseguirá se conectar a "githib.com" ou "guthub.com". Em alguns casos, uma rede corporativa também pode causar problemas ao resolver o registro DNS.

Insira o segunte comando para confirmar que está conectado ao domínio correto:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

A conexão deve ser feita na porta 22{% ifversion fpt or ghec %}, a menos que você esteja substituindo as configurações para usar o [SSH por HTTPS](/articles/using-ssh-over-the-https-port){% endif %}.

## Sempre utilize o usuário "git"

Todas as conexões devem ser feitas como usuário "git", inclusive aquelas para URLs remotas. Se você tentar se conectar com o seu {% data variables.product.product_name %} nome de usuário, ocorrerá um erro:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Se a conexão falhar e você estiver usando uma URL remota com seu nome de usuário do {% data variables.product.product_name %}, [altere a URL remota para usar o usuário "git"](/github/getting-started-with-github/managing-remote-repositories).

Verifique sua conexão digitando:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

## Garanta que você tem uma chave que está em uso

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Verifique se você tem uma chave privada gerada e carregada em SSH. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

O comando `ssh-add` *deve* imprimir uma longa cadeia de caracteres de números e letras. Se ele não imprimir nada, você precisará [gerar uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e associá-la ao {% data variables.product.product_name %}.

{% tip %}

**Dica**: na maioria dos sistemas, as chaves privadas padrão (`~/.ssh/id_rsa` e `~/.ssh/identity`) são adicionadas automaticamente ao agente de autenticação SSH. Você não precisará executar `ssh-add path/to/key`, a menos que substitua o nome do arquivo ao gerar uma chave.

{% endtip %}

### Obter mais detalhes

Você também pode verificar se a chave está sendo usada tentando se conectar a `git@{% data variables.command_line.backticks %}`:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Nesse exemplo, não temos nenhuma chave SSH para usar. "-1" ao final das linhas "arquivo de identificação" indica que o SSH não conseguiu encontrar um arquivo para usar. Mais adiante, as linhas "Tentando chave privada" também indicam que o arquivo não foi encontrado. Se existisse um arquivo, as linhas seriam respectivamente "1" e "Apresentando chave pública":

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

## Verifique se a chave pública está associada à sua conta

Forneça sua chave pública a {% data variables.product.product_name %} para estabelecer uma conexão segura.

{% mac %}

1. Abra o terminal.
2. Inicie o SSH agent em segundo plano.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Encontre e anote a impressão digital da chave pública. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`.
![Listagem de chaves SSH no {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Abra a linha de comando.
2. Inicie o SSH agent em segundo plano.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Encontre e anote a impressão digital da chave pública. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`.
![Listagem de chaves SSH no {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

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

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Compare a lista de chaves SSH com a saída do comando `ssh-add`.
![Listagem de chaves SSH no {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Se a chave pública não for exibida no {% data variables.product.product_name %}, você precisará [adicionar sua chave SSH ao {% data variables.product.product_name %}](/articles/adding-a-new-ssh-key-to-your-github-account) para associá-la ao computador.

{% warning %}

**Aviso**: se você receber uma chave SSH com a qual não esteja familiarizado no {% data variables.product.product_name %}, exclua-a imediatamente e entre em contato com o {% data variables.contact.contact_support %} para obter mais ajuda. Uma chave pública desconhecida pode indicar um possível problema de segurança. Para obter mais informações, confira "[Como revisar suas chaves SSH](/articles/reviewing-your-ssh-keys)".

{% endwarning %}
