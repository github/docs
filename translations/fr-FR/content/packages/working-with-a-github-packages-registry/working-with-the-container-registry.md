---
title: Utilisation du registre de conteneurs
intro: 'Vous pouvez stocker et gérer des images Docker et OCI dans {% data variables.product.prodname_container_registry %}, qui utilise l’espace de noms du package `https://{% data reusables.package_registry.container-registry-hostname %}`.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147705050'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## À propos du {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

Pour utiliser le {% data variables.product.prodname_container_registry %} sur {% data variables.product.product_name %}, votre administrateur de site doit d’abord configurer {% data variables.product.prodname_registry %} pour votre instance **et** activer l’isolation de sous-domaine. Pour plus d’informations, consultez « [Bien démarrer avec GitHub Packages pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) » et « [Activation de l’isolation de sous-domaine](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation) ».

{% endif %}

## À propos de la prise en charge du {% data variables.product.prodname_container_registry %}

Le {% data variables.product.prodname_container_registry %} prend actuellement en charge les formats d’image conteneur suivants :

* [Docker Image Manifest V2, Schema 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Spécifications d’Open Container Initiative (OCI)](https://github.com/opencontainers/image-spec)

Lors de l’installation ou de la publication d’une image Docker, le {% data variables.product.prodname_container_registry %} prend en charge les couches étrangères, telles que les images Windows.

## Authentification auprès du {% data variables.product.prodname_container_registry %}

{% ifversion fpt or ghec or ghes > 3.4 %} Pour vous authentifier auprès du {% data variables.product.prodname_container_registry %} (`ghcr.io`) dans un workflow {% data variables.product.prodname_actions %}, utilisez `GITHUB_TOKEN` pour avoir la meilleure sécurité et la meilleure expérience. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

{% ifversion ghes %}Veillez à remplacer `HOSTNAME` par le nom d’hôte ou l’adresse IP de {% data variables.product.product_location_enterprise %} dans les exemples ci-dessous.{% endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Envoi (push) d’images de conteneur

Cet exemple envoie (push) la dernière version de `IMAGE_NAME`.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

Cet exemple envoie (push) la version `2.5` de l’image.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

Lorsque vous publiez un package pour la première fois, la visibilité par défaut est privée. Pour modifier la visibilité ou définir les autorisations d’accès, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ».

## Extraction d’images de conteneur

### Extraire par synthèse

Pour vous assurer de toujours utiliser la même image, vous pouvez spécifier la version exacte de l’image conteneur que vous souhaitez extraire par la valeur SHA de `digest`.

1. Pour trouver la valeur SHA de synthèse, utilisez `docker inspect` ou `docker pull`, et copiez la valeur SHA après `Digest:`
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. Supprimez l’image localement si nécessaire.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. Extrayez l’image conteneur avec `@YOUR_SHA_VALUE` après le nom de l’image.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### Extraire par nom

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### Extraire par nom et version

Exemple de CLI Docker montrant une image extraite par son nom et l’étiquette de version `1.14.1` :
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

### Extraire par nom et dernière version

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## Génération d’images conteneur

Cet exemple génère l’image `hello_docker` :
  ```shell
  $ docker build -t hello_docker .
  ```

## Étiquetage d’images conteneur

1. Recherchez l’ID de l’image Docker que vous souhaitez étiqueter.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Étiquetez votre image Docker avec l’ID d’image, ainsi le nom et la destination d’hébergement de l’image souhaitée.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```
