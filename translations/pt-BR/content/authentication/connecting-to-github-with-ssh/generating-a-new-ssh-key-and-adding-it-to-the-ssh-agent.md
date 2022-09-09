---
title: Gerando uma nova chave SSH e adicionando-a ao agente SSH
intro: 'Depois de verificar a existência de chaves SSH, é possível gerar uma nova chave SSH para autenticação e adicioná-la ao ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent
  - /articles/generating-a-new-ssh-key
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Generate new SSH key
ms.openlocfilehash: 8714cb24a6ed46fda17f53295601748ebffdc255
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409136'
---
## Sobre frases secretas da chave SSH

{% data reusables.ssh.about-ssh %} Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

Ao gerar uma chave SSH, você pode adicionar uma frase secreta para proteger ainda mais a chave. Sempre que você usar a chave, deverá inserir a frase secreta. Se sua chave tiver uma frase secreta e você não quiser inserir a frase secreta sempre que usar a chave, poderá adicionar sua chave ao agente SSH. O agente SSH gerencia suas chaves SSH e lembra sua frase secreta.

Se você ainda não tem uma chave SSH, você deve gerar uma nova chave SSH para usar para a autenticação. Se você não tem certeza se já tem uma chave SSH, você pode verificar se há chaves existentes. Para obter mais informações, confira "[Como verificar se há chaves SSH existentes](/github/authenticating-to-github/checking-for-existing-ssh-keys)".

Se você deseja usar uma chave de segurança de hardware para efetuar a autenticação em {% data variables.product.product_name %}, você deverá gerar uma nova chave SSH para a sua chave de segurança de hardware. Você deve conectar a sua chave de segurança de hardware ao seu computador ao efetuar a a sua autenticação com o par de chaves. Para obter mais informações, confira as [notas sobre a versão do OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Gerar uma nova chave SSH

Você pode gerar uma nova chave SSH no computador local. Após gerar a chave, você poderá adicionar a chave à sua conta em {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar a autenticação para operações Git por SSH.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu {% data variables.product.product_name %}.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>" 
   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
   ```
   {% note %}
   
   **Observação:** se estiver usando um sistema herdado que não dá suporte ao algoritmo Ed25519, use:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
   ```

   {% endnote %} {%- endif %}

   Isto cria uma nova chave SSH, usando o nome de e-mail fornecido como uma etiqueta.
   ```shell
   > Generating public/private <em>algorithm</em> key pair.
   ```
3. Quando aparecer a solicitação "Enter a file in which to save the key" (Insira um arquivo no qual salvar a chave), presssione Enter. Isso aceita o local padrão do arquivo.

   {% mac %}
   
   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_<em>algorithm</em>):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/<em>algorithm</em>): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

4. No prompt, digite uma frase secreta segura. Para obter mais informações, confira ["Como trabalhar com frases secretas de chave SSH](/articles/working-with-ssh-key-passphrases)".
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```

## Adicionar sua chave SSH ao ssh-agent

Antes de adicionar uma nova chave SSH ao agente para gerenciar suas chaves, você deve verificar as chaves SSH existentes e gerado uma nova chave SSH. <span class="platform-mac">Ao adicionar sua chave SSH ao agente, use o comando `ssh-add` padrão do macOS e não um aplicativo instalado pelo [MacPorts](https://www.macports.org/), pelo [Homebrew](http://brew.sh/) ou por alguma outra fonte externa.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Se estiver usando o macOS Sierra 10.12.2 ou posterior, precisará modificar o arquivo `~/.ssh/config` para carregar automaticamente as chaves no ssh-agent e armazenar as senhas no conjunto de chaves.

   * Primeiro, verifique se o arquivo `~/.ssh/config` existe no local padrão.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/<em>you</em>/.ssh/config does not exist.
     ```

   * Se o arquivo não existir, crie o arquivo.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Abra o arquivo `~/.ssh/config` e modifique-o para conter as linhas a seguir. Se o seu arquivo de chave SSH tiver um nome ou caminho diferente do exemplo de código, modifique o nome ou o caminho para corresponder à sua configuração atual. 

     ```
     Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Observações:**
     
     - Se você optou por não adicionar uma frase secreta à chave, você deve omitir a linha `UseKeychain`.
  
     - Se você vir um erro `Bad configuration option: usekeychain`, adicione uma linha adicional à seção `Host *` da configuração.

       ```
       Host *
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
   ```
   {% note %}

   **Observação:** a opção `-K` é a versão padrão da Apple de `ssh-add`, que armazena a frase secreta no seu conjunto de chaves quando você adiciona uma chave SSH ao ssh-agent. Se você optou por não adicionar uma frase secreta à chave, execute o comando sem a opção `-K`. 

   Caso não tenha a versão standard da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações sobre como resolver esse erro, confira "[Erro: ssh-add: opção inválida -- K](/articles/error-ssh-add-illegal-option-k)".
  
   No macOS Monterey (12.0), os sinalizadores `-K` e `-A` foram preteridos e substituídos pelos sinalizadores `--apple-use-keychain` e `--apple-load-keychain`, respectivamente. 

   {% endnote %}

4. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Verifique se o ssh-agent está em execução: Use as instruções de "Como iniciar o ssh-agent automaticamente" descritas em "[Como trabalhar com frases secretas de chave SSH](/articles/working-with-ssh-key-passphrases)" ou inicie-o manualmente:
   ```shell
   # start the ssh-agent in the background
   $ eval "$(ssh-agent -s)"
   > Agent pid 59566
   ```

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

## Gerar uma nova chave SSH para uma chave de segurança de hardware

Se você estiver usando macOS ou Linux, Talvez você precise atualizar seu cliente SSH ou instalar um novo cliente SSH antes de gerar uma nova chave SSH. Para obter mais informações, confira "[Erro: tipo de chave desconhecido](/github/authenticating-to-github/error-unknown-key-type)".

1. Insira sua chave de segurança de hardware no seu computador.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cole o texto abaixo, substituindo o endereço de e-mail da sua conta em {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "<em>your_email@example.com</em>"
   ```
  
   {%- ifversion not ghae %} {% note %}

   **Observação:** se houver uma falha no comando e você receber o erro `invalid format` ou `feature not supported,`, você poderá estar usando uma chave de segurança de hardware que não dá suporte ao algoritmo Ed25519. Insira o comando a seguir.
   ```shell
    $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
   ```
   
   {% endnote %} {%- endif %}
4. Quando solicitado, toque no botão da sua chave de segurança de hardware.
5. Quando for solicitado a "Insira um arquivo para salvar a chave", pressione Enter para aceitar o local padrão do arquivo.

   {% mac %}
   
   ```shell
   > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```

   {% endmac %}
   
   {% windows %}
   
   ```shell
   > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):<em>[Press enter]</em>
   ```

   {% endwindows %}
   
   {% linux %}
   
   ```shell
   > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): <em>[Press enter]</em>
   ```
   
   {% endlinux %}

6. Quando precisar digitar uma frase secreta, pressione **ENTER**.
   ```shell
   > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
   > Enter same passphrase again: <em>[Type passphrase again]</em>
   ```
7. Adicione a chave SSH à sua conta em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".
