---
title: Arbeiten mit der Docker-Registrierung
intro: '{% ifversion fpt or ghec %}Die Docker-Registrierung wurde jetzt durch die {% data variables.product.prodname_container_registry %} ersetzt.{% else %}Du kannst deine Docker-Images mithilfe der {% data variables.product.prodname_registry %}-Docker-Registrierung pushen und pullen.{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
ms.openlocfilehash: f5d37e74f93535fd48f3400ef0b504825aadc657
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888452'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

Die Docker-Registrierung von {% data variables.product.prodname_dotcom %} (die den Namespace `docker.pkg.github.com` verwendet hat) wurde durch die {% data variables.product.prodname_container_registry %} ersetzt (die den Namespace `https://ghcr.io` verwendet). Die {% data variables.product.prodname_container_registry %} bietet Vorteile wie detaillierte Berechtigungen und Speicheroptimierung für Docker-Images.

Docker-Images, die zuvor in der Docker-Registrierung gespeichert wurden, werden automatisch in die {% data variables.product.prodname_container_registry %} migriert. Weitere Informationen findest du unter [Migrieren zur {% data variables.product.prodname_container_registry %} aus der Docker-Registrierung](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry) und [Arbeiten mit der {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Informationen zum Docker-Support

Beim Installieren oder Veröffentlichen eines Docker-Images unterstützt die Docker-Registrierung derzeit keine fremden Ebenen wie z. B. Windows-Images.

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentifizieren mit einem persönlichen Zugriffstoken

{% data reusables.package_registry.required-scopes %}

Du kannst sich mithilfe des Anmeldebefehls `docker` bei {% data variables.product.prodname_registry %} bei Docker authentifizieren.

Um die Sicherheit deiner Anmeldeinformationen zu gewährleisten, wird empfohlen, dein persönliches Zugriffstoken in einer lokalen Datei auf deinem Computer zu speichern und das Docker-Flag `--password-stdin` zu verwenden, das dein Token aus einer lokalen Datei liest.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %} {% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

Um diesen Beispielanmeldebefehl zu verwenden, musst du `USERNAME` durch deinen {% data variables.product.product_name %}-Benutzernamen{% ifversion ghes or ghae %}, `HOSTNAME` durch die URL für {% data variables.product.product_location %},{% endif %} und `~/TOKEN.txt` durch den Dateipfad zu deinem persönlichen Zugriffstoken für {% data variables.product.product_name %} ersetzen.

Weitere Informationen findest du unter [Docker-Anmeldung](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin).

## Veröffentlichen eines Images

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Hinweis:** Imagenamen dürfen nur Kleinbuchstaben enthalten.

{% endnote %}

{% data variables.product.prodname_registry %} unterstützt mehrere Top-Level-Docker-Images pro Repository. Ein Repository kann eine beliebige Anzahl von Imagetags aufweisen. Unter Umständen beobachtest du beim Veröffentlichen oder Installieren von Docker-Images mit mehr als 10 GB eine beeinträchtigte Dienstqualität, da Ebenen jeweils auf 5 GB gedeckelt sind. Weitere Informationen findest du unter [Docker-Tag](https://docs.docker.com/engine/reference/commandline/tag/) in der Docker-Dokumentation.

{% data reusables.package_registry.viewing-packages %}

1. Bestimme den Imagenamen und die Image-ID deines Docker-Images mithilfe von `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Tagge das Docker-Image mit der Docker-Image-ID, und ersetze dabei *OWNER* durch den Namen des Benutzer- oder Organisationskontos, das das Repository besitzt, *REPOSITORY* durch den Namen des Repositorys, das dein Projekt enthält, *IMAGE_NAME* durch den Namen des Pakets oder Images,{% ifversion ghes or ghae %} *HOSTNAME* durch den Hostnamen von {% data variables.product.product_location %},{% endif %} und *VERSION* durch die Paketversion zur Buildzeit.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %}
3. Wenn du noch kein Docker-Image für das Paket kompiliert hast, kompiliere das Image, indem du *OWNER* durch den Namen des Benutzer- oder Organisationskontos ersetzt, das das Repository besitzt, *REPOSITORY* durch den Namen des Repositorys, das dein Projekt enthält, *IMAGE_NAME* durch den Namen des Pakets oder Images, *VERSION* durch die Paketversion zur Buildzeit,{% ifversion ghes or ghae %} *HOSTNAME* durch den Hostnamen von {% data variables.product.product_location %},{% endif %} und *PATH* durch den Pfad zum Image, wenn es sich nicht im aktuellen Arbeitsverzeichnis befindet.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %} {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %} {% endif %}
4. Veröffentliche das Image in {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %} {% note %}

  **Hinweis:** Du musst dein Image mithilfe von `IMAGE_NAME:VERSION` und nicht mithilfe von `IMAGE_NAME:SHA` pushen.

  {% endnote %}

### Beispiel für das Veröffentlichen eines Docker-Images

{% ifversion ghes %} In diesen Beispielen wird davon ausgegangen, dass die Unterdomänenisolation für deine Instanz aktiviert ist.
{% endif %}

Du kannst Version 1.0 des `monalisa`-Images mithilfe einer Image-ID im Repository `octocat/octo-app` veröffentlichen.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

Du kannst ein neues Docker-Image zum ersten Mal veröffentlichen und es `monalisa`nennen.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Herunterladen eines Bilds

{% data reusables.package_registry.docker_registry_deprecation_status %}

Du kannst ein Docker-Image mithilfe des Befehls `docker pull` aus {% data variables.product.prodname_registry %} installieren, indem du *OWNER* durch den Namen des Benutzer- oder Organisationskontos ersetzt, das das Repository besitzt, *REPOSITORY* durch den Namen des Repositorys, das dein Projekt enthält, *IMAGE_NAME* durch den Namen des Pakets oder Images,{% ifversion ghes or ghae %} *HOSTNAME* durch den Hostnamen von {% data variables.product.product_location %}, {% endif %} und *TAG_NAME* durch das Tag für das Image, das du installieren möchtest.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %} {% endif %}

{% note %}

**Hinweis:** Du musst das Image mithilfe von `IMAGE_NAME:VERSION` und nicht mithilfe von `IMAGE_NAME:SHA` pullen.

{% endnote %}

## Weiterführende Themen

- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)

{% endif %}  <!-- End of main versioning block -->
