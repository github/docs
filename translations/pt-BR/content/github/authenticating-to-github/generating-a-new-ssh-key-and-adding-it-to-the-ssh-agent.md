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
---

Se você ainda não tem uma chave SSH, você deve [gerar uma nova chave SSH](#generating-a-new-ssh-key). Caso não tenha certeza de que já tem uma chave SSH, procure por [chaves existentes](/articles/checking-for-existing-ssh-keys).

Caso não queira reinserir sua frase secreta cada vez que usa a chave SSH, é possível [adicionar sua chave ao SSH agent](#adding-your-ssh-key-to-the-ssh-agent), que poderá gerenciar suas chaves SSH e lembrar sua frase secreta.

### Gerar uma nova chave SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cole o texto abaixo, substituindo o endereço de e-mail pelo seu {% data variables.product.product_name %}.
  ```shell
  $ ssh-keygen -t rsa -b 4096 -C "<em>your_email@example.com</em>"
  ```
  O comando criará uma nova chave SSH, usando o e-mail fornecido como uma etiqueta.
  ```shell
  > Gerar par de chaves rsa pública/privada.
  ```
3. Quando aparecer a solicitação "Enter a file in which to save the key" (Insira um arquivo no qual salvar a chave), presssione Enter. O local padrão do arquivo será aceito.

  {% mac %}

  ```shell
  > Insira um arquivo no qual salvar a chave (/Users/<em>you</em>/.ssh/id_rsa): <em>[Press enter]</em>
  ```

  {% endmac %}

  {% windows %}

  ```shell
  > Insira um arquivo no qual salvar a chave (/c/Users/<em>you</em>/.ssh/id_rsa):<em>[Press enter]</em>
  ```

  {% endwindows %}

  {% linux %}

  ```shell
  > Insira um arquivo no qual salvar a chave (/home/<em>you</em>/.ssh/id_rsa): <em>[Press enter]</em>
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

    * Abra seu arquivo `~/.ssh/config` e, em seguida, modifique-o, substituindo `~/. sh/id_rsa`, caso você não esteja usando o local e o nome padrão para sua chave `id_rsa`.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_rsa
      ```

3. Adicione sua chave SSH privada ao ssh-agent e armazene sua frase secreta no keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_rsa
  ```
  {% note %}

  **Observação:** a opção `-K` está presente na versão padrão da Apple do `ssh-add` e armazena a frase secreta no keychain quando você adiciona uma chave SSH ao ssh-agent.

  Caso não tenha a versão standard da Apple instalada, você poderá receber uma mensagem de erro. Para obter mais informações sobre como resolver esse erro, consulte "[Erro: ssh-add: opção ilícita -- K](/articles/error-ssh-add-illegal-option-k)".

  {% endnote %}

4. [Adicione a chave SSH à sua conta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account).

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Certifique-se de que o ssh-agent está em execução. Você pode usar as instruções "Lançamento automático do ssh-agent" em "[Trabalhando com palavras-chave SSH](/articles/working-with-ssh-key-passphrases)" ou iniciá-lo manualmente:
  ```shell
  # inicie o ssh-agent em segundo plano
  $ eval $(ssh-agent -s)
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
