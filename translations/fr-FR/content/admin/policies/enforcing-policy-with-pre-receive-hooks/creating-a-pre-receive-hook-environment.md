---
title: Création d’un environnement de hook de pré-réception
intro: 'Pour exécuter des hooks de pré-réception, utilisez l’environnement de pré-réception par défaut ou créez un environnement personnalisé.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104778'
---
Un environnement de pré-réception pour {% data variables.product.prodname_ghe_server %} est un environnement [`chroot`](https://en.wikipedia.org/wiki/Chroot) Linux. Étant donné que les hooks de pré-réception s’exécutent à chaque événement de poussée (push), ils doivent être rapides et légers. Généralement, l’environnement nécessaire à ces vérifications sera minimal.

{% data variables.product.prodname_ghe_server %} fournit un environnement par défaut qui inclut les packages `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq` et `sed`.

Si vous avez une exigence spécifique qui n’est pas satisfaite par cet environnement, par exemple la prise en charge d’un langage particulier, vous pouvez créer et charger votre propre environnement `chroot` Linux 64 bits.

## Création d’un environnement de hook de pré-réception avec Docker

Vous pouvez utiliser un outil de gestion de conteneurs Linux pour créer un environnement de hook de pré-réception. Pour cet exemple, [Alpine Linux](http://www.alpinelinux.org/) et [Docker](https://www.docker.com/) sont utilisés.

{% data reusables.linux.ensure-docker %}
2. Créez le fichier `Dockerfile.alpine-3.3`, contenant ces informations :

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. À partir du répertoire de travail contenant `Dockerfile.alpine-3.3`, générez une image :

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. Créez un conteneur :

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Exportez le conteneur Docker dans un fichier `tar` avec compression `gzip` :

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   Ce fichier `alpine-3.3.tar.gz` est prêt à être chargé vers l’appliance {% data variables.product.prodname_ghe_server %}.

## Création d’un environnement de hook de pré-réception avec chroot

1. Créez un environnement Linux `chroot`.
2. Créez un fichier `tar` avec compression `gzip` dans le répertoire `chroot`.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **Remarques :**
   - N’incluez pas le chemin de début des fichiers dans l’archive tar, par exemple `/path/to/chroot`.
   - `/bin/sh` doit exister et être exécutable comme point d’entrée dans l’environnement chroot.
   - À la différence des environnements chroot traditionnels, l’environnement chroot pour les hooks de pré-réception ne nécessite pas de répertoire `dev`.

   {% endnote %}

Pour plus d’informations sur la création d’un environnement chroot, consultez « [Chroot](https://wiki.debian.org/chroot) » dans le *Wiki Debian*, « [BasicChroot](https://help.ubuntu.com/community/BasicChroot) » dans le *Wiki d’aide de la communauté Ubuntu* ou « [Installing Alpine Linux in a chroo](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot) » (Installation d’Alpine Linux dans un environnement chroot) dans le *Wiki Alpine Linux*.

## Chargement d’un environnement de hook de pré-réception sur {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Cliquez sur **Gérer les environnements**.
![Gérer les environnements](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Cliquez sur **Ajouter un environnement**.
![Ajouter un environnement](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Entrez le nom souhaité dans le champ **Nom de l’environnement**.
![Nom de l’environnement](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Entrez l’URL du fichier `*.tar.gz` contenant votre environnement.
![Charger un environnement à partir d’une URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Cliquez sur **Ajouter un environnement**.
![Bouton Ajouter un environnement](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## Chargement d’un environnement de hook de pré-réception avec l’interpréteur de commandes d’administration
1. Chargez un fichier `*.tar.gz` lisible contenant votre environnement vers un hôte web et copiez l’URL ou transférez le fichier à l’appliance {% data variables.product.prodname_ghe_server %} avec `scp`. Quand vous utilisez `scp`, il peut être nécessaire d’ajuster les autorisations du fichier `*.tar.gz` pour qu’il soit lisible de manière universelle.
1.  Connectez-vous à l’interpréteur de commandes d’administration.
2.  Utilisez la commande `ghe-hook-env-create` en tapant, comme premier argument, le nom souhaité pour l’environnement et, comme deuxième argument, le chemin local complet ou l’URL d’un fichier `*.tar.gz` contenant votre environnement.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
