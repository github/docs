---
title: Публикация пакетов Java с помощью Gradle
shortTitle: Publish Java packages with Gradle
intro: С помощью Gradle можно опубликовать пакеты Java в реестре в рамках рабочего процесса непрерывной интеграции (CI).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
ms.openlocfilehash: 4627f561ea1a78fff800a7a5d656947e481a2999
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009999'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

{% data reusables.actions.publishing-java-packages-intro %}

## Предварительные требования

Рекомендуется иметь базовое представление о файлах рабочих процессов и параметрах конфигурации. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Дополнительные сведения о создании рабочего процесса CI для проекта Java с помощью Gradle см. в статье "[Создание и тестирование Java с помощью Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)".

Также могут быть полезны базовые знания в следующих областях:

- [Работа с реестром npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Переменные среды](/actions/reference/environment-variables)
- [Зашифрованные секреты](/actions/reference/encrypted-secrets)
- [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow)

## Сведения о конфигурации пакета

Поля `groupId` и `artifactId` в разделе `MavenPublication` файла _build.gradle_ создают уникальный идентификатор пакета, используемый реестрами для связывания пакета с реестром.  Они аналогичный полям `groupId` и `artifactId` файла Maven _pom.xml_.  Дополнительные сведения см. в статье "[Подключаемый модуль публикации Maven](https://docs.gradle.org/current/userguide/publishing_maven.html)" в документации по Gradle.

Файл _build.gradle_ также содержит конфигурацию для репозиториев управления дистрибутивами, в которые Gradle будет публиковать пакеты. Каждый репозиторий должен иметь имя, URL-адрес развертывания и учетные данные для проверки подлинности.

## Публикация пакетов в центральный репозиторий Maven

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется при активации события `release` с типом `created`. Если тесты CI проходят успешно, рабочий процесс публикует пакет в центральный репозитории Maven. Дополнительные сведения о событии `release` см. в статье "[События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows#release)".

Вы можете определить новый репозиторий Maven в блоке публикации файла _build.gradle_, который указывает на репозиторий пакетов.  Например, если развертывание в центральный репозиторий Maven выполнялось с помощью проекта размещения OSSRH, файл _build.gradle_ может указывать репозиторий с именем `"OSSRH"`.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

С помощью этой конфигурации можно создать рабочий процесс, который публикует пакет в центральный репозитории Maven. Для этого нужно выполнить команду `gradle publish`. На этапе развертывания необходимо задать переменные среды для имени пользователя и пароля или маркера, используемого для проверки подлинности в репозитории Maven. Дополнительные сведения см. в статье "[Создание и использование зашифрованных секретов](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Выполняет действие [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) с аргументом `publish` для публикации в репозиторий Maven `OSSRH`. Переменная среды `MAVEN_USERNAME` будет задана с содержимым секрета `OSSRH_USERNAME`, а переменная среды `MAVEN_PASSWORD` — с содержимым секрета `OSSRH_TOKEN`.

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Публикация пакетов в {% data variables.product.prodname_registry %}

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется при активации события `release` с типом `created`. Если тесты CI проходят успешно, рабочий процесс публикует пакет в {% data variables.product.prodname_registry %}. Дополнительные сведения о событии `release` см. в статье "[События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows#release)".

Вы можете определить новый репозиторий Maven в блоке публикации файла _build.gradle_, который указывает на {% data variables.product.prodname_registry %}.  В этой конфигурации репозитория можно также использовать переменные среды, заданные в рабочем процессе CI.  Переменную среды `GITHUB_ACTOR` можно использовать в качестве имени пользователя, а переменную среды `GITHUB_TOKEN`можно задать с помощью секрета `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Например, если организация называется "octocat", а репозиторий называется "hello-world", конфигурация {% data variables.product.prodname_registry %} в файле _build.gradle_ будет выглядеть примерно так, как показано в следующем примере.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

С помощью этой конфигурации можно создать рабочий процесс, который публикует пакет в {% data variables.product.prodname_registry %}. Для этого следует выполнить команду `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Выполняет действие [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) с аргументом `publish` для публикации в {% data variables.product.prodname_registry %}. Переменная среды `GITHUB_TOKEN` будет задана с содержимым секрета `GITHUB_TOKEN`. Ключ `permissions` указывает доступ, разрешенный секретом `GITHUB_TOKEN`.

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Публикация пакетов в центральный репозиторий Maven и {% data variables.product.prodname_registry %}

Вы можете опубликовать пакеты в центральный репозиторий Maven и {% data variables.product.prodname_registry %}, настроив каждый из них в файле _build.gradle_.

Файл _build.gradle_ должен содержать репозиторий для репозитория {% data variables.product.prodname_dotcom %} и поставщика центрального репозитория Maven.

Например, при развертывании в центральный репозиторий с помощью проекта размещения OSSRH может потребоваться указать его в репозитории управления дистрибутивом — `name` должен иметь значение `OSSRH`. При развертывании в {% data variables.product.prodname_registry %} может потребоваться указать его в репозитории управления распределением — `name` должен иметь значение `GitHubPackages`.

Например, если организация называется "octocat", а репозиторий называется "hello-world", конфигурация в файле _build.gradle_ будет выглядеть примерно так, как показано в следующем примере.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

С помощью этой конфигурации можно создать рабочий процесс, который публикует пакет в центральный репозиторий Maven и {% data variables.product.prodname_registry %}. Для этого следует выполнить команду `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Выполняет действие [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) с аргументом `publish` для публикации в репозиторий Maven `OSSRH` и {% data variables.product.prodname_registry %}. Переменная среды `MAVEN_USERNAME` будет задана с содержимым секрета `OSSRH_USERNAME`, а переменная среды `MAVEN_PASSWORD` — с содержимым секрета `OSSRH_TOKEN`. Переменная среды `GITHUB_TOKEN` будет задана с содержимым секрета `GITHUB_TOKEN`. Ключ `permissions` указывает доступ, разрешенный секретом `GITHUB_TOKEN`.

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
