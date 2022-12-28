---
title: Совместная работа с помощью Git Large File Storage
intro: 'Включив {% data variables.large_files.product_name_short %}, вы сможете получать, изменять и отправлять большие файлы так же, как и файлы, которыми управляет Git. Однако пользователи без {% data variables.large_files.product_name_short %} используют другой рабочий процесс.'
redirect_from:
  - /articles/collaboration-with-large-file-storage
  - /articles/collaboration-with-git-large-file-storage
  - /github/managing-large-files/collaboration-with-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/collaboration-with-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Collaboration
ms.openlocfilehash: 4589487059e2949da64ebf40e8a602703fed2c01
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136511'
---
Если у участников совместной работы не установлен {% data variables.large_files.product_name_short %}, у них не будет доступа к исходному большому файлу. Если они попытаются клонировать репозиторий, они смогут получить только файлы указателя и не будут иметь доступа к фактическим данным.

{% tip %}

**Совет.** Чтобы помочь пользователям без {% data variables.large_files.product_name_short %}, установите для участников репозитория правила работы с большими файлами. Например, попросите участников не изменять большие файлы или отправлять изменения в службу обмена файлами, такую как [Dropbox](http://www.dropbox.com/) или <a href="https://drive.google.com/" data-proofer-ignore>Google Диск</a>. Дополнительные сведения см. в разделе [Настройка инструкций для участников репозитория](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).

{% endtip %}

## Просмотр больших файлов в запросах на вытягивание

{% data variables.product.product_name %} не отрисовывает объекты {% data variables.large_files.product_name_short %} в запросах на вытягивание. Отображается только файл указателя:

![Пример запроса на вытягивание для больших файлов](/assets/images/help/large_files/large_files_pr.png)

Дополнительные сведения о файлах указателя см. в разделе [Сведения о {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format).

Чтобы просмотреть изменения, внесенные в большие файлы, извлеките запрос на вытягивание локально для сравнения различий. Дополнительные сведения см. в разделе [Локальное извлечение запросов на вытягивание](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally).

{% ifversion fpt or ghec %}

## Отправка больших файлов в вилки

Отправка больших файлов в вилки репозитория учитывается в квоте по пропускной способности и хранилищу родительского репозитория, а не в квоте владельца вилки.

Вы можете отправить объекты {% data variables.large_files.product_name_short %} в общедоступные вилки, если в сети репозитория уже есть объекты {% data variables.large_files.product_name_short %} или у вас есть доступ на запись в корне сети репозитория.

{% endif %}

## Дополнительные материалы

- [Дублирование репозитория с объектами Git Large File Storage](/articles/duplicating-a-repository/#mirroring-a-repository-that-contains-git-large-file-storage-objects)
