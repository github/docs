---
title: 'Fehler: „Permission denied (publickey)“ (Berechtigung verweigert: öffentlicher Schlüssel)'
intro: 'Die Fehlermeldung „Permission denied“ (Berechtigung verweigert) bedeutet, dass der Server deine Verbindung abgelehnt hat. Dafür kann es verschiedene Gründe geben. Die häufigsten werden nachfolgend erläutert.'
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: fdf69ae9777127851e1e0a1e85b5907ebd4a3557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085880'
---
## Sollten der `sudo`-Befehl oder erhöhte Rechte mit Git verwendet werden?

Du solltest den `sudo`-Befehl oder erhöhte Rechte (z. B. Administratorberechtigungen) nicht mit Git verwenden. Wenn du einen *sehr guten Grund* für die Nutzung von `sudo` hast, solltest du sicherstellen, dass du es mit jedem Befehl verwendest (es wird empfohlen, einfach `su` zu verwenden, um eine Shell als Stamm zu verwenden). Wenn du [SSH-Schlüssel ohne `sudo` generierst](/articles/generating-an-ssh-key) und dann versuchst, einen Befehl wie `sudo git push` auszuführen, verwende nicht die gleichen Schlüssel, die du generiert hast.

## Überprüfen, ob du eine Verbindung mit dem richtigen Server herstellst

Tippen ist fehleranfällig, das wissen wir alle. Achte darauf, was du eingibst. Du kannst keine Verbindung mit „githib.com“ oder „guthub.com“ herstellen. In einigen Fällen kann ein Unternehmensnetzwerk auch Probleme bei der Auflösung des DNS-Eintrags verursachen.

Um sicherzustellen, dass du die Verbindung mit der richtigen Domäne herstellst, kannst du den folgenden Befehl eingeben:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

Die Verbindung sollte über Port 22{% ifversion fpt or ghec %} hergestellt werden, es sei denn, du überschreibst Einstellungen, um [SSH über HTTPS](/articles/using-ssh-over-the-https-port) zu verwenden{% endif %}.

## Immer den „git“-Benutzer verwenden

Alle Verbindungen, auch die zu Remote-URLs, müssen als „git“-Benutzer hergestellt werden. Wenn du versuchst, die Verbindung unter deinem {% data variables.product.product_name %}-Benutzernamen herzustellen, tritt ein Fehler auf:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
Wenn deine Verbindung fehlgeschlagen ist und du eine Remote-URL mit deinem {% data variables.product.product_name %}-Benutzernamen verwendest, kannst du die [Remote-URL ändern, um den „git“-Benutzer zu verwendest](/github/getting-started-with-github/managing-remote-repositories).

Du solltest deine Verbindung mit der folgenden Eingabe überprüfen:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

## Stelle sicher, dass du einen Schlüssel hast, der verwendet wird

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfe, dass du einen privaten Schlüssel erzeugt und in SSH geladen haben. 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. Überprüfe, dass du einen privaten Schlüssel erzeugt und in SSH geladen haben. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Überprüfe, dass du einen privaten Schlüssel erzeugt und in SSH geladen haben. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

Der `ssh-add`-Befehl *sollte* eine lange Zeichenfolge von Zahlen und Buchstaben drucken. Wenn nichts gedruckt wird, musst du einen [neuen SSH-Schlüssel generieren](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) und ihn mit {% data variables.product.product_name %} verknüpfen.

{% tip %}

**Tipp**: In den meisten Systemen werden die privaten Standardschlüssel (`~/.ssh/id_rsa` und `~/.ssh/identity`) dem SSH-Authentifizierungs-Agent automatisch hinzugefügt. Die Ausführung von `ssh-add path/to/key` sollte nicht notwendig sein, es sei denn, du überschreibst den Dateinamen beim Generieren eines Schlüssels.

{% endtip %}

### Weitere Informationen abrufen

Du kannst auch überprüfen, ob der Schlüssel verwendet wird, indem du versuchst, eine Verbindung mit `git@{% data variables.command_line.backticks %}` herzustellen:

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

## Überprüfen, ob der öffentliche Schlüssel an dein Konto angehängt ist

Du musst deinen öffentlichen Schlüssel für {% data variables.product.product_name %} bereitstellen, um eine sichere Verbindung herzustellen.

{% mac %}

1. Öffne das Terminal.
2. Starte den SSH-Agenten im Hintergrund.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Vergleiche die Liste der SSH-Schlüssel mithilfe des `ssh-add`-Befehls mit der Ausgabe.
![SSH-Schlüssel-Listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. Öffne die Befehlszeile.
2. Starte den SSH-Agenten im Hintergrund.
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Vergleiche die Liste der SSH-Schlüssel mithilfe des `ssh-add`-Befehls mit der Ausgabe.
![SSH-Schlüssel-Listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. Öffne das Terminal.
2. Starte den SSH-Agenten im Hintergrund.
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. Suche und notiere deinen öffentlichen Schlüssel-Fingerprint. Bei Verwendung von OpenSSH 6.7 oder älter:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Bei Verwendung von OpenSSH 6.8 oder neuer:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. Vergleiche die Liste der SSH-Schlüssel mithilfe des `ssh-add`-Befehls mit der Ausgabe.
![SSH-Schlüssel-Listing in {% data variables.product.product_name %}](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

Wenn kein öffentlicher Schlüssel in {% data variables.product.product_name %} angezeigt wird, musst du [Deinen SSH-Schlüssel zu {% data variables.product.product_name %} hinzufügen](/articles/adding-a-new-ssh-key-to-your-github-account), um ihn deinem Computer zuzuordnen.

{% warning %}

**Warnung**: Wenn dir auf {% data variables.product.product_name %} ein unbekannter SSH-Schlüssel angezeigt wird, solltest du ihn sofort löschen und sich an den {% data variables.contact.contact_support %} wenden. Ein Dir unbekannter öffentlicher Schlüssel kann ein Hinweis auf ein Sicherheitsproblem sein. Weitere Informationen findest du unter [Überprüfen deiner SSH-Schlüssel](/articles/reviewing-your-ssh-keys).

{% endwarning %}
