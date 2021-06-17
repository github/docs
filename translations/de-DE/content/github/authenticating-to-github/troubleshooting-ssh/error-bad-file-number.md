---
title: 'Fehler: „Bad file number“ (Ungültige Dateinummer)'
intro: 'Diese Fehlermeldung bedeutet normalerweise, dass Du keine Verbindung zum Server herstellen konntest. Häufig wird der Fehler durch Firewalls und Proxy-Server verursacht.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Beim Ausführen von Remote-Git-Befehlen oder SSH kann es bei Deiner Verbindung zu einer Zeitüberschreitung kommen:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.8p1, OpenSSL 1.0.0d 8 Feb 2011
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

### Das Problem beheben

#### HTTPS verwenden

Oft besteht die einfachste Lösung darin, SSH einfach ganz zu vermeiden. Die meisten Firewalls und Proxys lassen HTTPS-Datenverkehr problemlos zu. Um dies zu nutzen, ändere [die Remote-URL](/github/getting-started-with-github/about-remote-repositories), die Du verwendest:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

#### Versuch aus einem anderen Netzwerk

Wenn Sie von Ihrem Computer eine Verbindung zu einem anderen Netzwerk ohne Firewall herstellen können, können Sie versuchen, eine SSH-Verbindung mit {% data variables.product.product_name %} herzustellen. Wenn alles problemlos funktioniert, bitten Sie Ihren Netzwerkadministrator darum, die Firewall-Einstellungen zu ändern, damit Sie eine SSH-Verbindung mit {% data variables.product.product_name %} herstellen können.

{% if currentVersion == "free-pro-team@latest" %}

#### SSH über den HTTPS-Port verwenden

Wenn die Verwendung von HTTPS nicht in Frage kommt und Dein Firewall-Administrator SSH-Verbindungen nicht zulassen möchte, kannst Du stattdessen versuchen, [SSH über den HTTPS-Port](/articles/using-ssh-over-the-https-port) zu nutzen.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### Weiterführende Informationen

- „[Verbindungsprobleme beheben](/articles/troubleshooting-connectivity-problems)“

{% endif %}
