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
shortTitle: Inicio rápido para MinIO
---

{% data reusables.package_registry.packages-ghes-release-stage %}

Antes de que puedas habilitar y configurar el {% data variables.product.prodname_registry %} en {% data variables.product.product_location_enterprise %}, deberás preparar tu solución de almacenamiento externo.

MinIO ofrece almacenamiento de objetos con soporte para la API de S3 y para {% data variables.product.prodname_registry %} en tu empresa.

Esta guía de inicio rápido te muestra cómo configurar MinIO utilizando Docker para usarlo con el {% data variables.product.prodname_registry %}, peto tienes otras opciones para administrar MinIO aparte de Docker. Para obtener más información acerca de MinIO, consulta los [documentos oficiales de MinIO](https://docs.min.io/).

## 1. Elige un modo de MinIO de acuerdo con tus necesidades

| Modo de MinIO                                            | Optimizado para                                                 | Infraestructura de almacenamiento requerida                     |
| -------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| MinIO Autónomo (en un solo host)                         | Configuración rápida                                            | N/A                                                             |
| MinIO como una puerta de enlace de NAS                   | NAS (Almacenamiento adjunto a la red, por sus siglas en inglés) | Dispositivos NAS                                                |
| MinIO Agrupado (también conocido como MinIO distribuído) | Seguridad de datos                                              | Servidores de almacenamiento que se ejecutan en un agrupamiento |

Para obtener más información acerca las opciones que tienes, consulta los [documentos oficiales de MinIO](https://docs.min.io/).

{% warning %}

**Advertencia**: MinIO anunció la eliminación de MinIO Gateways. Desde el 1 de junio de 2022, tanto el soporte como las correcciones de errores para la implementación de la puerta de enlace de la NAS de MinIO estarán disponibles únicamente para los clientes con suscripciones de pago a través de su contrato de soporte LTS. Si quieres seguir utilizando MinIO Gateways con {% data variables.product.prodname_registry %}, te recomendamos migrarte al soporte LTS de MinIO. Para obtener más información, consulta el [programa para eliminar a MinIO Gateway para GCS, Azure, HDFS](https://github.com/minio/minio/issues/14331) en el repositorio minio/minio.

Otros modos de MinIO siguen disponibles con el soporte estándar.

{% endwarning %}

## 2. Instala, ejecuta e inicia sesión en MinIO

1. Configura tus variables de ambiente preferidas para MinIO.

    Estos ejemplos utilizan `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Instala MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Para obtener más información, consulta la [Guía de inicio rápido oficial de MinIO](https://docs.min.io/docs/minio-quickstart-guide)".

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

     Para obtener más información, consulta la "[Guía de inicio rápido de Docker para MinIO](https://docs.min.io/docs/minio-docker-quickstart-guide.html)".

   * Ejecuta MinIO utilizando Docker como una puerta de enlace de NAS:

     Esta configuración es útil para los despliegues en donde ya exista una NAS que quieras utilizar como respaldo de almacenamiento para el {% data variables.product.prodname_registry %}.

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio gateway nas /data
     ```

   * Ejecuta MinIO utilizando Docker como un agrupamiento. Este despliegue de MinIO utiliza diversos hosts y el código de borrado de MinIO para tener la mayor protección de los datos. Para ejecutar MinIO en modo de agrupamiento, consulta la "[Guía Rápida para MinIO Distribuído](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)."

## 3. Crea tu bucket de MinIO para {% data variables.product.prodname_registry %}

1. Instala el cliente de MinIO.

    ```shell
    $ docker pull minio/mc
    ```

2. Crea un bucket con una URL de host a la que {% data variables.product.prodname_ghe_server %} pueda acceder.

   * Ejemplos de despliegues locales:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc <em>BUCKET-NAME</em>
     ```

     Este ejemplo puede utilizarse para la versión autónoma de MinIO o para MinIO como puerta de enlace de NAS.

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

Para los pasos siguientes, consulta la sección "[Habilitar el {% data variables.product.prodname_registry %} con MinIO](/admin/packages/enabling-github-packages-with-minio)".
