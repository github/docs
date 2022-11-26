---
title: Создание расширений GitHub CLI
intro: 'Узнайте, как использовать новые команды {% data variables.product.prodname_cli %} совместно с другими пользователями, создавая пользовательские расширения для {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 1913b2819986fd9e6ef85b9a95b6431f893babe2
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009884'
---
## Сведения о расширениях {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Дополнительные сведения об использовании расширений {% data variables.product.prodname_cli %} см. в разделе [Использование расширений {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions).

Вам потребуется репозиторий для каждого создаваемого расширения. Имя репозитория должно начинаться с `gh-`. Остальная часть имени репозитория — это имя расширения. В корне репозитория должен быть исполняемый файл с тем же именем, что и у репозитория, либо к выпуску должен быть прикреплен набор предварительно скомпилированных двоичных исполняемых файлов.

{% note %}

**Примечание**. При использовании исполняемого скрипта рекомендуется использовать скрипт bash, так как bash — это широко применяемый интерпретатор. Вы можете использовать скрипты, отличные от bash, но для использования расширения у пользователя должен быть установлен необходимый интерпретатор. Чтобы не зависеть от наличия интерпретатора у пользователя, можно предварительно скомпилировать расширение.

{% endnote %}

## Создание интерпретируемого расширения с помощью `gh extension create`

{% note %}

**Примечание**. При выполнении команды `gh extension create` без аргументов запускается интерактивный мастер.

{% endnote %}

С помощью команды `gh extension create` можно создать проект для расширения, включая скрипт bash, содержащий начальный код.

1. Настройте новое расширение с помощью подкоманды `gh extension create`. Замените `EXTENSION-NAME` именем своего расширения.

    ```shell
    gh extension create EXTENSION-NAME
    ```

1. Следуйте выводимым инструкциям, чтобы завершить и при необходимости опубликовать расширение.

## Создание предварительно скомпилированного расширения на Go с помощью `gh extension create`

С помощью аргумента `--precompiled=go` можно создать проект на основе Go для расширения, включая формирование шаблонов Go, формирование шаблонов рабочих процессов и начальный код.

1. Настройте новое расширение с помощью подкоманды `gh extension create`. Замените `EXTENSION-NAME` именем своего расширения и укажите `--precompiled=go`.

    ```shell
    gh extension create --precompiled=go EXTENSION-NAME
    ```

1. Следуйте выводимым инструкциям, чтобы завершить и при необходимости опубликовать расширение.

## Создание предварительно скомпилированного расширения не на Go с помощью `gh extension create`

С помощью аргумента `--precompiled=other` можно создать проект для предварительно скомпилированного расширения не на Go, включая формирование шаблонов рабочих процессов.

1. Настройте новое расширение с помощью подкоманды `gh extension create`. Замените `EXTENSION-NAME` именем своего расширения и укажите `--precompiled=other`.

    ```shell
    gh extension create --precompiled=other EXTENSION-NAME
    ```

1. Добавьте исходный код расширения на предпочтительном компилируемом языке.

1. Заполните файл `script/build.sh` кодом так, чтобы сборка расширения могла быть выполнена автоматически.

1. Следуйте выводимым инструкциям, чтобы завершить и при необходимости опубликовать расширение.

## Создание интерпретируемого расширения вручную

1. Создайте для расширения локальный каталог `gh-EXTENSION-NAME`. Замените `EXTENSION-NAME` именем своего расширения. Например, `gh-whoami`.

1. В созданном каталоге добавьте исполняемый файл с тем же именем, что и у каталога.

  {% note %}

  **Примечание**. Файл должен быть исполняемым. В Unix можно выполнить в командной строке команду `chmod +x file_name`, чтобы сделать файл `file_name` исполняемым. В Windows можно выполнить `git init -b main`, `git add file_name`, а затем `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Напишите скрипт в исполняемом файле. Пример:

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. Из каталога установите расширение в качестве локального.

   ```shell
   gh extension install .
   ```

1. Убедитесь в том, что расширение работает. Замените `EXTENSION-NAME` именем своего расширения. Например, `whoami`.

   ```shell
   gh EXTENSION-NAME
   ```

1. Создайте репозиторий из каталога для публикации расширения. Замените `EXTENSION-NAME` именем своего расширения.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-EXTENSION-NAME --source=. --public --push
   ```

1. Если необходимо помочь другим пользователям найти расширение, добавьте к репозиторию тему `gh-extension`. В результате расширение появится на [странице темы `gh-extension`](https://github.com/topics/gh-extension). Дополнительные сведения о добавлении темы репозитория см. в разделе [Классификация репозиториев по темам](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics).

## Советы по написанию интерпретируемых расширений {% data variables.product.prodname_cli %}

### Работа с аргументами и флагами

Все аргументы командной строки после команды `gh my-extension-name` будут передаваться в скрипт расширения. В скрипте bash можно ссылаться на аргументы с помощью `$1`, `$2` и т. д. С помощью аргументов можно принимать вводимые пользователем данные или изменять выполнение скрипта.

Например, приведенный ниже скрипт обрабатывает несколько флагов. При вызове скрипта с флагом `-h` или `--help` он выводит текст справки вместо продолжения выполнения. При вызове скрипта с флагом `--name` он задает следующее после флага значение равным `name_arg`. При вызове скрипта с флагом `--verbose` он выводит другое приветствие.

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### Вызов основных команд в неинтерактивном режиме

Некоторые основные команды {% data variables.product.prodname_cli %} запрашивают у пользователя ввод данных. При написании скриптов с помощью этих команд запросы часто нежелательны. Чтобы избежать их вывода, укажите необходимые сведения явным образом с помощью аргументов.

Например, чтобы создать проблему программным способом, укажите заголовок и текст:

```shell
gh issue create --title "My Title" --body "Issue description"
```

### Программное получение данных

Многие основные команды поддерживают флаг `--json` для программного получения данных. Например, чтобы вернуть объект JSON со списком номеров, заголовков и состояний возможности слияния запросов на вытягивание, выполните следующую команду:

```shell
gh pr list --json number,title,mergeStateStatus
```

Если основной команды для получения определенных данных из GitHub не существует, можно использовать команду [`gh api`](https://cli.github.com/manual/gh_api) для доступа к API GitHub. Например, чтобы получить сведения о текущем пользователе, выполните следующую команду:

```shell
gh api user
```

Все команды, которые выводят данные JSON, также имеют параметры для фильтрации данных с целью их немедленного использования скриптами. Например, чтобы получить имя текущего пользователя, выполните следующую команду:

```shell
gh api user --jq '.name'
```

Дополнительные сведения см. на веб-сайте [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Создание предварительно скомпилированного расширения вручную

1. Создайте для расширения локальный каталог `gh-EXTENSION-NAME`. Замените `EXTENSION-NAME` именем своего расширения. Например, `gh-whoami`.

1. В созданном каталоге добавьте исходный код. Пример:

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. Из каталога установите расширение в качестве локального.

    ```shell
    gh extension install .
    ```

1. Выполните сборку кода. Например, при использовании Go замените `YOUR-USERNAME` на свое имя пользователя GitHub:

    ```shell
    go mod init github.com/YOUR-USERNAME/gh-whoami
    go mod tidy
    go build
    ```

1. Убедитесь в том, что расширение работает. Замените `EXTENSION-NAME` именем своего расширения. Например, `whoami`.

    ```shell
    gh EXTENSION-NAME
    ```

1. Создайте репозиторий из каталога для публикации расширения. Замените `EXTENSION-NAME` именем своего расширения.

  {% note %}

  **Примечание**. Не фиксируйте двоичный файл, созданный на этапе компиляции, в системе управления версиями.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-EXTENSION-NAME" >> .gitignore
    git add main.go go.* .gitignore && git commit -m 'Initial commit'
    gh repo create "gh-EXTENSION-NAME"
    ```

1. Создайте выпуск для предоставления доступа к предварительно скомпилированному расширению другим пользователям. Выполните компиляцию для каждой платформы, которая должна поддерживаться, прикрепив каждый двоичный файл к выпуску в качестве ресурса. Двоичные исполняемые файлы, прикрепляемые к выпускам, должны соответствовать соглашению об именовании и иметь суффикс ОС-АРХИТЕКТУРА\[РАСШИРЕНИЕ\].

  Например, расширение с именем `whoami`, скомпилированное для 64-разрядной версии Windows, будет иметь имя `gh-whoami-windows-amd64.exe`, а то же расширение, скомпилированное для 32-разрядной версии Linux, будет иметь имя `gh-whoami-linux-386`. Полный список сочетаний ОС и архитектуры, распознаваемых `gh`, см. в [этом исходном коде](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Примечание**. Чтобы расширение правильно выполнялось в Windows, его файл ресурса должен иметь расширение `.exe`. Для других операционных систем расширение не требуется.

  {% endnote %}

  Выпуски можно создавать из командной строки. Пример:

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-EXTENSION-NAME-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-EXTENSION-NAME-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-EXTENSION-NAME-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
