---
title: Добавление лицензии в репозиторий
intro: 'Вы можете включить в репозиторий лицензию с открытым кодом, чтобы упростить участие других пользователей.'
redirect_from:
  - /articles/adding-a-license-to-a-repository
  - /github/building-a-strong-community/adding-a-license-to-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add a license to a repo
ms.openlocfilehash: 7961f690678d2bfe53726a33d02a54e95b9cfe78
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117640'
---
Если вы включите в репозиторий определяемую лицензию, люди, посещающие ваш репозиторий, увидят ее в верхней части страницы репозитория. Чтобы прочитать весь файл лицензии, щелкните имя лицензии.

![Заголовок репозитория с лицензией MIT](/assets/images/help/repository/repo-license-indicator.png)

Лицензии с открытым исходным кодом позволяют другим пользователям свободно использовать, изменять и распространять проект в вашем репозитории. Дополнительные сведения о лицензиях репозитория см. в статье "[Лицензирование репозитория](/articles/licensing-a-repository)".

## Включение лицензии с открытым исходным кодом в репозиторий

<!--Dotcom version uses the license tool-->
{% ifversion fpt or ghec %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите *LICENSE* или *LICENSE.md* (полностью в верхнем регистре).
4. Справа от поля имени файла щелкните **Выбрать шаблон лицензии**.
  ![Кнопка "Выбрать шаблон лицензии"](/assets/images/help/repository/license-tool.png)
5. В левой части страницы в разделе "Добавление лицензии в проект" просмотрите доступные лицензии, а затем выберите лицензию из списка.
  ![Список доступных лицензий](/assets/images/help/repository/license-tool-picker.png)
6. Щелкните **Проверить и отправить**.
  ![Кнопка "Проверить и отправить"](/assets/images/help/repository/license-review-tool.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.choose-commit-email %}
10. Нажмите кнопку **Зафиксировать новый файл**.
  ![Фиксация лицензии в ветви](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% ifversion ghes %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите *LICENSE* или *LICENSE.md* (полностью в верхнем регистре).
4. На вкладке **Изменение нового файла** вставьте полный текст лицензии, которую вы хотите использовать.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %}
7. Под полями сообщения о фиксации укажите, куда следует добавить фиксацию: в текущую ветвь или в новую. Если текущей ветвью является `main`, нужно создать новую ветвь для фиксации, а затем создать запрос на вытягивание. Дополнительные сведения см. в статье "[Создание запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)".
![Параметры фиксации ветви](/assets/images/help/repository/choose-commit-branch.png)
8. Нажмите кнопку **Зафиксировать новый файл**.
  ![Фиксация лицензии в ветви](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

## Дополнительные материалы

- "[Создание рекомендаций для участников репозитория](/articles/setting-guidelines-for-repository-contributors)"
