---
title: 'Настройка контейнеров, используемых заданиями'
intro: 'Вы можете настроить, как локальное средство выполнения вызывает контейнер для задания.'
versions:
  feature: container-hooks
type: reference
miniTocMaxHeadingLevel: 4
shortTitle: Customize containers used by jobs
ms.openlocfilehash: 774aad09c504a09f0bf4f60af286952ee24f89b5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881166'
---
{% note %}

**Примечание**. Эта функция в настоящее время доступна в виде бета-версии и может быть изменена.

{% endnote %}

## Сведения о настройке контейнеров

При использовании {% data variables.product.prodname_actions %} можно выполнять задание в контейнере с помощью инструкции `container:` в файле рабочего процесса. Дополнительные сведения см. в статье [Выполнение заданий в контейнере](/actions/using-jobs/running-jobs-in-a-container). Для обработки заданий на основе контейнеров локальное средство выполнения создает контейнер для каждого задания.

{% data variables.product.prodname_actions %} поддерживает команды, позволяющие настроить способ создания контейнеров локальным средством выполнения. Например, эти команды можно использовать для управления контейнерами с помощью Kubernetes или Podman. Кроме того, вы можете настроить команды `docker run` или `docker create`, используемые для вызова контейнера. Команды настройки выполняются скриптом, который автоматически активируется при установке определенной переменной среды в средстве выполнения. Дополнительные сведения см. в статье [Активация скрипта настройки](#triggering-the-customization-script).

Эта настройка доступна только для локальных средств выполнения на основе Linux, а доступ к корневому пользователю не требуется.

## Команды настройки контейнера

{% data variables.product.prodname_actions %} включает следующие команды для настройки контейнера:

- [`prepare_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#prepare_job): вызывается при запуске задания.
- [`cleanup_job`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#cleanup_job): вызывается в конце задания.
- [`run_container_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_container_step): вызывается один раз для каждого действия контейнера в задании.
- [`run_script_step`](/actions/hosting-your-own-runners/customizing-the-containers-used-by-jobs#run_script_step): выполняет любой шаг, который не является действием контейнера.

Каждая из этих команд настройки должна быть определена в собственном JSON-файле. Имя файла должно соответствовать имени команды с расширением `.json`. Например, в `prepare_job.json` определена команда `prepare_job`. Затем эти JSON-файлы будут выполняться вместе в локальном средстве выполнения в рамках основного скрипта `index.js`. Этот процесс более подробно описан в разделе [Создание скрипта настройки](#generating-the-customization-script).

Эти команды также включают аргументы конфигурации, описанные более подробно ниже.

### `prepare_job`

Команда `prepare_job` вызывается при запуске задания. {% data variables.product.prodname_actions %} передает все контейнеры заданий или служб, которые есть в задании. Эта команда будет вызываться, если в задании есть какие-либо контейнеры служб или заданий. 

{% data variables.product.prodname_actions %} предполагает, что в команде `prepare_job` будут выполняться следующие задачи:

- Урезать что-либо из предыдущих заданий при необходимости.
- При необходимости создайте сеть.
- Извлеките контейнеры заданий и служб.
- Запустите контейнер заданий.
- Запустите контейнеры служб.
- Запишите в файл ответа все сведения, необходимые для {% data variables.product.prodname_actions %}:
  - Обязательный аргумент. Указывает, является ли контейнер контейнером Linux `alpine` (с использованием логического значения `isAlpine`). 
  - Необязательный аргумент. Поля контекста, которые нужно задать для контекста задания. В противном случае они будут недоступны для пользователей. Дополнительные сведения см. в разделе о [контексте `job`](/actions/learn-github-actions/contexts#job-context).
- Возвращает `0` после успешной проверки работоспособности и запуска контейнеров заданий или служб.

#### Аргументы

- `jobContainer`: **необязательный**. Объект, содержащий сведения об указанном контейнере заданий.
  - `image`: **обязательный**. Строка, содержащая образ Docker.
  - `workingDirectory`: **обязательный**. Строка, содержащая абсолютный путь к рабочему каталогу.
  - `createOptions`: **необязательный**. Необязательные параметры _создания_, указанные в YAML. Дополнительные сведения см. в [примере выполнения задания в контейнере](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables`: **необязательный**. Задает карту ключевых переменных среды.
  - `userMountVolumes`: **необязательный**. Массив пользовательских томов подключения, заданных в YAML. Дополнительные сведения см. в [примере выполнения задания в контейнере](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
    - `sourceVolumePath`: **обязательный**. Исходный путь к тому, который будет подключен к контейнеру Docker.
    - `targetVolumePath`: **обязательный**. Целевой путь к тому, который будет подключен к контейнеру Docker.
    - `readOnly`: **обязательный**. Определяет, следует ли устанавливать подключение только для чтения.
  - `systemMountVolumes`: **обязательный**. Массив подключений для подключения к контейнеру с теми же полями, что и выше.
    - `sourceVolumePath`: **обязательный**. Исходный путь к тому, который будет подключен к контейнеру Docker.
    - `targetVolumePath`: **обязательный**. Целевой путь к тому, который будет подключен к контейнеру Docker.
    - `readOnly`: **обязательный**. Определяет, следует ли устанавливать подключение только для чтения.
  - `registry`: **необязательный**. Учетные данные реестра Docker для частного реестра контейнеров.
    - `username`: **необязательный**. Имя пользователя для учетной записи реестра.
    - `password`: **необязательный**. Пароль для учетной записи реестра.
    - `serverUrl`: **необязательный**. URL-адрес реестра.
  - `portMappings`: **необязательный**. Хэш значения ключа портов _исходный:целевой_ для сопоставления с контейнером.
- `services`: **необязательный**. Массив контейнеров служб для запуска.
  - `contextName`: **обязательный**. Имя службы в контексте задания.
  - `image`: **обязательный**. Строка, содержащая образ Docker.
  - `createOptions`: **необязательный**. Необязательные параметры _создания_, указанные в YAML. Дополнительные сведения см. в [примере выполнения задания в контейнере](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `environmentVariables`: **необязательный**. Задает карту ключевых переменных среды.
  - `userMountVolumes`: **необязательный**. Массив подключений для подключения к контейнеру с теми же полями, что и выше.
    - `sourceVolumePath`: **обязательный**. Исходный путь к тому, который будет подключен к контейнеру Docker.
    - `targetVolumePath`: **обязательный**. Целевой путь к тому, который будет подключен к контейнеру Docker.
    - `readOnly`: **обязательный**. Определяет, следует ли устанавливать подключение только для чтения.
  - `registry`: **необязательный**. Учетные данные реестра Docker для частного реестра контейнеров.
    - `username`: **необязательный**. Имя пользователя для учетной записи реестра.
    - `password`: **необязательный**. Пароль для учетной записи реестра.
    - `serverUrl`: **необязательный**. URL-адрес реестра.
  - `portMappings`: **необязательный**. Хэш значения ключа портов _исходный:целевой_ для сопоставления с контейнером.

#### Пример входных данных

```json{:copy}
{
  "command": "prepare_job",
  "responseFile": "/users/octocat/runner/_work/{guid}.json",
  "state": {},
  "args": {
    "jobContainer": {
      "image": "node:14.16",
      "workingDirectory": "/__w/octocat-test2/octocat-test2",
      "createOptions": "--cpus 1",
      "environmentVariables": {
        "NODE_ENV": "development"
      },
      "userMountVolumes": [
        {
          "sourceVolumePath": "my_docker_volume",
          "targetVolumePath": "/volume_mount",
          "readOnly": false
        }
      ],
      "systemMountVolumes": [
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
          "targetVolumePath": "/__w",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
          "targetVolumePath": "/__e",
          "readOnly": true
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
          "targetVolumePath": "/__w/_temp",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
          "targetVolumePath": "/__w/_actions",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
          "targetVolumePath": "/__w/_tool",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
          "targetVolumePath": "/github/home",
          "readOnly": false
        },
        {
          "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
          "targetVolumePath": "/github/workflow",
          "readOnly": false
        }
      ],
      "registry": {
        "username": "octocat",
        "password": "examplePassword",
        "serverUrl": "https://index.docker.io/v1"
      },
      "portMappings": { "80": "801" }
    },
    "services": [
      {
        "contextName": "redis",
        "image": "redis",
        "createOptions": "--cpus 1",
        "environmentVariables": {},
        "userMountVolumes": [],
        "portMappings": { "80": "801" },
        "registry": {
          "username": "octocat",
          "password": "examplePassword",
          "serverUrl": "https://index.docker.io/v1"
        }
      }
    ]
  }
}
```

#### Пример выходных данных

Этот пример выходных данных представляет собой содержимое `responseFile`, определенное во входных данных выше.

```json{:copy}
{
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "context": {
    "container": {
      "id": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
      "network": "example_network_53269bd575972817b43f7733536b200c"
    },
    "services": {
      "redis": {
        "id": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105",
        "ports": {
          "8080": "8080"
        },
        "network": "example_network_53269bd575972817b43f7733536b200c"
      }
    },
    "isAlpine": true
  }
}
```

### `cleanup_job`

Команда `cleanup_job` вызывается в конце задания. {% data variables.product.prodname_actions %} предполагает, что в команде `cleanup_job` будут выполняться следующие задачи:

- Остановите все запущенные контейнеры служб или заданий (или эквивалентный объект pod).
- Остановите сеть (если она существует).
- Удалите все контейнеры заданий или служб (или эквивалентный объект pod).
- Удалите сеть (если она существует).
- Очистите все остальные компоненты, созданные для задания.

#### Аргументы

Аргументы для `cleanup_job` не предоставляются.

#### Пример входных данных

```json{:copy}
{
  "command": "cleanup_job",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {}
}
```

#### Пример выходных данных

Для `cleanup_job` выходные данные не ожидаются.

### `run_container_step`

Команда `run_container_step` вызывается один раз для каждого действия контейнера в задании. {% data variables.product.prodname_actions %} предполагает, что в команде `run_container_step` будут выполняться следующие задачи:

- Извлечете или создадите необходимый контейнер (или завершите команду сбоем, если этого сделать нельзя).
- Запустите действие контейнера и вернете код выхода контейнера.
- Выполните потоковую передачу всех журналов шагов в stdout и stderr.
- Очистите контейнер после его выполнения.

#### Аргументы

- `image`: **необязательный**. Строка, содержащая образ Docker. В противном случае необходимо указать Dockerfile.
- `dockerfile`: **необязательный**. Строка, содержащая путь к Dockerfile. В противном случае необходимо указать образ.
- `entryPointArgs`: **необязательный**. Список, содержащий аргументы точек входа.
- `entryPoint`: **необязательный**. Точка входа контейнера, используемая, если точку входа образа по умолчанию нужно перезаписать.
- `workingDirectory`: **обязательный**. Строка, содержащая абсолютный путь к рабочему каталогу.
- `createOptions`: **необязательный**. Необязательные параметры _создания_, указанные в YAML. Дополнительные сведения см. в [примере выполнения задания в контейнере](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
- `environmentVariables`: **необязательный**. Задает карту ключевых переменных среды.
- `prependPath`: **необязательный**. Массив дополнительных путей, которые необходимо добавить перед переменной `$PATH`.
- `userMountVolumes`: **необязательный**. Массив пользовательских томов подключения, заданных в YAML. Дополнительные сведения см. в [примере выполнения задания в контейнере](/actions/using-jobs/running-jobs-in-a-container#example-running-a-job-within-a-container).
  - `sourceVolumePath`: **обязательный**. Исходный путь к тому, который будет подключен к контейнеру Docker.
  - `targetVolumePath`: **обязательный**. Целевой путь к тому, который будет подключен к контейнеру Docker.
  - `readOnly`: **обязательный**. Определяет, следует ли устанавливать подключение только для чтения.
- `systemMountVolumes`: **обязательный**. Массив подключений для подключения к контейнеру с теми же полями, что и выше.
  - `sourceVolumePath`: **обязательный**. Исходный путь к тому, который будет подключен к контейнеру Docker.
  - `targetVolumePath`: **обязательный**. Целевой путь к тому, который будет подключен к контейнеру Docker.
  - `readOnly`: **обязательный**. Определяет, следует ли устанавливать подключение только для чтения.
- `registry`: **необязательный**. Учетные данные реестра Docker для частного реестра контейнеров.
  - `username`: **необязательный**. Имя пользователя для учетной записи реестра.
  - `password`: **необязательный**. Пароль для учетной записи реестра.
  - `serverUrl`: **необязательный**. URL-адрес реестра.
- `portMappings`: **необязательный**. Хэш значения ключа портов _исходный:целевой_ для сопоставления с контейнером.

#### Пример входных данных для образа

Если вы используете образ Docker, можно указать имя образа в параметре `"image":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": "node:14.16",
    "dockerfile": null,
    "entryPointArgs": ["-f", "/dev/null"],
    "entryPoint": "tail",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Пример входных данных для Dockerfile

Если контейнер определен Dockerfile, в этом примере показано, как указать путь к `Dockerfile` во входных данных с помощью параметра `"dockerfile":`.

```json{:copy}
{
  "command": "run_container_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "services": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "image": null,
    "dockerfile": "/__w/_actions/foo/dockerfile",
    "entryPointArgs": ["hello world"],
    "entryPoint": "echo",
    "workingDirectory": "/__w/octocat-test2/octocat-test2",
    "createOptions": "--cpus 1",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "userMountVolumes": [
      {
        "sourceVolumePath": "my_docker_volume",
        "targetVolumePath": "/volume_mount",
        "readOnly": false
      }
    ],
    "systemMountVolumes": [
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work",
        "targetVolumePath": "/__w",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/externals",
        "targetVolumePath": "/__e",
        "readOnly": true
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp",
        "targetVolumePath": "/__w/_temp",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_actions",
        "targetVolumePath": "/__w/_actions",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_tool",
        "targetVolumePath": "/__w/_tool",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_home",
        "targetVolumePath": "/github/home",
        "readOnly": false
      },
      {
        "sourceVolumePath": "/home/octocat/git/runner/_layout/_work/_temp/_github_workflow",
        "targetVolumePath": "/github/workflow",
        "readOnly": false
      }
    ],
    "registry": null,
    "portMappings": { "80": "801" }
  }
}
```

#### Пример выходных данных

Для `run_container_step` выходные данные не ожидаются.

### `run_script_step`

{% data variables.product.prodname_actions %} предполагает, что вы выполните следующие задачи:

- Вызовете предоставленный скрипт в контейнере заданий и вернете код выхода.
- Выполните потоковую передачу журнала шагов в stdout и stderr.

#### Аргументы

- `entryPointArgs`: **необязательный**. Список, содержащий аргументы точек входа.
- `entryPoint`: **необязательный**. Точка входа контейнера, используемая, если точку входа образа по умолчанию нужно перезаписать.
- `prependPath`: **необязательный**. Массив дополнительных путей, которые необходимо добавить перед переменной `$PATH`.
- `workingDirectory`: **обязательный**. Строка, содержащая абсолютный путь к рабочему каталогу.
- `environmentVariables`: **необязательный**. Задает карту ключевых переменных среды.

#### Пример входных данных

```json{:copy}
{
  "command": "run_script_step",
  "responseFile": null,
  "state": {
    "network": "example_network_53269bd575972817b43f7733536b200c",
    "jobContainer": "82e8219701fe096a35941d869cf3d71af1d943b5d8bdd718857fb87ac3042480",
    "serviceContainers": {
      "redis": "60972d9aa486605e66b0dad4abb678dc3d9116f536579e418176eedb8abb9105"
    }
  },
  "args": {
    "entryPointArgs": ["-e", "/runner/temp/example.sh"],
    "entryPoint": "bash",
    "environmentVariables": {
      "NODE_ENV": "development"
    },
    "prependPath": ["/foo/bar", "bar/foo"],
    "workingDirectory": "/__w/octocat-test2/octocat-test2"
  }
}
```

#### Пример выходных данных

Для `run_script_step` выходные данные не ожидаются.

## Создание скрипта настройки

{% data variables.product.prodname_dotcom %} предоставляет пример репозитория, демонстрирующий создание скриптов настройки для Docker и Kubernetes. 

{% note %}

**Примечание.** Результирующие скрипты доступны для тестирования. Вам понадобится определить, подходят ли они для ваших требований.

{% endnote %}

1. Клонируйте репозиторий [actions/runner-container-hooks](https://github.com/actions/runner-container-hooks) в локальное средство выполнения.

1. Каталог `examples/` содержит некоторые существующие команды настройки, каждый из которых содержит собственный JSON-файл. Вы можете просмотреть эти примеры и использовать их в качестве отправной точки для собственных команд настройки.

   - `prepare_job.json`
   - `run_script_step.json`
   - `run_container_step.json`

1. Создайте пакеты NPM. Эти команды создают файлы `index.js` внутри `packages/docker/dist` и `packages/k8s/dist`.

   ```shell
   npm install && npm run bootstrap && npm run build-all
   ```

Когда результирующий скрипт `index.js` активируется {% data variables.product.prodname_actions %}, он выполнит команды настройки, определенные в JSON-файлах. Чтобы активировать скрипт `index.js`, необходимо добавить его в переменную среды `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER`, как описано в следующем разделе.

## Активация скрипта настройки

Пользовательские скрипты должны находиться в средстве выполнения, но не должны храниться в его каталоге приложений. Скрипты выполняются в контексте безопасности учетной записи службы, в котором запущена служба средства выполнения.

{% note %}

**Примечание**. Активированный скрипт обрабатывается синхронно, поэтому на это время выполнение задания блокируется.

{% endnote %}

Скрипт выполняется автоматически, если в средстве выполнения имеется следующая переменная среды, содержащая абсолютный путь к скрипту:

- `ACTIONS_RUNNER_CONTAINER_HOOK`. Скрипт, определенный в этой переменной среды, активируется при назначении задания средству выполнения, но перед запуском задания.

Чтобы задать эту переменную среды, можно добавить ее либо в операционную систему, либо в файл с именем `.env` в каталоге приложения локального средства выполнения. Например, следующая запись `.env` будет автоматически запускать скрипт `/Users/octocat/runner/index.js` перед каждым выполнением задания на основе контейнеров:

```bash
ACTIONS_RUNNER_CONTAINER_HOOK=/Users/octocat/runner/index.js
```

Если вы хотите убедиться, что задание всегда будет выполняться в контейнере, а затем всегда применять настройки контейнера, можно задать переменную `ACTIONS_RUNNER_REQUIRE_JOB_CONTAINER` для локального средства выполнения равной `true`. Это приведет к сбою заданий, которые не указывают контейнер заданий.

## Устранение неполадок

### Отсутствие параметра времени ожидания

В настоящее время для скриптов, выполняемых посредством `ACTIONS_RUNNER_CONTAINER_HOOK`, параметр времени ожидания отсутствует. Поэтому в скрипт может потребоваться добавить логику для обработки времени ожидания.

### Просмотр журнала выполнения рабочего процесса

Чтобы проверить, выполняются ли скрипты, можно просмотреть журналы задания. Дополнительные сведения о проверке журналов см. в разделе [Просмотр журналов для диагностики сбоев](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures).
