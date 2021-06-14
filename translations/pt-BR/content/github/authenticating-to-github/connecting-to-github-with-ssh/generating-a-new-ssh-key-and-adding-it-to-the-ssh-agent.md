---
title: Gerar uma nova chave SSH e adicioná-la ao ssh-agent
intro: 'Depois de verificar a existência de chaves SSH, é possível gerar uma nova chave SSH para autenticação e adicioná-la ao ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - /github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

### Sobre a geração de chaves SSH

Se você ainda não tem uma chave SSH, você deve gerar uma nova chave SSH para usar para a autenticação. Se você não tem certeza se já tem uma chave SSH, você pode verificar se há chaves existentes. Para obter mais informações, consulte "[Verificar as chaves SSH existentes](/github/authenticating-to-github/checking-for-existing-ssh-keys)".

{% if currentVersion == "free-pro-team@latest" %}

Se você deseja usar uma chave de segurança de hardware para efetuar a autenticação em {% data variables.product.product_name %}, você deverá gerar uma nova chave SSH para a sua chave de segurança de hardware. Você deve conectar a sua chave de segurança de hardware ao seu computador ao efetuar a a sua autenticação com o par de chaves. Para obter mais informações, consulte as [notas de versão do OpenSSH 8.2](https://www.openssh.com/txt/release-8.2).

{% endif %}
Se não quiser reinserir a sua frase secreta toda vez que usar a sua chave SSH, você poderá adicionar sua chave ao agente SSH, que gerencia suas chaves SSH e lembra a sua frase secreta.

### Gerar uma nova chave SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Observação:** Se você estiver usando um sistema legado que não é compatível com o algoritmo Ed25519, use:
  ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  {% endnote %}
  O comando criará uma nova chave SSH, usando o e-mail fornecido como uma etiqueta.
  ```shell
  > Generating public/private ed25519 key pair.
  ```
3. Quando aparecer a solicitação "Enter a file in which to save the key" (Insira um arquivo no qual salvar a chave), presssione Enter. O local padrão do arquivo será aceito.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519): <em>[Press enter]</em>
  ```

  {% endlinux %}

4. Digite uma frase secreta segura no prompt. Para obter mais informações, consulte ["Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)".
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Adicionar sua chave SSH ao ssh-agent

Antes de adicionar uma nova chave SSH ao agente para gerenciar suas chaves, você deve verificar as chaves SSH existentes e gerado uma nova chave SSH. <span class="platform-mac">Ao adicionar sua chave SSH ao agent, use o comando padrão "ssh-add" do macOS, e não um aplicativo instalado por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) ou qualquer outra fonte externa.</span>

{% mac %}

{% data reusables.command_line.start_ssh_agent %}

2. Se estiver usando macOS Sierra 10.12.2 ou posterior, será necessário modificar seu arquivo `~/.ssh/config` para carregar automaticamente as chaves no ssh-agent e armazenar as frases secretas em seu keychain.

    * Primeiro, verifique se o arquivo `~/.ssh/config` existe no local padrão.

      ```shell
      $ open ~/.ssh/config
      > The file /Users/<em>you</em>/.ssh/config does not exist.
      ```

    * Se o arquivo não existir, crie o arquivo.

      ```shell
      $ touch ~/.ssh/config
      ```

    * Abra seu arquivo `~/.ssh/config` e modifique o arquivo para que contenha as seguintes linhas. Se o seu arquivo de chave SSH tiver um nome ou caminho diferente do exemplo de código, modifique o nome ou o caminho para corresponder à sua configuração atual.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Observação:** Se você optou por não adicionar uma frase secreta à sua chave, você deve omitir a linha `UseKeychain`.

     {% endnote %}

      {% mac %}
      {% note %}

      **Observação:** Se você vir um erro como este

      ```
      /Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain
      ```

      adicione uma linha de configuração adicional para a seção `Host *`:

      ```
      Host *
        IgnoreUnknown UseKeychain
      ```

      {% endnote %}
      {% endmac %}

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Observação:** a opção `-K` está presente na versão padrão da Apple do `ssh-add` e armazena a frase secreta no keychain quando você adiciona uma chave SSH ao ssh-agent. Se você optou por não adicionar uma frase secreta à sua chave, execute o comando sem a opção `-K`.

  Caso não tenha a versão standard da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações sobre como resolver esse erro, consulte "[Erro: ssh-add: opção ilícita -- K](/articles/error-ssh-add-illegal-option-k)".

  {% endnote %}

4. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Certifique-se de que o ssh-agent está em execução. Você pode usar as instruções "Lançamento automático do ssh-agent" em "[Trabalhando com palavras-chave SSH](/articles/working-with-ssh-key-passphrases)" ou iniciá-lo manualmente:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endwindows %}

{% linux %}

{% data reusables.command_line.start_ssh_agent %}

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Adicione a chave SSH à sua conta em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1"  %}
### Gerar uma nova chave SSH para uma chave de segurança de hardware

Se você estiver usando macOS ou Linux, Talvez você precise atualizar seu cliente SSH ou instalar um novo cliente SSH antes de gerar uma nova chave SSH. Para obter mais informações, consulte "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insira sua chave de segurança de hardware no seu computador.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Cole o texto abaixo, substituindo o endereço de e-mail da sua conta em {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519-sk -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Observação:** Se o comando falhar e você receber o erro `formato inválido` ou a funcionalidade `não compatível`, é possível que você esteja usando uma chave de segurança de hardware incompatível com o algoritmo Ed25519. Insira o comando a seguir.
  ```shell
   $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
  ```

  {% endnote %}
4. Quando solicitado, toque no botão da sua chave de segurança de hardware.
5. Quando for solicitado a "Insira um arquivo para salvar a chave", pressione Enter para aceitar o local padrão do arquivo.

  {% mac %}

  ```shell
  > Enter a file in which to save the key (/Users/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Enter a file in which to save the key (/c/Users/<em>you</em>/.ssh/id_ed25519_sk):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Enter a file in which to save the key (/home/<em>you</em>/.ssh/id_ed25519_sk): <em>[Press enter]</em>
  ```

  {% endlinux %}

6. Quando solicitado que você digite uma frase secreta, pressione **Enter**.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```
7. Adicione a chave SSH à sua conta em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Adicionar uma nova chave SSH à sua conta de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)".

{% endif %}

### Leia mais

- "[Sobre SSH](/articles/about-ssh)"
- "[Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
