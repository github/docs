---
title: Работа с реестром Docker
intro: '{% ifversion fpt or ghec %}Вместо реестра Docker теперь используется {% data variables.product.prodname_container_registry %}.{% else %}Вы можете отправлять и извлекать образы Docker с помощью реестра Docker для {% data variables.product.prodname_registry %}.{% endif %}'
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
ms.openlocfilehash: 9cb9971b42e348e4c2b70bae7dbcccc24c4fbf89
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094532'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

Реестра Docker {% data variables.product.prodname_dotcom %} (который использовал пространство имен `docker.pkg.github.com`) был заменен на {% data variables.product.prodname_container_registry %} (который использует пространство имен `https://ghcr.io`). {% data variables.product.prodname_container_registry %} предоставляет такие преимущества, как детализированные разрешения и оптимизация хранилища для образов Docker.

Образы Docker, которые ранее хранились в реестре Docker, автоматически переносятся в {% data variables.product.prodname_container_registry %}. Дополнительные сведения см. в разделах "[Миграция в {% data variables.product.prodname_container_registry %} из реестра Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" и "[Работа с {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Сведения о поддержке Docker

При установке или публикации образа Docker реестр Docker в настоящее время не поддерживает внешние слои, такие как образы Windows.

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Проверка подлинности с помощью {% данных variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Вы можете пройти проверку подлинности {% data variables.product.prodname_registry %} с помощью Docker, используя команду входа `docker`.

Чтобы обеспечить безопасность учетных данных, рекомендуется сохранить данные {% variables.product.pat_generic %} в локальном файле на компьютере и использовать флаг Docker `--password-stdin` , который считывает маркер из локального файла.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %} {% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login docker.HOSTNAME -u USERNAME --password-stdin
```
{% endraw %} {% ifversion ghes %} Если в вашем экземпляре отключена изоляция поддоменов:

{% raw %}
 ```shell
 $ cat ~/TOKEN.txt | docker login HOSTNAME -u USERNAME --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

Чтобы использовать эту команду входа, замените `USERNAME` {% данных variables.product.product_name %} именем пользователя{% ifversion ghes или ghae %}, `HOSTNAME` URL-адресом для {% данных variables.location.product_location %},{% endif %} и `~/TOKEN.txt` путем к файлу к {% данных variables.product.pat_generic %} для {% данных variables.product.product_name %}.

Дополнительные сведения см. в разделе [Вход в Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin).

## Публикация изображения

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Примечание.** Имена изображений должны содержать только строчные буквы.

{% endnote %}

{% data variables.product.prodname_registry %} поддерживает несколько образов Docker верхнего уровня для каждого репозитория. Репозиторий может содержать любое количество тегов изображений. Вы можете столкнуться со снижением производительности при публикации или установке образов Docker размером более 10 ГБ (слои будут ограничены 5 ГБ каждый). Дополнительные сведения см. в разделе "[Тег Docker](https://docs.docker.com/engine/reference/commandline/tag/)" в документации по Docker.

{% data reusables.package_registry.viewing-packages %}

1. Определите имя и идентификатор образа Docker с помощью `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > IMAGE_NAME        VERSION    IMAGE_ID       4 weeks ago  1.11MB
  ```
2. Используя идентификатор образа Docker, пометьте образ Docker, заменив *OWNER* именем учетной записи пользователя или организации, которая владеет репозиторием, *репозиторием с именем репозитория* , содержащего проект, *IMAGE_NAME* с именем пакета или образа,{% ifversion ghes или ghae %} *HOSTNAME* с именем узла {% данных variables.location.product_location %},{% endif %} и *VERSION* с версией пакета во время сборки.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag IMAGE_ID docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %} {% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}
  ```shell
  $ docker tag IMAGE_ID docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:
  ```shell
  $ docker tag IMAGE_ID HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %} {% endif %}
3. Если вы еще не создали образ Docker для пакета, создайте образ, заменив *OWNER* именем учетной записи пользователя или организации, которая владеет репозиторием, *репозиторий* с именем репозитория, содержащего проект, *IMAGE_NAME* с именем пакета или образа, *VERSION* версией пакета во время сборки,{% ifversion ghes или ghae %} *HOSTNAME* с именем узла {% данных variables.location.product_location %}, {% endif %} и *PATH* к изображению, если он отсутствует в текущем рабочем каталоге.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% else %} {% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}
  ```shell
  $ docker build -t docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:
  ```shell
  $ docker build -t HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION PATH
  ```
  {% endif %} {% endif %}
4. Опубликуйте изображение в {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% else %} {% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}
  ```shell
  $ docker push docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:
  ```shell
  $ docker push HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION
  ```
  {% endif %} {% endif %} {% note %}

  **Примечание.** Необходимо отправить образ с помощью `IMAGE_NAME:VERSION` и не использовать `IMAGE_NAME:SHA`.

  {% endnote %}

### Пример публикации образа Docker

{% ifversion ghes %} В этих примерах предполагается, что у экземпляра включена изоляция поддомена.
{% endif %}

Вы можете опубликовать образ `monalisa` версии 1.0 в репозитории `octocat/octo-app` с помощью идентификатора образа.

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
$ docker tag c75bebcdd211 docker.HOSTNAME/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```

{% endif %}

Вы можете опубликовать новый образ Docker в первый раз и присвоить ему имя `monalisa`.

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
$ docker build -t docker.HOSTNAME/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.HOSTNAME/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Скачивание изображения

{% data reusables.package_registry.docker_registry_deprecation_status %}

Команду можно использовать `docker pull` для установки образа Docker из {% данных variables.product.prodname_registry %}, заменив *OWNER* именем учетной записи пользователя или организации, которой принадлежит репозиторий, *репозиторий* с именем репозитория, который содержит проект, *IMAGE_NAME* с именем пакета или образа,{% ifversion ghes или ghae %} *HOSTNAME* с именем узла {% данных variables.location.product_location %},  {% endif %} и *TAG_NAME* с тегом для образа, который требуется установить.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}
```shell
$ docker pull docker.HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:
```shell
$ docker pull HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME
```
{% endif %} {% endif %}

{% note %}

**Примечание.** Необходимо получить образ с помощью `IMAGE_NAME:VERSION` и не использовать `IMAGE_NAME:SHA`.

{% endnote %}

## Дополнительные материалы

- "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)"

{% endif %}  <!-- End of main versioning block -->
