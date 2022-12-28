---
title: Публикация пакетов Java с помощью Maven
shortTitle: Publish Java packages with Maven
intro: С помощью Maven можно опубликовать пакеты Java в реестре в рамках рабочего процесса непрерывной интеграции (CI).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
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
  - Maven
ms.openlocfilehash: 550a9f52a8471ccd939e98675544f0991bae5f34
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010040'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

{% data reusables.actions.publishing-java-packages-intro %}

## Предварительные требования

Рекомендуется иметь базовое представление о файлах рабочих процессов и параметрах конфигурации. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Дополнительные сведения о создании рабочего процесса непрерывной интеграции для вашего проекта Java с помощью Maven см. на странице [Создание и тестирование Java с помощью Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven).

Также могут быть полезны базовые знания в следующих областях:

- [Работа с реестром npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Переменные среды](/actions/reference/environment-variables)
- [Зашифрованные секреты](/actions/reference/encrypted-secrets)
- [Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow)

## Сведения о конфигурации пакета

Поля `groupId` и `artifactId` в файле _pom.xml_ создают уникальный идентификатор для вашего пакета, который реестры используют для связывания вашего пакета с реестром.  Дополнительные сведения см. в [руководстве по загрузке артефактов в центральный репозиторий](http://maven.apache.org/repository/guide-central-repository-upload.html) в документации по Apache Maven.

Файл _pom.xml_ также содержит конфигурацию для репозиториев управления распределением, в которые Maven будет развертывать пакеты. Каждый репозиторий должен иметь имя и URL-адрес развертывания. Проверку подлинности для этих репозиториев можно настроить в файле _.m2/settings.xml_ в домашнем каталоге пользователя, запустившего Maven.

Вы можете использовать действие `setup-java` для настройки репозитория развертывания, а также проверки подлинности для этого репозитория. Дополнительные сведения см. на веб-сайте [`setup-java`](https://github.com/actions/setup-java).

## Публикация пакетов в центральный репозиторий Maven

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется при активации события `release` с типом `created`. Если тесты CI проходят успешно, рабочий процесс публикует пакет в центральный репозитории Maven. Дополнительные сведения о событии `release` см. в статье "[События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows#release)".

В этом рабочем процессе вы можете использовать действие `setup-java`. Это действие устанавливает заданную версию JDK в `PATH`, а также настраивает файл Maven _settings.xml_ для публикации пакетов. По умолчанию файл параметров будет настроен для {% data variables.product.prodname_registry %}, но его можно настроить для развертывания в другом реестре пакетов, например в центральном репозитории Maven. Если у вас уже есть репозиторий управления распределением, настроенный в _pom.xml_, вы можете указать этот `id` во время вызова действия `setup-java`.

Например, если вы выполняли развертывание в центральном репозитории Maven через проект размещения OSSRH, ваш файл _pom.xml_ мог указать репозиторий управления распределением с `id` `ossrh`.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

С помощью этой конфигурации вы можете создать рабочий процесс, который публикует ваш пакет в центральном репозитории Maven, указав `id` управления репозиторием в действии `setup-java`. Вам также необходимо указать переменные среды, содержащие имя пользователя и пароль для проверки подлинности в репозитории.

На этапе развертывания вам нужно будет установить переменные среды для имени пользователя, с помощью которого вы будете выполнять проверку подлинности в репозитории, и для секрета, который вы настроили с помощью пароля или маркера для проверки подлинности.  Дополнительные сведения см. в статье «[Создание и использование зашифрованных секретов](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)».

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

Этот рабочий процесс выполняет следующие действия:

1. Извлекает копию репозитория проекта.
1. Настраивает Java JDK, а также файл Maven _settings.xml_ для добавления проверки подлинности для репозитория `ossrh` с использованием переменных среды `MAVEN_USERNAME` и `MAVEN_PASSWORD`.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Публикация пакетов в {% data variables.product.prodname_registry %}

При каждом создании выпуска можно активировать рабочий процесс для публикации пакета. Рабочий процесс в приведенном ниже примере выполняется при активации события `release` с типом `created`. Если тесты CI проходят успешно, рабочий процесс публикует пакет в {% data variables.product.prodname_registry %}. Дополнительные сведения о событии `release` см. в статье "[События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows#release)".

В этом рабочем процессе вы можете использовать действие `setup-java`. Это действие устанавливает указанную версию JDK в `PATH`, а также настраивает файл Maven _settings.xml_ для публикации пакета в {% data variables.product.prodname_registry %}. Сгенерированный файл _settings.xml_ определяет проверку подлинности для сервера с `id` `github`, используя переменную среды `GITHUB_ACTOR` в качестве имени пользователя и переменную среды `GITHUB_TOKEN` в качестве пароля. Переменной среды `GITHUB_TOKEN` присваивается значение специального секрета `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Для проекта на основе Maven вы можете использовать эти параметры, создав репозиторий распределения в файле _pom.xml_ с `id` `github`, который указывает на конечную точку {% data variables.product.prodname_registry %}.

Например, если название вашей организации — octocat, а репозитория — hello-world, то конфигурация {% data variables.product.prodname_registry %} в _pom.xml_ будет похожа на приведенную ниже.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

С помощью этой конфигурации вы можете создать рабочий процесс, который публикует ваш пакет в {% data variables.product.prodname_registry %}, используя автоматически сгенерированный файл _settings.xml_.

```yaml{:copy}
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
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Этот рабочий процесс выполняет следующие действия:

1. Извлекает копию репозитория проекта.
1. Настраивает Java JDK, а также автоматически настраивает файл Maven _settings.xml_, чтобы добавить проверку подлинности для репозитория `github` Maven для использования переменной среды `GITHUB_TOKEN`.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Публикация пакетов в центральный репозиторий Maven и {% data variables.product.prodname_registry %}

Вы можете опубликовать свои пакеты как в центральном репозитории Maven, так и в {% data variables.product.prodname_registry %}, используя действие `setup-java` для каждого реестра.

Убедитесь, что ваш файл _pom.xml_ включает репозиторий управления распределением как для вашего репозитория {% data variables.product.prodname_dotcom %}, так и для вашего поставщика центрального репозитория Maven. Например, если вы выполняете развертывание в центральный репозиторий через проект размещения OSSRH, можно указать его в репозитории управления распределением с `id` со значением `ossrh`. Также вы можете указать {% data variables.product.prodname_registry %} в репозитории управления распределением с `id` со значением`github`.

```yaml{:copy}
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
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Этот рабочий процесс дважды вызывает действие `setup-java`.  При каждом запуске действия `setup-java` оно перезаписывает файл Maven _settings.xml_ для публикации пакетов.  Для проверки подлинности в репозитории файл _settings.xml_ содержит ссылку на репозиторий управления распределением `id`, а также на имя пользователя и пароль.

Этот рабочий процесс выполняет следующие действия:

1. Извлекает копию репозитория проекта.
1. Вызывает `setup-java` в первый раз. В результате выполняется настройка файла Maven _settings.xml_ для репозитория `ossrh` и установка параметров проверки подлинности для переменных среды, которые определяются на следующем шаге.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Вызывает `setup-java` во второй раз. В результате выполняется автоматическая настройка файла Maven _settings.xml_ для {% data variables.product.prodname_registry %}.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Дополнительные сведения об использовании секретов в рабочем процессе см. в статье "[Создание и использование зашифрованных секретов](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
