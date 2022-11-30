---
title: Краткое руководство по настройке контейнера хранилища MinIO для пакетов GitHub
intro: 'Настройте пользовательский контейнер хранилища MinIO для применения с {% data variables.product.prodname_registry %}.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166556'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

Прежде чем включить и настроить {% data variables.product.prodname_registry %} в {% data variables.location.product_location_enterprise %}, необходимо подготовить стороннее решение для хранения данных.

MinIO предлагает хранилище объектов с поддержкой API S3 и {% data variables.product.prodname_registry %} на предприятии.

В этом кратком руководстве показано, как настроить MinIO с помощью Docker для использования с {% data variables.product.prodname_registry %}, но у вас кроме Docker существуют другие варианты управления MinIO. Дополнительные сведения о MinIO см. официальные [документы MinIO](https://docs.min.io/).

## 1. Выберите режим MinIO для ваших потребностей

| Режим MinIO | Оптимизировано для | Требуемая инфраструктура хранилища |
|----|----|----|
| Автономная minIO (на одном узле) | Быстрая настройка |  Н/Д |
| Кластерное MinIO (также называется распределенный MinIO)|  Безопасность данных | Работающие в кластерах серверы серверов хранилищ |

Дополнительные сведения о ваших параметрах см. в официальных [документах MinIO](https://docs.min.io/).

## 2. Установка, запуск и вход в MinIO

1. Настройте предпочитаемые переменные среды для MinIO.

    В этих примерах используется `MINIO_DIR`:
    ```shell
    $ export MINIO_DIR=$(pwd)/minio
    $ mkdir -p $MINIO_DIR
    ```

2. Установите MinIO.

    ```shell
    $ docker pull minio/minio
    ```
    Дополнительные сведения см. в официальном [руководстве по началу работы с MinIO](https://docs.min.io/docs/minio-quickstart-guide).

3. Войдите в MinIO с помощью ключа доступа и секрета MinIO.

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

    Доступ к ключам MinIO можно получить с помощью переменных среды:

    ```shell
    $ echo $MINIO_ACCESS_KEY
    $ echo $MINIO_SECRET_KEY
    ```

4. Запустите MinIO в выбранном режиме.

   * Запустите MinIO с помощью Docker на одном узле:

     ```shell
     $ docker run -p 9000:9000 \
             -v $MINIO_DIR:/data \
             -e "MINIO_ACCESS_KEY=$MINIO_ACCESS_KEY" \
             -e "MINIO_SECRET_KEY=$MINIO_SECRET_KEY" \
             minio/minio server /data
     ```

     Дополнительные сведения см. в [кратком руководстве по MinIO Docker](https://docs.min.io/docs/minio-docker-quickstart-guide.html).

   * Запустите MinIO с помощью Docker в качестве кластера. В этом развертывании MinIO используется несколько узлов и стирание кода MinIO для наиболее надежной защиты данных. Сведения о запуске MinIO в режиме кластера см. в статье [Краткое руководство по распределенной MinIO](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## 3. Создайте контейнер MinIO для {% data variables.product.prodname_registry %}

1. Установите клиент MinIO.  

    ```shell
    $ docker pull minio/mc
    ```

2. Создайте контейнер с URL-адресом узла, доступ к которому может получить доступ {% data variables.product.prodname_ghe_server %}.

   * Пример локальных развертываний:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @localhost:9000"
     $ docker run minio/mc BUCKET-NAME
     ```

     Этот пример можно использовать для автономной службы MinIO.

   * Пример кластерных развертываний:

     ```shell
     $ export MC_HOST_minio="http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY} @minioclustername.example.com:9000"
     $ docker run minio/mc mb packages
     ```

## Дальнейшие действия

Чтобы завершить настройку хранилища для {% data variables.product.prodname_registry %}, необходимо скопировать URL-адрес хранилища MinIO:

  ```
  echo "http://${MINIO_ACCESS_KEY}:${MINIO_SECRET_KEY}@minioclustername.example.com:9000"
  ```

Дальнейшие действия см. в статье [Включение {% data variables.product.prodname_registry %} с MinIO](/admin/packages/enabling-github-packages-with-minio).
