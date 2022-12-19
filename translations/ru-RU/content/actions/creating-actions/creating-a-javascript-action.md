---
title: Создание действия JavaScript
shortTitle: Create a JavaScript action
intro: 'В этом руководстве вы узнаете, как создать действие JavaScript с помощью набора средств для действий.'
redirect_from:
  - /articles/creating-a-javascript-action
  - /github/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/automating-your-workflow-with-github-actions/creating-a-javascript-action
  - /actions/building-actions/creating-a-javascript-action
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Action development
  - JavaScript
ms.openlocfilehash: 60fd562df55756afd081c395d9cffee89c2c04d6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192748'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве вы узнаете об основных компонентах, необходимых для создания и использования упакованного действия JavaScript. Чтобы сосредоточиться в этом руководстве на компонентах, необходимых для упаковки действия, функциональные возможности кода действия будут минимальны. Действие записывает сообщение "Hello World" в журналах или "Hello [имя приветствуемого]" при указании пользовательского имени.

Для ускорения разработки в этом руководстве применяется модуль Node.js из набора средств {% data variables.product.prodname_actions %}. Дополнительные сведения см. в репозитории [actions/toolkit](https://github.com/actions/toolkit).

Завершив этот проект, вы узнаете, как создать собственное действие JavaScript и протестировать его в рабочем процессе.

{% data reusables.actions.pure-javascript %}

{% data reusables.actions.context-injection-warning %}

## Предварительные требования

Перед началом работы необходимо скачать Node.js и создать общедоступный репозиторий {% data variables.product.prodname_dotcom %}.

1. Скачайте и установите Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}16.x{% else %}12.x{% endif %}, который включает npm.

  {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}https://nodejs.org/en/download/{% else %}https://nodejs.org/en/download/releases/{% endif %}

1. Создайте новый общедоступный репозиторий в {% data variables.location.product_location %} и назовите его hello-world-javascript-action. Дополнительные сведения см. в разделе [Создание репозитория](/articles/creating-a-new-repository).

1. Клонируйте репозиторий на ваш компьютер. Дополнительные сведения см. в разделе [Клонирование репозитория](/articles/cloning-a-repository).

1. В окне терминала измените каталоги на новый репозиторий.

  ```shell{:copy}
  cd hello-world-javascript-action
  ```

1. В окне терминала инициализируйте каталог с помощью npm, чтобы создать файл `package.json`.

  ```shell{:copy}
  npm init -y
  ```

## Создание файла метаданных действия

Создайте в каталоге `hello-world-javascript-action` файл с именем `action.yml`, содержащий приведенный ниже код. Дополнительные сведения см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions).

```yaml{:copy}
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
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
```

В этом файле определяются входной атрибут `who-to-greet` и выходной атрибут `time`. В нем также указывается способ запуска этого действия JavaScript средством выполнения.

## Добавление пакетов из набора средств actions

Набор средств actions — это коллекция пакетов Node.js, которые позволяют быстро и согласованно создавать действия JavaScript.

Пакет [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) из набора средств предоставляет интерфейс для команд рабочего процесса, входных и выходных переменных, состояний выхода и сообщений отладки.

Набор средств также предлагает пакет [`@actions/github`](https://github.com/actions/toolkit/tree/main/packages/github), который возвращает прошедший проверку подлинности клиент REST Octokit и доступ к контекстам GitHub Actions.

Набор средств не ограничивается пакетами `core` и `github`. Дополнительные сведения см. в репозитории [actions/toolkit](https://github.com/actions/toolkit).

В окне терминала установите пакеты `core` и `github` из набора средств actions.

```shell{:copy}
npm install @actions/core
npm install @actions/github
```

Теперь должен отображаться каталог `node_modules` с только что установленными модулями и файлом `package-lock.json`, в котором содержатся зависимости установленных модулей и версия каждого установленного модуля.

## Написание кода действия

Это действие использует набор средств для получения входной переменной `who-to-greet`, требуемой в файле метаданных действия, и записывает строку "Hello [имя приветствуемого]" в отладочном сообщении журнала. Затем скрипт получает текущее время и присваивает его выходной переменной, которую смогут использовать действия, выполняемые позже в рамках задания.

GitHub Actions предоставляет такие сведения о контексте, как событие веб-перехватчика, ссылки GIT, рабочий процесс, действие и пользователь, активировавший рабочий процесс. Для доступа к сведениям о контексте можно использовать пакет `github`. Вы напишете действие, которое будет записывать полезные данные события веб-перехватчика в журнал.

Добавьте файл с именем `index.js`, содержащий приведенный ниже код.

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
```
{% endraw %}

Если в приведенном выше примере `index.js` возникает ошибка, `core.setFailed(error.message);` использует пакет [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) из набора средств actions для регистрации сообщения и задания кода выхода "сбой". Дополнительные сведения см. в разделе [Настройка кодов выхода для действий](/actions/creating-actions/setting-exit-codes-for-actions).

## Создание файла сведений

Чтобы сообщить людям, как применить свое действие, можно создать файл README. Файл README является наиболее полезным, если вы планируете поделиться своим действием публично, но также является отличным способом напомнить вам или вашей команде, как использовать действие.

В каталоге `hello-world-javascript-action` создайте файл `README.md`, указывающий следующие сведения:

- подробное описание того, что делает действие;
- обязательные входные и выходные аргументы;
- необязательные входные и выходные аргументы;
- секреты, используемые действием;
- переменные среды, используемые действием;
- пример использования действия в рабочем процессе.

````markdown{:copy}
# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
```
````

## Фиксация, применение тега и отправка действия в GitHub

Во время выполнения {% data variables.product.product_name %} скачивает каждый запуск действия в рамках рабочего процесса и выполняет его как полный пакет кода, прежде чем можно будет использовать команды рабочего процесса, такие как `run`, для взаимодействия с компьютером средства выполнения. Это означает, что необходимо включить все зависимости пакетов, необходимые для выполнения кода JavaScript. Вам потребуется вернуть пакеты `core` и `github` из набора средств в репозиторий действия.

В окне терминала зафиксируйте файлы `action.yml`, `index.js`, `node_modules`, `package.json`, `package-lock.json` и `README.md`. Если вы добавили файл `.gitignore` со списком `node_modules`, потребуется удалить эту строку, чтобы зафиксировать каталог `node_modules`.

Рекомендуется также добавлять тег версии для выпусков действия. Дополнительные сведения об управлении версиями действия см. в разделе [Сведения о действиях](/actions/automating-your-workflow-with-github-actions/about-actions#using-release-management-for-actions).

```shell{:copy}
git add action.yml index.js node_modules/* package.json package-lock.json README.md
git commit -m "My first action is ready"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

Возврат каталога `node_modules` может привести к проблемам. В качестве альтернативы можно использовать средство [`@vercel/ncc`](https://github.com/vercel/ncc) для компиляции кода и модулей в один файл, предназначенный для распространения.

1. Установите `vercel/ncc`, выполнив в окне терминала следующую команду:
  `npm i -g @vercel/ncc`

1. Скомпилируйте файл `index.js`.
  `ncc build index.js --license licenses.txt`

  Появится новый файл `dist/index.js` с кодом и скомпилированными модулями.
  Кроме того, появится вспомогательный файл `dist/licenses.txt` со всеми лицензиями на используемые модули `node_modules`.

1. Измените ключевое слово `main` в файле `action.yml` так, чтобы использовался новый файл `dist/index.js`:
 `main: 'dist/index.js'`

1. Если вы уже вернули каталог `node_modules`, удалите его.
  `rm -rf node_modules/*`

1. В окне терминала зафиксируйте изменения в файлах `action.yml`, `dist/index.js` и `node_modules`.
```shell{:copy}
git add action.yml dist/index.js node_modules/*
git commit -m "Use vercel/ncc"
git tag -a -m "My first action release" v1.1
git push --follow-tags
```

## Тестирование действия в рабочем процессе

Теперь вы готовы протестировать действие в рабочем процессе. Если действие находится в частном репозитории, его можно использовать только в рабочих процессах в том же репозитории. Общедоступные действия могут использоваться рабочими процессами в любом репозитории.

{% data reusables.actions.enterprise-marketplace-actions %}

### Пример. Использование общедоступного действия

В этом примере показано, как можно запустить новое общедоступное действие из внешнего репозитория.

Скопируйте приведенный ниже код YAML в новый файл по пути `.github/workflows/main.yml` и измените строку `uses: octocat/hello-world-javascript-action@v1.1`, указав свое имя пользователя и имя созданного ранее общедоступного репозитория. Вы также можете заменить входное поле `who-to-greet` на свое имя.

{% raw %}
```yaml{:copy}
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: octocat/hello-world-javascript-action@v1.1
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
{% endraw %}

При активации этого рабочего процесса средство выполнения скачивает действие `hello-world-javascript-action` из общедоступного репозитория, а затем запускает его.

### Пример использования частного действия

Скопируйте код рабочего процесса в файл `.github/workflows/main.yml` в репозитории действия. Вы также можете заменить входное поле `who-to-greet` на свое имя.

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
        run: echo "The time was {% raw %}${{ steps.hello.outputs.time }}{% endraw %}"
```

В репозитории перейдите на вкладку **Действия** и выберите последний запуск рабочего процесса. В разделе **Задания** или в графе визуализации щелкните  **Задание для отображения приветствия**. Вы должны увидеть Hello Mona the Octocat (или имя, которое вы использовали для входных данных `who-to-greet` и метки времени, напечатанной в журнале).

![Снимок экрана с использованием действия в рабочем процессе](/assets/images/help/repository/javascript-action-workflow-run-updated-2.png)

## Репозитории шаблонов для создания действий JavaScript

{% data variables.product.prodname_dotcom %} предоставляет репозитории шаблонов для создания действий JavaScript и TypeScript. С помощью этих шаблонов можно быстро приступить к созданию нового действия, включающего тесты, анализ и другие рекомендуемые методики.

* [`javascript-action` репозиторий шаблонов](https://github.com/actions/javascript-action)
* [`typescript-action` репозиторий шаблонов](https://github.com/actions/typescript-action)
