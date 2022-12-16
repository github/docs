---
title: Участие в проектах
intro: 'Узнайте, как внести свой вклад в проект с помощью создания вилок.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191349'
---
## Сведения о вилках

Если вы хотите внести свой вклад в чужой проект, но у вас нет доступа на запись в репозиторий, можно использовать рабочий процесс "вилка и запрос на вытягивание". 

{% data reusables.repositories.fork-definition-long %}

Вы можете внести свой вклад, отправив запросы на вытягивание из вилки в вышестоящий репозиторий. Дополнительные сведения см. в разделе [Создание вилки репозитория](/get-started/quickstart/fork-a-repo).

## Создание вилки репозитория

В этом руководстве используется [проект Spoon-Knife](https://github.com/octocat/Spoon-Knife), тестовый репозиторий, размещенный на {% data variables.product.prodname_dotcom_the_website %} и позволяющий опробовать рабочий процесс создания вилок и запросов на вытягивание.

1. Перейдите к проекту `Spoon-Knife` по адресу https://github.com/octocat/Spoon-Knife.
2. Нажмите кнопку **Вилка**.
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

**Примечание:** Если вы хотите скопировать дополнительные ветви из вышестоящего репозитория, это можно сделать на странице **Ветви** . Дополнительные сведения см. в разделе [Создание и удаление ветвей репозитория](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository).

{% endnote %} {% endif %}

## Клонирование вилки

Вы успешно создали вилку репозитория Spoon-Knife, но пока она существует только на {% data variables.product.product_name %}. Для работы над проектом необходимо клонировать ее на свой компьютер.

Клонировать вилку можно с помощью командной строки, {% data variables.product.prodname_cli %} или {% data variables.product.prodname_desktop %}.

{% webui %}

1. На {% data variables.product.product_name %} перейдите к **своей вилке** репозитория Spoon-Knife.
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
  > remove: Total 10 (delta 1), reused 10 (delta 1)
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

## Создание ветви для работы

Перед внесением изменений в проект необходимо создать новую ветвь и извлечь ее. Сохраняя изменения в собственной ветви, вы следите за потоком GitHub и гарантируете, что в будущем будет проще вносить свой вклад в тот же проект. Дополнительные сведения см. в разделе [GitHub Flow](/get-started/quickstart/github-flow#following-github-flow).

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

Дополнительные сведения о создании ветвей и управлении ими в {% data variables.product.prodname_desktop %} см. в разделе [Управление ветвями](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches).

{% enddesktop %}

## Внесение и отправка изменений

Внесите несколько изменений в проект в любимом текстовом редакторе, например [Visual Studio Code](https://code.visualstudio.com). Например, можно изменить текст в файле `index.html`, добавив свое имя пользователя GitHub.

Когда вы будете готовы отправить изменения, подготовьте и зафиксируйте их. `git add .` сообщает GIT, что вы хотите включить все изменения в следующую фиксацию. `git commit` создает моментальный снимок этих изменений.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

Дополнительные сведения о подготовке и фиксации изменений в {% data variables.product.prodname_desktop %} см. в разделе [Фиксация и проверка изменений в проекте](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit).

{% enddesktop %}

Когда вы создаете и фиксируете файлы, вы по сути сообщаете GIT, что нужно сделать моментальный снимок изменений. После этого вы можете продолжить вносить изменения и создавать дополнительные моментальные снимки в виде фиксаций.

На данный момент изменения существуют только локально. Когда вы будете готовы передать изменения на {% data variables.product.product_name %}, отправьте их в удаленный репозиторий.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

Дополнительные сведения об отправке изменений на {% data variables.product.prodname_desktop %} см. в разделе [Отправка изменений на GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github).

{% enddesktop %}

## Выполнение запроса на вытягивание

Наконец, вы готовы предложить изменения для основного проекта. Это последний этап работы с вилкой чужого проекта, и, пожалуй, самый важный. Если вы внесли изменение, которое, как вам кажется, принесет пользу всему сообществу, определенно стоит подумать о том, чтобы поделиться им.

Для этого перейдите к репозиторию на {% data variables.product.product_name %}, где находится проект. В данном примере это будет `https://github.com/<your_username>/Spoon-Knife`. Вы увидите баннер с сообщением о том, что до слияния вашей ветви с `octocat:main` осталась одна фиксация. Щелкните **Принять участие**, а затем — **Открыть запрос на вытягивание**.

На {% data variables.product.product_name %} откроется страница с различиями между вашей вилкой и репозиторием `octocat/Spoon-Knife`. Щелкните **Создать запрос на вытягивание**.

{% data variables.product.product_name %} перенаправит вас на страницу, где можно ввести заголовок и описание изменений. Очень важно предоставить как можно более подробную информацию и обоснование для запроса на вытягивание. Исходя из этого владелец проекта сможет решить, является ли ваше изменение таким полезным для всех, каким вы его считаете. Наконец, щелкните **Создать запрос на вытягивание**.

## Управление отзывами

Запросы на вытягивание открыты для обсуждения. Над проектом Octocat ведется очень активная работа, поэтому, вероятно, ваши изменения не будут добавлены. В случае с другими проектами не обижайтесь, если владелец проекта отклонит ваш запрос на вытягивание или запросит дополнительные сведения о его причинах. Возможно даже, что владелец проекта решит не выполнять слияние вашего запроса на вытягивание, и это вполне нормально. Изменения существуют в вилке. Но кто знает, может быть, кому-нибудь когда-нибудь ваши изменения покажутся гораздо более ценными, чем исходный проект.

## Поиск проектов

Вы успешно создали вилку и внесли свой вклад в репозиторий. Продолжайте участвовать в работе сообщества!{% ifversion fpt %} Дополнительные сведения см. в разделе [Способы участия в создании открытого кода на GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}
