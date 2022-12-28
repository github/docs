---
title: Сборка и тестирование в Java с помощью Maven
intro: Рабочий процесс непрерывной интеграции (CI) можно создать в GitHub Actions для сборки и тестирования проекта Java с помощью Maven.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179810'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, который выполняет непрерывную интеграцию (CI) для вашего проекта Java с помощью средства управления проектами программного обеспечения Maven. Создаваемый рабочий процесс позволит увидеть, когда фиксации в запросе на вытягивание вызывают сбои в сборке или тестировании ветви по умолчанию; этот подход поможет убедиться, что ваш код всегда работоспособен. Вы можете расширить рабочий процесс CI, чтобы {% ifversion actions-caching %}кэшировать файлы и{% endif %} передавать артефакты через выполнение рабочего процесса.

Средства выполнения, размещенные на {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %}, имеют кэш средств с предварительно установленным программным обеспечением, включающим в себя комплекты SDK для Java (JDK) и Maven. Список программного обеспечения и предварительно установленных версий JDK и Maven см. в разделе [Спецификации для средств выполнения, размещенных на {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе:
- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»

Рекомендуется иметь базовое представление о Java и платформе Maven. Дополнительные сведения см. в [руководстве по началу работы с Maven](http://maven.apache.org/guides/getting-started/index.html) в документации Maven.

{% data reusables.actions.enterprise-setup-prereq %}

## Использование начального рабочего процесса Maven

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Maven, который будет работать для большинства проектов Java на базе Maven. Дополнительные сведения см. в разделе [Начальный рабочий процесс Maven](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Чтобы быстро приступить к работе, при создании рабочего процесса можно выбрать предварительно настроенный начальный рабочий процесс Maven. Дополнительные сведения см. в [кратком руководстве по {% data variables.product.prodname_actions %}](/actions/quickstart).

Этот рабочий процесс также можно добавить вручную, создав новый файл в каталоге `.github/workflows` репозитория.

```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

Этот рабочий процесс выполняет следующие действия:

1. На шаге `checkout` в средство выполнения скачивается копия репозитория.
2. На шаге `setup-java` происходит настройка JDK 11 Java от Adoptium.
3. На шаге "Сборка с помощью Maven" целевой объект Maven `package` запускается в неинтерактивном режиме для проверки того, что сборка кода выполняется, тесты завершаются удачно и пакет можно создать.

Начальные рабочие процессы по умолчанию — это отличные отправные точки при создании рабочего процесса сборки и тестирования, а также начальный рабочий процесс можно настроить в соответствии с потребностями проекта.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде.

Начальный рабочий процесс будет по умолчанию запускать целевой объект `package`. В конфигурации Maven по умолчанию эта команда скачивает зависимости, выполняет сборку классов, проводит тесты и упаковывает классы в распространяемый формат, например в JAR-файл.

Если вы используете другие команды для сборки проекта или хотите выполнить другой целевой объект, это можно указать. Например, может понадобиться выполнить целевой объект `verify`, настроенный в файле _pom-ci.xml_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## Кэширование зависимостей

Вы можете кэшировать зависимости, чтобы ускорить выполнение рабочего процесса. После успешного выполнения локальный репозиторий Maven будет храниться в кэше. При последующих запусках рабочего процесса данные из кэша восстанавливаются, так что зависимости не нужно скачивать из удаленных репозиториев Maven. Кэшировать зависимости можно просто с помощью [действия `setup-java`](https://github.com/marketplace/actions/setup-java-jdk), либо можно использовать [действие `cache`](https://github.com/actions/cache) для более сложной настройки.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

Этот рабочий процесс сохраняет содержимое локального репозитория Maven, расположенного в каталоге `.m2` домашнего каталога средства выполнения. Ключом кэша будет хэш содержимого файла _pom.xml_, поэтому изменения в файле _pom.xml_ делают кэш недействительным.

{% endif %}

## Упаковка данных рабочего процесса в виде артефактов

После успешной сборки и прохождения тестов может потребоваться передать полученные пакеты Java в виде артефакта сборки. Полученные пакеты будут храниться как часть выполнения рабочего процесса и их можно будет скачать. Артефакты помогут вам протестировать и отладить запросы на вытягивание в локальной среде до их слияния. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Как правило, Maven создает выходные файлы, такие как JAR, EAR или WAR, в каталоге `target`. Чтобы передать их как артефакты, их можно скопировать в новый каталог, содержащий артефакты для отправки. Например, можно создать каталог с именем `staging`. Затем содержимое этого каталога можно передать с помощью действия `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
