---
title: Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen
intro: 'Wenn Du geprüft hast, ob SSH-Schlüssel vorhanden sind, kannst Du einen neuen SSH-Schlüssel für die Authentifizierung erzeugen und ihn zum SSH-Agenten hinzufügen.'
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
### About SSH key generation

If you don't already have an SSH key, you must generate a new SSH key to use for authentication. If you're unsure whether you already have an SSH key, you can check for existing keys. For more information, see "[Checking for existing SSH keys](/github/authenticating-to-github/checking-for-existing-ssh-keys)."

{% if currentVersion == "free-pro-team@latest" %}

If you want to use a hardware security key to authenticate to {% data variables.product.product_name %}, you must generate a new SSH key for your hardware security key. You must connect your hardware security key to your computer when you authenticate with the key pair. For more information, see the [OpenSSH 8.2 release notes](https://www.openssh.com/txt/release-8.2).

{% endif %}
If you don't want to reenter your passphrase every time you use your SSH key, you can add your key to the SSH agent, which manages your SSH keys and remembers your passphrase.

### Einen neuen SSH-Schlüssel erzeugen

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Füge den folgenden Text ein, und ersetzte dabei Deine {% data variables.product.product_name %}-E-Mail-Adresse.
  ```shell
  $ ssh-keygen -t ed25519 -C "<em>your_email@example.com</em>"
  ```
  {% note %}

  **Note:** If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
  ```shell
   $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  {% endnote %}
  Dadurch wird ein neuer SSH-Schlüssel erzeugt und die angegebene E-Mail-Adresse als Kennzeichnung verwendet.
  ```shell
  > Generating public/private ed25519 key pair.
  ```
3. Wenn die Aufforderung „Enter a file in which to save the key“ (Datei angeben, in der der Schlüssel gespeichert werden soll) angezeigt wird, drücke die Eingabetaste. Dadurch wird der Standard-Speicherort akzeptiert.

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

4. Gib bei der Eingabeaufforderung eine sichere Passphrase ein. For more information, see ["Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)."
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Deinen SSH-Schlüssel zum SSH-Agenten hinzufügen

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. <span class="platform-mac">Wenn Du Deinen SSH-Schlüssel zum Agenten hinzufügst, verwende den standardmäßigen macOS-Befehl 'ssh-add‘ und nicht eine Anwendung, die von [macports](https://www.macports.org/), [homebrew](http://brew.sh/) oder einer anderen externen Quelle installiert wurde.</span>

{% mac %}

1. {% data reusables.command_line.start_ssh_agent %}

2. Wenn Sie macOS Sierra 10.12.2 oder höher verwenden, müssen Sie die Datei `~/.ssh/config` bearbeiten, damit automatisch Schlüssel in den ssh-agent geladen und Passphrasen in der Keychain gespeichert werden.

    * Überprüfe zunächst, ob Deine `.ssh/config`-Datei am Standardspeicherort vorhanden ist.

      ```shell
      $ open ~/.ssh/config
      > The file /Users/<em>you</em>/.ssh/config does not exist.
      ```

    * Wenn die Datei nicht existiert, musst Du sie erstellen.

      ```shell
      $ touch ~/.ssh/config
      ```

    * Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Note:** If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.

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

3. Fügen Sie Ihren privaten SSH-Schlüssel zu ssh-agent hinzu, und speichern Sie Ihre Passphrase in der Keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Hinweis:** Die Option `-K` ist die Standardversion von `ssh-add` von Apple, bei der die Passphrase für das Hinzufügen eines SSH-Schlüssels zum SSH-Agenten in Deiner Keychain gespeichert wird. If you chose not to add a passphrase to your key, run the command without the `-K` option.

  Wenn Sie die Standardversion von Apple nicht installiert haben, tritt möglicherweise ein Fehler auf. Weitere Informationen zum Beheben dieses Fehlers finden Sie unter [Fehler: „ssh-add: illegal option -- K“](/articles/error-ssh-add-illegal-option-k)“.

  {% endnote %}

4. Add the SSH key to your account on {% data variables.product.product_name %}. For more information, see "[Adding a new SSH key to your {% data variables.product.prodname_dotcom %} account](/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. Stellen Sie sicher, dass ssh-agent ausgeführt wird. You can use the "Auto-launching the ssh-agent" instructions in "[Working with SSH key passphrases](/articles/working-with-ssh-key-passphrases)", or start it manually:
  ```shell
  # start the ssh-agent in the background
  $ eval `ssh-agent -s`
  > Agent pid 59566
  ```

2. Fügen Sie Ihren privaten SSH-Schlüssel zu ssh-agent hinzu. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
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

2. Fügen Sie Ihren privaten SSH-Schlüssel zu ssh-agent hinzu. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
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

### Weiterführende Informationen

- „[Informationen zu SSH](/articles/about-ssh)“
- „[Mit SSH-Schlüssel-Passphrasen arbeiten](/articles/working-with-ssh-key-passphrases)“
{%- if currentVersion == "free-pro-team@latest" %}
- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{%- endif %}
