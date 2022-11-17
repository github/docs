---
title: Отправка изменений в GitHub
shortTitle: Pushing changes
intro: 'При локальной фиксации изменений в проекте вы можете передать эти изменения в {% data variables.product.prodname_dotcom %}, чтобы другие пользователи могли получить к ним доступ из удаленного репозитория.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092310'
---
## Сведения об отправке изменений в {% data variables.product.prodname_dotcom %}

При отправке изменений зафиксированные изменения в локальном репозитории отправляются в удаленный репозиторий в {% data variables.product.prodname_dotcom %}. Если вы изменяете проект локально и хотите, чтобы другие пользователи имели доступ к изменениям, необходимо отправить изменения в {% data variables.product.prodname_dotcom %}.

Перед отправкой изменений необходимо обновить локальную ветвь, чтобы включить все фиксации, добавленные в удаленный репозиторий. Если кто-то выполнил фиксации на удаленном компьютере, который не включен в локальную ветвь, {% data variables.product.prodname_desktop %} предложит получить новые фиксации перед отправкой изменений, чтобы избежать конфликтов при объединении. Дополнительные сведения см. в разделе [Синхронизация ветви](/desktop/contributing-to-projects/syncing-your-branch).

{% data reusables.desktop.protected-branches %}

## Отправка изменений в {% data variables.product.prodname_dotcom %}

{% note %}

**Примечание.** {% data variables.product.prodname_desktop %} отклоняет отправку, если она превышает определенные ограничения.

- Отправка содержит большой файл, размер которого превышает {% data variables.large_files.max_github_size %}.
- Общий размер отправки превышает {% data variables.large_files.max_file_size %}.

Если настроить {% data variables.large_files.product_name_long %} для отслеживания больших файлов, можно отправить большие файлы, которые в обычном случае были бы отклонены. Дополнительные сведения см. в разделе [Сведения о {% data variables.large_files.product_name_long %} и {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop).

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Если {% data variables.product.prodname_desktop %} предлагает получить новые фиксации из удаленного расположения, нажмите **Получить**.
  ![Кнопка "Получить"](/assets/images/help/desktop/fetch-newer-commits.png)
3. При необходимости щелкните **Создать запрос на вытягивание**, чтобы открыть запрос на вытягивание и совместно работать над изменениями. Дополнительные сведения см. в разделе [Создание проблемы или запроса на вытягивание](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) ![Кнопка "Создать запрос на вытягивание"](/assets/images/help/desktop/create-pull-request.png)

## Дополнительные материалы
- Термин [Отправка](/github/getting-started-with-github/github-glossary/#push) в глоссарии {% data variables.product.prodname_dotcom %}
- [Фиксация и проверка изменений в проекте](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)
