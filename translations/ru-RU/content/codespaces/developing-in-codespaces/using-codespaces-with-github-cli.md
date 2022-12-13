---
title: Использование Codespaces с GitHub CLI
shortTitle: GitHub CLI
intro: Вы можете работать с {% data variables.product.prodname_github_codespaces %} непосредственно из командной строки с помощью `gh`, интерфейса командной строки {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179792"
---
## <a name="about--data-variablesproductprodname_cli-"></a>Сведения о {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Дополнительные сведения см. в статьях [Сведения о {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

Вы можете работать с {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_cli %} для выполнения следующих действий:
- [Описание codespace](#list-all-of-your-codespaces)
- [Создание codespace](#create-a-new-codespace)
- [Остановка codespace](#stop-a-codespace)
- [Удаление codespace](#delete-a-codespace)
- [Выполнения SSH в codespace](#ssh-into-a-codespace)
- [Открытие codespace в {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Открытие codespace в JupyterLab](#open-a-codespace-in-jupyterlab)
- [Копирование файла в codespace или из него](#copy-a-file-tofrom-a-codespace)
- [Изменение портов в codespace](#modify-ports-in-a-codespace)
- [Доступ к журналам codespace](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>Установка {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>Использование {% data variables.product.prodname_cli %}

Если вы еще этого не сделали, выполните `gh auth login` для проверки подлинности с помощью учетной записи {% data variables.product.prodname_dotcom %}. 

Чтобы использовать `gh` для работы с {% data variables.product.prodname_codespaces %}, введите `gh codespace <COMMAND>` или его псевдоним `gh cs <COMMAND>`.

В качестве примера ряда команд, которые можно использовать для работы с {% data variables.product.prodname_github_codespaces %}, вы можете: 

* Создать список текущих codespace, чтобы проверить наличие codespace для определенного репозитория:<br>
  `gh codespace list`
* Создать новый codespace для требуемой ветви репозитория:<br>
  `gh codespace create -r github/docs -b main`
* Выполнения SSH в новом codespace:<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Переадресуйте порт на локальный компьютер:<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>Команды `gh` для {% data variables.product.prodname_github_codespaces %}

В следующих разделах приведены примеры команд для каждой из доступных операций.

Полный справочник по командам `gh` для {% data variables.product.prodname_github_codespaces %}, включая сведения обо всех доступных параметрах для каждой команды, см. в справке {% data variables.product.prodname_cli %} для [gh codespace](https://cli.github.com/manual/gh_codespace). Кроме того, используйте `gh codespace [<SUBCOMMAND>...] --help` в командной строке.

{% note %}

**Примечание.** Флаг `-c <em>codespace-name</em>`, используемый со многими командами, не является обязательным. Если он пропущен, отобразится список codespace для выбора.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>Перечисление всех codespace

```shell
gh codespace list
```

Список содержит уникальное имя каждого codespace, которое можно использовать в других командах `gh codespace`.

### <a name="create-a-new-codespace"></a>Создание нового codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Дополнительные сведения см. в статье [Создание кодового пространства](/codespaces/developing-in-codespaces/creating-a-codespace).

### <a name="stop-a-codespace"></a>Остановка codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

Дополнительные сведения см. в статье [Подробный обзор Codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace).

### <a name="delete-a-codespace"></a>Удаление codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Дополнительные сведения см. в статье [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace).

### <a name="ssh-into-a-codespace"></a>Выполнения SSH в codespace

Чтобы выполнить команды на удаленном компьютере с codespace, вы можете выполнить SSH в codespace в терминале.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} копирует ключи SSH для GitHub в codespace при создании для простой проверки подлинности. Вам, возможно, будет предложено ввести парольную фразу для ключа SSH, после чего вы получите командную строку с удаленного компьютера с codespace.

Если у вас нет ключей SSH, следуйте инструкциям из статьи [Создание нового ключа SSH и его добавление в агент SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>Открытие codespace в {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Дополнительные сведения см. в статье [Использование {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code).

### <a name="open-a-codespace-in-jupyterlab"></a>Открытие codespace в JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>Копирование файла в codespace или из него

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Используйте префикс `remote:` в имени файла или каталога, чтобы указать, что он находится в codespace. Как и в случае с командой `cp` UNIX, первый аргумент указывает источник, а последний — назначение. Если назначение является каталогом, можно указать несколько источников. Используйте флаг (рекурсивный) `-r`, если какой-либо из источников является каталогом.

Расположение файлов и каталогов в codespace относится к домашнему каталогу удаленного пользователя.

#### <a name="examples"></a>Примеры

* Скопируйте файл с локального компьютера в каталог `$HOME` codespace:

   `gh codespace cp myfile.txt remote:`

* Скопируйте файл в каталог, в котором репозиторий получен для изменения в codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>Изменение портов в codespace

Вы можете переадресовать порт в codespace на локальный порт. Порт остается переадресованным, пока выполняется процесс. Чтобы остановить переадресацию порта, нажмите клавиши <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Чтобы просмотреть сведения о переадресованных портах, введите `gh codespace ports` и выберите кодовое пространство.

Вы можете задать видимость переадресованного порта. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Задать видимость для нескольких портов можно с помощью одной команды. Пример:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

### <a name="access-codespace-logs"></a>Доступ к журналам codespace

Вы можете просматривать журнал создания для codespace. После ввода этой команды появится запрос на ввод парольной фразы для ключа SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

Дополнительные сведения о журнале создания см. в статье [Журналы Codespaces](/codespaces/troubleshooting/codespaces-logs#creation-logs).
