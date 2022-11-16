---
title: Использование GitHub Codespaces с GitHub CLI
shortTitle: GitHub CLI
intro: 'Вы можете работать с {% data variables.product.prodname_github_codespaces %} непосредственно из командной строки с помощью `gh`, интерфейса командной строки {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163500'
---
## Сведения о {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Дополнительные сведения см. в статьях [Сведения о {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Вы можете работать с {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_cli %}, чтобы:
  - [Перечисление всех codespace](#list-all-of-your-codespaces)
  - [Создание нового codespace](#create-a-new-codespace)
  - [Остановка codespace](#stop-a-codespace)
  - [Удаление codespace](#delete-a-codespace)
  - [Переименование codespace](#rename-a-codespace)
  - [Выполнения SSH в codespace](#ssh-into-a-codespace)
  - [Открытие codespace в {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Открытие codespace в JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Копирование файла в codespace или из него](#copy-a-file-tofrom-a-codespace)
  - [Изменение портов в codespace](#modify-ports-in-a-codespace)
  - [Доступ к журналам codespace](#access-codespace-logs)
  - [Получение доступа к удаленным ресурсам](#access-remote-resources)
  - [Изменение типа компьютера codespace](#change-the-machine-type-of-a-codespace)

## Установка {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Использование {% data variables.product.prodname_cli %}

Если вы еще этого не сделали, выполните `gh auth login` для проверки подлинности с помощью учетной записи {% data variables.product.prodname_dotcom %}. 

Чтобы использовать `gh` для работы с {% data variables.product.prodname_github_codespaces %}, введите `gh codespace SUBCOMMAND` или его псевдоним `gh cs SUBCOMMAND`.

В качестве примера ряда команд, которые можно использовать для работы с {% data variables.product.prodname_github_codespaces %}, вы можете: 

* Создать список текущих codespace, чтобы проверить наличие codespace для определенного репозитория:<br>
  `gh codespace list`
* Создать новый codespace для требуемой ветви репозитория:<br>
  `gh codespace create -r github/docs -b main`
* Выполнения SSH в новом codespace:<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* Переадресуйте порт на локальный компьютер:<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## Команды `gh` для {% data variables.product.prodname_github_codespaces %}

В следующих разделах приведены примеры команд для каждой из доступных операций.

Полный справочник по командам `gh` для {% data variables.product.prodname_github_codespaces %}, включая сведения обо всех доступных параметрах для каждой команды, см. в справке {% data variables.product.prodname_cli %} для [gh codespace](https://cli.github.com/manual/gh_codespace). Кроме того, в командной строке используйте `gh codespace --help` для общей справки или `gh codespace SUBCOMMAND --help` справки по определенной подкоманде.

{% note %}

**Примечание.** Флаг `-c CODESPACE_NAME`, используемый со многими командами, не является обязательным. Если он пропущен, отобразится список codespace для выбора.

{% endnote %}

### Перечисление всех codespace

```shell
gh codespace list
```

Список содержит уникальное имя каждого codespace, которое можно использовать в других командах `gh codespace`.

Звездочка в конце имени ветви для codespace указывает, что в этом codespace есть незафиксированные или незафиксированные изменения.

### Создание нового codespace

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

Дополнительные сведения см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).

### Остановка codespace

```shell
gh codespace stop -c CODESPACE-NAME
```

Дополнительные сведения см. в разделе [{% data variables.product.prodname_github_codespaces %} в деталях](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace).

### Удаление codespace

```shell
gh codespace delete -c CODESPACE-NAME
```

Дополнительные сведения см. в статье [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

### Переименование codespace

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

Дополнительные сведения см. в разделе [Переименование codespace](/codespaces/customizing-your-codespace/renaming-a-codespace).

### Выполнения SSH в codespace

Чтобы выполнить команды на удаленном компьютере с codespace, вы можете выполнить SSH в codespace в терминале.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**Примечание**. {% data reusables.codespaces.ssh-server-installed %}

<br>Дополнительные сведения о файле и образе контейнера по умолчанию см. в разделе [Общие сведения о](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)`devcontainer.json` контейнерах разработки.

{% endnote %}

{% data variables.product.prodname_github_codespaces %} копирует ключи SSH для GitHub в codespace при создании для простой проверки подлинности. Вам, возможно, будет предложено ввести парольную фразу для ключа SSH, после чего вы получите командную строку с удаленного компьютера с codespace.

Если у вас нет ключей SSH, следуйте инструкциям из статьи [Создание нового ключа SSH и его добавление в агент SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### Открытие codespace в {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c CODESPACE-NAME
```

На локальном компьютере должен быть установлен {% data variables.product.prodname_vscode_shortname %}. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code).

### Открытие codespace в JupyterLab

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### Копирование файла в codespace или из него

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

Используйте префикс `remote:` в имени файла или каталога, чтобы указать, что он находится в codespace. Как и в случае с командой `cp` UNIX, первый аргумент указывает источник, а последний — назначение. Если назначение является каталогом, можно указать несколько источников. Используйте флаг (рекурсивный) `-r`, если какой-либо из источников является каталогом.

Расположение файлов и каталогов в codespace относится к домашнему каталогу удаленного пользователя.

#### Примеры

* Скопируйте файл с локального компьютера в каталог `$HOME` codespace:

   `gh codespace cp myfile.txt remote:`

* Скопируйте файл в каталог, в котором репозиторий получен для изменения в codespace:

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* Скопируйте файл из codespace в текущий каталог на локальном компьютере:

   `gh codespace cp remote:myfile.txt .`

* Скопируйте три локальных файла в каталог `$HOME/temp` codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Скопируйте три файла из codespace в текущую рабочую папку на локальном компьютере:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Скопируйте локальный каталог в каталог `$HOME` codespace:

   `gh codespace cp -r mydir remote:`

* Скопируйте каталог из codespace на локальный компьютер, изменив имя каталога:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Дополнительные сведения о команде `gh codespace cp`, включая дополнительные флаги, которые можно использовать, см. в [руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Изменение портов в codespace

Вы можете переадресовать порт в codespace на локальный порт. Порт остается переадресованным, пока выполняется процесс. Чтобы остановить переадресацию порта, нажмите клавиши <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

Чтобы просмотреть сведения о переадресованных портах, введите `gh codespace ports` и выберите кодовое пространство.

Вы можете задать видимость переадресованного порта. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

Задать видимость для нескольких портов можно с помощью одной команды. Пример:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

### Доступ к журналам codespace

Вы можете просматривать журнал создания для codespace. После ввода этой команды появится запрос на ввод парольной фразы для ключа SSH.

```shell
gh codespace logs -c CODESPACE-NAME
```

Дополнительные сведения о журнале создания см. в разделе [Журналы {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs#creation-logs).

### Получение доступа к удаленным ресурсам 
Вы можете использовать расширение {% data variables.product.prodname_cli %}, чтобы создать мост между codespace и вашим локальным компьютером, чтобы разрешить codespace обращаться к любому удаленному ресурсу, доступному с вашего компьютера. Дополнительные сведения об использовании расширения см. в разделе [Использование {% data variables.product.prodname_cli %} для получения доступа к удаленным ресурсам](https://github.com/github/gh-net#codespaces-network-bridge).

{% note %}

**Примечание.** Расширение {% data variables.product.prodname_cli %} сейчас предоставляется в бета-версии и подлежит изменениям. 

{% endnote %}

### Изменение типа компьютера codespace

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

Дополнительные сведения см. на вкладке "{% data variables.product.prodname_cli %}" раздела "[Изменение типа компьютера для codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".
