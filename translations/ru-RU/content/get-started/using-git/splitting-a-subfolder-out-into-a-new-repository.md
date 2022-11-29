---
title: Разделение подпапки в новый репозиторий
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Вы можете преобразовать папку в репозитории Git в совершенно новый репозиторий.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172912'
---
При создании нового клона репозитория вы не потеряете журнал Git или изменения при разделении папки в отдельный репозиторий.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Измените текущую рабочую папку на расположение, где должен находиться клонированный репозиторий.

4. Клонируйте репозиторий, содержащий подпапку.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. Измените текущую рабочую папку на клонированный репозиторий.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. Чтобы отфильтровать вложенную папку из остальных файлов в репозитории, установите [`git-filter-repo`](https://github.com/newren/git-filter-repo), а затем выполните команду `git filter-repo` со следующими аргументами.
   - `FOLDER-NAME`: папка в проекте, в которой вы хотите создать отдельный репозиторий.

   {% windows %}

   {% tip %}

   **Совет.** Пользователи Windows должны применять `/` для разделения папок.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   Теперь репозиторий должен содержать только те файлы, которые были в подпапках.

6. [Создайте репозиторий](/articles/creating-a-new-repository/) на {% data variables.product.product_name %}.

7. В верхней части нового репозитория на странице быстрой установки {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} щелкните {% octicon "clippy" aria-label="The copy to clipboard icon" %}, чтобы скопировать URL-адрес удаленного репозитория.
    
   ![Копирование поля URL-адреса удаленного репозитория](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Совет:** Сведения о различиях между URL-адресами HTTPS и SSH см. в разделе [Сведения об удаленных репозиториях](/github/getting-started-with-github/about-remote-repositories).

   {% endtip %}

8. Проверьте существующее удаленное имя репозитория. Например, к распространенным вариантам относятся `origin` и `upstream`.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. Настройте новый удаленный URL-адрес для нового репозитория, используя существующее удаленное имя и URL-адрес удаленного репозитория, скопированный на шаге 7.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. Убедитесь, что удаленный URL-адрес изменился с учетом нового имени репозитория.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. Отправьте изменения в новый репозиторий на {% data variables.product.product_name %}.
    ```shell
    git push -u origin BRANCH-NAME
    ```
