---
title: 'Fehler: „Permission denied (publickey)“ (Berechtigung verweigert: öffentlicher Schlüssel)'
intro: 'Die Fehlermeldung „Permission denied“ (Berechtigung verweigert) bedeutet, dass der Server Deine Verbindung abgelehnt hat. Dafür kann es verschiedene Gründe geben. Die häufigsten werden nachfolgend erläutert.'
redirect_from:
  - /articles/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Kann ich den Befehl `sudo` bei Git verwenden?

Du solltest den Befehl `sudo` nicht bei Git verwenden. Wenn Du `sudo` aus einem *sehr guten Grund* verwenden musst, stelle sicher, dass Du ihn bei jedem Befehl verwendest (wahrscheinlich ist es besser, `su` zu verwenden, um an dieser Stelle eine Shell als Root zu bekommen). Wenn Du [SSH-Schlüssel](/articles/generating-an-ssh-key) ohne `sudo` erzeugst und dann versuchst, einen Befehl wie `sudo git push` auszuführen, verwendest Du andere Schlüssel als die von Dir erzeugten.

### Überprüfen, ob Du eine Verbindung mit dem richtigen Server herstellst

Tippen ist fehleranfällig, das wissen wir alle. Achte darauf, was Du eingibst. Du kannst keine Verbindung mit „githib.com“ oder „guthub.com“ herstellen. In einigen Fällen kann ein Unternehmensnetzwerk auch Probleme bei der Auflösung des DNS-Eintrags verursachen.

Um sicherzustellen, dass Du die Verbindung mit der richtigen Domäne herstellst, kannst Du den folgenden Befehl eingeben:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} [IP ADDRESS] port 22.
```

Die Verbindung sollte über Port 22 hergestellt werden{% if currentVersion == "free-pro-team@latest" %}, es sei denn, Du überschreibst die Einstellungen, um [SSH über HTTPS](/articles/using-ssh-over-the-https-port) zu verwenden{% endif %}.

### Immer den „git“-Benutzer verwenden

Alle Verbindungen, auch die zu Remote-URLs, müssen als „git“-Benutzer hergestellt werden. Wenn Du versuchst, die Verbindung unter Deinem {% data variables.product.product_name %}-Benutzernamen herzustellen, tritt ein Fehler auf:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Wenn Deine Verbindung fehlgeschlagen ist und Du eine Remote-URL mit Deinem {% data variables.product.product_name %}-Benutzernamen verwendest, kannst Du [die Remote-URL für die Verwendung des „git“-Benutzers ändern](/articles/changing-a-remote-s-url/).

Du solltest Deine Verbindung mit der folgenden Eingabe überprüfen:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

### Stelle sicher, dass Du einen Schlüssel hast, der verwendet wird

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. Bei Verwendung von OpenSSH 6.7 oder älter:
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

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. Bei Verwendung von OpenSSH 6.7 oder älter:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfen Sie, dass Sie einen privaten Schlüssel erzeugt und in SSH geladen haben. Bei Verwendung von OpenSSH 6.7 oder älter:
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

{% endlinux %}

Der Befehl `ssh-add` *sollte* eine lange Zeichenfolge an Ziffern und Buchstaben ausgeben. Wenn der Befehl nichts ausgibt, musst Du [einen neuen SSH-Schlüssel erzeugen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) und ihn mit {% data variables.product.product_name %} verknüpfen.

{% tip %}

**Tipp**: Auf den meisten Systemen werden die standardmäßigen privaten Schlüssel (`~/.ssh/id_rsa`{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}, `~/.ssh/id_dsa`{% endif %} und `~/.ssh/identity`) automatisch zum SSH-Authentifizierungs-Agenten hinzugefügt. Normalerweise musst Du den Befehl `ssh-add path/to/key` nicht ausführen, es sei denn, Du überschreibst den Dateinamen, wenn Du einen Schlüssel erzeugst.

{% endtip %}

#### Weitere Informationen abrufen

Um zu prüfen, ob der Schlüssel verwendet wird, kannst Du auch versuchen, eine Verbindung zu `git@{% data variables.command_line.backticks %}` herzustellen:

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

In diesem Beispiel hatten wir keine Schlüssel, die SSH verwenden konnte. Die „-1“ am Ende der „identitiy file“-Zeilen bedeutet, dass SSH keine entsprechende Datei finden konnte. Weiter unten weisen auch die „Trying private key“-Zeilen darauf hin, dass keine Datei gefunden wurde. Wenn eine Datei vorhanden wäre, würde dort „1“ respektive „Offering public key“ (öffentlicher Schlüssel angeboten) stehen:

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

{% endmac %}

{% windows %}

1. Öffne die Befehlszeile.
2. Starten Sie den SSH-Agenten im Hintergrund.
  ```shell
  $ ssh-agent -s
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

**Warnung:** Wenn Du einen SSH-Schlüssel siehst, der Dir auf {% data variables.product.product_name %} unbekannt ist, solltest Du ihn sofort löschen und Dich für weitere Hilfe an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein. Weitere Informationen findest Du unter „[SSH-Schlüssel überprüfen](/articles/reviewing-your-ssh-keys).“

{% endwarning %}
