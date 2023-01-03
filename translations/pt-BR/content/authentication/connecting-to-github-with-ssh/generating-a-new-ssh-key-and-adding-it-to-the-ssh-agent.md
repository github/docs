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
ms.openlocfilehash: 024d74d62b99b6dd94fcecdc835d6094f83234f4
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118968'
---
## Sobre frases secretas da chave SSH

{% data reusables.ssh.about-ssh %} Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

Ao gerar uma chave SSH, você pode adicionar uma frase secreta para proteger ainda mais a chave. Sempre que você usar a chave, deverá inserir a frase secreta. Se sua chave tiver uma frase secreta e você não quiser inserir a frase secreta sempre que usar a chave, poderá adicionar sua chave ao agente SSH. O agente SSH gerencia suas chaves SSH e lembra sua frase secreta.

Se você ainda não tem uma chave SSH, você deve gerar uma nova chave SSH para usar para a autenticação. Se você não tem certeza se já tem uma chave SSH, você pode verificar se há chaves existentes. Para obter mais informações, confira "[Como verificar se há chaves SSH existentes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".

Se você deseja usar uma chave de segurança de hardware para efetuar a autenticação em {% data variables.product.product_name %}, você deverá gerar uma nova chave SSH para a sua chave de segurança de hardware. Você deve conectar a sua chave de segurança de hardware ao seu computador ao efetuar a a sua autenticação com o par de chaves. Para obter mais informações, confira as [notas sobre a versão do OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

## Gerar uma nova chave SSH

Você pode gerar uma nova chave SSH no computador local. Após gerar a chave, você poderá adicionar a chave à sua conta em {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar a autenticação para operações Git por SSH.

{% ifversion ghes %}

Se você for um administrador de site para {% data variables.location.product_location %}, poderá usar a mesma chave para conceder a si mesmo acesso SSH administrativo à instância. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% endif %}

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu {% data variables.product.product_name %}.
   {%- ifversion ghae %}  <!-- GitHub AE is FIPS 140-2 compliant. FIPS does not yet permit keys that use the ed25519 algorithm. -->
   ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   ```
   {%- else %}
   ```shell
   $ ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   {% note %}

   **Observação:** se estiver usando um sistema herdado que não dá suporte ao algoritmo Ed25519, use:
   ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   {% endnote %} {%- endif %}

   Isto cria uma nova chave SSH, usando o nome de e-mail fornecido como uma etiqueta.
   ```shell
   > Generating public/private ALGORITHM key pair.
   ```
Quando for solicitado a inserir um arquivo para salvar a chave, pressione **Enter** para aceitar o local padrão do arquivo. Observe que, se você criou chaves SSH anteriormente, ssh-keygen pode pedir que você reescreva outra chave. Nesse caso, recomendamos criar uma chave SSH personalizada. Para fazer isso, digite o local do arquivo padrão e substitua id_ssh_keyname pelo nome da chave personalizada.


   {% mac %}

   ```shell
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):[Press enter]
   ```

   {% endlinux %}

4. No prompt, digite uma frase secreta segura. Para obter mais informações, confira ["Como trabalhar com frases secretas de chave SSH](/articles/working-with-ssh-key-passphrases)".
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```

## Adicionar sua chave SSH ao ssh-agent

Antes de adicionar uma nova chave SSH ao agente para gerenciar suas chaves, você deve verificar as chaves SSH existentes e gerado uma nova chave SSH. <span class="platform-mac">Ao adicionar sua chave SSH ao agente, use o comando `ssh-add` padrão do macOS e não um aplicativo instalado pelo [MacPorts](https://www.macports.org/), pelo [Homebrew](http://brew.sh/) ou por alguma outra fonte externa.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Se estiver usando o macOS Sierra 10.12.2 ou posterior, precisará modificar o arquivo `~/.ssh/config` para carregar automaticamente as chaves no ssh-agent e armazenar as senhas no conjunto de chaves.

   * Primeiro, verifique se o arquivo `~/.ssh/config` existe no local padrão.

     ```shell
     $ open ~/.ssh/config
     > The file /Users/YOU/.ssh/config does not exist.
     ```

   * Se o arquivo não existir, crie o arquivo.

     ```shell
     $ touch ~/.ssh/config
     ```

   * Abra o arquivo `~/.ssh/config` e modifique-o para conter as linhas a seguir. Se o seu arquivo de chave SSH tiver um nome ou caminho diferente do exemplo de código, modifique o nome ou o caminho para corresponder à sua configuração atual.

     ```
     Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ~/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}
     ```

     {% note %}

     **Observações:**

     - Se você optou por não adicionar uma frase secreta à chave, você deve omitir a linha `UseKeychain`.

     - Se você vir um erro `Bad configuration option: usekeychain`, adicione uma linha adicional à seção `Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}` da configuração.

       ```
       Host *.{% ifversion ghes or ghae %}HOSTNAME{% else %}github.com{% endif %}
         IgnoreUnknown UseKeychain
       ```
     {% endnote %}

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add --apple-use-keychain ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
  ```
  {% note %}

   **Observação:** a opção `--apple-use-keychain` armazena a frase secreta no seu conjunto de chaves quando você adiciona uma chave SSH ao ssh-agent. Se você optou por não adicionar uma frase secreta à chave, execute o comando sem a opção `--apple-use-keychain`.

   A opção `--apple-use-keychain` está na versão padrão da Apple de `ssh-add`. Em versões do MacOS anteriores à Monterey (12.0), os sinalizadores `--apple-use-keychain` e `--apple-load-keychain` usavam a sintaxe `-K` e `-A`, respectivamente.

  Caso não tenha a versão standard de `ssh-add` da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações, confira "[Erro: ssh-add: opção inválida -- K](/articles/error-ssh-add-illegal-option-k)".


   {% endnote %}

4. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".

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

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %} {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

## Gerar uma nova chave SSH para uma chave de segurança de hardware

Se você estiver usando macOS ou Linux, Talvez você precise atualizar seu cliente SSH ou instalar um novo cliente SSH antes de gerar uma nova chave SSH. Para obter mais informações, confira "[Erro: tipo de chave desconhecido](/github/authenticating-to-github/error-unknown-key-type)".

1. Insira sua chave de segurança de hardware no seu computador.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cole o texto abaixo, substituindo o endereço de e-mail da sua conta em {% data variables.product.product_name %}.
   ```shell
   $ ssh-keygen -t {% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}-sk -C "YOUR_EMAIL"
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
   > Enter a file in which to save the key (/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk): [Press enter]
   ```

   {% endmac %}

   {% windows %}

   ```shell
   > Enter a file in which to save the key (/c/Users/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endwindows %}

   {% linux %}

   ```shell
   > Enter a file in which to save the key (/home/YOU/.ssh/id_{% ifversion ghae %}ecdsa{% else %}ed25519{% endif %}_sk):[Press enter]
   ```

   {% endlinux %}

6. Quando precisar digitar uma frase secreta, pressione **ENTER**.
   ```shell
   > Enter passphrase (empty for no passphrase): [Type a passphrase]
   > Enter same passphrase again: [Type passphrase again]
   ```
7. Adicione a chave SSH à sua conta em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como adicionar uma nova chave SSH à sua conta do {% data variables.product.prodname_dotcom %}](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)".
