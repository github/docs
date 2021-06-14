---
title: SSH über den HTTPS-Port verwenden
intro: 'Manchmal verweigert die Firewall das Zulassen von SSH-Verbindungen vollständig.  If using [HTTPS cloning with credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port.  Die meisten Firewallregeln sollten dies erlauben, aber Proxyserver beeinträchtigen dies möglicherweise.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
versions:
  free-pro-team: '*'
topics:
  - SSH
---

{% tip %}

**{% data variables.product.prodname_ghe_server %} users**: Accessing {% data variables.product.prodname_ghe_server %} via SSH over the HTTPS port is currently not supported.

{% endtip %}

Führe den folgenden Befehl aus, um zu testen, ob SSH über den HTTPS-Port möglich ist:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Falls das funktioniert hat, prima! Falls nicht, musst Du allenfalls [unserem Leitfaden zur Fehlerbehebung folgen](/articles/error-permission-denied-publickey).

### SSH-Verbindungen über HTTPS aktivieren

Wenn Sie über Port 443 eine SSH-Verbindung zu `git@ssh.{% data variables.command_line.backticks %}` herstellen können, können Sie Ihre SSH-Einstellungen überschreiben, um zu erzwingen, dass Verbindungen zu {% data variables.product.product_location %} diesen Server und Port durchlaufen.

Um dies in Deiner SSH-Konfiguration festzulegen, bearbeite die Datei unter `~/.ssh/config`, und füge den folgenden Abschnitt hinzu:

```
Host {% data variables.command_line.codeblock %}
  Hostname ssh.{% data variables.command_line.codeblock %}
  Port 443
  User git
```

Sie können testen, ob dies funktioniert, indem Sie erneut eine Verbindung zu {% data variables.product.product_location %} herstellen:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
