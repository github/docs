---
title: Informationen zu Remote-Repositorys
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
intro: 'Der kooperative Ansatz von GitHub in der Entwicklung hängt von der Veröffentlichung von Commits aus Deinem lokalen Repository ab, damit andere Personen sie anzeigen, abrufen und aktualisieren können.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Eine Remote-URL ist die offizielle Ausdrucksweise von Git für „der Ort, an dem Dein Code gespeichert ist“. Diese URL kann Dein Repository auf GitHub oder der Fork eines anderen Benutzers sein oder sich sogar auf einem völlig anderen Server befinden.

Du kannst nur an zwei Arten von URL-Adressen übertragen:

* Eine HTTPS-URL wie `https://{% data variables.command_line.backticks %}/user/repo.git`
* Eine SSH-URL wie `git@{% data variables.command_line.backticks %}:user/repo.git`

Git verknüpft eine Remote-URL mit einem Namen, und Dein Standard-Remote wird in der Regel `origin` genannt.

Informationen zu den Unterschieden zwischen diesen URLs findest Du unter „[Welche Remote-URL sollte ich verwenden?](/articles/which-remote-url-should-i-use).“

### Remotes erstellen

Mit dem Befehl `git remote add` kannst Du eine Remote-URL mit einem Namen verknüpfen. Du kannst beispielsweise Folgendes in der Befehlszeile eingeben:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

Dadurch wird der Name `origin` mit der `REMOTE_URL` verknüpft.

Mit dem Befehl `git remote set-url` kannst Du [die URL eines Remotes ändern](/articles/changing-a-remote-s-url).
