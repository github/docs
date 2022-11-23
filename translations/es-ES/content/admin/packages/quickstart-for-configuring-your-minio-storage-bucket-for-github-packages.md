---
title: Guía de inicio rápido para configurar tu bucket de almacenamiento de MinIO para GitHub Packages
intro: 'Configura tu bucket de almacenamiento de MinIO personalizado para utilizarlo con {% data variables.product.prodname_registry %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166557'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.location.product_location_enterprise %}, deberás preparar tu solución de almacenamiento de terceros.

MinIO ofrece almacenamiento de objetos con soporte para la API de S3 y para {% data variables.product.prodname_registry %} en tu empresa.

Esta guía de inicio rápido te muestra cómo configurar MinIO utilizando Docker para usarlo con el {% data variables.product.prodname_registry %}, peto tienes otras opciones para administrar MinIO aparte de Docker. Para más información sobre MinIO, vea la [documentación oficial de MinIO](https://docs.min.io/).

## 1. Elección de un modo de MinIO para las necesidades

| Modo de MinIO | Optimizado para | Infraestructura de almacenamiento requerida |
|----|----|----|
| MinIO Autónomo (en un solo host) | Configuración rápida |  N/D |
| MinIO Agrupado (también conocido como MinIO distribuído)|  Seguridad de los datos | Servidores de almacenamiento que se ejecutan en un agrupamiento |

Para más información sobre las opciones, vea la [documentación oficial de MinIO](https://docs.min.io/).

## 2. Instalación, ejecución e inicio de sesión en MinIO

1. Configura tus variables de ambiente preferidas para MinIO.

    En estos ejemplos se usa `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Instala MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Para más información, vea la "[Guía de inicio rápido de MinIO](https://docs.min.io/docs/minio-quickstart-guide)" oficial.

3. Inicia sesión en MinIO utilizando tu llave de acceso y secreto de MinIO.

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

    Puedes acceder a tus llaves de MinIO utilizando las variables de ambiente:

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Ejecuta MinIO en el modo que hayas elegido.

   * Ejecuta MinIO utilizando Docker en un host único:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     Para más información, vea la "[Guía de inicio rápido de Docker en MinIO](https://docs.min.io/docs/minio-docker-quickstart-guide.html)".

   * Ejecuta MinIO utilizando Docker como un agrupamiento. Este despliegue de MinIO utiliza diversos hosts y el código de borrado de MinIO para tener la mayor protección de los datos. Para ejecutar MinIO en modo de clúster, consulta la "[Guía de inicio rápido de MinIO distribuido](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)".

## 3. Creación del cubo de MinIO para {% data variables.product.prodname_registry %}

1. Instala el cliente de MinIO.  

    ```shell
    $ docker pull minio/mc
    ```

2. Crea un bucket con una URL de host a la que {% data variables.product.prodname_ghe_server %} pueda acceder.

   * Ejemplos de despliegues locales:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     Este ejemplo se puede emplear para MinIO independiente.

   * Ejemplo de despliegues en agrupamiento:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Pasos siguientes

Para terminar de configurar el almacenamiento para el {% data variables.product.prodname_registry %}, necesitarás copiar la URL de almacenamiento de MinIO:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Para obtenerlos pasos siguientes, vea "[Habilitación de {% data variables.product.prodname_registry %} con MinIO](/admin/packages/enabling-github-packages-with-minio)".
