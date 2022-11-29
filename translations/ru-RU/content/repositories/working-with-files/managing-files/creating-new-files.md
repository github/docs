---
title: Создание новых файлов
intro: 'Вы можете создавать новые файлы непосредственно в {% data variables.product.product_name %} в любом репозитории, для которого у вас есть доступ на запись.'
redirect_from:
  - /articles/creating-new-files
  - /github/managing-files-in-a-repository/creating-new-files
  - /github/managing-files-in-a-repository/managing-files-on-github/creating-new-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 1acc03b74e037db35a612cd9173e995bbf9e5271
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136571'
---
При создании файла в {% data variables.product.product_name %} необходимо учитывать следующее:

- При попытке создать новый файл в репозитории, к которому у вас нет доступа, мы создадим вилку проекта к вашей личной учетной записи и поможем отправить [запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) в исходный репозиторий после того, как вы зафиксируете внесенное изменение.
- Имена файлов, создаваемых через веб-интерфейс, могут содержать только буквенно-цифровые символы и дефисы (`-`). Чтобы использовать другие символы, [создайте и зафиксируйте файлы локально, а затем отправьте их в репозиторий в {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. В репозитории найдите папку, в которой нужно создать файл.
{% data reusables.files.add-file %}
4. В поле имени файла введите имя и расширение файла. Чтобы создать подкаталоги, введите разделитель каталогов `/`.
![Имя нового файла](/assets/images/help/repository/new-file-name.png)
5. На вкладке **Редактировать новый файл** добавьте в файл содержимое.
![Содержимое в новом файле](/assets/images/help/repository/new-file-content.png)
6. Чтобы просмотреть новое содержимое, нажмите **Предварительный просмотр**.
![Кнопка предварительного просмотра нового файла](/assets/images/help/repository/new-file-preview.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
