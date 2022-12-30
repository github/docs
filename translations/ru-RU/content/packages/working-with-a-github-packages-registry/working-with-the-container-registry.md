---
title: Работа с реестром контейнеров
intro: 'Вы можете хранить образы Docker и OCI и управлять ими в {% data variables.product.prodname_container_registry %}, в котором используется пространство имен `https://{% data reusables.package_registry.container-registry-hostname %}` для пакета.'
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
ms.openlocfilehash: e22f7f660b76e41888bb8ae272ecb336fc273ff4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099060'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Сведения о {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %}

{% ifversion ghes > 3.4 %}

Чтобы использовать {% data variables.product.prodname_container_registry %} ы {% data variables.product.product_name %}, администратор сайта должен сначала настроить {% data variables.product.prodname_registry %} для вашего экземпляра **и** включить изоляцию поддомена. Дополнительные сведения см. в разделах [Начало работы с пакетами GitHub для вашего предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise) и [Включение изоляции поддомена](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation).

{% endif %}

## Сведения о поддержке {% data variables.product.prodname_container_registry %}

В настоящее время {% data variables.product.prodname_container_registry %} поддерживает следующие форматы образов контейнеров:

* [Манифест версии 2 образа Docker, схема 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Спецификации Open Container Initiative (OCI)](https://github.com/opencontainers/image-spec)

При установке или публикации образа Docker {% data variables.product.prodname_container_registry %} поддерживает внешние слои, такие как образы Windows.

## Проверка подлинности {% data variables.product.prodname_container_registry %}

{% ifversion fpt or ghec or ghes > 3.4 %} Чтобы пройти проверку подлинности в {% data variables.product.prodname_container_registry %} (`ghcr.io`) в рабочем процессе {% data variables.product.prodname_actions %}, используйте `GITHUB_TOKEN` для обеспечения оптимальной безопасности и удобства работы. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %} {% endif %}

{% ghes ifversion %} Убедитесь, что вы замените `HOSTNAME` {% данных variables.location.product_location_enterprise %} имя узла или IP-адрес в примерах ниже.{ % endif %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

## Отправка образов контейнеров

В этом примере отправляется последняя версия `IMAGE_NAME`.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

В этом примере отправляется версия `2.5` образа.
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:2.5
  ```

При первой публикации пакета для параметра видимости по умолчанию выбирается закрытый доступ. Сведения об изменении видимости или настройке разрешений доступа см. в разделе [Настройка контроля доступа и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

## Вытягивание образов контейнеров

### Вытягивание по хэшу

Чтобы всегда использовать один и тот же образ, можно указать точную версию образа контейнера для вытягивания, задав значение SHA `digest`.

1. Чтобы найти значение хэша SHA, используйте `docker inspect` или `docker pull`, а затем скопируйте значение SHA после `Digest:`
  ```shell
  $ docker inspect {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```
2. При необходимости удалите образ локально.
  ```shell
  $ docker rmi  {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  ```

3. Вытяните образ контейнера с `@YOUR_SHA_VALUE` после имени образа.
  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

### Вытягивание по имени

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME
  ```

### Вытягивание по имени и версии

Пример интерфейса командной строки Docker с образом, извлеченным по имени и тегу версии `1.14.1`:
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

### Вытягивание по имени и последней версии

  ```shell
  $ docker pull {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  > {% data reusables.package_registry.container-registry-hostname %}/user/image-name:latest
  ```

## Сборка образов контейнеров

В этом примере собирается образ `hello_docker`:
  ```shell
  $ docker build -t hello_docker .
  ```

## Добавление тегов в образы контейнеров

1. Найдите идентификатор образа Docker, к которому вы хотите добавить тег.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Добавьте тег к образу Docker, указав идентификатор образа, желаемое имя образа и место размещения.
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:latest
  ```

## Маркировка образов контейнеров

{% данных reusables.package_registry.about-docker-labels %} Дополнительные сведения о метках Docker [см.](https://docs.docker.com/engine/reference/builder/#label) в официальной документации Docker и [предварительно определенных ключах заметок](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) в репозитории `opencontainers/image-spec` .

Следующие метки поддерживаются в {% данных variables.product.prodname_container_registry %}. Поддерживаемые метки будут отображаться на странице пакета для изображения.

Метка | Описание
------|------------
| `org.opencontainers.image.source` | URL-адрес репозитория, связанного с пакетом. Дополнительные сведения см. в разделе [Подключение репозитория к пакету](/packages/learn-github-packages/connecting-a-repository-to-a-package#connecting-a-repository-to-a-container-image-using-the-command-line).
| `org.opencontainers.image.description` | Текстовое описание ограничено 512 символами. Это описание появится на странице пакета под именем пакета.
| `org.opencontainers.image.licenses` | Идентификатор лицензии SPDX, например MIT, ограничен 256 символами. Лицензия появится на странице пакета на боковой панели "Сведения". Дополнительные сведения см. в [списке лицензий SPDX](https://spdx.org/licenses/).

Чтобы добавить метки к изображению, рекомендуется использовать инструкцию`LABEL`.`Dockerfile` Например, если вы являетесь пользователем `monalisa` и являетесь владельцем `my-repo`, а образ распространяется согласно условиям лицензии MIT, вы добавите в свои `Dockerfile`строки следующие строки:

```dockerfile
LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/monalisa/my-repo
LABEL org.opencontainers.image.description="My container image"
LABEL org.opencontainers.image.licenses=MIT
```

Кроме того, можно добавить метки в образ во время сборки `docker build` с помощью команды.

```shell
$ docker build \
 --label "org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/monalisa/my-repo" \
 --label "org.opencontainers.image.description=My container image" \
 --label "org.opencontainers.image.licenses=MIT"
