---
title: SSH-Schlüssel-Passphrasen verwenden
intro: 'Du kannst Deine SSH-Schlüssel schützen und einen Authentifizierungsagenten konfigurieren, damit Du beim Verwenden Deiner SSH-Schlüssel nicht jedes Mal Deine Passphrase neu eingeben musst.'
redirect_from:
  - /ssh-key-passphrases/
  - /working-with-key-passphrases/
  - /articles/working-with-ssh-key-passphrases
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Wenn jemand Zugriff auf Deinen Computer erlangt, kann er mit SSH-Schlüsseln zudem auf jedes System zugreifen, das diese Schlüssel verwendet. Als zusätzliche Sicherheitsebene kannst Du Deinem SSH-Schlüssel eine Passphrase beifügen. Mit `ssh-agent` kannst Du Deine Passphrase sicher speichern, damit Du sie nicht erneut eingeben musst.

### Passphrase hinzufügen oder ändern

Durch Eingabe des folgenden Befehls kannst Du die Passphrase für einen vorhandenen privaten Schlüssel ändern, ohne das Schlüsselpaar erneut zu genieren:

```shell
$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: <em>[Type old passphrase]</em>
> Key has comment '<em>your_email@example.com</em>'
> Enter new passphrase (empty for no passphrase): <em>[Type new passphrase]</em>
> Enter same passphrase again: <em>[Repeat the new passphrase]</em>
> Your identification has been saved with the new passphrase.
```

Wenn Dein Schlüssel bereits eine Passphrase aufweist, wirst Du zu deren Eingabe aufgefordert, bevor Du zu einer neuen Passphrase wechseln kannst.

{% windows %}

### `ssh-agent` auf Git für Windows automatisch starten

You can run `ssh-agent` automatically when you open bash or Git shell. Kopiere die folgenden Zeilen, und füge sie in der Git-Shell in Deine `~/.profile`- oder `~/.bashrc`-Datei ein:

``` bash
env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=Agent wird mit Schluessel ausgeführt; 1=Agent ohne Schluessel; 2=Agent wird nicht ausgefuehrt
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
```

If your private key is not stored in one of the default locations (like `~/.ssh/id_rsa`), you'll need to tell your SSH authentication agent where to find it. Gib `ssh-add ~/path/to/my_key` ein, um dem SSH-Agenten Deinen Schlüssel hinzuzufügen. Weitere Informationen findest Du unter „[Einen neuen SSH-Schlüssel generieren und zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).“

{% tip %}

**Tipp:** Falls Du möchtest, dass `ssh-agent` Deinen Schlüssel nach einem bestimmten Zeitraum vergessen soll, kannst Du dies mit dem Befehl `ssh-add -t <seconds>` konfigurieren.

{% endtip %}

Bei der erstmaligen Ausführung von „Git Bash“ wirst Du nun zur Eingabe Deiner Passphrase aufgefordert:

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

Die Ausführung des `ssh-agent`-Prozesses wird fortgesetzt, bis Du Dich abmeldest, Deinen Computer herunterfährst oder den Prozess beendest.

{% endwindows %}

{% mac %}

### Deine Passphrase in Keychain speichern

On Mac OS X Leopard through OS X El Capitan, these default private key files are handled automatically:

- *.ssh/id_rsa*
- *.ssh/identity*

Bei der ersten Nutzung Deines Schlüssels wirst Du zur Eingabe Deiner Passphrase aufgefordert. Falls Du die Passphrase mit Deiner Schlüsselkette speicherst, musst Du sie nicht erneut eingeben.

Andernfalls kannst Du Deine Passphrase in der Schlüsselkette speichern, wenn Du Deinen Schlüssel zum SSH-Agenten hinzufügst. Weitere Informationen findest Du unter „[Deinen SSH-Schlüssel zum SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).“

{% endmac %}

### Weiterführende Informationen

- „[Informationen zu SSH](/articles/about-ssh)“
