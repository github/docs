---
title: Connexion d’un dépôt à un package
intro: 'Vous pouvez connecter un référentiel à une image conteneur sur {% data variables.product.product_location %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882334'
---
En connectant un dépôt à un package, la page d’accueil du package affiche des informations et des liens à partir du dépôt, tels que le fichier LISEZMOI.

## Connexion d’un dépôt à un package appartenant à l’utilisateur sur {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Connexion d’un dépôt à un package appartenant à l’organisation sur {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Connexion d’un dépôt à une image conteneur à l’aide de la ligne de commande

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. Dans votre Dockerfile, ajoutez cette ligne, en remplaçant {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` et `REPO` par vos informations :

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPO</em>
 ```
 Par exemple, si vous êtes l’utilisateur `monalisa`, possédez `my-repo`, et que le nom d'hôte {% data variables.product.product_location %} est `github.companyname.com`, vous devez ajouter cette ligne à votre Dockerfile :
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 Pour plus d’informations, consultez « [LABEL](https://docs.docker.com/engine/reference/builder/#label) » dans la documentation Docker officielle et « [Clés d’annotation prédéfinies](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) » dans le dépôt `opencontainers/image-spec`.

2. Générez votre image conteneur. Cet exemple génère une image à partir du fichier Dockerfile dans le répertoire actif et attribue à l’image le nom `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. Si vous le souhaitez, passez en revue les détails de l’image Docker que vous souhaitez baliser.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Balisez votre image Docker avec votre nom d’image souhaité et la destination d’hébergement.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Par exemple :
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. Si ce n’est déjà fait, authentifiez-vous auprès du {% data variables.product.prodname_container_registry %}. Pour plus d’informations, consultez « [Authentification auprès du {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry) ».
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Poussez votre image conteneur vers le {% data variables.product.prodname_container_registry %}.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  Par exemple :
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
