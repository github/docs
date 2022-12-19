---
title: Сборка и тестирование в Java с помощью Gradle
intro: Рабочий процесс непрерывной интеграции (CI) можно создать в GitHub Actions для сборки и тестирования проекта Java с помощью Gradle.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
ms.openlocfilehash: 00fa6888a45dda090df51260795717bc994be022
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410446'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, который выполняет непрерывную интеграцию (CI) для вашего проекта Java с помощью системы сборки Gradle. Создаваемый рабочий процесс позволит увидеть, когда фиксации в запросе на вытягивание вызывают сбои в сборке или тестировании ветви по умолчанию; этот подход поможет убедиться, что ваш код всегда работоспособен. Вы можете расширить рабочий процесс CI, чтобы {% ifversion actions-caching %}кэшировать файлы и{% endif %} передавать артефакты через выполнение рабочего процесса.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Средства выполнения, размещенные на {% data variables.product.prodname_dotcom %}, имеют кэш средств с предварительно установленным программным обеспечением, включающим в себя комплекты SDK для Java (JDK) и Gradle. Список программного обеспечения и предварительно установленных версий JDK и Gradle см. в разделе [Спецификации для средств выполнения, размещенных на {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе:
- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»

Рекомендуется иметь базовое представление о Java и платформе Gradle. Дополнительные сведения см. в разделе [Приступая к работе](https://docs.gradle.org/current/userguide/getting_started.html) документации по Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

## Использование начального рабочего процесса Gradle

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Gradle, который будет работать для большинства проектов Java на базе Gradle. Дополнительные сведения см. в разделе [Начальный рабочий процесс Gradle](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Чтобы быстро приступить к работе, при создании рабочего процесса можно выбрать предварительно настроенный начальный рабочий процесс Gradle. Дополнительные сведения см. в [кратком руководстве по {% data variables.product.prodname_actions %}](/actions/quickstart).

Этот рабочий процесс также можно добавить вручную, создав новый файл в каталоге `.github/workflows` репозитория.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

Этот рабочий процесс выполняет следующие действия:

1. На шаге `checkout` в средство выполнения скачивается копия репозитория.
2. На шаге `setup-java` происходит настройка JDK 11 Java от Adoptium.
3. На шаге "Проверка программы-оболочки Gradle" проверяются контрольные суммы JAR-файлов программы-оболочки Gradle, имеющихся в исходном дереве.
4. На шаге "Сборка с помощью Gradle" выполняется сборка с помощью действия `gradle/gradle-build-action`, предоставленного организацией Gradle на {% data variables.product.prodname_dotcom %}. Это действие отвечает за вызов Gradle, сбор результатов и кэширование состояния между заданиями. Дополнительные сведения см. на веб-сайте [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Начальные рабочие процессы по умолчанию — это отличные отправные точки при создании рабочего процесса сборки и тестирования, а также начальный рабочий процесс можно настроить в соответствии с потребностями проекта.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде.

Начальный рабочий процесс будет по умолчанию запускать задачу `build`. В конфигурации Gradle по умолчанию эта команда скачивает зависимости, выполняет сборку классов, проводит тесты и упаковывает классы в распространяемый формат, например в JAR-файл.

Если вы используете другие команды для сборки проекта или хотите выполнить другую задачу, это можно указать. Например, может понадобиться выполнить задачу `package`, настроенную в файле _ci.gradle_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## Кэширование зависимостей

Зависимости сборки можно кэшировать, чтобы ускорить выполнение рабочего процесса. После успешного выполнения `gradle/gradle-build-action` кэширует важные части домашнего каталога пользователя Gradle. При последующих запусках заданий данные из кэша восстанавливаются, так что скрипты сборки не нужно перекомпилировать, а зависимости не нужно скачивать из удаленных репозиториев пакетов.

При использовании действия `gradle/gradle-build-action` кэширование включено по умолчанию. Дополнительные сведения см. на веб-сайте [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Упаковка данных рабочего процесса в виде артефактов

После успешной сборки и прохождения тестов может потребоваться передать полученные пакеты Java в виде артефакта сборки. Полученные пакеты будут храниться как часть выполнения рабочего процесса и их можно будет скачать. Артефакты помогут вам протестировать и отладить запросы на вытягивание в локальной среде до их слияния. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Как правило, Gradle создает выходные файлы, такие как JAR, EAR или WAR, в каталоге `build/libs`. Содержимое этого каталога можно передать с помощью действия `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
