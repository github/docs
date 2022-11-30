---
title: Сборка и тестирование Java с помощью Ant
intro: Рабочий процесс непрерывной интеграции (CI) можно создать в GitHub Actions для сборки и тестирования проекта Java с помощью Ant.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
  - /actions/guides/building-and-testing-java-with-ant
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
shortTitle: Build & test Java & Ant
ms.openlocfilehash: d1e73fdce7bf23bf1b86ec3eb4d0f8acd9b6d292
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088733'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, который выполняет непрерывную интеграцию (CI) для вашего проекта Java с помощью системы сборки Ant. Создаваемый рабочий процесс позволит увидеть, когда фиксации в запросе на вытягивание вызывают сбои в сборке или тестировании ветви по умолчанию; этот подход поможет убедиться, что ваш код всегда работоспособен. Можно расширить рабочий процесс CI, чтобы передать артефакты через выполнение рабочего процесса.

Средства выполнения, размещенные на {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %}, имеют кэш средств с предварительно установленным программным обеспечением, включающим в себя комплекты SDK для Java (JDK) и Ant. Список программного обеспечения и предварительно установленных версий JDK и Ant см. в разделе [Спецификации для средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software).
{% endif %}

## Предварительные требования

Требуются знания YAML и синтаксиса {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе:
- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- «[Сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions)»

Рекомендуется иметь базовое представление о Java и платформе Ant. Дополнительные сведения см. в [руководстве по Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Использование начального рабочего процесса Ant

{% data variables.product.prodname_dotcom %} предоставляет начальный рабочий процесс Ant, который будет работать для большинства проектов Java на базе Ant. Дополнительные сведения см. в разделе [Начальный рабочий процесс Ant](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Чтобы быстро приступить к работе, при создании нового рабочего процесса можно выбрать предварительно настроенный начальный рабочий процесс Ant. Дополнительные сведения см. в разделе [Краткое руководство по {% data variables.product.prodname_actions %}](/actions/quickstart).

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
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```

Этот рабочий процесс выполняет следующие действия:

1. На шаге `checkout` в средство выполнения скачивается копия репозитория.
2. На шаге `setup-java` происходит настройка JDK 11 Java с помощью Adoptium.
3. На шаге "Сборка с помощью Ant" целевой объект по умолчанию запускается в `build.xml` в неинтерактивном режиме.

Начальные рабочие процессы по умолчанию — это отличные отправные точки при создании рабочего процесса сборки и тестирования, а также начальный рабочий процесс можно настроить в соответствии с потребностями проекта.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Создание и тестирование кода

Вы можете использовать те же команды, которые используются для создания и тестирования кода в локальной среде.

Начальный рабочий процесс выполнит целевой объект по умолчанию, указанный в вашем файле _build.xml_.  Целевой объект по умолчанию обычно будет настроен на сборку классов, выполнение тестов и классов пакетов в их распространяемом формате, например файл JAR.

Если вы используете разные команды для сборки проекта или хотите выполнить другой целевой объект, это можно указать. Например, может понадобиться выполнить целевой объект `jar`, настроенный в файле `_build-ci.xml_`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```

## Упаковка данных рабочего процесса в виде артефактов

После успешной сборки и прохождения тестов может потребоваться передать полученные пакеты Java в виде артефакта сборки. Полученные пакеты будут храниться как часть выполнения рабочего процесса и их можно будет скачать. Артефакты помогут вам протестировать и отладить запросы на вытягивание в локальной среде до их слияния. Дополнительные сведения см. в разделе [Сохранение данных рабочего процесса с помощью артефактов](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts).

Как правило, Ant создает выходные файлы, такие как JAR, EAR или WAR, в каталоге `build/jar`. Содержимое этого каталога можно передать с помощью действия `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  
  - run: ant -noinput -buildfile build.xml
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/jar
```
