---
title: Подключение репозитория к пакету
intro: 'Вы можете подключить репозиторий к образу контейнера на {% данных variables.location.product_location %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/connecting-a-repository-to-a-container-image
  - /packages/guides/connecting-a-repository-to-a-container-image
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Connect a repository
ms.openlocfilehash: f13907e510c11add3ab2a24d060b275daa3aa855
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094668'
---
При подключении репозитория к пакету на целевой странице пакета отображаются сведения и ссылки из репозитория, такие как README.

## Подключение репозитория к пользовательскому пакету на {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-user-level %}

{% data reusables.package_registry.repository_connection_steps %}

## Подключение репозитория к пакету организации на {% data variables.product.prodname_dotcom %}

{% data reusables.package_registry.package-settings-from-org-level %}

{% data reusables.package_registry.repository_connection_steps %}

{% ifversion fpt or ghec or ghes > 3.4 %}
## Подключение репозитория к образу контейнера с помощью командной строки

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

1. В Dockerfile добавьте эту строку, заменив {% ifversion ghes %}`HOSTNAME`, {% endif %}`OWNER` и `REPO` на свои сведения:

 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPO
 ```
 Например, если вы являетесь пользователем `monalisa` и владельцем `my-repo`, а {% данных variables.location.product_location %} — это `github.companyname.com`имя узла, вы добавите эту строку в файл Dockerfile:
 ```shell
 LABEL org.opencontainers.image.source=https://{% ifversion fpt or ghec %}github.com{% else %}{% data reusables.package_registry.container-registry-example-hostname %}{% endif %}/monalisa/my-repo
 ```
 Дополнительные сведения см. в разделе [LABEL](https://docs.docker.com/engine/reference/builder/#label) в официальной документации по Docker и в разделе [Предварительно определенные ключи заметок](https://github.com/opencontainers/image-spec/blob/master/annotations.md#pre-defined-annotation-keys) в репозитории `opencontainers/image-spec`.

2. Соберите образ контейнера. В этом примере создается образ из файла Dockerfile в текущем каталоге и присваивается имя образа `hello_docker`.

  ```shell
  $ docker build -t hello_docker .
  ```
3. При необходимости просмотрите сведения об образе Docker, который вы хотите пометить.
  ```shell
  $ docker images
  > REPOSITORY                                                    TAG                 IMAGE ID            CREATED             SIZE
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > {% data reusables.package_registry.container-registry-example-hostname %}/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                                   latest              fce289e99eb9        16 months ago       1.84kB
  ```

4. Пометьте образ Docker, указав имя образа и место размещения.
  ```shell
  $ docker tag IMAGE_NAME {% data reusables.package_registry.container-registry-hostname %}/OWNER/NEW_IMAGE_NAME:TAG
  ```
  Пример:
  ```shell
  $ docker tag 38f737a91f39 {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```

5. Если вы еще не сделали этого, выполните проверку подлинности, чтобы войти в {% data variables.product.prodname_container_registry %}. Дополнительные сведения см. в разделе [Проверка подлинности для входа в {% data variables.product.prodname_container_registry %}](/packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images#authenticating-to-the-container-registry).
    {% raw %}
    ```shell
    $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
    > Login Succeeded
    ```
    {% endraw %}
6. Отправка образа контейнера в {% data variables.product.prodname_container_registry %}
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-hostname %}/OWNER/IMAGE-NAME:TAG
  ```
  Пример:
  ```shell
  $ docker push {% data reusables.package_registry.container-registry-example-hostname %}/monalisa/hello_docker:latest
  ```
{% endif %}
