---
title: Gerar uma nova chave SSH e adicioná-la ao ssh-agent
intro: 'Depois de verificar a existência de chaves SSH, é possível gerar uma nova chave SSH para autenticação e adicioná-la ao ssh-agent.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

### About SSH key generation

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[Checking for existing SSH keys](/github/authenticating-to-github/checking-for-existing-ssh-keys)."

{% if currentVersion == "free-pro-team@latest" %}

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

{% endif %}
If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.

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

4. Digite uma frase secreta segura no prompt. For more information, see ["Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Adicionar sua chave SSH ao ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">Ao adicionar sua chave SSH ao agent, use o comando padrão "ssh-add" do macOS, e não um aplicativo instalado por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) ou qualquer outra fonte externa.</span>

{% mac %}

1. {% data reusables.command_line.start_ssh_agent %}

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

      **Note:** If you see an error like this

      ```
      /Users/USER/.ssh/config: line 16: Bad configuration option: usekeychain
      ```

      add an additional config line to your `Host *` section:

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

4. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Certifique-se de que o ssh-agent está em execução. Você pode usar as instruções "Lançamento automático do ssh-agent" em "[Trabalhando com palavras-chave SSH](/articles/working-with-ssh-key-passphrases)" ou iniciá-lo manualmente:
  ```shell
  # start the ssh-agent in the background
  $ eval `ssh-agent -s`
  > Agent pid 59566
  ```

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

  In some Linux environments, you need root access to run the command:

  ```
  $ sudo -s -H
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1"  %}
### Generating a new SSH key for a hardware security key

If you are using macOS or Linux, you may need to update your SSH client or install a new SSH client prior to generating a new SSH key. For more information, see "[Error: Unknown key type](/github/authenticating-to-github/error-unknown-key-type)."

1. Insert your hardware security key into your computer.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Paste the text below, substituting in the email address for your account on {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t ed25519-sk -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Note:** If the command fails and you receive the error `invalid format` or `feature not supported,` you may be using a hardware security key that does not support the Ed25519 algorithm. Enter the following command instead.
  ```shell
   $ ssh-keygen -t ecdsa-sk -C "your_email@example.com"
  ```

  {% endnote %}
4. When you are prompted, touch the button on your hardware security key.
5. When you are prompted to "Enter a file in which to save the key," press Enter to accept the default file location.

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

6. When you are prompted to type a passphrase, press **Enter**.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```
7. Add the SSH key to your account on {% data variables.product.prodname_dotcom %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endif %}

### Leia mais

- "[Sobre SSH](/articles/about-ssh)"
- "[Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
