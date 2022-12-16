---
title: Создание действия контейнера Docker
shortTitle: Create a Docker container action
intro: 'В этом руководстве показаны минимально необходимые шаги для создания действия контейнера Docker. '
redirect_from:
  - /articles/creating-a-docker-container-action
  - /github/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
  - /actions/building-actions/creating-a-docker-container-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - Docker
ms.openlocfilehash: e3b8110244425e07d8c0228b0ea13de79dccce98
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093988'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве вы узнаете об основных компонентах, необходимых для создания и использования упакованного действия контейнера Docker. Чтобы была возможность сосредоточить это руководство на компонентах, необходимых для упаковки действия, функциональные возможности кода действия минимальны. Действие выводит Hello World в журналах или Hello [who-to-greet] при указании настраиваемого имени.

Завершив этот проект, вы должны понять, как создать собственное действие контейнера Docker и протестировать его в рабочем процессе.

{% data reusables.actions.self-hosted-runner-reqs-docker %}

{% data reusables.actions.context-injection-warning %}

## Предварительные требования

Возможно, полезно иметь базовое представление о переменных среды {% data variables.product.prodname_actions %} и файловой системе контейнера Docker.

- [Использование переменных среды](/actions/automating-your-workflow-with-github-actions/using-environment-variables) {% ifversion ghae %}
- [Файловая система контейнера Docker](/actions/using-github-hosted-runners/about-ae-hosted-runners#docker-container-filesystem)
{% else %}
- [Сведения о средствах выполнения, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#docker-container-filesystem) {% endif %}

Перед началом работы необходимо создать репозиторий {% data variables.product.prodname_dotcom %}.

1. Создайте репозиторий для {% данных variables.location.product_location %}. Вы можете выбрать любое имя репозитория или использовать hello-world-docker-action, как в этом примере. Дополнительные сведения см. в разделе [Создание репозитория](/articles/creating-a-new-repository).

1. Клонируйте репозиторий на ваш компьютер. Дополнительные сведения см. в разделе [Клонирование репозитория](/articles/cloning-a-repository).

1. В терминале измените каталоги на новый репозиторий.

  ```shell{:copy}
  cd hello-world-docker-action
  ```

## Создание файла Dockerfile

В новом каталоге `hello-world-docker-action` создайте файл `Dockerfile`. Убедитесь, что имя файла имеет прописную букву (используйте прописную букву `D`, но не прописную букву `f`), если у вас возникли проблемы. Дополнительные сведения см. на странице [Поддержка Dockerfile для {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions).

**Dockerfile**
```Dockerfile{:copy}
# Container image that runs your code
FROM alpine:3.10

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
```

## Создание файла метаданных действия

Создайте новый файл `action.yml` в каталоге `hello-world-docker-action`. Дополнительные сведения см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions).

{% raw %} **action.yml**
```yaml{:copy}
# action.yml
name: 'Hello World'
description: 'Greet someone and record the time'
inputs:
  who-to-greet:  # id of input
    description: 'Who to greet'
    required: true
    default: 'World'
outputs:
  time: # id of output
    description: 'The time we greeted you'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.who-to-greet }}
```
{% endraw %}

Эти метаданные определяют один входной параметр `who-to-greet` и один выходной параметр `time`. Чтобы передать входные данные в контейнер Docker, необходимо объявить входные данные с помощью `inputs` и передать их в ключевом слове `args`. Все, что вы включаете в контейнер, передается в контейнер `args`, но для лучшего обнаружения для пользователей вашего действия мы рекомендуем использовать входные данные.

{% data variables.product.prodname_dotcom %} создаст образ из образа `Dockerfile` и выполнит команды в новом контейнере с помощью этого образа.

## Написание кода действия

Вы можете выбрать любой базовый образ Docker и, следовательно, любой язык для своего действия. В указанном ниже примере скрипта оболочки используется входная переменная `who-to-greet` для печати Hello [who-to-greet] в файле журнала.

Затем скрипт получает текущее время и задает его в качестве выходной переменной, которая может использовать действия, выполняемые позже в задании. Чтобы {% данных variables.product.prodname_dotcom %} распознать выходные переменные, необходимо {% ifversion actions-save-state-set-output-envs %}записать их в `$GITHUB_OUTPUT` файл среды: `echo "<output name>=<value>" >> $GITHUB_OUTPUT`{% else %}используйте команду рабочего процесса в определенном синтаксисе: `echo "::set-output name=<output name>::<value>"`{% endif %}. Дополнительные сведения см. в статье [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions#setting-an-output-parameter).

1. Создайте файл `entrypoint.sh` в новом каталоге `hello-world-docker-action`.

1. Добавьте в файл `entrypoint.sh` указанный ниже код.

  **entrypoint.sh**
  ```shell{:copy}
  #!/bin/sh -l

  echo "Hello $1"
  time=$(date)
{%- ifversion actions-save-state-set-output-envs %}
  echo "time=$time" >> $GITHUB_OUTPUT
{%- else %}
  echo "::set-output name=time::$time"
{%- endif %}
  ```
  Если `entrypoint.sh` выполняется без ошибок, состояние действия имеет значение `success`. Вы также можете явно задать коды выхода в коде действия, чтобы предоставить состояние действия. Дополнительные сведения см. в разделе [Настройка кодов выхода для действий](/actions/creating-actions/setting-exit-codes-for-actions).


1. Сделайте исполняемый `entrypoint.sh` файл исполняемым файлом. Git предоставляет способ явного изменения режима разрешений файла, чтобы он не сбрасывал каждый раз при наличии клона или вилки.

  ```shell{:copy}
  $ git update-index --chmod=+x entrypoint.sh
  ```

1. При необходимости, чтобы проверить режим разрешений файла в индексе Git, выполните следующую команду.

  ```shell{:copy}
  $ git ls-files --stage entrypoint.sh
  ```

   Результат, подобный `100755 e69de29bb2d1d6434b8b29ae775ad8c2e48c5391 0       entrypoint.sh` тому, что файл имеет разрешение на исполняемый файл. В этом примере `755` обозначается исполняемое разрешение.

## Создание файла README

Чтобы сообщить людям, как применить свое действие, можно создать файл README. Файл README является наиболее полезным, если вы планируете поделиться своим действием публично, но также является отличным способом напомнить вам или вашей команде, как использовать действие.

В каталоге `hello-world-docker-action` создайте файл `README.md`, указывающий следующие сведения:

- подробное описание того, что делает действие;
- обязательные входные и выходные аргументы;
- необязательные входные и выходные аргументы;
- секреты, используемые действием;
- переменные среды, используемые действием;
- пример использования действия в рабочем процессе.

**README.md**
```markdown{:copy}
# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-docker-action@{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
with:
  who-to-greet: 'Mona the Octocat'
```

## Фиксация действия, добавление тегов к нему и его отправка в {% data variables.product.product_name %}

В терминале зафиксируйте файлы `action.yml`, `entrypoint.sh`, `Dockerfile` и `README.md`.

Рекомендуется также добавить тег версии для выпусков действия. Дополнительные сведения об управлении версиями действия см. в разделе [О действиях](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions).

```shell{:copy}
git add action.yml entrypoint.sh Dockerfile README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1
git push --follow-tags
```

## Тестирование действия в рабочем процессе

Теперь вы готовы протестировать действие в рабочем процессе. Если действие находится в частном репозитории, его можно использовать только в рабочих процессах в том же репозитории. Общедоступные действия могут использоваться рабочими процессами в любом репозитории.

{% data reusables.actions.enterprise-marketplace-actions %}

### Пример использования общедоступного действия

В указанном ниже коде рабочего процесса используется готовое действие _hello world_ в общедоступном репозитории [`actions/hello-world-docker-action`](https://github.com/actions/hello-world-docker-action). Скопируйте указанный ниже пример кода рабочего процесса в файл `.github/workflows/main.yml`, но замените `actions/hello-world-docker-action` именем репозитория и действия. Вы также можете заменить именем входные данные `who-to-greet`. {% ifversion fpt or ghec %}Открытые действия можно применять, даже если они не опубликованы в {% data variables.product.prodname_marketplace %}. Дополнительные сведения см. в статье [Публикация действия](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action). {% endif %}

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: actions/hello-world-docker-action{% ifversion actions-save-state-set-output-envs %}v2{% else %}v1{% endif %}
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

### Пример применения частного действия

Скопируйте указанный ниже пример кода рабочего процесса в файл `.github/workflows/main.yml` в репозитории действия. Вы также можете заменить именем входные данные `who-to-greet`. {% ifversion fpt or ghec %}Это частное действие не может быть опубликовано в {% data variables.product.prodname_marketplace %}, и его можно использовать только в этом репозитории.{% endif %}

**.github/workflows/main.yml**
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      # To use this repository's private action,
      # you must check out the repository
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Hello world action step
        uses: ./ # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}"{% endraw %}
```

В репозитории перейдите на вкладку **Действия** и выберите последний запуск рабочего процесса. В разделе **Задания** или в графе визуализации щелкните  **Задание для отображения приветствия**. Вы должны увидеть Hello Mona the Octocat (или имя, которое вы использовали для входных данных `who-to-greet` и метки времени, напечатанной в журнале).

![Снимок экрана с использованием действия в рабочем процессе](/assets/images/help/repository/docker-action-workflow-run-updated.png)

