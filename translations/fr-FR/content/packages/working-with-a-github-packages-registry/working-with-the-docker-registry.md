---
title: Utilisation du registre Docker
intro: '{% ifversion fpt or ghec %}Le registre Docker a été remplacé par le {% data variables.product.prodname_container_registry %}.{% else %}Vous pouvez envoyer et tirer vos images Docker à l’aide du registre Docker{% data variables.product.prodname_registry %}.{% endif %}'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888451'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

Le registre Docker de {% data variables.product.prodname_dotcom %} (qui utilisait l’espace de noms `docker.pkg.github.com`) a été remplacé par le {% data variables.product.prodname_container_registry %} (qui utilise l’espace de noms `https://ghcr.io`). Le {% data variables.product.prodname_container_registry %} offre des avantages tels que des autorisations précises et l’optimisation du stockage pour les images Docker.

Les images Docker précédemment stockées dans le registre Docker sont migrées automatiquement vers le {% data variables.product.prodname_container_registry %}. Pour plus d’informations, consultez « [Migration vers le {% data variables.product.prodname_container_registry %} à partir du registre Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry) » et « [Utilisation du {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) ».

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## À propos de la prise en charge de Docker

Lors de l’installation ou de la publication d’une image Docker, le registre Docker ne prend actuellement pas en charge les couches étrangères, telles que les images Windows.

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentification avec un jeton d’accès personnel

{% data reusables.package_registry.required-scopes %}

Vous pouvez vous authentifier auprès de {% data variables.product.prodname_registry %} avec Docker à l’aide de la commande de connexion `docker`.

Pour assurer la sécurité de vos informations d’identification, nous vous recommandons d’enregistrer votre jeton d’accès personnel dans un fichier local sur votre ordinateur et d’utiliser l’indicateur `--password-stdin` de Docker, qui lit votre jeton à partir d’un fichier local.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %} {% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

Pour utiliser cet exemple de commande de connexion, remplacez `USERNAME` par votre nom d’utilisateur {% data variables.product.product_name %}{% ifversion ghes or ghae %}, `HOSTNAME` par l’URL pour {% data variables.product.product_location %},{% endif %} et `~/TOKEN.txt` par le chemin du fichier vers votre jeton d’accès personnel pour {% data variables.product.product_name %}.

Pour plus d’informations, consultez « [Connexion Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin) ».

## Publication d’une image

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Remarque :** Les noms d’image doivent utiliser uniquement des lettres minuscules.

{% endnote %}

{% data variables.product.prodname_registry %} prend en charge plusieurs images Docker de niveau supérieur par dépôt. Un dépôt peut contenir un nombre quelconque de balises d’image. Vous pouvez faire face à une dégradation du service lors de la publication ou de l’installation des images Docker supérieures à 10 Go, les couches étant limitées à 5 Go chacune. Pour plus d’informations, consultez « [Balise Docker](https://docs.docker.com/engine/reference/commandline/tag/) » dans la documentation Docker.

{% data reusables.package_registry.viewing-packages %}

1. Déterminez le nom et l’ID de votre image Docker avec `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. À l’aide de l’ID d’image Docker, balisez l’image Docker en remplaçant *OWNER* par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt, *REPOSITORY* par le nom du dépôt contenant votre projet, *IMAGE_NAME* par le nom du package ou de l’image,{% ifversion ghes or ghae %} *HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %},{% endif %} et *VERSION* par la version du package au moment de la génération.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %}
3. Si vous n’avez pas encore créé d’image Docker pour le package, générez l’image en remplaçant *OWNER* par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt, *REPOSITORY* par le nom du dépôt contenant votre projet, *IMAGE_NAME* par le nom du package ou de l’image, *VERSION* par la version du package au moment de la génération,{% ifversion ghes or ghae %} *HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %},{% endif %} et *PATH* par l’image si elle ne se trouve pas dans le répertoire de travail actif.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %} {% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %} {% endif %}
4. Publiez l’image sur {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %} {% note %}

  **Remarque :** Vous devez pousser votre image avec `IMAGE_NAME:VERSION` et non avec `IMAGE_NAME:SHA`.

  {% endnote %}

### Exemple de publication d’une image Docker

{% ifversion ghes %} Ces exemples supposent que l’isolation de sous-domaine est activée pour votre instance.
{% endif %}

Vous pouvez publier la version 1.0 de l’image `monalisa` sur le dépôt `octocat/octo-app` à l’aide d’un ID d’image.

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

Vous pouvez publier une nouvelle image Docker pour la première fois et la nommer `monalisa`.

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

## Téléchargement d’une image

{% data reusables.package_registry.docker_registry_deprecation_status %}

Vous pouvez utiliser la commande `docker pull` pour installer une image Docker à partir de {% data variables.product.prodname_registry %} en remplaçant *OWNER* par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt, *REPOSITORY* par le nom du dépôt contenant votre projet, *IMAGE_NAME* par le nom du package ou de l’image,{% ifversion ghes or ghae %} *HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %}, {% endif %} et *TAG_NAME* par la balise pour l’image que vous souhaitez installer.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %} {% endif %}

{% note %}

**Remarque :** Vous devez tirer l’image avec `IMAGE_NAME:VERSION` et non avec `IMAGE_NAME:SHA`.

{% endnote %}

## Pour aller plus loin

- « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) »

{% endif %}  <!-- End of main versioning block -->
