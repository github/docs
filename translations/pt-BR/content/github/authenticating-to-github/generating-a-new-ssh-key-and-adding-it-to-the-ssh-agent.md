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
  - ssh
---

Se você ainda não tem uma chave SSH, você deve [gerar uma nova chave SSH](#generating-a-new-ssh-key). Caso não tenha certeza de que já tem uma chave SSH, procure por [chaves existentes](/articles/checking-for-existing-ssh-keys).

Caso não queira reinserir sua frase secreta cada vez que usa a chave SSH, é possível [adicionar sua chave ao SSH agent](#adding-your-ssh-key-to-the-ssh-agent), que poderá gerenciar suas chaves SSH e lembrar sua frase secreta.

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

4. Digite uma frase secreta segura no prompt. Para obter mais informações, consulte ["Trabalhar com frases secretas da chave SSH"](/articles/working-with-ssh-key-passphrases).
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Adicionar sua chave SSH ao ssh-agent

Antes de adicionar uma nova chave SSH ao ssh-agent para gerenciar suas chaves, você deve ter [verificado a existência de chaves SSH](/articles/checking-for-existing-ssh-keys) e [gerado uma nova chave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). <span class="platform-mac">Ao adicionar sua chave SSH ao agent, use o comando padrão "ssh-add" do macOS, e não um aplicativo instalado por [macports](https://www.macports.org/), [homebrew](http://brew.sh/) ou qualquer outra fonte externa.</span>

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

    * Abre o seu arquivo `~/.ssh/config` file, then modify the file, replacing `~/.ssh/id_ed25519` se você não estiver usando o local e nome padrão para a sua chave `id_ed25519`.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Observação:** Se você optou por não adicionar uma frase secreta à sua chave, você deve omitir a linha `UseKeychain`.

     {% endnote %}

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Observação:** a opção `-K` está presente na versão padrão da Apple do `ssh-add` e armazena a frase secreta no keychain quando você adiciona uma chave SSH ao ssh-agent. Se você optou por não adicionar uma frase secreta à sua chave, execute o comando sem a opção `-K`.

  Caso não tenha a versão standard da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações sobre como resolver esse erro, consulte "[Erro: ssh-add: opção ilícita -- K](/articles/error-ssh-add-illegal-option-k)".

  {% endnote %}

4. [Adicione a chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

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

3. [Adicione a chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

2. Adicione sua chave SSH privada ao ssh-agent. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [Adicione a chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% endlinux %}

### Leia mais

- "[Sobre SSH](/articles/about-ssh)"
- "[Trabalhar com frases secretas da chave SSH](/articles/working-with-ssh-key-passphrases)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
