---
title: Получение постоянных ссылок на файлы
intro: 'При просмотре файла на {% данных variables.location.product_location %}можно нажать клавишу "y", чтобы обновить URL-адрес до конкретной версии файла, который вы видите.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 21ba04eb41e5f32a2eca44616593827eeb7604d0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099292'
---
{% tip %}

**Совет.** Нажмите кнопку "?" на любой странице в {% data variables.product.product_name %}, чтобы просмотреть все доступные сочетания клавиш.

{% endtip %}

## В представлениях файлов отображается последняя версия ветви

При просмотре файла на {% данных variables.location.product_location %}обычно отображается версия в текущей головке ветви.  Пример:

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

ссылается на репозиторий GitHub `codeql` и отображает текущую версию файла `README.md` в ветви `main`.

Версия файла в главе ветви может меняться по мере внесения новых фиксаций, поэтому если вы скопировали обычный URL-адрес, содержимое файла может быть другим при последующем просмотре.

## Нажмите клавишу <kbd>Y</kbd>, чтобы получить постоянную ссылку на файл в определенной фиксации

Для постоянной ссылки на определенную версию файла вместо использования имени ветви в URL-адресе (т. е. часть `main` в приведенном выше примере) укажите идентификатор фиксации. Это позволит создать постоянную ссылку на точную версию файла в этой фиксации.  Пример:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

заменяет `main` конкретным идентификатором фиксации, и содержимое файла не изменится.

Вручную искать SHA фиксации неудобно, поэтому можно ввести <kbd>y</kbd>, чтобы автоматически обновить URL-адрес до версии в постоянной ссылке.  Затем можно скопировать URL-адрес, и любой пользователь, которому вы его отправите, увидит то же самое, что и вы.

{% tip %}

**Совет.** Можно указать любой идентификатор, который можно разрешить в фиксацию в URL-адресе, включая имена ветвей, конкретные SHA фиксации или теги.

{% endtip %}

## Создание постоянной ссылки на фрагмент кода

Вы можете создать постоянную ссылку на определенную строку или диапазон строк кода в определенной версии файла или запроса на вытягивание. Дополнительные сведения см. в разделе [Создание постоянной ссылки на фрагмент кода](/articles/creating-a-permanent-link-to-a-code-snippet/).

## Дополнительные материалы

- [Архивация репозитория GitHub](/articles/archiving-a-github-repository)
