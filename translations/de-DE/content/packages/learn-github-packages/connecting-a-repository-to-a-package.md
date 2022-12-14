---
title: Verbinden eines Repositorys mit einem Paket
intro: 'Du kannst ein Repository mit einem Containerimage in {% data variables.product.product_location %} verbinden.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: 087775df9862c3b2a88dd555d9f571066fef8759
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882335'
---
Durch das Verbinden eines Repositorys mit einem Paket werden auf der Startseite des Pakets Informationen und Links aus dem Repository angezeigt, z. B. die Infodatei.

## Verbinden eines Repositorys mit einem benutzereigenen Paket auf {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Verbinden eines Repositorys mit einem organisationseigenen Paket auf {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Verbinden eines Repositorys mit einem Containerimage mithilfe der Befehlszeile

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. Füge in deinem Dockerfile diese Zeile hinzu, indem du {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` und `REPO` durch deine Details ersetzt:

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 Wenn du beispielsweise die Benutzerin `monalisa` und Besitzerin von `my-repo` bist und der {% data variables.product.product_location %}-Hostname `github.companyname.com` lautet, fügst du deinem Dockerfile folgende Zeile hinzu:
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 Weitere Informationen findest du unter [LABEL](https://docs.docker.com/engine/reference/builder/#label) in der offiziellen Docker-Dokumentation und unter [Vordefinierte Anmerkungsschlüssel](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) im Repository `opencontainers/image-spec`.

2. Erstelle das Containerimage. In diesem Beispiel wird ein Image aus dem Dockerfile im aktuellen Verzeichnis erstellt und der Imagename `hello_docker` zugewiesen.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Überprüfe optional Details für das Docker-Image, das du markieren möchtest.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Markiere dein Docker-Image mit dem gewünschten Imagenamen und Hostingziel.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Beispiel:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. Wenn du noch nicht angemeldet bist, authentifiziere dich bei {% data variables.product.prodname_container_registry %}. Weitere Informationen findest du unter [Authentifizieren bei {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry).
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Pushe dein Containerimage an {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  Beispiel:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
