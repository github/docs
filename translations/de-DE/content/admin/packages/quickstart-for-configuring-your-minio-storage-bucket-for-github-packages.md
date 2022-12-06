---
title: Schnellstart zum Konfigurieren deines MinIO-Speicherbuckets für GitHub Packages
intro: 'Konfiguriere deinen benutzerdefinierten MinIO-Speicherbucket für die Verwendung mit {% data variables.product.prodname_registry %}.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166553'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

Bevor du {% data variables.product.prodname_registry %} auf {% data variables.location.product_location_enterprise %} aktivieren und konfigurieren kannst, musst du deine Drittanbieter-Speicherlösung vorbereiten.

MinIO bietet Objektspeicher, der die S3-API und {% data variables.product.prodname_registry %} für dein Unternehmen unterstützen.

In diesem Schnellstart wird gezeigt, wie du MinIO mithilfe von Docker für die Verwendung mit {% data variables.product.prodname_registry %} einrichten kannst. Du kannst MinIO neben Docker auch mit anderen Programmen verwalten. Weitere Informationen zu MinIO findest du in der offiziellen [Dokumentation zu MinIO](https://docs.min.io/).

## 1. Wähle einen MinIO-Modus für deine Anforderungen aus.

| MinIO-Modus | Optimiert für | Speicherinfrastruktur erforderlich |
|----|----|----|
| Eigenständige MinIO-Instanz (auf einem einzelnen Host) | Schnelle Einrichtung |  – |
| Gruppierte MinIO-Instanz (auch als „Distributed MinIO“ bezeichnet)|  Datensicherheit | Speicherserver, die auf einem Cluster ausgeführt werden |

Weitere Informationen zu den Optionen findest du in der offiziellen [Dokumentation zu MinIO](https://docs.min.io/).

## 2. Installiere MinIO, führe es aus, und melde dich an.

1. Richte deine bevorzugten Umgebungsvariablen für MinIO ein.

    In diesem Beispiel wird `MINIO_DIR` verwendet:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Installiere MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Weitere Informationen findest du im offiziellen [Schnellstartleitfaden zu MinIO](https://docs.min.io/docs/minio-quickstart-guide).

3. Melde dich mit deinem Zugriffsschlüssel und dem Geheimnis bei MinIO an.

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

    Du kannst mithilfe der Umgebungsvariablen auf deine MinIO-Schlüssel zugreifen:

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Führe MinIO im ausgewählten Modus aus.

   * Führe MinIO mit Docker als einzelnen Host aus:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     Weitere Informationen findest du unter [Schnellstartleitfaden für MinIO auf Docker](https://docs.min.io/docs/minio-docker-quickstart-guide.html).

   * Führe MinIO mit Docker als Cluster aus. Diese MinIO-Bereitstellung verwendet mehrere Hosts und das Erasure Coding von MinIO, um den besten Datenschutz zu gewährleisten. Informationen zum Ausführen von MinIO im Clustermodus findest du im [Schnellstartleitfaden für Distributed MinIO](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## 3. Erstelle deinen eigenen MinIO-Bucket für {% data variables.product.prodname_registry %}.

1. Installiere den MinIO-Client.  

    ```shell
    $ docker pull minio/mc
    ```

2. Erstelle einen Bucket mit einer Host-URL, auf die {% data variables.product.prodname_ghe_server %} zugreifen kann.

   * Hier findest du ein Beispiel für lokale Bereitstellungen:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     Dieses Beispiel kann für eigenständige MinIO-Instanzen verwendet werden.

   * Hier findest du ein Beispiel für gruppierte Bereitstellungen:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Nächste Schritte

Um das Konfigurieren des Speichers für {% data variables.product.prodname_registry %} abzuschließen, musst du die MinIO-Speicher-URL kopieren:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Weitere Schritte findest du unter [Aktivieren von {% data variables.product.prodname_registry %} mit MinIO](/admin/packages/enabling-github-packages-with-minio).
