---
title: Управление выпусками в репозитории
intro: Вы можете создавать выпуски для упаковки и доставки итераций проекта пользователям.
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107488'
---
## Сведения об управлении выпусками

Вы можете создавать выпуски с заметками о выпуске, упоминаниями (@mentions) участников и ссылками на двоичные файлы, а также редактировать или удалять существующие выпуски. Вы также можете создавать, изменять и удалять выпуски с помощью API выпусков. Дополнительные сведения см. в разделе "[Выпуски](/rest/releases/releases)" в документации по REST API.

{% ifversion fpt or ghec %} Вы также можете опубликовать действие из определенного выпуска в {% data variables.product.prodname_marketplace %}. Дополнительные сведения см. в разделе [Публикация действия в {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace).

Вы можете выбрать, следует ли включить объекты {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) в ZIP-файлы и архивы Tarball, создаваемые {% data variables.product.product_name %} для каждого выпуска. Дополнительные сведения см. в разделе [Управление объектами {% data variables.large_files.product_name_short %} в архивах репозитория](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository).
{% endif %}

## Создание выпуска

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Нажмите кнопку **Создать черновик нового выпуска**.

   {% ifversion fpt или ghec или ghes > 3.4 или ghae > 3,4 %}![Кнопка для создания черновика выпуска](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Кнопка для создания черновика выпуска](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Нажмите кнопку **"Выбрать тег**", введите номер версии для выпуска и нажмите клавишу **ВВОД**. Можно также выбрать существующий тег.

   ![Ввод тега](/assets/images/help/releases/releases-tag-create.png)
1. Если вы создаете тег, нажмите кнопку **Создать тег**.

   ![Снимок экрана: подтверждение создания нового тега](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. Если вы создали новый тег, в раскрывающемся меню выберите ветвь с проектом, который необходимо выпустить.

   
   ![Снимок экрана: раскрывающийся список для выбора ветви](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.release.previous-release-tag %}
1. Введите название и описание выпуска.
   {%- ifversion fpt или ghec или ghes > 3.3 или ghae > 3.3 %} Если вы @mention кто-либо в описании, опубликованный выпуск будет включать раздел **"Участники** " со списком аватаров всех упомянутых пользователей.
   {%- endif %} {% ifversion fpt или ghec или ghes > 3,3 %} Кроме того, вы можете автоматически создавать заметки о выпуске, щелкнув {% ifversion previous-release-tag %}**Generate release notes**{% else %}**Auto-generate release notes**{% endif %}. {% endif %} {% ifversion previous-release-tag %}

   ![Снимок экрана: описание выпусков](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Снимок экрана: описание выпусков](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Если в выпуск необходимо включить двоичные файлы, например скомпилированные программы, перетащите или вручную выберите файлы в области двоичных файлов.

   ![Анимированный GIF-файл предоставления DMG с выпуском](/assets/images/help/releases/releases_adding_binary.gif)

1. Чтобы уведомить пользователей о том, что выпуск не готов к использованию в рабочей среде и может быть нестабильным, установите флажок **Это предварительный выпуск**.

   ![Снимок экрана: флажок пометить выпуск как предварительный выпуск](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion release-set-latest-release %} 
1. При необходимости можно выбрать **"Задать как последнюю версию".** Если этот параметр не выбран, последняя метка выпуска будет автоматически назначена на основе семантического управления версиями.

   ![Снимок экрана: флажок для пометки выпуска как последнего выпуска](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- обсуждения ifversion %}
1. При необходимости, если в репозитории включены {% data variables.product.prodname_discussions %}, установите флажок **Создать обсуждение для этого выпуска**, а затем в раскрывающемся меню **Категория** выберите категорию для обсуждения выпуска.

   ![Снимок экрана: флажок для создания обсуждения выпуска и раскрывающегося меню для выбора категории](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. Если вы готовы опубликовать выпуск, нажмите кнопку **Опубликовать выпуск**. Чтобы продолжить работу с выпуском позже, нажмите кнопку **Сохранить черновик**.
   ![Кнопки "Опубликовать выпуск" и "Сохранить черновик"](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt или ghec или ghae > 3.3 %} Затем вы можете просмотреть опубликованные или черновики выпусков в веб-канале выпусков для репозитория. Дополнительные сведения см. в разделе "[Снимок экрана выпусков и тегов репозитория](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)".

   {% ifversion fpt или ghec или ghes > 3,4 или ghae > 3,3 %} ![ Опубликованный выпуск с @mentioned участниками](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![Опубликованный выпуск с @mentioned участниками](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Чтобы создать выпуск, используйте подкоманду `gh release create`. Замените `tag` на нужный тег.

   ```shell
   gh release create TAG
   ```

2. Следуйте интерактивным инструкциям. Кроме того, можно указать аргументы, чтобы пропустить эти инструкции. Дополнительные сведения о возможных аргументах см. в [руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_release_create). Например, эта команда создает предварительный выпуск с указанным названием и заметками.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %} Если в заметках есть @mention пользователи {% данных variables.product.product_name %}, опубликованный выпуск {% данных variables.product.prodname_dotcom_the_website %} будет включать раздел "Участники" со списком **аватаров** всех упомянутых пользователей.
{% endif %}

{% endcli %}

## Редактирование выпуска

{% webui %}

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.releases %} {% ifversion fpt или ghec или ghes > 3,4 или ghae > 3,3 %}
3. В правой части страницы рядом с выпуском, который нужно изменить, щелкните {% octicon "pencil" aria-label="The edit icon" %}.
  ![Изменение выпуска](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. В правой части страницы рядом с выпуском, который нужно изменить, нажмите кнопку **Изменить выпуск**.
  ![Изменение выпуска](/assets/images/help/releases/edit-release.png) {% endif %}
4. Измените сведения о выпуске в форме и нажмите кнопку **"Обновить выпуск**". {% ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} При добавлении или удалении любого из @mentions пользователей GitHub в описании эти пользователи будут добавлены или **удалены из списка аватаров в разделе "Участники** " выпуска.{ % endif %} ![Обновление выпуска](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

В настоящее время выпуски нельзя изменять с помощью {% data variables.product.prodname_cli %}.

{% endcli %}

## Удаление выпуска

{% webui %}

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.releases %} {% ifversion fpt или ghec или ghes > 3,4 или ghae > 3,3 %}
3. В правой части страницы рядом с выпуском, который нужно удалить, щелкните {% octicon "trash" aria-label="The trash icon" %}.
  ![Удаление выпуска](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. Щелкните имя выпуска, который нужно удалить.
  ![Ссылка для просмотра выпуска](/assets/images/help/releases/release-name-link.png)
4. В правом верхнем углу страницы щелкните **Удалить**.
  ![Кнопка удаления выпуска](/assets/images/help/releases/delete-release.png) {% endif %}
5. Нажмите кнопку **Удалить этот выпуск**.
  ![Подтверждение удаления выпуска](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Чтобы удалить выпуск, используйте подкоманду `gh release delete`. Замените `tag` на тег удаляемого выпуска. Чтобы пропустить подтверждение, используйте флаг `-y`.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
