---
title: 'Fehler: „Permission denied (publickey)“ (Berechtigung verweigert: öffentlicher Schlüssel)'
intro: 'Die Fehlermeldung „Permission denied“ (Berechtigung verweigert) bedeutet, dass der Server Deine Verbindung abgelehnt hat. Dafür kann es verschiedene Gründe geben. Die häufigsten werden nachfolgend erläutert.'
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

### Kann ich den Befehl `sudo` bei Git verwenden?

Du solltest den Befehl `sudo` nicht bei Git verwenden. Wenn Du `sudo` aus einem *sehr guten Grund* verwenden musst, stelle sicher, dass Du ihn bei jedem Befehl verwendest (wahrscheinlich ist es besser, `su` zu verwenden, um an dieser Stelle eine Shell als Root zu bekommen). Wenn Du [SSH-Schlüssel](/articles/generating-an-ssh-key) ohne `sudo` erzeugst und dann versuchst, einen Befehl wie `sudo git push` auszuführen, verwendest Du andere Schlüssel als die von Dir erzeugten.

### Überprüfen, ob Du eine Verbindung mit dem richtigen Server herstellst

Tippen ist fehleranfällig, das wissen wir alle. Achte darauf, was Du eingibst. Du kannst keine Verbindung mit „githib.com“ oder „guthub.com“ herstellen. In einigen Fällen kann ein Unternehmensnetzwerk auch Probleme bei der Auflösung des DNS-Eintrags verursachen.

Um sicherzustellen, dass Du die Verbindung mit der richtigen Domäne herstellst, kannst Du den folgenden Befehl eingeben:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

Die Verbindung sollte über Port 22 hergestellt werden{% if currentVersion == "free-pro-team@latest" %}, es sei denn, Du überschreibst die Einstellungen, um [SSH über HTTPS](/articles/using-ssh-over-the-https-port) zu verwenden{% endif %}.

### Immer den „git“-Benutzer verwenden

Alle Verbindungen, auch die zu Remote-URLs, müssen als „git“-Benutzer hergestellt werden. Wenn Sie versuchen, die Verbindung unter Ihrem {% data variables.product.product_name %}-Benutzernamen herzustellen, tritt ein Fehler auf:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Wenn Ihre Verbindung fehlgeschlagen ist und Sie eine Remote-URL mit Ihrem {% data variables.product.product_name %}-Benutzernamen verwenden, können Sie [die Remote-URL für die Verwendung des „git“-Benutzers ändern](/github/getting-started-with-github/managing-remote-repositories).

Du solltest Deine Verbindung mit der folgenden Eingabe überprüfen:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

### Stelle sicher, dass Du einen Schlüssel hast, der verwendet wird

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  # starte den ssh-agent im Hintergrund
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  # starte den ssh-agent im Hintergrund
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  # starte den ssh-agent im Hintergrund
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}


{% endlinux %}

The `ssh-add` command *should* print out a long string of numbers and letters. If it does not print anything, you will need to [generate a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and associate it with {% data variables.product.product_name %}.

{% tip %}

**Tip**: On most systems the default private keys (`~/.ssh/id_rsa` and `~/.ssh/identity`) are automatically added to the SSH authentication agent. You shouldn't need to run `ssh-add path/to/key` unless you override the file name when you generate a key.

{% endtip %}

#### Getting more details

You can also check that the key is being used by trying to connect to `git@{% data variables.command_line.backticks %}`:

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

In diesem Beispiel hatten wir keine Schlüssel, die SSH verwenden konnte. Die „-1“ am Ende der „identitiy file“-Zeilen bedeutet, dass SSH keine entsprechende Datei finden konnte. Weiter unten weisen auch die „Trying private key“-Zeilen darauf hin, dass keine Datei gefunden wurde. Wenn eine Datei vorhanden wäre, würde dort „1“ bzw. „Offering public key“ stehen:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

### Überprüfen, ob der öffentliche Schlüssel an Dein Konto angehängt ist

Du musst Deinen öffentlichen Schlüssel für {% data variables.product.product_name %} bereitstellen, um eine sichere Verbindung herzustellen.

{% mac %}

1. Öffne das Terminal.
2. Starten Sie den SSH-Agenten im Hintergrund.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare the list of SSH keys with the output from the `ssh-add` command.
![SSH key listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Öffnen Sie die Befehlszeile.
2. Starten Sie den SSH-Agenten im Hintergrund.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Compare the list of SSH keys with the output from the `ssh-add` command.
![SSH key listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Öffne das Terminal.
2. Starten Sie den SSH-Agenten im Hintergrund.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Suchen und notieren Sie Ihren öffentlichen Schlüssel-Fingerprint. Bei Verwendung von OpenSSH 6.7 oder älter:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. Vergleichen Sie die Liste der SSH-Schlüssel mit der Ausgabe des Befehls `ssh-add`. ![SSH-Schlüssel-Auflistung in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Wenn Du Deinen öffentlichen Schlüssel in {% data variables.product.product_name %} nicht siehst, musst Du [Deinen SSH-Schlüssel zu {% data variables.product.product_name %} hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account), um ihn mit Deinem Computer zu verknüpfen.

{% warning %}

**Warnung:** Wenn Du einen SSH-Schlüssel siehst, der Dir auf {% data variables.product.product_name %} unbekannt ist, solltest Du ihn sofort löschen und Dich für weitere Hilfe an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein. Weitere Informationen finden Sie unter „[SSH-Schlüssel überprüfen](/articles/reviewing-your-ssh-keys)“.

{% endwarning %}
