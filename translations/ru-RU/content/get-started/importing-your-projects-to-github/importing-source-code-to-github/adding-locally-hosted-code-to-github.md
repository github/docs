---
title: Добавление локально размещенного кода в GitHub
intro: 'Узнайте, как добавить существующий исходный код или репозитории в {% data variables.product.product_name %} из командной строки с помощью {% data variables.product.prodname_cli %} или команд Git. Затем поделитесь своим кодом и пригласите других пользователей к совместной работе с вами.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: f7b8a56f2e00bbed44cb621b9f3b1701bf7422f5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094180'
---
## Сведения о добавлении существующего исходного кода в {% data variables.product.product_name %}

Если у вас есть исходный код или репозитории, хранящиеся локально на компьютере или в частной сети, их можно добавить в {% data variables.product.product_name %}, введя необходимые команды в терминале. При этом можно вводить команды Git напрямую или воспользоваться {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} — это инструмент с открытым исходным кодом для использования {% data variables.product.prodname_dotcom %} из командной строки компьютера. {% data variables.product.prodname_cli %} может упростить процесс добавления существующего проекта в {% data variables.product.product_name %} с помощью командной строки. Дополнительные сведения о {% data variables.product.prodname_cli %} см. в статье [Сведения о {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli).

{% tip %}

**Совет.** Если вам удобнее работать в графическом пользовательском интерфейсе, попробуйте добавить проект с помощью {% data variables.product.prodname_desktop %}. Дополнительные сведения см. в разделе [Добавление репозитория с локального компьютера в GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop) в *справке по {% data variables.product.prodname_desktop %}* .

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Добавление локального репозитория в {% data variables.product.product_name %} с помощью {% data variables.product.prodname_cli %}

1. В командной строке перейдите в корневой каталог проекта.
1. Инициализируйте локальный каталог как репозиторий Git.

    ```shell
    git init -b main
    ```

1. Выполните подготовку и фиксацию всех файлов проекта.

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. Чтобы создать репозиторий для проекта на GitHub, используйте подкоманду `gh repo create`. При появлении запроса выберите **Отправить существующий локальный репозиторий в GitHub** и введите нужное имя репозитория. Если вы хотите, чтобы проект принадлежал организации, а не вашей учетной записи пользователя, укажите имя организации и имя проекта с помощью `organization-name/project-name`.

1. Следуйте интерактивным инструкциям. Чтобы добавить удаленный репозиторий и отправить его, подтвердите ответ "Да" при запросе на добавление удаленного репозитория и отправку фиксаций в текущую ветвь.

1. Кроме того, чтобы пропустить все запросы, укажите путь к репозиторию с флагом `--source` и передайте флаг видимости (`--public`, `--private` или `--internal`). Например, `gh repo create --source=. --public`. Укажите удаленный репозиторий с флагом `--remote`. Чтобы отправить фиксации, передайте флаг `--push`. Дополнительные сведения о возможных аргументах см. в [руководстве по GitHub CLI](https://cli.github.com/manual/gh_repo_create).

## Добавление локального репозитория в {% data variables.product.product_name %} с помощью Git

{% mac %}

1. [Создайте репозиторий](/repositories/creating-and-managing-repositories/creating-a-new-repository) для {% данных variables.location.product_location %}. Чтобы избежать ошибок, не инициализируйте новый репозиторий с использованием файла *README*, лицензии или файлов `gitignore`. Эти файлы можно добавить после отправки проекта в {% data variables.product.product_name %}.
    ![Раскрывающийся список "Создание репозитория"](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Измените текущий рабочий каталог на локальный проект.
4. Используйте команду `init`, чтобы инициализировать локальный каталог как репозиторий Git. По умолчанию начальная ветвь называется `master`.
   
   Если вы используете Git 2.28.0 или более позднюю версию, можно задать имя ветви по умолчанию с помощью `-b`.

   ``` shell
   $ git init -b main
   ```

   Если вы используете Git 2.27.1 или более раннюю версию, можно задать имя ветви по умолчанию с помощью `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Добавьте файлы в новый локальный репозиторий. При этом они будут подготовлены для первой фиксации.
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Зафиксируйте подготовленные файлы в локальном репозитории.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. В верхней части репозитория на странице быстрой настройки {% ifversion ghae %}{% данных variables.product.product_name %}{%else %}{% данных variables.location.product_location %}{% endif %}, щелкните {% octicon "clippy" aria-label="The copy to clipboard icon" %}, чтобы скопировать URL-адрес удаленного репозитория.
    ![Копирование поля URL-адреса удаленного репозитория](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. В терминале [добавьте URL-адрес удаленного репозитория](/github/getting-started-with-github/managing-remote-repositories), в который будет отправлен локальный репозиторий.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Отправьте изменения](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) в локальном репозитории в {% данных variables.location.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Создайте репозиторий](/articles/creating-a-new-repository) для {% данных variables.location.product_location %}. Чтобы избежать ошибок, не инициализируйте новый репозиторий с использованием файла *README*, лицензии или файлов `gitignore`. Эти файлы можно добавить после отправки проекта в {% data variables.product.product_name %}.
    ![Раскрывающийся список "Создание репозитория"](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Измените текущий рабочий каталог на локальный проект.
4. Используйте команду `init`, чтобы инициализировать локальный каталог как репозиторий Git. По умолчанию начальная ветвь называется `master`.
   
   Если вы используете Git 2.28.0 или более позднюю версию, можно задать имя ветви по умолчанию с помощью `-b`.

   ``` shell
   $ git init -b main
   ```

   Если вы используете Git 2.27.1 или более раннюю версию, можно задать имя ветви по умолчанию с помощью `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Добавьте файлы в новый локальный репозиторий. При этом они будут подготовлены для первой фиксации.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Зафиксируйте подготовленные файлы в локальном репозитории.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. В верхней части репозитория на странице быстрой настройки {% ifversion ghae %}{% данных variables.product.product_name %}{%else %}{% данных variables.location.product_location %}{% endif %}, щелкните {% octicon "clippy" aria-label="The copy to clipboard icon" %}, чтобы скопировать URL-адрес удаленного репозитория.
    ![Копирование поля URL-адреса удаленного репозитория](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. В командной строке [добавьте URL-адрес удаленного репозитория](/github/getting-started-with-github/managing-remote-repositories), в который будет отправлен локальный репозиторий.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Отправьте изменения](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) в локальном репозитории в {% данных variables.location.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Создайте репозиторий](/articles/creating-a-new-repository) для {% данных variables.location.product_location %}. Чтобы избежать ошибок, не инициализируйте новый репозиторий с использованием файла *README*, лицензии или файлов `gitignore`. Эти файлы можно добавить после отправки проекта в {% data variables.product.product_name %}.
    ![Раскрывающийся список "Создание репозитория"](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. Измените текущий рабочий каталог на локальный проект.
4. Используйте команду `init`, чтобы инициализировать локальный каталог как репозиторий Git. По умолчанию начальная ветвь называется `master`.
   
   Если вы используете Git 2.28.0 или более позднюю версию, можно задать имя ветви по умолчанию с помощью `-b`.

   ``` shell
   $ git init -b main
   ```

   Если вы используете Git 2.27.1 или более раннюю версию, можно задать имя ветви по умолчанию с помощью `&& git symbolic-ref HEAD refs/heads/main`.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. Добавьте файлы в новый локальный репозиторий. При этом они будут подготовлены для первой фиксации.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Зафиксируйте подготовленные файлы в локальном репозитории.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. В верхней части репозитория на странице быстрой настройки {% ifversion ghae %}{% данных variables.product.product_name %}{%else %}{% данных variables.location.product_location %}{% endif %}, щелкните {% octicon "clippy" aria-label="The copy to clipboard icon" %}, чтобы скопировать URL-адрес удаленного репозитория.
    ![Копирование поля URL-адреса удаленного репозитория](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. В терминале [добавьте URL-адрес удаленного репозитория](/github/getting-started-with-github/managing-remote-repositories), в который будет отправлен локальный репозиторий.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Отправьте изменения](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) в локальном репозитории в {% данных variables.location.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Дополнительные материалы

- [Добавление файла в репозиторий](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)
