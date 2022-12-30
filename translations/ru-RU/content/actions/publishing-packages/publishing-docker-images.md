---
title: Публикация образов Docker
shortTitle: Publish Docker images
intro: 'Образы Docker можно публиковать в реестре, например Docker Hub или {% data variables.product.prodname_registry %}, в рамках рабочего процесса непрерывной интеграции (CI).'
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
ms.openlocfilehash: 4e34516985f7e96bccc24820b64669a8bd9102bc
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010056'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, который выполняет сборку Docker, а затем публикует образы Docker в Docker Hub или {% data variables.product.prodname_registry %}. С помощью одного рабочего процесса можно публиковать образы в одном или нескольких реестрах.

{% note %}

**Примечание.** Если требуется выполнить отправку в другой сторонний реестр Docker, пример в разделе «[Публикация образов в {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)» может послужить хорошим шаблоном.

{% endnote %}

## Предварительные требования

Рекомендуется иметь базовое представление о параметрах конфигурации рабочих процессов, а также о том, как создавать файл рабочего процесса. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Кроме того, могут быть полезны базовые знания в следующих областях:

- [Зашифрованные секреты](/actions/reference/encrypted-secrets)
- [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow){% ifversion fpt or ghec %}
- [Работа с {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry){% else %}
- [Работа с реестром Docker](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry){% endif %}

## Сведения о конфигурации образа

В этом руководстве предполагается, что у вас имеется полное определение образа Docker, хранящегося в репозитории {% data variables.product.prodname_dotcom %}. Например, репозиторий должен содержать _Dockerfile_ и все остальные файлы, необходимые для выполнения сборки Docker и создания образа.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% данных reusables.package_registry.about-docker-labels %} Дополнительные сведения см. в разделе "[Работа с {% данных variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#labelling-container-images)".

{% endif %}

В этом руководстве мы будем использовать действие `build-push-action` Docker для сборки образа Docker и отправки его в один или несколько реестров Docker. Дополнительные сведения см. на веб-сайте [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Публикация образов в Docker Hub

{% data reusables.actions.release-trigger-workflow %}

В приведенном ниже примере рабочего процесса мы используем действия Docker `login-action` и `build-push-action` для сборки образа Docker и в случае успешного выполнения сборки отправляем созданный образ в Docker Hub.

Для отправки в Docker Hub потребуется учетная запись Docker Hub и создания репозитория Docker Hub. Дополнительные сведения см. в разделе «[Отправка образа контейнера Docker в Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)» документации по Docker.

Ниже приведены параметры `login-action`, необходимые для Docker Hub.
* `username` и `password`: это имя пользователя и пароль Docker Hub. Рекомендуется хранить имя пользователя и пароль Docker Hub в качестве секретов, чтобы не раскрыть их в файле рабочего процесса. Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

Ниже приведен параметр `metadata-action`, необходимый для Docker Hub.
* `images`: пространство имен и имя образа Docker, который вы собираете или отправляете в Docker Hub.

Ниже приведены параметры `build-push-action`, необходимые для Docker Hub.
* `tags`: тег нового образа в формате `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Можно задать один тег, как показано ниже, или указать несколько тегов в виде списка.
* `push`: если задано значение `true`, образ будет отправлен в реестр в случае успешной сборки.

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

Приведенный выше рабочий процесс извлекает репозиторий {% data variables.product.prodname_dotcom %}, использует `login-action` для входа в реестр, а затем использует действие `build-push-action` для создания образа Docker на основе `Dockerfile` репозитория, отправки образа в Docker Hub и применения тега к образу.

## Публикация образов в {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

В приведенном ниже примере рабочего процесса мы используем действия Docker `login-action`{% ifversion fpt or ghec %}, `metadata-action`{% endif %} и `build-push-action` для сборки образа Docker и, если сборка выполнена успешно, отправляем собранный образ в {% data variables.product.prodname_registry %}.

Ниже приведены параметры `login-action`, необходимые для {% data variables.product.prodname_registry %}.
* `registry`: необходимо задать значение {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: можно использовать контекст {% raw %}`${{ github.actor }}`{% endraw %} для автоматического использования имени пользователя, активировавшего выполнение рабочего процесса. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts#github-context)».
* `password`: для пароля можно использовать автоматически созданный секрет `GITHUB_TOKEN`. Дополнительные сведения см. в разделе «[Проверка подлинности с помощью GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)».

{% ifversion fpt or ghec %} Ниже приведен параметр `metadata-action`, необходимый для {% data variables.product.prodname_registry %}.
* `images`: пространство имен и имя образа Docker, который вы собираете.
{% endif %}

Ниже приведены параметры `build-push-action`, необходимые для {% data variables.product.prodname_registry %}.{% ifversion fpt or ghec %}.
* `context`: определяет контекст сборки как набор файлов, расположенных по указанному пути.{% endif %}
* `push`: если задано значение `true`, в случае успешной сборки образ будет отправлен в реестр.{% ifversion fpt or ghec %}
* `tags` и `labels`: заполняются выходными данными из `metadata-action`.{% else %}
* `tags`: необходимо задать в формате {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. 
  
   Например, для образа с именем `octo-image`, хранящегося на {% data variables.product.prodname_ghe_server %} в `https://HOSTNAME/octo-org/octo-repo`, для параметра `tags` необходимо задать значение `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`.
  
   Например, для образа с именем`octo-image`, хранящегося на {% data variables.product.prodname_dotcom %} в `http://github.com/octo-org/octo-repo`, для параметра `tags` необходимо задать значение `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %}. Можно задать один тег, как показано ниже, или указать несколько тегов в виде списка.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

Приведенный выше рабочий процесс активируется отправкой в ветвь «выпуска». Он извлекает репозиторий GitHub и использует `login-action` для входа в {% data variables.product.prodname_container_registry %}. Затем он извлекает метки и теги для образа Docker. Наконец, он использует действие `build-push-action` для сборки образа и его публикации на {% data variables.product.prodname_container_registry %}.

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

Приведенный выше рабочий процесс извлекает репозиторий {% data variables.product.product_name %}, использует `login-action` для входа в реестр, а затем использует действие `build-push-action` для сборки образа Docker на основе `Dockerfile` репозитория, отправки образа в реестр Docker и применения SHA фиксации и версии выпуска в качестве тегов образа.
{% endif %}

## Публикация образов в Docker Hub и {% data variables.product.prodname_registry %}

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

В одном рабочем процессе образ Docker можно опубликовать в нескольких реестрах с помощью действий `login-action` и `build-push-action` для каждого реестра.

В следующем примере рабочего процесса используются шаги из предыдущих разделов («[Публикация образов в Docker Hub](#publishing-images-to-docker-hub)» и «[Публикация образов в {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)») для создания одного рабочего процесса, который выполняет отправку в оба реестра.

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

Приведенный выше рабочий процесс извлекает репозиторий {% data variables.product.product_name %}, дважды использует `login-action` для входа в оба реестра и создает теги и метки с помощью действия `metadata-action`.
Затем действие `build-push-action` собирает и отправляет образ Docker в Docker Hub и {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}реестр Docker{% endif %}.
