---
title: Arbeiten mit der Containerregistrierung
intro: 'Du kannst Docker- und OCI-Images in der {% data variables.product.prodname_container_registry %} speichern und verwalten, die den Paketnamespace `https://{% data reusables.package_registry.container-registry-hostname %}` verwendet.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
  - /packages/guides/container-guides-for-github-packages/pushing-and-pulling-docker-images
  - /packages/guides/pushing-and-pulling-docker-images
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/working-with-a-github-packages-registry/enabling-improved-container-support-with-the-container-registry
  - /packages/getting-started-with-github-container-registry/enabling-improved-container-support
  - /packages/guides/container-guides-for-github-packages/enabling-improved-container-support
  - /packages/guides/enabling-improved-container-support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.5'
shortTitle: Container registry
ms.openlocfilehash: fc99e2e21a647c7a1a2517de8aa68822faac496e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147705051'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Informationen zur {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

Um die {% data variables.product.prodname_container_registry %} für {% data variables.product.product_name %} zu verwenden, muss dein Websiteadministrator zunächst {% data variables.product.prodname_registry %} für deine Instanz konfigurieren **und** die Isolierung von Unterdomänen aktivieren. Weitere Informationen findest du unter [Erste Schritte mit GitHub Packages für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise) und [Aktivieren der Unterdomänenisolation](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation).

{% endif %}

## {% data variables.product.prodname_container_registry %}: Unterstützung

Die {% data variables.product.prodname_container_registry %} unterstützt derzeit die folgenden Containerimageformate:

* [Docker-Imagemanifest, Version 2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Spezifikationen der Open Container Initiative (OCI)](https://github.com/opencontainers/image-spec)

Bei der Installation oder Veröffentlichung eines Docker-Image unterstützt die {% data variables.product.prodname_container_registry %} Fremdebenen wie z. B. Windows-Images.

## Authentifizieren bei der {% data variables.product.prodname_container_registry %}

{% ifversion fpt or ghec or ghes > 3.4 %} Verwende zum Authentifizieren bei der {% data variables.product.prodname_container_registry %} (`ghcr.io`) innerhalb eines {% data variables.product.prodname_actions %}-Workflows das `GITHUB_TOKEN` für beste Sicherheit und Erfahrung. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

{% ifversion ghes %}Achte darauf, `HOSTNAME` in den folgenden Beispielen durch den {% data variables.product.product_location_enterprise %}-Hostnamen oder die entsprechende IP-Adresse zu ersetzen.{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Pushen von Containerimages

In diesem Beispiel wird die neueste Version von `IMAGE_NAME` gepusht.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

In diesem Beispiel wird die `2.5`-Version des Image gepusht.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

Wenn du ein Paket zum ersten Mal veröffentlichst, ist die Sichtbarkeit standardmäßig auf privat eingestellt. Um die Sichtbarkeit zu ändern oder Zugriffsberechtigungen festzulegen, solltest du den Artikel [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

## Pullen von Containerimages

### Pullen mit „digest“

Um sicherzustellen, dass du immer dasselbe Image verwendest, kannst du die exakte Version des Containerimage, die du pullen möchtest, mit dem SHA-Wert `digest` angeben.

1. Um den Digest-SHA-Wert zu finden, musst du `docker inspect` oder `docker pull` verwenden und den SHA-Wert nach `Digest:` kopieren.
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. Entferne das Image nach Bedarf lokal.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. Pulle das Containerimage mit `@YOUR_SHA_VALUE` dem Imagenamen.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### Pullen nach Name

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### Pullen nach Name und Version

Dieses Docker-CLI-Beispiel zeigt ein Image, das nach Namen und `1.14.1`-Versionstag gepullt wurde:
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  > {% data reusables.package_registry.container-registry-hostname %}/orgname/image-name/release:1.14.1
  ```

### Pullen nach Name und neuester Version

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## Erstellen von Containerimages

In diesem Beispiel wird das Image `hello_docker` erstellt:
  ```shell
  $ docker build -t hello_docker .
  ```

## Taggen von Containerimages

1. Suche die ID des Docker-Image, das du taggen möchten.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Tagge dein Docker-Image mithilfe der Image-ID, des gewünschten Imagenamens und des gewünschten Hostingziels.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
