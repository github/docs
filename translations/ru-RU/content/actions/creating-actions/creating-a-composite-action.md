---
title: Создание составного действия
shortTitle: Create a composite action
intro: В этом руководстве приведены инструкции по созданию составного действия.
redirect_from:
  - /actions/creating-actions/creating-a-composite-run-steps-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
ms.openlocfilehash: 5c7d332d2b3626a5628e85b09c35ffa6a0ca5f33
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192042'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве вы узнаете об основных компонентах, необходимых для создания и использования упакованного составного действия. Чтобы сосредоточиться в этом руководстве на компонентах, необходимых для пакета действия, функциональность кода действия будет минимальна. Действие выведет текст Hello World, а затем — Goodbye, или, если вы укажете пользовательское имя, оно выведет Hello [who-to-greet], а затем — Goodbye. Действие также сопоставляет случайное число с выходной переменной `random-number` и запускает сценарий с именем `goodbye.sh`.

Завершив этот проект, вы узнаете, как создать собственное составное действие и протестировать его в рабочем процессе.

{% data reusables.actions.context-injection-warning %}

## Предварительные требования

Перед началом работы создайте репозиторий в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

1. Создайте общедоступный репозиторий в {% data variables.location.product_location %}. Вы можете выбрать любое имя репозитория или использовать следующий пример: `hello-world-composite-action`. Эти файлы можно добавить после отправки проекта в {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Создание репозитория](/articles/creating-a-new-repository).

1. Клонируйте репозиторий на ваш компьютер. Дополнительные сведения см. в разделе [Клонирование репозитория](/articles/cloning-a-repository).

1. В окне терминала перейдите в новый репозиторий.

  ```shell
  cd hello-world-composite-action
  ```

2. В репозитории `hello-world-composite-action` создайте файл под названием `goodbye.sh` и добавьте следующий пример кода:

  ```bash
  echo "Goodbye"
  ```

3. В окне терминала сделайте `goodbye.sh` исполняемым файлом.

  ```shell
  chmod +x goodbye.sh
  ```

1. В окне терминала зарегистрируйте файл `goodbye.sh`.
  ```shell
  git add goodbye.sh
  git commit -m "Add goodbye script"
  git push
  ```

## Создание файла метаданных действия

1. В репозитории `hello-world-composite-action` создайте файл под названием `action.yml` и добавьте следующий пример кода. Дополнительные сведения об этом синтаксисе см. в разделе [`runs` для составных действий](/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions).

    {% raw %}  **action.yml**
    ```yaml
    name: 'Hello World'
    description: 'Greet someone'
    inputs:
      who-to-greet:  # id of input
        description: 'Who to greet'
        required: true
        default: 'World'
    outputs:
      random-number:
        description: "Random number"
        value: ${{ steps.random-number-generator.outputs.random-number }}
    runs:
      using: "composite"
      steps:
        - run: echo Hello ${{ inputs.who-to-greet }}.
          shell: bash
        - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
          run: echo "random-number=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
          run: echo "::set-output name=random-number::$(echo $RANDOM)"
{%- endif %}{% raw %}
          shell: bash
        - run: echo "${{ github.action_path }}" >> $GITHUB_PATH
          shell: bash
        - run: goodbye.sh
          shell: bash
    ```
    {% endraw %} Этот файл определяет входные данные, сопоставляет `who-to-greet` случайно созданное число с `random-number` выходной переменной, добавляет путь действия в системный путь средства выполнения (чтобы найти `goodbye.sh` скрипт во время выполнения) и запускает `goodbye.sh` скрипт.

  Дополнительные сведения об управлении выходными данными см. в разделе [`outputs` для составного действия](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions).

  Дополнительные сведения об использовании `github.action_path` см. в разделе [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

1. В окне терминала зарегистрируйте файл `action.yml`.

  ```shell
  git add action.yml
  git commit -m "Add action"
  git push
  ```

1. В окне терминала добавьте тег. В этом примере используется тег под названием `v1`. Дополнительные сведения см. в статье [Сведения о действиях](/actions/creating-actions/about-actions#using-release-management-for-actions).

  ```shell
  git tag -a -m "Description of this release" v1
  git push --follow-tags
  ```

## Тестирование действия в рабочем процессе

В следующем коде рабочего процесса используется завершенное действие hello world, выполненное в разделе [Создание файла метаданных действия](/actions/creating-actions/creating-a-composite-action#creating-an-action-metadata-file).

Скопируйте код рабочего процесса в файл `.github/workflows/main.yml` в другом репозитории, но замените `actions/hello-world-composite-action@v1` репозиторием и тегом, который вы создали. Вы также можете заменить ввод `who-to-greet` своим именем.

**.github/workflows/main.yml**
```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - id: foo
        uses: actions/hello-world-composite-action@v1
        with:
          who-to-greet: 'Mona the Octocat'
      - run: echo random-number {% raw %}${{ steps.foo.outputs.random-number }}{% endraw %}
        shell: bash
```

В репозитории перейдите на вкладку **Actions** (Действия) и выберите последний запуск рабочего процесса. Выходные данные должны включать: Hello Mona the Octocat, результат сценария Goodbye и случайное число.
