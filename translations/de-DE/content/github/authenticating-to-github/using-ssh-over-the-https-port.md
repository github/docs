---
title: SSH über den HTTPS-Port verwenden
intro: 'Manchmal verweigert die Firewall das Zulassen von SSH-Verbindungen vollständig.  If using [HTTPS cloning with credential caching](/github/using-git/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port.  Die meisten Firewallregeln sollten dies erlauben, aber Proxyserver beeinträchtigen dies möglicherweise.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
versions:
  free-pro-team: '*'
---

{% tip %}

**GitHub Enterprise-Benutzer**: Der Zugriff auf GitHub Enterprise über SSH über den HTTPS-Port wird derzeit nicht unterstützt.

{% endtip %}

Führe den folgenden Befehl aus, um zu testen, ob SSH über den HTTPS-Port möglich ist:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Falls das funktioniert hat, prima! Falls nicht, musst Du allenfalls [unserem Leitfaden zur Fehlerbehebung folgen](/articles/error-permission-denied-publickey).

### SSH-Verbindungen über HTTPS aktivieren

Wenn Du über Port 443 eine SSH-Verbindung zu `git@ssh.{% data variables.command_line.backticks %}` herstellen kannst, kannst Du Deine SSH-Einstellungen überschreiben, um zu erzwingen, dass Verbindungen zu {% data variables.product.product_location %} durch diesen Server und Port laufen.

Um dies in Deiner SSH-Konfiguration festzulegen, bearbeite die Datei unter `~/.ssh/config`, und füge den folgenden Abschnitt hinzu:

```
Host {% data variables.command_line.codeblock %}
  Hostname ssh.{% data variables.command_line.codeblock %}
  Port 443
```

Du kannst testen, ob dies funktioniert, indem Du erneut eine Verbindung zu {% data variables.product.product_location %} herstellst:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
