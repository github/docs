---
title: Dockerfile Unterstützung für GitHub Aktionen
shortTitle: Docker
intro: 'Beim Erstellen eines ‚Dockerfiles‘ für eine Dockercontainer-Aktion sollten Sie sich darüber im Klaren sein, wie einige Docker-Anweisungen mit GitHub-Aktionen und der Metadaten-Datei einer Aktion interagieren.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zu Dockerfile-Anweisungen

Ein `Dockerfile` enthält Anweisungen und Argumente, die den Inhalt und das Startverhalten eines Docker-Containers definieren. Weitere Informationen zu den Anweisungen findest Du unter "[Dockerfile-Referenz](https://docs.docker.com/engine/reference/builder/)" in der Docker-Dokumentation.

### Dockerfile Anweisungen und Overrides (Überschreibungen)

Einige Docker-Anweisungen interagieren mit GitHub-Aktionen, und die Metadaten-Datei einer Aktion kann einige Docker-Anweisungen überschreiben. Vergewissere Dich, dass Dir klar ist, wie Dein Dockerfile mit {% data variables.product.prodname_actions %} interagiert, um unerwartetes Verhalten zu verhindern.

#### USER

Docker-Aktionen müssen vom Standard-Benutzer (root) des Dockers ausgeführt werden. Verwende nicht die `USER` Anweisung in Deinem `Dockerfile`, weil Du nicht auf den `GITHUB_WORKSPACE` zugreifen kannst. Weitere Informationen findest Du unter "[Umgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables)" und [USER-Referenz](https://docs.docker.com/engine/reference/builder/#user) in der Docker-Dokumentation.

#### FROM

Die erste Anweisung im `Dockerfile` muss `FROM` sein. Sie wählt das Docker-Basisabbild aus. Weitere Informationen findest Du unter [FROM-Referenz](https://docs.docker.com/engine/reference/builder/#from) in der Docker-Dokumentation.

Dies sind einige bewährte Methoden, das Argument `FROM` zu setzen:

- Es wird empfohlen, offizielle Docker-Images (Abbilder) zu verwenden. Zum Beispiel `python` oder `ruby`.
- Verwende ein Versions-Tag, falls vorhanden, vorzugsweise mit einer Hauptversion. Verwende beispielsweise `node:10` anstelle von `node:latest`.
- Es wird empfohlen, Docker-Images basierend auf dem Betriebssystem [Debian](https://www.debian.org/) zu verwenden.

#### WORKDIR

{% data variables.product.product_name %} setzt den Pfad zum Arbeitsverzeichnis in der `GITHUB_WORKSPACE` Umgebungsvariable. Es wird empfohlen, die `WORKDIR` Anweisung in Ihrem `Dockerfile` zu vermeiden. Bevor die Aktion ausgeführt wird, mountet {% data variables.product.product_name %} das Verzeichnis `GITHUB_WORKSPACE` auf was auch immer sich an dieser Stelle im Docker-Image befindet, und setzt `GITHUB_WORKSPACE` als Arbeitsverzeichnis. Weitere Informationen findest Du unter "[Umgebungsvariablen verwenden](/actions/configuring-and-managing-workflows/using-environment-variables)" und [WORKDIR-Referenz](https://docs.docker.com/engine/reference/builder/#workdir) in der Docker-Dokumentation.

#### ENTRYPOINT

Wenn Du `Einstiegspunkt` in der Metadaten-Datei einer Aktion definierst, wird der `ENTRYPOINT` im `Dockerfile` überschrieben. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)“.

Für die Docker-Anweisung `ENTRYPOINT` gibt es sowohl eine _shell_-Form als auch eine _exec_-Form. Die Docker-Dokumentation für `ENTRYPOINT` empfiehlt die _exec_-Form der `ENTRYPOINT`-Anweisung. Weitere Informationen über _exec_- und _shell_-Form findest Du unter [ENTRYPOINT-Referenz](https://docs.docker.com/engine/reference/builder/#entrypoint) in der Docker-Dokumentation.

Wenn Du Deinen Container so konfigurierst, dass er die _exec_-Form der Anweisung `ENTRYPOINT` verwendet, können die in der Metadaten-Datei der Aktion konfigurierten `args` (Argumente) nicht in einer Kommando-Shell genutzt werden. Wenn die `Args` der Aktion eine Umgebungsvariable enthalten, wird die Variable nicht ersetzt. Wenn Du zum Beispiel das folgende _exec_-Format verwendest, wird nicht der in `$GITHUB_SHA` gespeicherte Wert ausgegeben, sondern stattdessen „`$GITHUB_SHA`“.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Wenn Du Variablensubstitution willst, verwende entweder die _Shell_-Form oder führe direkt eine Shell aus. Zum Beispiel kannst Du mit dem folgenden _exec_-Format eine Shell ausführen, um den Wert auszugeben, der in der Umgebungsvariable `GITHUB_SHA` gespeichert ist.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Um `args` aus der Metadaten-Datei der Aktion an einen Docker Container zu übergeben, der die _exec_-Form im `ENTRYPOINT` verwendet, empfehlen wir, ein Shell-Skript namens `entrypoint.sh` zu erstellen und dieses von der `ENTRYPOINT`-Anweisung aus anrufen:

##### Beispiel *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

##### Beispiel für die Datei *entrypoint.sh*

Mit dem obigen Dockerfile-Beispiel sendet {% data variables.product.product_name %} die Metadaten-Datei der Aktion konfigurierten `args` als Argumente an `entrypoint.sh`. Füge `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) oben in die Datei `entrypoint.sh` ein, um explizit die [POSIX](https://en.wikipedia.org/wiki/POSIX)-konforme Shell des Systems zu verwenden.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Dein Code muss ausführbar sein. Stelle sicher, dass die Datei `entrypoint.sh` die Berechtigunge `execute` hat, bevor Du sie in einem Workflow verwendest. Du kannst die Berechtigung von Deinem Terminal aus mit diesem Befehl ändern:
  ``` sh
  chmod +x entrypoint.sh
  ```

Wenn ein `ENTRYPOINT`-Shell-Skript nicht ausführbar ist, erhältst Du einen Fehler, der ungefähr so aussieht:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

Wenn Du in der Metadaten-Datei der Aktion `args` definierst, dann überschreibt `args` die Anweisung `CMD`, welche im `Dockerfile` angegeben wurde. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)“.

Falls Du `CMD` in Deinem `Dockerfile` verwendest, solltest Du Dich an diese Richtlinien halten:

{% data reusables.github-actions.dockerfile-guidelines %}

### Unterstützte Linux-Funktionen

{% data variables.product.prodname_actions %} unterstützt die standardmäßigen Linux-Funktionen, die auch Docker unterstützt. Funktionen können weder hinzugefügt noch entfernt werden. Weitere Informationen über die standardmäßigen Linux-Funktionen, die Docker unterstützt, findest Du unter "[Laufzeit-Privilegien und Linux-Funktionen](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" in der Docker-Dokumentation. Weitere Informationen zu Linux-Funktionen findest Du unter "[Überblick über die Linux-Funktionen](http://man7.org/linux/man-pages/man7/capabilities.7.html)" in den Linux-Man-Pages.
