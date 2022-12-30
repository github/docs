---
title: Удаление файлов в репозитории
intro: 'Вы можете удалить отдельный файл{% ifversion fpt or ghes or ghec %} или весь каталог{% endif %} в репозитории на {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136565'
---
## Сведения об удалении файла{% ifversion fpt or ghes or ghec %} и каталога{% endif %}

Вы можете удалить отдельный файл в репозитории{% ifversion fpt or ghes or ghec %} или весь каталог, включая все файлы в каталоге{% endif %}.

При попытке удалить файл{% ifversion fpt or ghes or ghec %} или каталог{% endif %} в репозитории, в котором у вас нет разрешений на запись, мы создадим вилку проекта в личную учетную запись и поможем отправить запрос на вытягивание в исходный репозиторий после фиксации изменения. Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

Если файл{% ifversion fpt or ghes or ghec %} или каталог{% endif %}, который вы удалили, содержит конфиденциальные данные, данные по-прежнему будут доступны в журнале репозитория Git. Чтобы полностью удалить файл из {% data variables.product.product_name %}, необходимо удалить файл из журнала репозитория. Дополнительные сведения см. в разделе [Удаление конфиденциальных данных из репозитория](/github/authenticating-to-github/removing-sensitive-data-from-a-repository).

## удаление файла;

1. Перейдите к файлу в репозитории, который требуется удалить.
2. В верхней части файла щелкните значок {% octicon "trash" aria-label="The trash icon" %}.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## Удаление каталога

1. Перейдите к каталогу в репозитории, который требуется удалить.
1. В правом верхнем углу щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем — **Удалить каталог**.
  ![Кнопка для удаления каталога](/assets/images/help/repository/delete-directory-button.png)
1. Просмотрите файлы, которые будут удалены.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
