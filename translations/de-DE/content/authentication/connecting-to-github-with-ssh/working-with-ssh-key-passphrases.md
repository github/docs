---
title: SSH-Schlüssel-Passphrasen verwenden
intro: 'Du kannst deine SSH-Schlüssel schützen und einen Authentifizierungsagenten konfigurieren, damit du beim Verwenden deiner SSH-Schlüssel nicht jedes Mal deine Passphrase neu eingeben musst.'
redirect_from:
  - /ssh-key-passphrases
  - /working-with-key-passphrases
  - /articles/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/working-with-ssh-key-passphrases
  - /github/authenticating-to-github/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key passphrases
ms.openlocfilehash: 5ddacfa052b866fe1cbd601caa8a1ff9ab6934fd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409115'
---
## Informationen über Passphrasen für SSH-Schlüssel

Wenn Angreifer*innen Zugriff auf deinen Computer erlangen, können sie mit SSH-Schlüsseln zudem auf jedes System zugreifen, das diese Schlüssel verwendet. Als zusätzliche Sicherheitsebene kannst du deinem SSH-Schlüssel eine Passphrase beifügen. Um die Passphrase nicht bei jeder Verbindungsherstellung eingeben zu müssen, kannst du deine Passphrase im SSH-Agent sicher speichern.

## Passphrase hinzufügen oder ändern

Durch Eingabe des folgenden Befehls kannst du die Passphrase für einen vorhandenen privaten Schlüssel ändern, ohne das Schlüsselpaar erneut zu genieren:

```shell
$ ssh-keygen -p -f ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Wenn dein Schlüssel bereits eine Passphrase aufweist, wirst du zu deren Eingabe aufgefordert, bevor du zu einer neuen Passphrase wechseln kannst.

{% windows %}

## Automatisches Starten von `ssh-agent` in Git für Windows

`ssh-agent` kann automatisch ausgeführt werden, wenn du eine Bash- oder Git-Shell öffnest. Kopiere die folgenden Zeilen, und füge sie in der Git-Shell in die Datei `~/.profile` oder `~/.bashrc` ein:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

Falls dein privater Schlüssel nicht an einem der Standardspeicherorte (beispielsweise `~/.ssh/id_rsa`) gespeichert ist, musst du deinem SSH-Authentifizierungs-Agent mitteilen, wo sich der Schlüssel befindet. Gib `ssh-add ~/path/to/my_key` ein, um deinen Schlüssel dem SSH-Agent hinzuzufügen. Weitere Informationen findest du unter [Einen neuen SSH-Schlüssel generieren und zu ssh-agent hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

{% tip %}

**Tipp:** Falls `ssh-agent` deinen Schlüssel nur für einen bestimmten Zeitraum speichern soll, kannst du `ssh-add -t <seconds>` ausführen, um dies zu konfigurieren.

{% endtip %}

Bei der erstmaligen Ausführung von „Git Bash“ wirst du nun zur Eingabe deiner Passphrase aufgefordert:

```shell
> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/<em>you</em>/.ssh/id_rsa:
> Identity added: /c/Users/<em>you</em>/.ssh/id_rsa (/c/Users/<em>you</em>/.ssh/id_rsa)
> Welcome to Git (version <em>1.6.0.2-preview20080923</em>)
>
> Run 'git help git' to display the help index.
> Run 'git help <command>' to display help for specific commands.
```

Der `ssh-agent`-Prozess wird fortgesetzt, bis du dich abmeldest, deinen Computer herunterfährst oder den Prozess beendest.

{% endwindows %}

{% mac %}

## Deine Passphrase in Keychain speichern

Von Mac OS X Leopard bis einschließlich OS X El Capitan werden folgende Standarddateien für private Schlüssel automatisch verarbeitet:

- *.ssh/id_rsa*
- *.ssh/identity*

Bei der ersten Nutzung deines Schlüssels wirst du zur Eingabe deiner Passphrase aufgefordert. Falls du die Passphrase mit deiner Schlüsselkette speicherst, musst du sie nicht erneut eingeben.

Andernfalls kannst du deine Passphrase in der Schlüsselkette speichern, wenn du deinen Schlüssel zum SSH-Agenten hinzufügst. Weitere Informationen findest du unter [Deinen SSH-Schlüssel zum SSH-Agent hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% endmac %}
