---
title: Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen
intro: 'Wenn Du geprüft hast, ob SSH-Schlüssel vorhanden sind, kannst Du einen neuen SSH-Schlüssel für die Authentifizierung erzeugen und ihn zum SSH-Agenten hinzufügen.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-the-ssh-agent/
  - /articles/generating-a-new-ssh-key/
  - /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Wenn Du noch keinen SSH-Schlüssel besitzt, musst Du [einen neuen SSH-Schlüssel erzeugen](#generating-a-new-ssh-key). Wenn Du unsicher bist, ob Du bereits einen SSH-Schlüssel besitzt, suche nach [vorhandenen Schlüssel](/articles/checking-for-existing-ssh-keys).

Wenn Du bei der Verwendung Deines SSH-Schlüssels Deine Passphrase nicht jedes mal erneut eingeben möchtest, kannst Du [den Schlüssel zum SSH-Agenten hinzufügen](#adding-your-ssh-key-to-the-ssh-agent), der Deine SSH-Schlüssel verwaltet und Deine Passphrase speichert.

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

4. Gib bei der Eingabeaufforderung eine sichere Passphrase ein. Weitere Informationen findest Du unter „[SSH-Schlüssel-Passphrasen verwenden](/articles/working-with-ssh-key-passphrases)“.
  ```shell
  > Enter passphrase (empty for no passphrase): <em>[Type a passphrase]</em>
  > Enter same passphrase again: <em>[Type passphrase again]</em>
  ```

### Deinen SSH-Schlüssel zum SSH-Agenten hinzufügen

Bevor Du einen neuen SSH-Schlüssel zum SSH-Agenten für die Verwaltung Deiner Schlüssel hinzufügst, musst Du [überprüft haben, ob bereits SSH-Schlüssel vorhanden sind](/articles/checking-for-existing-ssh-keys), und [einen neuen SSH-Schlüssel erzeugt haben](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key). <span class="platform-mac">Wenn Du Deinen SSH-Schlüssel zum Agenten hinzufügst, verwende den standardmäßigen macOS-Befehl 'ssh-add‘ und nicht eine Anwendung, die von [macports](https://www.macports.org/), [homebrew](http://brew.sh/) oder einer anderen externen Quelle installiert wurde.</span>

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

    * Open your `~/.ssh/config` file, then modify the file, replacing `~/.ssh/id_ed25519` if you are not using the default location and name for your `id_ed25519` key.

      ```
      Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_ed25519
      ```

     {% note %}

     **Note:** If you chose not to add a passphrase to your key, you should omit the `UseKeychain` line.

     {% endnote %}

3. Fügen Sie Ihren privaten SSH-Schlüssel zu ssh-agent hinzu, und speichern Sie Ihre Passphrase in der Keychain. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   ```shell
   $ ssh-add -K ~/.ssh/id_ed25519
  ```
  {% note %}

  **Hinweis:** Die Option `-K` ist die Standardversion von `ssh-add` von Apple, bei der die Passphrase für das Hinzufügen eines SSH-Schlüssels zum SSH-Agenten in Deiner Keychain gespeichert wird. If you chose not to add a passphrase to your key, run the command without the `-K` option.

  Wenn Sie die Standardversion von Apple nicht installiert haben, tritt möglicherweise ein Fehler auf. Weitere Informationen zum Beheben dieses Fehlers finden Sie unter [Fehler: „ssh-add: illegal option -- K“](/articles/error-ssh-add-illegal-option-k)“.

  {% endnote %}

4. [Fügen Sie den SSH-Schlüssel zu Ihrem GitHub-Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

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

3. [Fügen Sie den SSH-Schlüssel zu Ihrem GitHub-Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

{% endwindows %}

{% linux %}

1. {% data reusables.command_line.start_ssh_agent %}

2. Fügen Sie Ihren privaten SSH-Schlüssel zu ssh-agent hinzu. {% data reusables.ssh.add-ssh-key-to-ssh-agent %}
   {% data reusables.ssh.add-ssh-key-to-ssh-agent-commandline %}

3. [Fügen Sie den SSH-Schlüssel zu Ihrem GitHub-Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

{% endlinux %}

### Weiterführende Informationen

- „[Informationen zu SSH](/articles/about-ssh)“
- „[Mit SSH-Schlüssel-Passphrasen arbeiten](/articles/working-with-ssh-key-passphrases)“
{%- if currentVersion == "free-pro-team@latest" %}
- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{%- endif %}
