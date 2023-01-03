---
title: Работа с реестром npm
intro: 'Вы можете настроить в npm публикацию пакетов в {% data variables.product.prodname_registry %} и использование пакетов, хранящихся в {% data variables.product.prodname_registry %}, в качестве зависимостей в проекте npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193132'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## Ограничения для опубликованных версий npm

При публикации более 1000 версий пакета npm в {% data variables.product.prodname_registry %} во время использования могут наблюдаться проблемы с производительностью и тайм-ауты.

В будущем в целях улучшения производительности службы вы не сможете публиковать более 1000 версий пакета в {% data variables.product.prodname_dotcom %}. Все версии, опубликованные до достижения этого ограничения, по-прежнему будут доступны для чтения.

Если вы достигнете этого ограничения, рассмотрите возможность удаления версий пакетов или обратитесь в службу поддержки за помощью. Когда это ограничение будет реализовано, в нашу документацию будет включен способ его обхода. Дополнительные сведения см. в статьях [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package) или [Связь со службой поддержки](/packages/learn-github-packages/about-github-packages#contacting-support).
{% endif %}

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

Вы также можете предоставить доступ к пакетам независимо для {% data variables.product.prodname_codespaces %} и {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) и [Обеспечение доступа рабочего процесса к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
{% endif %}

### Проверка подлинности с помощью {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Вы можете пройти проверку подлинности в {% data variables.product.prodname_registry %} с помощью npm, изменив файл *~/.npmrc* для каждого пользователя, чтобы включить {% data variables.product.pat_v1 %} или выполнив вход в npm в командной строке с помощью имени пользователя и {% data variables.product.pat_generic %}.

Чтобы пройти проверку подлинности, добавив {% data variables.product.pat_v1 %} в файл *~/.npmrc* , измените файл *~/.npmrc* для проекта, добавив следующую строку, заменив {% ifversion ghes or ghae %}*HOSTNAME* именем узла {% data variables.location.product_location %} и {% endif %}*TOKEN* на {% data variables.product.pat_generic %}. Если файл *~/.npmrc* не существует, создайте его.

{% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

Для проверки подлинности путем входа в npm используйте `npm login` команду , заменив *USERNAME* именем пользователя {% data variables.product.prodname_dotcom %}, *TOKEN* — {% data variables.product.pat_v1 %}, а *PUBLIC-EMAIL-ADDRESS* — вашим адресом электронной почты.

Если {% data variables.product.prodname_registry %} не является реестром пакета по умолчанию для использования npm, и вы хотите использовать команду `npm audit`, рекомендуется при проверке подлинности в {% data variables.product.prodname_registry %} использовать флаг `--scope` с владельцем пакета.

{% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Публикация пакета

{% note %}

**Примечание.** В именах и областях пакетов должны использоваться только строчные буквы.

{% endnote %}

{% ifversion packages-npm-v2 %} Реестр {% data variables.product.prodname_registry %} хранит пакеты npm в вашей организации или личной учетной записи и позволяет связать пакет с репозиторием. Можно указать, нужно ли наследовать разрешения из репозитория или задавать детализированные разрешения независимо от репозитория.

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

По умолчанию {% data variables.product.prodname_registry %} публикует пакет в репозитории {% data variables.product.prodname_dotcom %}, указанном вами в поле имени файла *package.json*. Например, вы могли бы опубликовать пакет с именем `@my-org/test` в репозитории `my-org/test` {% data variables.product.prodname_dotcom %}. Если вы используете [npm 8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) или более поздней версии, вы можете добавить сводку для страницы со списком пакетов, включив файл *README.md* в каталог пакета. Дополнительные сведения см. в разделах [Работа с package.json](https://docs.npmjs.com/getting-started/using-a-package.json) и [Создание модулей Node.js](https://docs.npmjs.com/getting-started/creating-node-modules) в документации npm.

Вы можете опубликовать несколько пакетов в одном репозитории {% data variables.product.prodname_dotcom %}, включив поле `URL` в файл *package.json*. Дополнительные сведения см. в разделе [Публикация нескольких пакетов в одном репозитории](#publishing-multiple-packages-to-the-same-repository).

Вы можете настроить сопоставление областей для проекта, используя либо локальный *NPMRC-файл* в проекте, либо параметр `publishConfig` в *package.json*. {% data variables.product.prodname_registry %} поддерживает только пакеты npm с ограниченной областью. Имена пакетов с ограниченной областью имеют формат `@owner/name`. Пакеты с ограниченной областью всегда начинаются с символа `@`. Вам может потребоваться обновить имя в файле *package.json*, чтобы использовать имя с ограниченной областью. Например, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### Публикация пакета с помощью локального *NPMRC-файла*

Для настройки сопоставления областей для проекта можно использовать *NPMRC-файл*. В *NPMRC-файле* используйте владельца учетной записи и URL-адрес {% data variables.product.prodname_registry %}, чтобы {% data variables.product.prodname_registry %} знал, куда направлять запросы пакетов. Использование *NPMRC-файла* случайную публикацию другими разработчиками пакета в npmjs.org вместо {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Проверьте имя пакета в файле *package.json* вашего проекта. Поле `name` должно содержать область и имя пакета. Например, если пакет называется "test", и вы публикуете его в организации "My-org" {% data variables.product.prodname_dotcom %}, поле `name` в файле *package.json* должно быть `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### Публикация пакета с помощью `publishConfig` в файле *package.json*

Вы можете использовать элемент `publishConfig` в файле *package.json*, чтобы указать реестр, в котором следует опубликовать пакет. Дополнительные сведения см. в разделе [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) в документации npm.

1. Измените файл *package.json* для вашего пакета и включите запись `publishConfig`.
  {% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## Публикация нескольких пакетов в одном репозитории

Чтобы опубликовать несколько пакетов в одном репозитории, можно включить URL-адрес репозитория {% data variables.product.prodname_dotcom %} в поле `repository` файла *package.json* для каждого пакета.

Чтобы правильно указать URL-адрес репозитория, замените REPOSITORY именем репозитория, содержащего пакет, который вы хотите опубликовать, а OWNER — именем учетной записи пользователя или организации в {% data variables.product.prodname_dotcom %}, которой принадлежит репозиторий.

{% data variables.product.prodname_registry %} будет сопоставляться с репозиторием на основе URL-адреса, а не на основе имени пакета.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Установка пакета

Пакеты можно устанавливать из {% data variables.product.prodname_registry %}, добавляя пакеты в виде зависимостей в файл *package.json* для проекта. Дополнительные сведения об использовании *package.json* в проекте см. в разделе [Работа с package.json](https://docs.npmjs.com/getting-started/using-a-package.json) в документации npm.

По умолчанию вы можете добавлять пакеты из одной организации. Дополнительные сведения см. в разделе [Установка пакетов из других организаций](#installing-packages-from-other-organizations).

Кроме того, вам необходимо добавить в проект *NPMRC-файл*, чтобы все запросы на установку пакетов {% ifversion ghae %}перенаправлялись в{% else %}проходили через{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}При перенаправлении всех запросов пакетов через {% data variables.product.prodname_registry %} вы можете использовать пакеты как с ограниченной, так и с неограниченной областью из *npmjs.org*. Дополнительные сведения см. в разделе [npm-scope](https://docs.npmjs.com/misc/scope) документации npm.{% endif %}

{% ifversion ghae %} По умолчанию можно использовать только пакеты npm, размещенные в вашем предприятии, и нельзя использовать пакеты с неограниченной областью. Дополнительные сведения об определении области пакетов см. в разделе [npm-scope](https://docs.npmjs.com/misc/scope) документации npm. При необходимости поддержка {% data variables.product.prodname_dotcom %} может включить вышестоящий прокси-сервер в npmjs.org. Если вышестоящий прокси-сервер включен, и запрошенный пакет не обнаруживается в вашей организации, {% data variables.product.prodname_registry %} выполняет запрос прокси-сервера в npmjs.org.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Настройте *package.json* в проекте для использования устанавливаемого пакета. Чтобы добавить зависимости пакета в файл *package.json* для {% data variables.product.prodname_registry %}, укажите полное имя пакета, такое как `@my-org/server`. Для пакетов из *npmjs.com* укажите полное имя, такое как `@babel/core` или `@lodash`. Замените `<organization_name>/<package_name>` зависимостью пакета.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. Установите пакет.

  ```shell
  $ npm install
  ```

### Установка пакетов из других организаций

По умолчанию вы можете использовать только пакеты {% data variables.product.prodname_registry %} из одной организации. Если вы хотите перенаправлять запросы пакетов нескольким организациям и пользователям, можно добавить дополнительные строки в *NPMRC-файл* , заменив {% ifversion ghes or ghae %}*HOSTNAME* именем узла {% data variables.location.product_location %}, а {% endif %}*OWNER* — именем пользователя или учетной записи организации, которая владеет репозиторием, содержащим ваш проект.

{% ifversion ghes %} Если в вашем экземпляре включена изоляция поддоменов: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Использование официального реестра NPM

{% data variables.product.prodname_registry %} позволяет получать доступ к официальному реестру NPM в `registry.npmjs.com`, если ваш администратор {% data variables.product.prodname_ghe_server %} включил эту функцию. Дополнительные сведения см. в разделе [Подключение к официальному реестру NPM](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
