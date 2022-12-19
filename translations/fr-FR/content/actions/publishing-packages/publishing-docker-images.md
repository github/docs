---
title: Publication des images Docker
intro: 'Vous pouvez publier des images Docker dans un registre, comme Docker Hub ou {% data variables.product.prodname_registry %}, dans le cadre de votre workflow d’intégration continue (CI).'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410290'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Ce guide vous montre comment créer un workflow qui exécute une build Docker, puis publie des images Docker sur Docker Hub ou {% data variables.product.prodname_registry %}. Avec un seul workflow, vous pouvez publier des images sur un registre unique ou sur plusieurs registres.

{% note %}

**Remarque :** Si vous souhaitez pousser des images vers un autre registre Docker tiers, l’exemple de la section « [Publication d’images sur {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages) » peut servir de modèle approprié.

{% endnote %}

## Prérequis

Il est recommandé d’avoir une compréhension de base des options de configuration de workflows et de la création de fichiers de workflow. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Vous pouvez également trouver utile d’avoir une compréhension de base des éléments suivants :

- « [Secrets chiffrés](/actions/reference/encrypted-secrets) »
- « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow) »{% ifversion fpt or ghec %}
- « [Utilisation du {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) »{% else %}
- « [Utilisation du registre Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry) »{% endif %}

## À propos de la configuration d’une image

Ce guide suppose que vous disposez d’une définition complète pour une image Docker stockée dans un dépôt {% data variables.product.prodname_dotcom %}. Par exemple, votre dépôt doit contenir un _Dockerfile_ et tous les autres fichiers nécessaires pour exécuter une build Docker pour créer une image.

Dans ce guide, nous allons utiliser l’action Docker `build-push-action` pour générer l’image Docker et la pousser vers un ou plusieurs registres Docker. Pour plus d’informations, consultez [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Publication d’images sur Docker Hub

{% data reusables.actions.release-trigger-workflow %}

Dans l’exemple de workflow ci-dessous, nous utilisons les actions Docker `login-action` et `build-push-action` pour générer l’image Docker et, si la génération réussit, pousser l’image générée à Docker Hub.

Pour la pousser vers Docker Hub, vous devez disposer d’un compte Docker Hub et créer un dépôt Docker Hub. Pour plus d’informations, consultez « [Envoi d’une image conteneur Docker à Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub) » dans la documentation Docker.

Les options `login-action` requises pour Docker Hub sont les suivantes :
* `username` et `password` : il s’agit de vos nom d’utilisateur et mot de passe Docker Hub. Nous vous recommandons de stocker vos nom d’utilisateur et mot de passe Docker Hub en tant que secrets afin qu’ils ne soient pas exposés dans votre fichier de workflow. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

L’option `metadata-action` requise pour Docker Hub est la suivante :
* `images` : espace de noms et nom de l’image Docker que vous générez/poussez sur Docker Hub.

Les options `build-push-action` requises pour Docker Hub sont les suivantes :
* `tags` : étiquette de votre nouvelle image au format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Vous pouvez définir une étiquette unique comme indiqué ci-dessous ou spécifier plusieurs étiquettes dans une liste.
* `push` : si la valeur est `true`, l’image est envoyée au registre si elle est générée avec succès.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

Le workflow ci-dessus extrait le dépôt {% data variables.product.prodname_dotcom %}, utilise `login-action` pour se connecter au registre, puis l’action `build-push-action` pour : générer une image Docker basée sur le `Dockerfile` de votre dépôt, pousser l’image vers Docker Hub et appliquer une étiquette à l’image.

## Publication d’images sur {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

Dans l’exemple de workflow ci-dessous, nous utilisons les actions Docker `login-action`{% ifversion fpt or ghec %}, `metadata-action`,{% endif %} et `build-push-action` pour générer l’image Docker et, si la génération réussit, pousser l’image générée vers {% data variables.product.prodname_registry %}.

Les options `login-action` requises pour {% data variables.product.prodname_registry %} sont les suivantes :
* `registry` : doit être défini sur {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username` : vous pouvez utiliser le contexte {% raw %}`${{ github.actor }}`{% endraw %} pour employer automatiquement le nom d’utilisateur de l’utilisateur qui a déclenché l’exécution du workflow. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts#github-context) ».
* `password` : vous pouvez utiliser le secret `GITHUB_TOKEN` généré automatiquement pour le mot de passe. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token) ».

{% ifversion fpt or ghec %} L’option `metadata-action` requise pour {% data variables.product.prodname_registry %} est la suivante :
* `images` : espace de noms et nom de l’image Docker que vous générez.
{% endif %}

Les options `build-push-action` requises pour {% data variables.product.prodname_registry %} sont les suivantes :{% ifversion fpt or ghec %}
* `context` : définit le contexte de la build comme l’ensemble de fichiers situé dans le chemin spécifié.{% endif %}
* `push` : si la valeur est `true`, l’image est envoyée au registre si elle est générée avec succès.{% ifversion fpt or ghec %}
* `tags` et `labels` : elles sont remplies par la sortie de `metadata-action`.{% else %}
* `tags`: doit être défini au format {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. 
  
   Par exemple, pour une image nommée `octo-image` stockée sur {% data variables.product.prodname_ghe_server %} à l’adresse `https://HOSTNAME/octo-org/octo-repo`, l’option `tags` devrait être définie sur `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.
  
   Par exemple, pour une image nommée `octo-image` stockée sur {% data variables.product.prodname_dotcom %} à l’adresse `http://github.com/octo-org/octo-repo`, l’option `tags` doit être définie sur `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. Vous pouvez définir une étiquette unique comme indiqué ci-dessous ou spécifier plusieurs étiquettes dans une liste.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

Le workflow ci-dessus est déclenché par une poussée vers la branche « release ». Il extrait le dépôt GitHub et utilise `login-action` pour se connecter au {% data variables.product.prodname_container_registry %}. Il extrait ensuite les étiquettes et les intitulés pour l’image Docker. Enfin, il utilise l’action `build-push-action` pour générer l’image et la publier sur le {% data variables.product.prodname_container_registry %}.

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

Le workflow ci-dessus extrait le dépôt {% data variables.product.product_name %}, utilise `login-action` pour se connecter au registre, puis l’action `build-push-action` pour : générer une image Docker basée sur le `Dockerfile` de votre dépôt, pousser l’image au registre Docker et appliquer le SHA de commit et la version comme étiquettes d’image.
{% endif %}

## Publication d’images sur Docker Hub et {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

Dans un seul workflow, vous pouvez publier votre image Docker sur plusieurs registres à l’aide des actions `login-action` et `build-push-action` pour chaque registre.

L’exemple de workflow suivant utilise les étapes des sections précédentes (« [Publication d’images sur Docker Hub](#publishing-images-to-docker-hub) » et « [Publication d’images sur {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages) ») pour créer un workflow unique qui envoie aux deux registres.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}
      
      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

Le workflow ci-dessus extrait le dépôt {% data variables.product.product_name %}, utilise `login-action` deux fois pour se connecter aux deux registres et génère des étiquettes et des intitulés avec l’action `metadata-action`.
Ensuite, l’action `build-push-action` génère et envoie (push) l’image Docker vers Docker Hub et le {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Registre Docker{% endif %}.
