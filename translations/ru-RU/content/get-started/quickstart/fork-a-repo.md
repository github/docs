---
title: Ветвление репозитория
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 'Вилка — это новый репозиторий, который совместно использует параметры кода и видимости с исходным "вышестоящим" репозиторием.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 6756defd7567983cc7dbb1a9bfe36256e5b41a09
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191341'
---
## О вилках

{% data reusables.repositories.fork-definition-long %}  Дополнительные сведения см. в разделе [Работа с вилками](/github/collaborating-with-issues-and-pull-requests/working-with-forks).

### Предложение изменений в проект другого пользователя

Вилки можно использовать, например, для предложения изменений, призванных исправить ошибку. Вместо регистрации проблемы для обнаруженной ошибки можно выполнить указанные ниже действия.

- Создайте вилку репозитория.
- Внесите исправление.
- Отправьте запрос на вытягивание владельцу проекта.

### Использование чужого проекта в качестве отправной точки для реализации собственной идеи

Программное обеспечение с открытым кодом строится на той идее, что, предоставляя общий доступ к коду, мы можем создавать более надежное и эффективное ПО. Дополнительные сведения см. в [этом разделе](https://opensource.org/about) на сайте Open Source Initiative.

Дополнительные сведения о применении принципов открытый код к работе по разработке в организации по {% data variables.location.product_location %} см. в техническом документе {% data variables.product.prodname_dotcom %} "[Введение в innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% ifversion fpt or ghes or ghec %}

При создании общедоступного репозитория из вилки чужого проекта обязательно включите файл лицензии, определяющий способ совместного использования проекта с другими пользователями. Дополнительные сведения см. в разделе о [выборе лицензии для открытого кода](https://choosealicense.com/) на сайте choosealicense.com.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## Предварительные требования

Если вы еще этого не сделали, сначала настройте Git и проверку подлинности с помощью {% data variables.location.product_location %} из Git. Дополнительные сведения см. в статье [Настройка Git](/articles/set-up-git).

## Создание вилки репозитория

{% webui %}

Вы можете создать вилку проекта, чтобы предложить изменения в вышестоящем репозитории. В этом случае рекомендуется регулярно синхронизировать вилку с вышестоящим репозиторием. Для этого необходимо использовать GIT в командной строке. Вы можете попрактиковаться в настройке вышестоящего репозитория, используя репозиторий [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife), вилку которого вы только что создали.

1. На {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}перейдите в репозиторий [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) .
2. В правом верхнем углу страницы щелкните **Вилка**.
   ![Кнопка](/assets/images/help/repository/fork_button.png) fork{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. Выберите владельца для ответвленного репозитория.
   ![Страница создания вилки с выделенным раскрывающимся списком владельца](/assets/images/help/repository/fork-choose-owner.png)
4. По умолчанию вилки называются так же, как и их вышестоящие репозитории. Вы можете изменить имя вилки, чтобы избежать путаницы. 
   ![Страница создания вилки с выделенным полем имени репозитория](/assets/images/help/repository/fork-choose-repo-name.png)
5. При необходимости добавьте описание вилки.
   ![Страница создания вилки с выделенным полем описания](/assets/images/help/repository/fork-description.png)
6. Выберите, следует ли копировать в новую вилку только ветвь по умолчанию или все ветви. Для многих сценариев разветвления, таких как участие в проектах с открытым кодом, необходимо скопировать только ветвь по умолчанию. По умолчанию копируется только ветвь по умолчанию.
   ![Вариант копирования только ветви по умолчанию](/assets/images/help/repository/copy-default-branch-only.png)
7. Нажмите **Создать вилку**.
   ![Выделенная кнопка создания вилки](/assets/images/help/repository/fork-create-button.png)


{% note %}

**Примечание:** Если вы хотите скопировать дополнительные ветви из вышестоящего репозитория, это можно сделать на странице **Ветви** . Дополнительные сведения см. в разделе [Создание и удаление ветвей в репозитории](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). {% endnote %} {% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы создать вилку репозитория, используйте подкоманду `gh repo fork`.

```shell
gh repo fork REPOSITORY
```

Чтобы создать вилку в организации, используйте флаг `--org`.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## Клонирование вилки репозитория

Теперь у вас есть вилка репозитория Spoon-Knife, но нет файлов в этом репозитории локально на компьютере.

{% webui %}

1. На {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %} **перейдите к вилке** репозитория Spoon-Knife.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. Введите `git clone` и вставьте URL-адрес, скопированный ранее. Он будет выглядеть следующим образом с вашим именем пользователя {% data variables.product.product_name %} вместо `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. Нажмите клавишу **ВВОД**. Будет создан локальный клон.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remote: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы создать клон вилки, используйте флаг `--clone`.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## Настройка Git для синхронизации вилки с вышестоящим репозиторием

При создании вилки проекта для предложения изменений в вышестоящем репозитории можно настроить Git для извлечения изменений из вышестоящего репозитория в локальный клон вилки.

{% webui %}

1. На {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}перейдите в репозиторий [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) .
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. Измените каталоги на расположение клонированной вилки.
    - Чтобы перейти к домашнему каталогу, введите просто `cd` без дополнительного текста.
    - Чтобы получить список файлов и папок в текущем каталоге, введите `ls`.
    - Чтобы перейти в один из перечисленных каталогов, введите `cd your_listed_directory`.
    - Чтобы перейти на один каталог выше, введите `cd ..`.
5. Введите `git remote -v` и нажмите клавишу **ВВОД**. Вы увидите текущий настроенный удаленный репозиторий для вилки.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

6. Введите `git remote add upstream`, вставьте URL-адрес, скопированный на шаге 3, и нажмите клавишу **Enter**. Он будет выглядеть следующим образом.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. Чтобы проверить новый вышестоящий репозиторий, указанный для вилки, введите `git remote -v` еще раз. Url-адрес вилки должен отображаться как `origin`, а URL-адрес вышестоящего репозитория — .`upstream`
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

Теперь можно синхронизировать вилку с вышестоящим репозиторием с помощью нескольких команд GIT. Дополнительные сведения см. в разделе [Синхронизация вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы настроить удаленный репозиторий для вилки репозитория, используйте флаг `--remote`.

```shell
gh repo fork REPOSITORY --remote=true
```

Чтобы указать имя удаленного репозитория, используйте флаг `--remote-name`.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### Редактирование вилки

Вы можете вносить любые изменения в вилку, в том числе указанные ниже.

- **Создание ветвей.** [*Ветви*](/articles/creating-and-deleting-branches-within-your-repository/) позволяют создавать новые функции или проверять идеи, не подвергая риску главный проект.
- **Открытие запросов на вытягивание:** Если вы хотите вернуться к вышестоящему репозиторию, вы можете отправить запрос исходному автору, чтобы вытащить вилку в репозиторий, отправив [запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

## Поиск репозитория для создания вилки
Создайте вилку репозитория, чтобы приступить к участию в проекте. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}На странице [Обзор](https://github.com/explore) можно найти проекты и приступить к участию в работе над репозиториями с открытым кодом. Дополнительные сведения см. в разделе [Способы участия в создании открытого кода в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).

{% endif %}

## Next Steps

Вы создали вилку репозитория, клонировали ее и настроили вышестоящий репозиторий.

* Дополнительные сведения о клонировании вилки и синхронизации изменений в вилке репозитория с компьютера см. в разделе [Настройка Git](/articles/set-up-git).

* Вы также можете создать новый репозиторий для размещения всех ваших проектов и общего доступа к коду на {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
