---
title: Создание репозитория
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Чтобы разместить проект на {% data variables.product.prodname_dotcom %}, необходимо создать репозиторий, чтобы он функционировал.'
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
ms.openlocfilehash: 6054d22495cf4b6c6329a545d628d5e9c143c21f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099244'
---
## Создание репозитория

{% ifversion fpt or ghec %}

В репозиториях {% data variables.product.prodname_dotcom %} можно хранить различные проекты, в том числе с открытым кодом. Проекты с открытым кодом позволяют предоставлять общий доступ к коду, чтобы создавать более качественное и надежное программное обеспечение. С помощью репозиториев можно вести совместную работу с другими пользователями и отслеживать ее. Дополнительные сведения см. в разделе [Сведения о репозиториях](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories). Дополнительные сведения о проектах с открытым кодом см. на сайте [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

В репозиториях {% data variables.product.product_name %} можно хранить различные проекты, в том числе проекты InnerSource. Благодаря InnerSource можно предоставлять общий доступ к коду, чтобы создавать более качественное и надежное программное обеспечение. Дополнительные сведения об InnerSource см. в техническом документе {% data variables.product.company_short %} [Введение в InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/).

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Примечания.** 
- Для проекта с открытым кодом можно создать общедоступные репозитории. При создании общедоступного репозитория обязательно включите [файл лицензии](https://choosealicense.com/), определяющий способ совместного использования проекта с другими пользователями. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- Вы также можете добавить файлы работоспособности сообщества в репозитории, настроить рекомендации по участию, сохранить репозитории в безопасносном месте и многое другое. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)". 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Введите короткое запоминающееся имя репозитория, Например, "hello-world".
  ![Поле для ввода имени репозитория](/assets/images/help/repository/create-repository-name.png)
3. При необходимости добавьте описание репозитория. Например, "Мой первый репозиторий на {% data variables.product.product_name %}".
  ![Поле для ввода описания репозитория](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

Поздравляем! Вы успешно создали первый репозиторий и инициализировали его с помощью файла *сведений*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. В командной строке перейдите в каталог, в котором нужно создать локальный клон нового проекта.
2. Чтобы создать репозиторий для проекта, используйте подкоманду `gh repo create`. При появлении запроса выберите **Создать репозиторий на GitHub с нуля** и введите имя нового проекта. Если вы хотите, чтобы проект принадлежал организации, а не вашей личной учетной записи, укажите имя организации и имя проекта с помощью `organization-name/project-name`. 
3. Следуйте интерактивным инструкциям. Чтобы клонировать репозиторий локально, при получении запроса подтвердите клонирование удаленного каталога проекта.  
4. Можно также пропустить запросы, указав имя репозитория и флаг видимости (`--public`, `--private` или `--internal`). Например, `gh repo create project-name --public`. Чтобы клонировать репозиторий локально, передайте флаг `--clone`.  Дополнительные сведения о возможных аргументах см. в [руководстве по GitHub CLI](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Фиксация первого изменения

{% webui %}

*[Фиксация](/articles/github-glossary#commit)* похожа на моментальный снимок всех файлов проекта на определенный момент времени.

При создании репозитория вы инициализировали его с помощью файла *сведений*. Файлы *сведений* — это отличное средство для более подробного описания проекта или добавления документации, например по установке или использованию проекта. Содержимое файла *сведений* автоматически отображается на главной странице репозитория.

Давайте зафиксируем изменение в файле *сведений*.

1. В списке файлов репозитория щелкните файл ***README.md***.
  ![Файл сведений в списке файлов](/assets/images/help/repository/create-commit-open-readme.png)
2. Над содержимым файла щелкните {% octicon "pencil" aria-label="The edit icon" %}.
3. На вкладке **Изменение файла** введите сведения о себе.
  ![Новое содержимое в файле](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. Проверьте внесенные в файл изменения. Новое содержимое будет выделено зеленым цветом.
  ![Представление предварительного просмотра файла](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Теперь, когда проект создан, можно начать фиксацию изменений.

Файлы *сведений* — это отличное средство для более подробного описания проекта или добавления документации, например по установке или использованию проекта. Содержимое файла *сведений* автоматически отображается на главной странице репозитория. Чтобы добавить файл *сведений*, выполните указанные ниже действия.

1. В командной строке перейдите в корневой каталог нового проекта. (Этот каталог был создан при выполнении команды `gh repo create`.)
1. Создайте файл *сведений* со сведениями о проекте.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Введите `git status`. Вы увидите, что есть неотслеживаемый файл `README.md`.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Подготовьте и зафиксируйте файл.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Отправьте изменения в свою ветвь.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Дальнейшие действия

Теперь вы создали репозиторий, включая файл *README* , и создали первую фиксацию на {% данных variables.location.product_location %}.

{% webui %}

* Теперь можно клонировать репозиторий {% data variables.product.prodname_dotcom %}, чтобы создать локальную копию на своем компьютере. В локальном репозитории можно выполнять фиксации и создавать запросы на вытягивание, чтобы передавать изменения в вышестоящий репозиторий. Дополнительные сведения см. в разделах [Клонирование репозитория](/github/creating-cloning-and-archiving-repositories/cloning-a-repository) и [Настройка GIT](/articles/set-up-git).

{% endwebui %}

* На {% data variables.product.prodname_dotcom %} можно найти интересные проекты и репозитории, в которые можно внести изменения, создав вилку репозитория. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
