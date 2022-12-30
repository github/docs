---
title: Dockerfile Unterstützung für GitHub Aktionen
shortTitle: Dockerfile support
intro: 'Beim Erstellen eines `Dockerfile` für eine Docker-Containeraktion solltest du wissen, wie bestimmte Docker-Anweisungen mit GitHub Actions und der Metadatendatei einer Aktion interagieren.'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088644'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Dockerfile-Anweisungen

Eine `Dockerfile` enthält Anweisungen und Argumente, die den Inhalt und das Startverhalten eines Docker-Containers definieren. Weitere Informationen zu den Anweisungen, die Docker unterstützt, findest du in der Docker-Dokumentation unter [Dockerfile-Referenz](https://docs.docker.com/engine/reference/builder/).

## Dockerfile Anweisungen und Overrides (Überschreibungen)

Einige Docker-Anweisungen interagieren mit GitHub-Aktionen, und die Metadaten-Datei einer Aktion kann einige Docker-Anweisungen überschreiben. Vergewissere Dich, dass Dir klar ist, wie dein Dockerfile mit {% data variables.product.prodname_actions %} interagiert, um unerwartetes Verhalten zu verhindern.

### USER

Docker-Aktionen müssen vom Standard-Benutzer (root) des Dockers ausgeführt werden. Verwende die `USER`-Anweisung nicht in deiner `Dockerfile`, da du dann nicht mehr auf `GITHUB_WORKSPACE` zugreifen kannst. Weitere Informationen findest du in der Docker-Dokumentation unter [Verwenden von Umgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables) und [USER-Referenz](https://docs.docker.com/engine/reference/builder/#user).

### FROM

Die erste Anweisung in der `Dockerfile` muss `FROM` sein, wodurch ein Docker-Basisimage ausgewählt wird. Weitere Informationen findest du in der Docker-Dokumentation unter [FROM-Referenz](https://docs.docker.com/engine/reference/builder/#from).

Dies sind einige bewährte Methoden, das `FROM`-Argument zu nutzen:

- Es wird empfohlen, offizielle Docker-Images (Abbilder) zu verwenden. Zum Beispiel: `python` oder `ruby`.
- Verwende ein Versions-Tag, falls vorhanden, vorzugsweise mit einer Hauptversion. Verwende z. B. `node:10` statt `node:latest`.
- Es wird empfohlen, Docker-Images zu verwenden, die auf dem [Debian-Betriebssystem](https://www.debian.org/) basieren.

### WORKDIR

{% data variables.product.product_name %} legt den Pfad zum Arbeitsverzeichnis in der Umgebungsvariablen `GITHUB_WORKSPACE` fest. Es wird empfohlen, die `WORKDIR`-Anweisung nicht in deiner `Dockerfile` zu verwenden. Bevor die Aktion ausgeführt wird, mountet {% data variables.product.product_name %} das Verzeichnis `GITHUB_WORKSPACE` auf was auch immer sich an dieser Stelle im Docker-Image befindet, und setzt `GITHUB_WORKSPACE` als Arbeitsverzeichnis. Weitere Informationen findest du in der Docker-Dokumentation unter [Verwenden von Umgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables) und [WORKDIR-Referenz](https://docs.docker.com/engine/reference/builder/#workdir).

### ENTRYPOINT

Wenn du in der Metadatendatei einer Aktion `entrypoint` definierst, setze `ENTRYPOINT`, festgelegt in der `Dockerfile`, außer Kraft. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint).

Für die Docker-Anweisung `ENTRYPOINT` gibt es ein _Shellformat_ und ein _Ausführungsformat_. In der Docker-Dokumentation zu `ENTRYPOINT` wird das _Ausführungsformat_ der `ENTRYPOINT`-Anweisung empfohlen. Weitere Informationen zum _Ausführungsformat_ und _Shellformat_ findest du in der Docker-Dokumentation in der [ENTRYPOINT-Referenz](https://docs.docker.com/engine/reference/builder/#entrypoint).

Verwende `WORKDIR` nicht, um deinen Einstiegspunkt in deiner Dockerfile-Datei anzugeben. Verwende stattdessen einen absoluten Pfad. Weitere Informationen findest du unter [WORKDIR](#workdir).

Wenn du deinen Container so konfigurierst, dass er das _Ausführungsformat_ der `ENTRYPOINT`-Anweisung verwendet, wird die in der Metadatendatei der Aktion konfigurierte `args` nicht in einer Befehlsshell ausgeführt. Wenn die `args` der Aktion eine Umgebungsvariable enthalten, wird die Variable nicht ersetzt. Wenn du beispielsweise das folgende _Ausführungsformat_ verwendest, wird der in `$GITHUB_SHA` gespeicherte Wert nicht ausgegeben, sondern stattdessen wird `"$GITHUB_SHA"` ausgegeben.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Wenn du eine Variable ersetzen möchtest, verwende entweder das _Shellformat_, oder du führst direkt eine Shell aus. Mit dem folgenden _Ausführungsformat_ kannst du zum Beispiel eine Shell ausführen, um den in der Umgebungsvariablen `GITHUB_SHA` gespeicherten Wert auszugeben.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Um die in der Metadatendatei der Aktion definierten `args` an einen Docker-Container zu übergeben, der das _Ausführungsformat_ im `ENTRYPOINT` verwendet, empfiehlt es sich, ein Shellskript namens `entrypoint.sh` zu erstellen, das über die `ENTRYPOINT`-Anweisung aufgerufen wird:

#### Beispiel für *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### Beispieldatei für *entrypoint.sh*

Mit dem obigen Dockerfile-Beispiel sendet {% data variables.product.product_name %} die Metadaten-Datei der Aktion konfigurierten `args` als Argumente an `entrypoint.sh`. Füge die `#!/bin/sh`[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) oben in der `entrypoint.sh`-Datei hinzu, um die [POSIX-kompatible](https://en.wikipedia.org/wiki/POSIX) Shell des Systems explizit zu verwenden.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

Dein Code muss ausführbar sein. Stelle sicher, dass die `entrypoint.sh`-Datei über `execute`-Berechtigungen verfügt, bevor du sie in einem Workflow verwendest. Du kannst die Berechtigung von deinem Terminal aus mit diesem Befehl ändern:
  ``` sh
  chmod +x entrypoint.sh
  ```

Wenn ein `ENTRYPOINT`-Shellskript nicht ausführbar ist, wird ein Fehler wie der folgende angezeigt:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### Befehlszeile

Wenn du in der Metadatendatei der Aktion `args` definierst, überschreibt `args` die `CMD`-Anweisung, die in der `Dockerfile` angegeben ist. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs).

Wenn du in deiner `Dockerfile` die `CMD`-Anweisung verwendest, befolge die folgenden Richtlinien:

{% data reusables.actions.dockerfile-guidelines %}

## Unterstützte Linux-Funktionen

{% data variables.product.prodname_actions %} unterstützt die standardmäßigen Linux-Funktionen, die auch Docker unterstützt. Funktionen können weder hinzugefügt noch entfernt werden. Weitere Informationen zu den standardmäßigen Linux-Funktionen, die Docker unterstützt, findest du in der Docker-Dokumentation unter [Runtime-Berechtigungen und Linux-Funktionen](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities). Weitere Informationen zu Linux-Funktionen findest du unter [Übersicht über Linux-Funktionen](http://man7.org/linux/man-pages/man7/capabilities.7.html) auf den Linux-Man-Seiten.
