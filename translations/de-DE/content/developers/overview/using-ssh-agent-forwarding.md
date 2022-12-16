---
title: Konfigurieren der SSH-Agent-Weiterleitung
intro: 'Um die Bereitstellung auf einem Server zu vereinfachen, kannst du die SSH-Agent-Weiterleitung weiterleiten, um lokale SSH-Schlüssel sicher zu verwenden.'
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSH agent forwarding
ms.openlocfilehash: ca827e1fc70288acc2da5c3a28ecfd71ece4a504
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996257'
---
Mithilfe der SSH-Agent-Weiterleitung kann die Bereitstellung auf einem Server vereinfacht werden.  Sie ermöglicht es dir, deine lokalen SSH-Schlüssel zu verwenden, anstatt Schlüssel (ohne Passphrasen!) auf deinem Server zu belassen.

Wenn du bereits einen SSH-Schlüssel für die Interaktion mit {% data variables.product.product_name %} eingerichtet hast, kennst du dich wahrscheinlich mit `ssh-agent` aus. Dieses Programm wird im Hintergrund ausgeführt und sorgt dafür, dass dein Schlüssel im Arbeitsspeicher geladen bleibt. Auf diese Weise musst du deine Passphrase bei Verwendung des Schlüssels nicht jedes Mal erneut eingeben. Besonders nützlich an dem Programm ist, dass du Servern wahlweise Zugriff auf deine lokale `ssh-agent`-Instanz erteilen kannst, als würde die Instanz bereits auf dem Server ausgeführt wurden. Dies ist so, als würdest du jemanden bitten, seinen oder ihren Computer mit seinem oder ihrem Kennwort zu entsperren.

Eine ausführlichere Erläuterung der SSH-Agent-Weiterleitung findest du in dem [Leitfaden mit IT-Tipps von Steve Friedl][tech-tips].

## Einrichten der SSH-Agent-Weiterleitung

Stelle sicher, dass dein eigener SSH-Schlüssel eingerichtet ist und funktioniert. Falls du noch keine SSH-Schlüssel generiert hast, kannst du dies mithilfe [unseres Leitfadens][generating-keys] nachholen.

Du kannst die Funktionsfähigkeit deines lokalen Schlüssels testen, indem du `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` in das Terminal eingibst:

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

Das ist ein guter Ausgangspunkt. Nun werden wir SSH einrichten, um die Agent-Weiterleitung an deinen Server zu ermöglichen.

1. Öffne die Datei in `~/.ssh/config` mithilfe deines bevorzugten Text-Editors. Wenn diese Datei nicht vorhanden ist, kannst du sie durch Eingabe von `touch ~/.ssh/config` im Terminal erstellen.

2. Gib den folgenden Text in die Datei ein, indem du `example.com` durch den Domänennamen oder die IP-Adresse deines Servers ersetzt:

        Host example.com
          ForwardAgent yes

{% warning %}

**Warnung:** Möglicherweise planst du, einen Platzhalter wie `Host *` zu verwenden, um diese Einstellung auf alle SSH-Verbindungen anzuwenden. Das ist jedoch nicht empfehlenswert, da du deine lokalen SSH-Schlüssel an *jeden* Server weitergeben würdest, zu dem du eine SSH-Verbindung herstellst. Diese Server hätten zwar keinen direkten Zugriff auf die Schlüssel, könnten diese jedoch verwenden, um sich *als du* auszugeben, während die Verbindung besteht. **Du solltest nur Server hinzufügen, denen du vertraust und die du mit der Agent-Weiterleitung verwenden möchtest.**

{% endwarning %}

## Testen der SSH-Agent-Weiterleitung

Um die Funktionsfähigkeit der Agent-Weiterleitung mit deinem Server zu testen, kannst du eine SSH-Verbindung zu deinem Server herstellen und `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` erneut ausführen.  Wenn alles gut funktioniert, erhältst du die gleiche Aufforderung, die du auch lokal erhalten hast.

Wenn du nicht sicher bist, ob dein lokaler Schlüssel verwendet wird, kannst du auch die Variable `SSH_AUTH_SOCK` auf deinem Server überprüfen:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

Wenn die Variable nicht festgelegt ist, bedeutet dies, dass die Agent-Weiterleitung nicht funktioniert:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## Problembehandlung der SSH-Agent-Weiterleitung

Dieser Abschnitt erhält einige Hinweise, auf die du bei der Problembehandlung der SSH-Agent-Weiterleitung achten kannst.

### Auschecken von Code musst du eine SSH-URL verwenden

Die SSH-Weiterleitung funktioniert nur mit SSH-URLs, nicht HTTP(s)-URLs. Überprüfe die Datei `.git/config` auf deinem Server, und stelle sicher, dass die URL ein SSH-Format wie das folgende aufweist:

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### Deine SSH-Schlüssel müssen lokal funktionieren

Bevor deine Schlüssel mit der Agent-Weiterleitung verwendet werden können, müssen sie zunächst lokal funktionieren. [Unser Leitfaden zum Generieren von SSH-Schlüsseln][generating-keys] kann dir helfen, deine SSH-Schlüssel lokal einzurichten.

### Dein System muss die SSH-Agent-Weiterleitung zulassen

In manchen Fällen lassen Systemkonfigurationen die SSH-Agent-Weiterleitung nicht zu. Indem du den folgenden Befehl im Terminal eingibst, kannst du überprüfen, ob eine Systemkonfigurationsdatei verwendet wird:

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

Im obigen Beispiel wird die Datei `~/.ssh/config` zuerst geladen, und dann wird `/etc/ssh_config` gelesen.  Wir können der folgenden Befehle überprüfen, ob diese Datei unsere Optionen überschreibt:

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

In diesem Beispiel enthält die Datei `/etc/ssh_config` explizit die Angabe `ForwardAgent no`. Hierbei handelt es sich um eine Möglichkeit ist, die Agent-Weiterleitung zu blockieren. Wenn du diese Zeile aus der Datei löschst, sollte die Agent-Weiterleitung wieder funktionieren.

### Dein Server muss die SSH-Agent-Weiterleitung für eingehende Verbindungen zulassen

Die Agent-Weiterleitung kann auch auf deinem Server blockiert werden. Du kannst überprüfen, ob die Agent-Weiterleitung zulässig ist, indem du eine SSH-Verbindung zum Server herstellst und `sshd_config` ausführst. Die Ausgabe dieses Befehls sollte angeben, dass `AllowAgentForwarding` festgelegt ist.

### Deine lokale `ssh-agent`-Instanz muss ausgeführt werden

Unter den meisten Computern startet das Betriebssystem `ssh-agent` automatisch für dich.  Unter Windows musst du den Start jedoch manuell ausführen. Wir haben einen [Leitfaden zum Starten von `ssh-agent` beim Öffnen von Git Bash][autolaunch-ssh-agent] verfasst.

Um zu überprüfen, ob `ssh-agent` auf deinem Computer ausgeführt wird, gib den folgenden Befehl in das Terminal ein:

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### Dein Schlüssel muss für `ssh-agent` verfügbar sein.

Du kannst überprüfen, ob der Schlüssel für `ssh-agent` sichtbar ist, indem du den folgenden Befehl ausführst:

```shell
ssh-add -L
```

Wenn der Befehl angibt, dass keine Identität verfügbar ist, musst du deinen Schlüssel hinzufügen:

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

Unter macOS „vergisst“ `ssh-agent` diesen Schlüssel, sobald das Programm durch einen Neustart neu gestartet wird. Du kannst deine SSH-Schlüssel jedoch mithilfe des folgenden Befehls in Keychain importieren:

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
