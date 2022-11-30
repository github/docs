---
title: "Démarrage rapide\_: Configuration de votre compartiment de stockage MinIO pour GitHub\_Packages"
intro: 'Configurez votre compartiment de stockage MinIO personnalisé à utiliser avec {% data variables.product.prodname_registry %}.'
versions:
  ghes: '*'
type: quick_start
topics:
  - Packages
  - Enterprise
  - Storage
shortTitle: Quickstart for MinIO
ms.openlocfilehash: 2d26aa879b0a59d8c6bd4d80a04ec2aa30f8c422
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166552'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

Pour pouvoir activer et configurer {% data variables.product.prodname_registry %} sur {% data variables.location.product_location_enterprise %}, vous devez préparer votre solution de stockage de tiers.

MinIO assure le stockage d’objets avec prise en charge de l’API S3 et de {% data variables.product.prodname_registry %} sur votre entreprise.

Ce guide de démarrage rapide vous montre comment configurer MinIO à l’aide de Docker pour une utilisation avec {% data variables.product.prodname_registry %}. Cependant, vous disposez d’autres options pour gérer MinIO, au-delà de Docker. Pour plus d’informations sur MinIO, consultez la [documentation officielle de MinIO](https://docs.min.io/).

## 1. Choisir un mode MinIO répondant à vos besoins

| Mode MinIO | Optimisé pour | Infrastructure de stockage nécessaire |
|----|----|----|
| MinIO autonome (sur un seul hôte) | Configuration rapide |  N/A |
| MinIO clusterisé (ou MinIO distribué)|  Sécurité des données | Serveurs de stockage exécutés dans un cluster |

Pour plus d’informations sur vos options, consultez la [documentation officielle de MinIO](https://docs.min.io/).

## 2. Installer et exécuter MinIO et se connecter à MinIO

1. Configurez vos variables d’environnement préférées pour MinIO.

    `MINIO_DIR` est utilisé pour ces exemples :
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Installez MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Pour plus d’informations, consultez « [MinIO Quickstart Guide](https://docs.min.io/docs/minio-quickstart-guide) » (guide de démarrage rapide MinIO officiel).

3. Connectez-vous à MinIO à l’aide de votre clé d’accès et de votre secret MinIO.

    {% linux %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endlinux %}

    {% mac %}
    ```shell
    $ export MINIO_ACCESS_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    # this one is actually a secret, so careful
    $ export MINIO_SECRET_KEY=$(cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
    ```
    {% endmac %}

    Vous pouvez accéder à vos clés MinIO à l’aide des variables d’environnement :

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Exécutez MinIO dans le mode choisi.

   * Exécutez MinIO à l’aide de Docker sur un seul hôte :

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     Pour plus d’informations, consultez « [MinIO Docker Quickstart guide](https://docs.min.io/docs/minio-docker-quickstart-guide.html) » (guide de démarrage rapide pour l’utilisation de Docker avec MinIO).

   * Exécutez MinIO en utilisant Docker comme cluster. Ce déploiement de MinIO utilise plusieurs hôtes et le codage d’effacement de MinIO pour une protection des données optimale. Pour exécuter MinIO en mode cluster, consultez « [Démarrage rapide MinIO distribué](https://docs.min.io/docs/distributed-minio-quickstart-guide.html) ».

## 3. Créer votre compartiment MinIO pour {% data variables.product.prodname_registry %}

1. Installez le client MinIO.  

    ```shell
    $ docker pull minio/mc
    ```

2. Créez un compartiment avec une URL hôte à laquelle {% data variables.product.prodname_ghe_server %} peut accéder.

   * Exemple de déploiements locaux :

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     Cet exemple peut être utilisé pour MinIO autonome.

   * Exemple de déploiements clusterisés :

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Étapes suivantes

Pour terminer la configuration du stockage pour {% data variables.product.prodname_registry %}, vous devez copier l’URL de stockage MinIO :

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Pour passer aux étapes suivantes, consultez « [Activation de {% data variables.product.prodname_registry %} avec MinIO](/admin/packages/enabling-github-packages-with-minio) ».
